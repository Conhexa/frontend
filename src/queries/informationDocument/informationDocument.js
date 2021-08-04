import gql from "graphql-tag";
const INFFORMATION_DOCUMENT_QUERY = gql`
  query Galleries {
    informationDocuments{
        title 
        file{
          url 
          name
        } 
        slug
      }
  }
`;
export default INFFORMATION_DOCUMENT_QUERY;