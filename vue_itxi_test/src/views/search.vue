<template>

    <div >

       <header id='main'>
        <div id="desc1">
            <a class="waves-effect waves-wispy btn-flat" id="connect1" >   
                <i class="material-icons search-icon " >search</i>          
                <input type="text" placeholder="Search for an artist..."  v-on:click="search($event);search1();">
                                             
            </a> 
        </div>
        </header>

        <!-- CARDS -->
        <main>
            <div class="container">
                <div class="col s12 m4 offset-m1 xl7 offset-xl1">
                    <router-view />
                </div>
                
            </div>
        </main>
    </div>
</template>

<script>
import axios from 'axios';
import props from '../props';


export default {
    data() {
        return {
            me: {},
            profilePic: null,
            devices: [],
            expandLibrary: 'more',
            expandDevices: 'more',
            activeDeviceId: null,
        };
    },
    
    mounted() {
        
        const spotify = JSON.parse(window.localStorage.getItem('spotify'));
        axios
            .get(`${props.api}/me`, {
                headers: {
                    Authorization: `Bearer ${spotify.access_token}`,
                },
            })
            .then((response) => {
                this.me = response.data;
                
            });
            window.onpopstate = function () {
                location.reload()
            };
        
    },
    methods: {
        search(event) {
            
            axios
                .get(
                    `${props.api}/search?q=${
                        encodeURIComponent(event.target.value)
                    }&type=track,album,playlist,artist&limit=9`,
                    {
                        headers: {
                            Authorization:
                                `Bearer ${
                                    JSON.parse(
                                        window.localStorage.getItem('spotify'),
                                    ).access_token}`,
                        },
                    },
                )
                .then((response) => {
                    this.$store.commit('searchResult', response.data);
                });
                this.interval = setInterval(() => this.search(event), 1000);
            },

            search1(){

                 this.$router.push({ name: 'search' });
            }
        }
        
       
        

};
</script>

<style scoped>
.brand-logo img {
    height: 32px;
}
#main {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
    flex-direction: row;
}
.card-row {
    margin: 0px;
    
}
.profile-pic {
    border-radius: 50%;
}
.logo {
    padding-top: 5%;
    /* padding-bottom: 7%; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
#profile-name {
    margin: 0;
    width: 100%;
    text-align: center;
    font-size: 22px;
}
label li a {
    font-weight: bold;
    font-size: 105%;
}
hr {
    width: 85%;
}
i {
    margin-right: 5% !important;
}

.search-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.search-icon {
    margin: 0.9% 0.5% 0 0 !important;
    float:right;
}
input {
    width: 80% !important;
    height: 2rem !important;
    margin: 0.5% 0 0 0 !important;
    
}
input[type=text]  {
    width: 80% !important;
    height: 2rem !important;
    margin: 0.5% 0 0 0 !important;
    border: none;
    
}

::placeholder { 
  color: Black;
  opacity: 1;
  text-align: center; 
  font-size: 20px;
}

input::selection {
    color: white;
    background: #A8C0D8;
}
#display {
    overflow: auto;
    max-height: 59em;
    /* padding-bottom: 0.8%; */
}

#desc1 {
    margin-top: 10%;
    width: 50%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    border-style: solid;
     border-color: grey;
     border-width: 1px;
     border-radius: 5px;
     
    
}
#connect1 {
    margin-top: 0%;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    width:100%;
    flex-direction: row;
    text-align:center;
    position: relative;
}
</style>
