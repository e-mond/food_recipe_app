import React from 'react';
import '../common/styles/Card.css';
import { Container, Row, Col } from 'react-bootstrap';

const RecipeCard = ({ recipe }) => {
  return (
    <Container fluid className="recipe-container"> 
      <Row className="justify-content-center">
        <Col xs={12} md={4} lg={3} className="mb-4">
          <div className="new-recipe-card">
            <img src={recipe.recipe.image} alt={recipe.recipe.label} className="new-recipe-image img-fluid" />
            <div className="new-recipe-details">
              <h3 className="new-recipe-title">{recipe.recipe.label}</h3>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RecipeCard;
