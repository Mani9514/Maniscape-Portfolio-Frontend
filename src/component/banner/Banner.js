import {Grid, Typography } from "@mui/material";
import BadgeIcon from "@mui/icons-material/Badge";
import React from "react";
import "./index.css";
// import HangingSection from "../hangingsection/HangingSection";
import TypeAnimation1 from "../typeanimation/TypeAnimation1";
const Banner=()=>{
    return(
        <div>
            <Grid container lg={12} className="AppouterWrapper">
                {/* <Grid lg={1} ><HangingSection /></Grid> */}
                <Grid lg={6} sx={{paddingY:1}}>
                    <Grid container lg={12} alignItems="center" justifyContent="center" flexDirection={"column"}>
                        <Typography className="black_bold pink" variant="h4">
                            <span className="white">I&#39;m</span> Manikandan Thirupathi</Typography><TypeAnimation1/>
                    </Grid>
                    <Grid container spacing={2.5} lg={12} alignItems={"center"} justifyContent={"center"} padding={"5%"}>
                        <Grid item lg={6} container alignItems={"center"} justifyContent={"center"}>
                            <Grid className="Inner_Boxes" container alignItems={"center"} justifyContent={"center"} flexDirection={"column"} >
                                <BadgeIcon fontSize={"large"} sx={{color:"#ff0", }}/>
                                <Typography variant="h5" className="Semi_Bold">About <span>Me</span></Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid lg={6}></Grid>
            </Grid>
        </div>);
};
export default Banner;