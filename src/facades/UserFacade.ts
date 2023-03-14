import myDataSource from "../database/app-data-source";
import { User } from "../entity/User";

export class UserFacade {
  protected repository;

  constructor() {
    this.repository = myDataSource.getRepository(User);
  }

  first = (id: number) => {
    return this.repository.findOne({
      relations: ["addresses"],
      where: { id: id },
    });
  };

  get = () => {
    return this.repository.find({ relations: ["addresses"] });
  };
}
