#
# @Author: AK-12 
# @Date: 2019-01-11 12:47:04 
# @Last Modified by:   AK-12 
# @Last Modified time: 2019-01-11 12:47:04 
#

# start cmd
echo -n 'Module name: '
read name

# define path
path_root="./src"
path_core="${path_root}/core"
path_test="${path_root}/test"

# make dir
mkdir -p ${path_root}
mkdir -p ${path_core}
mkdir -p ${path_test}

# module file
core_module="${path_core}/${name}.ts"
# module test file
module_test_name="test_${name}"
test_module="${path_test}/${module_test_name}.ts"
# test entry
test="${path_test}/test.ts"
# index file
index="${path_root}/index.ts"

# init module
touch ${core_module}
content_module="export let ${name} = '${name}'"
echo ${content_module} > ${core_module}

# init module test file
touch ${test_module}
content_module_test="import { ${name} } from '../core/${name}'"
content_module_test_main="export function ${module_test_name}() {console.log(${name})}"
echo ${content_module_test} > ${test_module}
echo ${content_module_test_main} >> ${test_module}

# add module test to entry
content_test="import { ${module_test_name} } from './${module_test_name}'"
echo ${content_test} >> ${test}
echo "${module_test_name}()" >> ${test}

# add module to export
content_index="export * from './core/${name}'"
echo "${content_index}" >> ${index}