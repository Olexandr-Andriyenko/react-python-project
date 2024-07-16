import { Button, Modal, ModalOverlay, ModalHeader, ModalContent, ModalCloseButton, ModalBody, Flex, FormControl, FormLabel, Input, Textarea, ModalFooter, useDisclosure, IconButton } from "@chakra-ui/react";
import { FaRegEdit } from "react-icons/fa";

function EditModal() {
	const { isOpen, onOpen, onClose } = useDisclosure()
	return (
	<>
		<IconButton onClick={onOpen} variant='ghost' colorScheme='blue' aria-label='See menu' size={"sm"} icon={<FaRegEdit size={20} />}/>

		<Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit my coding bestie ✏️</ModalHeader>
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

export default EditModal