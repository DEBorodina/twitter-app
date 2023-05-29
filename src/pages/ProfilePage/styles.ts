import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: relative;
  color: ${(props) => props.theme.textColor};
`;

export const FeedContainer = styled.div`
  margin-top: ${(props) => props.theme.FEED_PAGE_MARGIN_TOP}px;
  margin-left: max(
    ${(props) => props.theme.SIDE_BAR_WIDTH}%,
    ${(props) => props.theme.SIDE_BAR_MIN_WIDTH}px
  );
  margin-right: max(
    ${(props) => props.theme.SIDE_BAR_WIDTH}%,
    ${(props) => props.theme.SIDE_BAR_MIN_WIDTH}px
  );
  width: 100%;
  margin-bottom: ${(props) => props.theme.FEED_PAGE_MARGIN_BOTTOM}px;

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
  margin-top: ${(props) => props.theme.FEED_PAGE_MARGIN_BOTTOM}px;
`;
