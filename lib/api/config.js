import axios from 'axios';

// 网易云音乐链接Base Url
const MUSIC_BASE_URL = 'https://api.paugram.com'
// 后端服务BASE Url
const BACKEND_BASE_URL = 'https://blog-137260-10-1339368541.sh.run.tcloudbase.com';


const createMusicDeatilRequestInstance = () => {
    const instance = axios.create({
      baseURL: MUSIC_BASE_URL,
    })
  
    instance.interceptors.response.use(handleResponse, handleError)
    return instance
  }
const createMusicLyricRequestInstance = () => {

}

const createBackEndRequestInstance = () => {
    const instance = axios.create({
        baseURL: BACKEND_BASE_URL,
      })
    
      instance.interceptors.response.use(handleResponse, handleError)
      return instance
}


  export const musicDetailRequest = createMusicDeatilRequestInstance();
  export const backendRequest = createBackEndRequestInstance();
  
  function handleError(e) {
    console.log("error appear");
    throw e
  }
  
  function handleResponse(response) {
    return response.data
  }