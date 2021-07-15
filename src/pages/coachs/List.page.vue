<template>
  <TheNav/>
  <base-wrapper>
    <div>
      <base-button @click="refresh" mode="outline" center="right">
        Refresh
      </base-button>
    </div>
      <div v-if="hasData && refreshData">
        <TheItem v-for="coach in filterCoach" :key="coach.id" :coach="coach"/>
      </div>
      <base-spiner v-else/>
  </base-wrapper>
</template>
<script>
import TheNav from '../../components/coachs/TheNav.component'
import TheItem from '../../components/coachs/TheItem.component'
import {mapGetters} from 'vuex'

export default {
  data(){
    return{
      refreshData: true
    }
  },
  props:['hasData'],
  components: {
    TheNav,
    TheItem
  },
  computed: {
    ...mapGetters(['filterCoach'])
  },
  methods:{
    refresh(){
     this.refreshData = false
      setInterval(()=> {
        this.refreshData = true
      }, 1000);
    }
  }
}
</script>
<style>
div{
  display: flow-root;
}
</style>