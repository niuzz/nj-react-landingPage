/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Wed Apr 04 2018
 *  File : util.js
 *******************************************/
export function changeStr(str) {
	// 匹配p
	const patternP = new RegExp(/<(p).*?>/gm)
	// 匹配img
	const patternImg = new RegExp(/<img.*?(?:>|\/>)/gm)
	// 结果
	return str.replace(patternP, "<p style='font-size: 14px; padding: 10px;'>").replace(patternImg, "<img style='width: 100%'>")
}


