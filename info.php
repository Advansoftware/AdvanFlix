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
    <link rel="stylesheet" href="./assets/css/skin.css">
    <link href="./public/icon.png" rel="icon" type="image/png" />
    <link rel="stylesheet" href="https://cdn.plyr.io/3.6.12/plyr.css" />
    <script src="https://content.jwplatform.com/libraries/Jq6HIbgz.js"></script>
</head>

<?php
$item = $_GET['item'];
$get_item = file_get_contents("http://advansoftware.tech:8096/Users/020893e85cae4fbba93d4e1ea1c0db6e/Items/" . $item . "?api_key=16c68b1407c94a45b788109c9f76464c");
$info_item = json_decode($get_item, true);
?>


<body>
    <?php include('modalPlayer.php') ?>
    <div class="container-fluid">
        <div class="row header">
            <div class="col-12">
                <img src="./public/logo.png" class="logo">
            </div>
        </div>
        <div class="row">
            <div class="col-12  p-0 ">
                <?php
                echo "<img src='http://advansoftware.tech:8096/Items/" . $item . "/Images/Backdrop/?maxWidth=1280' class='d-block w-100 backdrop-image-item'>";
                ?>
                <div class="card position-absolute backdrop-image-content">
                    <div class="container mt-5 pt-5">
                        <div class="row mt-5 text-center">
                            <div class="col-7">
                                <h1>
                                    <?php
                                    echo "<img src='http://advansoftware.tech:8096/Items/" . $item . "/Images/logo/?fillHeight=178&fillWidth=317' class='w-75 logo-item' onerror=this.innerHtml(none) alt='" . $info_item['Name'] . "'> ";
                                    ?>
                                </h1>
                            </div>
                        </div>
                        <div class="row my-2">
                            <div class="col-9 my-2">
                                <strong>Titulo:</strong> <?php echo $info_item['Name']; ?>
                            </div>
                            <div class="col-10 my-2">
                                <strong>Detalhes:</strong> <?php echo $info_item['Overview']; ?>
                            </div>
                            <div class="col-4 my-2">
                                <strong>Ano de Estreia:</strong> <?php echo $info_item['ProductionYear']; ?>
                            </div>
                            <div class="col-7 my-2">
                                <i class="fa-solid fa-star text-warning"></i>
                                <?php echo $info_item['CommunityRating']; ?>
                            </div>
                        </div>
                        <div class="row mt-5 text-center">
                            <div class="col-md-9">
                                <div class="row">
                                    <div class="col-6">
                                        <button type="button" class="btn btn-outline-light btn-block" onClick="javascript: location.href='<?php base_url();?>home.php'" data-mdb-ripple-color="light">Voltar</button>
                                    </div>
                                    <div class="col-6">
                                        <button class="btn btn-danger-slider  btn-block" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="fa-solid fa-play"></i> &nbsp; Assistir Agora</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

    <!-- Optional JavaScript -->
    <script type="text/javascript" src="./vendor/js/mdb.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>

</html>