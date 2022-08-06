const config = require('../config');
const db = require('./db');

async function getMedicamentos(page = 0) {
    const rows = await db.query('SELECT * FROM medicamento ORDER BY 1 DESC');
    return rows;
}

async function incluirMedicamentos(data) {
    let retorno = 1;
    console.log(data);
    const sql = "INSERT INTO medicamento (medicamento_nome, medicamento_codigo_barras) VALUES (?, ?)";
    db.query(sql, [data.nome, data.codigo_barras], function (err, rows) {
        if (err) {
            retorno = 0;
        }

    });
    return retorno;
}

module.exports = {
    getMedicamentos,
    incluirMedicamentos
}

