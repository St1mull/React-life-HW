import axios from 'axios';
import React, { createContext, useReducer } from 'react';


export const contentsContext = createContext();

const INIT_STATE={
    contacts: [],
    contactToEdit: null,
}

const reducer =(state=INIT_STATE,action)=>{
    switch(action.type){
        case "GET_CONTACTS":
        return {...state, contacts: action.payload};
        case "EDIT_CONTACT":
        return {...state, contactToEdit: action.payload};
        default: return state
    }
}



const ContactContextProvider = ({children}) => {
    
    const [state,dispath]=useReducer(reducer,INIT_STATE)
    
    const getContacts= async()=>{
        let {data} = await axios("http://localhost:8000/contacts")
        
        dispath({
            type: "GET_CONTACTS",
            payload: data,
        })
        
    }
    
    const addContact = async (newContact)=>{
        await axios.post('http://localhost:8000/contacts',newContact)
        getContacts()
    }
    const deleteContacts= async(id)=>{
       await axios.delete(`http://localhost:8000/contacts/${id}`)
       getContacts()
    }

    const changeStatus = async(id)=>{
        let {data} = await axios(`http://localhost:8000/contacts/${id}`)
        await axios.patch(`http://localhost:8000/contacts/${id}`,{
            status: !data.status
        })
        getContacts()
    }

    const editContact= async(id)=>{
        let {data}= await axios(`http://localhost:8000/contacts/${id}`)
        dispath({
            type: "EDIT_CONTACT",
            payload: data,
        })
    }
    const saveContact= async(newContact)=>{
        await axios.patch(`http://localhost:8000/contacts/${newContact.id}`,newContact)
        
    }
    
    return (
        <contentsContext.Provider value={{
            contacts: state.contacts,
            contactToEdit: state.contactToEdit,
            addContact,
            getContacts,
            deleteContacts,
            changeStatus,
            editContact,
            saveContact,
            }}>
            {children}
        </contentsContext.Provider>
    );
};

export default ContactContextProvider;