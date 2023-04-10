import { GET_BOOKS,ADD_BOOKS,EDIT_BOOKS,DELETE_BOOKS } from "./books.type";

let initialState = {
    books:[],
}

export const bookReducer = (state= initialState,{type,payload})=>{
    switch(type){
        case GET_BOOKS:{
            return {
                ...state,
                books:payload,
            }
        }
        case ADD_BOOKS:{
            return {
                ...state,
                books:[...state.books,payload],
            }
        }
        case EDIT_BOOKS:{
            const update = state.books.map((el)=>{
                if(el.id === payload.id){
                    return {
                        ...el,
                        ...payload,
                    }
                }
                return el
            })
            return{
                ...state,
                books:update,
            }
        }
        case DELETE_BOOKS:{
            return {
                ...state,
                books:state.books.filter((el)=> el.id !== payload)
            }
        }
        default:{
            return state;
        }
    }
}