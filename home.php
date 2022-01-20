<!doctype html>
<html lang="en">

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
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/css/style.css">
    <link href="./public/icon.png" rel="icon" type="image/png" />
</head>

<?php
$get_lested_item = file_get_contents('http://advansoftware.tech:8096/Users/020893e85cae4fbba93d4e1ea1c0db6e/Items/Latest?api_key=16c68b1407c94a45b788109c9f76464c');
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

                <?php if ($item["Type"] == "Series" || $item["Type"] == "Movie") : ?>
                    <div class="col-xs-6 col-md-2 mb-4">
                        <div class="card bg-dark p-0 position-relative">
                            <?php
                            echo "<img src='http://advansoftware.tech:8096/Items/" . $item["Id"] . "/Images/Primary?fillHeight=341&fillWidth=227' class='img-capa'>";
                            ?>
                            <div class="openinfo">
                                <i class="fa-regular fa-circle-play"></i>
                            </div>
                        </div>
                    </div>
                <?php endif; ?>
            <?php endforeach; ?>
        </div>
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>

</html>