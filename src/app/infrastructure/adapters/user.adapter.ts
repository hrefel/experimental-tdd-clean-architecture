import { UserResponse } from "../../data/models/user.model";
import { UserEntity } from "../../domain/model/user/user.entity";

export class UserAdapter {
  mapTo(response: UserResponse): Array<UserEntity> {
    return response.users.map(r => {
      return new UserEntity(
        `${r.firstName} ${r.lastName}`,
        r.gender,
        r.username,
        r.company.department,
        r.company.title,
        r.role,
        r.birthDate,
        r.email
      )
    })
  }
}
