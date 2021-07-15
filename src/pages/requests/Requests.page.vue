<template>
  <base-wrapper>
    <h2>Request Received</h2>
    <section v-if="hasData">
      <div v-for="item in messages" :key="item.coachID">
        <TheItem :message="item.message" :email="item.email" :id="item.coachID"></TheItem>
      </div>
    </section>
  </base-wrapper>
</template>
<script>
import TheItem from "../../components/messages/TheIMessageItem.component";
import {mapState, mapActions} from 'vuex'
export default {
  components: {
    TheItem
  },
  data(){
    return{
      hasData: false
    }
  },
  computed:{
    ...mapState(['messages'])
  },
  methods:{
    ...mapActions(['bindMessageRef'])
  },
  async mounted(){
    try {
      await this.bindMessageRef()
      this.hasData = true
    }catch (err) {
      err? console.log(err): ''

    }

  },

}
</script>