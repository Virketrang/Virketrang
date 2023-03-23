interface RequestOptions extends Omit<RequestInit, 'body' | 'method'> {
    errorMessage?: string;
    useBaseUrl?: boolean;
    json?: boolean;
}

export default RequestOptions;
