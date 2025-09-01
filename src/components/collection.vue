<template>
     <ul class="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <li v-for="(item, index) in repositories" :key="index">
          <projectCard
            :id="item.name"
            :title="item.full_name"
            :date="item.created_at"
            :keywords="item.keywords"
          />
        </li>
      </ul>
</template>
<script>
import { mapActions, mapState } from 'pinia';
import ProjectCard from './cards/projectCard.vue';
import useRepositoryStore from '@/stores/repsitories';
export default {
    components: {
    ProjectCard,
  },
  async mounted(){
  await this.fetchRepositories()
  },
  computed:{
    ...mapState(useRepositoryStore,['repositories'])
  },
  methods:{
    ...mapActions(useRepositoryStore,['fetchRepositories'])
  },
   
}
</script>