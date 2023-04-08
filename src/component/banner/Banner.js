import {Box, Grid, Typography } from "@mui/material";
import React from "react";
import "./index.css";
import HangingSection from "../hangingsection/HangingSection";
import TypeAnimation1 from "../typeanimation/TypeAnimation1";
const Banner=()=>{
    return(
        <div>
            <Grid container lg={12} className="AppouterWrapper">
                <Grid lg={1} letterSpacing={1} ><HangingSection /></Grid>
                <Grid lg={6}>
                    <Grid container lg={12} alignItems="center" justifyContent="center"flexDirection={"column"}>
                        <Typography className="black_bold pink"  variant="h4">
                            <span className="white">I&#39;m</span> Manikandan Thirupathi</Typography><TypeAnimation1/>
                    </Grid>
                    <Grid container lg={12} alignItems="center" justifyContent="center">
                        <Box sx={{padding:"10% 15%"}}lg={12} item><Typography color="primary">Manikandan</Typography></Box>
                        <Box sx={{padding:"10% 15%"}}lg={12} item><Typography color="primary">Manikandan</Typography></Box>
                        <Box sx={{padding:"10% 15%"}}lg={12} item><Typography color="primary">Manikandan</Typography></Box>
                        <Box sx={{padding:"10% 15%"}}lg={12} item><Typography color="primary">Manikandan</Typography></Box>
                    </Grid>
                </Grid>
                <Grid lg={5}></Grid>
            </Grid>
        </div>);
};
export default Banner;