import { useState } from "react";


export const useForm = (initialForm={})=>{

    const [ formState, setFormState ]= useState(initialForm)


    const onInputChange = ({target})=>{
       const {value, name} = target;
        setFormState({
            ...formState,
            [name]:value
        })
    }

    const onResetForm = ()=>{
     setFormState(initialForm)   
     console.log('Borrado.... ',initialForm);
    }

    return{
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}