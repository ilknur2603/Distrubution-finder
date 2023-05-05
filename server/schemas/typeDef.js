//import Graphql
const {gql} = require("apollo-server-express");
//User, username and email necessary
//This schema defines 4 main types: User, Auth, Charity, and Donation

const typeDefs = gql`
type User{
    _id :ID!
    username : String!
    email : String!
    charities:[Charity]
    donations : [Donation]
    categories : [Category]
}

# declaring type Auth with it values
type Auth {
    token : ID!
    user : User
}

type Charity {
    _id :ID
    name : String
    location : String Donation
    mission : String
    ein : String 
    categories : [Category]
}
type  Donation {
    _id : ID
    donationAmount : Float!
    donationDate: String!
    user : User!
    charity : Charity!
}

#Query: Defines operations for querying data. It is used for querying users, a specific user, the logged-in user (me), a specific charity, all charities, and all donations.

type Query {
    users : [User]!
    user(userId : ID!) User
    me : User
    charity(charityId:ID!) : Charity
    charities : [Charity]
    donations : [Donation]
}
#We will do update, delete and add with using Mutation
type Mutation {
    addUser(username : String!, email : String!, password : String!) : Auth
    login(email:String!, password : String!) Auth
    addDonation(
        donationAmount : Float!
        donationDate : String!
        charity : ID! Donation
        saveCharity(charityId: ID!): User
        unsaveCharity(charityId: ID!): User
    )

}
`
module.exports = typeDefs;