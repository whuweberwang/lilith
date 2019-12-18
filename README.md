# Lilith

一个页面模板构建工具，并且模板可以独立运行。

## 命令说明

```bash
Usage: lilith [options] [command]

Options:
  -v, --version                   version
  --root <string>                 模板所在根目录,相对目录,基于context来获取root的绝对路径，默认值"_template" (default: "_template")
  --context <string>              lilith.config.js文件所在目录 > 优先级package.json所在目录 > process.cwd() (default: "/Users/lizhuo/liz/lilith")
  --target <string>               新生成模块的输出路径，相对process.cwd(),默认"." (default: ".")
  --template <string>             当前使用的模板，模板可选范围即root下面指定的模板，支持简写即当前有模板page那么p,pa,pag等效
  --name <string>                 新生成模块的名称
  --mode <string>                 编译模式 template dev build (default: "dev")
  --source <string>               编译源默认值 @qfed/lilith-compiler (default: "@qfed/lilith-compiler")
  --type <string>                 创建的模版类型
  -h, --help                      output usage information

Commands:
  new <template> <name> [target]  Lilith 模板创建命令
  run <mode> [source]             lilith 编译命令
  create [<templateName>]

Examples:
  $ lilith run dev
  $ lilith new template someTemplate
```  

# TODO

- [ ] new 命令合理提示
- [ ] README
- [ ] 端口号自动增长
- [ ] 指定config 文件位置
- [ ] lilith log 优化只有error 时输出log，并且只有真正发生error 时创建log文件
- [ ] lilith cli 和Lilith compiler 版本同步问题，计划用lerna 统一管理，同步发版
