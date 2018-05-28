var express = require("express");
var app = express();
var proxy = require("http-proxy-middleware");
var cors = require("cors");
// var apiproxy = [proxy("/v2/movie/top250", {
// 	target: "https://api.douban.com",
// 	changeOrigin: true
// }), proxy("/*", {
// 	target: "http://localhost:3000",
// 	changeOrigin: true
// })];
var apiproxy = [
	proxy("/v2", {
		target: "https://api.douban.com",
		changeOrigin: true
	}),
	proxy("/*", {
	target: "https://api.douban.com",
	changeOrigin: true
})];

app.use(cors());
app.use((req, res, next) => {
	req.headers = {
		"accept": "*/*",
		"accept-encoding": "gzip, deflate, sdch, br",
		"accept-language": "zh-CN,zh;q=0.8",
		"cache-control": "no-cache",
		"connection": "keep-alive",
		"host": "localhost:7001",
		"origin": "http://localhost:3000",
		"pragma": "no-cache",
		"referer": "http://localhost:3000/",
		"user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36"
	}
	next();
});
app.use((req, res, next) => {
	console.log(req.headers.referer);
	next();
})
app.use(apiproxy);


app.listen(7001, () => {
	console.log("port on 7001")
});