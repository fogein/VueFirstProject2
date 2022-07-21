<template>
  <v-container>
    <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="submit">
        <validation-provider v-slot="{ errors }" name="Name" rules="required|max:10">
          <v-text-field v-model="name" :counter="10" :error-messages="errors" label="Name" required></v-text-field>
        </validation-provider>
        <validation-provider v-slot="{ errors }" name="Surname" rules="required|max:10">
          <v-text-field v-model="surname" :counter="10" :error-messages="errors" label="Surname" required>
          </v-text-field>
        </validation-provider>
        <validation-provider v-slot="{ errors }" name="Patronymic" rules="required|max:10">
          <v-text-field v-model="patronymic" :counter="10" :error-messages="errors" label="Patronymic" required>
          </v-text-field>
        </validation-provider>
        <validation-provider v-slot="{ errors }" name="Position" rules="required|max:10">
          <v-text-field v-model="position" :counter="10" :error-messages="errors" label="Position" required>
          </v-text-field>
        </validation-provider>
        <validation-provider v-slot="{ errors }" name="DateOfEntry" rules="required|max:10">
          <v-text-field v-model="dateOfEntry" :counter="10" :error-messages="errors" label="DateOfEntry" required>
          </v-text-field>
        </validation-provider>
        <validation-provider v-slot="{ errors }" name="Salary" rules="required|max:10">
          <v-text-field v-model="salary" :counter="10" :error-messages="errors" label="Salary" required></v-text-field>
        </validation-provider>


        <!-- <validation-provider v-slot="{ errors }" name="select" rules="required">
          <v-select v-model="select" :items="items" :error-messages="errors" label="Select" data-vv-name="select"
            required></v-select>
        </validation-provider> -->

        <v-btn class="mr-4" type="submit" :disabled="invalid">
          submit
        </v-btn>
        <v-btn @click="clear">
          clear
        </v-btn>
      </form>
    </validation-observer>
  </v-container>
</template>

<script>
import { required, digits, max, regex } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
import router from '@/router'

setInteractionMode('eager')

extend('digits', {
  ...digits,
  message: '{_field_} needs to be {length} digits. ({_value_})',
})

extend('required', {
  ...required,
  message: '{_field_} can not be empty',
})

extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters',
})

extend('regex', {
  ...regex,
  message: '{_field_} {_value_} does not match {regex}',
})

export default {
  
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    name: '',
    surname: '',
    patronymic: '',
    position: '',
    salary: '',
    dateOfEntry: '',
    select: null,
    items: [
      true, false
    ],
  }),

  methods: {
    
    submit() {
      this.$refs.observer.validate()
      this.$store.commit('newMember', {
        name: this.name,
        surname: this.surname,
        patronymic: this.patronymic,
        position: this.position,
        salary: this.salary,
        dateOfEntry: this.dateOfEntry,
      })
      router.push('about')

    },
    clear() {
      this.name = ''
      this.surname = ''
      this.patronymic = ''
      this.position = ''
      this.salary = ''
      this.dateOfEntry = ''
      this.phoneNumber = ''
      this.$refs.observer.reset()
    },
  },
}

</script>

<style lang="scss" scoped>
</style>