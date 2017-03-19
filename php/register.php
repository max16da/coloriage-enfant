<?php
/*
 * fichier php permettant de créer à partir d'un svg une image png afin de télécharger l'image
 */
 
//variables récupérées en ajax
$content=$_POST['content'];  // contenu du svg
$nom=$_POST['download_file'];  //nom de l'image saisie par l'utilisateur

$filename=$nom.".svg";
//création du svg
$fil=fopen('../dessin/'.$filename,'w');
fwrite($fil,$content);
fclose($fil);
chmod("../dessin/".$filename, 0777);

// convertion .svg en .png
$put = exec('convert ../dessin/'.$filename.' ../dessin/'.$nom.'.png');
$file=$nom.'.png';
chmod("../dessin/".$file, 0777);

echo $file;

?>
