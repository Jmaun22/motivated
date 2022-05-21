import { Modal, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { FormatAlignRight, FullscreenExit, Link } from "../../../../../node_modules/@material-ui/icons/index";




function Example(props) {

    const [time, setTime] = useState({

        hours: 0,
        minutes: 0,
        seconds: 0
    });




    function handleTimeChange(event) {

        const { name, value } = event.target;
        console.log(event.target.value)
        console.log(value)
        console.log(time);

        setTime(prevTime => {

            return {
                ...prevTime,
                [name]: value
            };

        });
    }



    const [show, setShow] = useState(false);

    function handleClose(event) {
        setShow(false);

        props.onAdd(time);

        setTime({
            hours: 0,
            minutes: 0,
            seconds: 0

        });
        // event.preventDefault();


    };

    const handleShow = () => setShow(true);



    return (
        <>
           
            <Button  onClick={handleShow} style={{marginTop: "80px", backgroundColor: "transparent", borderColor: "transparent"}} >
            <img src="data:image/jpeg;base64,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" />
               
            </Button>
            <h1 style={{color: "fff", marginTop: 40, fontFamily: 'PT Serif', }}>Click To Achieve Your Goal</h1> 

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Goals Setter!!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Goal title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="I want to ace my test"
                                autoFocus
                                name="goal"
                                onChange={handleTimeChange}
                            />
                            <Form.Label>Timer: Set time to work on your goal</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="hours"
                                name="hours"
                                time="hours"
                                autoFocus
                                onChange={handleTimeChange}


                            />
                            <Form.Control
                                type="number"
                                placeholder="minutes"
                                name="minutes"
                                time="minutes"
                                autoFocus
                                onChange={handleTimeChange}

                            />
                            <Form.Control
                                type="number"
                                placeholder="seconds"
                                name="seconds"
                                time="seconds"
                                autoFocus
                                onChange={handleTimeChange}

                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Describe your goal</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose} >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example

//   render(<Example />);