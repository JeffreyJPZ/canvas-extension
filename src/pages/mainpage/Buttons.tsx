import {Button, ButtonGroup} from "@mui/material";

export default function Buttons() {
    return (
        <div>
            <ButtonGroup orientation="vertical" aria-label="vertical contained button group" variant="contained">
                <Button>Syllabus</Button>
                <Button>Assignments</Button>
                <Button>Office Hours</Button>
                <Button>Quizzes</Button>
                <Button>Grades</Button>
            </ButtonGroup>
        </div>
    )
}