<template>
    <ul>
        <li v-for="item in items">
            <div>
                <h4>{{ item.title }}</h4>
            </div>
            <p>{{ item.content }}</p>
        </li>
    </ul>
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
        }
    }
</script>