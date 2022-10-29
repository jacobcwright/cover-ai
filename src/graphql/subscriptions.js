/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCoverLetterRequests = /* GraphQL */ `
  subscription OnCreateCoverLetterRequests(
    $filter: ModelSubscriptionCoverLetterRequestsFilterInput
  ) {
    onCreateCoverLetterRequests(filter: $filter) {
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
export const onUpdateCoverLetterRequests = /* GraphQL */ `
  subscription OnUpdateCoverLetterRequests(
    $filter: ModelSubscriptionCoverLetterRequestsFilterInput
  ) {
    onUpdateCoverLetterRequests(filter: $filter) {
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
export const onDeleteCoverLetterRequests = /* GraphQL */ `
  subscription OnDeleteCoverLetterRequests(
    $filter: ModelSubscriptionCoverLetterRequestsFilterInput
  ) {
    onDeleteCoverLetterRequests(filter: $filter) {
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
export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers(
    $filter: ModelSubscriptionUsersFilterInput
    $owner: String
  ) {
    onCreateUsers(filter: $filter, owner: $owner) {
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
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers(
    $filter: ModelSubscriptionUsersFilterInput
    $owner: String
  ) {
    onUpdateUsers(filter: $filter, owner: $owner) {
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
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers(
    $filter: ModelSubscriptionUsersFilterInput
    $owner: String
  ) {
    onDeleteUsers(filter: $filter, owner: $owner) {
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
