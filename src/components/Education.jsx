import { Box, Spoiler, Text, Timeline } from "@mantine/core";
import encodingo from "../assets/images/encodingo.jpeg";
import weblogo from "../assets/images/weblogo.png";
import styled from "styled-components";
import { useMediaQuery } from "@mantine/hooks";

const Education = () => {
  const isMobile = useMediaQuery("(max-width: 1000px)");

  return (
    <Wrapper>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "1.5rem",
          margin: "4rem 0",
        }}
      >
        <h1 size={28}>Education Qualifications</h1>
        <Timeline active={0} className="timeline" bulletSize={40} lineWidth={3}>
          <Timeline.Item
            pb={30}
            active={true}
            color="pink"
            bullet={
              <img
                src={encodingo}
                alt="Encodingo"
                width={40}
                height={40}
                style={{
                  borderRadius: "50%",
                }}
              />
            }
            title={
              <Text className="title" ml={10} color="white">
                Bachelor's in Technology(Information technology)
              </Text>
            }
          >
            <Text ml={10}>
              <Spoiler
                maxHeight={isMobile ? 70 : 80}
                className="description"
                showLabel="Show more"
                hideLabel="Hide"
              >
                Currently in 3rd year with CGPA of 9.5
               
                
              </Spoiler>
            </Text>
            <Text mt={4} ml={10} className="company">
              Guru Gobind Singh Indraprastha University - Delhi , India
            </Text>
          </Timeline.Item>
       
          <Timeline.Item
            pb={30}
            bullet={
              <img
                src={weblogo}
                alt="Benoffe"
                width={40}
                height={40}
                style={{
                  borderRadius: "50%",
                }}
              />
            }
            title={
              <Text className="title" size="lg" color="white" ml={10}>
                Higher Secondary Schooling (XII)
              </Text>
            }
          >
            <Text size="md" ml={10}>
              <Spoiler
                 maxHeight={isMobile ? 70 : 80}
                showLabel="Show more"
                hideLabel="Hide"
                className="description"
              >
                Passed Higher Secondary Education(XII) in Science  with 90% in 2020 
               
              </Spoiler>
            </Text>
            <Text mt={4} ml={10} className="company">
              Central Board of Secondary Education
            </Text>
          </Timeline.Item>
       
        </Timeline>
      </Box>
    </Wrapper>
  );
};

export default Education;

const Wrapper = styled.div`
  .description {
    color: white;
    font-size: 17px;
    font-family: "Poppins", sans-serif;
    @media screen and (max-width: 1000px) {
      font-size: 15px;
    }
  }

  .title {
    font-size: 20px;
    font-family: "Libre Baskerville", serif;

    @media screen and (max-width: 1000px) {
      font-size: 17px;
    }
  }
  .company {
    color: grey;
    font-size: 17px;
    @media screen and (max-width: 1000px) {
      font-size: 15px;
    }
  }
`;