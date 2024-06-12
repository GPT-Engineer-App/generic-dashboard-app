import { Box, Flex, Text, VStack, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaSun, FaMoon, FaHome, FaChartBar, FaCog } from "react-icons/fa";

const Sidebar = () => {
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("gray.900", "gray.100");
  const icon = useColorModeValue(<FaMoon />, <FaSun />);

  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      h="100%"
      w="250px"
      bg={bg}
      color={color}
      p={4}
      boxShadow="lg"
    >
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl" fontWeight="bold" mb={6}>
          Dashboard
        </Text>
        <IconButton aria-label="Home" icon={<FaHome />} size="lg" variant="ghost" />
        <IconButton aria-label="Analytics" icon={<FaChartBar />} size="lg" variant="ghost" />
        <IconButton aria-label="Settings" icon={<FaCog />} size="lg" variant="ghost" />
        <Box mt="auto">
          <IconButton aria-label="Toggle Theme" icon={icon} size="lg" variant="ghost" onClick={toggleColorMode} />
        </Box>
      </VStack>
    </Box>
  );
};

const Index = () => {
  return (
    <Flex>
      <Sidebar />
      <Box ml="250px" p={4} w="full">
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to Your Dashboard</Text>
          <Text>This is a generic dashboard app with a sidebar for navigation.</Text>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Index;