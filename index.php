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

<body class="login-page">
    <div class="login-backgroud">
    </div>
    <div class="container-fluid">
        <div class="row header">
            <div class="col-12">
                <img src="./public/logo.png" class="logo">
            </div>
        </div>
        <div class="row d-flex justify-content-center mt-5">
            <div class="col-sm-12 col-md-4 mt-5">
                <div class="card card-login">
                    <div class="card-header">
                        <h2>Entrar</h2>
                    </div>
                    <div class="card-body p-5">
                        <div class="form-outline  mb-4">
                            <input type="email" class="form-control" id="email" value="" required />
                            <label for="email" class="form-label">Email</label>
                        </div>
                        <div class="form-outline  mb-5">
                            <input type="password" class="form-control" id="senha" value="" required />
                            <label for="senha" class="form-label">Senha</label>
                        </div>
                        <div class="input-group mb-3">
                            <button class="btn btn-danger-slider btn-block">Entrar</button>
                        </div>
                    </div>
                    <div class="card-footer align-center">
                        <a href="http://advansoftware.tech:8096/" class="btn btn-primary btn-block">Entrar como Convidado</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script type="text/javascript" src="./vendor/js/mdb.min.js"></script>
</body>

</html>