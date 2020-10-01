import { observable } from "mobx";

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
  shownUsers: User[] = [];

  @observable
  sortedUsers: User[] = [];

  @observable
  loading: boolean = false;
}
