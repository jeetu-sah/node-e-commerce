import myDataSource from "../database/app-data-source";
import { Address } from "../entity/Address";
import { IRawAddressInterface } from "../routes/modules/address/addressTypes";

export class AddressFacade {
  protected repository;

  constructor() {
    this.repository = myDataSource.getRepository(Address);
  }

  first = async (id: number) => {
    return this.repository.findOne({
      relations: ["user"],
      where: { id: id },
    });
  };

  get = () => {
    return this.repository.find({ relations: ["user"] });
  };

  save = async (address: Address) => {
    const newAddress = this.repository.save(address)
    return newAddress;
  }
}
