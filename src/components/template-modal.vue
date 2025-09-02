<template>
  <div
    :id="modal"
    class="hs-overlay hidden inset-0 z-10 pointer-events-auto   size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto"
    role="dialog"
    tabindex="-1"
    :aria-labelledby="modal + `-label`"
  >
    <div
      class="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-56px)] flex items-center"
    >
       <div class="grid gap-8">
      <div
        id="back-div"
        class="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4"
      >
        <slot></slot>
      </div>
    </div>
  </div>

  </div>
</template>
<script>
export default {
    name: "TemplateModal",
  props: ["modal"],
};
</script>
