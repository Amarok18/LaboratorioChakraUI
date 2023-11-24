import React from "react";
import { Card, CardHeader,CardFooter, Heading, Button,Flex ,Box, ChakraProvider} from "@chakra-ui/react";

function Header() {
  return (
    <ChakraProvider>
      <Card
        pos={"relative"}
        left={{ base: "15vw", xl: "21vw" }}
        w="800px"
        h="300px"
        p="4"
        align="center"
        bgPosition="center"
        bgImage={
          "https://www.chromethemer.com/download/hd-wallpapers/sports-car-futuristic-mountain-sunset-3840x2160.jpg"
        }
        bgSize={"100%"}
        bgRepeat={"no-repeat"}
      >
        <CardHeader>
          <Heading size="md" color="white" pos={"relative"} top={"7vh"}>
            {" "}
            DOMINA EL TERRENO
          </Heading>
        </CardHeader>
        <CardFooter>
          <Button
            bg="transparent"
            pos={"relative"}
            top={"3vh"}
            color={"white"}
            w={"100%"}
            _hover={{
              bg: "white",
              color: "black",
              cursor: "pointer",
            }}
          >
            VER DETALLES
          </Button>
          <Button
            bg="transparent"
            w={"100%"}
            _hover={{
              bg: "white",
              color: "black",
              cursor: "pointer",
            }}
            color="white"
            pos={"relative"}
            top={"3vh"}
            ml="10px"
          >
            VER VIDEO
          </Button>
        </CardFooter>
      </Card>
      <Card
        bgPosition="center"
        bgImage={
          "https://www.chromethemer.com/download/hd-wallpapers/sports-car-futuristic-mountain-sunset-3840x2160.jpg"
        }
        bgColor={"transparent"}
        bgSize={"100%"}
        bgRepeat={"no-repeat"}
        w="300px"
        h="200px"
        p="4"
        ml={{ base: "15vw", xl: "21vw" }}
        align="center"
      >
        <CardHeader>
          <Heading size="md" color="white" pos={"relative"} top={"17%"}>
            {" "}
            DOMINA EL TERRENO
          </Heading>
        </CardHeader>
        <CardFooter>
          <Flex flexDirection={"column"}>
            <Button
              bg="transparent"
              pos={"relative"}
              top={"-5vh"}
              color={"white"}
              w={"100%"}
              _hover={{
                bg: "white",
                color: "black",
                cursor: "pointer",
              }}
            >
              VER DETALLES
            </Button>
            <Button
              bg="transparent"
              pos={"relative"}
              top={"-2vh"}
              color={"white"}
              w={"100%"}
              pt={"0px"}
              _hover={{
                bg: "white",
                color: "black",
                cursor: "pointer",
              }}
            >
              VER VIDEO
            </Button>
          </Flex>
        </CardFooter>
      </Card>
    </ChakraProvider>
  );
}

export default Header;
