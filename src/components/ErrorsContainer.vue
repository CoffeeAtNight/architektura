<template>
    <div class="container w-1/4 mr-2">
    <Error v-for="error in errors" :key="error.id" :message="error.message"/>
    </div>
</template>

<script>
import Error from "@/components/Error.vue";
import { mapState } from "vuex";
export default {
  components: {
    Error
  },
  computed: {
    ...mapState(["errors"])
  }
};
</script>

<style lang="css" scoped>
.container {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>