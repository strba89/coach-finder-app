<template>
  <base-wrapper>
    <h2>Find Your Coach</h2>
    <div id="filter">
      <input type="checkbox" id="frontend" value="frontend" v-model="checkedNames" />
      <label for="frontend">Frontend</label>
      <input type="checkbox" id="backend" value="backend" v-model="checkedNames"/>
      <label for="backend">Backend</label>
      <input type="checkbox" id="career" value="career" v-model="checkedNames"/>
      <label for="career">Career</label>
    </div>
  </base-wrapper>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  data(){
    return {
      checkedNames: ['frontend', 'backend', 'career']
    }
  },
  watch:{
    checkedNames(){
      this.filterCategory({value: this.checkedNames})
    }
  },
  methods:{
    ...mapActions(['filterCategory'])
  },
}
</script>