import { EventList } from './../Event/EventList.models';
import { ComicList } from './../Comic/ComicList.models';
import { StoryList } from './../Story/StoryList.models';
import { SeriesList } from './../Series/SeriesList.models';
import { Image } from './../Image.models';
import { Url } from './../Url.models';

export interface Creator {
    id?: number,  //  The unique ID of the creator resource.,
    firstName?: string,  //  The first name of the creator.,
    middleName?: string,  //  The middle name of the creator.,
    lastName?: string,  //  The last name of the creator.,
    suffix?: string,  //  The suffix or honorific for the creator.,
    fullName?: string,  //  The full name of the creator (a space-separated concatenation of the above four fields).,
    modified?: Date,  //  The date the resource was most recently modified.,
    resourceURI?: string,  //  The canonical URL identifier for this resource.,
    urls?: Url,  //  A set of public web site URLs for the resource.,
    thumbnail?: Image,  //  The representative image for this creator.,
    series?: SeriesList,  //  A resource list containing the series which feature work by this creator.,
    stories?: StoryList,  //  A resource list containing the stories which feature work by this creator.,
    comics?: ComicList,  //  A resource list containing the comics which feature work by this creator.,
    events?: EventList,  // A resource list containing the events which feature work by this creator.
}