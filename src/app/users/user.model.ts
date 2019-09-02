export class User {
  public id: number;
  public email: string;
  public firstName: string;
  public lastName: string;
  public imagePath: string;
  public gender: string;
  public address: string;
  public mobile: number;

  constructor(
    id: number,
    email: string,
    firstName: string,
    lastName: string,
    imagePath: string,
    gender: string,
    address: string,
    mobile: number
  ) {
    this.id = id;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.imagePath = imagePath;
    this.gender = gender;
    this.address = address;
    this.mobile = mobile;
  }
}
