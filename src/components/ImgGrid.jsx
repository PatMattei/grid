import { useState } from "react"
import inputContainer from "./InputContainer";
import {useVisibilityStatus} from '../VisibleContextProvider';



function GridSpaces() {
	const gridSpaces = 9;
	const spaces = [];

	const { toggleIsVisible } = useVisibilityStatus();

		
	for (var i = 0; i < gridSpaces; i++) {
		spaces.push(
			<div
				className="grid-space"
				key={i}
				id={`grid-space-${i + 1}`}
				onClick={toggleIsVisible}
			>{i + 1}</div>
		);
	}



	return (
		<div className="img-grid">
			{spaces}
		</div>
	);
}

export default function ImgGrid () {
	return <GridSpaces/>
}