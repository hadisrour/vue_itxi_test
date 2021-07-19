<template>
    <div>
            
        <div v-if="result.artists">
            <div class="row" style="margin-left:0%; margin-top:10%; padding:20px;">
                <div class="card waves-effect waves-light" v-for="artist in result.artists.items" :key="artist.id" style="margin-left:3%;">
                    <img class="artist-image" :src="artist.images[1]? artist.images[1].url: 'https://i.imgur.com/o3lNa1A.png'" alt="" @click="openArtist(artist)"/>
                    <p class="name" @click="openArtist(artist)">{{ artist.name }}</p>
                    <p class="artist" @click="openArtist(artist)">{{ artist.followers ? artist.followers.total : 0 | formatter }} followers</p>

                    <fieldset class="rating" >
                        <input type="radio" id="field1_star5" name="rating1" value="5" /><label class = "full" for="field1_star5"></label>
                        
                        <input type="radio" id="field1_star4" name="rating1" value="4" /><label class = "full" for="field1_star4"></label>
                        
                        <input type="radio" id="field1_star3" name="rating1" value="3" /><label class = "full" for="field1_star3"></label>
                        
                        <input type="radio" id="field1_star2" name="rating1" value="2" /><label class = "full" for="field1_star2"></label>
                        
                        <input type="radio" id="field1_star1" name="rating1" value="1" /><label class = "full" for="field1_star1"></label>
								
					</fieldset>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import props from '../props';

export default {
    computed: {
        deviceId() {
            return this.$store.state.deviceId;
        },
        result() {
            return this.$store.state.searchResult;
            this.interval = setInterval(() => this.result(), 5000);
        },
    },
    mounted() {
       
        $("label").click(function(){
        $(this).parent().find("label").css({"color": "#D8D8D8"});
        $(this).css({"color": "#7ED321"});
        $(this).nextAll().css({"color": "#7ED321"});
        });

        document.getElementById("main").style.margin = "-5%";
        
    },
    methods: {
        
        openArtist(artist) {
            this.$router.push({
                path: '/search/album',
                query: { id: artist.id },

            });
           
        },
    },
};
</script>

<style >
p,
span {
    font-size: 105%;
}
.topic {
    margin-top: 1%;
    font-weight: bold;
}
.card {
    cursor: pointer;
    display: inline-block;
    flex-direction: column;
    width: 20%;
    height: 50%;
    background-color: rgb(225, 225, 225, 0.7);
    border-radius: 3%;
    margin-top: 0%;
    margin-left:0%;
    
}



.name {
    font-weight: bold;
    color: #1b7cde;
    margin-left: 11.5%;
    font-size: 110%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 77%;
    margin-top: 7%;
    margin-bottom: 1%;
}
.artist,
.owner {
    margin-top: 3%;
    margin-left: 11.5%;
    margin-bottom: 13%;
    font-size: 90%;
    word-break: break-all;
    white-space: nowrap;
    width: 78%;
    overflow: hidden;
    color: rgb(10, 10, 10, 0.7);
    text-overflow: ellipsis;
}

@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);
.rating { 
  border: none;
  float: left;
  margin-left:3%;
  margin-bottom:3%;
}

.rating > input { display: none; } 
.rating > label:before { 
  margin-top: px;
  padding:0px 0px 0px 0px;
  font-size: 1.25em;
  font-family: FontAwesome;
  display: inline-block;
  border-radius:15px;
  content: "\f005";
}

.rating > .half:before { 
  content: "\f089";
  position: absolute;
}

.rating > label { 
	 
	float: right;
	margin:5px 1px 0px 0px;
	background-color:transperant !important;
    color:#C0C0C0;
    font-size:1.25em;
	border-radius:15px;
    height:25px;
}

.rating:not(:checked) > label:hover, /* hover current star */
.rating:not(:checked) > label:hover ~ label { 
  color:#FFD700 !important;
  cursor:pointer;
  background-color:transperant !important;
}

.rating > input:checked + label:hover, /* hover current star when changing rating */
.rating > label:hover ~ input:checked ~ label, /* lighten current selection */
.rating > input:checked ~ label:hover ~ label { 
  color:#FFD700 !important;
  cursor:pointer;
  background-color:transperant !important;
} 


</style>
