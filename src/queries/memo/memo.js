import gql from "graphql-tag";
const MEMO_QUERY = gql`
    query Memo{
        memos{
            id
            title
            content
            slug
        }
    }
`;
export default MEMO_QUERY;