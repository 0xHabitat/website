import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Container from 'common/src/components/UI/Container';
import { Icon } from 'react-icons-kit';
import { ic_arrow_forward } from 'react-icons-kit/md/ic_arrow_forward';
import { ExternalLink } from 'react-external-link';

import NewsletterWrapper from './newsletter.style';

const Newsletter = ({
  sectionWrapper,
  textArea,
  buttonArea,
  title,
  description,
  btnStyleTwo,
  btnStyle,
}) => {
  return (
    <Box {...sectionWrapper} as="section">
      <Container>
        <NewsletterWrapper>
          <Box {...textArea}>
            <Heading
              content="INTERESTED IN THE FUTURE OF ORGANISATIONS ?"
              {...title}
            />
            <Text
              content="The movement for decentralized organisation is already here and we are part of it. We’d love to meet new fellow pioneers to exchange ideas, concepts and potential partnerships."
              {...description}
            />
          </Box>
          <Box {...buttonArea}>
            <ExternalLink href="https://calendly.com/deora_earth/intro">
              <Button
                {...btnStyle}
                {...btnStyleTwo}
                icon={<Icon icon={ic_arrow_forward} />}
                title="Let's chat"
              />
            </ExternalLink>
          </Box>
        </NewsletterWrapper>
      </Container>
    </Box>
  );
};

Newsletter.propTypes = {
  sectionWrapper: PropTypes.object,
  textArea: PropTypes.object,
  buttonArea: PropTypes.object,
  buttonStyle: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
};

Newsletter.defaultProps = {
  sectionWrapper: {},
  textArea: {
    mb: ['40px', '40px', '40px', '0', '0'],
    pr: ['0', '0', '80', '80px', '10px'],
  },
  title: {
    fontSize: ['18px', '20px', '22px', '24px', '26px'],
    fontWeight: '700',
    color: '#091632',
    lineHeight: '1.34',
    mb: ['14px', '14px', '14px', '14px', '13px'],
    textAlign: ['center', 'center', 'center', 'left', 'left'],
    letterSpacing: '-0.025em',
  },
  description: {
    fontSize: ['14px', '14px'],
    fontWeight: '400',
    color: '#091632',
    lineHeight: '1.7',
    maxWidth: '70%'[('100%', '70%')],
    mb: 0,
    textAlign: ['center', 'center', 'center', 'left', 'left'],
  },
  buttonArea: {
    zIndex: 1,
  },
  buttonStyle: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '700',
    border: '2px solid #091632',
    pl: '30px',
    pr: '30px',
    colors: 'secondaryWithBg',
    color: '#091632',
  },
  button: {
    type: 'button',
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#091632',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
  },
  btnStyleTwo: {
    minWidth: '156px',
    ml: '5px',
    color: '#091632',
  },
};

export default Newsletter;
