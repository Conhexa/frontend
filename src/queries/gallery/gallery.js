import gql from "graphql-tag";
const GALLERIES_QUERY = gql`
  query Galleries ($slug: String!){
    galleries (where: {slug: $slug}) {
      slug
      name
      photo {
        id
        name
        url
      }
    }
  }
`;
export default GALLERIES_QUERY;