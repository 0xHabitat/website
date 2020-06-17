import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import { BannerWrapper, Sun } from './bannerSection.style';
import { ExternalLink } from 'react-external-link';

const BannerSection = ({
  row,
  col,
  title,
  btnStyle,
  description,
  outlineBtnStyle,
}) => {
  const ButtonGroup = () => (
    <Fragment>
      <ExternalLink href="https://calendly.com/deora_earth/intro">
        <Button title="Meet us" {...btnStyle} />
      </ExternalLink>
    </Fragment>
  );
  return (
    <BannerWrapper>
      <Sun />
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <FeatureBlock
              title={
                <Heading
                  content="We are explorers and builders for the future of collaboration."
                  {...title}
                />
              }
              button={<ButtonGroup />}
            />
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
  discountText: PropTypes.object,
  discountAmount: PropTypes.object,
  outlineBtnStyle: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: ['100%', '70%', '60%', '50%'],
  },
  title: {
    fontSize: ['18px', '24px', '24px', '30px', '36px'],
    fontWeight: '900',
    color: '#0f2137',
    letterSpacing: '0.025em',
    mb: ['20px', '25px'],
    lineHeight: '1.31',
    textTransform: 'uppercase',
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.6',
    pr: '85px',
    mb: '0',
  },
  btnStyle: {
    minWidth: ['120px', '156px'],
    fontSize: '14px',
    fontWeight: '500',
    color: '#091632',
  },
  outlineBtnStyle: {
    minWidth: ['130px', '156px'],
    fontSize: '14px',
    fontWeight: '500',
    color: '#0f2137',
    p: '5px 10px',
  },
};

export default BannerSection;
