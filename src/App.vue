<template>
  <Header />
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
  <FooterSection />
</template>

<script>
import Header from "@/components/header.vue";
import FooterSection from "./components/footerSection.vue";
export default {
  name: "App",
  components: {
    Header,
    FooterSection,
  },
};
</script>
