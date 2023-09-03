import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";


// eslint-disable-next-line react/prop-types
const Pagnation = ({length,setpage}) => {


	return (
		<Stack spacing={2}>
			<Pagination count={length} variant="outlined" shape="rounded" onChange={(e,v)=> setpage(v)} />
		</Stack>
	);
};

export default Pagnation;
