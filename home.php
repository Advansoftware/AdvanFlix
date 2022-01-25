<!doctype html>
<html lang="en">
<?php include('env.php'); ?>
<head>
    <title>AdvanFlix</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <!-- MDB -->
    <link rel="stylesheet" href="./vendor/css/mdb.dark.min.css" />
    <link rel="stylesheet" href="./assets/css/style.css">
    <link href="./public/icon.png" rel="icon" type="image/png" />
</head>

<?php
$get_lested_item = file_get_contents('http://advansoftware.tech:8096/Users/020893e85cae4fbba93d4e1ea1c0db6e/Items/Latest?api_key=db57af7ba095470dad6dbc0f5cc27274');
$lested_item = json_decode($get_lested_item, true);

?>

<body>
    <div class="container-fluid">
        <div class="row header">
            <div class="col-12">
                <img src="./public/logo.png" class="logo">
            </div>
        </div>
        <div class="row mb-5 d-none d-md-block">
            <div class="col-12  p-0 ">
                <?php include('carousel.php'); ?>
            </div>
        </div>

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

    <!-- Optional JavaScript -->
    <script type="text/javascript" src="./vendor/js/mdb.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>

</html>