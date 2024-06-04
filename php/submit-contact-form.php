<?php
// Retrieve the form data
$name = $_POST['name'];
$email = $_POST['email'];
$contact = $_POST['contact'];
$message = $_POST['message'];

// Set the recipient email address
$to = "eden@ryderlee.me";

// Construct the email subject and body
$subject = "New Contact Form Submission for cofarminghub";
$body = "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Contact: $contact\n";
$body .= "Message:\n$message";

// Set the email headers
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send the email
if (mail($to, $subject, $body, $headers)) {
    echo "Email sent successfully!";
} else {
    echo "Failed to send email.";
}
?>