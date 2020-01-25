const express = require('express');

const router = express.Router();

const project = require('.././data/helpers/projectModel');
const Action = require('.././data/helpers/actionModel');

//========================== Get ============================================
router.get('/', ( req,res ) => {
  project.get(req.query)
    .then(go => {
      res.status(200).json(go);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: 'error retrieving'
      });
    });
});

//=========================== Delete ========================================
router.delete('/:id', validateProjectId, ( req,res ) => {
  project.remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: "succesfully deleted"});
      } else {
        res.status(404).json({ message: "This item count not be found"});
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Error: Could not remove'})
    })
})

//============================= Put ==========================================


//=========================== Post ============================================

function validateProjectId(req, res, next) {
  const {id} = req.params;
  project.get(id)
    .then(go => {
      if(go) {
        req.go = go;
        next();
      } else {
        res.status(404).json({message: 'does not exist'});
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({message: 'exception', err})
    });
}
module.exports = router;