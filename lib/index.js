const program = require('commander');
const sigong = require('./sigong');
const chalk = require('chalk');
const chalkAnimation = require('chalk-animation');

/**
 *  Usage
 */
program
    .version(require('../package').version)
    .usage('<sigongjoa>')
    .command('description', 'write down your sentence');

/**
 *  commands
 */
program
    .arguments('<description>')
    .action(function (description) {
        const result = sigong(description);
        console.log(chalk.green('♨@시공의@♜폭풍은♜￥정말￥☆최고야!￥'));
        chalkAnimation.rainbow(result);
    })
    .parse(process.argv);