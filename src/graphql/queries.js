/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCoverLetterRequests = /* GraphQL */ `
  query GetCoverLetterRequests($id: ID!) {
    getCoverLetterRequests(id: $id) {
      id
      usersID
      name
      company
      jobTitle
      resume
      jobDescription
      coverLetterResult
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listCoverLetterRequests = /* GraphQL */ `
  query ListCoverLetterRequests(
    $filter: ModelCoverLetterRequestsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoverLetterRequests(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        usersID
        name
        company
        jobTitle
        resume
        jobDescription
        coverLetterResult
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCoverLetterRequests = /* GraphQL */ `
  query SyncCoverLetterRequests(
    $filter: ModelCoverLetterRequestsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCoverLetterRequests(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        usersID
        name
        company
        jobTitle
        resume
        jobDescription
        coverLetterResult
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
      id
      username
      email
      name
      activeSubscription
      subscriptionId
      coverLetterCount
      createdAt
      updatedAt
      CoverLetterRequests {
        items {
          id
          usersID
          name
          company
          jobTitle
          resume
          jobDescription
          coverLetterResult
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      lastLogin
      _version
      _deleted
      _lastChangedAt
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
        name
        activeSubscription
        subscriptionId
        coverLetterCount
        createdAt
        updatedAt
        CoverLetterRequests {
          nextToken
          startedAt
        }
        lastLogin
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        username
        email
        name
        activeSubscription
        subscriptionId
        coverLetterCount
        createdAt
        updatedAt
        CoverLetterRequests {
          nextToken
          startedAt
        }
        lastLogin
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
