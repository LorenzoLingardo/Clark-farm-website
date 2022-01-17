import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'

const Survey = () => {
    const [formData, setFormData] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            wantsNewsletter: false
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

        formData.wantNewsletter && console.log("Thanks for signing up for our newsletter!")
    }
    return (
        <Card>
            <Card.Body>
                <Card.Title>Sign up for our newsletter</Card.Title>
                <Card.Text>
                    <Container>
                        <Form onSubmit={handleSubmit}>
                            <Col>
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
                                <input
                                    id="okayToEmail"
                                    type="checkbox"
                                    variant='info'
                                    name="wantNewsletter"
                                    checked={formData.wantsNewsletter}
                                    onChange={handleChange}
                                /> I want to join the newsletter
                            </Col>
                        </Form>
                    </Container>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Survey