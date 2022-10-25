/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePosts = /* GraphQL */ `
  subscription OnCreatePosts($owner: String) {
    onCreatePosts(owner: $owner) {
      id
      title
      description
      author
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePosts = /* GraphQL */ `
  subscription OnUpdatePosts($owner: String) {
    onUpdatePosts(owner: $owner) {
      id
      title
      description
      author
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePosts = /* GraphQL */ `
  subscription OnDeletePosts($owner: String) {
    onDeletePosts(owner: $owner) {
      id
      title
      description
      author
      createdAt
      updatedAt
      owner
    }
  }
`;
