import { Url } from './../Url.models';
import { EventSummary } from './EventSummary.models';
import { CreatorList } from './../Creator/CreatorList.models';
import { CharacterList } from './../Character/CharacterList.models';
import { SeriesList } from './../Series/SeriesList.models';
import { StoryList } from './../Story/StoryList.models';
import { ComicList } from './../Comic/ComicList.models';
import { Image } from './../Image.models';

export interface Events {
    id?: number,  // (int, optional): The unique ID of the event resource.,
    title?: string,  //  The title of the event.,
    description?: string,  //  A description of the event.,
    resourceURI?: string,  //  The canonical URL identifier for this resource.,
    urls?: Url[],  //  A set of public web site URLs for the event.,
    modified?: Date,  // The date the resource was most recently modified.,
    start?: Date,  // The date of publication of the first issue in this event.,
    end?: Date,  // The date of publication of the last issue in this event.,
    thumbnail?: Image,  //  The representative image for this event.,
    comics?: ComicList,  //  A resource list containing the comics in this event.,
    stories?: StoryList,  //  A resource list containing the stories in this event.,
    series?: SeriesList,  // A resource list containing the series in this event.,
    characters?: CharacterList,  //  A resource list containing the characters which appear in this event.,
    creators?: CreatorList,  //  A resource list containing creators whose work appears in this event.,
    next?: EventSummary,  //  A summary representation of the event which follows this event.,
    previous?: EventSummary,  //  A summary representation of the event which preceded this event.
}