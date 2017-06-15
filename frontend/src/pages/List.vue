<template>
    <div class="card-block">
        <div class="media" v-for="item in items">
            <img class="d-flex mr-3" src="https://placeholdit.imgix.net/~text?txt=64x64&w=64&h=64">
            <div class="media-body">
                <h5 class="mt-0">{{ item.title }}</h5>
                <p>{{ item.content }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data : function () {
            return {
                items : []
            }
        },
        created : function () {
            this.$http.get('list').then(
                function (res) {
                    this.items = res.body.items;
                },
                function (res) {
                    console.log('error : ', res);
                }
            );
        },
        sockets : {
            posted : function (data) {
//                alert('새글이 등록되었습니다.');
                this.$http.get('list').then(
                    function (res) {
                        this.items = res.body.items;
                    },
                    function (res) {
                        console.log('error : ', res);
                    }
                );
            }
        }
    }
</script>
<style>
</style>