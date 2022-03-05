import { CreatorList } from './../Creator/CreatorList.models';
import { EventList } from './../Event/EventList.models';
import { StoryList } from './../Story/StoryList.models';
import { CharacterList } from './../Character/CharacterList.models';
import { Image } from './../Image.models';
import { ComicPrice } from './ComicPrice.models';
import { ComicDate } from './ComicDate.models';
import { ComicSummary } from './ComicSummary.models';
import { SeriesSummary } from './../Series/SeriesSummary.models';
import { Url } from './../Url.models';
import { TextObject } from './../TextObject.models';

export interface Comic{
    id?: number,  // The unique ID of the comic resource.,
    digitalId?: number,  // The ID of the digital comic representation of this comic. Will be 0 if the comic is not available digitally.,
    title?: string,  // The canonical title of the comic.,
    issueNumber?: number,  // The number of the issue in the series (will generally be 0 for collection formats).,
    variantDescription?: string,  // If the issue is a variant (e.g. an alternate cover, second printing, or director’s cut), a text description of the variant.,
    description?: string,  // The preferred description of the comic.,
    modified?: Date,  // The date the resource was most recently modified.,
    isbn?: string ,  // The ISBN for the comic (generally only populated for collection formats).,
    upc?: string ,  // The UPC barcode number for the comic (generally only populated for periodical formats).,
    diamondCode?: string ,  // The Diamond code for the comic.,
    ean?: string ,  // The EAN barcode for the comic.,
    issn?: string ,  // The ISSN barcode for the comic.,
    format?: string ,  // The publication format of the comic e.g. comic, hardcover, trade paperback.,
    pageCount?: number,  // The number of story pages in the comic.,
    textObjects?: TextObject,  // (Array[TextObject], optional): A set of descriptive text blurbs for the comic.,
    resourceURI?: string,   // The canonical URL identifier for this resource.,
    urls?: Url[],   // A set of public web site URLs for the resource.,
    series?: SeriesSummary,   // A summary representation of the series to which this comic belongs.,
    variants?: ComicSummary[],   // A list of variant issues for this comic (includes the "original" issue if the current issue is a variant).,
    collections?: ComicSummary[],   // A list of collections which include this comic (will generally be empty if the comic's format is a collection).,
    collectedIssues?: ComicSummary[],   // A list of issues collected in this comic (will generally be empty for periodical formats such as "comic" or "magazine").,
    dates?: ComicDate[],   // A list of key dates for this comic.,
    prices?: ComicPrice[],   // A list of prices for this comic.,
    thumbnail?: Image,   // The representative image for this comic.,
    images?: Image[],   // A list of promotional images associated with this comic.,
    creators?: CreatorList,   // A resource list containing the creators associated with this comic.,
    characters?: CharacterList,   // A resource list containing the characters which appear in this comic.,
    stories?: StoryList,   // A resource list containing the stories which appear in this comic.,
    events?: EventList,   // A resource list containing the events in which this comic appears.
}