<template>
    <div id="app" class="container">
        <header>
            <h3>{{ title }}</h3>
        </header>
        <div class="card">
            <div class="card-block">
                <router-link v-bind:to="{name : 'list'}" class="custom-tab">list</router-link>
                <router-link v-bind:to="{name : 'write'}" class="custom-tab">write</router-link>
            </div>
        </div>
        <div class="card">
            <div class="card-block">
                <router-view></router-view>
            </div>
        </div>
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
    @import "assets/css/style.css";
</style>