import { Character } from './Character.models';
export interface CharacterDataContainer{
    offset: number, //The requested offset (number of skipped results) of the call.
    limit?: number,  //The requested result limit.
    total?: number,  //The total number of resources available given the current filter set.
    count?: number,  //The total number of results returned by this call.
    results?: Character[]  //The list of characters returned by the call
}