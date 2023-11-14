export default abstract class Constants {
    public static readonly PORT = parseInt(process.env.PORT || '8080')
    public static readonly HOST = process.env.HOST || 'http://localhost'
    public static readonly PRODUCTION = process.env.NODE_ENV === 'production'
}
