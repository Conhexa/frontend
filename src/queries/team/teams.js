import gql from "graphql-tag";
const TEAM_QUERY = gql`
    query Teams{
        teams{
            id
            firstName
            lastName
            job
            picture{
                url
            }
        }
    }
`;
export default TEAM_QUERY;