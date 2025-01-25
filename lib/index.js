import HelloWorld from './components/HelloWorld.vue';



const MusicPlayerPlugin =  {
    install: (app, options) => {
        console.log("MusicPlayerPlugin install called");
        app.component('HelloWorld', HelloWorld);
    }
}

export default MusicPlayerPlugin