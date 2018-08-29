<template>
  <div class="tes">
    <h1>{{ txt }}</h1>
    <h2>TEXT</h2>
    <div v-bind:title="randnum"> random number</div>
    </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      txt: 'Tes hello',
      randnum: Math.floor(Math.random() * 20) + 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
