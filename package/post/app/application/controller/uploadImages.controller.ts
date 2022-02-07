import e from 'express';
import { UploadImages } from '../useCases/UploadImages.uc';
import upload from '../../../bootstrap/multer'

export interface UseCase {
    uploadImages: UploadImages;

}

export class UploadImagesController {

    constructor(private useCase: UseCase) { }

    async handle(req: e.Request, res: e.Response) {

        await this.useCase.uploadImages.setImages(res);

        try {

            const images = await this.useCase.uploadImages.execute();
            return res.status(200).send(images);

        } catch (error) {
            console.log(error);
            return res.status(400).send(error);
        }
    }
}