import React, { useState , useRef} from 'react';
import { Modal } from 'antd';
import { Form, Input, Button, Checkbox, Table } from 'antd';


const columns = [
    {
        title: 'Name',
        dataIndex: 'username',
        key: 'username',
    },
    {
        title: 'Number',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Message',
        dataIndex: 'msg',
        key: 'msg',
    }
];

const Contact = () => {

    const formRef = useRef(null);

    const [data, setData] = useState({

        username: "",
        phone: "",
        email: "",
        msg: "",
    });

    const [tableData, setTableData] = useState([]);



    const formSubmit = () => {
        // e.preventDefault();
        // alert(`My name is ${data.username} my mobile no is ${data.phone} and email is ${data.email}, here is what i want to say ${data.msg}`);

        const newTableData = [...tableData, {
            key: tableData.length,
            username: data.username,
            phone: data.phone,
            email: data.email,
            msg: data.msg
        },]

        setTableData(newTableData)

        setData(
            {
                username: "",
                phone: "",
                email: "",
                msg: "",
            }
        )

        formRef.current?.resetFields();

    }

    const handleCancel = () => {
        window.history.back();
    };

    const onChangeInput = (value, key) => {
        setData({ ...data, [key]: value })
    }

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };



    return (
        <Modal visible={true} onCancel={handleCancel} footer={null}>

            <div className="my-5">
                <h1 className="text-center"> Contact Us </h1>
            </div>

            <div className="container contact_div">
                <div className="row">

                    <Form onFinish={formSubmit}
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        ref={formRef}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input onChange={({ target }) => onChangeInput(target.value, "username")} value={data.username} />
                        </Form.Item>

                        <Form.Item
                            label="Number"
                            name="Number"
                            rules={[{ required: true, message: 'Please input your number!' }]}
                        >
                            <Input type="number" onChange={({ target }) => onChangeInput(target.value, "phone")} value={data.phone} />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="Email"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input type="email" onChange={({ target }) => onChangeInput(target.value, "email")} value={data.email} />
                        </Form.Item>

                        <Form.Item
                            label="Message"
                            name="Message"
                            rules={[{ required: true, message: 'Please Entere your message' }]}
                        >
                            <Input type="text" onChange={({ target }) => onChangeInput(target.value, "msg")} value={data.msg} />
                        </Form.Item>

                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit" >
                                Submit
                                 </Button>
                        </Form.Item>
                    </Form>

                    <Table columns={columns} dataSource={tableData} />

                    {/* </div> */}
                </div>
            </div>

            <footer className="w-100 bg-light text-center">
                <p> © 2021 Netlink. All Rights Reserved | Terms and Conditions</p>
            </footer>
        </Modal>
    )
}

export default Contact;