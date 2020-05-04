<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Carrito</title>
    <link rel="stylesheet" href="../css/custom.css">
    <link rel="stylesheet" href="../css/bootstrap.min.css" />

    <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,300;1,400&display=swap" rel="stylesheet">

     <!-- Compiled and minified CSS -->
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

     <!-- Compiled and minified JavaScript -->
     <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

    
</head>
<body>
<header id="header" class="header">
    
    <div class="container">
        
        <div class="row">

            <div class="nav navbar-nav mr-auto" >
    
                
                <ul class="fontColor">
                    <img src="../img/./fondook.png.png" width="40" id="">

                    <a class="nav-link" href="../html/Inicio.html"
                        >INICIO<span class="sr-only">(current)</span></a
                      >
                      <a class="nav-link" href="../html/Productos.html"
                        >PRODUCTOS<span class="sr-only">(current)</span></a
                      >
                      <a class="nav-link" href="../html/Especiales.html"
                        >ESPECIALES<span class="sr-only">(current)</span></a
                      >
                      <a class="nav-link" href="../html/Nosotros.html"
                        >NOSOTROS<span class="sr-only">(current)</span></a
                      >
                      <a class="nav-link" href="../html/MisionVision.html"
                        >MISION | VISION<span class="sr-only">(current)</span></a
                      >
                      <a class="nav-link" href="../html/AspectosLegales.html"
                        >LEGALES<span class="sr-only">(current)</span></a
                      >
                    
              </ul>
            </div>
            <div class="two columns u-pull-right">

                    <li class="submenu">
                            <img src="../img/cart.png" width="25%" id="img-carrito">
                            <div id="carrito">
                                    <ul>
                                    <table id="lista-carrito" class="u-full-width">
                                        <thead>
                                            <tr>
                                                
                                            </tr>
                                        </thead>
                                        <tbody class="cart-products"></tbody>
                                    </table>

                                    <!--<a href="#" id="vaciar-carrito" class="button u-full-width">Vaciar Carrito</a>-->
                            </div>
                    </li>
                </ul>
            </div>
        </div> 
    </div>

    
    </header>
    
    
<div class="container product-list">
    <div class="row products"></div>
</div>
    

    
    <script src="../js/Especiales.js"></script>

</body>
</html>