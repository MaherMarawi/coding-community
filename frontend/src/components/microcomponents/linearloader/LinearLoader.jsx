import "./linearLoader.scss"
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const LinearLoader = () => {
    return (
        <Box className="linear-loader">
            <LinearProgress />
        </Box>
    )
}

export default LinearLoader