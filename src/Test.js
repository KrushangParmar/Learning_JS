import React, { useState } from "react";

function test() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [toggle, updateToggle] = useState(false);
    return ( <
        >
        <
        div className = "d-flex justify-content-center my-2 mx-auto bg-dark text-light" >
        <
        button className = "col-auto py-2 px-4 m-2"
        onClick = {
            () => { updateToggle(!toggle) }
        } >
        toggle <
        /button> {!toggle && < p className = "col-6" > < /p>} {
        toggle && < p className = "mb-0 d-flex align-self-center col-6 fw-700" > This is toggle < /p>} < /
        div > <
        />
    );
}

export default test;