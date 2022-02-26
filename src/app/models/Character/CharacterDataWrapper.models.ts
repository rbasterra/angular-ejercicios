import { CharacterDataContainer } from "./CharacterDataContainer.models";

export interface CharacterDataWrapper {
    code: number,  // The HTTP status code of the returned result.
    status: string,  // A string description of the call status
    copyright: string,  // The copyright notice for the returned result
    attributionText: string,  // The attribution notice for this result. Please display either this notice or the contents of the attributionHTML field on all screens which contain data from the Marvel Comics API
    attributionHTML: string,  // An HTML representation of the attribution notice for this result. Please display either this notice or the contents of the attributionText field on all screens which contain data from the Marvel Comics API
    data: CharacterDataContainer,  // The results returned by the call
    etag: string  //  A digest value of the content returned by the call
}