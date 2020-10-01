import { action, observable, computed } from "mobx";

interface User {
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

  @computed
  shownUsers: User[] = [];

  @observable
  sortedUsers: User[] = [];

  @action
  filterUsers(value: string) {
    const filteredUsers = this.users.filter((user: User) => {
      if (user.country.toLowerCase().startsWith(value.toLowerCase()))
        return true;
      return false;
    });
    filteredUsers.sort((a: any, b: any) => a.country - b.country);
    this.sortedUsers = filteredUsers;
  }
}
