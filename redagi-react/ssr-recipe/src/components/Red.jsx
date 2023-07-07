import styled from "styled-components";
const Red = () => {
  return <StyledRed className="Red">Red</StyledRed>;
};

export default Red;

const StyledRed = styled.div`
  background-color: red;
  font-size: 1.5rem;
  color: white;
  width: 8rem;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
