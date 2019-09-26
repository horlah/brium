<template>
    <div class="driver">
        <div class="bread-crumbs">
            <div class="link">
                <router-link :to="{ name: 'all-drivers'}">Drivers</router-link>
            </div>
            <div class="link">John Papa</div>
        </div>

        <section class="driver-details">
            <div class="online-status">
                <div class="indicator"></div>
                <div>ONLINE</div>
            </div>

            <div class="car-details">
                <div class="car">
                    <img src="../../../assets/car.png" alt="car">
                </div>

                <div class="name">
                    <h4 class="big-font">John Boyega</h4>
                    <p>PARTNER</p>
                </div>

                <div class="actions">
                    <button>LOCATE DRIVER</button>
                    <button>SUSPEND DRIVER</button>
                </div>
            </div>

            <div class="border"></div>

            <div class="driver-section">
                <div class="line">
                    <div class="phone-number">
                        <div class="label">PHONE NUMBER</div>
                        <div>08174847684</div>
                    </div>
                    <div class="email-address">
                        <div class="label">EMAIL ADDRESS</div>
                        <div>tejumoladavid@gmail.com</div>
                    </div>
                    <div class="last-update">
                        <div class="label">PROFILE LAST UPDATED</div>
                        <div>9:00pm 3 February 2018</div>
                    </div>
                    <div class="status">
                        <div>
                            <div class="label">STATUS</div>
                            <div class="title">Approved</div>
                        </div>
                    </div>
                </div>
                <div class="line">
                    <div class="hide">
                        <div class="label">CITY</div>
                        <div>Asaba</div>
                    </div>
                    <div class="date-joined">
                        <div class="label">DATE JOINED</div>
                        <div>3 February 2018</div>
                    </div>
                    <div class="city">
                        <div class="label">CITY</div>
                        <div>Asaba</div>
                    </div>
                    <div class="state">
                        <div class="label">STATE</div>
                        <div>Delta State</div>
                    </div>
                </div>
                <div class="line">
                    <div class="trips-driven">
                        <div class="label">TRIPS DRIVING</div>
                        <div class="number big-font">23</div>
                    </div>
                    <div class="trips-driven">
                        <div class="label">TRIPS DRIVING</div>
                        <div class="number big-font">4.6</div>
                    </div>
                    <div>
                        <div class="label hide">CITY</div>
                    </div>
                    <div class="total-earned">
                        <div class="label">TOTAL EARNED</div>
                        <div class="number big-font">N23,000</div>
                    </div>
                </div>
                <div class="line">

                </div>
            </div>
        </section>

        <section class="bank-documents">
            <section class="bank-details">
                <h4>Bank Details</h4>
                <div class="details">
                    <div>
                        <div class="label">Bank Account Number</div>
                        <div>0222010772</div>
                    </div>
                    <div>
                        <div class="label">Account Name</div>
                        <div>TEJUMOLA DAVID OLUWATIMILEYIN</div>
                    </div>
                    <div>
                        <div class="label">Bank Name</div>
                        <div>GUARANTEE TRUST BANK</div>
                    </div>
                </div>
            </section>
            <section class="documents">
                <h4>Documents</h4>
                <div class="details">
                    <div>
                        <div class="label">Tint Permit</div>
                        <div>
                            <img src="../../../assets/drive-file.svg" alt="file icon">
                            <span>Screenshot_20181023_shot.png</span>
                            <div class="info">
                                <div>008-1748-47684</div>
                                <div>Expires :  5/6/2022</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="label">Driver’s Licence</div>
                        <div>
                            <img src="../../../assets/drive-file.svg" alt="file icon">
                            <span>Screenshot_20181023_shot.png</span>
                            <div class="info">
                                <div>008-1748-47684</div>
                                <div>Expires :  5/6/2022</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>

        <section class="trips">
            <div class="trips-search">
                <h3>Past Trips</h3>
                <div class="search">
                    <label for="search">
                        <img src="../../../assets/search.svg" alt="search icon">
                    </label>
                    <input type="text" placeholder="Search driver name">
                </div>
            </div>

            <div class="trips-detail">
                <div class="trip">
                    <div class="status">
                        <div class="status-icon">
                            <img src="../../../assets/user.png" alt="user icon">
                        </div>
                        <div>
                            <div class="label">STATUS</div>
                            <div class="status-title">PICKUP - 2MIN</div>
                        </div>
                    </div>

                    <div class="timing">
                        <div class="time start-time">
                            <div class="label">START TIME</div>
                            <div>9:05am</div>
                        </div>
                        <div class="time end-time">
                            <div class="label">END TIME ESTIMATE</div>
                            <div>9:30am <span class="label">(3 mins left)</span></div>
                        </div>
                    </div>

                    <div class="location">
                        <div class="trip-details">
                            <div class="pickup">
                                <div class="label">PICKUP</div>
                                <div class="label-title">Adeleke Ade Road</div>
                            </div>
                            <div class="destination">
                                <div class="label">DROP OFF</div>
                                <div class="label-title">Presidential Hotel</div>
                            </div>
                        </div>
                    </div>

                    <div class="cost">
                        <div>
                            <div class="label">Card Payment</div>
                            <div class="price">N4,300</div>
                        </div>
                    </div>

                    <div class="date">
                        <div>
                            <div class="label">TRIP DATE</div>
                            <div class="price">29th, Jun 2017</div>
                        </div>
                    </div>
                </div>

                <div class="trip">
                    <div class="status">
                        <div class="status-icon">
                            <img src="../../../assets/user.png" alt="user icon">
                        </div>
                        <div>
                            <div class="label">STATUS</div>
                            <div class="status-title">PICKUP - 2MIN</div>
                        </div>
                    </div>

                    <div class="timing">
                        <div class="time start-time">
                            <div class="label">START TIME</div>
                            <div>9:05am</div>
                        </div>
                        <div class="time end-time">
                            <div class="label">END TIME ESTIMATE</div>
                            <div>9:30am <span class="label">(3 mins left)</span></div>
                        </div>
                    </div>

                    <div class="location">
                        <div class="trip-details">
                            <div class="pickup">
                                <div class="label">PICKUP</div>
                                <div class="label-title">Adeleke Ade Road</div>
                            </div>
                            <div class="destination">
                                <div class="label">DROP OFF</div>
                                <div class="label-title">Presidential Hotel</div>
                            </div>
                        </div>
                    </div>

                    <div class="cost">
                        <div>
                            <div class="label">Card Payment</div>
                            <div class="price">N4,300</div>
                        </div>
                    </div>

                    <div class="date">
                        <div>
                            <div class="label">TRIP DATE</div>
                            <div class="price">29th, Jun 2017</div>
                        </div>
                    </div>
                </div>

                <div class="trip">
                    <div class="status">
                        <div class="status-icon">
                            <img src="../../../assets/user.png" alt="user icon">
                        </div>
                        <div>
                            <div class="label">STATUS</div>
                            <div class="status-title">PICKUP - 2MIN</div>
                        </div>
                    </div>

                    <div class="timing">
                        <div class="time start-time">
                            <div class="label">START TIME</div>
                            <div>9:05am</div>
                        </div>
                        <div class="time end-time">
                            <div class="label">END TIME ESTIMATE</div>
                            <div>9:30am <span class="label">(3 mins left)</span></div>
                        </div>
                    </div>

                    <div class="location">
                        <div class="trip-details">
                            <div class="pickup">
                                <div class="label">PICKUP</div>
                                <div class="label-title">Adeleke Ade Road</div>
                            </div>
                            <div class="destination">
                                <div class="label">DROP OFF</div>
                                <div class="label-title">Presidential Hotel</div>
                            </div>
                        </div>
                    </div>

                    <div class="cost">
                        <div>
                            <div class="label">Card Payment</div>
                            <div class="price">N4,300</div>
                        </div>
                    </div>

                    <div class="date">
                        <div>
                            <div class="label">TRIP DATE</div>
                            <div class="price">29th, Jun 2017</div>
                        </div>
                    </div>
                </div>

                <div class="trip">
                    <div class="status">
                        <div class="status-icon">
                            <img src="../../../assets/user.png" alt="user icon">
                        </div>
                        <div>
                            <div class="label">STATUS</div>
                            <div class="status-title">PICKUP - 2MIN</div>
                        </div>
                    </div>

                    <div class="timing">
                        <div class="time start-time">
                            <div class="label">START TIME</div>
                            <div>9:05am</div>
                        </div>
                        <div class="time end-time">
                            <div class="label">END TIME ESTIMATE</div>
                            <div>9:30am <span class="label">(3 mins left)</span></div>
                        </div>
                    </div>

                    <div class="location">
                        <div class="trip-details">
                            <div class="pickup">
                                <div class="label">PICKUP</div>
                                <div class="label-title">Adeleke Ade Road</div>
                            </div>
                            <div class="destination">
                                <div class="label">DROP OFF</div>
                                <div class="label-title">Presidential Hotel</div>
                            </div>
                        </div>
                    </div>

                    <div class="cost">
                        <div>
                            <div class="label">Card Payment</div>
                            <div class="price">N4,300</div>
                        </div>
                    </div>

                    <div class="date">
                        <div>
                            <div class="label">TRIP DATE</div>
                            <div class="price">29th, Jun 2017</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pagination">
                <div>
                    <img src="../../../assets/backward-arrow.svg" alt="previous icon">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div class="active">4</div>
                    <div>5</div>
                    <div>6</div>
                    <img src="../../../assets/forward-arrow.svg" alt="next icon">
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'driver',
    methods: {
        openDriver () {
            this.$router.push('/driver')
        }
    }
}
</script>

