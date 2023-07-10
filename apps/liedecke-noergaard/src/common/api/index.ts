import { Entity, Http, SORTING_OPTION } from '@/packages/index'

import { __server__ } from '@/common'

export abstract class API {
    private static readonly url = __server__

    public static async getProducts({ sortBy }: { sortBy: SORTING_OPTION }): Http.Response<Entity.Product> {
        const response = await fetch(this.url + 'products?' + `sort=${sortBy}`)

        return await response.json()
    }

    public static async getDivisions(): Http.Response<Entity.Division.Retrieve> {
        const response = await fetch(this.url + 'divisions')

        return await response.json()
    }
}
