<template>
    <div class="loader">
        <div></div>
    </div>
</template>

<script>
export default {
    name: 'loader'
};
</script>

<style lang="scss" scoped>
.loader {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba($color: #000000, $alpha: 0.5);
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        width: 40px;
        height: 40px;
        background: transparent;
        border: 7px solid #ffffff;
        border-bottom: 7px solid transparent;
        border-radius: 50px;
        animation: rotate 1s linear infinite;

        @keyframes rotate {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    }
}
</style>
