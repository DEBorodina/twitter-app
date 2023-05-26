import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: relative;
  color: ${(props) => props.theme.textColor};
`;

export const FeedContainer = styled.div`
  margin-top: 30px;
  margin-left: max(20%, 220px);
  margin-right: max(20%, 220px);
  width: 100%;
  margin-bottom: 100px;
  z-index: 50;

  @media (max-width: 820px) {
    margin-left: 0;
    margin-right: 0;
  }
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
  margin-bottom: 100px;
`;
