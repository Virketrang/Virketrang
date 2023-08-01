import { SORTING_OPTION } from '@/enums'

import { __server__ } from '@/liedecke-noergaard/common'

export abstract class API {
    private static readonly url = __server__

    public static async getProducts({
        sortBy
    }: {
        sortBy: SORTING_OPTION
    }): Workspace.HTTP.Response<Workspace.Entity.Product> {
        const response = await fetch(this.url + 'products?' + `sort=${sortBy}`)

        return await response.json()
    }

    public static async getDivisions(): Workspace.HTTP.Response<Workspace.Entity.Division> {
        const response = await fetch(this.url + 'divisions')

        return await response.json()
    }
}
