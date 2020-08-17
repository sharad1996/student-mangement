import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Modal } from 'antd'
import { ContactForm } from '../ContactForm'
import { updateUser } from '../../redux/user/operations'
import { setIsEdit } from '../../redux/user/actions'

export const EditStudent = (props) => {
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();
    const userData = useSelector(state => state.userReducer)

    useEffect(() => {
        setVisible(userData.isEdit)
    }, [userData.isEdit])

    const handleSubmit = (values) => {
        // Updating user data
        if (userData.isEdit) {
            dispatch(updateUser(values, userData.editedUser._id))
            dispatch(setIsEdit(false, {}))
        }
        setVisible(false)
    };

    const handleCancel = () => {
        setVisible(false)
        if (userData.isEdit) {
            dispatch(setIsEdit(false, {}))
        }
    }

    return (
        <Modal
            title="Edit Details"
            visible={visible}
            onCancel={handleCancel}
            footer={null}
        >
            <ContactForm
                handleSubmit={handleSubmit}
                user={userData.editedUser}
                isEdit={userData.isEdit}
                handleCancel={handleCancel}
            />
        </Modal>
    );
}
