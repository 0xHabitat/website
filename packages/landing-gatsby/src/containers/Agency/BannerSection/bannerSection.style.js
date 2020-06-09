import styled from 'styled-components';
import BannerBG from 'common/src/assets/image/agency/hero-banner.png';

export const Sun = styled.div`
  width: 350px;
  height: 350px;
  position: absolute;
  display: block;
  top: -28%;
  left: -8%;
  z-index: -1;
  background-color: #ffde00;
  border-radius: 50%;
  box-shadow: 0 0 0 20px #ffde0080, 0 0 0 40px #ffde0040, 0 0 0 60px #ffde0020,
    0 0 0 80px #ffde0010, 0 0 0 100px #ffde0000, 0 0 40px 100px #ffde0010;
  animation: sunrise 2s infinite linear forwards, rays 2s 2s infinite linear;

  @keyframes sunrise {
    0% {
      box-shadow: none;
    }
  }

  @keyframes rays {
    0% {
      box-shadow: 0 0 0 0 #ffde0080, 0 0 0 20px #ffde0080, 0 0 0 40px #ffde0040,
        0 0 0 60px #ffde0020, 0 0 0 80px #ffde0010, 0 0 40px 100px #ffde0010;
    }
    100% {
      box-shadow: 0 0 0 20px #ffde0080, 0 0 0 40px #ffde0040,
        0 0 0 60px #ffde0020, 0 0 0 80px #ffde0010, 0 0 0 100px #ffde0000,
        0 0 40px 100px #ffde0010;
    }
  }
`;

export const BannerWrapper = styled.section`
  padding-top: 280px;
  padding-bottom: 140px;
  background-image: url(${BannerBG});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  @media only screen and (min-width: 1367px) {
    min-height: 100vh;
  }
  @media (max-width: 990px) {
    padding-top: 150px;
    padding-bottom: 100px;
  }
  @media only screen and (max-width: 480px) {
    background: none;
    padding-top: 130px;
    padding-bottom: 60px;
  }
  .particle {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    @media (max-width: 990px) {
      display: none;
    }
    @media only screen and (max-width: 480px) {
      width: 100%;
    }
  }
  .row {
    position: relative;
    z-index: 1;
  }
  .button__wrapper {
    margin-top: 40px;
    .reusecore__button {
      &:first-child {
        transition: all 0.3s ease;
        border: 2px solid #091632;
        box-shadow: 2px 2px 0px #091632;
        border-radius: 5px;
        &:hover {
          box-shadow: none;
        }
      }
    }
  }
`;
