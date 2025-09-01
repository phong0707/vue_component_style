import axios from 'axios'
import { defineStore } from 'pinia'

const useProfileStore = defineStore('profile',{
    state:() =>{
        return{
            profile:{}
        }
    },
    actions:{
        async fetchProfile(){
            const {data} = await axios.get(' https://api.github.com/users/phong0707')
            this.profile = data
        }
    }
})

export default useProfileStore