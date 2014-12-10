<?php
	session_start();
	error_reporting(E_ALL);
	ini_set('display_errors', 1);

	$dataUri = $_POST["imgData"];

  	$encodedData = str_replace(' ','+',$dataUri);
	$encodedData = substr($encodedData, strpos($encodedData, ',') + 1);
	$decodedData = base64_decode($encodedData);

	$fileName = session_id() . '.png';
	$fp = fopen($fileName, 'wb');

	fwrite($fp, $decodedData);

	fclose($fp);

	$url = 'http://api.qrserver.com/v1/read-qr-code/';

	$ch = curl_init($url);

	$headers = array("Content-Type:multipart/form-data");

	$cfile = new CURLFile($fileName, 'image/png');

	//$postfields = array("MAX_FILE_SIZE" => "1048576", "file" => $cfile);
	$postfields = array("file" => $cfile);

	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_HEADER, 0);
	curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $postfields);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

	$response = curl_exec($ch);

	curl_close($ch);

	echo $response;
?>
