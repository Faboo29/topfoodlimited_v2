import { gql } from '@apollo/client';

export const GET_HOME = gql`
  query Home {
    staffSectionCollection(limit: 1) {
      items {
        title
      }
    }
    staffCollection {
      items {
        name
        firstName
        profilePicture {
          url
          title
        }
        description {
          json
        }
        title
        jobTitle
        sys {
          id
        }
        order
      }
    }
    heroCollection(limit: 1) {
      limit
      items {
        title
        mainTitle {
          json
        }
        animationDuration
      }
    }
    aboutCollection(limit: 1) {
      items {
        title
        aboutContent {
          json
        }
        aboutImage {
          url
          size
          title
        }
      }
    }
    advantagesCollection(limit: 1) {
      items {
        title
        description {
          json
        }
        background {
          title
          url
        }
      }
    }
    customerSectionCollection(limit: 1) {
      items {
        title
      }
    }
    customersCollection {
      items {
        name
        customerLogo {
          url
          title
        }
        customerDescription {
          json
        }
        sys {
          id
        }
      }
    }
  }
`;
