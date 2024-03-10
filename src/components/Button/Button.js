// Button.js
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => props.backgroundColor || "#007bff"};
  color: ${(props) => props.color || "#fff"};
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor || "#0056b3"};
  }
`;

const Button = ({
  onClick,
  text,
  backgroundColor,
  color,
  hoverBackgroundColor,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      backgroundColor={backgroundColor}
      color={color}
      hoverBackgroundColor={hoverBackgroundColor}
    >
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  hoverBackgroundColor: PropTypes.string,
};

export default Button;
