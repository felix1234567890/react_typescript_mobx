import { action, makeObservable, observable, runInAction } from "mobx";

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
  loading: boolean = false;

  @observable
  shownUsers: User[] = [];

  @observable
  sortedUsers: User[] = [];

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
  private shuffleUsers(users: User[]): User[] {
    for (let i = users.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [users[i], users[j]] = [users[j], users[i]];
    }
    return users;
  }
}
