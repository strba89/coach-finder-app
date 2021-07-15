<template>
  <base-wrapper>
    <div>
      <h1>{{coach.firstName}} {{coach.lastName}}</h1>
    </div>
    <div>
      <base-badge v-for="area in coach.areas" :key="area" :mode="area">{{area}}</base-badge>
    </div>
    <div>
      <p>{{coach.description}}</p>
    </div>
  </base-wrapper>
</template>
<script>
export default {
  props:['coach']
}
</script>