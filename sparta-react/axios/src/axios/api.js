import axios from 'axios';

const instance = axios.create({
  baseURL : process.env.REACT_APP_SERVER_URL
})

// req 와 res 사이에 무언가를 넣겠다
instance.interceptors.request.use(
  // 요청을 보내기 전 수행되는 함수
  function (config) {
    console.log("인터셉터요청 성공")
    return config;
  },
  // 오류요청을 보내기 전 수행되는 함수
  function (error) {
    console.log("인터셉터요청 오류")
    return Promise.reject(error);
    // 오류처리를 할 때에는 꼭 Promise.reject(error)를 사용해야한다
  }
)

instance.interceptors.response.use(
  // 요청을 보내기 전 수행되는 함수
  function (response) {
    console.log("인터셉터응답 성공")
    return response;
  },
  // 오류요청을 보내기 전 수행되는 함수
  function (error) {
    console.log("인터셉터응답 오류")
    return Promise.reject(error);
  }

)

export default instance;
// 전혀 가공하지 않은 get post 요청들과는 달리
// instace처리를 통해서 우리 입맛대로 만들자~~
// 객체의 필수로 들어가는 baseURl