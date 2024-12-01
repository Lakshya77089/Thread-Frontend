import { Stack, useMediaQuery } from "@mui/material";
import Navbar from "./Navbar";
// import {ToMenu} from "react-icons";
import { IoMdMenu } from "react-icons/io";
const Header=()=>{
    const _700=useMediaQuery("(min-width:700px");
    return (
        <>
        <Stack
        flexDirection={"row"}
        height={52}
        justifyContent={"space-around"}
        alignItems={"center"}
        position={"sticky"}
        top={0}
        py={1}>
        <img src="./Threads-logo-black-bg.webp" alt="" width={60} height={45} />
        <Stack
        justifyContent={"center"}
        width={"550px"}
        bgcolor={'aliceblue'}
        // color={"white"}
        zIndex={2}
        height={96}
        >
        <Navbar/>
        </Stack>
        <IoMdMenu size={36} className="image-icon"/>
        </Stack>
        </>
    )
}
export default Header;