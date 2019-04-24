<template>
    <div>
        <ul>
            <li><router-link to="/login">Login</router-link></li>
            <li><router-link to="/register">Register</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Nav"
}
</script>

<style scoped>

    div {
        top: 0;
        width: 100%;
        display: block;
    }

    li {
        list-style-type: none;
        display: inline;
        padding: 1em;
        font-size: .6em;
    }

    ul {
        padding-left: 0;
        background-color: #F0F0F0;
        margin-top: 0;
        border-bottom: 1px solid #707070;
        height: 1.75em;
        text-align: right;
    }

</style>

