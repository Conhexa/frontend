import gql from "graphql-tag";
const CATEGORIES_GALLERY_QUERY = gql`
  query CategoriesGallery {
    galleries {
        id
        slug
        name
        photo{
            url
        }
    }
  }
`;
export default CATEGORIES_GALLERY_QUERY;