import styled from 'styled-components';

export interface WrapperProps {
  $inModal: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  min-height: ${(props) => props.theme.TWIT_MIN_HEIGHT}px;
  padding-top: ${(props) => props.theme.TWIT_MARGIN}px;
  padding-bottom: ${(props) => props.theme.TWIT_MARGIN}px;
  border-bottom: ${(props) => (props.$inModal ? 0 : 1)}px solid
    ${(props) => props.theme.borderColor};
`;

export const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: ${(props) => props.theme.TWIT_WIDTH}%;
  margin: 0 auto;
`;

export const Data = styled.p`
  display: flex;
`;

export const UserName = styled.span`
  font-size: ${(props) => props.theme.TWIT_FONT_SIZE}px;
  font-weight: ${(props) => props.theme.BOLD_FONT_WEIGHT};
  margin-right: ${(props) => props.theme.TWIT_MARGIN}px;
`;

export const UserEmail = styled.span`
  font-size: ${(props) => props.theme.TWIT_FONT_SIZE}px;
  opacity: 0.7;
`;

export const Time = styled.span`
  font-size: ${(props) => props.theme.TWIT_FONT_SIZE}px;
  opacity: 0.5;
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.TWIT_FONT_SIZE + 2}px;
  margin-top: ${(props) => props.theme.TWIT_MARGIN * 1.5}px;
`;

export const ImageContainer = styled.div`
  width: ${(props) => props.theme.TWIT_IMAGE_WIDTH}%;
  min-width: ${(props) => props.theme.TWIT_IMAGE_MIN_WIDTH}px;
  margin: 0 auto;
  margin-top: ${(props) => props.theme.TWIT_MARGIN * 1.5}px;

  @media (max-width: 380px) {
    min-width: ${(props) => props.theme.TWIT_IMAGE_MIN_WIDTH_SMALL_SCREEN}px;
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: contain;
  border-radius: ${(props) => props.theme.TWIT_MARGIN}px;
`;
