import { Box, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";

const MaleIcon = require("../assets/maleGender.png");
const FemaleIcon = require("../assets/femaleGender.png");
const ChildIcon = require("../assets/childImage.jpg");
const AdultIcon = require("../assets/adultImage.jpg");
const SeniorIcon = require("../assets/seniorImage.jpg");

const genders = [
    {
        key: "M",
        value: "Male"
    },

    {
        key: "F",
        value: "Female"
    }
];

const Assignment = () => {

    const [name, setName] = useState<boolean>(false);
    const [gender, setGender] = useState<string>();
    const [age, setAge] = useState<number>(0);

    const handleNameChange = () => {
        setName(true);
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", mt: "20px" }}>
            <TextField label="Name" onChange={handleNameChange}></TextField>
            {name && 
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", mt: "20px" }}>
                <TextField label="Age" onChange={(e) => setAge(parseInt(e.target.value))}></TextField>
                <>
                {age > 0 && age <= 15 && <img src={ChildIcon} alt="child" height="50px" width="50px" />}
                {age > 15 && age <= 60 && <img src={AdultIcon} alt="adult" height="50px" width="50px" />}
                {age > 60 && <img src={SeniorIcon} alt="senior" height="50px" width="50px" />}
                </>
                <TextField select label="Gender" onChange={(event) => setGender(event.target.value)}>
                {genders.map((option) => (
                    <MenuItem key={option.key} value={option.value}>
                        {option.value}
                    </MenuItem>
                ))}
                </TextField>
                <>
                {gender === "Male" && <img src={MaleIcon} alt="male" height="50px" width="50px" />}
                {gender === "Female" && <img src={FemaleIcon} alt="female" height="50px" width="50px" />}
                </>
            </Box>}
        </Box>
    );
};

export default Assignment;