import styled from 'styled-components';

export const Pagination = styled.div`
    position: fixed;
    top: 800px;
    display: flex; 
    width: 55%;
    height: 3%;
    min-height: 40px;
    flex: 0 0 auto;
    justify-content: space-between;
    background-color: ${props => props.theme.bachgroundColor};
    transition: 0.1s;
    margin: 0px 950px;
`;

export const Content = styled.div`
  display: block;
  flex-direction: column-reverse;
  width: 100%;
  height: 100%;
  justify-content: center;
  box-sizing: border-box;
 
`;

export const Item = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.paginationColor};
  font-weight: 500; 
  font-size: ${props => props.theme.textSizeTextM};
  height: 100%;
  border-radius: 50px;
  padding: 0px 10px;
  box-shadow: 0px 0px 3px ${props => props.theme.shadowColor};
  box-sizing: border-box;
  transition: 0.1s;
  &:hover{
    transition: 0.1s;
    background-color:${props => props.theme.accentColor1};
   
  }
  margin: 10px 500px -100px 500px;
  
`;

export const ActiveItem = styled(Item)`
  background-color:${props => props.theme.accentColor1};
`;