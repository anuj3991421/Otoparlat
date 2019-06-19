import React from "react";

const InputError = (props) => {
    return(
        <span style={{fontSize: '13px', color: 'red'}}>{props.message}</span>
    )
}

export default InputError;