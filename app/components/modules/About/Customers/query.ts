import { gql } from '@apollo/client';

export const PRODUCTS_QUERY = gql`
  query ($id: String!) {
    productsCollection(where: { customer: { sys: { id: $id } } }) {
      items {
        productImage {
          url
          title
          width
          height
        }
        sys {
          id
        }
      }
    }
  }
`;
