/**
 * 检测是否为13位数字
 *
 * @method     isTel
 * @param      {string || number}  tel	电话号码;
 */
function isTel(tel) {
    var reg = new RegExp("^\\d{13}$");
    var is_tel;

    is_tel = reg.test(tel);

    return is_tel;
};

var tel = isTel("1234567890121");

console.log(tel);

function parseURL(url) {
	var reg = new RegExp("[^.]+");

	var protocol, domain;
	domain = reg.exec(url)[0].substr(7);
	protocol = reg.exec(url)[0].substr(0, 7);

	console.log(protocol, domain);
}

parseURL("http://google.com.hk");
	