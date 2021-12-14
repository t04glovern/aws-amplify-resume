/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createJob = /* GraphQL */ `
  mutation CreateJob(
    $input: CreateJobInput!
    $condition: ModelJobConditionInput
  ) {
    createJob(input: $input, condition: $condition) {
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
export const updateJob = /* GraphQL */ `
  mutation UpdateJob(
    $input: UpdateJobInput!
    $condition: ModelJobConditionInput
  ) {
    updateJob(input: $input, condition: $condition) {
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
export const deleteJob = /* GraphQL */ `
  mutation DeleteJob(
    $input: DeleteJobInput!
    $condition: ModelJobConditionInput
  ) {
    deleteJob(input: $input, condition: $condition) {
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
export const createDetail = /* GraphQL */ `
  mutation CreateDetail(
    $input: CreateDetailInput!
    $condition: ModelDetailConditionInput
  ) {
    createDetail(input: $input, condition: $condition) {
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
export const updateDetail = /* GraphQL */ `
  mutation UpdateDetail(
    $input: UpdateDetailInput!
    $condition: ModelDetailConditionInput
  ) {
    updateDetail(input: $input, condition: $condition) {
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
export const deleteDetail = /* GraphQL */ `
  mutation DeleteDetail(
    $input: DeleteDetailInput!
    $condition: ModelDetailConditionInput
  ) {
    deleteDetail(input: $input, condition: $condition) {
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
