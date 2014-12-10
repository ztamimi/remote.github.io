<?php
	session_start();
	error_reporting(E_ALL);
	ini_set('display_errors', 1);
	
	echo "load Image";

	$dataUri = $_POST["imgData"];

	//echo $dataUri;
	echo strlen($dataUri);

  	$encodedData = str_replace(' ','+',$dataUri);
	$encodedData = substr($encodedData, strpos($encodedData, ',') + 1);
	$decodedData = base64_decode($encodedData);

	$fileName = session_id();
	$fp = fopen($fileName, 'wb');

	fwrite($fp, $decodedData);

	fclose($fp);
?>
