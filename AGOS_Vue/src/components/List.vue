<script>
import ListItem from "./ListItem.vue";

export default {
  data() {
    return {
      obras: [],
    };
  },
  created() {
    fetch("http://localhost:8080/api/obra/lista")
      .then((response) => {
        response.json().then((data) => {
          this.obras = data;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    redirect(obra) {
      this.$router.push(`/obra/${obra.id}`);
    },
  },
  components: {
    ListItem,
  },
};
</script>

<template>
  <div>
    <ListItem
      v-for="obra in obras"
      :key="obra.id"
      :obra="obra"
      @click="redirect(obra)"
    />
  </div>
</template>

<style scoped>
a {
  color: #202020;
  text-decoration: none;
}
</style>