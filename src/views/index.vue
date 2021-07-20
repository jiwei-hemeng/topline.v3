<template>
  <div class="Index">Home123</div>
</template>
<script>
import {
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
} from "vue";
export default {
  name: "Index",
  setup() {
    const state = reactive({});
    onBeforeMount(() => {
      console.log("Counter ===> 相当于 vue2.x 中 beforeMount");
    });
    onMounted(() => {
      console.log("Counter ===> 相当于 vue2.x 中 mounted");
    });
    onBeforeUpdate(() => {
      console.log("Counter ===> 相当于 vue2.x 中 beforeUpdate");
    });
    onUpdated(() => {
      console.log("Counter ===> 相当于 vue2.x 中 updated");
    });
    onBeforeUnmount(() => {
      console.log("Counter ===> 相当于 vue2.x 中 beforeDestroy");
    });
    onUnmounted(() => {
      console.log("Counter ===> 相当于 vue2.x 中 destroyed");
    });
    onErrorCaptured(() => {
      console.log("Counter ===> 相当于 vue2.x 中 errorCaptured");
    });
    return {
      ...toRefs(state),
    };
  },
  mounted() {
    // vue2.x 中 mounted
    console.log("vue2.x 中 mounted");
  },
};
</script>
