<template>
  <div class = "music-player-layout">
    <el-row class="music-player-bar">
       <div class="music-control-wrap">
          <svg @click="playPre" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-start-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M10.229 5.055a.5.5 0 0 0-.52.038L7 7.028V5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V8.972l2.71 1.935a.5.5 0 0 0 .79-.407v-5a.5.5 0 0 0-.271-.445"/>
          </svg>

          <svg
           v-show="showPauseButton"
           @click="pauseMusic"
           xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi player-pause" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0z"/>
          </svg>

          <svg
           v-show="showPlayButton"
           @click="playMusic" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi player-playing" viewBox="0 0 16 16">
            <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
          </svg>

          <svg @click="playNext" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-end-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M6.271 5.055a.5.5 0 0 1 .52.038L9.5 7.028V5.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V8.972l-2.71 1.935A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
          </svg>
       </div>
       
      <div class="progress-bar-wrap">
        <div class="progress-bar" :style="{width: progress}"></div>
        <div class="time">{{formatTime(currentTime)}} / {{formatTime(totalTime)}}</div>
      </div>

      <div class="function-wrap">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pip" viewBox="0 0 16 16">
          <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z"/>
          <path d="M8 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5z"/>
        </svg>

        <el-popover 
        :show-arrow="false" 
        :width="400" 
        placement='bottom' 
        style="display: flex;"
        trigger="click"
        >
            <template #reference>
              <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-music-note-list collections" viewBox="0 0 16 16">
                <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z"/>
                <path fill-rule="evenodd" d="M12 3v10h-1V3h1z"/>
                <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z"/>
                <path fill-rule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </template>
             <!-- <el-table :data="gridData">
              <el-table-column width="150" property="date" label="date" />
              <el-table-column width="100" property="name" label="name" />
              <el-table-column width="300" property="address" label="address" />
             </el-table> -->
        </el-popover>

      </div>
      <audio
      id="audio"
      @canplay="ready"
      @ended="ended"
      @pause="pause"
      @playing="playing"
      @timeupdate="updateTime"
      :src="musicSrc"
      ref="audio"
    ></audio>
    </el-row>
  </div>
</template>

<script>
import { formatTime } from '../utils'
import { mapGetters, mapState } from 'vuex'
import { PlayerState } from '../model/playerState'

export default {
  name: 'HelloWorld',
  components: {

  },
  data() {
    return {
      formatTime,
      progress: '50%',
      currentTime: 0,
      totalTime: 0,
      musicSrc: '',
    }
  },
  props: {

  },
  computed: {
    audio() {
      return this.$refs.audio
    },
    musicCollections() {
      return this.$store.state.musicPlayer.musicCollections;
    },
    curSong() {
      return this.$store.getters['musicPlayer/getCurSong'];
    },
    playerState() {
      return this.$store.getters['musicPlayer/playerState'];
    },
    showPauseButton() {
      // 展示pause按钮
      return this.playerState === PlayerState.playing;
    },
    showPlayButton() {
      // 展示Play按钮
      return this.playerState === PlayerState.pause || 
      this.playerState === PlayerState.ready || 
      this.playerState === PlayerState.end || 
      this.playerState === PlayerState.notReady
    }
  },
  watch: {
    musicCollections: {
      handler(newVal, oldVal) {
        console.log(`musicCollections change`);
        
      },
      immediate: true
    },
    curSong: {
      handler(newVal, oldVal) {
        console.log(`curSong change to: ${newVal.id} ${newVal.title} ${newVal.link}`);
        const link = newVal.link;
        if (this.playerState === PlayerState.ready) {
          console.log(`curPlayerState is ready`);
          this.playMusicWithLink(link);
        } else if (this.playerState === PlayerState.playing) {
          console.log(`curPlayerState is playing`);
          this.stopMusic();
          this.playMusicWithLink(link);
        } else if (this.playerState === PlayerState.pause) {
          console.log(`curPlayerState is pause`);
          this.stopMusic();
          this.playMusicWithLink(link);
        } else if (this.playerState === PlayerState.notReady) {
          this.setMusicLink(link);
        } else if (this.playerState === PlayerState.end) {
          console.log('curPlayerState is end');
          this.playMusicWithLink(link);
        }
      },
      immediate: true
    }
  },
  mounted() {
    console.log("music player mounted"); 
  },
  methods: {
    setMusicLink(link) {
      console.log(`set Music link called: ${link}`);
      this.musicSrc = link;
    },
    updateTime(e) {
      console.log(`audito updateTime called: ${e}`);
    },
    playing() {
      this.$store.dispatch('musicPlayer/changePlayerState', {
        state: PlayerState.playing
      });
    },
    pause() {
      this.$store.dispatch('musicPlayer/changePlayerState', {
        state: PlayerState.pause
      });
    },
    ended() {
      this.$store.dispatch('musicPlayer/changePlayerState', {
        state: PlayerState.end
      });
    },
    playNext() {
      console.log('audio playNext called');
      this.$store.dispatch('musicPlayer/playNext');
    },
    playPre() {
      console.log('audio playPre called');
      this.$store.dispatch('musicPlayer/playPre');
    },
    ready() {
      console.log('audio is ready: duration');
      console.log(this.audio.duration);
      this.$store.dispatch('musicPlayer/changePlayerState', {
        state: PlayerState.ready
      });
      this.$store.dispatch('musicPlayer/setSongDuration', {
        duration: this.audio.duration
      })
    },
    stopMusic() {
      this.pauseMusic();
      // 将当前事件归零
    },
    pauseMusic() {
      this.audio?.pause();
    },  
    playMusicWithLink(link) {
      this.setMusicLink(link);
      this.$nextTick(() => {
        this.playMusic();
      });
    },
    playMusic() {
      console.log(`playMusic called`);
      this.audio?.play();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang = 'scss' scoped>
.music-player-layout{
  width: 100%;
  min-width: 600px;
  .music-player-bar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .music-control-wrap {
      display: flex;
      width: 100px;
      flex-shrink: 0;
      .bi-skip-start-circle{
        cursor: pointer;
      }
      .player-playing,.player-pause{
       cursor: pointer; 
       margin-left: 10px;
      }
      .bi-skip-end-circle{
        cursor: pointer;
        margin-left: 10px;
      }
    }
    .progress-bar-wrap {
      flex-grow: 1;
      flex-shrink: 1;
      position: relative;
      display: flex;
      align-items: center;
      .progress-bar{
        margin-left: 10px;
         background: #D33A31;
          height: 2px;
          position: relative;
          width: 100%;
          transition: width .2s ease;
          &:after{
            position: absolute;
            content:"";
            display:block;
            width:6px;
            height: 6px;
            background: #D33A31;
            border-radius: 50%;
            top: 1px;
            right:-1px;
            transform: translate(0%, -50%);
        }
      }
      .time{
        margin-left: 10px;
      }
    }
    .function-wrap{
      width: 100px;
      display: flex;
      .bi-pip{
        margin-left: 10px;
        cursor: pointer;
      }
      .bi-music-note-list{
        margin-left: 10px;
        cursor: pointer;
      }
    }
  }
}
</style>
