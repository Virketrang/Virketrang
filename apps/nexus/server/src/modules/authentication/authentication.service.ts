const scrypt = promisify(crypto.scrypt)

export default abstract class AuthenticationService {
    public static async hash(password: string): Promise<string> {
        const salt = crypto.randomBytes(8).toString('hex')
        const derivedKey = (await scrypt(password, salt, 64)) as Buffer

        return `${salt}:${derivedKey.toString('hex')}`
    }

    public static async compare(password: string, hash: string): Promise<boolean> {
        const [salt, key] = hash.split(':')

        const keyBuffer = Buffer.from(key, 'hex')
        const derivedKey = (await scrypt(password, salt, 64)) as Buffer

        return crypto.timingSafeEqual(keyBuffer, derivedKey)
    }

    public static async sign(payload: object) {
        return jwt.sign(payload, process.env.JWT_SECRET, 'HS256')
    }

    public static async verify<T>(token: string) {
        return (await jwt.verify(token, process.env.JWT_SECRET, 'HS256')) as T | undefined
    }
}
