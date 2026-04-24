import React from 'react';
import PropTypes from 'prop-types';
import './ChatWindow.css';

const ChatWindow = ({ messages, onSendMessage, online }) => {
    const [newMessage, setNewMessage] = React.useState('');

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            onSendMessage(newMessage);
            setNewMessage('');
        }
    };

    return (
        <div className='chat-window'>
            <div className='online-status'>{online ? 'Online' : 'Offline'}</div>
            <div className='messages'>
                {messages.map((msg, index) => (
                    <div key={index} className='message'>{msg}</div>
                ))}
            </div>
            <input
                type='text'
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder='Type a message...'
            />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
};

ChatWindow.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.string).isRequired,
    onSendMessage: PropTypes.func.isRequired,
    online: PropTypes.bool.isRequired,
};

export default ChatWindow;