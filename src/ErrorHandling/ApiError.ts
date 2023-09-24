import { BaseError } from './BaseError'
import { HttpStatusCode } from '../utils/HttpStatusCode';

export class ApiError extends BaseError {

    constructor(
        name: string,
        httpCode: HttpStatusCode = HttpStatusCode.INTERNAL_SERVER,
        isOperational: boolean = true,
        description = 'internal server error'
    ) {

        super(name, httpCode, description, isOperational);
    }
}