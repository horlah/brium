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

.trip-details {
    margin-left: 20px;

    & > div {
        position: relative;
        margin-bottom: 10px;

        &::after {
            content: '';
            position: absolute;
            left: -20px;
            top: 3px;
            width: 10px;
            height: 10px;
            border-radius: 50px;
        }

        &:first-child {
            margin-bottom: 15px;

            &::after {
                background: var(--secondary-color);
            }
            &::before {
                content: '';
                position: absolute;
                left: -16.5px;
                top: 16.5px;
                width: 2px;
                height: 15px;
                background: #c4c4c4;
            }
        }
        &:last-child {
            &::after {
                background: var(--primary-color);
            }
        }
    }
}

.search {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #000;

    label {
        display: flex;
        align-items: center;

        img {
            width: 70%;
        }
    }

    input {
        font-size: .8rem;
        padding: 10px 15px;
        border: none;
        outline: none;
    }
}

.pagination {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    font-size: .8rem;

    & > div {
        display: flex;
        align-items: center;

        div {
            padding: 8px 11px;
            margin: 0 8px;

            &.active {
                background: var(--secondary-color);
                border-radius: 50px;
                padding: 8px 13px;
            }
        }

        img {
            width: 3%;
        }
    }
}
</style>
