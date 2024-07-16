import { Box, Button, Container, Flex, Text,  useColorMode, useColorModeValue} from "@chakra-ui/react"
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import CreateUserModal from "./CreateUserModal";

export const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Container maxW={"900px"}>
        <Box px={4} my={4} borderRadius={5} bg={useColorModeValue("gray.200", "gray.700")}>
        <Flex h="16" alignItems={"center"} justifyContent={"space-between"}>

            {/* Left side */}
            <Flex alignItems={"center"} justifyContent={"center"} gap={3} display={{base: "none", sm: "flex"}} >
                <img src="/friends.png" alt="friends img" width={50} height={50}></img>
                <Text fontSize={"40px"}>+</Text>
                <img src="/Coding.png" alt="coding img" width={50} height={50}></img>
                <Text fontSize={"40px"}>=</Text>
                <img src="/fun.png" alt="fun img" width={50} height={50}></img>
            </Flex>

            {/* Right side */}
            <Flex gap={3} alignItems={"center"}>
                <Text fontSize={"lg"} fontWeight={500} display={{base: "none", md: "block"}}>CodingFriends 🔥</Text>
                <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? <IoMoon/> : <LuSun size={20}/>}
                </Button>
                <CreateUserModal />
            </Flex>

        </Flex>
        </Box>
    </Container>
  )
}
 