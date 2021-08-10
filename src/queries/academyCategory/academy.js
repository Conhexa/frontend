import gql from "graphql-tag";
const CATEGORY_ACADEMIES_QUERY = gql`
    query CategoryAcademy ($slug: String!){
        academyCategories (where: {slug: $slug}){
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
                academy_category{
                    name
                }
            }
        }
    }
`;
export default CATEGORY_ACADEMIES_QUERY;