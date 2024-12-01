import { Button, Stack } from "@mui/material";
import Input from "../../components/Home/Input";
import Post from "../../components/Home/Post";

const Home=()=>{
    return (
        <>
        <Input/>
        <Stack
        flexDirection={"column"}
        gap={2}
        mb={10}
        >
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </Stack>
        <Button
        size="large"
        sx={{my:5,p:3,textDecoration:"underline",cursor:"pointer"}}
        >
            Load more
        </Button>
        <p></p>
        </>
    )
}
export default Home;