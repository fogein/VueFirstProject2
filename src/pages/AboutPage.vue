<template>
  <v-container>
    <v-btn outlined color="dark ">
      <router-link class="color" to="/addmember">Add member</router-link>
    </v-btn>
    <Photo />
    <MemberDialog />
  </v-container>
</template>

<script>

import Photo from '@/components/photo/photo.vue';
import MemberDialog from '@/components/photo/memberDialog.vue';

export default {
  components: { Photo, MemberDialog },

}
</script>

<style lang="scss" scoped>
.color {
  text-decoration: none;
  color: #000;
}
</style>