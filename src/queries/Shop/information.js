import gql from "graphql-tag";
const INFORMATION_CE_QUERY = gql`
    query InformationCE{
        informationCes{
            title
            content
            slug
        }
    }
`;
export default INFORMATION_CE_QUERY;