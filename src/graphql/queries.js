/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getJob = /* GraphQL */ `
  query GetJob($id: ID!) {
    getJob(id: $id) {
      id
      position
      company
      location
      dates
      summary
      accomplishments
      competencies
      createdAt
      updatedAt
    }
  }
`;
export const listJobs = /* GraphQL */ `
  query ListJobs(
    $filter: ModelJobFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        position
        company
        location
        dates
        summary
        accomplishments
        competencies
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDetail = /* GraphQL */ `
  query GetDetail($id: ID!) {
    getDetail(id: $id) {
      id
      name
      profession
      location
      certified
      citizenship
      birthday
      email
      site
      phone
      github
      stackoverflow
      createdAt
      updatedAt
    }
  }
`;
export const listDetails = /* GraphQL */ `
  query ListDetails(
    $filter: ModelDetailFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        profession
        location
        certified
        citizenship
        birthday
        email
        site
        phone
        github
        stackoverflow
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
