<template lang="html">
    <form action="/write" method="post">
        <input type="text" name="title"/>
        <textarea name="content"></textarea>
        <button type="submit">submit</button>
    </form>
</template>

form(action='/write', method='post')
input(type='text', name='title')
textarea(name='content')
button.btn.btn-outline-primary(type='submit') submit