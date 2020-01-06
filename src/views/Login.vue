<template>
  <div class="login">
      <nav>
          <div class="logo">
              <a href="#">
                <img src="../assets/blue-logo.png" alt="brium logo">
              </a>
          </div>
      </nav>

      <main>
          <div class="container">
            <h2 class="title">ADMIN</h2>
            <form>
                    <div>
                        <label for="email"></label>
                        <input type="email" name="email" id="email" placeholder="Email" v-model="email">
                    </div>
                    <div>
                        <label for="password"></label>
                        <input type="password" name="password" id="password" placeholder="Password" v-model="password">
                    </div>

                    <button type="submit" class="btn full" v-on:click="login($event)">Login</button>

                    <p class="forgot_password">Forgot your password? <a href="#">Click here</a></p>
            </form>

          </div>
      </main>
  </div>
</template>

<script>
// import { HTTP_REQUEST } from '../services/http-request';
// import { STORE } from '@/services/storage';
// import HTTP_REQUEST from '../mixins/http-request';
// import { HTTP } from '../services/http';
// import axios from 'axios';
import * as firebase from 'firebase';

export default {
    name: 'home',
    data: () => {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        async login(event) {
            event.preventDefault();
            console.log(this.email, this.password);

            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then((res) => {
                    console.log(res);
                    this.$router.push('/dashboard');
                })
                .catch((error) => console.log(error));

            // const loginDetails = {
            //     email: this.email,
            //     password: this.password,
            //     returnSecureToken: true
            // };

            // const httpRequestData = {
            //     body: loginDetails,
            //     url: '/adminLogin',
            //     method: 'POST',
            //     authRequest: false
            // };

            // const loginResponse = await HTTP_REQUEST(httpRequestData);

            // HTTP.post('/adminLogin', loginDetails)
            //     .then(response => console.log(response))
            //     .catch(error => console.log(error));

            // var myHeaders = new Headers();
            // myHeaders.append('Content-Type', 'application/json');
            // myHeaders.append('ENVIRONMENT', 'Staging');

            // var raw = JSON.stringify({ 'email': 'tunde@brium.com', 'password': 'adetula', 'returnSecureToken': true });

            // var requestOptions = {
            //     method: 'POST',
            //     headers: myHeaders,
            //     body: raw,
            //     redirect: 'follow'
            // };

            // fetch('https://us-central1-briumapp.cloudfunctions.net/adminLogin', requestOptions)
            //     .then(response => response.text())
            //     .then(result => console.log(result))
            //     .catch(error => console.log('error', error));
            // console.log(loginResponse);
            // const userToken = loginResponse.data.token;
            // this.$router.push('/dashboard');
        },
        testLogin(event) {
            event.preventDefault();

            firebase.auth()
                .createUserWithEmailAndPassword('this.form.email', 'this.form.password')
                .then((res) => console.log)
                .catch((error) => console.log(error));

            // const loginDetails = {
            //     email: this.email,
            //     password: this.password,
            //     returnSecureToken: true
            // };
            // axios.post('https://us-central1-briumapp.cloudfunctions.net/adminLogin', loginDetails, {
            //     ENVIRONMENT: 'Staging'
            // }).then(response => console.log(response));
        }
    }
};

</script>

<style scoped lang="scss">
    .login {
        background: url(../assets/login-bg.png);
        height: 100vh;
        margin: 40px 0 0 60px;
    }

    main {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        .container {
            width: 30%;
            background: #fff;
            text-align: center;
            padding: 60px 0;
        }
    }

    .title {
        color: #FBB837;
        font-style: normal;
        font-weight: 900;
        font-size: 30px;
        line-height: 45px;
        letter-spacing: -0.3px;
        margin-top: 0;
    }

    form {
        width: 80%;
        margin: auto;

        & > div {
            margin-bottom: 40px;

            input {
                background: #FFFFFF;
                border: 2px solid #D7D6D6;
                outline: none;
                box-sizing: border-box;
                box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.09);
                border-radius: 5px;
                padding: 17px;
                font-size: .9rem;
                width: 100%;
                transition: all .5s;

                &:focus {
                    border-color: #1470DB
                }
            }
        }
    }

    .btn {
        padding: 15px 60px;
        background: #FBB837;
        color: #fff;
        font-size: 1rem;

        &.full {
            width: 100%;
        }
    }

    .forgot_password {
        color: #9A9A9A;
        text-align: left;
        padding-top: 5px;
        font-size: .8rem;

        a {
            color: #0A66D1;
        }
    }
</style>
