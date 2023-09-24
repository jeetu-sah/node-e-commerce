import { BaseError } from "./BaseError";
import { HttpStatusCode } from "../utils/HttpStatusCode";

export class HTTP400Error extends BaseError {

    constructor(
        description: string = 'bad request'
    ) {
        super('NOT FOUND', HttpStatusCode.BAD_REQUEST, description, true);
    }
}