<template>
  <div>
    <div class="content">
      <HelloWorld msg="Welcome to Dashboard page" />
    </div>
    <div class="footer">
      &nbsp;
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
