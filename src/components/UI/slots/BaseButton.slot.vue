<template>
  <router-link v-if="url" :to="url" class="btn" :class="['btn--' + mode,  center ]">
    <slot>
    </slot>
  </router-link>
  <button v-else class="btn" :class="['btn--' + mode,  center ]">
    <slot>
    </slot>
  </button>
</template>
<script>
export default {
  props:['mode', 'url','center'],
}
</script>
<style scoped>
.btn {
  text-decoration: none;
  padding: 0.95rem 1.5rem;
  font-family: inherit;
  cursor: pointer;
  float: right;
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  font-size: large;
  font-weight: 700;
  margin-left: 0.75rem;
}

.btn--full:hover,
.btn--full:active {
  background-color: #270041;
  border-color: #270041;
}
.btn--outline:hover,
.btn--outline:active {
  background-color: rgba(58, 0, 97, 0.05);
  border-color: #270041;
}
.btn--full{
  background-color: #3a0061;
  border: 1px solid #3a0061;
  border-radius: 30px;
  color: white;
}
.btn--outline{
  background-color: transparent;
  border: 1px solid #3a0061;
  border-radius: 30px;
  color: #3a0061;
}
.center{
  position: relative;
  margin: 0 auto;
  margin-top:  0.75rem;
}
.right{
  position: relative;
  float: left;
}
</style>