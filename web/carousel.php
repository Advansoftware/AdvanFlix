<div id="carouselExampleCrossfade" class="carousel slide carousel-fade" data-mdb-ride="carousel">
    <div class="carousel-inner">
        <?php $count = 0;
        foreach ($lested_item as $item) : ?>
            <?php
            if ($item["Type"] == "Episode") {
                $name = $item["SeriesName"];
                $image = $item["SeriesId"];
            } else {
                $name = $item["Name"];
                $image = $item["Id"];
            }
            ?>
            <div class="carousel-item  <?php if ($count == 0) echo 'active'; ?>" data-mdb-interval="10000">
                <?php
                echo "<img src='http://advansoftware.tech:8096/Items/" . $image . "/Images/Backdrop/?maxWidth=1280' class='d-block w-100 slider'>";
                ?>
                <div class="card position-absolute slide-content">
                    <div class="container mt-5 pt-5">
                        <div class="row mt-5 text-center">
                            <div class="col-10">
                                <h1>
                                    <?php
                                    echo "<img src='http://advansoftware.tech:8096/Items/" . $image . "/Images/logo/?fillHeight=178&fillWidth=317' class='w-75 logo-item' onerror=this.innerHtml(none) alt='" . $name . "'> ";
                                    ?>
                                </h1>
                            </div>
                        </div>
                        <div class="row mt-5 text-center">
                            <div class="col-10">
                                <button class="btn btn-danger-slider" onClick="javascript: location.href='<?php base_url();?>info.php?item=<?php echo  $image; ?>'"><i class="fa-solid fa-play"></i> &nbsp; Detalhes</button>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        <?php $count++;
        endforeach; ?>
    </div>
    <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>