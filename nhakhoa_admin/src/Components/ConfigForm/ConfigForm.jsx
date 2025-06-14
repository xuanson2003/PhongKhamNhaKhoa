import React, { useImperativeHandle, forwardRef, memo, useRef } from 'react';
import { Button, Checkbox, Form, Input, InputNumber, Select } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Option } from 'antd/es/mentions';
import TextEditor from '../TextEditor/TextEditor';

const formItemLayout = {
    labelCol: {
        xs: {
            span: 16,
        },
        sm: {
            span: 5,
        },
    },
};

const ConfigForm = forwardRef(({ config, onFinish, style, className, formLayout = formItemLayout }, ref) => {
    const [form] = Form.useForm();
    const editorRef = useRef(null);

    const getFormData = () => {
        const values = form.getFieldsValue();
        return values;
    };

    const handleSubmit = (values) => {
        if (editorRef.current) {
            values[editorRef.current.name] = editorRef.current.getContent();
        }
        if (onFinish) {
            onFinish(values);
        }
    };

    const setFormValues = (data) => {
        form.setFieldsValue(data);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && event.target.tagName !== 'TEXTAREA') {
            form.submit();
        }
    };

    useImperativeHandle(ref, () => ({
        getFormData: getFormData,
        resetForm: () => form.resetFields(),
        submit: () => form.submit(),
        setFormValues,
    }));

    return (
        <div>
            <Form
                {...formLayout}
                className={className}
                form={form}
                name={config.name}
                layout={config.layout}
                onFinish={handleSubmit}
                onKeyDown={handleKeyPress}
                labelWrap
                colon={false}
            >
                <div className="row" style={{ ...style }}>
                    {config.fields.map((field, index) => (
                        <div key={index} className={`col-${field.col ? field.col : '12'}`}>
                            <Form.Item
                                label={field.title}
                                name={field.name}
                                rules={field.rules}
                                size={field.size}
                                labelCol={field.labelCol}
                                wrapperCol={field.wrapperCol}
                                {...(field.type === 'checkbox' ? { valuePropName: 'checked' } : {})}  
                            >
                                {field.type === 'password' ? (
                                    <Input.Password
                                        className={field.className}
                                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                    />
                                ) : field.type === 'textarea' ? (
                                    <Input.TextArea rows={4} className={field.className} style={field.style} />
                                ) : field.type === 'number' ? (
                                    <InputNumber
                                        style={{ width: '100%', ...field.style }}
                                        className={field.className}
                                    />
                                ) : field.type === 'select' ? (
                                    <Select className={field.className} style={field.style}>
                                        {field.options?.map((option) => (
                                            <Option key={option.value} value={option.value}>
                                                {option.label}
                                            </Option>
                                        ))}
                                    </Select>
                                ) : field.type === 'editor' ? (
                                    <TextEditor
                                        ref={editorRef}
                                        name={field.name}
                                        size={field.size}
                                        className={field.className}
                                        style={field.style}
                                        height={field.height}
                                        onChange={(content, name) => {
                                            form.setFieldsValue({ [name]: content });
                                        }}
                                    />
                                ) : field.type === 'checkbox' ? (
                                    <Checkbox
                                        className={field.className}
                                        style={field.style}
                                        checked={form.getFieldValue(field.name) ? true : false}
                                        onChange={(e) => {
                                            form.setFieldsValue({ [field.name]: e.target.checked });
                                        }}
                                    >
                                        {field.label}
                                    </Checkbox>
                                ) : (
                                    <Input
                                        className={field.className}
                                        style={field.style}
                                        height={field.height}
                                        onChange={(content, name) => {
                                            form.setFieldsValue({ [name]: content });
                                        }}
                                    />
                                )}
                            </Form.Item>
                        </div>
                    ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                    {config.actions.map((action) => (
                        <Button
                            key={action.title}
                            type={action.property.type}
                            htmlType={action.type === 'submit' ? 'submit' : 'button'}
                            className={action.className}
                            style={action.style}
                            onClick={action.type === 'reset' ? () => form.resetFields() : undefined}
                        >
                            {action.property.icon && <FontAwesomeIcon icon={action.property.icon} />}
                            {action.title}
                        </Button>
                    ))}
                </div>
            </Form>
        </div>
    );
});

export default memo(ConfigForm);
