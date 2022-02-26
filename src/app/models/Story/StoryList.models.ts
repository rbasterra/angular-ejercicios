import { StorySummary } from './StorySummary.models';
export interface StoryList {
    available?: number, // The number of total available stories in this list. Will always be greater than or equal to the "returned" value.,
    returned?: number, // The number of stories returned in this collection (up to 20).,
    collectionURI?: string, //The path to the full list of stories in this collection.,
    items?: StorySummary[] //The list of returned stories in this collection.
}