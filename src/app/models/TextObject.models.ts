export interface TextObject {
    type?: string,  // The canonical type of the text object (e.g. solicit text, preview text, etc.).,
    language?: string,  // The IETF language tag denoting the language the text object is written in.,
    text?: string  // The text.
}