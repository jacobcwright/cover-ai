/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCoverLetterRequests = /* GraphQL */ `
  subscription OnCreateCoverLetterRequests {
    onCreateCoverLetterRequests {
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
export const onUpdateCoverLetterRequests = /* GraphQL */ `
  subscription OnUpdateCoverLetterRequests {
    onUpdateCoverLetterRequests {
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
export const onDeleteCoverLetterRequests = /* GraphQL */ `
  subscription OnDeleteCoverLetterRequests {
    onDeleteCoverLetterRequests {
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
export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers {
    onCreateUsers {
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
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers {
    onUpdateUsers {
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
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers {
    onDeleteUsers {
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
