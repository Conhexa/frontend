import gql from "graphql-tag";
const ACADEMY_QUERY = gql`
    query Academy ($slug: String!){
        academies (where: {slug: $slug}){
            title
            description
            content
            image{
                url
                name
            }
            slug
        }
    }
`;
export default ACADEMY_QUERY;