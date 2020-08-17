import React from 'react'
import { useDispatch } from "react-redux"
import { loginUser } from '../../redux/user/operations'
import { Form, Input, Button, Card } from 'antd'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

export const Login = (props) => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const onFinish = values => {
        dispatch(loginUser(values))
        form.resetFields();
    };

    return (
        <Card
            className="signup-card"
            title="Login"
        >
            <Form {...layout} form={form} name="nest-messages" onFinish={onFinish}>
                <Form.Item name='email' label="Email" rules={[{ required: true, type: 'email' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name='password' label="Password" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item className="d-flex justify-content-center">
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};
