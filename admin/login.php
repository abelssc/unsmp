<?php
    if($_SERVER["REQUEST_METHOD"]==="POST"){

        $email=$_POST["email"];
        $password=$_POST["password"];

        //validar y sanitizar
        $email=filter_var($email,FILTER_VALIDATE_EMAIL);

        if($email && $password){
            require_once "../config/conexion.php";
            $conexion=Conexion::getConexion();
            $sql="SELECT * FROM usuarios WHERE email=:email";
            $stmt=$conexion->prepare($sql);
            $stmt->bindParam(":email",$email);
            $stmt->execute();
            $result=$stmt->fetch(PDO::FETCH_ASSOC);
            if($result){
                if(password_verify($password,$result["password"])){
                    session_start();
                    $_SESSION["user"]=$result["email"];

                    echo json_encode(["status"=>"ok"]);
                }else{
                    echo json_encode(["status"=>"error","message"=>"Usuario o contraseña incorrectos"]);
                }
            }else{
                echo json_encode(["status"=>"error","message"=>"Usuario o contraseña incorrectos"]);
            }
        }else{
            echo json_encode(["status"=>"error","message"=>"Usuario o contraseña incorrectos"]);
        }
    }