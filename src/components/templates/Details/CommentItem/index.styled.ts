import styled from 'styled-components';

export const CommentItem = styled.div`
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 50%;
    background-color: ${props => props.theme.iconColor};
    box-shadow: 3px 10px 3px ${props => props.theme.shadowColor};
    transition: 0.3s;
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