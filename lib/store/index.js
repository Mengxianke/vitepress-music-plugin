import { createStore } from 'vuex';
import musicPlayer from './musicPlayer';

export default createStore({
    modules: {
        musicPlayer,
    }
})