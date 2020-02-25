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
                <form v-on:submit.prevent="requestPermission">
                    <div>
                        <div class="inputs">
                            <div class="input">
                                <label for="permissionName">Permission Name</label>
                                <input type="text" v-model="permission.name" id="permissionName" name="permission name" required>
                            </div>

                            <div class="input">
                                <label for="admin">Admin</label>
                                <input type="checkbox" v-model="permission.admin" id="admin" name="admin">
                            </div>

                            <hr>

                            <div class="input">
                                <label for="dashboard">Dashboard</label>
                                <input type="checkbox" v-model="permission.dashboard" id="dashboard" name="dashboard">
                            </div>

                            <hr>

                            <div class="input">
                                <label for="trips">Trips</label>
                                <input type="checkbox" v-model="permission.trips" id="trips" name="trips">
                            </div>

                            <hr>

                            <div class="input">
                                <label for="drivers">Drivers</label>
                                <input type="checkbox" v-model="permission.drivers" id="drivers" name="drivers">
                            </div>

                            <hr>

                            <div class="input">
                                <label for="passengers">Passengers</label>
                                <input type="checkbox" v-model="permission.passengers" id="passengers" name="passengers">
                            </div>

                            <hr>
                        </div>

                        <div class="inputs">
                            <div class="input">
                                <label for="vehicles">Vehicles</label>
                                <input type="checkbox" v-model="permission.vehicles" id="vehicles" name="vehicles">
                            </div>

                            <hr>

                            <div class="input">
                                <label for="reports">Reports</label>
                                <input type="checkbox" v-model="permission.reports" id="reports" name="reports">
                            </div>

                            <hr>

                            <div class="input">
                                <label for="manualDispatch">Manual Dispatch</label>
                                <input type="checkbox" v-model="permission.manualDispatch" id="manualDispatch" name="manual Dispatch">
                            </div>

                            <hr>

                            <div class="input">
                                <label for="transaction">Transaction</label>
                                <input type="checkbox" v-model="permission.transaction" id="transaction" name="transaction">
                            </div>

                            <hr>

                            <div class="input">
                                <label for="priceManagement">Price Management</label>
                                <input type="checkbox" v-model="permission.priceManagement" id="priceManagement" name="priceManagement">
                            </div>

                            <hr>

                            <div class="input">
                                <label for="settings">Settings</label>
                                <input type="checkbox" v-model="permission.settings" id="settings" name="settings">
                            </div>

                            <hr>
                        </div>
                    </div>

                    <div class="button">
                        <button>{{ setLoader('REQUEST A PERMISSION') }}</button>
                    </div>
                </form>
            </div>

            <div class="promo" v-show="activeTab === 'promo'">
                <form v-on:submit.prevent="requestPermission">    <div class="inputs">
                    <div class="input">
                        <label for="EventCampaignName">Event/Campaign Name</label>
                        <input type="text" id="EventCampaignName" name="Event/Campaign Name">
                    </div>

                    <div class="input">
                        <label for="numberOfUsers">Number of users</label>
                        <input type="number" id="numberOfUsers" name="number of users">
                    </div>

                    <div class="input">
                        <label for="expiryDate">Expiry Date</label>
                        <input type="date" id="expiryDate" name="expiry date">
                    </div>

                    <div class="input">
                        <label for="numberOfRides">Number of Rides</label>
                        <input type="number" id="numberOfRides" name="number of rides">
                    </div>

                    <button>REQUEST A PERMISSION</button>
                </div>
                </form>

            </div>

            <div class="promo invite-admin" v-show="activeTab === 'invite-admin'">
                <div class="inputs">
                    <form v-on:submit.prevent="inviteUser">
                        <div class="input">
                            <label for="fullName">First Name</label>
                            <input type="text" id="firstName" v-model="adminUser.firstName" name="first name">
                        </div>

                        <div class="input">
                            <label for="lastName">Last Name</label>
                            <input type="text" id="lastName" v-model="adminUser.lastName" name="last name">
                        </div>

                        <div class="input">
                            <label for="email">Email Address</label>
                            <input type="email" id="email" v-model="adminUser.email" name="email">
                        </div>

                        <div class="input">
                            <label for="assignModules">Assign Modules</label>
                            <select name="role" id="role" v-model="adminUser.roleId">
                                <option :value="role.id" v-for="(role, index) in roles" :key="index">{{ role.name }}</option>
                            </select>
                        </div>

                        <button>INVITE</button>
                    </form>
                </div>
            </div>
        </div>
        <Loader v-if="showLoader" />
    </section>
