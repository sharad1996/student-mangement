import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table } from 'antd'
import { setIsEdit } from '../../redux/user/actions'
import { deleteUser, getUsers } from '../../redux/user/operations'
import { EditStudent } from './EditStudent'

const Dashboard = () => {
    const dispatch = useDispatch()
    const usersData = useSelector(state => state.userReducer)

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    const handleEdit = (user) => {
        dispatch(setIsEdit(true, user))
    }

    const handleDelete = (user) => {
        // Delete user
        dispatch(deleteUser(user._id))
    }

    const columns = [
        {
            title: 'First Name',
            dataIndex: 'firstName',
            width: '10%',
            editable: true,
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            width: '10%',
            editable: true,
        },
        {
            title: 'Father Name',
            dataIndex: 'fatherName',
            width: '10%',
            editable: true,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            width: '10%',
            editable: true,
        },
        {
            title: 'DOB',
            dataIndex: 'dob',
            width: '10%',
            editable: true,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            width: '10%',
            editable: true,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            width: '10%',
            editable: true,
        },
        {
            title: 'Edit',
            dataIndex: 'edit',
            width: '15%',
            render: (_, record) => {
                return (
                    <a onClick={() => handleEdit(record)}>
                        Edit
                    </a>
                );
            },
        },
        {
            title: 'Delete',
            dataIndex: 'delete',
            width: '15%',
            render: (_, record) => {
                return (
                    <a onClick={() => handleDelete(record)}>
                        Delete
                    </a>
                )
            },
        },
    ];

    return (
        <>
            <Table
                bordered
                dataSource={usersData.users}
                columns={columns}
                pagination={false}
            />
            <EditStudent />
        </>
    );
};

export default Dashboard;
