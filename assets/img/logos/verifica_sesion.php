<?php

session_start();

//echo session_is_registered("usuario");

if(session_is_registered("usuario"))
{
	header("location: index.php");
}

?>