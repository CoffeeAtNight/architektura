<template>
<transition name="fade">
     <div class="w-full bg-red-500 text-white bordered border-rounded mb-5 shadow-lg rounded-t overflow-hidden">
            <div class="bg-red-700 py-4 px-4 text-xl font-bold">
                Wystąpił błąd!
            </div>
            <div class="px-3 py-2 text-xl">
                {{message}}
            </div>
        </div>
</transition>
</template>

<script>
export default {
  props: {
    message: {
      type: String
    }
  }
};
</script>

<style lang="css" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>