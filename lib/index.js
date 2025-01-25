import HelloWorld from './components/HelloWorld.vue';
import store from './store';

const MusicPlayerPlugin =  {
    install: (app, options) => {
        console.log("MusicPlayerPlugin install called");
        app.component('HelloWorld', HelloWorld);
        app.use(store);
    }
}

export default MusicPlayerPlugin
