<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
require_once "vendor/autoload.php";

switch ($_SERVER['REQUEST_METHOD']) {
    case "OPTIONS": // Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;

    case "POST": // Send the email
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json");

        $json = file_get_contents('php://input');
        $params = json_decode($json);

        if (!$params) {
            echo json_encode(["success" => false, "error" => "Ungültiges JSON-Format"]);
            exit;
        }

        $email = $params->email;
        $name = $params->name;
        $message = $params->message;
        // $pp = $params->privacyPolicy;

        $recipient = 'alexander.albrecht1@gmail.com';
        $subject = "Contact From <$email>";
        $body = "From: " . $name . "<br> Message:" . $message;

        try {
            $mail = new PHPMailer(true);
            $mail->isSMTP();
            $mail->SMTPAuth = true;
            $mail->Host = "smtp.ionos.de";
            $mail->Port = 587;
            $mail->Username = "contact@alexander-albrecht.dev";
            $mail->Password = "hQSbG9J4!Psz#Fdd!#^y";
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;

            $mail->setFrom('contact@alexander-albrecht.dev', 'Website Contact');
            $mail->addAddress($recipient, 'Alexander Albrecht');
            $mail->addCC('contact@alexander-albrecht.dev');

            $mail->CharSet = 'UTF-8';
            $mail->Encoding = 'base64';
            $mail->isHTML(true);
            $mail->Subject = $subject;
            $mail->Body = $body;
            $mail->AltBody = strip_tags($body);

            $mail->send();
            echo json_encode(["success" => true, "message" => "Mail wurde versendet."]);
        } catch (Exception $e) {
            echo json_encode(["success" => false, "error" => $mail->ErrorInfo ?: "Unbekannter Fehler"]);
        }
        break;

    default: // Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}



