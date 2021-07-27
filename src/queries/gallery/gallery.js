import gql from "graphql-tag";
const GALLERIES_QUERY = gql`
  query Galleries {
    galleries {
      id
      Name
    }
  }
`;
export default GALLERIES_QUERY;