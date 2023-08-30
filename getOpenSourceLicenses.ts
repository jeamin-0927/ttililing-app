import {promises as fs} from 'fs';

const getOpenSourceLicenses = async () => {
  const folder = await fs.readdir('./node_modules');
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
          homepage
        }: {
          license: string;
          name: string;
          description: string;
          homepage: string;
        } = JSON.parse(packageJson);
        licenses.push({
          license,
          name,
          description,
          homepage: homepage || ""
        });
        if(!license) {
          // console.log(name);
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
        homepage
      }: {
        license: string;
        name: string;
        description: string;
        homepage: string;
      } = JSON.parse(packageJson);
      licenses.push({
        license,
        name,
        description,
        homepage: homepage || ""
      });
      if(!license) {
        // console.log(name);
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