import { Button, Grid, TextField, Toolbar } from "@mui/material"
import { useFormik } from "formik"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { ApplicationContext } from "../../Context/AppContext"
import {useContext} from 'react'

export const Mylogin:React.FC<{}>=()=>{
    let{setLoginUserInfo,loginUserInfo}=useContext(ApplicationContext)
    let [name,setName]=useState('')
    let navigate=useNavigate()
    const formik = useFormik({
      initialValues: {
        password:'',
        email:''
      },
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
        setLoginUserInfo(values.email)
        navigate('/project/home')
      },
    });
console.log("loginuserinfo--hrar",loginUserInfo)
    return <>
    <form onSubmit={formik.handleSubmit}>
    <Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="center"
  >       
    <h2>Login Form</h2><br />
    

<TextField id="outlined-basic" type="email" name="email" onChange={formik.handleChange}
         value={formik.values.email} label="email" variant="outlined" /><br /><br />

<TextField id="outlined-basic" type="password" name="password" onChange={formik.handleChange}
         value={formik.values.password} label="password" variant="outlined" /><br /><br />
      <Button type="submit" variant="contained" color="primary">Submit</Button>
      <Button onClick={()=>{navigate('/project/register')}}>Register</Button><br /><br /><br /><br />
      <br /><br /><br />
      <Toolbar></Toolbar>
    
  </Grid>

  </form>
  </>
   
}