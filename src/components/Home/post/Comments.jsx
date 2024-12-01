import { Avatar, Stack, Typography } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const Comments=()=>{
    return (
        <>
        <Stack
        flexDirection={'row'}
        justifyContent={'space-between'}
        px={2}
        pb={4}
        borderBottom={'1px solid gray'}
        mx={'auto'}
        width={'90%'}
        >
        <Stack
        flexDirection={'row'}
        gap={2}
        >
        <Avatar src="" alt=""/>
        <Stack
        flexDirection={'column'}
        >
        <Typography variant="h6" fontWeight={'bold'} fontSize={'0.9rem'}>Lakshya7708</Typography>
        <Typography variant="h6"  fontSize={'0.9rem'}>This is the comment</Typography>
        </Stack>
        </Stack>
        <Stack
        flexDirection={'row'}
        gap={1}
        alignItems={'center'}
        color={'GrayText'}
        fontSize={'0.9rem'}
        >
            <p>24min</p>
            <MoreHorizIcon/>
        </Stack>
        </Stack>
        </>
    )
}
export default Comments;