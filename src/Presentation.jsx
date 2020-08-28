import React from "react";
import {
  Appear,
  Box,
  CodePane,
  CodeSpan,
  Deck,
  FlexBox,
  FullScreen,
  Grid,
  Heading,
  Image,
  ListItem,
  Markdown,
  Notes,
  OrderedList,
  Progress,
  Slide,
  SpectacleLogo,
  Stepper,
  Text,
  UnorderedList,
  indentNormalizer,
} from "spectacle";
import Chart from "./Chart";
import data from "./data";
import styled from "styled-components";
const brandAwarenessData = data.reports["brand_awareness-41"];
const totals = brandAwarenessData.data.report_data.totals;
const StyledText = styled(Text)`
  padding: 0px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

const HeaderText = styled(StyledText)`
  font-size: 28px;
  color: #eb4f34;
`;
const HeaderSubText = styled(StyledText)`
  font-size: 18px;
  color: #ebc334;
  margin-left: 20px;
`;

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={-15}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);
const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
};

const Slide1 = () => (
  <FlexBox
    flexDirection="column"
    alignItems="flex-start"
    position="relative"
    height="100%"
  >
    <FlexBox
      backgroundColor="white"
      height="10%"
      justifyContent="start"
      alignItems="center"
      width="100%"
    >
      <FlexBox
        justifyContent="start"
        alignItems="center"
        pl="30px"
        width="100%"
      >
        <HeaderText>Campaign Performance</HeaderText>
        <HeaderSubText>August</HeaderSubText>
      </FlexBox>
    </FlexBox>
    <FlexBox
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="start"
      flex="1"
      width="100%"
    >
      <Box mt="30px" width="100%">
        <Grid gridGap={50} mb="80px" gridTemplateColumns={"auto auto auto"}>
          <Box padding={"10px"} backgroundColor="white">
            <StyledText color="#1e2852" textAlign={"center"} fontSize={"18px"}>
              Impressions
            </StyledText>
            <Text
              padding="0px"
              margin="0px"
              color="black"
              textAlign={"center"}
              fontSize={"28px"}
            >
              {totals.impressions}
            </Text>
          </Box>
          <Box padding={10} backgroundColor="white">
            <StyledText color="#1e2852" textAlign={"center"} fontSize={"18px"}>
              Clicks
            </StyledText>
            <Text
              padding="0px"
              margin="0px"
              color="black"
              textAlign={"center"}
              fontSize={"28px"}
            >
              {totals.clicks}
            </Text>
          </Box>
          <Box padding={10} backgroundColor="white">
            <StyledText color="#1e2852" textAlign={"center"} fontSize={"18px"}>
              CTR
            </StyledText>
            <Text
              padding="0px"
              margin="0px"
              color="black"
              textAlign={"center"}
              fontSize={"28px"}
            >
              {totals.ctr}
            </Text>
          </Box>
        </Grid>
      </Box>
      <FlexBox width="100%" flex={1}>
        <Chart data={brandAwarenessData.data.report_data.intervals} />
      </FlexBox>
    </FlexBox>
    <FlexBox backgroundColor="white" width="100%" height="15%">
      Footer
    </FlexBox>
  </FlexBox>
);

const Slide2 = () => (
  <FlexBox
    flexDirection="column"
    alignItems="flex-start"
    position="relative"
    height="100%"
  >
    <FlexBox
      backgroundColor="white"
      height="10%"
      justifyContent="start"
      alignItems="center"
      width="100%"
    >
      <FlexBox
        justifyContent="start"
        alignItems="center"
        pl="30px"
        width="100%"
      >
        <HeaderText>Campaign Performance</HeaderText>
        <HeaderSubText>August</HeaderSubText>
      </FlexBox>
    </FlexBox>
    <FlexBox
      flexDirection="row"
      alignItems="flex-start"
      justifyContent="start"
      flex="1"
      width="100%"
    >
      <FlexBox flex="0.7">
        <Box mt="30px" width="100%">
          <Grid gridGap={50} mb="80px" gridTemplateColumns={"auto auto auto"}>
            <Box padding={"10px"} backgroundColor="white">
              <StyledText
                color="#1e2852"
                textAlign={"center"}
                fontSize={"18px"}
              >
                Impressions
              </StyledText>
              <Text
                padding="0px"
                margin="0px"
                color="black"
                textAlign={"center"}
                fontSize={"28px"}
              >
                {totals.impressions}
              </Text>
            </Box>
            <Box padding={10} backgroundColor="white">
              <StyledText
                color="#1e2852"
                textAlign={"center"}
                fontSize={"18px"}
              >
                Clicks
              </StyledText>
              <Text
                padding="0px"
                margin="0px"
                color="black"
                textAlign={"center"}
                fontSize={"28px"}
              >
                {totals.clicks}
              </Text>
            </Box>
            <Box padding={10} backgroundColor="white">
              <StyledText
                color="#1e2852"
                textAlign={"center"}
                fontSize={"18px"}
              >
                CTR
              </StyledText>
              <Text
                padding="0px"
                margin="0px"
                color="black"
                textAlign={"center"}
                fontSize={"28px"}
              >
                {totals.ctr}
              </Text>
            </Box>
          </Grid>
        </Box>
      </FlexBox>
      <FlexBox ml={32} pt={"32px"} flex="0.3">
        <Box>
          <Text fontSize="22px" padding="0px" margin="0px" mb="10px">
            Total Exposure Time
          </Text>
          <Text padding="0px" margin="0px" fontSize="18px">
            The total time in hours that the ad was active and viewable
          </Text>
          <Text fontSize="22px" padding="0px" margin="0px" mt="30px" mb="10px">
            Takeaways
          </Text>
          <Text padding="0px" margin="0px" fontSize="18px">
            Changing out creative to have more variety has improved
            click-through rate month over month. We have seen a steady
            improvement in clickthrough rate over the last few months.
          </Text>
          <Text fontSize="22px" padding="0px" margin="0px" mt="30px" mb="10px">
            Recommendations
          </Text>
          <Text padding="0px" margin="0px" fontSize="18px">
            I suggest continuing on this strategy and expanding placements like
            our Paramount.
          </Text>
        </Box>
      </FlexBox>
    </FlexBox>
    <FlexBox backgroundColor="white" width="100%" height="15%">
      Footer
    </FlexBox>
  </FlexBox>
);

function App() {
  return (
    <Deck theme={theme} template={template}>
      <Slide>
        <Slide1 />
      </Slide>
      <Slide>
        <Slide2 />
      </Slide>
    </Deck>
  );
}

export default App;
