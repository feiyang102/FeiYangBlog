---
outline: deep
---

# 响应状态及其含义

当我们访问一个网页时，浏览器会向网页所在服务器发出请求。服务器返回给浏览器的信息中包含 HTTP 状态码的信息头，其中的状态码就是响应状态码。

HTTP 响应状态码分为五大类：

- 信息响应（1--）：服务器收到请求，需要请求者继续执行操作
- 成功响应（2--）：请求的操作被成功接收并处理
- 重定向（3--）：需要进一步操作以完成当前请求
- 客户端错误（4--）：请求包含语法错误或无法完成请求
- 服务端错误（5--）：服务器在处理请求的过程中发生了错误

请求详细定义看这里：[RFC2616](https://datatracker.ietf.org/doc/html/rfc2616)

## 1-- 信息响应

- 100 "continue"
- 101 "switching protocols"
- 102 "processing"
- 103 "early hints"

## 2-- 成功响应

- 200 "ok"
- 201 "created"
- 202 "accepted"
- 203 "non-authoritative information"
- 204 "no content"
- 205 "reset content"
- 206 "partial content"
- 207 "multi-status"
- 208 "already reported"
- 226 "im used"

## 3-- 重定向

- 300 "multiple choices"
- 301 "moved permanently"
- 302 "found"
- 303 "see other"
- 304 "not modified"
- 305 "use proxy"
- 307 "temporary redirect"
- 308 "permanent redirect"

## 4-- 客户端错误

- 400 "bad request"
- 401 "unauthorized"
- 402 "payment required"
- 403 "forbidden"
- 404 "not found"
- 405 "method not allowed"
- 406 "not acceptable"
- 407 "proxy authentication required"
- 408 "request timeout"
- 409 "conflict"
- 410 "gone"
- 411 "length required"
- 412 "precondition failed"
- 413 "payload too large"
- 414 "uri too long"
- 415 "unsupported media type"
- 416 "range not satisfiable"
- 417 "expectation failed"
- 418 "I'm a teapot"
- 421 "misdirected request"
- 422 "unprocessable entity"
- 423 "locked"
- 424 "failed dependency"
- 425 "too early"
- 426 "upgrade required"
- 428 "precondition required"
- 429 "too many requests"
- 431 "request header fields too large"
- 451 "unavailable for legal reasons"

## 5-- 服务端错误

- 500 "internal server error"
- 501 "not implemented"
- 502 "bad gateway"
- 503 "service unavailable"
- 504 "gateway timeout"
- 505 "http version not supported"
- 506 "variant also negotiates"
- 507 "insufficient storage"
- 508 "loop detected"
- 510 "not extended"
- 511 "network authentication required"
