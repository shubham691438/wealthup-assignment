var express = require('express');
var router = express.Router();
const Code =require('../models/codeModel')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({msg:"welcome to api"});
});

router.get('/codes', async (req, res) => {
    try {
      const newCode = new Code({ value: generateCode() });
      await newCode.save();
      res.json({ code: newCode.value });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  function generateCode() {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const codeLength = Math.floor(Math.random() * (6 - 5 + 1)) + 5; 
    let code = '';
  
    for (let i = 0; i < codeLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters[randomIndex];
    }
  
    return code;
  }

  router.post('/codes/use', async (req, res) => {
    const { code } = req.body;
  
    try {
      const existingCode = await Code.findOne({ value: code });
  
      if (!existingCode) {
        res.status(400).json({ error: 'Enter a valid code' });
      } else if (existingCode.used===true) {
        res.status(400).json({ error: 'This code has already been used' });
      } else if (isCodeExpired(existingCode.createdAt)) {
        res.status(400).json({ error: 'The code has expired' });
      } else {

        
        existingCode.used = true;
        await existingCode.save();
        res.json({ message: 'Code is correct' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  function isCodeExpired(createdAt) {
    const currentTime = Date.now();
    return currentTime - createdAt >  60 * 1000;
  }



module.exports = router;
