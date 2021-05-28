<template>
  <h1>{{ result }}</h1>
</template>
<script>
export default {
  setup() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ result: 100 });
      }, 2000);
    });
  },
};
</script>
