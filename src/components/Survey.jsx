import React, { useState } from 'react'

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
        <div className="form-container">
            <h2 className="form-title">
                Sign up for our newsletter
            </h2>
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                /><br/>
                <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange} 
                /><br/>
                <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange} 
                />
            </form>
            <div className="form--marketing">
                <input
                    id="okayToEmail"
                    type="checkbox"
                    name="wantNewsletter"
                    checked={formData.wantsNewsletter}
                    onChange={handleChange}
                />
                <label htmlFor="okayToEmail">I want to join the newsletter</label>
            </div>
            <button type="submit" className="form--submit">
                Sign Up
            </button>
        </div>
    )
}

export default Survey