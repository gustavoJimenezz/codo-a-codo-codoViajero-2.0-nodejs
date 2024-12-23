const { body, validationResult } = require('express-validator');

const validationRegister = [
  body('name')
    .isLength({ min: 3 })
    .withMessage('The name must be at least 3 characters.')
    .isAlpha('es-ES', { ignore: ' ' })
    .withMessage('The name must only contain letters and spaces')
    .trim()
    .escape()
    .exists(),
    
  body('lastName')
    .notEmpty().withMessage('Last name cannot be empty.') // Verifica que no esté vacío
    .isLength({ min: 3 }).withMessage('Last name must be at least 3 characters.') // Verifica que tenga al menos 3 caracteres
    .matches(/^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/).withMessage('The last name should only contain letters and spaces') // Solo letras y espacios
    .trim() // Elimina los espacios al principio y al final
    .escape() // Escapa caracteres especiales
    .exists().withMessage('Last name is required'),
    
  body('email')
    .isEmail()
    .withMessage('Invalid email.')
    .exists(),

  body('password')
    .isLength({ min: 6 })
    .withMessage('The password must be at least 6 characters long.')
    .exists(),

  body('confirmPassword')
  .notEmpty().withMessage('Confirmation password is required.')
  .custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Passwords do not match.');
    }
    return true;
  }),

  (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
    
      const values = req.body;
      const validations = errors.array();
      return res.render('login/signUp', {validations: validations, values: values});
    }
    next();
  }
];

const validationLogin = [
  body('email')
  .isEmail()
  .withMessage('Invalid email.')
  .exists(),

  body('password')
  .isLength({ min: 6 })
  .withMessage('The password must be at least 6 characters long.')
  .exists(),


  (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      const values = req.body;
      const validations = errors.array();

      console.log(validations);
      return res.render('login/login', {validations: validations, values: values})
    }
    next();
  }

];

module.exports = {
  validationRegister, 
  validationLogin
};
