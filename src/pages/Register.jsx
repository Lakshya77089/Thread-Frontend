import { Button, Stack, TextField,useMediaQuery, Typography } from "@mui/material";
import { useState } from "react";

const Register = () =>{
    const _700=useMediaQuery("(min-width:700px)");
    const [login,setLogin]=useState(false);
    const [username,setusername]=useState('');
    const [passowrd,setpassword]=useState('');
    const [email,setemail]=useState('');
    const toggleLogin=()=>{
        setLogin((pre)=>!pre);
    }
    const handleLogin=()=>{
        // setLogin((pre)=>!pre);
        // console.log("login");
        const data={
            email,
            password
        }
        console.log(data);
    }
    const handleregister=()=>{
        // setLogin((pre)=>!pre);
        // console.log("register");
        const data={
            username,
            email,
            password
        }
        console.log(data);
    }
    return (
        <>
        <Stack
        width={'100%'}
        height={'100vh'}
        flexDirection={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        sx={_700?{
            backgroundImage:'url("/register-bg.webp")',
            backgroundRepeat:'no-repeat',
            backgroundSize:'100% 600px'
        }:null}
        >
        <Stack flexDirection={'column'} width={"40%"} gap={2} mt={_700?20:0}>
           <Typography
           variant="h5"
           fontSize={_700?"1.5rem":"1rem"}
           fontWeight={"bold"}
           alignSelf={"center"}
           >
            {login?"Login with email":"Register with email"}
           </Typography>
            {
                login?null:(
                    <TextField variant="outlined" onClick={(e)=>setusername(e.target.value)} placeholder="Enter the Username..."/>
                )
            }
           <TextField variant="outlined" onClick={(e)=>setemail(e.target.value)} placeholder="Enter the Email..."/>
           <TextField variant="outlined" onClick={(e)=>setpassword(e.target.value)} placeholder="Enter the Password..."/>
           <Button size="large" sx={{
            width:'100%',
            height:52,
            bgcolor:'green',
            color:'white',
            fontSize:'1rem',
            ":hover":{
                bgcolor:'blue',
                cursor:"pointer"
            }
           }}
           onClick={login?handleLogin:handleregister}
           >
            {
                login?"Signin":"Signup"
            }
           </Button>
           <Typography variant="subtitle2" fontSize={_700?"1.3rem":"1rem"} alignSelf={"center"}>{login?"Don't have an account ?":"Already have an account ?"} <span  className="login-link" onClick={toggleLogin}>{login?"Login":"Register"}</span></Typography>
        </Stack>
        </Stack>
        </>
    )
}
export default Register;