import { Product } from '@/entities'

export default function sanitizeObject(queryParameters: any): any {
    return Object.entries(queryParameters)
        .filter(([_, v]) => v != null)
        .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {})
}
