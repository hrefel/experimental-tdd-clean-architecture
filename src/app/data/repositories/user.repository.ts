import { Observable } from "rxjs";
import { UserEntity } from "../../domain/model/user/user.entity";

export abstract class UserRepository {
  abstract GetUser(): Observable<Array<UserEntity>>;
}
