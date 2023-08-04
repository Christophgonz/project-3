const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    savedLocations: [Location]
  }

  type Location {
    _id: ID!
    name: String!
    lat: Int!
    long: Int!
    savedFeatures: [Feature]
  }

  type Feature {
    _id: ID!
    name: String!
    dist: Int!
    rate: Int!
    wikidata: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    location(name: String!): Location
    feature(name: String!): Feature
  }

  type Mutation {
    addUser(username: String!, password: String!): Auth
    addLocation(username: String!, name: String!, lat: Int!, long: Int!): Location
    addFeature(locationName: String!, name: String!, dist: Int!, rate: Int!, wikidata: String!): Feature
    removeLocation(userId: ID!, locationId: ID!): Location
    removeFeature(locationId: ID!, featureId: ID!): Feature
    login(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
