import { GET_BOOKS,ADD_BOOKS,EDIT_BOOKS,DELETE_BOOKS } from "./books.type";
import { getbooksapi,addbooksapi,editbooksapi,deletebooksapi } from "./books.api";

export const getbooks =()=> async(dispatch)=>{
    let data = await getbooksapi();
    dispatch({
        type: GET_BOOKS,
        payload: data
    })
}   

export const addbooks =(value)=> async(dispatch)=>{
    let data = await addbooksapi(value);
    dispatch({
        type: ADD_BOOKS,
        payload: data
    })
}

export const editbooks =(id,change)=> async(dispatch)=>{
    let data = await editbooksapi(id,change);
    dispatch({
        type: EDIT_BOOKS,
        payload: data
    })
}

export const deletebooks =(id)=> async(dispatch)=>{
    let data = await deletebooksapi(id);
    dispatch({
        type: DELETE_BOOKS,
        payload: id
    })
}