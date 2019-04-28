<template>
    <div>
        <h3>Login</h3>
        <form action="/api/login">
            <input type="text" name="email" id="" placeholder="Email">
            <input type="password" name="password" id="" placeholder="Password">
            <input type="submit" name="submit" id="submit">
        </form>
        <p>Don't have an account? Register <router-link to="/register" class="auth-link">here</router-link></p>
        <!-- the line below adds a second App component to the page -->
        <!-- but it also loads the register component at /register -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "Login"
}
</script>

<style scoped>

    p {
        font-size: .5em;
    }

    input {
        width: 20em;
        height: 2.2em;
        display: block;
        margin: 1em auto;
    }

    input[type=submit] {
        /* width is hard coded - need a better solution */
        width: 221px;
        padding: 0px;
        background: #42b883;
        color: #FFF;
        font-size: .55em;
        border-radius: .2em;
    }

    * {
        box-sizing: border-box;
    }

    .auth-link {
        text-decoration: none;
        color: #42b883;
    }

</style>
