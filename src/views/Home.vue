<template>
  <div class="home">
    <mainContainer />
    <ErrorsContainer />
  </div>
</template>

<script>
// @ is an alias to /src
import mainContainer from "@/components/mainContainer.vue";
import ErrorsContainer from "@/components/ErrorsContainer.vue";
export default {
  name: "Home",
  components: {
    mainContainer,
    ErrorsContainer
  }
};
</script>
