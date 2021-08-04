import gql from "graphql-tag";
const SHOP_QUERY = gql`
    shops{
            id
            name
            description
            price
            quantity
            slug
    }
`;
export default SHOP_QUERY;