<template>
  <div class = "collections-layout">
    <el-row class="collections-row">
        <el-column :span="12" class="collection-column">
            <div class="operation">
                <svg @click="addCollection" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder-plus" viewBox="0 0 16 16">
                    <path d="m.5 3 .04.87a2 2 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2m5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19q-.362.002-.683.12L1.5 2.98a1 1 0 0 1 1-.98z"/>
                    <path d="M13.5 9a.5.5 0 0 1 .5.5V11h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V12h-1.5a.5.5 0 0 1 0-1H13V9.5a.5.5 0 0 1 .5-.5"/>
                </svg>
                <svg @click="deleteCollection" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                </svg>
            </div>
             <el-table 
             :show-header="false" 
             :data="_collections"
             :max-height="500"
             highlight-current-row
             @current-change="handleCurrentChange"
             >
                <el-table-column width="200" property="id" >
                    <template #default="scope">
                        <span v-show="!scope.row.isEditing">{{ scope.row.id }}</span>
                        <el-input  
                        placeholder="请输入Music Id"
                        class="music-id-input"
                        v-show="scope.row.isEditing" 
                        @blur="confirmCollectMusic(scope.$index, scope.row)" 
                        v-model="scope.row.id"></el-input>
                    </template>    
                </el-table-column>
                <el-table-column width="300" property="title" />
                <el-table-column width="100" property="artist" />
                <el-table-column width="100" property="duration" />
            </el-table>
        </el-column>
        <el-column :span="12" class="music-lyric">

        </el-column>
    </el-row>
   
  </div>
</template>

<script>
import { Collection } from '../model/collection';
export default {
  name: 'Collections',
  props: {
    collections: {
        type: Array,
        required: true,
        default: [],
    }
  },
  components: {

  },
  data() {
    return {
        _collections: [],
        selectedCollection: undefined
    }
  },
  computed: {

  },
  watch: {
    collections: {
        handler(newVal, oldVal) {
            const clonedCollections = JSON.parse(JSON.stringify(newVal));
            this._collections = clonedCollections.map(c => {
                return new Collection(c.id, c.title, c.artist, c.album, c.cover, c.lyric);
            });
        },
      immediate: true
    }
  },
  mounted() {
    console.log("collections mounted"); 
  },
  methods: {
    addCollection() {
        // 判断是否有要添加的collection, 如果有，则不处理
        
        // 添加一个collection
        console.log(`add a collection`);
        const collection = new Collection();
        collection.isEditing = true;
        this._collections.push(collection);
        console.log(`addCollection len: ${this._collections.length}`);
    },
    deleteCollection() {
        console.log(`deleteCollection called: selectedCollection title: ${this.selectedCollection.title}`);
    },
    handleCurrentChange(music) {
        console.log(`user select a collection: ${music.id}`);
        this.selectedCollection = music;
        console.log(`local variable selectedCollection: ${this.selectedCollection.id}`);
    },
    confirmCollectMusic(index, music) {
        console.log(`confirm collect music called: index: ${index} musicId: ${music.id}`);
        // 请求后端，保存用户Id, 后端做校验
        music.isEditing = false;

    }   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang = 'scss' scoped>
.collections-layout{
    min-width: 700px;
    .collections-row{
        .collection-column{
            .music-id-input{
                min-height: 30px;
            }
            .operation{
                width: 100%;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                .bi-folder-plus,.bi-trash {
                    cursor: pointer;
                }
                .bi-trash{
                    margin-left: 10px;
                }
            }
        }
    }
}
</style>
