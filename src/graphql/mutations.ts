/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createTodo = /* GraphQL */ `mutation CreateTodo(
  $input: CreateTodoInput!
  $condition: ModelTodoConditionInput
) {
  createTodo(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTodoMutationVariables,
  APITypes.CreateTodoMutation
>;
export const updateTodo = /* GraphQL */ `mutation UpdateTodo(
  $input: UpdateTodoInput!
  $condition: ModelTodoConditionInput
) {
  updateTodo(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTodoMutationVariables,
  APITypes.UpdateTodoMutation
>;
export const deleteTodo = /* GraphQL */ `mutation DeleteTodo(
  $input: DeleteTodoInput!
  $condition: ModelTodoConditionInput
) {
  deleteTodo(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTodoMutationVariables,
  APITypes.DeleteTodoMutation
>;
export const createUserProfile = /* GraphQL */ `mutation CreateUserProfile(
  $input: CreateUserProfileInput!
  $condition: ModelUserProfileConditionInput
) {
  createUserProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserProfileMutationVariables,
  APITypes.CreateUserProfileMutation
>;
export const updateUserProfile = /* GraphQL */ `mutation UpdateUserProfile(
  $input: UpdateUserProfileInput!
  $condition: ModelUserProfileConditionInput
) {
  updateUserProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserProfileMutationVariables,
  APITypes.UpdateUserProfileMutation
>;
export const deleteUserProfile = /* GraphQL */ `mutation DeleteUserProfile(
  $input: DeleteUserProfileInput!
  $condition: ModelUserProfileConditionInput
) {
  deleteUserProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserProfileMutationVariables,
  APITypes.DeleteUserProfileMutation
>;
export const createJob = /* GraphQL */ `mutation CreateJob(
  $input: CreateJobInput!
  $condition: ModelJobConditionInput
) {
  createJob(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateJobMutationVariables,
  APITypes.CreateJobMutation
>;
export const updateJob = /* GraphQL */ `mutation UpdateJob(
  $input: UpdateJobInput!
  $condition: ModelJobConditionInput
) {
  updateJob(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateJobMutationVariables,
  APITypes.UpdateJobMutation
>;
export const deleteJob = /* GraphQL */ `mutation DeleteJob(
  $input: DeleteJobInput!
  $condition: ModelJobConditionInput
) {
  deleteJob(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteJobMutationVariables,
  APITypes.DeleteJobMutation
>;
export const createLike = /* GraphQL */ `mutation CreateLike(
  $input: CreateLikeInput!
  $condition: ModelLikeConditionInput
) {
  createLike(input: $input, condition: $condition) {
    id
    userId
    jobId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateLikeMutationVariables,
  APITypes.CreateLikeMutation
>;
export const updateLike = /* GraphQL */ `mutation UpdateLike(
  $input: UpdateLikeInput!
  $condition: ModelLikeConditionInput
) {
  updateLike(input: $input, condition: $condition) {
    id
    userId
    jobId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateLikeMutationVariables,
  APITypes.UpdateLikeMutation
>;
export const deleteLike = /* GraphQL */ `mutation DeleteLike(
  $input: DeleteLikeInput!
  $condition: ModelLikeConditionInput
) {
  deleteLike(input: $input, condition: $condition) {
    id
    userId
    jobId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteLikeMutationVariables,
  APITypes.DeleteLikeMutation
>;
export const createMatch = /* GraphQL */ `mutation CreateMatch(
  $input: CreateMatchInput!
  $condition: ModelMatchConditionInput
) {
  createMatch(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMatchMutationVariables,
  APITypes.CreateMatchMutation
>;
export const updateMatch = /* GraphQL */ `mutation UpdateMatch(
  $input: UpdateMatchInput!
  $condition: ModelMatchConditionInput
) {
  updateMatch(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMatchMutationVariables,
  APITypes.UpdateMatchMutation
>;
export const deleteMatch = /* GraphQL */ `mutation DeleteMatch(
  $input: DeleteMatchInput!
  $condition: ModelMatchConditionInput
) {
  deleteMatch(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMatchMutationVariables,
  APITypes.DeleteMatchMutation
>;
export const createEvent = /* GraphQL */ `mutation CreateEvent(
  $input: CreateEventInput!
  $condition: ModelEventConditionInput
) {
  createEvent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateEventMutationVariables,
  APITypes.CreateEventMutation
>;
export const updateEvent = /* GraphQL */ `mutation UpdateEvent(
  $input: UpdateEventInput!
  $condition: ModelEventConditionInput
) {
  updateEvent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateEventMutationVariables,
  APITypes.UpdateEventMutation
>;
export const deleteEvent = /* GraphQL */ `mutation DeleteEvent(
  $input: DeleteEventInput!
  $condition: ModelEventConditionInput
) {
  deleteEvent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteEventMutationVariables,
  APITypes.DeleteEventMutation
>;
