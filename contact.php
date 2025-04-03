<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $to = "your@email.com";
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    
    mail($to, $subject, $body);
    header("Location: thank-you.html");
}
?>
