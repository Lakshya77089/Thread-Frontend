import {Stack,CircularProgress} from '@mui/material'
const Loading=()=>{
    return(
        <Stack
        flexDirection={"row"}
        minHeight={"50vh"}
        width={"100%"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        marginTop={5}
        >
            <CircularProgress color="secondary"/>
        </Stack>
    )
}
export default Loading;