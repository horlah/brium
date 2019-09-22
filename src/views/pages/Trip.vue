<template>
    <section class="trips">
        <div class="tabs">
            <button class="tab active">Active</button>
            <button class="tab">Upcoming</button>
        </div>

        <div class="trips-search">
            <div class="search">
                <label for="search">
                    <img src="../../assets/search.svg" alt="search icon">
                </label>
                <input type="text" placeholder="search name, location, time">
            </div>
        </div>

        <div class="trips-detail">
            <div class="trip">
                <div class="status">
                    <div class="status-icon">
                        <img src="../../assets/directions.svg" alt="direction icon">
                    </div>
                    <div>
                        <div class="label">STATUS</div>
                        <div class="status-title">REQUESTING</div>
                    </div>
                </div>

                <div class="clients">
                    <div class="client driver">
                        <div class="display-picture">
                            <img src="../../assets/user.png" alt="driver display picture">
                        </div>
                        <div class="details">
                            <div class="label">DRIVER</div>
                            <div>John Obinna</div>
                        </div>
                    </div>
                    <div class="client passenger">
                        <div class="display-picture">
                            <img src="../../assets/user.png" alt="driver display picture">
                        </div>
                        <div class="details">
                            <div class="label">PASSENGER</div>
                            <div>John Obinna</div>
                        </div>
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
                        <div class="label">ESTIMATED COST</div>
                        <div class="price">N4,300</div>
                    </div>
                </div>
            </div>

            <div class="trip">
                <div class="status">
                    <div class="status-icon">
                        <img src="../../assets/directions.svg" alt="direction icon">
                    </div>
                    <div>
                        <div class="label">STATUS</div>
                        <div class="status-title">REQUESTING</div>
                    </div>
                </div>

                <div class="clients">
                    <div class="client driver">
                        <div class="display-picture">
                            <img src="../../assets/user.png" alt="driver display picture">
                        </div>
                        <div class="details">
                            <div class="label">DRIVER</div>
                            <div>John Obinna</div>
                        </div>
                    </div>
                    <div class="client passenger">
                        <div class="display-picture">
                            <img src="../../assets/user.png" alt="driver display picture">
                        </div>
                        <div class="details">
                            <div class="label">PASSENGER</div>
                            <div>John Obinna</div>
                        </div>
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
                        <div class="label">ESTIMATED COST</div>
                        <div class="price">N4,300</div>
                    </div>
                </div>
            </div>

            <div class="trip">
                <div class="status">
                    <div class="status-icon">
                        <img src="../../assets/directions.svg" alt="direction icon">
                    </div>
                    <div>
                        <div class="label">STATUS</div>
                        <div class="status-title">REQUESTING</div>
                    </div>
                </div>

                <div class="clients">
                    <div class="client driver">
                        <div class="display-picture">
                            <img src="../../assets/user.png" alt="driver display picture">
                        </div>
                        <div class="details">
                            <div class="label">DRIVER</div>
                            <div>John Obinna</div>
                        </div>
                    </div>
                    <div class="client passenger">
                        <div class="display-picture">
                            <img src="../../assets/user.png" alt="driver display picture">
                        </div>
                        <div class="details">
                            <div class="label">PASSENGER</div>
                            <div>John Obinna</div>
                        </div>
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
                        <div class="label">ESTIMATED COST</div>
                        <div class="price">N4,300</div>
                    </div>
                </div>
            </div>

            <div class="trip">
                <div class="status">
                    <div class="status-icon">
                        <img src="../../assets/directions.svg" alt="direction icon">
                    </div>
                    <div>
                        <div class="label">STATUS</div>
                        <div class="status-title">REQUESTING</div>
                    </div>
                </div>

                <div class="clients">
                    <div class="client driver">
                        <div class="display-picture">
                            <img src="../../assets/user.png" alt="driver display picture">
                        </div>
                        <div class="details">
                            <div class="label">DRIVER</div>
                            <div>John Obinna</div>
                        </div>
                    </div>
                    <div class="client passenger">
                        <div class="display-picture">
                            <img src="../../assets/user.png" alt="driver display picture">
                        </div>
                        <div class="details">
                            <div class="label">PASSENGER</div>
                            <div>John Obinna</div>
                        </div>
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
                        <div class="label">ESTIMATED COST</div>
                        <div class="price">N4,300</div>
                    </div>
                </div>
            </div>

            <div class="trip">
                <div class="status">
                    <div class="status-icon">
                        <img src="../../assets/directions.svg" alt="direction icon">
                    </div>
                    <div>
                        <div class="label">STATUS</div>
                        <div class="status-title">REQUESTING</div>
                    </div>
                </div>

                <div class="clients">
                    <div class="client driver">
                        <div class="display-picture">
                            <img src="../../assets/user.png" alt="driver display picture">
                        </div>
                        <div class="details">
                            <div class="label">DRIVER</div>
                            <div>John Obinna</div>
                        </div>
                    </div>
                    <div class="client passenger">
                        <div class="display-picture">
                            <img src="../../assets/user.png" alt="driver display picture">
                        </div>
                        <div class="details">
                            <div class="label">PASSENGER</div>
                            <div>John Obinna</div>
                        </div>
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
                        <div class="label">ESTIMATED COST</div>
                        <div class="price">N4,300</div>
                    </div>
                </div>
            </div>

            <div class="trip">
                <div class="status">
                    <div class="status-icon">
                        <img src="../../assets/directions.svg" alt="direction icon">
                    </div>
                    <div>
                        <div class="label">STATUS</div>
                        <div class="status-title">REQUESTING</div>
                    </div>
                </div>

                <div class="clients">
                    <div class="client driver">
                        <div class="display-picture">
                            <img src="../../assets/user.png" alt="driver display picture">
                        </div>
                        <div class="details">
                            <div class="label">DRIVER</div>
                            <div>John Obinna</div>
                        </div>
                    </div>
                    <div class="client passenger">
                        <div class="display-picture">
                            <img src="../../assets/user.png" alt="driver display picture">
                        </div>
                        <div class="details">
                            <div class="label">PASSENGER</div>
                            <div>John Obinna</div>
                        </div>
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
                        <div class="label">ESTIMATED COST</div>
                        <div class="price">N4,300</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="pagination">
            <div>
                <img src="../../assets/backward-arrow.svg" alt="previous icon">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div class="active">4</div>
                <div>5</div>
                <div>6</div>
                <img src="../../assets/forward-arrow.svg" alt="next icon">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'trips'
}
</script>

<style scoped lang="scss">
.label {
    color: var(--medium-color);
    font-size: .65rem;
}

div {
    font-size: .8rem
}

.trips {
    width: 95%;
    margin: calc(30px + 25.5px) auto 30px;
    background: var(--white-color);
    padding: 20px 0 30px;
    position: relative;
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
    justify-content: space-evenly;
    align-items: center;
    background: var(--white-color);
    border: 0.75px solid #E0E0E0;
    border-left: 10px solid var(--secondary-color);
    box-sizing: border-box;
    border-radius: 3px;
    padding: 20px 0;
    margin-top: 10px;

    &:first-child {
        margin-top: 20px;
    }

    & > div {
        &:first-child {
            max-width: 80px;
        }
        // border-right: 2px solid #F2F2F2;
    }
}

.trip-details {
    & > div {
        &:first-child {
            &::before {
                height: 32px;
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

.pagination {
    display: flex;
    justify-content: center;
    margin-top: 30px;

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
