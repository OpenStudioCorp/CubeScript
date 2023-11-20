<template>
  <div>
    <h1>Errors</h1>
    <nav>
      <ul>
        <li><a rel="prefetch" href="#errors">Errors</a></li>
      </ul>
    </nav>
    <div>
      <div v-for="error in errorInfo" :key="error.name">
        <h2>{{ error.name }}</h2>
        <p>{{ error.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errorInfo: [],
    };
  },
  mounted() {
    fetch('https://CubeScript.vercel.app/errors.json')
      .then(response => response.json())
      .then(data => (this.errorInfo = data.errors))
      .catch(error => console.log(error));
  },
};
</script>