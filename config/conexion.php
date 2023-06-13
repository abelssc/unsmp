<?php
class Conexion {
    private static $conexion;
    private static $config = [
        "host" => "",
        "database" => "",
        "user" => "",
        "password" => "",
    ];

    private function __construct()
    {
    }

    public static function getConexion()
    {
        if (!isset(self::$conexion)) {
            try {
                self::$conexion = new PDO("mysql:host=" . self::$config["host"] . ";dbname=" . self::$config["database"], self::$config["user"], self::$config["password"]);
                self::$conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } catch (PDOException $e) {
                echo "Error de conexión: " . $e->getMessage();
                die();
            }
        }
        return self::$conexion;
    }

    public static function closeConexion()
    {
        if (isset(self::$conexion)) {
            self::$conexion = null;
        }
    }

    public static function getConfig()
    {
        return self::$config;
    }

    public static function setConfig($config)
    {
        self::$config = $config;
    }
}

// Cuando se establece PDO::ATTR_ERRMODE con el valor PDO::ERRMODE_EXCEPTION, se indica a PDO que lance excepciones cuando ocurra un error en la conexión o en las consultas. Esto permite capturar y manejar de manera más efectiva los errores de la base de datos en tu código.
?>

