<template>
    <div id="main">
        <div id="desc">
            <a class="waves-effect waves-wispy btn-flat" id="connect" @click="sendToSpotify" >
                Login<img src="../assets/icon.png" style="width:10%px;height:90%;postion:absolute; float:right;">
            </a>    
        </div>
    </div>
</template>

<script>
import props from '../props';

export default {
    methods: {
        sendToSpotify() {
            // clean store;
            this.$store.commit('clear');
            window.location.replace(`https://accounts.spotify.com/authorize?client_id=${props.clientId}&response_type=code&redirect_uri=${props.redirectURI}&scope=${props.scope}`);
        },
    },
};
</script>

<style scoped >
#main {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
}
#desc {
    margin-top: 10%;
    width: 35%;
    height: 60px ;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-style: solid;
     border-color: grey;
     border-width: 1px;
     border-radius: 5px;
     
    
}
#connect {
    vertical-align: middle;
    line-height: 50px; 
    justify-content: center;
    align-items: center;
    font-size: 20px;
    height:50px;
    width:100%;
    flex-direction: column;
    text-align:center;
    position: relative;
    
}
h1 {
    color: #333333;
    font-family: 'Playfair Display', serif;
    font-size: 36px;
    font-weight: normal;
    margin-bottom: 0;
    text-align: center;
}
p {
    margin-top: 1%;
    text-align: right;
    padding-right: 2%;
    width: 100%;
    text-align: right;
}
@media only screen and (max-width: 601px) {
  #connect {
    vertical-align: middle;
    line-height: 50px; 
    justify-content: center;
    align-items: center;
    font-size: 10px;
    height:50px;
    width:100%;
    flex-direction: column;
    text-align:center;
    position: relative;
    float:left;
    
}
}
</style>
