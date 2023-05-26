import styled from 'styled-components';

export interface WrapperProps {
  $inModal: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  min-height: 70px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: ${(props) => (props.$inModal ? 0 : 1)}px solid
    ${(props) => props.theme.borderColor};
`;

export const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const Data = styled.p`
  display: flex;
`;

export const UserName = styled.span`
  font-size: 12px;
  font-weight: 600;
  margin-right: 10px;
`;

export const UserEmail = styled.span`
  font-size: 12px;
  opacity: 0.7;
`;

export const Time = styled.span`
  font-size: 12px;
  opacity: 0.5;
`;

export const Text = styled.p`
  font-size: 14px;
  margin-top: 15px;
`;

export const ImageContainer = styled.div`
  width: 60%;
  min-width: 300px;
  margin: 0 auto;
  margin-top: 15px;

  @media (max-width: 380px) {
    min-width: 230px;
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: contain;
  border-radius: 10px;
`;
