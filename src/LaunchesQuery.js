import { gql } from "@apollo/client";

export const LAUNCHES_QUERY = gql`
  query LAUNCHES_QUERY {
    master_categories {
      id
      name
      categories {
        name
        id
        services {
          id
          name
        }
      }
    }
  }
`;
