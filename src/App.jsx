import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { GrNode } from "react-icons/gr";
import { GiSpeedBoat } from "react-icons/gi";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { SiRedux } from "react-icons/si";

import {
  ChakraProvider,
  Flex,
  Heading,
  Container,
  Button,
  Link,
  Box,
  theme,
  Avatar,
  Text,
  Center,
  Stack,
} from "@chakra-ui/react";
import { ControlledCarousel } from "./component/carausel";
import { Footer } from "./component/footer";
import { Navbar } from "./component/navbar";
import { About } from "./component/About";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />

      <Box>
        <Box className="pt-5">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            h="100vh"
            flexWrap="wrap-reverse"
            bg={"#10101a"}
            color={"#fff"}
          >
            <Container
              display="flex"
              alignItems="center"
              flexDirection="column"
            >
              <Heading
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontSize="5xl"
                fontWeight="bold"
              >
                Udit Kishor
              </Heading>
              <Text fontSize="3xl">Full-Stack Web Developer</Text>
              <Link
                href="https://drive.google.com/file/d/1nqUCkSMugT9iuEpsg_YW1dZMzqkipPPw/view?usp=sharing"
                target={"_blank"}
                _hover={{ textDecoration: "none" }}
              >
                <Button
                  bgGradient="linear(to-l, #10101a, #FF0080)"
                  variant="solid"
                >
                  Resume
                </Button>
              </Link>
            </Container>

            <Container display="flex" justifyContent="center">
              <Avatar
                padding="15px"
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                size="6xl"
                src="https://avatars.githubusercontent.com/u/95956949?s=400&u=3a152578a7f9931400866d4bf9fc3a4c137ce840&v=4"
              ></Avatar>
            </Container>
          </Box>
          <About />
          <Box id="skills" border={"2px"} bg={"#10101a"}>
            <Box
              display={"flex"}
              flexDirection="column"
              margin="20px"
              justifyContent={"space-around"}
              bg={"#10101a"}
              color={"rgb(175, 167, 167)"}
              boxShadow="3px 3px 7px  5px black"
            >
              <Center fontSize={"5xl"} className="p-5" fontWeight={"bold"}>
                Skills
              </Center>
              <Box
                height={"90%"}
                display={"flex"}
                padding={"40px"}
                flexWrap={"wrap"}
                gap={"10px"}
                alignItems={"center"}
                fontSize={"100px"}
                justifyContent={"space-around"}
              >
                <div>
                  <FaHtml5 />
                  <Center fontSize={"2xl"} fontWeight={"bold"}>
                    HTML
                  </Center>
                </div>
                <div>
                  <DiCss3 />
                  <Center fontSize={"2xl"} fontWeight={"bold"}>
                    css
                  </Center>
                </div>
                <div>
                  <IoLogoJavascript />
                  <Center fontSize={"2xl"} fontWeight={"bold"}>
                    JavaScript
                  </Center>
                </div>
                <div>
                  <GrNode />
                  <Center fontSize={"2xl"} fontWeight={"bold"}>
                    Node JS
                  </Center>
                </div>
                <div>
                  <GiSpeedBoat />
                  <Center fontSize={"2xl"} fontWeight={"bold"}>
                    Express JS
                  </Center>
                </div>
                <div>
                  <RiReactjsLine />
                  <Center fontSize={"2xl"} fontWeight={"bold"}>
                    React
                  </Center>
                </div>
                <div>
                  <SiMongodb />
                  <Center fontSize={"2xl"} fontWeight={"bold"}>
                    MongoDB
                  </Center>
                </div>
                <div>
                  <SiRedux />
                  <Center fontSize={"2xl"} fontWeight={"bold"}>
                    Redux
                  </Center>
                </div>
                <div>
                  <FaBootstrap />
                  <Center fontSize={"2xl"} fontWeight={"bold"}>
                    Bootstrap
                  </Center>
                </div>
                <div>
                  <SiChakraui />
                  <Center fontSize={"2xl"} fontWeight={"bold"}>
                    Chakra UI
                  </Center>
                </div>
              </Box>
            </Box>
          </Box>
          <Box
            id="projects"
            border={"2px"}
            bgGradient="linear(to-l, #10101a, #FF0080)"
          >
            <Box
              display={"flex"}
              flexDirection="column"
              gap={"30px"}
              margin="20px"
              className="pt-5"
              bg={"#10101a"}
              color={"rgb(175, 167, 167)"}
              boxShadow="3px 3px 7px  5px black"
            >
              <Center fontSize={"5xl"} fontWeight={"bold"}>
                Projects
              </Center>

              <Box id="projects">
                <ControlledCarousel />
              </Box>
            </Box>
          </Box>
          <Box id="contacts">
            <Footer />
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
