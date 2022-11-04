import React from "react";
import "./TestModal.css"

export default function TestModal({onClose , title}) {

    return (
        <div onClick={onClose} className={"modalWrapper"}>
            <div className={"modal"}>
                <h1>BlaBla</h1>
                <h3 style={{color: "pink"}}>{title}</h3>
                <h1 onClick={onClose}>X</h1>
            </div>

        </div>

    )
}