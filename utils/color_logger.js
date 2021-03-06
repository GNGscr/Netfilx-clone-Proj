/* author: Ajar <ajar@artizan.io> (https://artizan.io) */

const clc = require('cli-color');

module.exports = (caller = '') => {

    const logit = (color,msg,uncolored_msg)=>  {
        console.log(clc.cyanBright(caller),':: ',clc[color](msg),''+(uncolored_msg?uncolored_msg:''));
    }

    return  {
                red         : (msg,uncolored_msg) => logit('redBright',msg,uncolored_msg),
                green       : (msg,uncolored_msg) => logit('greenBright',msg,uncolored_msg),
                yellow      : (msg,uncolored_msg) => logit('yellowBright',msg,uncolored_msg),
                cyan        : (msg,uncolored_msg) => logit('cyanBright',msg,uncolored_msg),
                magenta     : (msg,uncolored_msg) => logit('magentaBright',msg,uncolored_msg),
                info        : (msg,uncolored_msg) => logit('cyanBright',msg,uncolored_msg),
                warn        : (msg,uncolored_msg) => logit('yellowBright',msg,uncolored_msg),
                error       : (err) => {
                                logit('redBright','ERROR: ',err.message)
                                let odd = true;
                                let stack = err.stack? err.stack.split('\n') : [];
                                //exclude stack traces from node_modules
                                stack = stack.filter(line=>line.includes('node_modules') === false);
                                for(let line of stack){
                                    odd = !odd
                                    //keep it short
                                    line = line.substr(line.lastIndexOf('\\') - 50);
                                    //alternating row colors
                                    odd? console.log(line)  : logit('yellowBright',line) 
                                }
                              },
                dir         :   (msg,obj) => {
                                    logit('cyanBright',msg);
                                    console.dir(obj);
                                }
            }
}
