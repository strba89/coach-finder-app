<template>
  <span class="badge" :class="'badge--' + mode">
    <slot></slot>
  </span>
</template>
<script>
  export default {
    props:['mode']
  }
</script>
<style scoped>

.badge {
  font-size: large;
  text-transform: uppercase;
  font-weight: 700;
  display: inline-block;
  padding: 0.55rem 1.55rem;
  background-color: #ccc;
  color: #292929;
  margin-left: 0;
  margin-right: 0.75em;
  margin-top: 0.75em;
  border-radius: 30px;
}

.badge--front {
  background-color: darkslateblue;
  color: white;
}

.badge--backend {
  background-color: mediumpurple;
  color: white;
}
.badge--career {
  background-color: orchid;
  color: white;
}
</style>