import { promises as fs } from 'fs';

const getOpenSourceLicenses = async () => {
  const folder = await fs.readdir('./node_modules');
  const dependencies = JSON.parse(await fs.readFile('./package.json', 'utf-8')).dependencies;
  const licenses: {
    license: string;
    name: string;
    description: string;
    homepage: string;
  }[] = [];
  for(const pkg of folder) {
    if(pkg.startsWith('.')) continue;
    if(pkg.startsWith('@')) {
      const subfolder = await fs.readdir(`./node_modules/${pkg}`);
      for(const subpkg of subfolder) {
        if(subpkg.startsWith('.')) continue;
        const packageJson = await fs.readFile(`./node_modules/${pkg}/${subpkg}/package.json`, 'utf-8');
        const {
          license, 
          name,
          description,
          repository
        }: {
          license: string;
          name: string;
          description: string;
          repository: string | {
            url: string;
          };
        } = JSON.parse(packageJson);
        if(dependencies[name]) {
          const url = typeof repository === 'string' ? repository : repository.url;
          licenses.push({
            license,
            name,
            description,
            homepage: url || ""
          });
        }
      }
      continue;
    }
    try{
      const packageJson = await fs.readFile(`./node_modules/${pkg}/package.json`, 'utf-8');
      const {
        license, 
        name,
        description,
        repository
      }: {
        license: string;
        name: string;
        description: string;
        repository: string | {
          url: string;
        };
      } = JSON.parse(packageJson);
      if(dependencies[name]) {
        const url = typeof repository === 'string' ? repository : repository.url;
        licenses.push({
          license,
          name,
          description,
          homepage: url || ""
        });
      }
    }
    catch(e) {
      // console.log(e);
    }
  }
  console.log(licenses);
  fs.writeFile('./licenses.json', JSON.stringify(licenses, null, 2));
};

getOpenSourceLicenses();