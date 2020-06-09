import styled from 'styled-components';
import { themeGet } from 'styled-system';

const AboutUsSectionWrapper = styled.section`
  padding: 80px 0 50px;
  overflow: hidden;

  @media (max-width: 990px) {
    padding: 60px 0 40px 0;
  }
  .col {
    align-self: center;
  }

  .group-gallery {
    box-shadow: none;
    display: flex;
    flex-wrap: wrap;
    .col1 {
      margin-left: 20px;
      width: 100%;
      margin-right: 30px;
      .gatsby-image-wrapper {
        margin-bottom: 30px;
      }
    }
    img {
      border-radius: 20px;
      max-width: 100%;
      height: auto;
      margin-bottom: 30px;
    }
  }

  .feature__block {
    align-items: center;
    margin-bottom: 14px;
    .icon__wrapper {
      color: ${themeGet('colors.primary', '#10ac84')};
      margin-right: 10px;
    }
    .content__wrapper {
      h2 {
        margin-bottom: 0;
      }
    }
  }

  .reusecore__button {
    margin-top: 36px;
    transition: all 0.3s ease;
    &:hover {
      box-shadow: 0px 9px 20px -5px rgba(16, 172, 132, 0.57);
    }
  }
`;

export default AboutUsSectionWrapper;
