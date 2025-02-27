/**
 * Este ficehero contralara las funciones que podrán hacer los usuarios
 * en la página web, usuario tendra las siguientes funcionalidades
 * - Registrarse
 * - Iniciar Sesion
 * - 
 */
const express = require('express');

const REQUEST = express.request;
const RESPONSE = express.response;
const {SuccesResponse, ErrorResponse} = require('../services/handlerResponses');
const { createUserWithEmailAndPassword } = require('firebase/auth');
const { auth } = require('../config/firebaseConfig');
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

const UserController = {
    signUp : async function (req=REQUEST, res=RESPONSE) {
        // El body debe ser de la forma "username, password"
        const {email, password} = req.body;
        if (!email || !password) {
            return res.status(404).json(new ErrorResponse("Debe completar el formulario").getError())
        }
       try {
        const responseFirebase = await createUserWithEmailAndPassword(auth, email, password);
        
        const user ={
            uid : responseFirebase.user?.uid,
            email 
        }
        const userJWT = jwt.sign(user, SECRET_KEY);
        res.send(new SuccesResponse(userJWT));

       } catch (err) {
        console.log(err );
        
        res.status(404).send(new ErrorResponse("Usuario en uso").getError())
       }
    }
}
module.exports = UserController;