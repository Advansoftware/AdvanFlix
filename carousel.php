<div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
    <div class="carousel-inner">
        <?php $count = 0;
        foreach ($lested_item as $item) : ?>
            <?php if ($item["Type"] == "Series" || $item["Type"] == "Movie") : ?>
                <div class="carousel-item <?php if ($count == 0) echo 'active'; ?>">
                    <?php
                    echo "<img src='http://advansoftware.tech:8096/Items/" . $item["Id"] . "/Images/Backdrop/0?maxWidth=1280' class='d-block w-100 slider'>";
                    ?>
                    <div class="card position-absolute slide-content">
                        <div class="container mt-5 pt-5">
                            <div class="row mt-5 text-center">
                                <div class="col-10">
                                    <h1><?php echo $item["Name"] ?></h1>
                                </div>
                            </div>
                            <div class="row mt-5 text-center">
                                <div class="col-10">
                                    <button class="btn btn-danger-slider">Assistir Agora</button>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            <?php var_dump($count);
                $count++;
            endif; ?>
        <?php endforeach; ?>
    </div>
    <button class="carousel-control-prev" type="button" data-target="#carouselExampleFade" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-target="#carouselExampleFade" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </button>
</div>