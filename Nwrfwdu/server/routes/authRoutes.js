const passport = require('passport');

module.exports = app => {
  
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
    passport.authenticate('google') 
  );

}

