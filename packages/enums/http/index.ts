export { default as Status } from './status.enum'

import Status from './status.enum'

export default abstract class Http {
    public static readonly Status = Status
}
