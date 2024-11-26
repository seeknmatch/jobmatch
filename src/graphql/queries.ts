/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getTodo = /* GraphQL */ `query GetTodo($id: ID!) {
  getTodo(id: $id) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTodoQueryVariables, APITypes.GetTodoQuery>;
export const listTodos = /* GraphQL */ `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTodosQueryVariables, APITypes.ListTodosQuery>;
export const getUserProfile = /* GraphQL */ `query GetUserProfile($id: ID!) {
  getUserProfile(id: $id) {
    id
    userId
    fullName
    email
    phoneNumber
    city
    state
    professionalSummary
    education
    experience
    publications
    achievements
    profilePhoto
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserProfileQueryVariables,
  APITypes.GetUserProfileQuery
>;
export const listUserProfiles = /* GraphQL */ `query ListUserProfiles(
  $filter: ModelUserProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      fullName
      email
      phoneNumber
      city
      state
      professionalSummary
      education
      experience
      publications
      achievements
      profilePhoto
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserProfilesQueryVariables,
  APITypes.ListUserProfilesQuery
>;
export const getJob = /* GraphQL */ `query GetJob($id: ID!) {
  getJob(id: $id) {
    id
    title
    description
    location
    employerId
    jobType
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetJobQueryVariables, APITypes.GetJobQuery>;
export const listJobs = /* GraphQL */ `query ListJobs($filter: ModelJobFilterInput, $limit: Int, $nextToken: String) {
  listJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      location
      employerId
      jobType
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListJobsQueryVariables, APITypes.ListJobsQuery>;
export const getLike = /* GraphQL */ `query GetLike($id: ID!) {
  getLike(id: $id) {
    id
    userId
    jobId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetLikeQueryVariables, APITypes.GetLikeQuery>;
export const listLikes = /* GraphQL */ `query ListLikes(
  $filter: ModelLikeFilterInput
  $limit: Int
  $nextToken: String
) {
  listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      jobId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListLikesQueryVariables, APITypes.ListLikesQuery>;
export const getMatch = /* GraphQL */ `query GetMatch($id: ID!) {
  getMatch(id: $id) {
    id
    candidateId
    employerId
    jobId
    matchedAt
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetMatchQueryVariables, APITypes.GetMatchQuery>;
export const listMatches = /* GraphQL */ `query ListMatches(
  $filter: ModelMatchFilterInput
  $limit: Int
  $nextToken: String
) {
  listMatches(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      candidateId
      employerId
      jobId
      matchedAt
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMatchesQueryVariables,
  APITypes.ListMatchesQuery
>;
export const getEvent = /* GraphQL */ `query GetEvent($id: ID!) {
  getEvent(id: $id) {
    id
    title
    description
    date
    location
    employerId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetEventQueryVariables, APITypes.GetEventQuery>;
export const listEvents = /* GraphQL */ `query ListEvents(
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      date
      location
      employerId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEventsQueryVariables,
  APITypes.ListEventsQuery
>;
