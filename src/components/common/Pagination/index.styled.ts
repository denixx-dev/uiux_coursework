import styled from 'styled-components';

export const Pagination = styled.div`
    position: fixed;
    top: 800px;
    display: block; 
    width: 1050px;
    height: 3px;
    min-height: 40px;
    flex: 0 0 auto;
    justify-content: space-between;

    transition: 0.1s;
    margin: 0px 950px;
`;

// Стиль для пагинации при масштабировании
export const ScaledPagination = styled.div`
    position: fixed;
    top: 150px;
    display: inline-block; 
    width: 0%; /* Примерное значение, подберите подходящую ширину */
    height: 0%;
    min-height: 0px;
    justify-content: space-between;
    transition: 0.1s;
    margin: -10px -10px -10px 1000px;
`;

export const Content = styled.div`
  display: block;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  box-sizing: border-box;
 
`;

// Стиль для пагинации при масштабировании
export const ScaledContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 50px;
  height: 1px;
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
  height: 40px;
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

// Стиль для пагинации при масштабировании
export const ScaledItem = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.paginationColor};
  font-weight: 500; 
  font-size: ${props => props.theme.textSizeTextM};
  height: 50px;
  width: 50px;
  border-radius: 50px;
  padding: 0px 0px;
  box-shadow: 0px 0px 3px ${props => props.theme.shadowColor};
  box-sizing: border-box;
  transition: 0.1s;
  &:hover{
    transition: 0.1s;
    background-color:${props => props.theme.accentColor1};
   
  }
  margin: 0px 0px 0px 0px;
  
`;

export const ActiveItem = styled(Item)`
  background-color:${props => props.theme.accentColor1};
`;