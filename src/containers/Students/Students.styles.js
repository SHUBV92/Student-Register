import styled from 'styled-components';

export const StudentsContainer = styled.div`
  /* padding-left: 8rem; */
  /* padding: 3rem; */
  width: 300px;
  padding: 20px;

  border: 2px solid grey;

  @media screen and (max-width: 900px) {
    /* padding-left: 8rem; */
    /* padding-right: 1rem; */
  }
`;

export const InfoBar = styled.div`
  display: 'flex';
  list-style: 'none';

  .sortBy {
    justify-content: flex-end;
    border-top: 0.5px solid grey;
    border-bottom: 0.5px solid grey;
    padding: 5px;
  }
`;

export const Test = styled.div`
  display: flex;
  /* justify-content: flex-start; */
  /* margin-left: 200px; */
`;
