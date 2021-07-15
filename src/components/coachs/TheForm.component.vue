<template>
  <form @submit.prevent>
    <div class="form-control">
      <label for="name">First Name</label>
      <input id="name" type="text" v-model="firstName">
      <label for="lastName">Last Name</label>
      <input id="lastName" type="text" v-model="lastName">
    </div>
    <div class="form-control">
      <label for="front">Frontend</label>
      <input type="checkbox" id="front" value="frontend" v-model="areas">
      <label for="back">Backend</label>
      <input type="checkbox" id="back" value="backend" v-model="areas">
      <label for="career">Career</label>
      <input type="checkbox" id="career" value="career" v-model="areas">
    </div>
    <div class="form-control">
      <label for="hourlyRate">Hourly Rate</label>
      <input id="hourlyRate" type="number" v-model="hourlyRate">
    </div>
    <div class="form-control">
      <label for="description">Description</label>
    </div>
    <div class="form-control">
      <textarea id="description" rows="6" v-model="description"/>
    </div>
    <div class="button__wrapper form-control">
      <base-button mode="full" url="contact" :center='true'>Send Message</base-button>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      areas: [],
      hourlyRate: 1,
      description: ''
    }
  }
}
</script>
<style scoped>
.button__wrapper {
  display: flex;
}

form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}
.form-control>label{
  font-weight: bold;

}
label {
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

textarea {
  width: 100%;
}
</style>