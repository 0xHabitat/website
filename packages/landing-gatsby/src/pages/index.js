import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { Modal } from '@redq/reuse-modal';
import { agencyTheme } from 'common/src/theme/agency';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle, AgencyWrapper } from '../containers/Agency/agency.style';
import Navbar from '../containers/Agency/Navbar';
import BannerSection from '../containers/Agency/BannerSection';
import AboutUsSection from '../containers/Agency/AboutUsSection';
import WorkHistory from '../containers/Agency/WorkHistory';
import BlogSection from '../containers/Agency/BlogSection';
import SupportBlock from '../containers/Agency/SupportBlock';
import Footer from '../containers/Agency/Footer';
import Newsletter from '../containers/Agency/Newsletter';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import '@redq/reuse-modal/es/index.css';
import SEO from '../components/seo';

export default () => {
  return (
    <ThemeProvider theme={agencyTheme}>
      <Fragment>
        <SEO title="Deroa | Decentralized Organisation Architecture" />
        <Modal />
        <ResetCSS />
        <GlobalStyle />

        <AgencyWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <AboutUsSection />
          <WorkHistory />
          <BlogSection />
          <Newsletter />
          <SupportBlock />
          <Footer />
        </AgencyWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
