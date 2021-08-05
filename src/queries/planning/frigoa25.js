import gql from "graphql-tag";
const PLANNING_FRIGOA25_QUERY = gql`
    query PlanningFrigoA25{
        planningFrigoA25s{
            id 
            comment 
            picture{
                url 
                name
            } 
            slug
        }
    }
`;
export default PLANNING_FRIGOA25_QUERY;