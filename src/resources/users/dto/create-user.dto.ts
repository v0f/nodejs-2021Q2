export class CreateUserDto {
  constructor(
    public name: string,
    public login: string,
    public password: string,
  ) {}
}
