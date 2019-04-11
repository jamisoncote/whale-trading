const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const helper = {

  hashPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
  },

  comparePassword(hashPassword, password) {
    return bcrypt.compareSync(password, hashPassword);
  },

  /**
   * Regex is saying...
   * test if the email input...
   * starts with: string (/\S) i.e. john
   * then: @ (+@) i.e. @ 
   * then: string (\S) i.e. gmail
   * then: . (\.) i.e. .
   * then: string i.e. com
   * end: (/)
   * and if so, it is valid
   */
  isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  },

  /**
   * after we authenticate the user, need to assign a jwt
   * generating jsonwebtoken
   * returns json with {userId: id, token: j4Idm984s...}
   */
  generateToken(id) {
    const token = jwt.sign({
      userId: id
    },
      'secretkey', { expiresIn: '1d' }
    );
    return token;
  }
};

module.exports = helper;