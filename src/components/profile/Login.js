import { Component } from 'preact'
import firebase from 'firebase'
//const SignupModal = () => import("./Signup")
//const VerificationModal = () => import("./Verification")

firebase.auth().languageCode = 'en';

export default class Login extends Component{
    constructor(){
        super();
        this.state = {
            isLoading:false,
            creds:{
                email:'',
                password:''
            }
        }
    }

    componentWillMount(){
        this.setState({mobile_number:'',password:'',isLoading:false});
    }

    openSignupModal(){
        this.$parent.close();
        this.$modal.open({
            parent:this,
            component:SignupModal
        })
    }
    onSignInSubmit(){
        alert('onSignInSubmit')
    }
    async logout(){
        lsSet('user',null);
        lsSet('transactions',null)
        return firebase.auth().signOut()
    }
    async login(){
        await (this.logout());
        if(this.creds.email!='' && this.creds.password!=''){
            this.isLoading = true;

            firebase.auth().signInWithEmailAndPassword(this.creds.email, this.creds.password).catch(error=> {
                this.isLoading = false;
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log('errorCode',errorCode);
                console.log('errorMessage',errorMessage);
                if(errorCode=="auth/user-not-found"){
                    this.showError("Invalid email and password combination.")
                }
                else if(errorMessage=="The password is invalid or the user does not have a password."){
                    this.showError("Invalid email and password combination. Try again.");
                }else{
                    this.showError("Something must have gone wrong, please try again.");
                }
            }).then(async ()=>{
                var user = firebase.auth().currentUser;
                if(user){
                    this.isLoading = false;
                    this.$store.commit('loggedIn',true);
                    this.$store.commit('user',user);
                    lsSet('user',user)
                    this.showSuccess(`Welcome back ${user.displayName}!`);
                    this.$parent.close();

                    let db = this.$store.getters.db;
                    let userTransactions = await db.collection('users').doc(user.uid).get();
                    alert(JSON.stringify(userTransactions))
                    if(!userTransactions){
                        alert('got here')
                        db.collection("users").doc(user.uid).collection("transactions").set([]);
                    }


                }
            });
        }else{
            this.showError('Please enter your email and password.');
        }
    }

    showError(message){
        this.$toast.open({
            type:'is-danger',
            message
        })
    }

    showSuccess(message){
        this.$toast.open({
            message,
            type:'is-success',
            duration:3500
        })
    }

    render(){
        return (
            <div class="modal is-active">
                <div class="modal-background"></div>
                <div class="modal-content">
                    <form action="">
                        <div class="modal-card">
                            <header class="modal-card-head">
                                <p class="modal-card-title">Login</p>
                            </header>
                            <section class="modal-card-body">
                                <input class="input" type="email" placeholder="Text input"/>
                                <b-field label="Email">
                                    <b-input
                                        
                                        v-model="creds.email"
                                        placeholder="e.g janedoe@email.com"
                                        required>
                                    </b-input>
                                </b-field>

                                <b-field label="Password">
                                    <b-input
                                        type="password"
                                        v-model="creds.password"
                                        password-reveal
                                        placeholder="Your password"
                                        required>
                                    </b-input>
                                </b-field>
                            </section>

                            <footer class="modal-card-foot">
                                <button class="button is-primary" id="login" onClick={login}>Login</button>
                                    <a class="button is-info">
                                        <span class="icon">
                                        <b-icon icon="twitter"></b-icon>
                                        </span>
                                        <span>Twitter</span>
                                    </a>
                                    <button class="button is-info" type="button" onClick={openSignupModal}>Signup</button>
                            </footer>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}

