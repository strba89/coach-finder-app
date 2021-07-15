<template>
  <router-view :coach="coach" v-if="coach"></router-view>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  props:['id'],
  async mounted() {
    try {
      await this.filter({value: this.id})
    }catch (err){
      err? console.log(err): ''
    }
  },
  methods:{
    ...mapActions(['filter'])
  },
  computed:{
    ...mapGetters(['coach'])
  }
}
</script>