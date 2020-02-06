<template>
    <div class="reports">
        <section class="big-chart">
            <div class="header">
                <div class="title">
                    <div class="big-text">Promo/Fress Rides</div>
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

        <section class="table">
            <div class="head">
                <div class="table-total">
                    <div v-show="activeTab === 'total' || 'referrals' || 'driver-payment' || 'payment-report'">
                        <div class="label">TOTAL</div>
                        <div>N 600,000</div>
                    </div>
                    <div v-show="activeTab === 'referrals' || 'driver-payment' || 'payment-report'">
                        <div class="label">TOTAL AMOUNT SPENT</div>
                        <div>N 120,000</div>
                    </div>
                </div>
                <div class="search">
                    <label for="search">
                        <img src="../../assets/search.svg" alt="search icon">
                    </label>
                    <input type="text" placeholder="Search passenger name">
                </div>
            </div>

            <div class="tabs">
                <button class="tab" v-bind:class="{active: activeTab === 'payment-report'}" @click="switchTabs('payment-report')">PAYMENT REPORT</button>
                <button class="tab" v-bind:class="{active: activeTab === 'driver-payment'}" @click="switchTabs('driver-payment')">DRIVER PAYMENT</button>
                <button class="tab" v-bind:class="{active: activeTab === 'referrals'}" @click="switchTabs('referrals')">REFERRALS</button>
                <button class="tab" v-bind:class="{active: activeTab === 'acceptance'}" @click="switchTabs('acceptance')">RIDE ACCEPTANCE</button>
                <button class="tab" v-bind:class="{active: activeTab === 'total'}" @click="switchTabs('total')">TOTAL EARNINGS</button>
                <button class="tab" v-bind:class="{active: activeTab === 'cancelled'}" @click="switchTabs('cancelled')">CANCELLED TRIPS</button>
                <button class="tab" v-bind:class="{active: activeTab === 'promo'}" @click="switchTabs('promo')">PROMO/FREE RIDES</button>
            </div>

            <div id="promo" v-show="activeTab === 'promo'">
                <div class="table-head">
                    <div>Name</div>
                    <div>Mobile Number</div>
                    <div>Number of Ride</div>
                    <div>Rating</div>
                    <div>Date Joined</div>
                    <div>Status</div>
                </div>
                <div class="table-body">
                    <div class="driver table-item">
                        <div class="name">
                            <img src="../../assets/user.png" alt="user image">
                            <div>Cristabel Ade</div>
                        </div>
                        <div class="mobile-no">08053524774</div>
                        <div class="no-ride">23</div>
                        <div class="rating">4.5</div>
                        <div class="date">29th, Jun 2017</div>
                        <div class="status processing">PROCESSING</div>
                    </div>
                    <div class="driver table-item">
                        <div class="name">
                            <img src="../../assets/user.png" alt="user image">
                            <div>Cristabel Ade</div>
                        </div>
                        <div class="mobile-no">08053524774</div>
                        <div class="no-ride">19</div>
                        <div class="rating">4.0</div>
                        <div class="date">29th, Jun 2017</div>
                        <div class="status approved">APPROVED</div>
                    </div>
                    <div class="driver table-item">
                        <div class="name">
                            <img src="../../assets/user.png" alt="user image">
                            <div>Cristabel Ade</div>
                        </div>
                        <div class="mobile-no">08053524774</div>
                        <div class="no-ride">19</div>
                        <div class="rating">4.0</div>
                        <div class="date">29th, Jun 2017</div>
                        <div class="status approved">APPROVED</div>
                    </div>
                    <div class="driver table-item">
                        <div class="name">
                            <img src="../../assets/user.png" alt="user image">
                            <div>Cristabel Ade</div>
                        </div>
                        <div class="mobile-no">08053524774</div>
                        <div class="no-ride">19</div>
                        <div class="rating">4.0</div>
                        <div class="date">29th, Jun 2017</div>
                        <div class="status approved">APPROVED</div>
                    </div>
                    <div class="driver table-item">
                        <div class="name">
                            <img src="../../assets/user.png" alt="user image">
                            <div>Cristabel Ade</div>
                        </div>
                        <div class="mobile-no">08053524774</div>
                        <div class="no-ride">19</div>
                        <div class="rating">4.0</div>
                        <div class="date">29th, Jun 2017</div>
                        <div class="status approved">APPROVED</div>
                    </div>
                </div>
            </div>

            <div class="trips" v-show="activeTab === 'cancelled'">
                <div class="trip">
                    <div class="status">
                        <div class="status-icon">
                            <img src="../../assets/refresh.svg" alt="direction icon">
                        </div>
                        <div>
                            <div class="label">STATUS</div>
                            <div class="status-title">Driver <br> Cancelled</div>
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

                <div class="trip requesting">
                    <div class="status">
                        <div class="status-icon">
                            <img src="../../assets/directions.svg" alt="direction icon">
                        </div>
                        <div>
                            <div class="label">STATUS</div>
                            <div class="status-title">Driver <br> Cancelled</div>
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

                <div class="trip requesting">
                    <div class="status">
                        <div class="status-icon">
                            <img src="../../assets/directions.svg" alt="direction icon">
                        </div>
                        <div>
                            <div class="label">STATUS</div>
                            <div class="status-title">Driver <br> Cancelled</div>
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

                <div class="trip requesting">
                    <div class="status">
                        <div class="status-icon">
                            <img src="../../assets/directions.svg" alt="direction icon">
                        </div>
                        <div>
                            <div class="label">STATUS</div>
                            <div class="status-title">Driver <br> Cancelled</div>
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

            <div class="trips" v-show="activeTab === 'total'">
                <div class="trip">
                    <div class="status">
                        <div class="status-icon">
                            <img src="../../assets/refresh.svg" alt="direction icon">
                        </div>
                        <div>
                            <div class="label">STATUS</div>
                            <div class="status-title">FINISHED</div>
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

                <div class="trip requesting">
                    <div class="status">
                        <div class="status-icon">
                            <img src="../../assets/directions.svg" alt="direction icon">
                        </div>
                        <div>
                            <div class="label">STATUS</div>
                            <div class="status-title">FINISHED</div>
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

                <div class="trip requesting">
                    <div class="status">
                        <div class="status-icon">
                            <img src="../../assets/directions.svg" alt="direction icon">
                        </div>
                        <div>
                            <div class="label">STATUS</div>
                            <div class="status-title">FINISHED</div>
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

                <div class="trip requesting">
                    <div class="status">
                        <div class="status-icon">
                            <img src="../../assets/directions.svg" alt="direction icon">
                        </div>
                        <div>
                            <div class="label">STATUS</div>
                            <div class="status-title">FINISHED</div>
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

            <div class="trips" v-show="activeTab === 'acceptance'">
                <div class="trip">
                    <div class="status">
                        <div class="status-icon">
                            <img src="../../assets/refresh.svg" alt="direction icon">
                        </div>
                        <div>
                            <div class="label">STATUS</div>
                            <div class="status-title">Driver <br> Accepted</div>
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

                <div class="trip requesting">
                    <div class="status">
                        <div class="status-icon">
                            <img src="../../assets/directions.svg" alt="direction icon">
                        </div>
                        <div>
                            <div class="label">STATUS</div>
                            <div class="status-title">Driver <br> Accepted</div>
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

                <div class="trip requesting">
                    <div class="status">
                        <div class="status-icon">
                            <img src="../../assets/directions.svg" alt="direction icon">
                        </div>
                        <div>
                            <div class="label">STATUS</div>
                            <div class="status-title">Driver <br> Accepted</div>
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

                <div class="trip requesting">
                    <div class="status">
                        <div class="status-icon">
                            <img src="../../assets/directions.svg" alt="direction icon">
                        </div>
                        <div>
                            <div class="label">STATUS</div>
                            <div class="status-title">Driver <br> Accepted</div>
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

            <div class="trips" v-show="activeTab === 'referrals'">
                <div class="table-head">
                    <div>Driver/Passenger</div>
                    <div>Number Referred</div>
                    <div>Amount Earned</div>
                    <div>Amount Spent</div>
                    <div>Expiration Date</div>
                    <div>Status</div>
                </div>

                <div class="table-body">
                    <div class="driver table-item">
                        <div class="name">
                            <img src="../../assets/user.png" alt="user image">
                            <div>Cristabel Ade</div>
                        </div>
                        <div class="mobile-no">20 People</div>
                        <div class="no-ride">50,000</div>
                        <div class="rating">40,000</div>
                        <div class="date">29th, Jun 2017</div>
                        <div class="status processing">ONGOING</div>
                    </div>
                    <div class="driver table-item">
                        <div class="name">
                            <img src="../../assets/user.png" alt="user image">
                            <div>Cristabel Ade</div>
                        </div>
                        <div class="mobile-no">20 People</div>
                        <div class="no-ride">50,000</div>
                        <div class="rating">40,000</div>
                        <div class="date">29th, Jun 2017</div>
                        <div class="status processing">ONGOING</div>
                    </div>
                    <div class="driver table-item">
                        <div class="name">
                            <img src="../../assets/user.png" alt="user image">
                            <div>Cristabel Ade</div>
                        </div>
                        <div class="mobile-no">20 People</div>
                        <div class="no-ride">50,000</div>
                        <div class="rating">40,000</div>
                        <div class="date">29th, Jun 2017</div>
                        <div class="status processing">ONGOING</div>
                    </div>
                    <div class="driver table-item">
                        <div class="name">
                            <img src="../../assets/user.png" alt="user image">
                            <div>Cristabel Ade</div>
                        </div>
                        <div class="mobile-no">20 People</div>
                        <div class="no-ride">50,000</div>
                        <div class="rating">40,000</div>
                        <div class="date">29th, Jun 2017</div>
                        <div class="status processing">ONGOING</div>
                    </div>
                    <div class="driver table-item">
                        <div class="name">
                            <img src="../../assets/user.png" alt="user image">
                            <div>Cristabel Ade</div>
                        </div>
                        <div class="mobile-no">20 People</div>
                        <div class="no-ride">50,000</div>
                        <div class="rating">40,000</div>
                        <div class="date">29th, Jun 2017</div>
                        <div class="status processing">ONGOING</div>
                    </div>
                </div>
            </div>

            <div class="trips" v-show="activeTab === 'driver-payment'">
                <div class="table-head">
                    <div>Driver Name</div>
                    <div>Payout</div>
                    <div>Recieved</div>
                    <div>Bonus</div>
                    <div>Total</div>
                    <div>Status</div>
                </div>

                <div class="table-body">
                    <div class="driver table-item">
                        <div class="name">
                            <img src="../../assets/user.png" alt="user image">
                            <div>Cristabel Ade</div>
                        </div>
                        <div class="mobile-no">20,000</div>
                        <div class="no-ride">30,000 <span class="label">(cash)</span></div>
                        <div class="rating">40,000</div>
                        <div class="date">90,000</div>
                        <div class="status processing">ONGOING</div>
                    </div>
                    <div class="driver table-item">
                        <div class="name">
                            <img src="../../assets/user.png" alt="user image">
                            <div>Cristabel Ade</div>
                        </div>
                        <div class="mobile-no">20,000</div>
                        <div class="no-ride">30,000 <span class="label">(cash)</span></div>
                        <div class="rating">40,000</div>
                        <div class="date">90,000</div>
                        <div class="status processing">ONGOING</div>
                    </div>
                    <div class="driver table-item">
                        <div class="name">
                            <img src="../../assets/user.png" alt="user image">
                            <div>Cristabel Ade</div>
                        </div>
                        <div class="mobile-no">20,000</div>
                        <div class="no-ride">30,000 <span class="label">(cash)</span></div>
                        <div class="rating">40,000</div>
                        <div class="date">90,000</div>
                        <div class="status processing">ONGOING</div>
                    </div>
                    <div class="driver table-item">
                        <div class="name">
                            <img src="../../assets/user.png" alt="user image">
                            <div>Cristabel Ade</div>
                        </div>
                        <div class="mobile-no">20,000</div>
                        <div class="no-ride">30,000 <span class="label">(cash)</span></div>
                        <div class="rating">40,000</div>
                        <div class="date">90,000</div>
                        <div class="status processing">ONGOING</div>
                    </div>
                    <div class="driver table-item">
                        <div class="name">
                            <img src="../../assets/user.png" alt="user image">
                            <div>Cristabel Ade</div>
                        </div>
                        <div class="mobile-no">20,000</div>
                        <div class="no-ride">30,000 <span class="label">(cash)</span></div>
                        <div class="rating">40,000</div>
                        <div class="date">90,000</div>
                        <div class="status processing">ONGOING</div>
                    </div>
                </div>
            </div>

            <div class="trips" v-show="activeTab === 'payment-report'">
                <div class="trip">
                    <div class="status">
                        <div class="status-icon">
                            <img src="../../assets/refresh.svg" alt="direction icon">
                        </div>
                        <div>
                            <div class="label">STATUS</div>
                            <div class="status-title">FINISHED</div>
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

                <div class="trip requesting">
                    <div class="status">
                        <div class="status-icon">
                            <img src="../../assets/directions.svg" alt="direction icon">
                        </div>
                        <div>
                            <div class="label">STATUS</div>
                            <div class="status-title">FINISHED</div>
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

                <div class="trip requesting">
                    <div class="status">
                        <div class="status-icon">
                            <img src="../../assets/directions.svg" alt="direction icon">
                        </div>
                        <div>
                            <div class="label">STATUS</div>
                            <div class="status-title">FINISHED</div>
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

                <div class="trip requesting">
                    <div class="status">
                        <div class="status-icon">
                            <img src="../../assets/directions.svg" alt="direction icon">
                        </div>
                        <div>
                            <div class="label">STATUS</div>
                            <div class="status-title">FINISHED</div>
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
    </div>
</template>

<script>
export default {
    name: 'trips',
    data: () => {
        return {
            activeTab: 'promo'
        };
    },
    methods: {
        switchTabs(activeTab) {
            this.activeTab = activeTab;
        }
    }
};
</script>

<style lang="scss" scoped>
.table {
    width: 95%;
    margin: 30px auto;
    background: var(--white-color);
    padding: 20px 0 30px;

    .head {
        // justify-content: flex-end;
        align-items: center;
    }

    .tabs {
        display: flex;
        width: 100%;
        margin-top: 20px;

        .tab {
            border: 1px solid var(--border-color);
            width: 100%;
            font-size: .8rem;
            text-align: center;
            padding: 15px 0;
            color: var(--primary-color);

            &.active {
                background: var(--primary-color);
                color: var(--white-color);
            }
        }
    }
}

.table-total {
    display: flex;

    & > div:last-child {
        margin-left: 50px;
    }
}

button {
    outline: none;
}

.trips {
    margin: 0;
    width: 100%;
    padding-top: 0;
}
</style>
