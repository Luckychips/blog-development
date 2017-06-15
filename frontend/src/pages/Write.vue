<template>
    <div class="card-block">
        <div class="form-group row">
            <label for="example-text-input" class="col-2 col-form-label">title</label>
            <div class="col-10">
                <input class="form-control" type="text" id="example-text-input" v-model="value.title"/>
            </div>
        </div>
        <div class="form-group row">
            <label for="exampleTextarea" class="col-2 col-form-label">content</label>
            <div class="col-10">
                <textarea class="form-control" id="exampleTextarea" rows="10" v-model="value.content"></textarea>
            </div>
        </div>
        <button type="button" class="btn btn-outline-success btn-sm float-right" v-on:click="submit()">submit</button>
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
                        var data = JSON.parse(res.bodyText);
                        this.$socket.emit('created', {timestamp : data.created});
                        this.$router.replace('/');
                    },
                    function (res) {
                        console.log('error : ', res);
                    }
                );
            }
        }
    }
</script>