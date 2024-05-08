import ImageService from './image.service'
import ImageRepository from './image.repository'
import ImageValidation from './image.validation'

export default abstract class Image {
    public static readonly service = ImageService
    public static readonly repository = ImageRepository
    public static readonly validation = ImageValidation
}
