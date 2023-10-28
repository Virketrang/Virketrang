interface FixedAssetRegister extends Workspace.Entity.BaseEntity {}

declare namespace FixedAssetRegister {
    type Create = Omit<FixedAssetRegister, keyof Workspace.Entity.BaseEntity | 'product'>

    type Update = Partial<Create>
}

export default FixedAssetRegister
