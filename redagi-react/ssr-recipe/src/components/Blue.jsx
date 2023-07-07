import styled from "styled-components";
const Blue = () => {
  return <StyledBlue className="Blue">Blue</StyledBlue>;
};

export default Blue;

const StyledBlue = styled.div`
  background-color: blue;
  font-size: 1.5rem;
  color: white;
  width: 8rem;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
