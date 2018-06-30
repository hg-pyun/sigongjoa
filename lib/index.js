const program = require('commander');

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
        console.log(description);
    })
    .parse(process.argv);