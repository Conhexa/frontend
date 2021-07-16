import gql from "graphql-tag";
const ARTICLE_QUERY = gql`
  query Article($slug: String!){
    articles(where: {slug: $slug}) {
      slug
      title
      content
      category {
        slug
        name
      }
      image {
        url
      }
      author{
        name
        picture{
            url
        }
      }
    }
  }
`;
export default ARTICLE_QUERY;