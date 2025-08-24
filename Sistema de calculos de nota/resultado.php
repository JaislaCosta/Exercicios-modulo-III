<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado da Média</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="contêiner">
        <h2>Resultado</h2>

        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {

            $nota1 = $_POST["nota1"];
            $nota2 = $_POST["nota2"];
            $nota3 = $_POST["nota3"];
            $nota4 = $_POST["nota4"];

            $media = ($nota1 + $nota2 + $nota3 + $nota4) / 4;

            if ($media >= 6) {
                $classe = "aprovado";
                $situacao = "Aprovado";
            } else {
                $classe = "reprovado";
                $situacao = "Reprovado";
            }

            echo "<div class='resultado $classe'>Média: " . number_format($media, 2) . "<br>$situacao</div>";
        } else {
            echo "<p>Nenhuma nota enviada.</p>";
        }
        ?>
        <a href="index.html">Voltar</a>
    </div>
</body>

</html>