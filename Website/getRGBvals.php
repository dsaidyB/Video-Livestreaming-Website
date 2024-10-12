<?php
$rgbVals = $_POST["rgbVals"];

$file =  fopen("frame_RGB_values.txt", "w");
fwrite($file, $rgbVals);
fclose($file);

#header("Location: ./index.php");
?>