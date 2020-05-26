<template>
  <div class="home bg-red-500">
    <mainContainer />
  </div>
</template>

<script>
// @ is an alias to /src
import mainContainer from "@/components/mainContainer.vue";
export default {
  name: "Home",
  components: {
    mainContainer
  }
};
</script>
