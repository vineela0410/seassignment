import React, { useState } from 'react';
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap';
const Profile = () => {
    const [title, setTitle] = useState("Vineela Reddy Tekula");
    const [description, setDescription] = useState(
        "I am pursing my masters in computer science. I have taken Software Engineering in my 2nd semester. This is my 1st assignment."
    );
    const [imageSrc, setImageSrc] = useState("displaypic.jpeg");
    const [isEditing, setIsEditing] = useState(false);

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };
   

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
    };

    return (
        <Container>
            <Row>
              
                <Col md={6}>
                    {isEditing ? (
                       <></>
                    ) : (
                        <Image src={imageSrc} fluid />
                    )}
                </Col>
                <Col md={6}>
                    {isEditing ? (
                        <><Form.Control
                            type="text"
                            value={title}
                            onChange={handleTitleChange}
                        />
                            <Form.Control
                                type="text"
                                value={description}
                                onChange={handleDescriptionChange}
                            /></>
                    ) : (<>
                        <h1>{title}</h1>
                        <p>{description}</p></>
                    )}
                </Col>
            </Row>
            <Row className="mt-3">
                <Col md={{ span: 6, offset: 6 }}>
                    {isEditing ? (
                        <Button variant="primary" onClick={handleSaveClick}>
                            Save
                        </Button>
                    ) : (
                        <Button variant="secondary" onClick={handleEditClick}>
                            Edit
                        </Button>
                    )}
                </Col>
            </Row>
            <br></br>
            <br></br>

        </Container>
    );
};

export default Profile;
