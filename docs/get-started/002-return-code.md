# return code

## return error
```yml
variables:
  PROJECT_DIR: /store/project/software/thumbnail-generator

stages:
  - build

build:
  stage: build
  only:
    - develop
  script:
    - ssh tss@10.1.0.210 "cd $PROJECT_DIR && git pull && ./bin/restart.sh"
  tags:
    - dev-editor
```

## 解析
1. ssh -xx 这种命令会 return 1
2. gitlab 会以为报错了
3. 解决方案：加一个 || true 或者  pwd 加一行
