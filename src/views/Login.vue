<script lang="ts">
import { reactive } from 'vue' // "from '@vue/composition-api'" if you are using Vue <2.7
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default {
  setup() {
    const state = reactive({
      name: '',
      username: '',
      email: ''
    })
    const rules = {
      name: { required }, // Matches state.firstName
      username: { required }, // Matches state.lastName
      email: { required, email } // Matches state.contact.email
    }

    const v$ = useVuelidate(rules, state)

    return { state, v$ }
  }
}
</script>

<template>
  <div class="field">
    <label class="label">Name</label>
    <div class="control">
      <input class="input" type="text" placeholder="Andrés Teller" v-model="state.name" />
    </div>
     <!-- <p class="help is-danger" v-if="$v.name.$error">Please enter a name</p> -->
  </div>

  <div class="field">
    <label class="label">Username</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input" type="text" placeholder="andress" value="" />
      <span class="icon is-small is-left">
        <i class="fas fa-user"></i>
      </span>
      <span class="icon is-small is-right">
        <i class="fas fa-check"></i>
      </span>
    </div>
    <!-- <p class="help is-success">This username is available</p> -->
  </div>

  <div class="field">
    <label class="label">Email</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input" type="email" placeholder="example@email.com" value="" />
      <span class="icon is-small is-left">
        <i class="fas fa-envelope"></i>
      </span>
      <span class="icon is-small is-right">
        <i class="fas fa-exclamation-triangle"></i>
      </span>
    </div>
    <!-- <p class="help is-danger">This email is invalid</p> -->
  </div>

  <div class="field">
    <div class="control">
      <label class="checkbox">
        <input type="checkbox" />
        I agree to the <a href="#">terms and conditions</a>
      </label>
    </div>
  </div>

  <div class="field is-grouped">
    <div class="control">
      <button class="button is-link">Submit</button>
    </div>
    <div class="control">
      <button class="button is-link is-light">Cancel</button>
    </div>
  </div>
</template>