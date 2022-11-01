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
    }
  }
`
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
      }
      nextToken
    }
  }
`

export const getCoverCount = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
      coverLetterCount
    }
  }
`
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
        }
        nextToken
      }
      lastLogin
    }
  }
`
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
        }
        lastLogin
      }
      nextToken
    }
  }
`
