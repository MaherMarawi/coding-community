import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const BasicFn = ({ totalStars, activeStars }) => {
//   const totalStars = 5;
//   const activeStars = 3;

  return (
    <Box>
      {[...new Array(totalStars)].map((arr, index) => {
        return index < activeStars ? <StarIcon /> : <StarBorderIcon />;
      })}
    </Box>
  );
};

export default BasicFn;