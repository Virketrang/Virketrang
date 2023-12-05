export default abstract class ImageRepository {
    public static async insert({ width, height, url, file_name }: Entity.Image.Insert): Promise<Entity.Image> {
        const images = await Database.sql<
            Entity.Image[]
        >`INSERT INTO product_images (width, height, url, file_name) VALUES (${width}, ${height}, ${url}, ${file_name}) RETURNING id, width, height, url, file_name`

        return images[0]
    }

    public static async insertAlternateText(image_id: string) {}
}
