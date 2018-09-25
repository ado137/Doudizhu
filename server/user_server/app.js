 var cfg = require('../config');
 var config = cfg.userServer();

 var us = require('./user_server');
 us.start(config)