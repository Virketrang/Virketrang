interface FixedAsset extends Workspace.Entity.BaseEntity {
    name: string

    type: Workspace.Enum.FIXED_ASSET_TYPE
}

declare namespace FixedAsset {
    type Create = Omit<FixedAsset, keyof Workspace.Entity.BaseEntity>

    type Update = Partial<Create>
}

export default FixedAsset
