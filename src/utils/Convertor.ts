import { Address } from "../entity/Address"
import { User } from "../entity/User"
import {IRawAddressInterface} from './../routes/modules/address/addressTypes'
import { IRawUserInterface } from './../routes/modules/user/userTypes'

export class Convertor {

    static toAddressConvertor (data: IRawAddressInterface): Address {
        return new Address(
            data.address_one,
            data.address_two,
            data.address_three,
            data.postal_code,
            data.user
        );
    }


    static toUserRegisteration (data: IRawUserInterface): User {
        return new User(
            data.first_name,
            data.last_name,
            data.mobile,
            data.email,
            data.gender,
            data.birthplace
        );
    }

}