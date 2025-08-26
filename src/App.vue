<template>
  <Header/>
  <HeroSections />
  <productsList/>
  <FooterSection/>
</template>

<script>
import Header from '@/components/header.vue';
import HeroSections from '@/components/heroSections.vue';
import productsList from '@/components/productsList.vue';
import FooterSection from './components/footerSection.vue';



export default {
  name: 'App',
  components:{
    Header,
    HeroSections,
    productsList,
    FooterSection
  }
}
</script>
