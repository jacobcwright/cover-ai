import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UsersMetaData = {
  readOnlyFields;
}

export declare class Users {
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly activeSubscription: boolean;
  readonly subscriptionId?: string | null;
  readonly coverLetterRequests: number;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly lastLogin: string;
  constructor(init: ModelInit<Users>);
  static copyOf(source: Users, mutator: (draft: MutableModel<Users>) => MutableModel<Users> | void): Users;
}