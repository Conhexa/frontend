import gql from "graphql-tag";
const EMPLOYEE_QUERY = gql`
    query Employee{
        employees{
            firstName
            lastName
            job
            description
            picture{
                name 
                url
            }
            slug
        }
    }
`;
export default EMPLOYEE_QUERY;