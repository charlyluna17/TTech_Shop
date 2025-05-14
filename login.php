<?php
session_start();

include 'connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['contraseña'];

    $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();

    $resultado = $stmt->get_result();

    if ($resultado->num_rows === 1) {
        $usuario = $resultado->fetch_assoc();
        
        if (password_verify($password, $usuario['contraseña'])) {
            header("Location: home.html");
            exit();
        } else {
            header("Location: login.html?error=Contraseña incorrecta");
            exit();
        }
    } else {
        header("Location: login.html?error=Usuario no encontrado");
        exit();
    }

    $stmt->close();
    $conn->close();
}
?>
