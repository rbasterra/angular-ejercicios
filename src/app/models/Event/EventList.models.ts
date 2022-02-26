import { EventSummary } from './EventSummary.models';
export interface EventList {
    available?: number, // The number of total available events in this list. Will always be greater than or equal to the "returned" value.,
    returned?: number, // The number of events returned in this collection (up to 20).,
    collectionURI?: string, // The path to the full list of events in this collection.,
    items?: EventSummary [] // The list of returned events in this collection.
}