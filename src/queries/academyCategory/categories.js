import gql from "graphql-tag";
const CATEGORY_ACADEMY_QUERY = gql`
    query AcamedyCategory{
        academyCategories{
            name
            slug
        }
    }
`;
export default CATEGORY_ACADEMY_QUERY;