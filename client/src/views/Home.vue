<template>
  <div class="home">
    <div class="container">
      <div class="row mt-5">
        <div class="col text-center">
          Home Page
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
// @ is an alias to /src

export default {
  name: "Home",
  methods: {
    startNewGame: () => {
      router.push("/arena/id");
    },
  },
};
</script>
