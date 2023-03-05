import Options from './types/options';

export default abstract class HttpClient {
    public static baseURL: URL | undefined;
    public static defaultErrorMessage: string | undefined;

    public static async get<T>(url: RequestInfo | URL, options: Options = { useBaseUrl: true }): Promise<T> {
        const { errorMessage, useBaseUrl, ...rest } = options!;

        const request = await fetch(useBaseUrl ? `${HttpClient.baseURL}${url}` : url, rest);

        if (!request.ok) throw new Error(errorMessage || this.defaultErrorMessage || 'Indsæt fejlmelding!');

        return request.json();
    }
}
