export default abstract class ImageService {
    public static readonly storage = new Storage({
        projectId: 'liedecke-noergaard',
        keyFilename: 'private/nexus_images.json'
    })
    public static readonly bucket = ImageService.storage.bucket(process.env.BUCKET_NAME)

    public static upload({ width, height, alt, url, owner_id, file_name, buffer }: Entity.Image.Create) {
        const file = this.bucket.file(file_name)

        const stream = file.createWriteStream()

        const result = stream.end(buffer)

        const image = Image.repository.insert({ width, height, url, file_name })

        return result
    }
}
