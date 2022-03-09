import React, { useEffect, useState } from "react";
import { Button, Col, Form, FormGroup, FormText, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
// import { Document } from 'react-pdf';

const Get_started_model = ({ ShowObject, showImage }) => {

    const [opentheModal, setModalFalse] = useState(false);
    const [userRegistretion, setUserRegistretion] = useState({
        Email: "",
        Password: "",
        Age: "",
        selectMulti: [],
        Address: "",
        file: null,
        Status  : "",
        CheckBoxMY: "",
        pdf: null
    });

    const [record, setRecord] = useState([]);
    const [imageUrl, setImageUrl] = useState(null);

    const [file, setFile] = useState(null);
    const fileHandler = event => {
        console.log(event.target.files[0]);
        let reader = new FileReader();
        reader.onload = function (e) {
            setFile(e.target.result);
        };
        reader.readAsDataURL(event.target.files[0]);
    };


    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        const newRecord = { ...userRegistretion, id: new Date().getTime().toString() }
        // console.log(record);

        setRecord([...record, newRecord]);
        console.log(record);

        setUserRegistretion({
            Email: "",
            Password: "",
            Age: "",
            selectMulti: [],
            Address: "",
            file: [],
            Status: "",
            CheckBoxMY: ""
        })

        if (name == "file") {
            let reader = new FileReader();
            reader.onload = function (e) {
                setUserRegistretion({ ...userRegistretion, [name]: e.target.result });
            };
            reader.readAsDataURL(event.target.files[0]);
        }
        if (name == "pdf") {
            let reader = new FileReader();
            reader.onload = function (e) {
                setUserRegistretion({ ...userRegistretion, [name]: e.target.result });
            };
            reader.readAsDataURL(event.target.files[0]);
        }

        if (name == "selectMulti") {
            var options = event.target.options;
            var valuees = [];
            for (var i = 0, l = options.length; i < l; i++) {
                if (options[i].selected) {
                    valuees.push(options[i].value);
                }
            }
            setUserRegistretion({ ...userRegistretion, [name]: valuees });
        } else
            setUserRegistretion({ ...userRegistretion, [name]: value });
    }

    const openFunction = () => {
        setModalFalse(true)
    }

    const closeModal = () => {
        setModalFalse(false)
    }

    const getObject = () => {
        console.log(userRegistretion);
        ShowObject(userRegistretion);
        showImage(file);
        closeModal();
    }





    return (
        <>
            <div>
                <Button className="getstarted" color="danger" onClick={openFunction}>
                    Get Started
                </Button>
                <Modal isOpen={opentheModal} toggle={function noRefCheck() { }}>
                    <ModalHeader toggle={function noRefCheck() { }}>
                        Modal title
                    </ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup row>
                                <Label
                                    for="exampleEmail"
                                    sm={2}
                                >
                                    Email
                                </Label>
                                <Col sm={10}>
                                    <Input
                                        value={userRegistretion.email}
                                        id="exampleEmail"
                                        name="Email"
                                        placeholder="with a placeholder"
                                        type="email"
                                        onChange={handleInput}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label
                                    for="examplePassword"
                                    sm={2}
                                >
                                    Password
                                </Label>
                                <Col sm={10}>
                                    <Input
                                        value={userRegistretion.password}
                                        id="examplePassword"
                                        name="Password"
                                        placeholder="password placeholder"
                                        type="password"
                                        onChange={handleInput}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label
                                    for="exampleSelect"
                                    sm={2}
                                >
                                    Age
                                </Label>
                                <Col sm={10}>
                                    <Input
                                        value={userRegistretion.select}
                                        id="exampleSelect"
                                        name="Age"
                                        type="select"
                                        onChange={handleInput}
                                    >   
                                        <option>
                                            1-15
                                        </option>
                                        <option>
                                            16-20
                                        </option>
                                        <option>
                                            21-25
                                        </option>
                                        <option>
                                            26-30
                                        </option>
                                        <option>
                                            31-50
                                        </option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label
                                    for="exampleSelectMulti"
                                    sm={2}
                                >
                                    Select Multiple
                                </Label>
                                <Col sm={10}>
                                    <Input
                                        id="exampleSelectMulti"
                                        multiple={true}
                                        name="selectMulti"
                                        type="select"
                                        onChange={handleInput}
                                    >
                                        <option>
                                            1
                                        </option>
                                        <option>
                                            2
                                        </option>
                                        <option>
                                            3
                                        </option>
                                        <option>
                                            4
                                        </option>
                                        <option>
                                            5
                                        </option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label
                                    for="exampleText"
                                    sm={2}
                                >
                                    Address
                                </Label>
                                <Col sm={10}>
                                    <Input
                                        value={userRegistretion.text}
                                        id="exampleText"
                                        name="Address"
                                        type="textarea"
                                        onChange={handleInput}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label
                                    for="exampleFile"
                                    sm={2}
                                >
                                    Photo
                                </Label>

                                <Col sm={10}>
                                    <input
                                        name="file"
                                        type="file"
                                        onChange={handleInput}

                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label
                                    for="exampleFile"
                                    sm={2}
                                >
                                    PDF
                                </Label>

                                <Col sm={10}>
                                    <input
                                            
                                        name="pdf"
                                        type="file"
                                        onChange={handleInput}

                                    />
                                </Col>
                            </FormGroup>

                            {/* <Document file={renderPdf} scale={1.3} pages={Infinity} /> */}
                            <FormGroup
                                row
                                tag="fieldset"
                            >
                                <legend className="col-form-label col-sm-2">
                                    Status
                                </legend>
                                <Col sm={10}>
                                    <FormGroup check>
                                        <Input
                                            value={"option1"}
                                            name="Status"
                                            type="radio"
                                            onChange={handleInput}
                                        />
                                        <Label check>
                                            Married
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Input
                                            value={"option2"}
                                            name="Status"
                                            type="radio"
                                            onChange={handleInput}
                                        />
                                        {' '}
                                        <Label check>
                                            UnMarried
                                        </Label>
                                    </FormGroup>
                                    <FormGroup
                                        check
                                        disabled
                                    >
                                        <Input
                                            value={userRegistretion.radio2}
                                            name="radio2"
                                            type="radio"
                                            onChange={handleInput}
                                        />
                                        {' '}
                                        <Label check>
                                            None
                                        </Label>
                                    </FormGroup>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label
                                    for="checkbox2"
                                    sm={2}
                                >
                                    Checkbox
                                </Label>
                                <Col
                                    sm={{
                                        size: 10
                                    }}
                                >
                                    <FormGroup check>
                                        <Input
                                            value={userRegistretion.CheckBoxMY}
                                            id="checkbox2"
                                            name="CheckBoxMY"
                                            type="checkbox"
                                            onChange={handleInput}
                                        />
                                        {' '}
                                        <Label check>
                                            Yes
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Input
                                            value={userRegistretion.CheckBoxMY}
                                            id="checkbox2"
                                            name="CheckBoxMY"
                                            type="checkbox"
                                            onChange={handleInput}
                                        />
                                        {' '}
                                        <Label check>
                                            No
                                        </Label>
                                    </FormGroup>
                                </Col>
                            </FormGroup>
                            <FormGroup
                                check
                                row
                            >
                                <Col
                                    sm={{
                                        offset: 2,
                                        size: 10
                                    }}
                                >
                                    <Button onClick={getObject}>
                                        Submit
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <div>

                        </div>
                        <Button
                            color="primary"
                            onClick={function noRefCheck() { }}
                        >
                            Save
                        </Button>
                        {' '}
                        <Button onClick={closeModal}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        </>
    )
}

export default Get_started_model;