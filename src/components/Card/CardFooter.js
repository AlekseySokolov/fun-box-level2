import React from "react";

export const CardFooter = (props) => {
    const {status, onClick, footerText} = props
    return (
        status === "default" ?
            <span
                className="card-container__card-status">
                Чего сидишь? Порадуй котэ,&nbsp;
                <button className="card-container__link" href="#" onClick={onClick}>
                    купи
                </button>
                <span className="card-container__link-dot">.</span>
            </span> :

        status === "inactive" ?
                <span className="card-container__card-status status-inactive">
                Печалька, с курой закончился.
            </span> :

        status === "active" ?
            <span
                className="card-container__card-status">
                {footerText}
            </span> :
                null
    )
};