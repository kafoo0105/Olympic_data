import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

const AuthContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
`;

const LogoLink = styled(Link)`
  display: inline-block;
  color: #2c3e50;
  font-size: 2.5rem;
  font-weight: bold;
  text-decoration: none;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    color: #1a73e8;
  }
`;

const SubTitle = styled.h2`
  color: #34495e;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #7f8c8d;
  margin-bottom: 2rem;
`;

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AuthInput = styled.input`
  padding: 0.75rem;
  border: 1px solid #bdc3c7;
  border-radius: 5px;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const AuthSwitch = styled.p`
  margin-top: 1rem;
  color: #7f8c8d;

  a {
    color: #3498db;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    const requestBody = {
      nickname: name,
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        'https://olypic-park-contest-production.up.railway.app/api/auth/register/email',
        requestBody,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const { accessToken, refreshToken } = response.data;

      console.log('Access Token:', accessToken);
      console.log('Refresh Token:', refreshToken);


      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      alert('회원가입 성공! 환영합니다!');
      navigate('/main');
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || '회원가입에 실패했습니다. 다시 시도해주세요.'
      );
    }
  };



  return (
    <AuthContainer>
      <AuthContent>
        <LogoLink to="/main">Olympic Park</LogoLink>
        <SubTitle>나만의 최적 경로 찾기</SubTitle>
        <Description>
          방문 목적에 맞는 맞춤 경로를 추천해드립니다. 더 나은 올림픽 공원 경험을 시작하세요.
        </Description>
        <AuthForm onSubmit={handleSubmit}>
          <AuthInput
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <AuthInput
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <AuthInput
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <SubmitButton type="submit">회원가입</SubmitButton>
        </AuthForm>
        {errorMessage && <p style={{ color: 'red', marginTop: '1rem' }}>{errorMessage}</p>}
        <AuthSwitch>
          이미 계정이 있으신가요? <a href="/login">로그인</a>
        </AuthSwitch>
      </AuthContent>
    </AuthContainer>
  );
};

export default SignupPage;
