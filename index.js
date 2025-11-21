// import express from "express"
// import cors from "cors"
// import rutasProductos from "./src/routes/products.routes.js"
// import rutasLog from "./src/routes/auth.routes.js"
// import { authentication } from "./src/middleware/authentication.js"

// const app = express()

// const PORT = process.env.PORT || 3000;
// const corsConfig = {
//     origin: ['http://localhost:3000', 'https://midominio.com'], // dominios permitidos
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],                  // métodos permitidos
//     allowedHeaders: ['Content-Type', 'Authorization'],          // cabeceras permitidas
//     exposedHeaders: ['Content-Length'],                         // cabeceras visibles al cliente
//     credentials: true,                                          // habilitar credenciales
//     maxAge: 600,                                                // cache preflight
//     optionsSuccessStatus: 204                                   // respuesta preflight exitosa
// }

// const objeto = {
//     clave : "valor"
// }

// app.use(cors(corsConfig))
// app.use(express.json());

// app.use("/api", rutasLog)
// app.use(authentication);

// app.use((req, res, next) => {
//     console.log(`Datos received at:  ${req.method} ${req.url}`);
//     next();
// });

// app.use("/api", rutasProductos)


// app.use((req, res, next) => {
//     res.status(404).send('Recurso no encontrado o ruta inválida');
// });

// app.listen(PORT, () => {
//     console.log(`Servidor corriendo en http://localhost:${PORT}`)
// })

import express from "express";
import cors from "cors";
import rutasProductos from "./src/routes/products.routes.js";
import rutasLog from "./src/routes/auth.routes.js";
import { authentication } from "./src/middleware/authentication.js";

const app = express();

const corsConfig = {
  origin: ['http://localhost:3000', 'https://midominio.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Content-Length'],
  credentials: true,
  maxAge: 600,
  optionsSuccessStatus: 204
};

app.use(cors(corsConfig));
app.use(express.json());

app.use("/api", rutasLog);
app.use(authentication);

app.use((req, res, next) => {
  console.log(`Datos received at: ${req.method} ${req.url}`);
  next();
});

app.use("/api", rutasProductos);

app.use((req, res, next) => {
  res.status(404).send('Recurso no encontrado o ruta inválida');
});

// 👇❌ Eliminamos app.listen()
// app.listen(PORT, () => {
//   console.log(`Servidor corriendo en http://localhost:${PORT}`)
// });

// 👇✅ En su lugar exportamos la app
export default app;
