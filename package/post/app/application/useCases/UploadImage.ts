//import { Show } from '../../domain/entities/Show';
import Command from '../command';
import e from 'express';
import upload from '../../../bootstrap/multer'

//import { ShowRepository } from '../../domain/services/show.service.repository';

/*export interface Services {
    showRepository: ShowRepository;
}*/

export class UploadImage extends Command{
    public _imageResponse: e.Response;

    constructor() {
        super();
    }

    public setImage(image) {
        this._imageResponse = image;
    }

    public getUpdateValues() {
        return this._imageResponse;
    }

    //  Override Method
    public async execute() {
        const response = { message: 'message' }
        return response;
    }


}