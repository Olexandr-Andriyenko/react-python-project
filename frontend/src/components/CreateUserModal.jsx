import { Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, RadioGroup, Textarea, useDisclosure, Radio, ModalFooter } from "@chakra-ui/react"
import { AiOutlineUserAdd } from "react-icons/ai";

function CreateUserModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen}>
                <AiOutlineUserAdd size={20}></AiOutlineUserAdd>
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>My new coding bestie 😍</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Flex alignItems={"center"} gap={4}>
                            {/* Left */}
                            <FormControl>
                                <FormLabel>Full Name</FormLabel>
                                <Input placeholder="Sheldon Cooper"></Input>
                            </FormControl>
                            {/* Right */}
                            <FormControl>
                                <FormLabel>Role</FormLabel>
                                <Input placeholder="Frontend SWE"></Input>
                            </FormControl>
                        </Flex>

                        <FormControl mt={4}>
                            <FormLabel>Description</FormLabel>
                            <Textarea
                                resize={"none"}
                                overflow={"hidden"}
                                placeholder="He is a software engineer who loves frontend develppment."
                            >
                            </Textarea>
                        </FormControl>

                        <RadioGroup mt={4}>
                            <Flex gap={5}>
                                <Radio value="male">Male</Radio>
                                <Radio value="female">Female</Radio>
                            </Flex>
                        </RadioGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3}>
                            Add
                        </Button>
                        <Button onClick={onClose}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
    }

export default CreateUserModal