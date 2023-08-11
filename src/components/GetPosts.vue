<template>
    <div>
        <h3 v-show="errmesage">{{ errmesage }}</h3>
        <!-- <button @click="Getposts()">get posts</button> -->
        <h4 v-for="(post,index) in posts" :key="index">
         <h2>   {{ post.id }} 
            {{ post.title }}</h2>
            <p>   {{ post.body }} 
           </p>
           <hr>
        </h4>
    </div>
</template>

<script>
  import axios from "axios";
    export default {
        name:'GetPosts',
        data(){
            return {
                posts:[],
                errmesage:'',
                formdata:{
                    title:'',
                    id:Math.random(),
                    body:''
                }
            }
        },
        mounted(){
this.Getposts()
        },
        methods:{
  Getposts(){
  axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{this.posts=res.data}).catch(err=>{
    console.log('err', err)
    this.errmesage='erroe of end point'
  })
  },
  PostData(){
axios.post('https://jsonplaceholder.typicode.com/posts',this.formdata).then(res=>{
    console.log('res.data', res.data)
    this.posts.push(res.data)
    console.log('this.posts', this.posts)
})

  }
  
}
    }
</script>

<style >

</style>