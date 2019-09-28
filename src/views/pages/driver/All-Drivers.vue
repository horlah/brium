<template>
    <section class="drivers table">
        <div class="head">
            <button>Add New Driver</button>

            <div class="search">
                <label for="search">
                    <img src="../../../assets/search.svg" alt="search icon">
                </label>
                <input type="text" placeholder="Search driver name">
            </div>
        </div>

        <div class="table-head">
            <div>Name</div>
            <div>Mobile Number</div>
            <div>Current Car</div>
            <div>Rating</div>
            <div>Date</div>
            <div>Status</div>
        </div>
        <div class="table-body">
            <div @click="openDriver" class="driver table-item">
                <div class="name">
                    <img src="../../../assets/user.png" alt="user image">
                    <div>Cristabel Ade</div>
                </div>
                <div class="mobile-no">08053524774</div>
                <div class="current-car">Toyota Camry</div>
                <div class="rating">4.5</div>
                <div class="date">29th, Jun 2017</div>
                <div class="status processing">PROCESSING</div>
            </div>
            <div @click="openDriver" class="driver table-item">
                <div class="name">
                    <img src="../../../assets/user.png" alt="user image">
                    <div>Cristabel Ade</div>
                </div>
                <div class="mobile-no">08053524774</div>
                <div class="current-car">Toyota Camry</div>
                <div class="rating">4.5</div>
                <div class="date">29th, Jun 2017</div>
                <div class="status approved">APPROVED</div>
            </div>
            <div @click="openDriver" class="driver table-item">
                <div class="name">
                    <img src="../../../assets/user.png" alt="user image">
                    <div>Cristabel Ade</div>
                </div>
                <div class="mobile-no">08053524774</div>
                <div class="current-car">Toyota Camry</div>
                <div class="rating">4.5</div>
                <div class="date">29th, Jun 2017</div>
                <div class="status approved">APPROVED</div>
            </div>
            <div @click="openDriver" class="driver table-item">
                <div class="name">
                    <img src="../../../assets/user.png" alt="user image">
                    <div>Cristabel Ade</div>
                </div>
                <div class="mobile-no">08053524774</div>
                <div class="current-car">Toyota Camry</div>
                <div class="rating">4.5</div>
                <div class="date">29th, Jun 2017</div>
                <div class="status approved">APPROVED</div>
            </div>
            <div @click="openDriver" class="driver table-item">
                <div class="name">
                    <img src="../../../assets/user.png" alt="user image">
                    <div>Cristabel Ade</div>
                </div>
                <div class="mobile-no">08053524774</div>
                <div class="current-car">Toyota Camry</div>
                <div class="rating">4.5</div>
                <div class="date">29th, Jun 2017</div>
                <div class="status approved">APPROVED</div>
            </div>
            <div @click="openDriver" class="driver table-item">
                <div class="name">
                    <img src="../../../assets/user.png" alt="user image">
                    <div>Cristabel Ade</div>
                </div>
                <div class="mobile-no">08053524774</div>
                <div class="current-car">Toyota Camry</div>
                <div class="rating">4.5</div>
                <div class="date">29th, Jun 2017</div>
                <div class="status approved">APPROVED</div>
            </div>
            <div @click="openDriver" class="driver table-item">
                <div class="name">
                    <img src="../../../assets/user.png" alt="user image">
                    <div>Cristabel Ade</div>
                </div>
                <div class="mobile-no">08053524774</div>
                <div class="current-car">Toyota Camry</div>
                <div class="rating">4.5</div>
                <div class="date">29th, Jun 2017</div>
                <div class="status approved">APPROVED</div>
            </div>
            <div @click="openDriver" class="driver table-item">
                <div class="name">
                    <img src="../../../assets/user.png" alt="user image">
                    <div>Cristabel Ade</div>
                </div>
                <div class="mobile-no">08053524774</div>
                <div class="current-car">Toyota Camry</div>
                <div class="rating">4.5</div>
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
    name: 'all-drivers',
    methods: {
        openDriver () {
            this.$router.push('/drivers/driver')
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
