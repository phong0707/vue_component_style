import axios from 'axios'
import { defineStore } from 'pinia'

const useRepositoryStore = defineStore('repository',{
    state:() =>{
        return{
            repositories:[]
        }
    },
    actions:{
        async fetchRepositories(){
            const {data} = await axios.get(' https://api.github.com/users/phong0707/repos')
            this.repositories = data
        }
    }
})

export default useRepositoryStore