function mensagemRecepcao({ nome, nomeMes }) {
  return (
    <div>
      <h1>
        Olá {nome}, tudo bem?
        <br />
        Aqui estão os serviços do mês de {nomeMes}:<br />
      </h1>
    </div>
  );
}
export default mensagemRecepcao;
