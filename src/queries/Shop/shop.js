import gql from "graphql-tag";
const SHOP_QUERY = gql`
query Shop{
    shops{
            id
            name
            description
            price
            quantity
            slug
            picture {
                url
                name
            }
    }
}
`;
export default SHOP_QUERY;