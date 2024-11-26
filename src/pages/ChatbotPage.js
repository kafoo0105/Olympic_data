import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';

const ChatbotContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  height: 80vh;
`;

const ChatbotMessages = styled.div`
  flex-grow: 1;
  padding: 1rem;
  overflow-y: auto;
`;

const Message = styled.div`
  max-width: 80%;
  padding: 0.8rem 1rem;
  margin-bottom: 1rem;
  border-radius: 20px;
  line-height: 1.4;
  align-self: ${({ isBot }) => (isBot ? 'flex-start' : 'flex-end')};
  background-color: ${({ isBot }) => (isBot ? '#f0f0f0' : '#007bff')};
  color: ${({ isBot }) => (isBot ? 'black' : 'white')};
`;

const ChatbotInputForm = styled.form`
  display: flex;
  padding: 1rem;
  background-color: #f8f9fa;
`;

const ChatbotInput = styled.input`
  flex-grow: 1;
  padding: 0.8rem;
  border: 1px solid #ced4da;
  border-radius: 20px;
  font-size: 1rem;
`;

const ChatbotSubmit = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  margin-left: 0.5rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ChatbotPage = () => {
  const [messages, setMessages] = useState([
    { text: '안녕하세요! 무엇을 도와드릴까요?', isBot: true },
  ]);
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() === '') return;

    setMessages([...messages, { text: inputText, isBot: false }]);
    setInputText('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: '죄송합니다. 아직 학습 중입니다.', isBot: true },
      ]);
    }, 1000);
  };

  return (
    <>
      <NavBar></NavBar>
      <ChatbotContainer>
        <ChatbotMessages>
          {messages.map((message, index) => (
            <Message key={index} isBot={message.isBot}>
              {message.text}
            </Message>
          ))}
        </ChatbotMessages>
        <ChatbotInputForm onSubmit={handleSubmit}>
          <ChatbotInput
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="메시지를 입력하세요..."
          />
          <ChatbotSubmit type="submit">전송</ChatbotSubmit>
        </ChatbotInputForm>
      </ChatbotContainer>
    </>
  );
};

export default ChatbotPage;
