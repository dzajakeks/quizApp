import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { handleAmountChange, handleScoreChange } from "../redux/actions";
import { Fragment } from "react";

const Final = () => {
  const disptach  = useDispatch();
  const history = useHistory()
  const { score } = useSelector(state => state)

  const handleBackToMain = () => {
    disptach (handleScoreChange(0));
    disptach (handleAmountChange(50));
    history.push("/");

  }

  return (
    <Fragment>
      <Box mt={30}>
        <Typography variant='h3' fontWeight="bold" mb={3}>Final Score {score}</Typography>
        <Button style={{"background": "#272727", "color": "white"}} onClick={handleBackToMain} variant="outlined">Go to main page</Button>
      </Box>
    </Fragment>
  )
}

export default Final