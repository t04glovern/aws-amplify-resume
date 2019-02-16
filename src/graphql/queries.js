// eslint-disable
// this is an auto generated file. This will be overwritten

export const getJob = `query GetJob($id: ID!) {
  getJob(id: $id) {
    id
    position
    company
    location
    dates
    summary
    accomplishments
    competencies
  }
}
`;
export const listJobs = `query ListJobs($filter: ModelJobFilterInput, $limit: Int, $nextToken: String) {
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
    }
    nextToken
  }
}
`;
export const getDetail = `query GetDetail($id: ID!) {
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
  }
}
`;
export const listDetails = `query ListDetails(
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
    }
    nextToken
  }
}
`;
