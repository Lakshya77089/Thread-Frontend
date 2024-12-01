import { Avatar, Button, Stack, Typography } from "@mui/material";

const Input = () =>{
    return (
       <>
       <Stack
       flexDirection={"row"}
       alignItems={"center"}
       width={"70%"}
       height={28}
       justifyContent={"space-between"}
       p={3}
       borderBottom={"2px solid grey"}
       my={5}
       mx={"auto"}
       >
        <Stack
        flexDirection={"row"}
        alignContent={"center"}
        gap={2}
        >
            <Avatar src="" alt="AJ"/>
            <Typography color={"GreyText"}>Start a thread...</Typography>
        </Stack>
        <Button size="medium" sx={{
            bgcolor:'gray',
            color:'aliceblue',
            ":hover":{
                bgcolor:"black",
                cursor:"pointer"
            }
        }}>POST</Button>
       </Stack>
       </> 
    )
}
export default Input;