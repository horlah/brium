<template>
    <div class="drop-menu">
        <div class="title">
            <slot name="title"></slot>
            <hr>
        </div>
        <ul>
            <slot></slot>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
$drop-down_width: 330px;
$border: 1px solid rgba(215, 215, 215, 0.5);

ul, li {
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.drop-menu {
    position: absolute;
    width: $drop-down_width;
    background: var(--white-color);
    left: -$drop-down_width + 20px;
    border: 1px solid #EFEFEF;
    box-shadow: 3px 4px 4px rgba(197, 191, 191, 0.31);
    border-radius: 10px;
    z-index: 10;
    min-height: 40vh;

    li{
        display: flex;
        justify-content: space-between;
        margin: 0 20px;
        border-bottom: $border;
        padding: 20px 0;
        font-size: .8rem;
    }
}

.title {
    h4 {
        color: var(--primary-color);
    }
}

hr {
    border: $border;
    width: 90%;
    margin: 0 auto;
}

</style>
