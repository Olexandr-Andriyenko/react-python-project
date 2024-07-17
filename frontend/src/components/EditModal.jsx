import { Button, Modal, ModalOverlay, ModalHeader, ModalContent, ModalCloseButton, ModalBody, Flex, FormControl, FormLabel, Input, Textarea, ModalFooter, useDisclosure, IconButton, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { BASE_URL } from "../App";

function EditModal({setUsers, user}) {
	const { isOpen, onOpen, onClose } = useDisclosure()
    const [isLoading, setIsLoading] = useState(false)
    const [inputs, setInputs] = useState({
        name: user.name,
        role: user.role,
        description: user.description

    })
    const toast = useToast()

    const handleEditUser = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            const res = await fetch(BASE_URL + "/friends/" + user.id, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(inputs)
            })
            const data  = await res.json()
            if(!res.ok){
                throw new Error(data.error)
            }
            setUsers((prevUsers) => prevUsers.map((u) => u.id === user.id ? data: u))
            toast({
                title: 'Yayy! 🎉',
                description: "Friend updated successfully.",
                status: 'success',
                duration: 2000,
                isClosable: true,
                position: "top-center"
            })
            onClose()
        } catch (error) {
            toast({
                title: 'error',
                description: error.message,
                status: 'error',
                duration: 2000,
                position: "top-center"
            })
        }
        finally {
            setIsLoading(false)
        }
    }

	return (
	<>
		<IconButton onClick={onOpen} variant='ghost' colorScheme='blue' aria-label='See menu' size={"sm"} icon={<FaRegEdit size={20} />}/>

		<Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <form onSubmit={handleEditUser}>
                    <ModalContent>
                        <ModalHeader>Edit my coding bestie ✏️</ModalHeader>
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
                                    value={inputs.description} onChange={(e)=>setInputs({...inputs, description: e.target.value})}
                                >
                                </Textarea>
                            </FormControl>
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme="blue" mr={3} type="submit" isLoading={isLoading}>
                                Update
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

export default EditModal