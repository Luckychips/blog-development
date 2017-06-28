<template>
    <div id="app">
        <div id="header" class="card">
            <div class="row">
                <h3 class="col-auto">{{ title }}</h3>
                <div class="col-10">
                    <input type="text" placeholder="Search" class="form-control"/>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="card-block">
                <div class="card-columns">
                    <div class="card" v-for="item in items">
                        <div class="card-block">
                            <img v-bind:src="'http://placekitten.com/g/' + item.width + '/' + item.height"/>
                            <a v-on:click="get_item(item, $event)" href>
                                <h4 class="card-title">{{ item.title }}</h4>
                            </a>
                            <p class="card-text">{{ item.content }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <modal v-if="is_show_modal">
            <div slot="header" class="col-12">
                <h5 class="modal-title">NEW POST</h5>
                <button type="button" class="close" @click="is_show_modal = false">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div slot="body" class="card-block">
                <div class="form-group row">
                    <label for="example-text-input" class="col-2 col-form-label">title</label>
                    <div class="col-10">
                        <input class="form-control" type="text" id="example-text-input" v-model="value.title"/>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="example-width-input" class="col-2 col-form-label">width</label>
                    <div class="col-4">
                        <input class="form-control" type="text" id="example-width-input" v-model="value.width"/>
                    </div>
                    <label for="example-height-input" class="col-2 col-form-label">height</label>
                    <div class="col-4">
                        <input class="form-control" type="text" id="example-height-input" v-model="value.height"/>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="exampleTextarea" class="col-2 col-form-label">content</label>
                    <div class="col-10">
                        <textarea class="form-control" id="exampleTextarea" rows="10" v-model="value.content"></textarea>
                    </div>
                </div>
            </div>
            <div slot="footer">
                <button type="button" class="btn btn-outline-success btn-sm float-right" v-on:click="submit()">submit</button>
            </div>
        </modal>
        <button type="button" id="button-new" class="btn btn-outline-info" @click="is_show_modal = true"><i class="fa fa-plus" aria-hidden="true"></i></button>
    </div>
</template>

<script>
    import Modal from './components/Modal.vue'

    export default {
        components : {
            'modal' : Modal
        },
        data : function () {
            return {
                title : '',
                is_show_modal : false,
                items : [],
                value : {}
            }
        },
        created : function () {
            //todo
            //1. image upload
            //2. keyword search
            //3. create thumbnail image
            //4. 1:1 messenger
            //5. detail data modal
            //6. search tag
            //7. profile
            this.$watch('is_show_modal', function (new_value, old_value) {
                if (this.is_show_modal) {
                    this.value = {};
                }
            });

            this.$http.get('').then(
                function (res) {
                    this.title = res.body.title;
                    this.items = res.body.items;
                },
                function (res) {
                    console.log('error : ', res);
                }
            );
        },
        methods : {
            get_item : function (item, event) {
                event.preventDefault();

                console.log(item);
            },
            submit : function () {
                this.$http.post('write', this.value).then(
                    function (res) {
                        var data = JSON.parse(res.bodyText);
                        var _T = this;
                        this.$socket.emit('created', {timestamp : data.created});
                        this.$http.get('list').then(
                            function (res) {
                                _T.items = res.body.items;
                                _T.is_show_modal = false;
                            },
                            function (res) {
                                console.log('error : ', res);
                            }
                        );
                    },
                    function (res) {
                        console.log('error : ', res);
                    }
                );
            }
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
    @import "assets/css/style.css";
</style>