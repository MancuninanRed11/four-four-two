import React from 'react';
import { Link } from 'react-router-dom';

// styles
import Home from './Home.styled';

const HomeComponent = () => {
  return (
    <Home.Wrapper>
      <Home.BackgroundContainer>
        <Home.DescriptionContent>
          <Home.Header>Four-Four-Two</Home.Header>
          <Home.Description>
            <Home.Text>If you a football fan and you got a favourite team?</Home.Text>
            <Home.Text>
              If you know what means EPL, Italian Serie A, German Bundesliga,
              Spanish Primera?
            </Home.Text>
            <Home.Text>Then you might be here and explore our staff!</Home.Text>
          </Home.Description>
        </Home.DescriptionContent>
        <Home.ButtonWrapper>
          <Link to="/products">Explore more</Link>
        </Home.ButtonWrapper>
      </Home.BackgroundContainer>
    </Home.Wrapper>
  );
};

export default HomeComponent;
