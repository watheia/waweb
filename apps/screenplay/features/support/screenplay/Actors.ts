import { Calculator } from "../../../src/app"
import { Actor, Cast } from "@serenity-js/core"

import { InteractDirectly } from "./abilities"

export class Actors implements Cast {
  prepare(actor: Actor): Actor {
    return actor.whoCan(InteractDirectly.with(new Calculator()))
  }
}
