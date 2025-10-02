<?php
// send_mail.php
declare(strict_types=1);
header("Access-Control-Allow-Origin: *"); // In production, replace * with your React domain
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

require __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load .env if exists
if (file_exists(__DIR__ . '/.env')) {
    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
    $dotenv->load();
}

// Read JSON body or form data
$contentType = $_SERVER['CONTENT_TYPE'] ?? '';
$data = [];
if (stripos($contentType, 'application/json') !== false) {
    $data = json_decode(file_get_contents('php://input'), true) ?: [];
} else {
    $data = $_POST;
}

// Sanitize inputs
$name = filter_var($data['name'] ?? '', FILTER_SANITIZE_STRING);
$email = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
$message = htmlspecialchars($data['message'] ?? '');

// Setup PHPMailer
$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host       = getenv('SMTP_HOST') ?: 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = getenv('SMTP_USER') ?: 'abdulrehman226721skp@gmail.com';
    $mail->Password   = getenv('SMTP_PASS') ?: 'puhd yvrw nfth uzgp'; // Use Gmail App Password here
    $mail->SMTPSecure = getenv('SMTP_SECURE') ?: PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = intval(getenv('SMTP_PORT') ?: 587);

    // From and To
    $mail->setFrom('abdulrehman226721skp@gmail.com', 'Mehar Fiaz Website');
    $mail->addAddress('abdulrehman226721skp@gmail.com', 'Mehar Fiaz'); // Your Gmail as recipient

    // Email content
    $mail->Subject = 'Contact form: ' . ($name ?: 'New message');
    $mail->isHTML(true);
    $mail->Body    = "<p><strong>Name:</strong> {$name}</p><p><strong>Email:</strong> {$email}</p><p><strong>Message:</strong><br>" . nl2br($message) . "</p>";
    $mail->AltBody = "Name: {$name}\nEmail: {$email}\n\nMessage:\n{$message}";

    // If file upload present
    if (!empty($_FILES['file']) && is_uploaded_file($_FILES['file']['tmp_name'])) {
        $mail->addAttachment($_FILES['file']['tmp_name'], $_FILES['file']['name']);
    }

    $mail->send();
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => $mail->ErrorInfo]);
}
