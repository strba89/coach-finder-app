<template>
  <base-wrapper v-if="coach">
    <h1>{{coach.firstName}} {{coach.lastName}}</h1>
    <span>${{coach.hourlyRate}}/hour</span>
  </base-wrapper>
  <base-wrapper>
    <div>
      <h1>Interested? Reach out now!</h1>
    </div>
    <div class="button__wrapper">
      <base-button mode="full">Contact</base-button>
    </div>
      <form @submit.prevent="formSubmit">
          <div class="form-control">
            <label for="email">Your e-mail</label>
            <input type="email" id="email" v-model="email"/>
          </div>
          <div class="form-control">
            <label for="message">Message</label>
            <br>
            <textarea id="message"  rows="6" v-model="message"/>
          </div>
          <div class="button__wrapper form-control">
            <base-button mode="full" :url="contact" :center='true'>Send Message</base-button>
          </div>
      </form>
  </base-wrapper>
</template>
<script>
export default {
  props:['coach'],
  data(){
    return{
      email: '',
      message: ''
    }
  },
  computed:{
    contact(){
      return '/'
    }
  },
  methods:{
    formSubmit(){
     this.$store.dispatch("addCoachesMessageRef",{email: this.email, message:this.message, coachID: this.coach.id})
    }
  },

}
</script>
<style scoped>
.button__wrapper{
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

label {
  font-weight: bold;
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
textarea{
  width:100%;
}
</style>