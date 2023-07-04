import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../shared/data";

function WorkDown(props) {
  const params = useParams();
  //어떤 todo 인지 찾아보기
  const foundData = data.find((item) => item.id === parseInt(params.id));
  console.log(foundData);
  return <div>하위페이지입니다.</div>;
}

export default WorkDown;
