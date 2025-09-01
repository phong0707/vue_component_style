<template>
    <article @click="handClick"
            class="rounded-[10px] border hover:cursor-pointer border-gray-200 bg-white px-4 pt-12 pb-4"
          >
            <time datetime="2022-10-10" class="block text-xs text-gray-500">
              {{ formattedDate }}
            </time>

            <h3 class="mt-0.5 text-lg font-medium text-gray-900">
                {{  title }}
              </h3>

            <div class="mt-4 flex flex-wrap gap-1">
              <span v-for="(item,index) in keywords" :key="index"
                class="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs whitespace-nowrap text-purple-600"
              >
                {{ item }}
              </span>
            </div>
          </article>
</template>
<script>
import moment from 'moment';
export default {
    props:{
        id:{
            type: String,
        },
        date:{
            type: String,
            default: "2010 -11 -12"
        },
        title:{
            type: String,
            default: "How to center an element using JavaScript and jQuery"
        },
        keywords:{
            type: Array,
            default: () => {
                return ["C++", "JavaScript", "Vue.js"]
            }
        }

    },
    computed:{
      formattedDate() {
        return moment(this.date).format('LL')
      }
    },
    methods:{
        handClick() {
            this.$router.push(`/project/${this.id}`)
        }
    }
}
</script>