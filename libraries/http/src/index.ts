import Options from './types/options';

export default abstract class HttpClient {
    public static baseURL: URL | string | undefined = '';
    public static defaultErrorMessage: string | undefined;

    public static async get<T>(url: RequestInfo | URL, options: Options = { useBaseUrl: true }): Promise<T> {
        const { errorMessage, useBaseUrl, ...rest } = options!;

        const response = await fetch(useBaseUrl ? `${HttpClient.baseURL}${url}` : url, rest);

        if (!response.ok) throw new Error(errorMessage || this.defaultErrorMessage || 'Indsæt fejlmelding!');

        return response.json();
    }

    public static async post<T>(
        url: RequestInfo | URL,
        payload: any,
        options: Options = { useBaseUrl: true, json: true }
    ): Promise<T> {
        const { errorMessage, useBaseUrl, json, ...rest } = options!;

        const stringified = JSON.stringify(payload);

        if (json) rest.headers = { ...rest.headers, 'Content-Type': 'application/json' };

        const response = await fetch(useBaseUrl ? `${HttpClient.baseURL}${url}` : url, {
            body: json ? stringified : payload,
            ...rest,
            method: 'POST',
        });

        console.log(response);

        if (!response.ok) throw new Error(errorMessage || this.defaultErrorMessage || 'Indsæt fejlmelding!');

        return response.json();
    }
}
