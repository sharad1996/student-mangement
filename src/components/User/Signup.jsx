import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Card } from 'antd'
import { addUser } from '../../redux/user/operations'
import { ContactForm } from '../ContactForm'

export const Signup = (props) => {
    const dispatch = useDispatch()

    const handleSubmit = (values) => {
        // Add new user
        dispatch(addUser(values))
    };

    return (
        <div className="signup">
            <Card
                className="signup-card"
                title="Sign Up"
            >
                <ContactForm handleSubmit={handleSubmit} />
            </Card>
        </div>
    );
}
