//Importar a instancia do Express configurada em index.js
const app = require("./index");
//Inicia o servidor na porta 5000, neste caso a API será acessivel em http://localhost:5000/health/
app.listen(5000);