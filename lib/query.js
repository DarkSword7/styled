import { gql } from "@apollo/client";
export const PRODUCT_QUERY = gql`
  query {
    products {
      data {
        attributes {
          title
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
