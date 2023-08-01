export type Response<T> = Promise<Workspace.HTTP.Success<T> | Workspace.HTTP.Failure | Workspace.HTTP.Error>

export default Response
