const conn = require("../../config/serverdb");

module.exports = (app) => {
    
    app.post('/articulo_nuevo', (req, res, next) => {
        let query = `INSERT INTO articulos (Nombre, Cantidad, Descripcion, Tipo, Preciounidad, Categoria) VALUES ('${req.body.Nombre}', '${req.body.Cantidad}', '${req.body.Descripcion}', '${req.body.Tipo}', '${req.body.Preciounidad}', '${req.body.Categoria}')`;
        conn.query(query, (error, filas, col) => {
            if (error) res.status(500).json({status: 0, message: error});
            else res.json({status:1, message: `Se inserto articulo satisfactoriamente`});
        });
    });

    app.post('/orden_nueva', (req, res, next) => {
        let query = `INSERT INTO ordenes () VALUES ()`;
        conn.query(query, (error, filas, col) => {
            if (error) res.status(500).json({status: 0, message: error});
            else res.json({status:1, message: `Se inserto orden satisfactoriamente`});
        });
    });

    app.post('/artxord_nuevo', (req, res, next) => {
        let query = `INSERT INTO articuloxorden (Idordenes, Idarticulo, Cantidad, Fecha, Categoria, Nombre, Precio, Tipo) VALUES ('${req.body.Idordenes}', '${req.body.Idarticulo}', '${req.body.Cantidad}', '${req.body.Fecha}', '${req.body.Categoria}', '${req.body.Nombre}', '${req.body.Precio}', '${req.body.Tipo}')`;
        conn.query(query, (error, filas, col) => {
            if (error) res.status(500).json({status: 0, message: error});
            else res.json({status:1, message: `Se inserto orden satisfactoriamente`});
        });
    });

    app.post('/info_art', (req, res, next) => {
        let query = `Select Nombre, Cantidad, Preciounidad, Tipo, Categoria FROM articulos WHERE Idarticulo = '${req.body.Idarticulo}'`;
        conn.query(query, (error, info, col) => {
            if (error) res.status(500).json({status: 0, message: error});
            else res.json({status:1, message: `Se inserto orden satisfactoriamente`, info});
        });
    });

    app.post('/nueva_cantidad', (req, res, next) => {
        let query = `UPDATE articulos SET Cantidad = ('${req.body.Cantidad}') WHERE Idarticulo = '${req.body.Idarticulo}'`
        conn.query(query, (error, conf, col) => {
            if (error) res.status(500).json({status: 0, message: "No se pudo insertar el usuario"});
            else res.json({status:1, message: `Se inserto usuario satisfactoriamente`});
        });
    });

    app.post('/reporte', (req, resp, next) => {
        let query = `SELECT * FROM articuloxorden WHERE Fecha = '${req.body.Fecha}' AND Categoria ='${req.body.Categoria}'`;
        conn.query(query, (error, info, cols) => {
            if (error) resp.status(500).json({status: 0, message: "Error en conexion a la tabla"});
            else resp.json({status: 1, message: "Se obtuvo informacion satisfactoriamente", info})
        });
    });

    app.post('/categorias', (req, resp, next) => {
        let query = `SELECT DISTINCT Categoria FROM articuloxorden WHERE Fecha = '${req.body.Fecha}'`;
        conn.query(query, (error, info, cols) => {
            if (error) resp.status(500).json({status: 0, message: "Error en conexion a la tabla"});
            else resp.json({status: 1, message: "Se obtuvo informacion satisfactoriamente", info})
        });
    });

    app.post('/login', (req, resp, next) => {
        let query = `SELECT * FROM users WHERE Nombre = '${req.body.Nombre}' AND Contrasenia ='${req.body.Contrasenia}'`;
        conn.query(query, (error, info, cols) => {
            if (error) resp.status(500).json({status: 0, message: "Error en conexion a la tabla"});
            else resp.json({status: 1, message: "Se obtuvo informacion satisfactoriamente", info})
        });
    });
    
    app.get('/idordenes', (req, resp, next) => {
        let query = "SELECT * FROM ordenes ORDER BY Idordenes DESC";
        conn.query(query, (error, ids, cols) => {
            if (error) resp.status(500).json({status: 0, message: "Error en conexion a la tabla"});
            else resp.json({status: 1, message: "Se obtuvo informacion satisfactoriamente", ids})
        });
    });
    
    app.get('/articulos', (req, resp, next) => {
        let query = "SELECT * FROM articulos ORDER BY Cantidad DESC";
        conn.query(query, (error, articulos, cols) => {
            if (error) resp.status(500).json({status: 0, message: "Error en conexion a la tabla"});
            else resp.json({status: 1, message: "Se obtuvo informacion satisfactoriamente", articulos})
        });
    });

    app.get('/articulos2', (req, resp, next) => {
        let query = "SELECT Idarticulo, Nombre, Cantidad, Descripcion FROM articulos ORDER BY Cantidad DESC";
        conn.query(query, (error, articulos, cols) => {
            if (error) resp.status(500).json({status: 0, message: "Error en conexion a la tabla"});
            else resp.json({status: 1, message: "Se obtuvo informacion satisfactoriamente", articulos})
        });
    });

    app.get('/categorias', (req, resp, next) => {
        let query = "SELECT * FROM categorias";
        conn.query(query, (error, categorias, cols) => {
            if (error) resp.status(500).json({status: 0, message: "Error en conexion a la tabla"});
            else resp.json({status: 1, message: "Se obtuvo informacion satisfactoriamente", categorias})
        });
    });

    
}