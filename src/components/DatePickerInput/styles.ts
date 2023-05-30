import styled from 'styled-components';

export const DataSelectors = styled.div`
  width: 100%;
  margin-bottom: ${(props) => props.theme.DATE_PICKER_MARGIN_BOTTOM * 2}px;
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.p`
  width: 100%;
  text-align: left;
  margin-bottom: ${(props) => props.theme.DATE_PICKER_MARGIN_BOTTOM}px;
`;
