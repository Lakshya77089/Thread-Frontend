import { Stack, useMediaQuery } from "@mui/material";
// import Post from '../../../components/Home/Post'
import Comments from "../../../components/Home/post/Comments";
const Replies=()=>{
    const _700=useMediaQuery("(min-width:700px");
    return (
        <>
        <Stack
        flexDirection={'column'}
        gap={2}
        width={_700?'800px':"90%"}
        mx={'auto'}
        >
            <Comments/>
        </Stack>
        </>
    )
}
export default Replies;