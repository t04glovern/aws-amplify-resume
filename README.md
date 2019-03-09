# AWS Amplify Resume

![serverless-resume-example](instructions/img/serverless-resume-example.png)

## API Schema

```graphql
type Job @model {
  id: ID!
  position: String!
  company: String!
  location: String!
  dates: String!
  summary: String!
  accomplishments: [String]
  competencies: [String]
}

type Detail @model {
  id: ID!
  name: String!
  profession: String!
  location: String
  certified: Boolean!
  citizenship: String
  birthday: String
  email: String
  site: String
  phone: String
  github: String
  stackoverflow: String
}
```

## Instructions

Detailed instructions can be found at [instructions/README.md](instructions/README.md)
