import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const NavBarContainer = styled.nav`
  @font-face {
    font-family: 'S-CoreDream-3Light';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'S-CoreDream-3Light', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  img {
    width: 120px;
    height: auto;
    margin-right: 10px;
  }

  h1 {
    font-size: 24px;
    font-weight: 700;
    color: #343a40;
    margin: 0;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;

  li {
    margin-left: 30px;

    a,
    button {
      text-decoration: none;
      color: #333;
      font-weight: 500;
      cursor: pointer;
      background: none;
      border: none;
      transition: color 0.3s ease;

      &:hover {
        color: #1a73e8;
      }
    }
  }
`;

export default function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('accessToken'); 
    localStorage.removeItem('refreshToken'); 
    setIsLoggedIn(false); 
    navigate('/login'); 
  };

  return (
    <NavBarContainer>
      <Logo to="/main">
        <img src="https://olympics.com/images/static/b2p-images/logo_color.svg" alt="올림픽 로고" />
        <h1>나만의 경로 찾기</h1>
      </Logo>
      <NavLinks>
        <li>
          <Link to="/main">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/courses">코스</Link>
        </li>
        <li>
          {isLoggedIn ? (
            <button onClick={handleLogout}>로그아웃</button>
          ) : (
            <Link to="/login">로그인</Link>
          )}
        </li>
      </NavLinks>
    </NavBarContainer>
  );
}
