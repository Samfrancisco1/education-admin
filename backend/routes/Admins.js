const express = require("express");
const admins = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const Bcrypt = require("bcryptjs");

const Admin = require("../Models/Admin")

admins.use(cors());

process.env.SECRET_KEY = 'secret';

admins.post('/register', (req, res) => {
    const today = new Date();
    const adminData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        address: req.body.address,
        status: req.body.status,
        date_reg: today,
        image: req.body.image
    }

    Admin.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(admin => {
        if(!admin){
            Bcrypt.hash(req.body.password, 10, (err, hash) => {
                adminData.password = hash;
                Admin.create(adminData)
                .then(admin => {
                    res.json({status: admin.email + "Registered"});
                })
                .catch(err => {
                    res.send(err);
                });
            });
        }else{
            res.json({error: "Admin Already exists"});
        }
    })
    .catch(err => {
        res.send(err);
    });
});

admins.post('/login', (req, res) => {
    Admin.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(admin => {
        if (admin) {
          if (Bcrypt.compareSync(req.body.password, admin.password)) {
            let token = jwt.sign(admin.dataValues, process.env.SECRET_KEY, {
              expiresIn: 1440
            })
            res.send(token);
          }
        } else {
          res.status(400).json({ error: 'Admin does not exist' });
        }
      })
      .catch(err => {
        res.status(400).json({ error: err })
      });
  });

module.exports = admins;
