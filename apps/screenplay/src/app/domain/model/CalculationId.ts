import cuid from "cuid"
import { ensure, isDefined, isString, TinyType } from "tiny-types"

export class CalculationId extends TinyType {
  static create() {
    return new CalculationId(cuid())
  }

  constructor(public readonly value: string) {
    super()
    ensure(CalculationId.name, value, isDefined(), isString())
  }
}
