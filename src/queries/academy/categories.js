import gql from "graphql-tag";
const ACADEMY_CATEGORIES_QUERY = gql`
    query Academy{
        academies{
            title
            description
            image{
                url
                name
            }
            academy_category{
                name
            }
            slug
        }
    }
`;
export default ACADEMY_CATEGORIES_QUERY;