import { promises as fs } from 'fs';
import ENV from './.env.json';

const makeEnv = async () => {
  const env = Object.entries(ENV);
  let envString = '';
  for(const [key, value] of env) { 
    envString += `${key}=${value}\n`;
  }
  await fs.writeFile('.env', envString);
};
makeEnv();
