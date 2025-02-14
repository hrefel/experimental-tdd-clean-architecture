export class UserEntity {
  constructor(
    public name: string,
    public gender: string,
    public username: string,
    public departement: string,
    public title: string,
    public role: string,
    public birthDate: string,
    public email: string
  ) {}
}
