import { Command } from 'commander';
import axios from 'axios';

const program = new Command();

program
.name('git-status')
.description('CLI to fetch GitHub user activity')
.version('1.0.0');

program
.command('activity <username>')
.description('Get the activity of a user on GitHub')
.action(async (username) => {
    try {
        const response = axios.get(`https://api.github.com/users/${username}/events`);
        console.log((await response).data);
    } catch (error) {
       console.error('Error fetching user status:', error);
    }
});

program.parse(process.argv);