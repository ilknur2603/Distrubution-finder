import { gql } from "@apollo/client";

export const LOGIN_USER = gql `
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql ` 
mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username  
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_CHARITY = gql `
mutation saveCharity(
    $name: String!, $city: String!, $state: String!) {
        saveCharity(name: $name, location: $location) {
            name
            city
            state
            mission
            link
            ein
            img
            categories: Category
        }
    }
`;

export const ADD_DONATION = gql `
mutation addDonation($donationamount: Int!) {
    addDonation(donationamount: $donationamount) {
        charity {
            name
            city
            state
            mission
            link
        }
        user {
            _id
            username
        }
    }
}
`;

export const UNSAVE_CHARITY = gql `
mutation unsaveCharity($name: String!) {
    unsaveCharity(name: $name) {
        _id
        username
        email
        password
        charity {
            name
            city
            state
            mission
            link
            ein
            img
        }
    }
}
`;