<template>
  <div class = "music-player-layout">
    <el-row class="music-player-bar">
       <div class="music-control-wrap">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-start-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M10.229 5.055a.5.5 0 0 0-.52.038L7 7.028V5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V8.972l2.71 1.935a.5.5 0 0 0 .79-.407v-5a.5.5 0 0 0-.271-.445"/>
          </svg>
          
          <svg @click="playMusic" clas xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16">
            <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-end-circle" viewBox="0 0 16 16">
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

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-music-note-list" viewBox="0 0 16 16">
          <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z"/>
          <path fill-rule="evenodd" d="M12 3v10h-1V3h1z"/>
          <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z"/>
          <path fill-rule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"/>
        </svg>

      </div>
      <audio
      id="audio"
      @canplay="ready"
      src="https://music.163.com/song/media/outer/url?id=19032267"
      ref="audio"
    ></audio>
    </el-row>
  </div>
</template>

<script>
import { formatTime } from '../utils'

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
      musicSrc: 'https://music.163.com/song/media/outer/url?id=19032267',
    }
  },
  props: {
    msg: String
  },
  computed: {
    count() {
      return this.$store.state.count
    },
    audio() {
      return this.$refs.audio
    },
  },
  mounted() {
    console.log("call audio play");
    
  },
  methods: {
    incrementCount() {
      this.$store.dispatch('increment');
    },
    async ready() {
      console.log('audio is ready');
    },
    playMusic() {
      this.audio.play();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang = 'scss' scoped>
.music-player-layout{
  width: 100%;
  .music-player-bar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .music-control-wrap {
      .bi-skip-start-circle{
        cursor: pointer;
      }
      .bi-play{
       cursor: pointer; 
       margin-left: 10px;
      }
      .bi-skip-end-circle{
        cursor: pointer;
        margin-left: 10px;
      }
    }
    .progress-bar-wrap {
      width: 500px;
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
