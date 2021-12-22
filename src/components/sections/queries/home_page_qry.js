import { gql } from 'graphql-request';

export const HOME_PAGE_DATA_QUERY = gql`
  query {
    products_top_sale: products(
      first: 12
      where: { orderby: { field: TOTAL_SALES } }
    ) {
      nodes {
        id
        productId: databaseId
        averageRating
        reviewCount
        slug
        image {
          id
          uri
          title
          sourceUrl
        }
        name
        ... on SimpleProduct {
          price
          regularPrice
          id
          slug
          productCategories {
            nodes {
              name
              slug
              id
            }
          }
        }
        ... on VariableProduct {
          price
          regularPrice
          id
          productCategories {
            nodes {
              name
              slug
              id
            }
          }
        }
        ... on ExternalProduct {
          price
          regularPrice
          id
          slug
          externalUrl
        }
      }
    }
    products_top_rated: products(
      first: 12
      where: { orderby: { field: RATING } }
    ) {
      nodes {
        id
        productId: databaseId
        averageRating
        reviewCount
        slug
        image {
          id
          uri
          title
          sourceUrl
        }
        name
        ... on SimpleProduct {
          price
          regularPrice
          id
          slug
          productCategories {
            nodes {
              name
              slug
              id
            }
          }
        }
        ... on VariableProduct {
          price
          regularPrice
          id
          productCategories {
            nodes {
              name
              slug
              id
            }
          }
        }
        ... on ExternalProduct {
          price
          regularPrice
          id
          slug
          externalUrl
        }
      }
    }
    products_new_added: products(
      first: 12
      where: { orderby: { field: DATE, order: DESC } }
    ) {
      nodes {
        id
        productId: databaseId
        averageRating
        reviewCount
        slug
        image {
          id
          uri
          title
          sourceUrl
        }
        name
        ... on SimpleProduct {
          price
          regularPrice
          id
          slug
          productCategories {
            nodes {
              name
              slug
              id
            }
          }
        }
        ... on VariableProduct {
          price
          regularPrice
          id
          productCategories {
            nodes {
              name
              slug
              id
            }
          }
        }
        ... on ExternalProduct {
          price
          regularPrice
          id
          slug
          externalUrl
        }
      }
    }
    products_feature: products(first: 12, where: { featured: true }) {
      nodes {
        id
        productId: databaseId
        averageRating
        reviewCount
        slug
        image {
          id
          uri
          title
          sourceUrl
        }
        name
        ... on SimpleProduct {
          price
          regularPrice
          id
          slug
          productCategories {
            nodes {
              name
              slug
              id
            }
          }
        }
        ... on VariableProduct {
          price
          regularPrice
          id
          slug
          productCategories {
            nodes {
              name
              slug
              id
            }
          }
        }
        ... on ExternalProduct {
          price
          regularPrice
          id
          slug
          externalUrl
        }
      }
    }
    product_categories: productCategories(
      first: 100
      where: { orderby: COUNT, order: DESC }
    ) {
      nodes {
        id
        databaseId
        name
        slug
        count
        parentId
        parentDatabaseId
        image {
          id
          sourceUrl
        }
      }
    }

    recent_posts: posts(first: 6) {
      nodes {
        date
        excerpt
        title
        slug
        id
        databaseId
        featuredImage {
          node {
            sourceUrl
          }
        }
        author {
          node {
            firstName
            lastName
            databaseId
          }
        }
        categories {
          nodes {
            id
            databaseId
            name
            slug
          }
        }
      }
    }
  }
`;

export default HOME_PAGE_DATA_QUERY;