</template>

<script>
import { HTTP_AUTH } from '../../services/http';
import Loader from '@/components/Loader.vue';

export default {
    components: {
        Loader
    },
    data: () => {
        return {
            activeTab: 'permissions',
            permission: {
                name: '',
                admin: false,
                dahsboard: false,
                trips: false,
                drivers: false,
                passengers: false,
                vehicles: false,
                reports: false,
                manualDispatch: false,
                transaction: false,
                priceManagement: false,
                settings: false
            },
            Promo: {
                campaignName: '',
                numOfUsers: '',
                expiryDate: '',
                numberOfRides: ''
            },
            roles: [],
            adminUser: {
                firstName: '',
                lastName: '',
                email: '',
                password: 'secret',
                roleId: ''
            },
            showLoader: false
        };
    },
    methods: {
        switchTabs(activeTab) {
            this.activeTab = activeTab;

            if (this.activeTab === 'invite-admin') this.getRoles();
        },
        async getRoles() {
            this.showLoader = true;

            try {
                const response = await HTTP_AUTH.get('/fetcAdminRoles');
                this.roles = response.data.roles;
                this.showLoader = false;
            } catch (error) {
                this.showLoader = false;
            }
        },
        async requestPermission() {
            this.showLoader = true;

            try {
                const response = await HTTP_AUTH.post('/addAdminRole', this.permission);
                alert(`New ${this.permission.name} Permission has been created`);
                this.resetPermissions();
                this.roles = response.data.roles;
                this.showLoader = false;
            } catch (error) {
                this.showLoader = false;
            }
        },
        async inviteUser() {
            this.showLoader = true;

            try {
                await HTTP_AUTH.post('/addAdminUser', this.adminUser);
                this.showLoader = false;
            } catch (error) {
                this.showLoader = false;
            }
        },
        setLoader(buttonText) {
            return buttonText || '...';
        },
        requestPromo() {
            this.setLoader(false);
            HTTP_AUTH.post('/Promo', this.permission)
                .then((response) => {
                    alert(`New ${this.permission.name} Permission has been created`);
                    this.permission = {
                        name: '',
                        admin: false,
                        dahsboard: false,
                        trips: false,
                        drivers: false,
                        passengers: false,
                        vehicles: false,
                        reports: false,
                        manualDispatch: false,
                        transaction: false,
                        priceManagement: false,
                        settings: false
                    };
                    this.setLoader('REQUEST A PERMISSION');
                })
                .catch((error) => console.log(error));
        },
        resetPermissions() {
            this.permission = {
                name: '',
                admin: false,
                dahsboard: false,
                trips: false,
                drivers: false,
                passengers: false,
                vehicles: false,
                reports: false,
                manualDispatch: false,
                transaction: false,
                priceManagement: false,
                settings: false
            };
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

    select {
        height: 31px;
        background: transparent;
    }
}

.change-password {
    display: flex;

    button {
        margin-left: 7px;
        color: var(--primary-color);
    }
}

.permissions {
    form > div{
        display: flex;
        position: relative;
        flex-wrap: wrap;
        width: 100%;

        div {
            width: 50%;
        }
    }

    .button {
        text-align: center;
        width: 100%;
        position: relative;
        margin-top: 25px;

        button {
            position: absolute;
            left: 200px;
        }
    }

    input[type= checkbox] {
        margin-left: 20%;
    }

    input[type= text] {
        width: 80%;
    }

    hr {
        border: 1px solid #eee;
        margin-left: -150px;
        width: 76%;
    }

    label {
        margin-top: 4px;
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

    select {
        width: calc(100% + 14px);
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
