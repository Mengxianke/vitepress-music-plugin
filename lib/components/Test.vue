<template>
  <div class="test">
    <div class="childMsg">
      {{ msg }}
        <span class="spanMsg">{{ msg }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestWorld',
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
.childMsg{
  background-color: red;
  .spanMsg{ 
    background-color: yellow
  }
}
</style>
