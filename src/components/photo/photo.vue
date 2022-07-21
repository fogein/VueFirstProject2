<template>
  <v-container>
    <v-simple-table fixed-header>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Surname
            </th>
            <th class="text-left">
              Patronymic
            </th>
            <th class="text-left">
              Position
            </th>
          </tr>
        </thead>
        <tbody>
          <tr  v-for="member in $store.getters.getAllMembers" :key="member.id">
            <td>
              <v-card @click="openMember(member)">{{ member.name }}</v-card>
            </td>
            <td>
              <v-card @click="openMember(member)">{{ member.surname }}</v-card>
            </td>
            <td>
              <v-card @click="openMember(member)">{{ member.patronymic }}</v-card>
            </td>
            <td>
              <v-card @click="openMember(member)">{{ member.position }}</v-card>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  methods: {
    openMember(a) {
      this.$store.commit('showDialog'),
        this.$store.commit('setCurrentMember',a )
    }
  }
}

</script>

<style lang="scss" scoped>
td {
  width: 100px;
}

.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: none;
  background: transparent;
}
</style>