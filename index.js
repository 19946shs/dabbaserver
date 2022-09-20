'use strict';

const app = require('./server');

app.listen(3000, () => console.log('%cDebug SERVER :: ', 'background: #222; color: #bada55', 'App running on 3000'));
