import React from "react";
import "./index.css";
import { Grid, Typography } from "@mui/material";
const HangingSection = ()=>{
    return(
        <>
            <Grid className="hangingContainer">
                <Typography className="Semi_Bold hangingText" variant="h5">Hello Folks</Typography>
            </Grid>
        </>
    );
};
export default HangingSection;