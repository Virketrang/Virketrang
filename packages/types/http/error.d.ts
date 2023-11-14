type Error = {
    status: 'error'
    message: string | { path: (string | number)[]; message: string; code: string }[]
    statusCode: number
}

export default Error
