<template>
    <div>
        <ul>
            <li><router-link to="/login" class="nav-link">Login</router-link></li>
            <li><router-link to="/register" class="nav-link">Register</router-link></li>
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

    .nav-link {
        text-decoration: none;
        color: #303030;
    }

    li {
        display: inline;
        padding: 1em;
        font-size: .6em;
    }

    li:visited {
        list-style-type: none;
        text-decoration: none;
        color: gray;
    }

    li:hover {
        list-style-type: none;
        text-decoration: none;
        color: gray;
    }

    ul {
        padding-left: 0;
        list-style-type: none;
        text-decoration: none;
        background-color: #F0F0F0;
        margin-top: 0;
        /* border-bottom: 1px solid #707070; */
        height: 1.75em;
        text-align: right;
        box-shadow: 0px .5px 6px 0px #707070;
    }

</style>

