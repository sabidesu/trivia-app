import React from "react";
import Button from "@mui/material/Button";

const Answer = props => {
	return (
		<Button onClick={props.onClick} 
			disabled={props.disabled}>
			{props.text}
		</Button>
	)
}

export default Answer;