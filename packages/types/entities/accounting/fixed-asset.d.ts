interface FixedAsset extends Entity.BaseEntity {
    name: string

    type: Enum.FIXED_ASSET_TYPE
}

declare namespace FixedAsset {
    type Create = Omit<FixedAsset, keyof Entity.BaseEntity>

    type Update = Partial<Create>
}

export default FixedAsset
