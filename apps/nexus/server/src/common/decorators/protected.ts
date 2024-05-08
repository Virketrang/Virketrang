import AuthenticationMiddleware from '../../modules/authentication/authentication/authentication.middleware'

export default function Protected() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.protected = AuthenticationMiddleware.isAuthenticated
    }
}
