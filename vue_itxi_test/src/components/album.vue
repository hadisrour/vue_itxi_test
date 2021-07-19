<template>
    <div>
        <div class="artist-info">
                <div class="artist-info-meta">
                <div class="artist-info-name">{{ artist.name }}</div>
                <div class="artist-info-type">Albums</div>
            </div>
        </div>
        <div class=" row albums" style="margin-left:2%; margin-top:5%; padding:0px;width:110%;height:100%;">
            <div class="album card waves-effect waves-ligh" v-for="album in albums" :key="album.id" @click="openAlbum(album)">
                <img class="artist-image" :src="album.images ? album.images[1].url : null" alt=""/>
                <p class="info2" > {{ album.name }} </p>
                <div>
                    <a draggable="false" class=" info3" v-for="artist in album.artists" :key="artist.id" @click="openArtist(artist)">{{ artist.name }}</a>
                </div>  
                <div class="info1">{{ album.release_date}}</div>
                <div class="info">{{ album.total_tracks}} Tracks</div>
                <div class="info4" @click="openAlbum(album)">Preview on Spotify</div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import props from "../props";

export default {
    data() {
        return {
            artist: {},
            albums: [],
            
        };
        this.interval = setInterval(() => this.data(), 5000);
    },
    computed: {
        deviceId() {
            return this.$store.state.deviceId;
        }
    },
    mounted () {
                 
                 document.getElementById("main").style.display = "none";

    },
    beforeMount() {
        axios
            .get(`${props.api}/artists/${this.$route.query.id}`, {
                headers: {
                    Authorization: `Bearer ${
                        JSON.parse(window.localStorage.getItem("spotify"))
                            .access_token
                    }`,
                },
            })
            .then((response) => {
                console.log(response)
                this.artist = response.data;
            });
        axios
            .get(
                `${props.api}/artists/${this.$route.query.id}/top-tracks?country=US`,
                {
                    headers: {
                        Authorization: `Bearer ${
                            JSON.parse(window.localStorage.getItem("spotify"))
                                .access_token
                        }`,
                    },
                }
            )
            .then((response) => {
                this.topTracks = response.data.tracks;
            });
        axios
            .get(
                `${props.api}/artists/${this.$route.query.id}/albums?offset=0&limit=7&include_groups=album&market=US`,
                {
                    headers: {
                        Authorization: `Bearer ${
                            JSON.parse(window.localStorage.getItem("spotify"))
                                .access_token
                        }`,
                    },
                }
            )
            .then((response) => {
                this.albums = response.data.items;
            });
    },
   
    methods: {
        
        openAlbum(album) {
            var id = album.id;
            window.open('https://open.spotify.com/album/'+ id);
        }
        
    },
};
</script>

<style >
.artist-image {
    width: 19%;
    margin-top: 0%;
    
}
.desc {
    margin-top: 14.9%;
    margin-left: 1%;
}
tr:hover {
    background-color: lightgray;
}
h3 {
    width: 25em;
    white-space: nowrap;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
}
.album {
    margin-left: 1%;
    display: inline-block;
    margin-top: 0%;
    
    
}
.album:hover {
    cursor: pointer;
}
.album:hover .album-img {
    opacity: 0.8;
}


@-webkit-keyframes fadein {
    from {
        top: 0;
        opacity: 0;
    }
    to {
        top: 30px;
        opacity: 1;
    }
}

@keyframes fadein {
    from {
        top: 0;
        opacity: 0;
    }
    to {
        top: 30px;
        opacity: 1;
    }
}

@-webkit-keyframes expand {
    from {
        min-width: 50px;
    }
    to {
        min-width: 350px;
    }
}

@keyframes expand {
    from {
        min-width: 50px;
    }
    to {
        min-width: 350px;
    }
}
@-webkit-keyframes stay {
    from {
        min-width: 350px;
    }
    to {
        min-width: 350px;
    }
}

@keyframes stay {
    from {
        min-width: 350px;
    }
    to {
        min-width: 350px;
    }
}
@-webkit-keyframes shrink {
    from {
        min-width: 350px;
    }
    to {
        min-width: 50px;
    }
}

@keyframes shrink {
    from {
        min-width: 350px;
    }
    to {
        min-width: 50px;
    }
}

@-webkit-keyframes fadeout {
    from {
        top: 30px;
        opacity: 1;
    }
    to {
        top: 60px;
        opacity: 0;
    }
}

@keyframes fadeout {
    from {
        top: 30px;
        opacity: 1;
    }
    to {
        top: 60px;
        opacity: 0;
    }
}

.artist-info {
    padding: 15px;
    margin-top:5%;
    margin-left:5%;
    z-index: 1;
    width: 80%;
    display: flex;
    flex-flow: row wrap;
    align-items: flex-end;
   
    
}
.artist-info .profile--img {
    margin-right: 15px;
}
.artist-info .profile--img img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
}
.artist-info-type {
    color: #aaaaaa;
    text-transform: uppercase;
    font-size: 15px;
    letter-spacing: 1px;
    margin-left:5%;
    
}
.info3 {
    color: #aaaaaa;
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: 1px;
    margin-left:5%;
    display:list-item;
    list-style-type: none;
    
    
    
}
.info2 {
    color: black;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 1px;
    margin-left:5%;
    height:30px;
    display:inline-block;
    
}
.info1 {
    color: #aaaaaa;
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: 1px;
    margin-top:8%;
    margin-left:5%;
}
.info {
    color: #aaaaaa;
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: 1px;
    margin-left:5%;
    margin-bottom:5%;
    
}
.info4 {
    color: #aaaaaa;
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: 1px;
    text-align:center;
    border-width: 2px;
    height:40px;
    border-style:solid;
    width:100%;
    background-color:#F0FFFF;
    vertical-align: middle;
    line-height: 40px; 
    
}
.artist-info-name {
    color: black;
    font-size: 36px;
    font-weight: 100;
    padding: 0 0 10px 0;
}
.artist-followers {
    width: 20%;
    z-index: 1;
    padding: 15px;
    text-align: right;
    color: #aaaaaa;
    font-weight: 100;
    font-size: 16px;
    letter-spacing: 1px;
}
.artist-followers-label {
    font-weight: 300;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 1px;
}

@media (max-width: 522px) {
    .artist-info {
        margin-top: 0;
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        text-align: center;
    }
    .artist-info .profile--img {
        margin-right: 0;
    }
    .artist-info-type {
        margin-top: 10px;
    }
}
</style>
