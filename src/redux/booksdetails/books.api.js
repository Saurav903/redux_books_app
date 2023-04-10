import axios from "axios";

export const getbooksapi = async()=>{
    let res = await axios.get(`https://mock4-server-n4z5.onrender.com/books`);
    return res.data; 
}

export const addbooksapi = async(value)=>{
    let res = await axios.post(`https://mock4-server-n4z5.onrender.com/books`,value);
    return res.data; 
}


export const editbooksapi = async(id,change)=>{
    let res = await axios.patch(`https://mock4-server-n4z5.onrender.com/books/${id}`,change);
    return res.data; 
}


export const deletebooksapi = async(id)=>{
    let res = await axios.delete(`https://mock4-server-n4z5.onrender.com/books/${id}`);
    return res.data; 
}