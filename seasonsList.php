<div class="row d-flex justify-content-start align-self-stretch align-content-center flex-wrap ">
            <?php foreach ($lested_item as $item) : ?>
                <?php
                if ($item["Type"] == "Episode") {
                    $name = $item["SeriesName"];
                    $image = $item["SeriesId"];
                } else {
                    $name = $item["Name"];
                    $image = $item["Id"];
                }
                ?>
                <div class="col-4 col-sm-6 col-md-2 mb-4">
                    <div class="card bg-dark p-0 position-relative capa btn" onClick="javascript: location.href='<?php base_url();?>info.php?item=<?php echo  $image; ?>'">
                        <?php
                        echo "<img src='http://advansoftware.tech:8096/Items/" . $image . "/Images/Primary?fillHeight=341&fillWidth=227' class='img-capa'>";
                        ?>
                        <div class="openinfo">
                            <i class="fa-solid fa-play"></i><br>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>