import { Stack } from "@mui/material";
import ProfileBar from "../../components/search/ProfileBar";
import SearchInput from "../../components/search/SearchInput";

const Search=()=>{
    return (
        <>
        <SearchInput/>
        <Stack flexDirection={'column'} gap={1} mb={5} width={'90%'} maxWidth={'1000px'} mx={'auto'}>
        <ProfileBar/>
        <ProfileBar/>
        <ProfileBar/>
        </Stack>
        
        </>
    )
}
export default Search;