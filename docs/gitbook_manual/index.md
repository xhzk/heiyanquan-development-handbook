API命名规范

| 操作 | 前缀   | 事例        |
| ---- | ------ | ----------- |
| 获取 | get    | get{XXX}    |
| 新增 | add    | add{XXX}    |
| 修改 | update | update{XXX} |
| 删除 | delete | delete{XXX} |
| 上传 | upload | upload{XXX} |
| 发送 | send   | send{XXX}   |

路由命名规范

## 请求方式

| 请求方式 | 描述     |
| :------- | :------- |
| GET      | 获取数据 |
| POST     | 新增数据 |
| PUT      | 更新数据 |
| DELETE   | 删除数据 |

## 返回参数

| 参数     | 类型   | 说明     | 备注                              |
| :------- | :----- | :------- | :-------------------------------- |
| code     | Number | 结果码   | 成功=1失败=-1未登录=401无权限=403 |
| showMsg  | String | 显示信息 | 系统繁忙，稍后重试                |
| errorMsg | String | 错误信息 | 便于研发定位问题                  |
| data     | Object | 数据     | JSON 格式                         |