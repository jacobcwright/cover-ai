import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CoverLetterRequestsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UsersMetaData = {
  readOnlyFields;
}

export declare class CoverLetterRequests {
  readonly id: string;
  readonly usersID: string;
  readonly name: string;
  readonly company: string;
  readonly jobTitle: string;
  readonly resume: string;
  readonly jobDescription: string;
  readonly coverLetterResult: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<CoverLetterRequests, CoverLetterRequestsMetaData>);
  static copyOf(source: CoverLetterRequests, mutator: (draft: MutableModel<CoverLetterRequests, CoverLetterRequestsMetaData>) => MutableModel<CoverLetterRequests, CoverLetterRequestsMetaData> | void): CoverLetterRequests;
}

export declare class Users {
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly name: string;
  readonly activeSubscription: boolean;
  readonly subscriptionId?: string | null;
  readonly coverLetterCount: number;
  readonly createdAt?: string | null;
  readonly updatedAt: string;
  readonly CoverLetterRequests?: (CoverLetterRequests | null)[] | null;
  readonly lastLogin: string;
  constructor(init: ModelInit<Users>);
  static copyOf(source: Users, mutator: (draft: MutableModel<Users>) => MutableModel<Users> | void): Users;
}