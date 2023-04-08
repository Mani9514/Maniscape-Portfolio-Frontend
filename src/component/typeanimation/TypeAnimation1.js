import { Typography } from "@mui/material";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./index.css";

const TypeAnimation1 = ()=> {
    return (
        <div>
            <Typography  className="Regular" variant="h5" color={"primary"} ><span className="white">As a </span><TypeAnimation sequence={["Business Analyst",1500, "React UI Developer", 3000, "Junior Project Manager",4500]} repeat={Infinity}></TypeAnimation></Typography>
        </div>
    );
};

export default TypeAnimation1;