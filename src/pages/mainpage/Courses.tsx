import {MenuItem, Select} from "@mui/material";
import {useState} from "react";

export default function Courses() {
    const [course, setCourse] = useState("");

    function changeCourse(course) {
        setCourse(course);
    }

    return (
        <div>
            <Select value={course} onChange={(e) => changeCourse(e.target.value)}>
                <MenuItem value={"cpsc221"}>CPSC 221</MenuItem>
                <MenuItem value={"stat200"}>STAT 200</MenuItem>
            </Select>
        </div>
    )
}