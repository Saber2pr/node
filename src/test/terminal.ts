import { Terminal } from '..'

Terminal.getCurrentPkgConfig().then(pkg => console.log(pkg.version))
