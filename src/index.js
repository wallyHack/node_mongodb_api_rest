
// arranca la aplicación

import app from './app';
import '@babel/polyfill';
import { connect } from './database/database';

// settings
app.set('port', process.env.PORT || 5001);
app.set("json spaces", 2);

// starting the server
async function main(){
    await app.listen(app.get('port'));
    await connect();
    console.log(`Server on port ${app.get('port')}`);
};

main();