<template>
    <div id="app">
        <h2>{{ title }}</h2>
        <router-link v-bind:to="{name : 'list'}">list</router-link>
        <router-link v-bind:to="{name : 'write'}">write</router-link>

        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name : 'app',
        data : function () {
            return {
                title : ''
            }
        },
        created : function () {
            this.$http.get('').then(
                function (res) {
                    this.title = res.body.title;
                },
                function (res) {
                    console.log('error : ', res);
                }
            );
        }
    }
</script>

<style>
</style>