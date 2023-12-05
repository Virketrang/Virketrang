import { ValidationTargets } from 'hono'
import { ValidationFunction, validator } from 'hono/validator'
validator('json', (value) => value)

export default function Validator(
    validationTarget: keyof ValidationTargets,
    validationFunction: ValidationFunction<any, any, any, string>
) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.validator = validator(validationTarget, validationFunction)
    }
}
