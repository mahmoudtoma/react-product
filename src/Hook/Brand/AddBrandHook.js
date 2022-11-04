import React, { useState, useEffect } from 'react'
import avatar from '../../images/avatar.png'
import { useSelector, useDispatch } from 'react-redux'
import { createBrand } from '../../Redux/actions/BrandActions'
const AddBrandHook = () => {
    const dispatch = useDispatch();

    const [img, setimg] = useState(avatar)
    const [name, setname] = useState('')
    const [Selectfile, setSelectfile] = useState(null)
    const [Loading, setLoading] = useState(true)
    const [IsPress, setIsPress] = useState(false)
    const [foundError, setfoundError] = useState("")


    const onChangeName = (e) => {
        e.persist()
        setname(e.target.value)
    }

    //When image change save it 
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setimg(URL.createObjectURL(event.target.files[0]))
            setSelectfile(event.target.files[0])
        }

    }

    //save data in database 
    const handelSubmit = async (event) => {
        event.preventDefault();

        if (name === "" || Selectfile === null) {
            setfoundError("Complete the Requirements")
        }

        const formData = new FormData();
        formData.append("name", name)
        formData.append("image", Selectfile)

        setLoading(true)
        setIsPress((true))
        await dispatch(createBrand(formData))
        setTimeout(() => setIsPress(false), 1000)
    }

    useEffect(() => {
        if (Loading === false) {
            setimg(avatar)
            setname("")
            setSelectfile(null)
            console.log("finsh")
            setLoading(true)
            setIsPress(false)
        }
    }, [Loading])

    return [img, name, Loading, IsPress, foundError, onChangeName, onImageChange, handelSubmit]
}

export default AddBrandHook