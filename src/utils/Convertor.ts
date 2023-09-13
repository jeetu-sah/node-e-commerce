import { Address } from "../entity/Address"
import {IRawAddressInterface} from './../routes/modules/address/addressTypes'

export class Convertor {

    static toAddressConvertor (data: IRawAddressInterface): Address{
        return new Address(
            data.address_one,
            data.address_two,
            data.address_three,
            data.postal_code,
            data.user
        );
    }

}