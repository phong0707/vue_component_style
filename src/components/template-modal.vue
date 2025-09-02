<template>
  <div
    :id="modal"
    class="hs-overlay hidden inset-0 z-10   size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto"
    role="dialog"
    tabindex="-1"
    :aria-labelledby="modal + `-label`"
  >
    <div
      class="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-56px)] flex items-center"
    >
      <slot ></slot>
    </div>
  </div>
</template>
<script>
export default {
    name: "TemplateModal",
  props: ["modal"],
};
</script>
