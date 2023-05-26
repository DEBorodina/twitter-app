import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
`;

export const FeedContainer = styled.div`
  margin-top: 30px;
  margin-left: max(20%, 220px);
  margin-right: max(20%, 220px);
  width: 100%;
  margin-bottom: 100px;

  @media (max-width: 820px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const FeedTitle = styled.h1`
  font-size: 20px;
  margin: 0 auto;
`;

export const TwitsContainer = styled.ul`
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.borderColor};
`;

export const LoaderContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

export const ModalButton = styled.button`
  border: none;
  background-color: transparent;
  display: none;

  @media (max-width: 820px) {
    display: block;
  }

  & svg * {
    fill: ${(props) => props.theme.textColor};
  }
`;

export const Header = styled.header`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
`;
