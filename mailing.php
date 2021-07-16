<?php
if ($_POST['stopspam'] != ""){
	// Es un SPAMbot
	exit();
   
   } else {
	// Es un usuario real, proceder a enviar el formulario.
	$nombre=$_POST['nombre'];
	$tel=$_POST['tel'];
	$mailto=$_POST['mailto'];
	$textarea=$_POST['textarea'];
	$asunto="Contacto vía Web Codiba";
	$desde = 'MIME-Version: 1.0' . "\r\n";
	$desde .= 'Content-type: text/html; charset=utf-8' . "\r\n";
	$desde .="From:"."noreply";
	$mensaje='<html>'.
		'<head><title>Mensaje desde web de CODIBAL</title></head>'.
		'<body style="background-color: rgba(178, 248, 213, 0.596);"><img src="https://lh3.googleusercontent.com/proxy/WrWMMWpcJusuC7Flz-_0HPARmAQ7KV_yzTfLDbMMpd1KncYZ7cLDut5wfYK1lAIodiYHlPVFHGdWrmW8QVTEaroS7R3Ca5s3c6HWR_cPlxz3wrkFjU0vAUJ246Fp" alt="www" style="height: 2.5rem;"><img src="https://fotos.subefotos.com/7b28565397c722c85654abde0cf5da81o.png" alt="Logo" style="height: 3rem;"><h2>Ha recibido un nuevo contacto desde la web</h2>'.
		'<ul style="padding: 1rem;"><li><h3>Razón Social/ Nombre:<strong>'.
			 $nombre.
		'<strong></h3></li><li><h3>Teléfono:<strong>'.
			 $tel.
	'<strong></h3></li><li><h3>Mail:<strong>'.
	$mailto.
	'<strong></h3></li></ul><h3>Motivo de consulta</h3><p style="text-align:justify; font-size: larger;">'.
			$textarea.
	'</p> <hr></body>'.
	
		'</html>';
	mail('clientes@codiba.com',$asunto,$mensaje,$desde);
   
   }
?> 
<html>
<head>
</head>
<body>
Mensaje Enviado
</body>
</html>