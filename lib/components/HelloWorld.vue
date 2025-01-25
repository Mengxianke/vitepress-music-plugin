<template>
  <div class = "music-layout">
    <el-row>
      <el-col :span="12" class="left">
        <img src="../assets/bar.png" alt="no bar image">
        <div class="img-outer-container">
          <div class="img-album">
            <img src="../assets/noalbum.png" alt="no album image">
          </div>
        </div>
      </el-col>
      <el-col :span="12" class="right">
          <Test :msg="'ChildMesg'"></Test>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Test from './Test.vue'
export default {
  name: 'HelloWorld',
  components: {
    Test
  },
  data() {
    return {

    }
  },
  props: {
    msg: String
  },
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    incrementCount() {
      this.$store.dispatch('increment');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang = 'scss' scoped>
.music-layout{
  .img-outer-container {
    background: red;
  }
}

</style>
