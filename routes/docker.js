// docker.js

const router = require('express').Router();

router.get('/', (req, res, next) => {
  return res.json({
    docker: 'rocks! modified'
  });
});

module.exports = router;
