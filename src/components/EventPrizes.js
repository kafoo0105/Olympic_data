import React from 'react';
import styled from 'styled-components';
import phoneImage from '../assets/images/phone.jpg';
import coffeeImage from '../assets/images/coffee.png';
import giftImage from '../assets/images/gift.avif';

const EventContainer = styled.div`
  padding: 2rem;
  background-color: #f7f9fc;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  margin: 0 auto;
`;

const EventTitle = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  padding: 0.5rem 2rem;
  background-color: white;
  border-radius: 25px;
  display: inline-block;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const PrizesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  flex-wrap: wrap;
`;

const PrizeItem = styled.div`
  position: relative;
  text-align: center;
  width: 200px;
`;

const WinnersBadge = styled.div`
  position: absolute;
  top: -10px;
  right: 20px;
  background-color: #1a237e;
  color: white;
  padding: 0.3rem 1rem;
  border-radius: 15px;
  font-size: 0.9rem;
  z-index: 1;
`;

const PrizeImageContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1rem;
  border: 4px solid #f5f5f5;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const PrizeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PrizeTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin-top: 0.5rem;
`;

const EventPrizes = () => {
  const prizes = [
    {
      id: 1,
      image: giftImage,
      winners: 10,
      title: "특별 기념품"
    },
    {
      id: 2,
      image: phoneImage,
      winners: 1,
      title: "휴대폰"
    },
    {
      id: 3,
      image: coffeeImage,
      winners: 20,
      title: "커피"
    }
  ];

  return (
    <EventContainer>
      <EventTitle>이벤트 경품</EventTitle>
      <PrizesContainer>
        {prizes.map((prize) => (
          <PrizeItem key={prize.id}>
            <WinnersBadge>{prize.winners}명</WinnersBadge>
            <PrizeImageContainer>
              <PrizeImage 
                src={prize.image} 
                alt={prize.title} 
              />
            </PrizeImageContainer>
            <PrizeTitle>{prize.title}</PrizeTitle>
          </PrizeItem>
        ))}
      </PrizesContainer>
    </EventContainer>
  );
};

export default EventPrizes;
