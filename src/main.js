import HelloWorld from './components/HelloWorld.vue';
import Vue from 'vue';


export function VitePluginVitePressMusicPlayer() {
  Vue.component('HelloWorld', HelloWorld);
  console.log("Vue is valid");
  console.log(Vue !== null && Vue !== undefined);
  console.log("Vue is valid");
  return {   
    name: 'vite-plugin-vitepress-music-player',
  }
}