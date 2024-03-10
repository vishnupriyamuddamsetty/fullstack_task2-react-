// Card.js
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

const Title = styled.h2`
  color: #333;
`;

const Description = styled.p`
  color: #666;
`;

const Card = ({ title, description, image }) => {
  return (
    <CardContainer>
      {image && <Image src={image} alt={title} />}
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardContainer>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default Card;
