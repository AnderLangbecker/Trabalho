<?php
//Primeiros temos que definir o host, banco de dados, usuário e senha
$host = "localhost";
$sb = "usuarios";
$user = "root";
$pass = "";

//Conectando ao banco de dados
$con = mysql_pconnect($host, $user, $pass) or trigger_error(mysql_error(), E_USER_ERROR);

//Seleciona o BD a ser trabalhado
mysql_select_db($db, $con);

//Criação da query de pesquisa
$query = sprintf("SELECT id, nome, telefone from cadastro");

//Execução da query
$dados = mysql_query($query, $con) or die(mysql_error())

//Coloca os dados em um array
$array = mysql_fetch_assoc($dados);

//Calcular o total de dados
$total = mysql_num_rows($dados);

?>



<html>
<head><title>Lista de Usuários</title></head>
<body>
<?php
	//Se a tabela conter valores
	if($total>0){
		do{
?>			
			<p><?=$linha['nome']?> / <?=$linha['telefone']?><p>

<?php
	//finaliza o loop e mostra os dados
	}while($linha = mysql_fetch_assoc($dados);
	}
?>
	
</body>

</html>

<?php
//limpa a memória
mysql_free_result($dados);
?>

