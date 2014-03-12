$(document).ready(function() {
    $("#jquery_jplayer_1").jPlayer ({
        ready: function() {
            $(this).jPlayer("setMedia", {
                mp3: "audio/lazy.mp3"
            });
        },
    });


    /* Uncomment when you install jPlayer Playlist Addon
    var myPlaylist = new jPlayerPlaylist ({
        jPlayer: "#jplayer_jquery_1",
        cssSelectorAncestor: "#jp_container_1"
    }, [
        {
            title:"Lazy Day",
            artist: "TZ Montana",
            mp3:"audio/lazy.mp3"
        }
    ], {
        playlistOptions: {
            enableRemoveControls: true,
            autoPlay: true
        }
    });
    */
});
