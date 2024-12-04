// src/components/AIChat.js
import React, { useState } from 'react';
import axios from 'axios';
import styles from './AIChat.module.css'; // Import CSS Module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';

const dataAI = [
    { role: 'user', content: 'xin chào' },
    { role: 'assistant', content: 'Xin chào! 👋 \n\nTôi là phòng khám MediaPlus😊' },
    { role: 'user', content: 'Nếu tôi có hỏi thông tin về bạn thì nhớ trả lời bạn là chatbot hỗ trợ MediaPlus nhé' },
    { role: 'assistant', content: 'ok' },
    { role: 'user', content: 'Nếu tôi hỏi thông tin về bác sĩ thì bạn hãy hướng dẫn tôi click vào menu bác sĩ ở trên đầu để xem danh sách bác sĩ' },
    { role: 'assistant', content: 'ok' },
    { role: 'user', content: 'Nếu tôi hỏi thông tin về dịch vụ thì bạn hãy hướng dẫn tôi click vào menu dịch vụ ở trên đầu để xem danh sách dịch vụ' },
    { role: 'assistant', content: 'ok' },
    { role: 'user', content: 'nếu tôi chào bạn, thì hãy giới thiệu bản là chatbot ai hỗ trợ phòng khám nha khoa MediaPlus nhé' },
    { role: 'assistant', content: 'ok' },
    { role: 'user', content: 'nếu tôi hỏi về đăng ký lịch khám, hoặc đăng ký dịch vụ, thì hãy hướng dẫn tôi click vào nút "Đặt lịch khám" ở trên menu' },
    { role: 'assistant', content: 'ok' },
]

const AIChat = () => {
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showChat, setShowChat] = useState(false);

    const handleSendMessage = async () => {
        if (!userInput.trim()) return;
        setUserInput(''); // Clear input field

        setLoading(true);
        const updatedChatHistory = [...chatHistory, { role: 'user', content: userInput }];
        setChatHistory(updatedChatHistory); // Update chat history with user input

        dataAI.push({ role: 'user', content: userInput }); // Add user input to dataAI for API request

        try {
            const response = await axios.post('http://localhost:11434/v1/chat/completions', {
                model: 'gemma2:latest',
                messages: dataAI, // Send updated dataAI with user input
            });

            console.log(response);
            if (response.data.choices && response.data.choices[0].message && response.data.choices[0].message.content) {
                const assistantMessage = { role: 'assistant', content: response.data.choices[0].message.content };
                const updatedMessages = [...updatedChatHistory, assistantMessage];
                setChatHistory(updatedMessages); // Update chat history with assistant's response
                dataAI.push(assistantMessage); // Add assistant's response to dataAI for future requests
            }

            setLoading(false);
        } catch (error) {
            console.error('Error: ', error);
            setLoading(false);
        }
    };

    function showHideChat() {
        if (showChat) {
            setShowChat(false);
        } else {
            setShowChat(true);
        }
    }

    return (
        <>
            <div className={styles.chatBox} style={{ display: showChat ? 'flex' : 'none' }}>
                <div className={styles.chatBoxContent}>
                    {chatHistory.map((message, index) => (
                        <div
                            key={index}
                            className={message.role === 'user' ? styles.userMessage : styles.assistantMessage}
                        >
                            {message.content}
                        </div>
                    ))}
                </div>

                <div className={styles.inputBox}>
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Nhập câu hỏi"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                handleSendMessage();
                            }
                        }}
                    />
                    <button onClick={handleSendMessage} disabled={loading}>
                        {loading ? '...' : 'Gửi'}
                    </button>
                </div>
            </div>
            <button className={styles.buttonMess} onClick={showHideChat}>
                <FontAwesomeIcon icon={faCommentDots} />
            </button>
        </>
    );
};

export default AIChat;
