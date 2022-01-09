// import React from 'react';

import { Button } from 'react-bootstrap';

const NextComp = () => {
    return (
        <>
            <h1>Hello This is my Next js component</h1>
            <button className="btn btn-primary">lsajfsdklfj</button>
            <h1>Button</h1>
            {/* <Button variant={props.color} onClick={() => console.log("Primary")}>
                {props.children}
            </Button> */}

            <Button className="me-2" variant="light" onClick={() => console.log("Primary")}>
                Light
            </Button>

            <Button className="me-2" variant="dark" onClick={() => console.log("Primary")}>
                Dark
            </Button>

            <Button className="me-2" variant="primary" onClick={() => console.log("Primary")}>
                Primary
            </Button>

            <Button className="me-2" variant="success" onClick={() => console.log("Primary")}>
                Success
            </Button>

            <Button className="me-2" variant="info" onClick={() => console.log("Primary")}>
                Info
            </Button>

            

            <Button className="me-2" variant="secondary" onClick={() => console.log("Primary")}>
                Secondary
            </Button>

            <Button className="me-2" variant="danger" onClick={() => console.log("Primary")}>
                Danger
            </Button>

            <Button className="me-2" variant="warning" onClick={() => console.log("Primary")}>
                Primary
            </Button>
        </>
    )
}

export default NextComp;