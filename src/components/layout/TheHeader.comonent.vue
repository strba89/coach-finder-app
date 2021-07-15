<template>
  <header>
    <nav>
      <h1><router-link class="logo" to="/"> Find a Coach</router-link></h1>
      <ul>
        <li>
          <router-link to='/coach'>All Coaches</router-link>
        </li>
        <li>
          <router-link to='/requests'>Requests</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {

}
</script>
<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #11005c;
}
h1{
  color: whitesmoke;
  position: absolute;
  left: 1.75em;
  top: 0.3em;
}
nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

li {
  margin: 0 2rem;
}

a {
  text-decoration: none;
  font: inherit;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

a:hover,
a:active,
a.router-link-active{
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
}
.logo{
  border: none;
  color: white;
  padding: 0;
}
.logo:hover{
  background: transparent;
}
</style>