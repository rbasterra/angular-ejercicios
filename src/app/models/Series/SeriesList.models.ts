import { SeriesSummary } from './SeriesSummary.models';
export interface SeriesList {
    available?: number, // The number of total available series in this list. Will always be greater than or equal to the "returned" value.,
    returned?: number, // The number of series returned in this collection (up to 20).,
    collectionURI?: string, // The path to the full list of series in this collection.,
    items?: SeriesSummary[]  // The list of returned series in this collection.
    }