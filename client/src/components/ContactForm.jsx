import React, { useEffect } from 'react'
import { Form, Input, Button, DatePicker } from 'antd'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not validate email!',
    },
};

export const ContactForm = (props) => {
    const [form] = Form.useForm();

    useEffect(() => {
        const user = props.user
        if (user) {
            form.setFieldsValue({
                firstName: user.firstName,
                lastName: user.lastName,
                fatherName: user.fatherName,
                email: user.email,
                phoneNumber: user.phoneNumber,
                country: user.country,
                address: user.address
            });
        }
    }, [props.user])

    const onFinish = values => {
        props.handleSubmit(values);
        form.resetFields();
    };

    return (
        <Form {...layout} form={form} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item name='firstName' label="First Name" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name='lastName' label="Last Name" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name='fatherName' label="Father Name" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name='email' label="Email" rules={[{ required: true, type: 'email' }]}>
                <Input />
            </Form.Item>
            <Form.Item name='phoneNumber' label="Phone" >
                <Input />
            </Form.Item>
            <Form.Item name='country' label="Country">
                <Input />
            </Form.Item>
            {!props.isEdit && <Form.Item name='dob' label="Date of birth">
                <DatePicker />
            </Form.Item>}
            {!props.isEdit && <Form.Item name='password' label="Password" rules={[{ required: true }]}>
                <Input />
            </Form.Item>}
            <Form.Item name='address' label="Address">
                <Input.TextArea />
            </Form.Item>
            <Form.Item className="d-flex justify-content-center">
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                {props.isEdit && <Button className="ml-10" type="default" onClick={props.handleCancel}>
                    Cancel
                </Button>}
            </Form.Item>
        </Form>
    );
};
