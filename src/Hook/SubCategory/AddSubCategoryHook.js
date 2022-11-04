import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategory } from '../../Redux/actions/CategoryAction'
import { createsubCategory } from '../../Redux/actions/SubCategoryAction';

const AddSubCategoryHook = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCategory())
    }, [])


    const [Id, setId] = useState(0)
    const [name, setname] = useState('')
    const [Loading, setLoading] = useState(true)
    const [isPres, setIsPres] = useState(false)
    const category = useSelector(state => state.allCategory.category)

    const subCategory = useSelector(state => state.allSubCategory.subcategory)

    const handelChange = (e)=> {
        console.log(e.target.value)
        setId(e.target.value)
    }

    // Massage Error Submite
    const [ErrorMass, setErrorMass] = useState("")

    const handelSubmit = async (e)=> {
        e.preventDefault()
        if(Id === 0){
            setErrorMass("Please enter the category")
        }
        if(name === ''){
            setErrorMass('Please enter the name')
        }


        setLoading(true)
        setIsPres((true))
        await dispatch(createsubCategory({
            name:name,
            category:Id
        }))
        setLoading(false)
        setTimeout(() => setIsPres(false), 1000)

    }

    useEffect(() => {
      if (Loading === false){
        setname("")
        setId(0)

        if (subCategory === 201 || 200){
            

        }else{
            setErrorMass('There is an error in the transmission')
        }
        setLoading(true)
      }
    }, [Loading])
    
    const onChangeName =(e)=> {
        e.persist();
        setname(e.target.value)
    }
  return [category,handelChange,ErrorMass,handelSubmit,onChangeName,name,isPres,Loading]
}

export default AddSubCategoryHook