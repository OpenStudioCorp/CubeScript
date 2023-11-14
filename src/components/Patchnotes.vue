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
export default {
  data() {
    return {
      patchnotes: [
        {
          id: 1,
          version: "1.0.0",
          date: "January 1, 2022",
          description: "Initial release",
          changes: [
            { id: 1, description: "Added new feature X" },
            { id: 2, description: "Fixed bug Y" },
            { id: 3, description: "Improved performance" },
          ],
        },
        {
          id: 2,
          version: "1.1.0",
          date: "February 1, 2022",
          changes: [
            { id: 1, description: "Added new feature Z" },
            { id: 2, description: "Fixed bug A" },
            { id: 3, description: "Improved user interface" },
          ],
        },
      ],
    };
  },
};
</script>
