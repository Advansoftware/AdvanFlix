<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
            <div class="modal-body">
                <style>
                    #player {
                        position: absolute;
                        width: 100% !important;
                        height: 100% !important;
                        top: 0;
                        left: 0;
                        right: 0;
                        z-index: 1;
                    }
                    .btn-close{
                        position: fixed;
                        top: 10;
                        z-index: 3;
                    }
                </style>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <div id="player"></div>
            </div>
        </div>
    </div>
</div>
<script>
    const playerInstance = jwplayer("player").setup({
        controls: true,
        displaytitle: false,
        fullscreen: "true",
        primary: "html5",
        stretching: "uniform",
        aspectratio: "16:9",
        renderCaptionsNatively: false,
        autostart: false,
        skin: {
            name: "netflix"
        },

        logo: {
            file: "#"
        },

        captions: {
            color: "#FFF",
            fontSize: 14,
            backgroundOpacity: 0,
            edgeStyle: "raised"
        },

        playlist: [{
            image: "<?php
                    echo "http://advansoftware.tech:8096/Items/" . $item . "/Images/Backdrop/?maxWidth=1280";
                    ?>",
            sources: [{
                    file: "<?php
                            echo "http://advansoftware.tech:8096/Videos/" . $item . "/stream.mp4?static=true&api_key=16c68b1407c94a45b788109c9f76464c&userId=020893e85cae4fbba93d4e1ea1c0db6e&VideoCodec=h264&AudioCodec=aac,mp3";
                            ?> ",
                    /* label: "1080p FHD", */
                    default: true
                },
                /*  {
                     file: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4",
                     label: "720p HD"
                 },
                 {
                     file: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
                     label: "480p SD"
                 } */
            ],
        }]
    });

    playerInstance.on("ready", function() {
        // Move the timeslider in-line with other controls
        const playerContainer = playerInstance.getContainer();
        const buttonContainer = playerContainer.querySelector(".jw-button-container");
        const spacer = buttonContainer.querySelector(".jw-spacer");
        const timeSlider = playerContainer.querySelector(".jw-slider-time");
        buttonContainer.replaceChild(timeSlider, spacer);
    });
</script>