import { ensure, hasLengthOf, isDefined, isString, TinyType } from 'tiny-types';
import * as operators from './operators';

export abstract class Operator extends TinyType {
    static fromString(symbol: string): Operator {
        const found = Object.keys(operators)
            .map(name => operators[name])
            .find(operatorType => operatorType.Symbol === symbol);

        if (! found) {
            return undefined;
        }

        return new found();
    }

    protected constructor(public readonly value: string) {
        super();
        ensure(Operator.name, value, isDefined(), isString(), hasLengthOf(1));
    }
}
