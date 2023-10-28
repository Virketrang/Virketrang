interface FixedAssetGroup extends Workspace.Entity.BaseEntity {}

declare namespace FixedAssetGroup {
    type Create = Omit<FixedAssetGroup, keyof Workspace.Entity.BaseEntity | 'product'>

    type Update = Partial<Create>
}

export default FixedAssetGroup
