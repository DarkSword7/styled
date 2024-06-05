import { gql } from "@apollo/client";

export const PRODUCT_QUERY = gql`
  query {
    products {
      data {
        attributes {
          title
          slug
          description
          price
          image {
            data {
              attributes {
                formats
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_PRODUCT_QUERY = gql`
  query getProduct($slug: String!) {
    products(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          title
          slug
          description
          price
          image {
            data {
              attributes {
                formats
              }
            }
          }
        }
      }
    }
  }
`;
