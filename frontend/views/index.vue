<template lang="html">
    <div>
        <h2>{{ title }}</h2>
        <a href="/write">write</a>
        <ul>
            <li v-for="item in items">
                <div>
                    <h4>{{ item.title }}</h4>
                </div>
                <p>{{ item.content }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {

            }
        }
    }
</script>