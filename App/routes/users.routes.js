var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const bodyParser = require('body-parser');
const cors = require('cors');

const { verifyToken, isAdmin } = require('../middlewares/authJwt')
const { checkDuplicateUsernameOrEmail, checkRolesExisted } = require('../middlewares/verifySignup')
const Usuario = require('../models/usuario');

router.use(bodyParser.json());

// OBTENEMOS LOS CONTROLADORES
let { getUser, getAllUsers, createUser, deleteUser, deleteAllUsers, updateUser } = require('../controllers/users.controller')

// RUTAS 
/*
 * RUTA: USUARIOS (api/users)
 * * GET: Obtener todos la lista de usuarios. Rol: ADMIN.
 * * * Requirements:
 * * * * Rol: ADMIN
 * * * * Token: true
 * * POST: Crear un usuario con rol. Rol: ADMIN.
 * * * Requirements:
 * * * * Rol: ADMIN
 * * * * Token: true
 * * * * Body(raw(json)): { username, nombres, apellidos, email, password, roles (user, admin, moderator) }
 * * * Output:
 * * * * Devuelve el token del usuario.
 * * DELETE: Borrar todos los usuarios. Rol ADMIN.
 * * * Requirements:
 * * * * Rol: ADMIN
 * * * * Token: true
 * * * Output:
 * * * * Mensaje de status.
 * * DELETE: Borrar todos los usuarios. Rol ADMIN.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * RUTA: profile (api/users/profile)
 * * GET: Para obtener la información publica de un usuario con el token. Rol: ALL.
 * * * Requirements:
 * * * * Rol: >=user
 * * * * Token: true
 * * PUT: Actualizar los datos de un usuario. Rol: ADMIN.
 * * * Requirements:
 * * * * Rol: admin
 * * * * Token: true
 * * * * Body(raw(json)): { username, nombres, apellidos, email, password, roles (user, admin, moderator) }
 * * * Output:
 * * * * Mensaje de status.
 * * DELETE: Eliminar un usuario mediante el Id. Rol: ADMIN
 * * * Requirements:
 * * * * Rol: Admin
 * * * * Token: true
 * * * Output:
 * * * * Mensaje de status.
 */
router.route('/')
.get([verifyToken, isAdmin], getAllUsers) 
.post([verifyToken, isAdmin, checkRolesExisted, checkDuplicateUsernameOrEmail], createUser)
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /users');
})
.delete([verifyToken, isAdmin], deleteAllUsers);

router.route('/profile')
.get(cors(),[verifyToken], getUser)
.put([verifyToken, isAdmin], updateUser)
.options(cors(),(req, res, next) => {
    res.end();
})
.delete([verifyToken, isAdmin], deleteUser);

module.exports = router;
