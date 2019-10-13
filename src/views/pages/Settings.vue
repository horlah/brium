<template>
    <section class="settings">
        <div class="tabs">
            <button class="tab" v-bind:class="{active: activeTab === 'account'}" @click="switchTabs('account')">ACCOUNT</button>
            <button class="tab" v-bind:class="{active: activeTab === 'permissions'}" @click="switchTabs('permissions')">PERMISSIONS</button>
            <button class="tab" v-bind:class="{active: activeTab === 'promo'}" @click="switchTabs('promo')">GENERATE PROMO CODES</button>
            <button class="tab" v-bind:class="{active: activeTab === 'invite-admin'}" @click="switchTabs('invite-admin')">INVITE A NEW ADMINISTRATOR</button>
        </div>

        <div class="container">
            <div class="account" v-show="activeTab === 'account'">
                <div class="display-picture">
                    <div class="picture">
                        <img src="../../assets/user.png" alt="user dp">
                    </div>
                    <div class="change-picture">
                        <select name="upload picture" id="upload-picturw">
                            <option value="Change photo" disabled selected>Change photo</option>
                        </select>
                    </div>
                </div>

                <div class="inputs">
                    <div class="input">
                        <label for="userName">Username</label>
                        <input type="text" id="username" name="username">
                    </div>

                    <div class="input">
                        <label for="fullName">Full Name</label>
                        <input type="text" id="fullName" name="full name">
                    </div>

                    <div class="input">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email">
                    </div>

                    <div class="input">
                        <label for="password">Password</label>
                        <div class="change-password">
                            <div class="label">Last changed 3months ago</div>
                            <button>Change Password</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="permissions" v-show="activeTab === 'permissions'">
                <div class="inputs">
                    <div class="input">
                        <label for="dashboard">Dashboard</label>
                        <select name="dashboard" id="dashboard">
                            <option value="Enabled" disabled selected>Enabled</option>
                        </select>
                    </div>

                    <div class="input">
                        <label for="fullName">Trips</label>
                        <input type="text" id="fullName" name="full name">
                    </div>

                    <div class="input">
                        <label for="email">Drivers</label>
                        <input type="email" id="email" name="email">
                    </div>

                    <div class="input">
                        <label for="email">Passengers</label>
                        <input type="email" id="email" name="email">
                    </div>

                    <div class="input">
                        <label for="email">Vehicles</label>
                        <input type="email" id="email" name="email">
                    </div>

                    <div class="input">
                        <label for="email">Reports</label>
                        <input type="email" id="email" name="email">
                    </div>
                </div>

                <div class="inputs">
                    <div class="input">
                        <label for="fullName">Manual Dispatch</label>
                        <input type="text" id="fullName" name="full name">
                    </div>

                    <div class="input">
                        <label for="email">Transaction</label>
                        <input type="email" id="email" name="email">
                    </div>

                    <div class="input">
                        <label for="email">Price Management</label>
                        <input type="email" id="email" name="email">
                    </div>

                    <div class="input">
                        <label for="email">Settings</label>
                        <input type="email" id="email" name="email">
                    </div>
                </div>

                <button>REQUEST A PERMISSION</button>
            </div>

            <div class="promo" v-show="activeTab === 'promo'">
                <div class="inputs">
                    <div class="input">
                        <label for="fullName">Event/Campaign Name</label>
                        <input type="text" id="fullName" name="full name">
                    </div>

                    <div class="input">
                        <label for="email">Number of users</label>
                        <input type="email" id="email" name="email">
                    </div>

                    <div class="input">
                        <label for="email">Expiry Date</label>
                        <input type="email" id="email" name="email">
                    </div>

                    <div class="input">
                        <label for="email">Number of Rides</label>
                        <input type="email" id="email" name="email">
                    </div>

                    <button>REQUEST A PERMISSION</button>
                </div>
            </div>

            <div class="promo invite-admin" v-show="activeTab === 'invite-admin'">
                <div class="inputs">
                    <div class="input">
                        <label for="fullName">First Name</label>
                        <input type="text" id="fullName" name="full name">
                    </div>

                    <div class="input">
                        <label for="email">Last Name</label>
                        <input type="email" id="email" name="email">
                    </div>

                    <div class="input">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" name="email">
                    </div>

                    <div class="input">
                        <label for="email">Assign Modules</label>
                        <input type="email" id="email" name="email">
                    </div>

                    <button>INVITE</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
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
.settings {
    width: 95%;
    margin: 30px auto;
}

.tabs {
    display: flex;

    .tab {
        padding: 20px 30px;
        font-size: .8rem;
        background: transparent;

        &.active {
            background: var(--white-color);
        }
    }
}

.container {
    background: var(--white-color);

    & > div {
        padding: 40px 0 70px 200px;

        &:not(.account) {
            button {
                color: var(--white-color);
                background: linear-gradient(180deg, #14ACDB 0%, #1470DB 100%);
                border-radius: 3px;
                padding: 13px 0;
                width: 200px;
            }
        }
    }

}

.account {
    padding-top: 70px !important;
}

.display-picture {
    display: flex;
    align-items: center;

    select {
        margin-left: 20px;
        padding: 20px;
    }
}

.inputs {
    margin-top: 20px;

    .input {
        position: relative;
        margin-top: 30px;
    }

    label {
        position: absolute;
        left: -130px;
        font-size: .7rem;
        font-weight: bolder;
    }

    input, select {
        padding: 7px;
        width: 40%;
    }

    // select {
    //     width: 20%;
    // }
}

.change-password {
    display: flex;

    button {
        margin-left: 7px;
        color: var(--primary-color);
    }
}

.permissions {
    display: flex;
    position: relative;

    div {
        width: 100%;
    }

    button {
        position: absolute;
        bottom: 70px;
        right: 100px;
    }
}

.promo {
    width: 80%;
    display: flex;
    justify-content: center;
    padding-left: 0 !important;
    margin: auto;

    input {
        width: 100%;
    }

    .inputs {
        width: 40%;
        margin-left: 80px;

        label {
            left: -150px;
        }
    }

    button {
        margin-top: 40px;
    }
}
</style>
