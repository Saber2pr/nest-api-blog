## 1. nest-api-hello
hello接口服务

## 2. 接口列表
### 2.1 /hello/word/create
* 接口：POST /hello/word/create
* 说明：创建单词
* 参数：
  - word: string, 必选, 单词

### 2.2 /hello/word/update
* 接口：POST /hello/word/update
* 说明：更新单词
* 参数：
  - id: number, 必选, 单词id
  - word: string, 必选, 单词

### 2.3 /hello/word/list
* 接口：GET /hello/word/list
* 说明：获取单词
* 参数：
  - id: number, 必选, 单词id

### 2.4 /hello/word/delete
* 接口：DELETE /hello/word/delete
* 说明：删除单词