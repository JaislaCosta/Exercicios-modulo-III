<?php
require "db.php";
$pdo = getPDO();

$id = $_GET["id"] ?? 0;
$stmt = $pdo->prepare("SELECT * FROM usuários WHERE id=?");
$stmt->execute([$id]);
$user = $stmt->fetch();

if (!$user) {
    exit("Usuário não encontrado.");
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name  = $_POST["name"] ?? "";
    $sobrenome  = $_POST["sobrenome"] ?? "";
    $email = $_POST["email"] ?? "";
    $endereco = $_POST["endereço"] ?? "";
    $telefone = $_POST["telefone"] ?? "";
    $stmt = $pdo->prepare("UPDATE usuários SET name=?, sobrenome=?, email=?, endereço=?, telefone=? WHERE id=?");
    $stmt->execute([$name, $sobrenome, $email, $endereço, $telefone, $id]);
    header("Location: index.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8"><title>Editar Usuário</title>
</head>
<body>
<h2>Editar Usuário #<?= (int)$user["id"] ?></h2>
<form method="post">
  <div>Nome: <input type="text" name="name" value="<?= htmlspecialchars($user["name"]) ?>" required></div>
  <div>Sobrenome: <input type="text" name="sobrenome" value="<?= htmlspecialchars($user["sobrenome"]) ?>" required></div>
  <div>Email: <input type="email" name="email" value="<?= htmlspecialchars($user["email"]) ?>" required></div>
  <div>Endereço: <input type="text" name="endereço" value="<?= htmlspecialchars($user["endereço"]) ?>" required></div>
  <div>Telefone: <input type="tel" name="telefone" value="<?= htmlspecialchars($user["telefone"]) ?>" required></div>
  <button type="submit">Atualizar</button>
</form>
<p><a href="index.php">Voltar</a></p>
</body>
</html>
