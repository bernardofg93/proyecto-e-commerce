<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="../css/RegistrateStyles.css">
</head>
<script src="https://kit.fontawesome.com/24353b3f57.js" crossorigin="anonymous"></script>

<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300&display=swap" rel="stylesheet">


<body>
<header>

<div class="textos">
  <h1 class="nombre">Easy <span>Beer</span></h1>
  <h3>Inicia tu camino hacia la calidad.</h3>
</div>
</div>
</header>
  <div class="contenedor">



    <form class="formulario" name="login" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="POST">
      <p class="titulo">Registrate</p>

      <div class="form-group">
        <i></i><input class="usuario" type="text" name="usuario" placeholder="Usuario">
      </div>

      <div class="form-group">
        <i></i><input class="password" type="password" name="password" placeholder="Contraseña">
      </div>

      <div class="form-group">
        </i><input class="password_btn" type="password" name="password2" placeholder="Repite la contraseña">
        <button type="button" placeholder="Aceptar" onclick="login.submit()">Aceptar</button>
        <p class="texto-registrate">
          ya tienes cuenta ?
          <a href="/WebEcommerce/php/login.php"> Iniciar sesion</a>
        </p>
      </div>


      <?php if (!empty($errores)) : ?>
        <div class="error">
          <ul>
            <?php echo $errores; ?>
          </ul>

        </div>
      <?php endif; ?>




  </div>
  </form>

  </div>
</body>

</html>