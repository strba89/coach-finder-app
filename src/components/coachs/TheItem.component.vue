<template>
  <base-wrapper>
    <header>
      <h1>{{ coach.firstName}} {{coach.lastName}}</h1>
    </header>
    <main>
      <div>
        <span>${{ coach.hourlyRate }}/hour</span>
      </div>
      <div>
        <base-badge v-for="area in coach.areas" :key="area" :mode="area">{{area}}</base-badge>
      </div>
      <div>
        <base-button mode="full" :url="coachLink">
          View Details
        </base-button>
        <base-button mode="outline" :url="contactLink">
          Contact
        </base-button>
      </div>
    </main>
  </base-wrapper>
</template>
<script>
  export default {
    props:['coach'],
    computed:{
      coachLink(){
        return '/coach/'+this.coach.id
      },
      contactLink(){
        return '/coach/'+this.coach.id+'/contact'
      }
    }
  }
</script>
<style>

</style>