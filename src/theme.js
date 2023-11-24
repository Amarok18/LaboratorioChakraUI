import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Roboto, sans-serif", // Replace with your preferred font
    heading: "Montserrat, sans-serif", // Replace with your preferred font
  },
  colors: {
    primary: {
      50: "#f0e6f3",
      100: "#d1b5e8",
      // Add more shades as needed
      500: "#6a0572",
      900: "#120318",
    },
    secondary: {
      50: "#f8f8f8",
      100: "#e1e1e1",
      // Add more shades as needed
      500: "#333",
      900: "#000",
    },
  },
  components: {
    Card: {
      baseStyle: {
        border: "1px solid black",
        borderRadius: "md",
        boxShadow: "lg",
      },
    },
    Button: {
      baseStyle: {
        borderRadius: "md",
      },
      variants: {
        solid: {
          bg: "primary.500",
          color: "white",
          _hover: {
            bg: "primary.900",
          },
        },
        outline: {
          border: "1px solid",
          borderColor: "primary.500",
          color: "primary.500",
          _hover: {
            bg: "primary.50",
          },
        },
      },
    },
  },
});

export default theme;
