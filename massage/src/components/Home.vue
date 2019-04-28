<template>

  <div>
    <p>Home</p>
    <form action="/api/users/4" v-on:submit.prevent="onSubmit">
        <input type="submit" v-on:click="getUser()" name="submit" id="submit">
    </form>
    <p>{{user}}</p>
    <p>{{token}}</p>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "Home",
    data() {
        return {
            token: "",
            user: ""
        }
    },

    methods: {
        getUser() {
        axios({ method: "GET", "url": "http://localhost:3000/api/user/4", "headers": { "content-type": "application/json", "Authorization": `Bearer: ${this.token}` } })
            .then(result => {
                /* eslint-disable */
                this.user = result.data;
            }, error => {
                /* eslint-disable */
                console.error(error);
            });
        }
    }
}
</script>

<style scoped>

</style>
