import gql from "graphql-tag";
const CATEGORY_ACADEMIES_QUERY = gql`
    query CategoryAcademy{
        academyCategories{
            name
            slug
            academies{
                title
                description
                content
                slug
                image{
                    url
                    name
                }
            }
        }
    }
`;
export default CATEGORY_ACADEMIES_QUERY;