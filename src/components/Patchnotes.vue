<template>
  <div>
    <h1>Patchnotes</h1>
    <ul>
      <li v-for="note in patchnotes" :key="note.id">
        <h2>{{ note.version }}</h2>
        <h2>{{ note.description }}</h2>
        <p>{{ note.date }}</p>
        <ul>
          <li v-for="change in note.changes" :key="change.id">
            {{ change.description }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>


<script>

//get the json from the api/updates.json
import patchnotes from "../api/updates.json";

// read the json data and show it with the html
export default {
  name: "Patchnotes",
  data() {
    return {
      patchnotes: patchnotes
    };
  }
};
    
</script>
