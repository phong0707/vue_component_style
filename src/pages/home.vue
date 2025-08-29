<template>
<HeroSections />
  <productsList/>
</template>
<script>
import HeroSections from '@/components/heroSections.vue';
import ProductsList from '@/components/productsList.vue';
export default {
    components:{
        HeroSections,
        ProductsList
    }
}
</script>