/**
 * 通用 http 请求方法
 * @module utils/http
 *
 * @example
 * //引入
 * import {postJson, handler} from 'bh-vue/utils/http'
 * // 请求并获取结果中 datas.rows 的数据
 * postJson('http://xxx.do', {a:1}, handler.ROWS);
 */

let http = Vue.http;

// 封装一些通用处理，更方便的解析返回数据格式
// 只需要判断返回结果是否正常
let _code = (data) => {
    if (data && (data.code === '0' || data.code === 0)) {
        return data;
    } else {
        throw data;
    }
};

// 一般是emap返回的数据格式
let _rows = (data) => {
    data = _code(data);
    if (data && data.datas && data.datas.rows) {
        return data.datas.rows;
    } else {
        return [];
    }
};

// 列表数据
let _datas = (data) => {
    data = _code(data);
    if (data && data.datas !== undefined) {
        return data.datas;
    } else {
        return [];
    }
};

// 一般用来获取emap表单数据
let _firstRow = (data) => {
    data = _code(data);
    if (data && data.datas && data.datas.rows) {
        return data.datas.rows[0];
    } else {
        return null;
    }
};

/**
 * 简化一下ajax调用，基于 [vue resource]
 */
export function postJson (url, params, processFunc) {
    return http.post(url, params).then((response) => {
        return processFunc ? processFunc(response.data) : response.data;
    });
};

/**
 * 简化一下ajax调用，基于 [vue resource]，使用form-urlencoded方式
 */
export function postForm (url, params, processFunc) {
    // 需要jquery设置 traditional 处理参数格式给后端处理
    return http.post(url, $.param(params, true), {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).then((response) => {
        return processFunc ? processFunc(response.data) : response.data;
    });
};

/**
 * 简化一下ajax调用，基于 [vue resource]，使用get方式发送请求
 */
export function getJson (url, params, processFunc) {
    return http.get(url, params).then((response) => {
        return processFunc ? processFunc(response.data) : response.data;
    });
};

/**
 * 简化一下ajax调用，基于bh_util中封装的方法
 * @param {String} url 请求地址
 */
export function promiseReq (url, params, processFunc) {
    return new Promise((resolve, reject) => {
        BH_UTILS.doAjax(url, params, 'POST').done((response) => {
            if (processFunc) {
                try {
                    resolve(processFunc(response));
                } catch (e) {
                    reject();
                }
            } else {
                resolve(response);
            }
        }).fail((...args) => {
            reject(args);
        });
    });
};


/* 增加loading动画 ---added by zsl 2016-12-19 --- */
/*------------start------------- */
let _enableLoading = false;
export function enableLoading (options) {
    if(_enableLoading) return;

    let defaultOps = {uniqueMask: true};
    options = $.extend({}, defaultOps, options);
    
	let requestCount = 0;
	let beginRequest = function () {
		requestCount++;
		if($('#jqxLoader').length < 1) {
			$('body').append($('<div id="jqxLoader"></div>'));
			$('#jqxLoader').jqxLoader({ isModal: true });
			//修改loading组件样式
			$('#jqxLoader').css({
			  'position': 'fixed',
			  'left': 0,
			  'top': 0,
			  'z-index': 999999
			});
			//修改loading遮罩层样式
			$('.jqx-loader-modal').css({
			  'z-index': 99999,
			  'opacity':  0.4
			});
		}

		//重置loader dom位置
		$('#jqxLoader').jqxLoader('open');
		$('#jqxLoader').css({
		  'left': 0,
		  'top': 0
		});
        //隐藏其它遮罩层
        if(options.uniqueMask === true) {
            $('.jqx-window-modal').hide();    
        }
	};
	let endRequest = function () {
		requestCount--;
		if(requestCount < 1 && $('#jqxLoader').length > 0) {
			//关闭loading组件
			$('#jqxLoader').jqxLoader('close');
            //还原其它遮罩层
            if(options.uniqueMask === true) {
                $('.jqx-window-modal').show();    
            }
		}
	};
	Vue.http.interceptors.push((request, next) => {
	  beginRequest();
	  next((response) => {
	    endRequest();
	    return response;
	  });
	});
	_enableLoading = true;
};
/*------------end------------*/

/**
 * 一些常用处理返回结果的方法枚举，用于设置请求参数 processFunc
 * @property {Function} CODE 判断返回结果中 code 是否为 0
 * @property {Function} ROWS 返回结果中 datas.rows
 * @property {Function} DATAS 返回结果中 datas
 * @property {Function} FIRST_ROW 返回结果中 datas.rows[0]
 */
export const handler = {
    CODE: _code,
    ROWS: _rows,
    DATAS: _datas,
    FIRST_ROW: _firstRow
};
