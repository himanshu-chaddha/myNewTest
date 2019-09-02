export class UserService {
  users = [
    {
      id: 1,
      email: "abc@test.com",
      firstName: "Jack",
      lastName: "Cyro",
      imagePath: "../../assets/images/Default-profile.jpg",
      gender: "male",
      address: "Test Address",
      mobile: 9999999999
    },
    {
      id: 2,
      email: "abc@test.com",
      firstName: "Jack",
      lastName: "Cyro",
      imagePath: "../../assets/images/Default-profile.jpg",
      gender: "male",
      address: "Test Address",
      mobile: 9999999999
    },
    {
      id: 3,
      email: "abc@test.com",
      firstName: "Jack",
      lastName: "Cyro",
      imagePath: "../../assets/images/Default-profile.jpg",
      gender: "male",
      address: "Test Address",
      mobile: 9999999999
    },
    {
      id: 4,
      email: "abc@test.com",
      firstName: "Jack",
      lastName: "Cyro",
      imagePath: "../../assets/images/Default-profile.jpg",
      gender: "male",
      address: "Test Address",
      mobile: 9999999999
    },
    {
      id: 5,
      email: "abc@test.com",
      firstName: "Jack",
      lastName: "Cyro",
      imagePath: "../../assets/images/Default-profile.jpg",
      gender: "male",
      address: "Test Address",
      mobile: 9999999999
    },
    {
      id: 6,
      email: "abc@test.com",
      firstName: "Jack",
      lastName: "Cyro",
      imagePath: "../../assets/images/Default-profile.jpg",
      gender: "male",
      address: "Test Address",
      mobile: 9999999999
    },
    {
      id: 7,
      email: "abc@test.com",
      firstName: "Jack",
      lastName: "Cyro",
      imagePath: "../../assets/images/Default-profile.jpg",
      gender: "male",
      address: "Test Address",
      mobile: 9999999999
    },
    {
      id: 8,
      email: "abc@test.com",
      firstName: "Jack",
      lastName: "Cyro",
      imagePath: "../../assets/images/Default-profile.jpg",
      gender: "male",
      address: "Test Address",
      mobile: 9999999999
    }
  ];
  totalEmployees = 0;
  totalActiveEmployees = 0;
  totalDeletedEmployees = 0;

  constructor() {}

  addUser(
    id: number,
    email: string,
    firstName: string,
    lastName: string,
    imagePath: string,
    gender: string,
    address: string,
    mobile: number
  ) {
    const newUser = {
      id: id,
      email: email,
      firstName: firstName,
      lastName: lastName,
      imagePath: imagePath,
      gender: gender,
      address: address,
      mobile: mobile
    };
    this.users.push(newUser);
  }

  editUserData(id: number, mobile: number) {
    this.users[id].mobile = mobile;
  }

  getEmployees() {
    return this.users;
  }
}
