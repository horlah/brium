<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');

:root {
    --primary-color: #1470DB;
    --secondary-color: #FBB837;
    --white-color: #ffffff;
    --black-color: #000000;
    --medium-color: #9F9F9F;
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
}

* {
    text-decoration: none;
}

button {
    background: transparent;
    border: none;
}
</style>
