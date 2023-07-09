import styled from "styled-components";
// eslint-disable-next-line react/prop-types
const DogItem = ({ index, url }) => {
  return (
    <StyledDogItem>
      <p>{index}</p>
      <div>
        <img src={url} />
        <a href="">{url}</a>
      </div>
    </StyledDogItem>
  );
};

export default DogItem;

const StyledDogItem = styled.div`
  width: 100%;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  position: relative;
  p {
    background-color: black;
    color: white;
    position: absolute;
    display: block;
    margin: 0;
  }
  img {
    width: 100px;
    height: 100px;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;
