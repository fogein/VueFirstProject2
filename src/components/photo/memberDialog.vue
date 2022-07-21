<template>
  <v-container>
    <v-dialog v-model="$store.getters.getDialogVisible" max-width="600" @click:outside="$store.commit('hideDialog')">
      <v-card>
        <v-card-title> {{ full_title }} </v-card-title>
        <v-card-text>
          <div>
            <span>Должность:{{ $store.getters.getCurrentMember.position }}</span>
          </div>
          <div>
            <span v-if=$store.getters.getCurrentMember.laborBook>Трудовая книжка <b class="b">&#10004</b></span>
            <span v-else=$store.getters.getCurrentMember.laborBook>Трудовая книжка <b class="b">&times</b></span>
          </div>
          <div>
            <span>Оклад:{{ $store.getters.getCurrentMember.salary }}</span>
            <span>Оклад:{{ $store.getters.getCurrentMember.id }}</span>
          </div>
          <div>
            <span>Дата выхода на работу:{{ $store.getters.getCurrentMember.dateOfEntry }}</span>
          </div>
          <div>
            <span v-if=$store.getters.getCurrentMember.rate>Ставка:<b>Полная</b></span>
            <span v-else=$store.getters.getCurrentMember.rate>Ставка:<b>Половина</b></span>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>

  </v-container>
</template>

<script>
export default {

  computed: {
    full_title() {
      return `Имя сотрудника ${this.$store.getters.getCurrentMember.name} ${this.$store.getters.getCurrentMember.surname} ${this.$store.getters.getCurrentMember.patronymic}`
    }
  }
}
</script>
<style>
.b {
  font-size: 25px;
}
</style>
