<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>


	<script src="https://kit.fontawesome.com/24353b3f57.js" crossorigin="anonymous"></script>
	<!-- Compiled and minified CSS -->
	<link rel="stylesheet" href="../css/logeo.css">


	<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300&display=swap" rel="stylesheet">


</head>


<body>
	<header>

		<div class="textos">
			<h1 class="nombre">Easy <span>Beer</span></h1>
			<h3>Bienvenidos.</h3>
		</div>
		</div>
	</header>
	<div class="contenedor">
		<h1 class="titulo"></h1>



		<form class="formulario" name="login" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="POST">

			<p class="titulo">Iniciar sesión</p>

			<div class="form-group">
				<!--<i class="icono izquierda fa fa-user">--></i><input class="usuario" type="text" name="usuario" placeholder="Usuario">
			</div>

			<div class="form-group">
				<!--<i class="icono izquierda fa fa-lock"></i>--><input class="password_btn" type="password" name="password" placeholder="Contraseña">

			</div>
			<button type="button" onclick="login.submit()">Iniciar</button>
			<p class="texto-registrate">
				¿ Aun no tienes cuenta ?
				<a href="/WebEcommerce/php/registro.php">Regístrate</a>
			</p>


			<!-- Comprobamos si la variable errores esta seteada, si es asi mostramos los errores -->
			<?php if (!empty($errores)) : ?>
				<div class="error">
					<ul>
						<?php echo $errores; ?>
					</ul>
				</div>
			<?php endif; ?>
		</form>


	</div>
</body>

</html>