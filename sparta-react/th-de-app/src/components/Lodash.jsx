import { useCallback, useState } from "react";
import _ from "lodash";
const Lodash = () => {
  const [searchText, setSearchText] = useState("");
  const [inputText, setInputText] = useState("");

  const debounce = (callback, delay) => {
    let timeId = null;
    return (...args) => {
      if (timeId) clearTimeout(timeId);
      timeId = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  };

  // 왜 useCallback을 써야하냐???
  const handleSearchText = useCallback(
    _.debounce((text) => {
      setSearchText(text);
    }, 2000),
    []
  );

  const handleChange = (e) => {
    setInputText(e.target.value);
    handleSearchText();
  };

  return (
    <div
      style={{
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <h1>디바운싱 예제</h1>
      <input
        type="text"
        placeholder="입력값을 넣고 디바운싱 테스트를 해보세요"
        style={{ width: "300px" }}
        onChange={(e) => handleChange(e)}
      />
      <p>search text: {searchText}</p>
      <p>input text {inputText}</p>
    </div>
  );
};
export default Lodash;
