<template>
  <Header />
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
    <RegisterModal />
  </router-view>
  <FooterSection />
</template>

<script>
import Header from "@/components/header.vue";
import FooterSection from "@/components/footerSection.vue";
import RegisterModal from "@/components/modal/register_modal.vue";

export default {
  name: "App",
  components: {
    Header,
    FooterSection,
    RegisterModal,
  },
};
</script>
