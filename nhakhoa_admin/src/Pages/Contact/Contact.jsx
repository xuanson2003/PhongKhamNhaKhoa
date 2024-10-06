import React, { useRef, useState } from 'react';
import { faHouse, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PlusOutlined } from '@ant-design/icons';
import {
    Breadcrumb,
    Button,
    Card,
    Cascader,
    Checkbox,
    ColorPicker,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Mentions,
    Radio,
    Rate,
    Select,
    Slider,
    Switch,
    TreeSelect,
    Upload,
    Segmented,
    Modal,
} from 'antd';
import ConfigForm from '~/Components/ConfigForm/ConfigForm';
import loginForm from '~/Config/Form/login/login';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 6,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 14,
        },
    },
};

const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

function Contact() {
    const [modal1Open, setModal1Open] = useState(false);
    const [modal2Open, setModal2Open] = useState(false);
    const [componentDisabled, setComponentDisabled] = useState(false);
    const [componentVariant, setComponentVariant] = useState('filled');
    const formRef = useRef();

    const onFormVariantChange = ({ variant }) => {
        setComponentVariant(variant);
    };

    const handleSubmit = (values) => {
        console.log('Form values after submit:', values);
    };

    const handleGetData = () => {
        const data = formRef.current.getFormData();
        console.log('Data from form:', data);
    };

    const handleResetForm = () => {
        formRef.current.resetForm();
    };

    return (
        <div>
            <div className="d-flex">
                <Breadcrumb
                    items={[
                        {
                            href: '',
                            title: <FontAwesomeIcon icon={faHouse} />,
                        },
                        {
                            title: 'Danh sách liên hệ',
                        },
                    ]}
                />
                <div className="ms-auto">
                    <Button primary type="primary" icon={<FontAwesomeIcon icon={faPlus} />} size="media">
                        Thêm mới
                    </Button>
                </div>
            </div>
            <Card title="Test contact form" bordered={true} className="mt-3">
                <Checkbox checked={componentDisabled} onChange={(e) => setComponentDisabled(e.target.checked)}>
                    Form disabled
                </Checkbox>
                <Form
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                    layout="horizontal"
                    disabled={componentDisabled}
                    style={{
                        maxWidth: 600,
                    }}
                >
                    <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
                        <Checkbox>Checkbox</Checkbox>
                    </Form.Item>
                    <Form.Item label="Radio">
                        <Radio.Group>
                            <Radio value="apple"> Apple </Radio>
                            <Radio value="pear"> Pear </Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        label="Mentions"
                        name="Mentions"
                        rules={[
                            {
                                required: true,
                                message: 'Please input!',
                            },
                        ]}
                    >
                        <Mentions />
                    </Form.Item>
                    <Form.Item label="Select">
                        <Select>
                            <Select.Option value="demo">Demo</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="TreeSelect">
                        <TreeSelect
                            treeData={[
                                {
                                    title: 'Light',
                                    value: 'light',
                                    children: [
                                        {
                                            title: 'Bamboo',
                                            value: 'bamboo',
                                        },
                                    ],
                                },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item label="Cascader">
                        <Cascader
                            options={[
                                {
                                    value: 'zhejiang',
                                    label: 'Zhejiang',
                                    children: [
                                        {
                                            value: 'hangzhou',
                                            label: 'Hangzhou',
                                        },
                                    ],
                                },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item label="DatePicker">
                        <DatePicker />
                    </Form.Item>
                    <Form.Item label="RangePicker">
                        <RangePicker />
                    </Form.Item>
                    <Form.Item
                        label="InputNumber"
                        name="InputNumber"
                        rules={[
                            {
                                required: true,
                                message: 'Please input!',
                            },
                        ]}
                    >
                        <InputNumber
                            style={{
                                width: '100%',
                            }}
                        />
                    </Form.Item>
                    <Form.Item
                        label="TextArea"
                        name="TextArea"
                        rules={[
                            {
                                required: true,
                                message: 'Please input!',
                            },
                        ]}
                    >
                        <Input.TextArea rows={6} />
                    </Form.Item>
                    <Form.Item label="Switch" valuePropName="checked">
                        <Switch />
                    </Form.Item>
                    <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
                        <Upload action="/upload.do" listType="picture-card">
                            <button
                                style={{
                                    border: 0,
                                    background: 'none',
                                }}
                                type="button"
                            >
                                <PlusOutlined />
                                <div
                                    style={{
                                        marginTop: 8,
                                    }}
                                >
                                    Upload
                                </div>
                            </button>
                        </Upload>
                    </Form.Item>
                    <Form.Item label="Button">
                        <Button>Button</Button>
                    </Form.Item>
                    <Form.Item label="Slider">
                        <Slider />
                    </Form.Item>
                    <Form.Item label="ColorPicker">
                        <ColorPicker />
                    </Form.Item>
                    <Form.Item label="Rate">
                        <Rate />
                    </Form.Item>
                </Form>

                <Form
                    {...formItemLayout}
                    layout="vertical"
                    onValuesChange={onFormVariantChange}
                    variant={componentVariant}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        variant: componentVariant,
                    }}
                >
                    <Form.Item label="Form variant" name="variant">
                        <Segmented options={['outlined', 'filled', 'borderless']} />
                    </Form.Item>

                    <Form.Item
                        label="Input"
                        name="Input"
                        rules={[
                            {
                                required: true,
                                message: 'Please input!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="InputNumber"
                        name="InputNumber"
                        rules={[
                            {
                                required: true,
                                message: 'Please input!',
                            },
                        ]}
                    >
                        <InputNumber
                            style={{
                                width: '100%',
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        label="TextArea"
                        name="TextArea"
                        rules={[
                            {
                                required: true,
                                message: 'Please input!',
                            },
                        ]}
                    >
                        <Input.TextArea />
                    </Form.Item>

                    <Form.Item
                        label="Mentions"
                        name="Mentions"
                        rules={[
                            {
                                required: true,
                                message: 'Please input!',
                            },
                        ]}
                    >
                        <Mentions />
                    </Form.Item>

                    <Form.Item
                        label="Select"
                        name="Select"
                        rules={[
                            {
                                required: true,
                                message: 'Please input!',
                            },
                        ]}
                    >
                        <Select />
                    </Form.Item>

                    <Form.Item
                        label="Cascader"
                        name="Cascader"
                        rules={[
                            {
                                required: true,
                                message: 'Please input!',
                            },
                        ]}
                    >
                        <Cascader />
                    </Form.Item>

                    <Form.Item
                        label="TreeSelect"
                        name="TreeSelect"
                        rules={[
                            {
                                required: true,
                                message: 'Please input!',
                            },
                        ]}
                    >
                        <TreeSelect />
                    </Form.Item>

                    <Form.Item
                        label="DatePicker"
                        name="DatePicker"
                        rules={[
                            {
                                required: true,
                                message: 'Please input!',
                            },
                        ]}
                    >
                        <DatePicker />
                    </Form.Item>

                    <Form.Item
                        label="RangePicker"
                        name="RangePicker"
                        rules={[
                            {
                                required: true,
                                message: 'Please input!',
                            },
                        ]}
                    >
                        <RangePicker />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 6,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>

            <Card title="Test contact form" bordered={true} className="mt-3">
                <ConfigForm ref={formRef} config={loginForm} onFinish={handleSubmit} />
                <Button onClick={handleGetData} style={{ marginTop: '16px' }}>
                    Get Form Data
                </Button>
                <Button onClick={handleResetForm} style={{ marginTop: '16px', marginLeft: '8px' }}>
                    Reset Form
                </Button>
            </Card>

            <Card title="Modal" bordered={true} className="mt-3">
                <Button type="primary" onClick={() => setModal1Open(true)}>
                    Display a modal dialog at 20px to Top
                </Button>
                <Modal
                    title="20px to Top"
                    style={{
                        top: 20,
                    }}
                    open={modal1Open}
                    onOk={() => setModal1Open(false)}
                    onCancel={() => setModal1Open(false)}
                >
                    <p>some contents...</p>
                    <p>some contents...</p>
                    <p>some contents...</p>
                </Modal>
                <br />
                <br />
                <Button type="primary" onClick={() => setModal2Open(true)}>
                    Vertically centered modal dialog
                </Button>
                <Modal
                    title="Vertically centered modal dialog"
                    centered
                    open={modal2Open}
                    onOk={() => setModal2Open(false)}
                    onCancel={() => setModal2Open(false)}
                    
                >
                    <p>some contents...</p>
                    <p>some contents...</p>
                    <p>some contents...</p>
                </Modal>
            </Card>
        </div>
    );
}

export default Contact;
