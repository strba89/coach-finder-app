<template>
  <TheHeader/>
  <main>
    <router-view :hasData="hasData"></router-view>
  </main>
</template>
<script>
import TheHeader from './components/layout/TheHeader.comonent'
import {mapActions} from 'vuex'
export default {
  name: 'App',
  data(){
    return{
      hasData: false
    }
  },
  components: {
    TheHeader,
  },
  methods:{
    ...mapActions(['bindCoachesRef'])
  },
  async mounted() {
    try {
      await this.bindCoachesRef()
      this.hasData = true
    }catch (err){
      err? console.log(err): ''
    }
  }
}
</script>
<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>