import gql from "graphql-tag";
const PLANNING_DUNFROST_QUERY = gql`
    query PlanningDunfrost{
        planningDunFrosts{
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
export default PLANNING_DUNFROST_QUERY;