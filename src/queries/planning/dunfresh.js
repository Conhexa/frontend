import gql from "graphql-tag";
const PLANNING_DUNFRESH_QUERY = gql`
    query PlanningDunfresh{
        planningDunFreshes{
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
export default PLANNING_DUNFRESH_QUERY;