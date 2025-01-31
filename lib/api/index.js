import { musicDetailRequest, backendRequest } from "./config";


// 获取音乐信息
export const getMusicDetail = id => musicDetailRequest.get(`/netease?id=${id}`);
// 测试与后端联调
export const getBackEndHelloWorld = () => backendRequest.get();
// 获取所有的music
export const getAllMusicCollections = () => backendRequest.get('/music');
// 添加一个music
export const collectMusic = (id) => backendRequest.post(`music/${id}`);
// 删除一个music
export const deleteMusic = (id) => backendRequest.delete(`music/${id}`);