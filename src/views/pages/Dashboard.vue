<template>
    <div class="dashboard">
        <section class="total">
            <div class="has-drop-down">
                <div class="small-text">Total</div>
                <div class="big-text">For {{totalSectionValue}}</div>
                <div class="drop-down">
                    <li><button @click="updateTotalSectionData('Today')">Today</button></li>
                    <li><button @click="updateTotalSectionData('This Week')">This Week</button></li>
                    <li><button @click="updateTotalSectionData('This Month')">This Month</button></li>
                    <li><button @click="updateTotalSectionData('This Year')">This Year</button></li>
                </div>
            </div>
            <div>
                <div class="big-text">N {{dashboardData.amount}}</div>
                <div class="small-text">Received</div>
            </div>
            <div>
                <div class="big-text">{{ dashboardData.passengers }}</div>
                <div class="small-text">Passengers</div>
            </div>
            <div>
                <div class="big-text">{{ dashboardData.drivers }}</div>
                <div class="small-text">Drivers</div>
            </div>
            <div>
                <div class="big-text">{{ dashboardData.completed }}</div>
                <div class="small-text">Rides Completed</div>
            </div>

            <!-- <button class="see-more">See More</button> -->
        </section>

        <section class="big-chart total-earning">
            <div class="header">
                <div class="title">
                    <div class="small-text">Total</div>
                    <div class="big-text">For Today</div>
                </div>

                <div>
                    <div class="tabs">
                        <button class="tab" v-bind:class="{active: activeBigChart === 'weekly'}" @click="activeBigChart = 'weekly'; setupBigChart()">This Week</button>
                        <button class="tab" v-bind:class="{active: activeBigChart === 'month'}" @click="activeBigChart = 'month'; setupBigChart()">This Month</button>
                        <button class="tab" v-bind:class="{active: activeBigChart === 'year'}" @click="activeBigChart = 'year'; setupBigChart()">This Year</button>
                    </div>

                    <button>
                        <img src="../../assets/calendar.svg" alt="calendar icon">
                    </button>
                </div>
            </div>

            <div class="chart">
                <canvas id="bigChart" width="100%" height="24vh"></canvas>
            </div>
        </section>

        <section class="small-cards">
            <div class="card">
                <div class="chart">
                    <canvas id="totalDrivers" width="100%" height="50vh"></canvas>
                </div>

                <div class="details">
                    <h4>Total Drivers</h4>
                    <!-- <div class="rate">
                        <img src="../../assets/arrow-up.svg" alt="arrow up icon">
                        <span>25</span>
                        <span>drivers joined this week.</span>
                    </div> -->
                </div>

                <!-- <div class="more">
                    <div>
                        <img src="../../assets/schedule.svg" alt="schedule icon">
                        <span>updated 4 minutes ago</span>
                    </div>

                    <div>
                        <img src="../../assets/calendar.svg" alt="calendar icon">
                    </div>
                </div> -->
            </div>

            <div class="card">
                <div class="chart">
                    <canvas id="cancelledRides" width="100%" height="50vh"></canvas>
                </div>

                <div class="details">
                    <h4>Completed - Cancelled Rides</h4>
                    <!-- <div class="rate">
                        <img src="../../assets/arrow-up.svg" alt="arrow up icon">
                        <span>25</span>
                        <span>drivers joined this week.</span>
                    </div> -->
                </div>

                <!-- <div class="more">
                    <div>
                        <img src="../../assets/schedule.svg" alt="schedule icon">
                        <span>updated 4 minutes ago</span>
                    </div>

                    <div>
                        <img src="../../assets/calendar.svg" alt="calendar icon">
                    </div>
                </div> -->
            </div>

            <div class="card">
                <div class="chart"></div>

                <div class="details">
                    <h4>- -</h4>
                    <!-- <div class="rate">
                        <img src="../../assets/arrow-up.svg" alt="arrow up icon">
                        <span>25</span>
                        <span>drivers joined this week.</span>
                    </div> -->
                </div>

                <!-- <div class="more">
                    <div>
                        <img src="../../assets/schedule.svg" alt="schedule icon">
                        <span>updated 4 minutes ago</span>
                    </div>

                    <div>
                        <img src="../../assets/calendar.svg" alt="calendar icon">
                    </div>
                </div> -->
            </div>
        </section>

        <!-- <section class="selected-trip-details">
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
                    <div class="details trip-details">
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
        </section> -->
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
// import * as firebase from 'firebase';
import { HTTP_AUTH } from '../../services/http';
import mixins from '../../mixins/modal-mixun';

