import gql from 'graphql-tag';
const CATEGORY_ARTICLES_QUERY = gql`
  query Category($slug: String!){
    categories(where: {slug: $slug}) {
      name
      articles {
        slug
        title
        description
        content
        image {
          url
        }
        category {
          slug
          name
        }
        author{
          name
          picture{
              url
          }
        }
      }
    }
  }
`;
export default CATEGORY_ARTICLES_QUERY;