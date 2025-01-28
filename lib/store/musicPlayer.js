import { PlayerState } from '../model/playerState'

const state = {
    musicCollections: [
        {
            "id":"517567145",
            "title":"初登校",
            "artist":"橋本由香利",
            "album":"ひなこのーと COMPLETE SOUNDTRACK",
            "cover":"https://p1.music.126.net/6-K9QBDpdhd7MTjJqRXRgQ==/109951163058279658.jpg?param=250y250",
            "lyric":"\n[00:33.93]我的心爱在天边\n[00:42.17]天边有一片辽阔的大草原\n[00:50.42]草原茫茫天地间\n[00:58.86]洁白的蒙古包撒落在河边\n[01:09.22]我的喜爱在高山\n[01:17.24]高山深处是巍巍的大兴安\n[01:25.86]林海茫茫云雾间\n[01:33.96]矫健的雄鹰俯瞰着草原\n[01:44.34]呼伦贝尔大草原\n[01:52.61]白云朵朵飘在飘在我心间\n[02:00.79]呼伦贝尔大草原\n[02:09.09]我的喜爱我的思念\n[02:50.50]我的喜爱在河湾\n[02:58.62]额尔古纳河穿过那大草原\n[03:06.88]草原母亲我爱你\n[03:15.18]深深的河水深深的祝愿\n[03:25.57]呼伦贝尔大草原\n[03:34.00]白云朵朵飘在飘在我心间\n[03:42.00]呼伦贝尔大草原\n[03:50.36]我的心爱我的思念\n[03:58.80]呼伦贝尔大草原\n[04:07.05]白云朵朵飘在飘在我心间\n[04:15.41]呼伦贝尔大草原\n[04:23.36]我的心爱我的思念",
            "sub_lyric":"",
            "link":"https://music.163.com/song/media/outer/url?id=517567145",
        },
        {
            "id":"31134621","title":"《瞬间的永恒》夜色钢琴曲","artist":"赵海洋","album":"夜色钢琴曲","cover":"https://p1.music.126.net/Ztw9zsVDW6wgpldZagYwjQ==/109951166226235752.jpg?param=250y250","lyric":"[00:00.00] 作词 : 赵海洋\n[00:01.00] 作曲 : 赵海洋\n[00:05.00]纯音乐，请欣赏\n","sub_lyric":"","link":"https://music.163.com/song/media/outer/url?id=31134621","served":false,"cached":false,"remaining":5
        },
        {
            "id":"1871031931","title":"天空之境","artist":"MT1990","album":"天空之境（heaven landscape）","cover":"https://p1.music.126.net/JFC0trgfCpYKqmUzDISPuQ==/109951166302103249.jpg?param=250y250","lyric":"[00:00.00] 作词 : MT1990\n[00:01.00] 作曲 : MT1990\n[00:05.00]纯音乐，请欣赏\n","sub_lyric":"","link":"https://music.163.com/song/media/outer/url?id=1871031931","served":false,"cached":true,"remaining":3
        },
        {
            "id":"1883188794","title":"日落山海 纯音乐","artist":"TenZ王星耀","album":"日落山海","cover":"https://p2.music.126.net/RalN6gA5DlAhxJvgqW41Tw==/109951167361614044.jpg?param=250y250","lyric":"[00:00.00] 作词 : TenZ王星耀\n[00:01.00] 作曲 : TenZ王星耀\n[00:05.00]纯音乐，请欣赏\n","sub_lyric":"","link":"https://music.163.com/song/media/outer/url?id=1883188794","served":false,"cached":true,"remaining":4
        }
    ],
    currentSongId: '517567145',
    currentTime: 0.0,
    songDuration: 0.0,
    playingState: PlayerState.notReady,
}


const mutations = {
    playNext (state) {
        const n = state.musicCollections.length;
        const currentSongId = state.currentSongId;
        const index = state.musicCollections.findIndex(song => song.id === currentSongId);
        if (index !== -1) {
            const nextSongIndex = (index + 1) % n;
            state.currentSongId = state.musicCollections[nextSongIndex].id;
        } else {
            console.log(`playNext::can not find current song`);
        }
    },
    playPre(state) {
        const n = state.musicCollections.length;
        const currentSongId = state.currentSongId;
        const index = state.musicCollections.findIndex(song => song.id === currentSongId);
        let nextSongId = currentSongId;
        if (index === 0) {
            nextSongId = state.musicCollections[n - 1].id;
        } else {
            nextSongId = state.musicCollections[index - 1].id;
        }
        state.currentSongId =nextSongId; 
    },
    stop(state) {
        state.playingState = PlayerState.stop;
    },
    pause(state) {
        state.playingState = PlayerState.pause;
    },
    changePlayerState(state, payload) {
        state.playingState = payload;
    },
    setSongDuration(state, payload) {
        console.log(`mutations song duration: ${payload}`);
        state.songDuration = payload;
    },
    setCurTime(state, payload) {
        state.currentTime = payload;
    }
}


const getters = {
    getMusicCollections(state) {
        return state.musicCollections;
    },
    getCurSong(state, getters) {
        const currentSongId = state.currentSongId;
        return state.musicCollections.find(song => song.id === currentSongId);
    },
    getCurSongLink(state, getters) {
        return getters.getCurSong?.link;
    },
    getCurSongLyric(state, getters) {
        return getters.getCurSong?.lyric;
    },
    playerState(state) {
        return state.playingState;
    },
    curTime(state) {
        return state.currentTime;
    },
    songDuration(state) {
        return state.songDuration;
    }
}

const actions = {
    changePlayerState({ commit }, params) {
        console.log(`changePlayerState action: state: ${params.state}`);
        commit('changePlayerState', params.state);
    },
    setSongDuration({ commit }, params) {
        console.log(`set song duration action params: ${params} ${params.duration}`);
        commit('setSongDuration', params.duration);
    },
    playNext ({ commit }) {
        commit('playNext');
    },
    playPre({ commit }) {
        commit('playPre');
    },
    stop({ commit }) {
        commit('stop');
    },
    pause({ commit }) {
        commit('pause');
    },
    setCurTime({ commit }, params) {
        console.log();
        commit('setCurTime', params.time)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}