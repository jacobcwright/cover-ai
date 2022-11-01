/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCoverLetterRequests = /* GraphQL */ `
  mutation CreateCoverLetterRequests(
    $input: CreateCoverLetterRequestsInput!
    $condition: ModelCoverLetterRequestsConditionInput
  ) {
    createCoverLetterRequests(input: $input, condition: $condition) {
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
    }
  }
`;
export const updateCoverLetterRequests = /* GraphQL */ `
  mutation UpdateCoverLetterRequests(
    $input: UpdateCoverLetterRequestsInput!
    $condition: ModelCoverLetterRequestsConditionInput
  ) {
    updateCoverLetterRequests(input: $input, condition: $condition) {
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
    }
  }
`;
export const deleteCoverLetterRequests = /* GraphQL */ `
  mutation DeleteCoverLetterRequests(
    $input: DeleteCoverLetterRequestsInput!
    $condition: ModelCoverLetterRequestsConditionInput
  ) {
    deleteCoverLetterRequests(input: $input, condition: $condition) {
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
    }
  }
`;
export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
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
        }
        nextToken
      }
      lastLogin
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
        }
        nextToken
      }
      lastLogin
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
        }
        nextToken
      }
      lastLogin
    }
  }
`;
