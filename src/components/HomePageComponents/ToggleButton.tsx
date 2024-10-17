import React, { useContext } from 'react';
import { ThemeContext } from '@/components/theme/ThemeContext';
import styled from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';

const ToggleButtonWrapper = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.toggleBorder};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  cursor: pointer;
  transition: background 0.3s ease;

  &:focus {
    outline: none;
  }

  svg {
    color: ${({ theme }) => theme.text};
    font-size: 1.5rem;
  }
`;

const ToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ToggleButtonWrapper onClick={toggleTheme}>
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </ToggleButtonWrapper>
  );
};

export default ToggleButton;
