import React, { useState } from 'react';
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap';
const Profile = () => {
    const [title, setTitle] = useState("James Smith");
    const [description, setDescription] = useState(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin, tellus non congue commodo, libero sapien faucibus libero, eu egestas lacus magna id ligula. Aliquam erat volutpat. Nulla vel velit vel nibh rutrum luctus. Nunc malesuada nulla a diam laoreet, in aliquet metus suscipit."
    );
    const [imageSrc, setImageSrc] = useState("https://via.placeholder.com/400x300");
    const [isEditing, setIsEditing] = useState(false);

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };
    const handleImageChange = (event) => {
        setImageSrc(event.target.value);
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
                        <Form.Control
                            type="text"
                            value={imageSrc}
                            onChange={handleImageChange}
                        />
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
