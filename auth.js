module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
  
    if (authHeader) {
      const encodedCredentials = authHeader.split(' ')[1];
      const credentials = Buffer.from(encodedCredentials, 'base64').toString('utf-8');
      const [username, password] = credentials.split(':');
  
      //login et mot de passe de connexion afin de passer l'authentification!
      if (username === 'remi' && password === 'testtechnique') {
        return next();
      }
    }
  
    res.setHeader('WWW-Authenticate', 'Basic realm="Restricted Area"');
    res.status(401).send('Unauthorized');
  };