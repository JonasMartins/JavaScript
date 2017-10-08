const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');


const app = express();




passport.use(

  new GoogleStrategy({

    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'

  }, (accessToken, refreshToken, profile, done) => {
    console.log('access token',accessToken);
    console.log('refresh token',refreshToken);
    console.log('profile',profile);
  })

);

app.get('/auth/google', 
  
  // objeto passaport tentando autenticar esse usuario
  // que veio desse link atravéz da estratégia google 
  // essa string google refere-se a GoogleStrategy mais acima
  
  passport.authenticate('google', {
    scope: ['profile','email']
  })
);
//  a diferença dessa chamada a estratégia google
//  é que dessa vez o code já vem junto na url e o 
//  passport vai saber manejar esse novo dado para 
//  trocar code pelo user profile.
//  após clicar na autenticação da conta, o google
//  vai redirecionar de volta para o server da nossa aplicação
//  
//  e retorna junto com ele e loga o accesstoken que é passado
//  com callback vindo do google 
//  
app.get('/auth/google/callback', 
  passport.authenticate('google') );


const PORT = process.env.PORT || 5000;

app.listen(PORT);