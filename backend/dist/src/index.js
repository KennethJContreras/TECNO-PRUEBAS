"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("./utils/database");
const usuarios_router_1 = __importDefault(require("./routes/usuarios.router"));
const empresas_router_1 = __importDefault(require("./routes/empresas.router"));
const categorias_router_1 = __importDefault(require("./routes/categorias.router"));
const motoristas_router_1 = __importDefault(require("./routes/motoristas.router"));
const administradores_router_1 = __importDefault(require("./routes/administradores.router"));
const pedidos_router_1 = __importDefault(require("./routes/pedidos.router"));
const productos_router_1 = __importDefault(require("./routes/productos.router"));
const ordenes_router_1 = __importDefault(require("./routes/ordenes.router"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const database = new database_1.Database();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.use('/usuarios', usuarios_router_1.default);
app.use('/administradores', administradores_router_1.default);
app.use('/motoristas', motoristas_router_1.default);
app.use('/empresas', empresas_router_1.default);
app.use('/productos', productos_router_1.default);
app.use('/categorias', categorias_router_1.default);
app.use('/pedidos', pedidos_router_1.default);
app.use('/ordenes', ordenes_router_1.default);
app.listen(port, () => {
    console.log(`⚡️Servidor tecnoshop levantado en el puerto:${port}`);
});
