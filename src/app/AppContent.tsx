import React from 'react';
import styled from 'styled-components';
import Router from "src/router/router";

const appMinWidth = '1024px';

const AppContent = () => {
    return (
        <Container>
            <RouterContainer>
                <Router />
            </RouterContainer>
        </Container>
    );
};

export default AppContent;

const Container = styled.div`
  display: flex;
  overflow: hidden;
  min-width: ${appMinWidth};
  min-height: 100vh;
`;


const RouterContainer = styled.div`
  position: relative;
  flex-grow: 1;
  z-index: 1;
  overflow: auto;
  height: 100vh;
`;
