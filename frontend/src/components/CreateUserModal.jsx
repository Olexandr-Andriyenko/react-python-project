import { Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, RadioGroup, Textarea, useDisclosure, Radio, ModalFooter, useToast } from "@chakra-ui/react"
import { useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BASE_URL } from "../App";

function CreateUserModal({setUsers}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isLoading, setIsLoading] = useState(false)
    const [inputs, setInputs] = useState({
        name: "",
        role: "",
        description: "",
        gender: ""
    })
    const toast = useToast()

    const handleCreateUser = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            const res = await fetch(BASE_URL + "/friends", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(inputs)
            })
            const data = await res.json()
            if(!res.ok) {
                throw new Error(data.error)
            }
            toast({
                title: 'An new Bestie! 🎉',
                description: "We've created your bestie successfully.",
                status: 'success',
                duration: 2000,
                isClosable: true,
                position: "top-center"
              })
              onClose()
              setUsers((prevUsers) => [...prevUsers, data])
              
              setInputs({
                name: "",
                role: "",
                description: "",
                gender: ""
            })
        } catch (error) {
            toast({
                title: 'An error occurred! 😢',
                description: error.message,
                status: 'error',
                duration: 4000,
              })
        }
        finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <Button onClick={onOpen}>
                <AiOutlineUserAdd size={20}></AiOutlineUserAdd>
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <form onSubmit={handleCreateUser}>
                    <ModalContent>
                        <ModalHeader>My new coding bestie 😍</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <Flex alignItems={"center"} gap={4}>
                                {/* Left */}
                                <FormControl>
                                    <FormLabel>Full Name</FormLabel>
                                    <Input placeholder="Sheldon Cooper" value={inputs.name} onChange={(e)=>setInputs({...inputs, name: e.target.value})}></Input>
                                </FormControl>
                                {/* Right */}
                                <FormControl>
                                    <FormLabel>Role</FormLabel>
                                    <Input placeholder="Frontend SWE" value={inputs.role} onChange={(e)=>setInputs({...inputs, role: e.target.value})}></Input>
                                </FormControl>
                            </Flex>

                            <FormControl mt={4}>
                                <FormLabel>Description</FormLabel>
                                <Textarea
                                    resize={"none"}
                                    overflow={"hidden"}
                                    placeholder="He is a software engineer who loves frontend develppment."
                                    value={inputs.description}
                                    onChange={(e)=>setInputs({...inputs, description: e.target.value})}
                                >
                                </Textarea>
                            </FormControl>

                            <RadioGroup mt={4}>
                                <Flex gap={5}>
                                    <Radio value="male" onChange={(e)=>setInputs({...inputs, gender: e.target.value})}>Male</Radio>
                                    <Radio value="female" onChange={(e)=>setInputs({...inputs, gender: e.target.value})}>Female</Radio>
                                </Flex>
                            </RadioGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme="blue" mr={3} type="submit" isLoading={isLoading}>
                                Add
                            </Button>
                            <Button onClick={onClose}>
                                Cancel
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </form>
            </Modal>
        </>
    )
    }

export default CreateUserModal