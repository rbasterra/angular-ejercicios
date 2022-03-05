import { Url } from './../Url.models';
import { Image } from './../Image.models';

export interface Element{
    id?: number,
    title?: string;
    description?: string;
    thumbnail?: Image;
    urls?: Url[];
}