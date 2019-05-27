import { Terminal } from '..'

Terminal.getCurrentPkgConfig(__dirname).then(pkg => console.log(pkg.version))
