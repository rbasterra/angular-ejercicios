import { Series } from './../Series/Serie.models';
import { Events } from './../Event/Event.models';
import { Story } from './../Story/Story.models';
import { Comic } from './../Comic/Comic.models';
import { Image } from './../Image.models';
import { Url } from './../Url.models';

export interface CharacterFull {
    id?:number, //The unique ID of the character resource.
    name?: string, //The name of the character
    description?: string, //A short bio or description of the character.
    modified?: Date, //The date the resource was most recently modified
    resourceURI?: string,  //The canonical URL identifier for this resource
    urls?: Url[], //A set of public web site URLs for the resource
    thumbnail?: Image, //The representative image for this character
    comics?: Comic[], //A resource list containing comics which feature this character
    stories?: Story[], //A resource list of events in which this character appears
    events?: Events[],  // A resource list of events in which this character appears
    series?: Series[]  // A resource list of series in which this character appears
}