<?php
/*
 * fichier php permettant de télécharger sur son pc, le dessin crée
 */

//récupération du nom de l'image saisie par l'utilisateur
$file = $_GET['file'];

header('Content-Description: File Transfer');
header('Content-Type: application/octet-stream');
header('Content-Disposition: attachment; filename="'.basename($file).'"');
header('Expires: 0');
header('Cache-Control: must-revalidate');
header('Pragma: public');
header('Content-Length: ' . filesize("../dessin/".$file));
readfile("../dessin/".$file);

?>
