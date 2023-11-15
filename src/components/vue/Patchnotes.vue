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

<style>
    :root {
    --background: #877895;
  }
  body 
  {
    background: #877895;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    
  }
  a {
    color: #c90000;
    text-decoration: none;
  }
  a:hover {
    color: #9b59b6;
    text-decoration: underline;
  }
  h1, h2, h3, h4, h5, h6 {
    color: #000000;
    font-weight: bold;
    font-family: Arial, sans-serif;
  }
  p {
    color: #bdc3c7;
    font-size: 16px;
    line-height: 1.5;
  }
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  * {
    box-sizing: border-box;
    --background: #fa;
  
  }
  
  .notes {
    margin: 0 auto;
    max-width: 800px;
    padding: 0 1rem;
    background : var(--background);
  }
  </style>

<script>

//get the json from the api/updates.json
import patchnotes from "../../../api/updates.json";

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
