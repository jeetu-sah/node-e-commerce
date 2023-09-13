import { User } from "../../../entity/User";

export interface IRawAddressInterface {
    address_one: string,
    address_two: string,
    address_three: string,
    postal_code: number,
    user: User,
}