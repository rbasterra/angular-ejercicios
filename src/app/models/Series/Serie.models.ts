import { SeriesSummary } from './SeriesSummary.models';
import { CreatorList } from './../Creator/CreatorList.models';
import { CharacterList } from './../Character/CharacterList.models';
import { EventList } from './../Event/EventList.models';
import { StoryList } from './../Story/StoryList.models';
import { ComicList } from './../Comic/ComicList.models';
import { Image } from './../Image.models';
import { Url } from './../Url.models';
export interface Series {
    id?: number,  // The unique ID of the series resource.,
    title?: string,  // The canonical title of the series.,
    description?: string,  // A description of the series.,
    resourceURI?: string,  // The canonical URL identifier for this resource.,
    urls?: Url[],  // A set of public web site URLs for the resource.,
    startYear?: number,  // The first year of publication for the series.,
    endYear?: number,  // The last year of publication for the series (conventionally, 2099 for ongoing series) .,
    rating?: string,  // The age-appropriateness rating for the series.,
    modified?: Date,  // The date the resource was most recently modified.,
    thumbnail?: Image,  // The representative image for this series.,
    comics?: ComicList,  // A resource list containing comics in this series.,
    stories?: StoryList,  // A resource list containing stories which occur in comics in this series.,
    events?: EventList,  // A resource list containing events which take place in comics in this series.,
    characters?: CharacterList,  // A resource list containing characters which appear in comics in this series.,
    creators?: CreatorList,  // A resource list of creators whose work appears in comics in this series.,
    next?: SeriesSummary,  // A summary representation of the series which follows this series.,
    previous?: SeriesSummary,  // A summary representation of the series which preceded this series.
}