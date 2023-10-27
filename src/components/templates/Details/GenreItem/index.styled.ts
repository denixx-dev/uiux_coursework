import styled from 'styled-components';

export const GenreItem = styled.div`
    width:100%;
    height: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    box-shadow: 10px 10px 10px ${props => props.theme.shadowColor};
    font-size: ${props => props.theme.textSizeTextL};
    border-radius: 10px;
    background-color: #FFD700;
`;

export const Text = styled.span`
    font-size: ${props => props.theme.textSizeTextM};
    color: black;
    font-weight: 500;
    padding: 0px 10px;
    line-height: 5px;
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};
    }
`;