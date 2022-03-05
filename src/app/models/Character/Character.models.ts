
import { SeriesList } from '../Series/SeriesList.models';
import { EventList } from '../Event/EventList.models';
import { StoryList } from '../Story/StoryList.models';
import { ComicList } from '../Comic/ComicList.models';
import { Image } from '../Image.models';
import { Url } from '../Url.models';

export interface Character {
    id?:number, //The unique ID of the character resource.
    name?: string, //The name of the character
    description?: string, //A short bio or description of the character.
    modified?: Date, //The date the resource was most recently modified
    resourceURI?: string,  //The canonical URL identifier for this resource
    urls?: Url[], //A set of public web site URLs for the resource
    thumbnail?: Image, //The representative image for this character
    comics?: ComicList, //A resource list containing comics which feature this character
    stories?: StoryList, //A resource list of events in which this character appears
    events?: EventList,  // A resource list of events in which this character appears
    series?: SeriesList  // A resource list of series in which this character appears
}

export interface CharacterCard{
    state: 'default' | 'flipped';
}