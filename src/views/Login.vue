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
                        <label for="username"></label>
                        <input type="text" name="username" id="username" placeholder="Username">
                    </div>
                    <div>
                        <label for="password"></label>
                        <input type="password" name="password" id="password" placeholder="Password">
                    </div>

                    <button type="submit" class="btn full" v-on:click="goToDashboard($event)">Login</button>

                    <p class="forgot_password">Forgot your password? <a href="#">Click here</a></p>
            </form>

          </div>
      </main>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Router from 'vue-router';

export default {
    name: 'home',
    methods: {
        goToDashboard(event) {
            event.preventDefault();
            this.$router.push('/dashboard');
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
