/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
