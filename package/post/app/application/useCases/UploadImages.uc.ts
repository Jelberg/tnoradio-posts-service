//import { Show } from '../../domain/entities/Show';
import Command from '../command';
import e from 'express';
import upload from '../../../bootstrap/multer'

export class UploadImages extends Command{
    public _imageResponse: e.Response;


    constructor() {
        super();
    }

    public setImages(images) {
        this._imageResponse = images;
    }

    public getUpdateValues() {
        return this._imageResponse;
    }

    //  Override Method
    public async execute() {
        const response = { message: 'holaaaaa' }
        return response;
    }


}