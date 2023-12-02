/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      trademarkType
      trademarkText
      trademarkLogo
      ownerType
      ownerName
      abnAcn
      email
      phone
      address1
      suburb
      postcode
      state
      country
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      trademarkType
      trademarkText
      trademarkLogo
      ownerType
      ownerName
      abnAcn
      email
      phone
      address1
      suburb
      postcode
      state
      country
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      trademarkType
      trademarkText
      trademarkLogo
      ownerType
      ownerName
      abnAcn
      email
      phone
      address1
      suburb
      postcode
      state
      country
      createdAt
      updatedAt
      __typename
    }
  }
`;
