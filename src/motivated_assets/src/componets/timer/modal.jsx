import { Modal, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { FormatAlignRight, FullscreenExit } from "../../../../../node_modules/@material-ui/icons/index";




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

    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial",
      
       
        

       
      };

    return (
        <>
            <Button variant="primary" onClick={handleShow} style={mystyle}>
                Set a Goal
            </Button>

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