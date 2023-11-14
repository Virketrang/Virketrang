interface FixedAssetGroup extends Entity.BaseEntity {}

declare namespace FixedAssetGroup {
    type Create = Omit<FixedAssetGroup, keyof Entity.BaseEntity | 'product'>

    type Update = Partial<Create>
}

export default FixedAssetGroup
