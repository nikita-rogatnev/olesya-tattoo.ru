<?php 
    $ToEmail = 'olesyashtrymova@gmail.com'; 
    $EmailSubject = 'Вам письмо с сайта olesya-tattoo.ru';

    $mailheader = "Content-type: text/plain; charset=utf-8"; 
    $mailheader .= "From: ".$_POST["email"].""; 
    $mailheader .= "Reply-To: ".$_POST["email"].""; 
    $MESSAGE_BODY = "Имя: ".$_POST["name"]." \r\n"; 
    $MESSAGE_BODY .= "Телефон: ".$_POST["email"]."\r\n"; 
    $MESSAGE_BODY .= "Комментарий: ".nl2br($_POST["message"])."\r\n";
    
    mail($ToEmail, $EmailSubject, $MESSAGE_BODY, $mailheader); 

?>
