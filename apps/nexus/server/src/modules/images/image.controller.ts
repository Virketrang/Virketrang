import ImageService from './image.service'
import ImageRepository from './image.repository'

export default abstract class Image {
    public static readonly service = ImageService
    public static readonly repository = ImageRepository
}