export default {
    name: 'dashboard',
    mixins: [mixins],
    data: () => {
        return {
            totalSectionValue: 'Today',
            dashboardData: {},
            activeBigChart: 'year'
        };
    },
    methods: {
        updateTotalSectionData(activeStatus) {
            this.totalSectionValue = activeStatus;
        },
        async getDashboardData() {
            this.$store.dispatch('SET_LOADER_STATE', true);

            try {
                const response = await HTTP_AUTH.get('/dashboard');
                this.dashboardData = await response.data;
                this.$store.dispatch('SET_LOADER_STATE', false);

                return;
            } catch (error) {
                this.$store.dispatch('SET_LOADER_STATE', false);
            }
        },
        setupBigChart() {
            const bigChartlabel = [];
            const bigChartdata = [];
            const totalDriversChartlabel = [];
            const totalDriversChartdata = [];
            const cancelledRidesChartlabel = ['cancelled', 'completed'];
            const cancelledRidesChartdata = [this.dashboardData.cancelled, this.dashboardData.completed];
            const activeChart = this.activeBigChart + 'Data';
            const yearData = this.dashboardData.yearData[this.dashboardData.yearData.length - 1];
            const monthData = yearData.monthData[yearData.monthData.length - 1];

            if (activeChart === 'monthData') {
                yearData.monthData.forEach(dashboardDetail => {
                    bigChartlabel.push(dashboardDetail.year);
                    bigChartdata.push(dashboardDetail.amount);

                    totalDriversChartlabel.push(dashboardDetail.year);
                    totalDriversChartdata.push(dashboardDetail.drivers);
                });
            } else if (activeChart === 'weeklyData') {
                monthData.weeklyData.forEach(dashboardDetail => {
                    bigChartlabel.push(dashboardDetail.date);
                    bigChartdata.push(dashboardDetail.amount);

                    totalDriversChartlabel.push(dashboardDetail.date);
                    totalDriversChartdata.push(dashboardDetail.drivers);
                });
            } else {
                this.dashboardData.yearData.forEach(dashboardDetail => {
                    bigChartlabel.push(dashboardDetail.year);
                    bigChartdata.push(dashboardDetail.amount);

                    totalDriversChartlabel.push(dashboardDetail.year);
                    totalDriversChartdata.push(dashboardDetail.drivers);
                });
            }

            this.setupChart({
                elementId: 'bigChart',
                labels: bigChartlabel,
                data: bigChartdata,
                type: 'line'
            });

            this.setupChart({
                elementId: 'totalDrivers',
                labels: totalDriversChartlabel,
                data: totalDriversChartdata,
                type: 'line'
            });

            this.setupChart({
                elementId: 'cancelledRides',
                labels: cancelledRidesChartlabel,
                data: cancelledRidesChartdata,
                type: 'doughnut'
            });
        }
    },
    computed: {
        ...mapGetters({
            user: 'GetUserData'
        })
    },
    async mounted() {
        await this.getDashboardData();
        this.setupBigChart();
    // },
    // beforeRouteEnter: async(to, from, next) => {
    //     firebase.auth().onAuthStateChanged(user => {
    //         console.log(user);
    //         if (!user) next('/login');
    //         else next();
    //     });
    }
};
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
    background: var(--white-color);
    padding: 30px;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 0px 4px 4px rgba(197, 191, 191, 0.16);

    & > div {
        width: 40%;
        position: relative;

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

    .drop-down {
        box-shadow: 0px 4px 4px rgba(197, 191, 191, 0.16);
        background: var(--white-color);
        position: absolute;
        width: 100%;
        left: -30px;

        li {
            list-style: none;
            margin-top: 10px;
            transition: all .5s;

            button {
                font-size: inherit;
                width: 100%;
                text-align: left;
                padding: 10px 0 10px 30px;
            }

            &:hover {
                background: #eee;
            }

            &:last-child {
                margin-bottom: 10px;
            }
        }
    }

    button.see-more {
        width: 200px;
        background: #222222;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.09);
        border-radius: 5px;
        color: var(--white-color);
        padding: 10px 0;
        margin-left: 40px;
    }
}

.has-drop-down {
    .drop-down {
        display: none;
    }

    &:hover {
       .drop-down {
            display: block;
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
            width: calc(90% - 40px);
            margin: auto;
            padding: 0;
            height: calc(20vh - 40px);
            background: black;
            position: absolute;
            top: -10vh;
            left: 50%;
            transform: translate(-50%, 0);
            box-shadow: 0px 4px 4px rgba(197, 191, 191, 0.16);
            padding: 20px;
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
    }
}

.map {
    margin-top: 30px;
    background: var(--white-color);

    .map-details {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .search {
            margin-right: 30px;
        }

        .details {
            display: flex;
            justify-content: space-evenly;
            text-align: center;
            padding: 20px 30px 0px;

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
    }

    .map_ {
        img {
            width: 100%;
        }
    }
}
</style>
