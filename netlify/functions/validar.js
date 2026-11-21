exports.handler = async function (event) {
  const codigo = (event.queryStringParameters && event.queryStringParameters.codigo
    ? event.queryStringParameters.codigo
    : "").trim();

  // Troque pelos códigos que você quer liberar
  const codigosValidos = ["608983", "MEUCODIGO1", "MEUCODIGO2"];

  const resposta = codigo !== "" && codigosValidos.includes(codigo)
    ? "VALIDO"
    : "INVALIDO";

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain; charset=utf-8" },
    body: resposta
  };
};
