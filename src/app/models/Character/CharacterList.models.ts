import { CharacterSummary } from './CharacterSummary.models';
export interface CharacterList {
    available?: number,  //  The number of total available characters in this list. Will always be greater than or equal to the "returned" value.,
    returned?: number,  //  The number of characters returned in this collection (up to 20).,
    collectionURI?: string,  //  The path to the full list of characters in this collection.,
    items?: CharacterSummary[],  //  The list of returned characters in this collection.
}