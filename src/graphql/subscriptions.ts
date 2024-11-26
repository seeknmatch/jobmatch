/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateTodo = /* GraphQL */ `subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onCreateTodo(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTodoSubscriptionVariables,
  APITypes.OnCreateTodoSubscription
>;
export const onUpdateTodo = /* GraphQL */ `subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onUpdateTodo(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTodoSubscriptionVariables,
  APITypes.OnUpdateTodoSubscription
>;
export const onDeleteTodo = /* GraphQL */ `subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
  onDeleteTodo(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTodoSubscriptionVariables,
  APITypes.OnDeleteTodoSubscription
>;
export const onCreateUserProfile = /* GraphQL */ `subscription OnCreateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
) {
  onCreateUserProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserProfileSubscriptionVariables,
  APITypes.OnCreateUserProfileSubscription
>;
export const onUpdateUserProfile = /* GraphQL */ `subscription OnUpdateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
) {
  onUpdateUserProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserProfileSubscriptionVariables,
  APITypes.OnUpdateUserProfileSubscription
>;
export const onDeleteUserProfile = /* GraphQL */ `subscription OnDeleteUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
) {
  onDeleteUserProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserProfileSubscriptionVariables,
  APITypes.OnDeleteUserProfileSubscription
>;
export const onCreateJob = /* GraphQL */ `subscription OnCreateJob($filter: ModelSubscriptionJobFilterInput) {
  onCreateJob(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateJobSubscriptionVariables,
  APITypes.OnCreateJobSubscription
>;
export const onUpdateJob = /* GraphQL */ `subscription OnUpdateJob($filter: ModelSubscriptionJobFilterInput) {
  onUpdateJob(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateJobSubscriptionVariables,
  APITypes.OnUpdateJobSubscription
>;
export const onDeleteJob = /* GraphQL */ `subscription OnDeleteJob($filter: ModelSubscriptionJobFilterInput) {
  onDeleteJob(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteJobSubscriptionVariables,
  APITypes.OnDeleteJobSubscription
>;
export const onCreateLike = /* GraphQL */ `subscription OnCreateLike($filter: ModelSubscriptionLikeFilterInput) {
  onCreateLike(filter: $filter) {
    id
    userId
    jobId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLikeSubscriptionVariables,
  APITypes.OnCreateLikeSubscription
>;
export const onUpdateLike = /* GraphQL */ `subscription OnUpdateLike($filter: ModelSubscriptionLikeFilterInput) {
  onUpdateLike(filter: $filter) {
    id
    userId
    jobId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateLikeSubscriptionVariables,
  APITypes.OnUpdateLikeSubscription
>;
export const onDeleteLike = /* GraphQL */ `subscription OnDeleteLike($filter: ModelSubscriptionLikeFilterInput) {
  onDeleteLike(filter: $filter) {
    id
    userId
    jobId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLikeSubscriptionVariables,
  APITypes.OnDeleteLikeSubscription
>;
export const onCreateMatch = /* GraphQL */ `subscription OnCreateMatch($filter: ModelSubscriptionMatchFilterInput) {
  onCreateMatch(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMatchSubscriptionVariables,
  APITypes.OnCreateMatchSubscription
>;
export const onUpdateMatch = /* GraphQL */ `subscription OnUpdateMatch($filter: ModelSubscriptionMatchFilterInput) {
  onUpdateMatch(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMatchSubscriptionVariables,
  APITypes.OnUpdateMatchSubscription
>;
export const onDeleteMatch = /* GraphQL */ `subscription OnDeleteMatch($filter: ModelSubscriptionMatchFilterInput) {
  onDeleteMatch(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMatchSubscriptionVariables,
  APITypes.OnDeleteMatchSubscription
>;
export const onCreateEvent = /* GraphQL */ `subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
  onCreateEvent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEventSubscriptionVariables,
  APITypes.OnCreateEventSubscription
>;
export const onUpdateEvent = /* GraphQL */ `subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
  onUpdateEvent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEventSubscriptionVariables,
  APITypes.OnUpdateEventSubscription
>;
export const onDeleteEvent = /* GraphQL */ `subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
  onDeleteEvent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEventSubscriptionVariables,
  APITypes.OnDeleteEventSubscription
>;
