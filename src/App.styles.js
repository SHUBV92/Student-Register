import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  margin-left: 200px;
`;

export const Nav = styled.nav`
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 200px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: lightgrey; /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 20px;

  .ul {
    background-color: #f0f0f0;
    color: #3b99fc;
  }
`;

export const Logo = styled.div`
  background-color: lightgrey;
  color: #3b99fc;
  text-align: center;
  height: 40px;
`;
