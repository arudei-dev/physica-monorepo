import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface GadgetsProps {}

const StyledGadgets = styled.div`
  color: pink;
`;

export function Gadgets(props: GadgetsProps) {
  return (
    <StyledGadgets>
      <h1>Welcome to gadgets!</h1>
    </StyledGadgets>
  );
}

export default Gadgets;
