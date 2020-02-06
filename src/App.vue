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

    &.link-style {
        color: var(--primary-color);
        background: transparent;
        text-decoration: underline var(--primary-color);
    }
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
    position: relative;

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

    button {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translate(0, -50%);
        padding: 10px 0;
        background: linear-gradient(180deg, #14ACDB 0%, #1470DB 100%);
        color: var(--white-color);
        width: 170px;
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
        border-left: 7px solid var(--secondary-color);
        box-sizing: border-box;
        border-radius: 3px;
        padding: 20px 0;
        margin-top: 10px;

        &.requesting {
            border-left-color: var(--primary-color);
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

.bread-crumbs {
    margin: 15px 0 0 30px;
    display: flex;
    color: var(--medium-color);
    font-size: .8rem;

    div {
        &:nth-child(even) {
            margin-left: 25px;
            position: relative;

            &::before {
                content: '>';
                left: -15px;
                position: absolute;
            }
        }
    }
}

.table {
    .head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;

        button {
            background: linear-gradient(180deg, #14ACDB 0%, #1470DB 100%);
            border-radius: 3px;
            color: var(--white-color);
            padding: 10px 70px;
        }
    }
}

.table-head {
    display: flex;
    text-align: center;
    margin-top: 20px;
    background: var(--secondary-color);
    color: var(--white-color);
    padding: 15px 0;
    font-size: .9rem;

    & > div {
        width: 100%;
    }
}

.table-item {
    display: flex;
    text-align: center;
    align-items: center;
    border: 0.75px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 3px;
    font-size: .8rem;
    font-weight: bolder;
    cursor: pointer;

    &:not(:first-of-type) {
        margin-top: 3px;
    }

    & > div {
        width: 100%;
        padding: 15px 0;
        border-right: 1px solid #F2F2F2;
    }

    .name {
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 20%;
            margin-right: 10px;
        }
    }

    .status {
        &.approved {
            color: #07BE72;
        }

        &.processing {
            color: #F81C1C;
        }
    }
}

.driver-dp-on-car {
    position: absolute;
    width: 20% !important;
    bottom: 0;
    right: 70px;
}

.big-chart {
    background: var(--white-color);
    width: calc(95% - 60px);
    margin: 30px auto;
    background: var(--white-color);
    padding: 20px 30px 30px;

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > div {
            &:last-child {
                display: flex;
                align-items: center;
            }

            & > button {
                margin-left: 20px;

                img {
                    width: 80%;
                }
            }
        }
    }

    .chart {
        width: 100%;
        height: 25vh;
    }

    .tabs {
        display: flex;

        .tab {
            padding: 10px 5px;
            margin: 10px;
            font-size: .9rem;

            &.active {
                border-bottom: 2px solid var(--primary-color);
            }
        }
    }

    .big-text {
        font-size: 1.5rem;
        font-weight: bolder;
    }
}

.form-buttons {
    margin-top: 20px;
}

.centralize {
    display: flex;
    justify-content: center;
    align-items: center;

    &.column {
        flex-direction: column;
    }
}

.primary-color {
    color: var(--primary-color);
}
</style>
