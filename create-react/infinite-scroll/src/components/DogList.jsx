import { useEffect, useRef, useState } from "react";
import { getDogs } from "../apis/api";
import DogItem from "./DogItem";
import { ColorRing } from "react-loader-spinner";
import styled from "styled-components";

const DogList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const obsRef = useRef(null);

  useEffect(() => {
    fetchDogs();
    const observer = new IntersectionObserver(obsHandler, {
      threshold: 0,
      rootMargin: "200% 0px", //이게 무슨 뜻이야
    });
    if (obsRef.current) {
      observer.observe(obsRef.current);
    }
  }, []);

  useEffect(() => {
    fetchDogs();
  }, [page]);

  const obsHandler = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      // inIntersecting 은 뭔데 target의 안에 들어가있냐 이 타겟은 뭔데
      console.log("intersected");
      setPage((prev) => prev + 1);
      // 여기서도 나오는 문법 숫자에 1씩 더해주는 모양새인가보오
    }
    // entreis 가 뭔데 배열로 집어넣음??
  };

  const fetchDogs = async () => {
    const response = await getDogs();
    if (response) {
      console.log(response);
      setData((prev) => prev.concat(response));
    }
  };
  return (
    <StyledDogList>
      {data.map((item, index) => {
        return <DogItem key={index} index={index} url={item.url} />;
      })}
      <div ref={obsRef} className="ref">
        <Progress />
      </div>
    </StyledDogList>
  );
};

export default DogList;

const StyledDogList = styled.div`
  .ref {
    padding-top: 300px;
  }
`;

const Progress = () => (
  <ColorRing
    height="120"
    width="100"
    colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
  />
);
