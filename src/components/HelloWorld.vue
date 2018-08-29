<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>TESSS HELLOWORLD</h2>

      <ul>
      <li v-for="color in colors" v-if="color.primary">
          {{color.text}}
      </li>
    </ul>
    </div>

  
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'HelloWorld',
      colors: [{text: 'merah',
                primary: true
             },
             {
               text:'kuning',
               primary:false
             },
             {
               text:'hijau',
               primary:true
             }

      ]
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
