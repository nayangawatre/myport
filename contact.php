<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "gawatrenayan@gmail.com";  // Replace with your email
    $subject = "New Contact Message from $name";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    if(mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Message sent successfully!'); window.location='index.html';</script>";
    } else {
        echo "<script>alert('Failed to send message. Try again later.'); window.location='index.html';</script>";
    }
}
?>
