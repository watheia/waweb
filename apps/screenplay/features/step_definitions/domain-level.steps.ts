import { Given, Then, When } from "@cucumber/cucumber"
import { Operand, Operator } from "../../src/app"
import { Ensure, equals } from "@serenity-js/assertions"
import { actorCalled, actorInTheSpotlight } from "@serenity-js/core"
import {
  EnterOperand,
  RequestANewCalculation,
  ResultOfCalculation,
  UseOperator
} from "../support/screenplay"

Given(/^(.*) has requested a new calculation/, (actorName: string) =>
  actorCalled(actorName).attemptsTo(RequestANewCalculation())
)

When(/^(.*) enters (\d+)$/, (actorName: string, operandValue: string) => {
  const actor = !isPronoun(actorName) ? actorCalled(actorName) : actorInTheSpotlight()

  return actor.attemptsTo(EnterOperand(new Operand(parseFloat(operandValue))))
})

When(/(?:he|she|they) uses? the (.) operator/, (operatorSymbol: string) =>
  actorInTheSpotlight().attemptsTo(UseOperator(Operator.fromString(operatorSymbol)))
)

Then(/(?:he|she|they) should get a result of (\d+)/, (expectedResult: string) =>
  actorInTheSpotlight().attemptsTo(
    Ensure.that(ResultOfCalculation(), equals(parseFloat(expectedResult)))
  )
)

function isPronoun(actorName: string) {
  return !!~["he", "she", "they"].indexOf(actorName)
}
