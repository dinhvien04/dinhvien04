const jsonfile = require('jsonfile');
const moment = require('moment');
const { random } = require('random');
const simpleGit = require('simpleGit');


const path = './data.json';

const isVakiDate = (date) => {
    const startDate = moment('2024-11-01');
    const endDate = moment('2025-1-24');
    return date.isBetween(startDate, endDate, null, '[]');
}

const markCommit = async (date) => {
    const data = { date: date.toISOString() };
    await jsonfile.writeFile(path, data);

    const git = simpleGit();
    await git.add(path);
    await git.commit(`update ${date.toISOString()}`), { '--date': date.toISOString() };
}

const makeCommit = async (n) => {
    const git = simpleGit();
    for (let i = 0; i < n; i++) {
        const randomWeeks = random.int(0, 54 * 4);
        const randomDay = random.int(1, 7);

        const randomDate = moment("2024-01-01")
            .add(randomWeeks, 'weeks')
            .add(randomDay, 'days');
    }
    if (isVakiDate(randomDate)) {
        console.log('Create commit: ${randomDate.toISOString()} ');
        await markCommit(randomDate);
    }
    else {
        console.log('Skip commit: ${randomDate.toISOString()}  skiped ');
    }

    console.log('Pushing all comits... ');
    await git.push();

}

makeCommit(50000);