<template>
    <div class="app">
        <Sidebar />
        <div>
            <TopNav />

            <router-view></router-view>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue'
import TopNav from '@/components/Top-Nav.vue'

export default {
    name: 'app',
    components: {
        Sidebar,
        TopNav
    }
}
</script>

<style scoped lang="scss">
.app {
    display: flex;

    & > div {
        width: 100%;
        background: rgba(237, 237, 237, 0.75);
        margin-left: 18%;
    }
}

.total {
    display: flex;
    width: calc(95% - 60px);
    margin: 30px auto;
    background: #fff;
    padding: 30px;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 0px 4px 4px rgba(197, 191, 191, 0.16);

    & > div {
        width: 40%;

        &:not(:first-child) {
            text-align: center;
            border-left: 1px solid #DADADA;

            .big-text {
                color: #FBB837;
                font-style: normal;
                letter-spacing: -0.3px;
            }
        }
    }

    button {
        width: 200px;
        background: #222222;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.09);
        border-radius: 5px;
        color: #ffffff;
        padding: 10px 0;
        margin-left: 40px;
    }
}

.total-earning {
    background: #ffffff;
    width: calc(95% - 60px);
    margin: 30px auto;
    background: #fff;
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
}

.tabs {
    display: flex;

    .tab {
        padding: 10px 5px;
        margin: 10px;
        font-size: .9rem;

        &.active {
            border-bottom: 2px solid #1470DB;
        }
    }
}

.small-cards {
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin: calc(10vh + 30px) auto 30px;

    .card {
        background: #ffffff;
        width: 100%;
        color: #ACACAC;
        font-size: .8rem;
        position: relative;
        box-shadow: 0px 4px 4px rgba(197, 191, 191, 0.16);

            &:first-child {
                .chart {
                    background: #FBB837;
                }
            }

            &:last-child {
                .chart {
                    background: #1470DB;
                }
            }

            &:nth-child(2) {
                .chart {
                    background: #14ACDB;
                }
            }

        .chart {
            width: 90%;
            margin: auto;
            padding: 0;
            height: 20vh;
            background: black;
            position: absolute;
            top: -10vh;
            left: 50%;
            transform: translate(-50%, 0);
            box-shadow: 0px 4px 4px rgba(197, 191, 191, 0.16);
        }

        &:not(:first-child) {
            margin-left: 30px;
        }

        & > div {
            padding: 10px 20px;
        }

        .details {
            margin-top: 10vh;
        }

        .more {
            border-top: 1px solid #E8E8E8;
            display: flex;
            align-items: center;
            justify-content: space-between;

            & > div {
                display: flex;

                img {
                    margin-right: 10px;
                    width: 8%;
                }

                &:last-child {
                    img {
                        width: 70%;
                        margin: 0;
                    }
                }
            }
        }

        h4 {
            color: #1470DB;
            font-size: .9rem;
        }

        .rate {
            display: flex;
            align-items: center;

            span:last-child {
                margin-left: 10px;
            }

            img {
                margin-right: 2px;
                width: 4%;
            }
        }
    }
}

.selected-trip-details {
    background: #ffffff;
    width: 100%;
    padding: 30px 0;
    font-size: .75rem;

    & > div {
        width: 93%;
        display: flex;
        margin: auto;
        justify-content: space-evenly;

        & > div {
            margin-right: 50px;
            max-width: 190px;

            .head {
                color: #9F9F9F;
            }

            .details {
                p {
                    margin: 8px 0 0;
                }
            }

            .star {
                color: #FBB837;
            }
        }

        .trip {
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
                        background: #FBB837;
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
                        background: #1470DB;
                    }
                }
            }
        }
    }
}

.map {
    margin-top: 30px;
    background: #ffffff;

    .map-details {
        padding: 20px 30px 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .details {
            display: flex;
            justify-content: space-evenly;
            text-align: center;

            & > div {
                padding: 0 20px 20px;
                position: relative;

                &::after {
                    content: '';
                    position: absolute;
                    height: 20px;
                    width: 3px;
                    right: 0;
                    top: 20px;
                    background: #ECECEC;
                }

                &.active {
                    color: #1470DB;

                    &::before {
                        content: '';
                        background: #fff;
                        position: absolute;
                        bottom: -30px;
                        left: 30px;
                        right: 30px;
                        border-left: 30px solid transparent;
                        border-right: 30px solid transparent;
                        border-top: 30px solid #ffffff;
                    }
                }
            }

            .number {
                font-size: 26px;
                font-weight: bolder;
            }

            .text {
                font-size: .8rem;
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
                    width: 85%;
                }
            }

            input {
                font-size: 1rem;
                padding: 10px 15px;
                border: none;
                outline: none;
            }
        }
    }

    .map_ {
        img {
            width: 100%;
        }
    }
}
</style>
