import React, { useRef, useState } from 'react';
import { Form, Button, Card } from 'antd';
import TextEditor from '~/Components/TextEditor/TextEditor';
import testForm from '~/Config/Form/test'
import ConfigForm from '~/Components/ConfigForm/ConfigForm';

const Profile = () => {
    const [editorHtml, setEditorHtml] = useState('');
    const editorRef = useRef()


    const handleSubmit = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent())
        }
    };

    const submitForm = (values) => {
        console.log(values)
    }

    return (
        <div>
            <Card theme="snow" title={'Trình soạn thảo văn bản'} bordered={true}>
                <Form onFinish={handleSubmit}>
                    <Form.Item>
                       <TextEditor ref={editorRef}/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Gửi
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
            <Card title="Thử form soạn thảo" className='mt-4'>
                <ConfigForm config={testForm} onFinish={submitForm}/>
            </Card>
        </div>
    );
};

export default Profile;
