import "../css/input-container.css"
import {useVisibilityStatus} from '../VisibleContextProvider';
import { useState } from "react"

function Container() {
    return(
        <>
            <div className="input-container">
                <h2 className="input-header">Header</h2>
                <input type="text" className="text-input" />
            </div>
        </>
    );
}
export default function inputContainer() {
	const { isVisible } = useVisibilityStatus();

    return (
        <>
        <div>
        	{isVisible && <Container />}
      </div>
      </>
    )
}
