<template>
    <section class="drivers table">
        <div class="head">
            <button>Add New Passenger</button>

            <div class="search">
                <label for="search">
                    <img src="../../../assets/search.svg" alt="search icon">
                </label>
                <input type="text" placeholder="Search passenger name">
            </div>
        </div>

        <div class="table-head">
            <div>Name</div>
            <div>Mobile Number</div>
            <div>Number of Ride</div>
            <div>Rating</div>
            <div>Date Joined</div>
            <div>Status</div>
        </div>
        <div class="table-body">
            <div @click="openPassenger" class="driver table-item">
                <div class="name">
                    <img src="../../../assets/user.png" alt="user image">
                    <div>Cristabel Ade</div>
                </div>
                <div class="mobile-no">08053524774</div>
                <div class="no-ride">23</div>
                <div class="rating">4.5</div>
                <div class="date">29th, Jun 2017</div>
                <div class="status processing">PROCESSING</div>
            </div>
            <div @click="openPassenger" class="driver table-item">
                <div class="name">
                    <img src="../../../assets/user.png" alt="user image">
                    <div>Cristabel Ade</div>
                </div>
                <div class="mobile-no">08053524774</div>
                <div class="no-ride">19</div>
                <div class="rating">4.0</div>
                <div class="date">29th, Jun 2017</div>
                <div class="status approved">APPROVED</div>
            </div>
            <div @click="openPassenger" class="driver table-item">
                <div class="name">
                    <img src="../../../assets/user.png" alt="user image">
                    <div>Cristabel Ade</div>
                </div>
                <div class="mobile-no">08053524774</div>
                <div class="no-ride">19</div>
                <div class="rating">4.0</div>
                <div class="date">29th, Jun 2017</div>
                <div class="status approved">APPROVED</div>
            </div>
            <div @click="openPassenger" class="driver table-item">
                <div class="name">
                    <img src="../../../assets/user.png" alt="user image">
                    <div>Cristabel Ade</div>
                </div>
                <div class="mobile-no">08053524774</div>
                <div class="no-ride">19</div>
                <div class="rating">4.0</div>
                <div class="date">29th, Jun 2017</div>
                <div class="status approved">APPROVED</div>
            </div>
            <div @click="openPassenger" class="driver table-item">
                <div class="name">
                    <img src="../../../assets/user.png" alt="user image">
                    <div>Cristabel Ade</div>
                </div>
                <div class="mobile-no">08053524774</div>
                <div class="no-ride">19</div>
                <div class="rating">4.0</div>
                <div class="date">29th, Jun 2017</div>
                <div class="status approved">APPROVED</div>
            </div>
            <div @click="openPassenger" class="driver table-item">
                <div class="name">
                    <img src="../../../assets/user.png" alt="user image">
                    <div>Cristabel Ade</div>
                </div>
                <div class="mobile-no">08053524774</div>
                <div class="no-ride">19</div>
                <div class="rating">4.0</div>
                <div class="date">29th, Jun 2017</div>
                <div class="status approved">APPROVED</div>
            </div>
            <div @click="openPassenger" class="driver table-item">
                <div class="name">
                    <img src="../../../assets/user.png" alt="user image">
                    <div>Cristabel Ade</div>
                </div>
                <div class="mobile-no">08053524774</div>
                <div class="no-ride">19</div>
                <div class="rating">4.0</div>
                <div class="date">29th, Jun 2017</div>
                <div class="status approved">APPROVED</div>
            </div>
            <div @click="openPassenger" class="driver table-item">
                <div class="name">
                    <img src="../../../assets/user.png" alt="user image">
                    <div>Cristabel Ade</div>
                </div>
                <div class="mobile-no">08053524774</div>
                <div class="no-ride">19</div>
                <div class="rating">4.0</div>
                <div class="date">29th, Jun 2017</div>
                <div class="status approved">APPROVED</div>
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
</template>

<script>
export default {
    name: 'all-passengers',
    methods: {
        openPassenger () {
            this.$router.push('/passengers/passenger')
        }
    }
}
</script>

<style lang="scss" scoped>
.drivers {
    width: 95%;
    margin: 30px auto;
    background: var(--white-color);
    padding: 20px 0 30px;
}
</style>
