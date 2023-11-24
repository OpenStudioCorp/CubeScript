<template>
    <div>
        <ul>
            <li v-for="error in errorInfo" :key="error.id">
                <h3>{{ error.title }}</h3>
                <p>{{ error.description }}</p>
            </li>
        </ul>
    </div>
</template>

<script>

    import { readable } from "svelte/store";

    export default {
        setup() {
            var json = [
                {
                    id: 1,
                    title: "Error 1",
                    description: "This is the first error",
                },
                {
                    id: 2,
                    title: "Error 2",
                    description: "This is the second error",
                },
                {
                    id: 3,
                    title: "Error 3",
                    description: "This is the third error",
                },
            ];
            const errorInfo = readable(json);

            return {
                errorInfo,
            };
        },
    };
</script>