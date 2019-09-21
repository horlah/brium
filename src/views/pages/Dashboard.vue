<template>
    <div class="dashboard">
        <section class="total">
            <div>
                <div class="small-text">Total</div>
                <div class="big-text">For Today</div>
            </div>
            <div>
                <div class="big-text">N1,140,574</div>
                <div class="small-text">Received</div>
            </div>
            <div>
                <div class="big-text">20</div>
                <div class="small-text">New Passengers</div>
            </div>
            <div>
                <div class="big-text">574</div>
                <div class="small-text">New Driver</div>
            </div>
            <div>
                <div class="big-text">140,574</div>
                <div class="small-text">Rides Completed</div>
            </div>

            <button>See More</button>
        </section>

        <section class="total-earning">
            <div class="header">
                <div class="title">
                    <div class="small-text">Total</div>
                    <div class="big-text">For Today</div>
                </div>

                <div>
                    <div class="tabs">
                        <button class="tab">This Week</button>
                        <button class="tab active">This Month</button>
                        <button class="tab">This Year</button>
                    </div>

                    <button>
                        <img src="../../assets/calendar.svg" alt="calendar icon">
                    </button>
                </div>
            </div>

            <div class="chart"></div>
        </section>

        <section class="small-cards">
            <div class="card">
                <div class="chart"></div>

                <div class="details">
                    <h4>Total Drivers</h4>
                    <div class="rate">
                        <img src="../../assets/arrow-up.svg" alt="arrow up icon">
                        <span>25</span>
                        <span>drivers joined this week.</span>
                    </div>
                </div>

                <div class="more">
                    <div>
                        <img src="../../assets/schedule.svg" alt="schedule icon">
                        <span>updated 4 minutes ago</span>
                    </div>

                    <div>
                        <img src="../../assets/calendar.svg" alt="calendar icon">
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="chart"></div>

                <div class="details">
                    <h4>Total Drivers</h4>
                    <div class="rate">
                        <img src="../../assets/arrow-up.svg" alt="arrow up icon">
                        <span>25</span>
                        <span>drivers joined this week.</span>
                    </div>
                </div>

                <div class="more">
                    <div>
                        <img src="../../assets/schedule.svg" alt="schedule icon">
                        <span>updated 4 minutes ago</span>
                    </div>

                    <div>
                        <img src="../../assets/calendar.svg" alt="calendar icon">
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="chart"></div>

                <div class="details">
                    <h4>Total Drivers</h4>
                    <div class="rate">
                        <img src="../../assets/arrow-up.svg" alt="arrow up icon">
                        <span>25</span>
                        <span>drivers joined this week.</span>
                    </div>
                </div>

                <div class="more">
                    <div>
                        <img src="../../assets/schedule.svg" alt="schedule icon">
                        <span>updated 4 minutes ago</span>
                    </div>

                    <div>
                        <img src="../../assets/calendar.svg" alt="calendar icon">
                    </div>
                </div>
            </div>
        </section>

        <section class="selected-trip-details">
            <div>
                <div>
                    <div class="head">Trip Id</div>
                    <div class="details">
                        <p>NK01P35</p>
                    </div>
                </div>
                <div>
                    <div class="head">Driver</div>
                    <div class="details">
                        <p>John Boyega (<span class="star">★</span> 4.5)</p>
                        <p>+2348174847684</p>
                    </div>
                </div>
                <div>
                    <div class="head">Passenger</div>
                    <div class="details">
                        <p>Shola Adeola (<span class="star">★</span> 4.5)</p>
                        <p>+2348174847684</p>
                    </div>
                </div>
                <div>
                    <div class="head">Current Location</div>
                    <div class="details">
                        <p>Phase 1, Ajanaku Olorunfunsho Estate, Mushin</p>
                    </div>
                </div>
                <div>
                    <div class="head">Trip Routes</div>
                    <div class="details trip">
                        <div>300 Herbert Macaulay Way</div>
                        <div>Eti-Osa,Lagos</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="map">
            <div class="map-details">
                <div class="details">
                    <div class="active">
                        <div class="number">93</div>
                        <div class="text">Active Trips</div>
                    </div>
                    <div>
                        <div class="number">913</div>
                        <div class="text">Available Label</div>
                    </div>
                    <div>
                        <div class="number">3</div>
                        <div class="text">Enroute to Pickup</div>
                    </div>
                    <div>
                        <div class="number">203</div>
                        <div class="text">Journey Started</div>
                    </div>
                </div>

                <div class="search">
                    <label for="search">
                        <img src="../../assets/search.svg" alt="search icon">
                    </label>
                    <input type="text" placeholder="search">
                </div>
            </div>

            <div class="map_">
                <img src="../../assets/map.png" alt="map">
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'dashboard'
}
</script>

<style scoped lang="scss">
.small-text {
    font-size: .8rem;
    color: var(--medium-color);
}

.big-text {
    font-size: 1.5rem;
    font-weight: bolder;
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
                color: var(--secondary-color);
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
        color: var(--white-color);
        padding: 10px 0;
        margin-left: 40px;
    }
}

.total-earning {
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

.small-cards {
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin: calc(10vh + 30px) auto 30px;

    .card {
        background: var(--white-color);
        width: 100%;
        color: var(--medium-color);
        font-size: .8rem;
        position: relative;
        box-shadow: 0px 4px 4px rgba(197, 191, 191, 0.16);

            &:first-child {
                .chart {
                    background: var(--secondary-color);
                }
            }

            &:last-child {
                .chart {
                    background: var(--primary-color);
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
            color: var(--primary-color);
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
    background: var(--white-color);
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
                color: var(--medium-color);
            }

            .details {
                p {
                    margin: 8px 0 0;
                }
            }

            .star {
                color: var(--secondary-color);
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
    }
}

.map {
    margin-top: 30px;
    background: var(--white-color);

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
                    color: var(--primary-color);

                    &::before {
                        content: '';
                        background: var(--white-color);
                        position: absolute;
                        bottom: -30px;
                        left: 30px;
                        right: 30px;
                        border-left: 30px solid transparent;
                        border-right: 30px solid transparent;
                        border-top: 30px solid var(--white-color);
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
