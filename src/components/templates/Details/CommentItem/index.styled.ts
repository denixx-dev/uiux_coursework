import styled from 'styled-components';

export const CommentItem = styled.div`
    width:13%;
    height: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;

export const CommentText = styled.div`
    display: flex;
    flex: 0 0 auto;
    height: 30px;
    font-size: ${props => props.theme.textSizeTextM};
    align-items: center;
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};
    }
`;

export const CommentContent = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;   
    padding: 10px;
`;

export const UserName = styled.div`
  display: flex;
  flex: 0 0 auto;
  height: 30px;
  font-size: ${props => props.theme.textSizeTextM};
  align-items: center;
  @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};
    }
`;