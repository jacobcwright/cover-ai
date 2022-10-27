/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
      id
      username
      email
      activeSubscription
      subscriptionId
      coverLetterRequests
      createdAt
      updatedAt
      lastLogin
      owner
    }
  }
`;
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
      id
      username
      email
      activeSubscription
      subscriptionId
      coverLetterRequests
      createdAt
      updatedAt
      lastLogin
      owner
    }
  }
`;
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
      id
      username
      email
      activeSubscription
      subscriptionId
      coverLetterRequests
      createdAt
      updatedAt
      lastLogin
      owner
    }
  }
`;
