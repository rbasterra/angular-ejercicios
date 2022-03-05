import { ComicSummary } from './../Comic/ComicSummary.models';
import { CreatorList } from './../Creator/CreatorList.models';
import { CharacterList } from './../Character/CharacterList.models';
import { EventList } from './../Event/EventList.models';
import { SeriesList } from './../Series/SeriesList.models';
import { ComicList } from './../Comic/ComicList.models';
import { Image } from './../Image.models';

export interface Story {
    id?: number,  // The unique ID of the story resource.,
    title?: string,  // The story title.,
    description?: string,  // A short description of the story.,
    resourceURI?: string,  // The canonical URL identifier for this resource. ,
    type?: string,  // The story type e.g. interior story, cover, text story.,
    modified?: Date,  // The date the resource was most recently modified.,
    thumbnail?: Image,  // The representative image for this story.,
    comics?: ComicList,  // A resource list containing comics in which this story takes place.,
    series?: SeriesList,  // A resource list containing series in which this story appears.,
    events?: EventList,  // A resource list of the events in which this story appears.,
    characters?: CharacterList,  // A resource list of characters which appear in this story.,
    creators?: CreatorList,  // A resource list of creators who worked on this story.,
    originalissue?: ComicSummary,  // A summary representation of the issue in which this story was originally published.
}