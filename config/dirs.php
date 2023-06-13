<?php
// Necesitamos definir la carpeta del proyecto ya que $_SERVER["DOCUMENT_ROOT"] devuelve el nombre del servidor pero no la carpeta  del proyecto que usaremos en este caso unsmp
// Recordar que cuando se suba al servidor ROOT PATH= $_SERVER["DOCUMENT_ROOT"]
define("CARPETA","USMP");
// RUTA RAIZ
define("ROOT_PATH",$_SERVER["DOCUMENT_ROOT"]."/".CARPETA."/");
// RUTAS DE LAS CARPETAS
define("ASSETS_PATH",ROOT_PATH."assets/");
define("CONTROLLERS_PATH",ROOT_PATH."Controllers/");
define("MODELS_PATH",ROOT_PATH."Models/");
define("CONFIG_PATH",ROOT_PATH."config/");

