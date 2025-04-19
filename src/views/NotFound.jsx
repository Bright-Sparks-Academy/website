import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    // Styled components
    const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        text-align: center;
        background: linear-gradient(135deg, #4facfe, #00f2fe); /* Blue gradient */
        color: #fff;
        font-family: 'Inter', sans-serif;
    `;

    const Error = styled.h1`
        font-size: 10rem;
        font-weight: bold;
        margin: 0;
        animation: bounce 1.75s infinite;

        @keyframes bounce {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-10px);
            }
        }
    `;

    const PageNotFound = styled.h3`
        font-size: 2.5rem;
        margin: 20px 0;
    `;

    const DashboardButton = styled.button`
        color: #333;
        background: #fff;
        border: none;
        border-radius: 25px;
        padding: 15px 40px;
        font-size: 1.2rem;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover, &:focus {
            background: #f5f5f5;
            transform: translateY(-5px);
            box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        }
    `;

    const Footer = styled.p`
        margin-top: 50px;
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.8);
    `;

    const handleDashboardButton = () => {
        navigate('/');
    }

    return (
        <Container>
            <Error>404</Error>
            <PageNotFound>Oops! The page you're looking for doesn't exist.</PageNotFound>
            <DashboardButton onClick={handleDashboardButton}>Back to Home</DashboardButton>
            <Footer>Need help? Contact support or check the URL.</Footer>
        </Container>
    );
};

export default NotFound;