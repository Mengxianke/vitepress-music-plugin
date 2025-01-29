import { musicDetailRequest, backendRequest } from "./config";


// 获取音乐信息
export const getMusicDetail = id => musicDetailRequest.get(`/netease?id=${id}`);