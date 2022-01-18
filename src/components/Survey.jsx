import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'

const Survey = () => {
    const [formData, setFormData] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
        }

    )

    const handleChange = event => {
            const {name, value, type, checked} = event.target
            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    [name]: type === "checkbox" ? checked : value
                }
            })
    }

    const handleSubmit = event => {
        event.preventDefault()

        console.log("Thanks for signing up for our newsletter!")
    }

    return (
        <Card>
            <Card.Body className='bg-accent'>
                <Card.Title className='surveyTitle'>Sign up for updates on events at the Clark Farm</Card.Title>
                <Card.Text>
                    <Container>
                        <Form onSubmit={handleSubmit}>
                            <Col className="surveyBody grid">
                                <Form.Control
                                    className='col-sm-3'
                                    type="text" 
                                    placeholder="First Name"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    />
                                <Form.Control
                                    className='col-sm-3' 
                                    type="text"
                                    placeholder="Last Name"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange} 
                                />
                                <Form.Control 
                                    className='col-sm-3'
                                    type="email"
                                    placeholder="Email Address"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <Button onClick={handleSubmit}>Submit</Button>
                            </Col>
                        </Form>
                    </Container>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Survey