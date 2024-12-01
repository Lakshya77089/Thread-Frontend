import { Stack } from "@mui/material"
import { FaHome } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { TbEdit } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";
const Navbar=()=>{
    return (
        <>
        <Stack
        flexDirection={"row"}
        maxWidth={"100%"}
        justifyContent={"space-around"}
        alignItems={"center"}>
            <Link to={'/'}>
            <FaHome size={32}/>
            </Link>
            <Link to={'/Search'}>
            <IoIosSearch size={32}/>
            </Link>
            <TbEdit size={32}/>
            <CiHeart size={32}/>
            <Link to={'/profile/threads/1'}>
            <RxAvatar size={32}/>
            </Link>
        </Stack>
        </>
    )
}
export default Navbar