interface FixedAssetRegister extends Entity.BaseEntity {}

declare namespace FixedAssetRegister {
    type Create = Omit<FixedAssetRegister, keyof Entity.BaseEntity | 'product'>

    type Update = Partial<Create>
}

export default FixedAssetRegister
