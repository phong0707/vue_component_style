<template>
  <Header/>
  <router-view/>
  <FooterSection/>
</template>

<script>
import Header from '@/components/header.vue';
import FooterSection from './components/footerSection.vue';
export default {
  name: 'App',
  components:{
    Header,
    FooterSection
  }
}
</script>
