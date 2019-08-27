/* php/mail.php */

<?php
header('Content-type: application/json');
header('Access-Control-Allow-Headers: Content-Type');
header("Access-Control-Allow-Origin: *");

$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, TRUE);

$name = $input['name'];
$email = $input['email'];
$message = $input['message'];
$theme = $input['theme'];


$to = "info@cor9.pro";
$subject = 'Новое сообщение с сайта';
$mess = "<div style='background-color: #60606e; padding: 15px'><h1 style='font-size: 26px; color: #29a450'>Тема: $theme</h1><hr style='background-color: #fff; height: 2px'><p style='font-size: 20px; color: #0e0f13'><span style='font-size: 26px; display: block'>Сообщение:</span> $message</p></div>";


$headers = "From: cor9.pro <info@cor9.pro>\r\n";
$headers .= "Reply-To: " . $name . " <" . $email . ">\r\n";
$headers .= 'X-Mailer: PHP/' . phpversion();
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
mail($to, $subject, $mess, $headers);