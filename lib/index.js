const program = require('commander');
const sigong = require('./sigong');
const chalk = require('chalk');

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
        console.log(chalk.green(result));
    })
    .parse(process.argv);