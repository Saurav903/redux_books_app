import React from 'react'
import {Box,TableContainer,Table,TableCaption,Thead,Tbody,Td,Tr,Th,Button,FormControl,FormLabel,Input,Avatar,Modal,ModalOverlay,ModalContent,ModalHeader,ModalBody,ModalFooter,useDisclosure} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import { useEffect } from 'react';
import { addbooks, deletebooks, editbooks, getbooks } from '../redux/booksdetails/books.action';
import { useState,useRef } from 'react';

const Admin = () => {
    const data = useSelector((store)=>store.books);
    const myElementRef = useRef();
    const [editId,setEditId] = useState({});
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [i,seti] = useState("");
    const [b,setb] = useState("");
    const [au,setau] = useState("");
    const [ge,setge] = useState("");
    const [ed,seted] = useState("");
    const [pu,setpu] = useState("");
    const [c,setc] = useState("");
    const dispatch = useDispatch();
    const [books,setbooks] = useState(data);
    
    const navigate = useNavigate();
    let adminlogin1 = JSON.parse(localStorage.getItem("token"));
    if(!adminlogin1){
       return navigate("/adminlogin");
    }
    console.log(data)
    const handleDelete = (id)=>{
        dispatch(deletebooks(id));
    }
    const handlePost = ()=>{
        const initialData = {
            "id": Date.now(),
            "image_url":i,
            "book_name":b,
            "author":au,
            "genre":ge,
            "edition":ed,
            "publisher":pu,
            "cost":c,
            "borrowed":false
        }
        dispatch(addbooks(initialData));
        alert("data has been added");
    }
    const handleModal = (el)=>{
      
      onOpen();
      setEditId(el);
      seti(el.image_url);
      setb(el.book_name);
      setau(el.author);
      setge(el.genre);
      seted(el.edition);
      setpu(el.publisher);
      setc(el.cost);
    }
    const handleEdit = ()=>{

        let change = {
            "image_url":i,
            "book_name":b,
            "author":au,
            "genre":ge,
            "edition":ed,
            "publisher":pu,
            "cost":Number(c),
        }
        dispatch(editbooks(editId.id,change));
        console.log(change);
    }
    useEffect(()=>{
        dispatch(getbooks());
        // setbooks(data);
    },[])
  return (
    <div>
        <Box>
            <FormControl>
                <FormLabel>Book Cover Image</FormLabel>
                <Input type='url' onChange={(e)=>seti(e.target.value)}/>
                <FormLabel>Name of the book</FormLabel>
                <Input type='text' onChange={(e)=>setb(e.target.value)}/>
                <FormLabel>Author of the book</FormLabel>
                <Input type='text' onChange={(e)=>setau(e.target.value)}/>
                <FormLabel>Genre </FormLabel>
                <select onChange={(e)=>setge(e.target.value)}>
                    <option>Science</option>
                    <option>Fiction</option>
                    <option>History</option>
                    <option>Tech</option>
                    <option>Business</option>
                </select>
                <FormLabel>Edition </FormLabel>
                <select onChange={(e)=>seted(e.target.value)}>
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                </select>
                <FormLabel>Publisher</FormLabel>
                <Input type='text' onChange={(e)=>setpu(e.target.value)}/>
                <FormLabel>Cost</FormLabel>
                <Input type='number' onChange={(e)=>setc(e.target.value)}/>
                <Button onClick={()=>handlePost()}>Submit</Button>
            </FormControl>
        </Box>
        <Box>
            <TableContainer>
                <Table variant='striped' colorScheme='teal'>
                    <Thead>
                    <Tr>
                        <Th>Book Img</Th>
                        <Th>Name</Th>
                        <Th>Author</Th>
                        <Th>Genre </Th>
                        <Th>Edition </Th>
                        <Th>Publisher</Th>
                        <Th>Cost</Th>
                        <Th>Edit</Th>
                        <Th>Delete</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    {data?.map((el)=>(
                        <Tr key={el.id}>
                        <Td><Avatar name='Dan' src={el.image_url} /></Td>
                        <Td>{el.book_name}</Td>
                        <Td>{el.author}</Td>
                        <Td>{el.genre}</Td>
                        <Td>{el.edition}</Td>
                        <Td>{el.publisher}</Td>
                        <Td>${el.cost}</Td>
                        <Td><Button onClick={()=>handleModal(el)}>EDIT</Button></Td>
                        
                        <Td><Button onClick={()=>handleDelete(el.id)}>DELETE</Button></Td>
                        </Tr>
                    ))}
                    
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
                <>
                                    <Modal isOpen={isOpen} onClose={onClose}>
                                    <ModalOverlay />
                                    <ModalContent>
                                        <ModalHeader>Update Library</ModalHeader>
                                        <ModalBody>
                                            <FormControl>
                                                <FormLabel>Book Cover Image</FormLabel>
                                                <Input type='url' value={i} onChange={(e)=>seti(e.target.value)}/>
                                                <FormLabel>Name of the book</FormLabel>
                                                <Input type='text' value={b} onChange={(e)=>setb(e.target.value)}/>
                                                <FormLabel>Author of the book</FormLabel>
                                                <Input type='text' value={au} onChange={(e)=>setau(e.target.value)}/>
                                                <FormLabel>Genre </FormLabel>
                                                <select value={ge} onChange={(e)=>setge(e.target.value)}>
                                                    <option>Science</option>
                                                    <option>Fiction</option>
                                                    <option>History</option>
                                                    <option>Tech</option>
                                                    <option>Business</option>
                                                </select>
                                                <FormLabel>Edition </FormLabel>
                                                <select value={ed} onChange={(e)=>seted(e.target.value)}>
                                                    <option>2020</option>
                                                    <option>2021</option>
                                                    <option>2022</option>
                                                </select>
                                                <FormLabel>Publisher</FormLabel>
                                                <Input value={pu} type='text' onChange={(e)=>setpu(e.target.value)}/>
                                                <FormLabel>Cost</FormLabel>
                                                <Input value={c} type='number' onChange={(e)=>setc(e.target.value)}/>
                                                <Button onClick={()=>handleEdit()}>Submit</Button>
                                            </FormControl>
                                        </ModalBody>

                                        <ModalFooter>
                                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                                            Close
                                        </Button>
                                        </ModalFooter>
                                    </ModalContent>
                                    </Modal>
                            </>
    </div>
  )
}

export default Admin