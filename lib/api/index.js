import { musicDetailRequest, backendRequest } from "./config";


// 获取音乐信息
export const getMusicDetail = id => musicDetailRequest.get(`/netease?id=${id}`);
// 测试与后端联调
export const getBackEndHelloWorld = () => backendRequest.get();