import React from 'react';
import styled from 'styled-components';
import Router from "src/router/router"; // Ensure this path is correct
import Navbar from 'src/components/Navbar/navbar';
import Sidebar from "../components/Sidebar/sidebar";

const appMinWidth = '1024px';

const AppContent = () => {
    return (
        <Container>
            <RouterContainer>
            <Sidebar/>
                <Navbar />
                <Router />
            </RouterContainer>
        </Container>
    );
};

export default AppContent;

const Container = styled.div`
  display: flex;
  overflow: hidden;
  min-width: ${appMinWidth};  /* Minimum width restriction */
  min-height: 100vh; /* Full viewport height */
`;

const RouterContainer = styled.div`
  position: relative;
  flex-grow: 1; /* Allowing RouterContainer to expand */
  z-index: 1;
  overflow: auto; /* Enables scrolling within this container */
  height: 100vh; /* Full viewport height */
`;
