type Failed = {
    status: 'failed'
    message: string | { path: (string | number)[]; message: string; code: string }[]
    statusCode: number
}

export default Failed
