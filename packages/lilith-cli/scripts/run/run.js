const path = require('path')
const fs = require('fs-extra')
const updateNotifier = require('update-notifier')
const shell = require('shelljs')
const logger = require('../../lib/logger')
const config = require('../../config')

function compiler(mode, source) {
  logger.info(`当前工作目录: ${process.cwd()}`)
  let compilerSource = source
  try {
    logger.info('source', source)
    // 如果source 跟默认配置匹配则使用默认源，否则当做自定义源处理
    compilerSource = config.compiler[source] || source
  } catch (error) {} // eslint-disable-line

  let compileFunction = () => {}
  let currentSource = compilerSource
  let compileFuncitonPath = `./node_modules/${currentSource}/build/build.${mode}.js`

  logger.info(path.join(config.context, 'node_modules', currentSource))

  // 检查更新逻辑
  try {
    const pkg = require(path.resolve(
      `./node_modules/${currentSource}/package.json`
    ))
    const notifier = updateNotifier({ pkg })
    notifier.update && shell.exec(`yarn add ${compilerSource} -D`)
  } catch (error) {
    logger.info(`yarn add ${compilerSource} -D`)
    shell.exec(`yarn  add ${compilerSource} -D`)
  }
  logger.info('load compileFunciton from', path.resolve(compileFuncitonPath))
  compileFunction = require(path.resolve(compileFuncitonPath))
  const webpackSettings = config.webpack || {}
  logger.debug(webpackSettings)
  compileFunction(webpackSettings)
}

module.exports = compiler
