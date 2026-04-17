import { exec } from 'child_process';

exec('npm run build', (error, stdout, stderr) => {
  console.log('--- STDOUT ---');
  console.log(stdout);
  console.log('--- STDERR ---');
  console.error(stderr);
});
