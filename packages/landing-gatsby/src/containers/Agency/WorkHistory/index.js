import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Card from 'common/src/components/Card';
import Image from 'common/src/components/Image';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import MemberImg1 from 'common/src/assets/image/agency/member-img1.jpg';
import MemberImg2 from 'common/src/assets/image/agency/member-img2.jpg';
import WorkHistoryWrapper, { CounterUpArea } from './workHistory.style';

const WorkHistory = ({ row, col, cardStyle, title, description, btnStyle }) => {
  return (
    <WorkHistoryWrapper id="workHistorySection">
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <FeatureBlock
              title={
                <Heading
                  content="Responsive, Creative, Resilient!"
                  {...title}
                />
              }
              description={
                <Text
                  content="New concepts are needed to change the way we do things in the world. We belive in a sustainable economy not driven by profit but by purpose."
                  {...description}
                />
              }
              button={<Button title="JOIN THE COMMUNITY" {...btnStyle} />}
            />
          </Box>
          <Box className="col" {...col}>
            <CounterUpArea>
              <Card className="card" {...cardStyle}>
                <Image src={MemberImg1} alt="Member1" />
              </Card>
              <Card className="card" {...cardStyle}>
                <Image src={MemberImg2} alt="Member2" />
              </Card>
              <Card className="card" {...cardStyle}>
                <Text content="AND YOU 👋" />
              </Card>
            </CounterUpArea>
          </Box>
        </Box>
      </Container>
    </WorkHistoryWrapper>
  );
};

// WorkHistory style props
WorkHistory.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  cardStyle: PropTypes.object,
};

// WorkHistory default style
WorkHistory.defaultProps = {
  // WorkHistory section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // WorkHistory section col default style
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, 1, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: 'center',
  },
  // Card default style
  cardStyle: {
    p: ['0px', '0px', '0px', '0px'],
    borderRadius: '10px',
    boxShadow: '0px 8px 20px 0px rgba(16, 66, 97, 0.07)',
  },
  // WorkHistory section title default style
  title: {
    fontSize: ['26px', '26px', '30px', '40px'],
    lineHeight: '1.5',
    fontWeight: '900',
    color: '#0f2137',
    letterSpacing: '0.025em',
    mb: '20px',
  },
  // WorkHistory section description default style
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px',
  },
  // Button default style
  btnStyle: {
    color: '#091632',
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
};

export default WorkHistory;
