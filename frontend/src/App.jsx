import {Container, Stack, Text } from "@chakra-ui/react"
import { Navbar } from "./components/Navbar"
import UserGrid from "./components/UserGrid"

function App() {

  return (
    <Stack minH={"100vh"}>
      
      <Navbar />

      <Container maxW={"1200px"} my={4}>
        <Text fontWeight={"bold"} letterSpacing={"2px"} textTransform={"uppercase"} textAlign={"center"} mb={8} fontSize={{base: "3xl", md: "50"}}>
          <Text 
          as={"span"}
          bgGradient='linear(to-l, #E26E43, #F8CE0E)'
          bgClip='text'
          fontSize='6xl'
          fontWeight='extrabold'
          >
            My Coding Besties  
          </Text>
          🚀
          <Text fontSize='md'>
          Connect with your next Code Bestie and share the joy of coding!
          </Text>
        </Text>
        <UserGrid />
      </Container>

    </Stack>

  )
}

export default App