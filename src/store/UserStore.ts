import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";

export interface User {
  name: string;
  email: string;
  country: string;
  photo: string;
  gender: string;
  age: number;
}

export class UserStore {
  @observable
  users: User[] = [];

  @observable
  sortedUsers: User[] = [];

  @observable
  loading: boolean = false;

  @observable
  shownUsers: User[] = [];

  @computed
  get usersCount() {
    return this.sortedUsers.length;
  }

  constructor() {
    makeObservable(this);
  }

  @action
  loadUsers = async () => {
    this.loading = true;
    const response = await fetch("./users.json");
    const users = await response.json();
    const shuffledUsers = this.shuffleUsers(users);
    runInAction(() => {
      this.users = shuffledUsers;
      this.sortedUsers = shuffledUsers;
      this.loading = false;
    });
  };

  @action
  filterUsers = (value: string) => {
    const filteredUsers = this.users.filter((user: User) => {
      if (user.country.toLowerCase().startsWith(value.toLowerCase()))
        return true;
      return false;
    });
    filteredUsers.sort((a: any, b: any) => a.country - b.country);
    this.sortedUsers = filteredUsers;
  };
  @action
  paginateUsers = (pageNumber = 1, itemsPerPage = 6) => {
    const skip = (pageNumber - 1) * itemsPerPage;
    if (this.sortedUsers.length > 0) {
      const shownUsers = this.sortedUsers.slice(skip, skip + itemsPerPage);
      this.shownUsers = shownUsers;
    }
  };

  @action
  sortUsers = (sortOrder: string) => {
    if (this.users.length === 0) return;
    let sortedUsers;
    switch (sortOrder) {
      case "desc":
        sortedUsers = this.users.sort((a: User, b: User) => {
          return b.age - a.age;
        });
        break;
      case "asc":
        sortedUsers = this.users.sort((a: User, b: User) => {
          return a.age - b.age;
        });
        break;
      case "under40":
        sortedUsers = this.users
          .filter((user: User) => user.age < 40)
          .sort((a: User, b: User) => a.age - b.age);
        break;
      case "over40":
        sortedUsers = this.users
          .filter((user: User) => user.age > 40)
          .sort((a: User, b: User) => a.age - b.age);
        break;
      case "female":
        sortedUsers = this.users.filter(
          (user: User) => user.gender === "female"
        );
        break;
      case "male":
        sortedUsers = this.users.filter((user: User) => user.gender === "male");
        break;
      default:
        sortedUsers = this.users;
    }
    this.sortedUsers = sortedUsers;
  };
  private shuffleUsers(users: User[]): User[] {
    for (let i = users.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [users[i], users[j]] = [users[j], users[i]];
    }
    return users;
  }
}
