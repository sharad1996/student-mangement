import React from 'react'
import { useSelector } from "react-redux"
import { Menu, Dropdown } from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons'
import history from '../helpers/history'

export const Header = () => {
    const usersData = useSelector(state => state.userReducer)

    const handleLogout = () => {
        // Logout user
        sessionStorage.removeItem('token')
        history.push('/login')
    }

    const menu = (
        <Menu>
            <Menu.Item key='logout' onClick={handleLogout}>
                <div>Logout</div>
            </Menu.Item>
        </Menu>
    );

    return (
        <nav className="nav">
            <div style={{ width: '100%' }} className="flex mt-2">
                <a className="ml-3" href="/view-student">Dashboard</a>
                <div className="user-dropdown float-right">
                    <a className="mr-3" href="/">Sign up</a>
                    <a className="mr-3" href="/login">Login</a>
                    <Dropdown overlay={menu} trigger={['click']}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            <UserOutlined /> {usersData.currentUser && usersData.currentUser.name} <DownOutlined />
                        </a>
                    </Dropdown>
                </div>
            </div>
        </nav>
    );
}
