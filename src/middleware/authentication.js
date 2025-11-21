// import jwt from 'jsonwebtoken';
//   import 'dotenv/config';
//   const secret_key = process.env.JWT_SECRET_KEY;
//   // Middleware para verificar el token JWT
//   export const authentication = (req, res, next) => {
//     const token = req.headers['authorization'].split(" ")[1];

//     if (!token) return res.sendStatus(401);


//     jwt.verify(token, secret_key, (err) => {
//         if (err) return res.sendStatus(403);
//         next();
//     });
//   }

import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret_key = process.env.JWT_SECRET_KEY;

// Middleware para verificar el token JWT
export const authentication = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  // 👇 Verifica que el encabezado exista antes de usar split()
  if (!authHeader) {
    return res.status(401).json({ message: 'No se proporcionó token de autorización' });
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token faltante' });
  }

  jwt.verify(token, secret_key, (err) => {
    if (err) return res.status(403).json({ message: 'Token inválido' });
    next();
  });
};
