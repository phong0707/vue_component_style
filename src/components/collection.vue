<template>
     <ul class="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <li v-for="(item, index) in projects" :key="index">
          <projectCard
            :id="item.id"
            :title="item.title"
            :date="item.date"
            :keywords="item.keywords"
          />
        </li>
      </ul>
</template>
<script>
import ProjectCard from './cards/projectCard.vue';

export default {
    components: {
    ProjectCard,
  },
     data() {
    return {
      projects: [
        {
          id: '948729043hfgf',
          title: "How to master C++",
          date: "2022-10-10",
          keywords: ["C++", "Programming", "Software Development"],
        },
        {
          id: '73294f',
          title: "Understanding JavaScript Promises",
          date: "2022-10-12",
          keywords: ["JavaScript", "Promises", "Asynchronous"],
        },
        {
          id: 'o84u3ro',
          title: "How to Build a Vue.js App and Deploy it",
          date: "2022-10-15",
          keywords: ["Vue.js", "JavaScript", "Frontend"],
        },
        {
          id: '937429874fjsd',
          title: "Mastering Python for Data Science",
          date: "2022-10-20",
          keywords: ["Python", "Data Science", "Machine Learning"],
        },
      ],
    };
  },
}
</script>