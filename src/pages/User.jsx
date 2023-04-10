import React from 'react'
import {useNavigate} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import { useEffect } from 'react';
import { useState } from 'react';
import { getbooks } from '../redux/booksdetails/books.action';
import {Card,Box,Image,Stack,CardBody,Text,Heading,CardFooter,Button} from "@chakra-ui/react"
const User = () => {
  const books = useSelector((store) => store.books);


  const [newData,setNewData] = useState(books);
  const dispatch = useDispatch();


  
  
  const handleChanges = async(e)=>{
    if(e.target.value===""){
      setNewData(books);
      
  }
  else {
    
    let newVal = books.filter(el=> {return (el.genre === e.target.value)});
    setNewData(newVal);
  }
  
}

const handleChanges1 = async(e)=>{
  if(e===""){
    setNewData(books);
  }
  else if(e==="Low-to-High"){
    let lh = books.sort((a,b)=>Number(a.cost)-Number(b.cost));
    setNewData(lh);
    console.log(lh);
    
  }else if(e==="High-to-Low"){
    let hl = books.sort((a,b)=>Number(b.cost)-Number(a.cost));
    setNewData(hl);
    console.log(hl);
  }
  
}

useEffect(()=>{
  dispatch(getbooks())
},[newData]);

console.log(books);
  return (
    <>
      <Heading textAlign="center">Book Page</Heading>
      <Box>
      <lable>Filter Genre:  </lable>
        <select onChange={(e)=>handleChanges(e)}>
          <option value="">choose any option</option>
          <option value="Science">Science</option>
          <option value="Fiction">Fiction</option>
          <option value="History">History</option>
          <option value="Tech">Tech</option>
          <option value="Bussiness">Bussiness</option>
        </select>
      </Box>
      <Box>
      <lable>Sort by price:  </lable>
      <select onChange={(e)=>handleChanges1(e.target.value)}>
          <option value= "">choose any option</option>
          <option value = "Low-to-High">Low to High</option>
          <option value = "High-to-Low">High to Low</option>
        </select>
      </Box>
        <Box width={"50%"} margin={"auto"}>
        {newData.length>0?newData.map((el)=>(
          <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline' key={el.id}>
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src={el.image_url}
            alt='Caffe Latte'
          />

          <Stack>
            <CardBody>
              <Heading size='md'>{el.book_name}</Heading>

              <Text py='2'>
                {el.author}
              </Text>
              <Text py='2'>
                {el.genre}
              </Text>
              <Text py='2'>
                {el.edition}
              </Text>
              <Text py='2'>
                {el.publisher}
              </Text>
              <Text py='2'>
                {el.cost}
              </Text>
            </CardBody>

            <CardFooter>
              <Button variant='solid' colorScheme='blue'>
                Borrow
              </Button>
            </CardFooter>
          </Stack>
        </Card>
        )) : books?.map((el)=>(
          <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline' key={el.id}>
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src={el.image_url}
            alt='Caffe Latte'
          />

          <Stack>
            <CardBody>
              <Heading size='md'>{el.book_name}</Heading>

              <Text py='2'>
                {el.author}
              </Text>
              <Text py='2'>
                {el.genre}
              </Text>
              <Text py='2'>
                {el.edition}
              </Text>
              <Text py='2'>
                {el.publisher}
              </Text>
              <Text py='2'>
                {el.cost}
              </Text>
            </CardBody>

            <CardFooter>
              <Button variant='solid' colorScheme='blue'>
                Borrow
              </Button>
            </CardFooter>
          </Stack>
        </Card>
        ))}
      </Box>
    </>
  )
}

export default User