<style lang="scss" scoped>
$box-shadow: 3px 4px 4px rgba(197, 191, 191, 0.31);

.bread-crumbs {
    margin: 15px 0 0 30px;
    display: flex;
    color: var(--medium-color);
    font-size: .8rem;

    a {
        color: var(--primary-color);
    }

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

.driver-details {
    width: calc(95% - 60px);
    margin: 30px auto;
    background: var(--white-color);
    padding: 70px 30px 30px;
    position: relative;
    display: flex;
    justify-content: space-around;
    box-shadow: $box-shadow;

    .border {
        border: 1px solid var(--border-color);
    }

    .car-details {
        width: 30%;
        margin: 0 50px;
        text-align: center;

        img {
            width: 50%;
        }

        h4 {
            margin: 10px 0;
        }

        p {
            margin: 5px 0;
            font-size: .9rem;
            color: var(--primary-color);
        }

        button {
            width: 100%;
            padding: 12px 0;
            color: var(--white-color);
            margin-top: 10px;

            &:first-child {
                background: linear-gradient(180deg, #14ACDB 0%, #1470DB 100%);
            }

            &:last-child {
                background: linear-gradient(0deg, #FF4949, #FF4949);
            }
        }
    }

    .driver-section {
        width: calc(70% - 50px);
        margin: 0 0 0 50px;
        display: flex;
        justify-content: space-between;

        .hide {
            visibility: hidden;
        }

        .line {
            text-align: left;
            font-size: .9rem;

            .label {
                margin-bottom: 5px;
            }

            &:not(:last-child) {
                margin-right: 30px;
            }

            & > div:not(:first-child) {
                margin-top: 25px;
            }
        }
    }
}

.big-font {
    font-size: 1.5rem;
}

.online-status {
    position: absolute;
    top: 20px;
    left: 20px;
    display: flex;
    align-items: center;
    font-size: .8rem;

    .indicator {
        width: 8px;
        height: 8px;
        background: lightgreen;
        border-radius: 50px;
        margin-right: 10px;
    }
}

.bank-documents {
    display: flex;
    justify-content: space-between;
    width: calc(100% - 60px);
    margin: 30px;

    section {
        width: calc(49% - 60px);
        padding: 30px;
        background: var(--white-color);
        box-shadow: $box-shadow;

        h4 {
            margin-top: 0;
        }
    }

    .details {
        & > div {
            display: flex;
            align-items: center;
            margin-top: 20px;

            div:first-child {
                width: 150px;
            }
            // &:first-child {
            //     margin-right: 20px;
            // }
        }
    }
}

.documents {
    .details {
        img {
            width: 5%;
            margin-right: 10px;
        }

        span {
            color: var(--primary-color);
        }

        span, .info {
            font-size: .7rem;
        }

        .info {
            display: flex;
            justify-content: space-between;
            margin-top: 5px;
        }
    }
}

.trips {
    padding-top: 0;
    margin-top: 30px;

    .status {
        .status-icon {
            margin-right: 10px;

            img {
                width: 80%;
            }
        }
    }

    .trip {
        border-left-color: var(--primary-color);
    }

    .trips-search {
        margin: 0 30px;
        align-items: center;
        padding-top: 20px;
        justify-content: space-between;

        h3 {
            color: var(--primary-color);
            margin: 0;
        }
    }
}
</style>
