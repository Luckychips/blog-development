<template>
    <div>
        <input type="text" v-model="value.title"/>
        <textarea v-model="value.content"></textarea>
        <button v-on:click="submit()">submit</button>
    </div>
</template>

<script>
    export default {
        data : function () {
             return {
                value : {}
            }
        },
        methods : {
            submit : function () {
                this.$http.post('write', this.value).then(
                    function (res) {

                        //socket.io - source's
                    },
                    function (res) {
                        console.log('error : ', res);
                    }
                );
            }
        }
    }
</script>