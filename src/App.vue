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
    --border-color: #F1F1F1;
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
}

* {
    text-decoration: none;
}

a {
    color: inherit;
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

.label {
    color: var(--medium-color);
    font-size: .65rem;
}

.trips {
    width: 95%;
    margin: calc(30px + 25.5px) auto 30px;
    background: var(--white-color);
    padding: 20px 0 30px;
    position: relative;

    div {
        font-size: .8rem
    }

    .tabs {
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
        top: -25.5px;

        button.tab {
            padding: 15px 35px;
            background: var(--white-color);
            box-shadow: 0px 4px 4px rgba(210, 207, 207, 0.33);
            font-size: .9rem;
            outline: none;

            &.active {
                background: var(--primary-color);
                color: var(--white-color);
            }
        }
    }

    .trips-search {
        display: flex;
        justify-content: flex-end;
        margin-right: 30px;
    }

    .trip {
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: var(--white-color);
        border: 0.75px solid #E0E0E0;
        border-left: 10px solid var(--secondary-color);
        box-sizing: border-box;
        border-radius: 3px;
        padding: 20px 0;
        margin-top: 10px;

        &.requesting {
            border-left: 10px solid var(--primary-color);
        }

        &:first-child {
            margin-top: 20px;
        }

        & > div {
            // border-right: 2px solid #F2F2F2;
        }
    }

    .trip-details {
        & > div {
            &:first-child {
                &::before {
                    height: 30px;
                }
            }
        }
    }

    .status {
        display: flex;
        justify-content: center;
        align-items: center;

        .status-icon {
            margin-right: 20px;
        }

        .status-title {
            font-size: .9rem;
        }
    }

    .clients {
        .client {
            display: flex;
            align-items: center;

            img {
                width: 70%;
            }

            &.driver {
                margin-bottom: 15px;
            }
        }
    }

    .start-time {
        margin-bottom: 15px;
    }
}
</style>
