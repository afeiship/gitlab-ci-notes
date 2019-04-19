# gitlab-ci.yml
1. 文件到项目根目录，进行提交或者推送代码到Gitlab服务器，就可以很方便地持续集成/部署代码。
2. 文件会告诉Gitlab Runner做什么。

## Gitlab CI/CD运行原理
> 文件配置，找到指定的项目gitlab runner，runner运行相关的命令，进行编译、 集成、测试、交付、部署，一切顺利地话会分发到各个服务器（测试服务器、预发布服务器、正式服务器等），此时一个迭代开发上线流程走完。流程图如下。

## 执行流程
1. 默认情况下，它运行有三个流水线阶段stage：
2. build - test - deploy 的stages自定义
3. 多个阶段是按顺序执行的，可以修改顺序，如果其中一个阶段失败，则后续的阶段不会被执行，整个过程被认为失败
  ![](https://ws4.sinaimg.cn/large/006tNc79ly1g27qpr4988j30hs0dc3zd.jpg)
4. 自定义方式如下
  ```yml
  stages: - build - test - deploy
  ```

