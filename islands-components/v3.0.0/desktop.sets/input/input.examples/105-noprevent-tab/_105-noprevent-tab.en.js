var BEMHTML = function() {
  var $$mode, $$block, $$elem, $$elemMods, $$mods;
  var cache,
      exports = {},
      xjst = (function (exports) {
    function $1(__$ctx) {
        var __t = $$mode;
        if (__t === 'content') {
            return $2(__$ctx);
        } else if (__t === 'mix') {
            return $33(__$ctx);
        } else if (__t === 'js') {
            return $47(__$ctx);
        } else if (__t === 'default') {
            return $67(__$ctx);
        } else if (__t === 'tag') {
            return $89(__$ctx);
        } else if (__t === '') {
            return $97(__$ctx);
        } else {
            return $105(__$ctx);
        }
    }
    function $2(__$ctx) {
        var __t = $$block;
        if (__t === 'b-autocomplete-item') {
            if (!($$mods && $$mods.type === 'lingvo') === false) {
                if (!!$$elem === false) {
                    var _$gndata = __$ctx.ctx.data[1];
                    return [
                        {
                            tag: 'span',
                            elem: 'text',
                            content: _$gndata.text
                        },
                        {
                            tag: 'span',
                            elem: 'translation',
                            content: [
                                ' \u2014 ',
                                _$gndata.translation
                            ]
                        }
                    ];
                    return;
                } else {
                    return $9(__$ctx);
                }
            } else {
                return $9(__$ctx);
            }
        } else if (__t === 'popup') {
            if (!!$$elem === false) {
                return [
                    {
                        elem: 'under',
                        mods: __$ctx.ctx.underMods
                    },
                    __$ctx.ctx.content
                ];
                return;
            } else {
                return $105(__$ctx);
            }
        } else {
            return $105(__$ctx);
        }
    }
    function $9(__$ctx) {
        if (!($$mods && $$mods.type === 'foot') === false) {
            if (!!$$elem === false) {
                return __$ctx.ctx.data.slice(1).map(function (chunk) {
                    return this._.isArray(chunk) ? {
                        tag: 'span',
                        elem: 'foot',
                        content: chunk[0]
                    } : chunk;
                }, __$ctx);
                return;
            } else {
                return $15(__$ctx);
            }
        } else {
            return $15(__$ctx);
        }
    }
    function $15(__$ctx) {
        if (!($$mods && $$mods.type === 'nav') === false) {
            if (!!$$elem === false) {
                return {
                    elem: 'link',
                    tag: 'a',
                    attrs: {
                        href: __$ctx._url,
                        target: '_blank'
                    },
                    content: [
                        {
                            elem: 'link-url',
                            tag: 'span',
                            content: __$ctx._linkUrlContent
                        },
                        {
                            elem: 'link-info',
                            tag: 'span',
                            content: __$ctx._linkInfoConten
                        }
                    ]
                };
                return;
            } else {
                return $21(__$ctx);
            }
        } else {
            return $21(__$ctx);
        }
    }
    function $21(__$ctx) {
        if (!!$$elem === false) {
            var _$ghdata = __$ctx.ctx.data, _$ghiCommonString = BEM.blocks['i-common__string'], _$ghtext = _$ghiCommonString.escapeHTML(__$ctx._.isArray(_$ghdata) ? _$ghdata[1] : _$ghdata);
            return _$ghiCommonString.highlight(_$ghtext, __$ctx.ctx.hl);
            return;
        } else {
            return $105(__$ctx);
        }
    }
    function $33(__$ctx) {
        if ($$block === 'b-autocomplete-item') {
            if (!($$mods && $$mods.type === 'foot') === false) {
                if (!!$$elem === false) {
                    return [{ mods: { enterable: 'no' } }];
                    return;
                } else {
                    return $40(__$ctx);
                }
            } else {
                return $40(__$ctx);
            }
        } else {
            return $105(__$ctx);
        }
    }
    function $40(__$ctx) {
        if (!!$$elem === false) {
            return [{ mods: { pers: __$ctx.ctx.pers ? 'yes' : '' } }];
            return;
        } else {
            return $105(__$ctx);
        }
    }
    function $47(__$ctx) {
        if ($$block === 'b-autocomplete-item') {
            if (!($$mods && $$mods.type === 'nav') === false) {
                if (!!$$elem === false) {
                    return { val: __$ctx._url };
                    return;
                } else {
                    return $54(__$ctx);
                }
            } else {
                return $54(__$ctx);
            }
        } else {
            return $105(__$ctx);
        }
    }
    function $54(__$ctx) {
        if (!!$$elem === false) {
            return true;
            return;
        } else {
            if (!__$ctx.ctx['search_cgi'] === false) {
                if (!__$ctx._.isArray(__$ctx.ctx['search_cgi']) === false) {
                    return { cgi: __$ctx.ctx['search_cgi'] };
                    return;
                } else {
                    return $105(__$ctx);
                }
            } else {
                return $105(__$ctx);
            }
        }
    }
    function $67(__$ctx) {
        var __t = $$block;
        if (__t === 'b-autocomplete-item') {
            return $68(__$ctx);
        } else if (__t === 'popup') {
            return $79(__$ctx);
        } else {
            return $105(__$ctx);
        }
    }
    function $68(__$ctx) {
        if (!(__$ctx['__$anflg36'] !== true) === false) {
            if (!($$mods && $$mods.type === 'nav') === false) {
                if (!!$$elem === false) {
                    return $72(__$ctx);
                } else {
                    return $105(__$ctx);
                }
            } else {
                return $105(__$ctx);
            }
        } else {
            return $105(__$ctx);
        }
    }
    function $72(__$ctx) {
        var __r0, __r5, __r1, __r2, __r3, __r4;
        var _$gidata = __$ctx.ctx.data, _$giurlData = _$gidata[4], _$giurl = (_$giurlData.match(/^\w[\w-]*:\/\//g) ? '' : 'http://') + _$giurlData, _$gilinkUrlContent = BEM.blocks['i-common__string'].escapeHTML(_$gidata[3]), _$gilinkInfoConten = '&nbsp;&mdash;&nbsp;' + BEM.blocks['i-common__string'].highlight(_$gidata[2], __$ctx.ctx.hl);
        return '', __r0 = __$ctx['__$anflg36'], __$ctx['__$anflg36'] = true, __r5 = ('', __r1 = __$ctx._linkUrlContent, __$ctx._linkUrlContent = _$gilinkUrlContent, __r2 = __$ctx._linkInfoConten, __$ctx._linkInfoConten = _$gilinkInfoConten, __r3 = __$ctx._url, __$ctx._url = _$giurl, __r4 = $68(__$ctx), __$ctx._linkUrlContent = __r1, __$ctx._linkInfoConten = __r2, __$ctx._url = __r3, '', __r4), __$ctx['__$anflg36'] = __r0, '', __r5;
        return;
    }
    function $79(__$ctx) {
        if (!!__$ctx._popupDefaults === false) {
            if (!!$$elem === false) {
                return $82(__$ctx);
            } else {
                return $105(__$ctx);
            }
        } else {
            return $105(__$ctx);
        }
    }
    function $82(__$ctx) {
        var _$gactx = __$ctx.ctx;
        _$gactx.mods = $$mods = __$ctx.extend({
            theme: 'ffffff',
            autoclosable: 'yes',
            adaptive: 'yes',
            animate: 'yes'
        }, $$mods);
        if (_$gactx.zIndex) {
            var _$gaattrs = _$gactx.attrs || (_$gactx.attrs = {});
            _$gaattrs.style = (_$gaattrs.style || '') + ';z-index:' + _$gactx.zIndex + ';';
        } else {
            undefined;
        }
        {
            '';
            var __r0 = __$ctx._popupDefaults;
            __$ctx._popupDefaults = true;
            $79(__$ctx);
            __$ctx._popupDefaults = __r0;
            '';
        }
        undefined;
        return;
    }
    function $89(__$ctx) {
        if ($$block === 'b-autocomplete-item') {
            if (!!$$elem === false) {
                return 'li';
                return;
            } else {
                return $105(__$ctx);
            }
        } else {
            return $105(__$ctx);
        }
    }
    function $97(__$ctx) {
        if (!__$ctx._ === false) {
            if (!!__$ctx._.cleverSubstring === false) {
                __$ctx._.cleverSubstring = function cleverSubstring(str, maxLength, maxLengthRelative) {
                    return str.length > maxLength + maxLengthRelative ? str.substring(0, maxLength - 1) + '\u2026' : str;
                };
                applyc(__$ctx);
                undefined;
                return;
            } else {
                return $105(__$ctx);
            }
        } else {
            return $105(__$ctx);
        }
    }
    function $105(__$ctx) {
        if ($$block === 'popup') {
            if (!($$mode === '' && __$ctx._popupDefaults) === false) {
                delete __$ctx._popupDefaults;
                applyc(__$ctx);
                undefined;
                return;
            } else {
                return $111(__$ctx);
            }
        } else {
            return $111(__$ctx);
        }
    }
    function $111(__$ctx) {
        var __t = $$mode;
        if (__t === 'content') {
            var __t = $$block;
            if (__t === 'input') {
                var __t = $$elem;
                if (__t === 'clear') {
                    if (!!__$ctx.ctx.content === false) {
                        return '';
                        return;
                    } else {
                        return $135(__$ctx);
                    }
                } else if (__t === 'ahead') {
                    return [
                        { elem: 'ahead-filler' },
                        { elem: 'ahead-hint' }
                    ];
                    return;
                } else {
                    return $135(__$ctx);
                }
            } else if (__t === 'i-ua') {
                return $123(__$ctx);
            } else {
                return $135(__$ctx);
            }
        } else if (__t === 'default') {
            var __t = $$block;
            if (__t === 'input') {
                return $169(__$ctx);
            } else if (__t === 'i-global') {
                return $186(__$ctx);
            } else {
                return $295(__$ctx);
            }
        } else if (__t === 'mix') {
            if ($$block === 'input') {
                if ($$elem === 'ahead') {
                    return [{
                            block: 'input',
                            elem: 'input'
                        }];
                    return;
                } else {
                    return $222(__$ctx);
                }
            } else {
                return $222(__$ctx);
            }
        } else if (__t === 'value') {
            if ($$block === 'input') {
                return $224(__$ctx);
            } else {
                return $295(__$ctx);
            }
        } else if (__t === 'js') {
            if ($$block === 'input') {
                if (!!$$elem === false) {
                    if ($$mods.popup == 'gradient') {
                        return {
                            live: false,
                            popupMods: { gradient: 'yes' }
                        };
                    } else {
                        return { live: false };
                    }
                    return;
                } else {
                    return $253(__$ctx);
                }
            } else {
                return $253(__$ctx);
            }
        } else if (__t === 'tag') {
            var __t = $$block;
            if (__t === 'input') {
                var __t = $$elem;
                if (__t === 'clear') {
                    return 'span';
                    return;
                } else if (__t === 'control') {
                    return 'input';
                    return;
                } else if (__t === 'ahead-hint' || __t === 'ahead-filler') {
                    return 'span';
                    return;
                } else {
                    if (!!$$elem === false) {
                        return 'span';
                        return;
                    } else {
                        return $167(__$ctx);
                    }
                }
            } else if (__t === 'i-ua') {
                if (!!$$elem === false) {
                    return 'script';
                    return;
                } else {
                    return $167(__$ctx);
                }
            } else {
                return $167(__$ctx);
            }
        } else if (__t === 'js-params') {
            if ($$block === 'b-page') {
                if (!!$$elem === false) {
                    return $265(__$ctx);
                } else {
                    return $295(__$ctx);
                }
            } else {
                return $295(__$ctx);
            }
        } else if (__t === 'public-params') {
            if ($$block === 'i-global') {
                return $271(__$ctx);
            } else {
                return $295(__$ctx);
            }
        } else if (__t === 'env') {
            if ($$block === 'i-global') {
                return $279(__$ctx);
            } else {
                return $295(__$ctx);
            }
        } else if (__t === '') {
            if (!!__$ctx['i-global'] === false) {
                return $288(__$ctx);
            } else {
                return $295(__$ctx);
            }
        } else if (__t === 'jsAttr') {
            return undefined;
            return;
        } else if (__t === 'attrs') {
            if ($$block === 'input') {
                var __t = $$elem;
                if (__t === 'clear') {
                    return { unselectable: 'on' };
                    return;
                } else if (__t === 'control') {
                    var _$g4a = __$ctx._.extend({
                            id: __$ctx._inputId,
                            name: __$ctx._name
                        }, __$ctx.ctx.controlAttrs);
                    (__$ctx._value || __$ctx._value === 0) && (_$g4a.value = __$ctx._value);
                    $$mods.disabled && (_$g4a.disabled = 'disabled');
                    _$g4a['aria-labelledby'] = __$ctx._labelId + ' ' + __$ctx._hintId;
                    return _$g4a;
                    return;
                } else {
                    return $145(__$ctx);
                }
            } else {
                return $145(__$ctx);
            }
        } else if (__t === 'cls') {
            return undefined;
            return;
        } else if (__t === 'bem') {
            if ($$block === 'i-ua') {
                if (!!$$elem === false) {
                    return false;
                    return;
                } else {
                    return $261(__$ctx);
                }
            } else {
                return $261(__$ctx);
            }
        } else {
            return $295(__$ctx);
        }
    }
    function $123(__$ctx) {
        if (!(__$ctx['__$anflg33'] !== true) === false) {
            if (!!$$elem === false) {
                var __r0, __r1;
                var _$fsc = ('', __r0 = __$ctx['__$anflg33'], __$ctx['__$anflg33'] = true, __r1 = $123(__$ctx), __$ctx['__$anflg33'] = __r0, '', __r1);
                _$fsc += [
                    ';(function(d,e,c,r,n,w,v,f){',
                    'e=d.documentElement;',
                    'c="className";',
                    'r="replace";',
                    'n="createElementNS";',
                    'f="firstChild";',
                    'w="http://www.w3.org/2000/svg";',
                    'e[c]+=" i-ua_svg_"+(!!d[n]&&!!d[n](w,"svg").createSVGRect?"yes":"no");',
                    'v=d.createElement("div");',
                    'v.innerHTML="<svg/>";',
                    'e[c]+=" i-ua_inlinesvg_"+((v[f]&&v[f].namespaceURI)==w?"yes":"no");',
                    '})(document);'
                ].join('');
                return _$fsc;
                return;
            } else {
                return $129(__$ctx);
            }
        } else {
            return $129(__$ctx);
        }
    }
    function $129(__$ctx) {
        if (!!$$elem === false) {
            return [
                ';(function(d,e,c,r){',
                'e=d.documentElement;',
                'c="className";',
                'r="replace";',
                'e[c]=e[c][r]("i-ua_js_no","i-ua_js_yes");',
                'if(d.compatMode!="CSS1Compat")',
                'e[c]=e[c][r]("i-ua_css_standart","i-ua_css_quirks")',
                '})(document);'
            ].join('');
            return;
        } else {
            return $135(__$ctx);
        }
    }
    function $135(__$ctx) {
        return __$ctx.ctx.content;
        return;
    }
    function $145(__$ctx) {
        return undefined;
        return;
    }
    function $167(__$ctx) {
        return undefined;
        return;
    }
    function $169(__$ctx) {
        if ($$elem === 'control') {
            if (!(__$ctx['__$anflg35'] !== true) === false) {
                if (!!$$mods.clear === false) {
                    return $173(__$ctx);
                } else {
                    return $178(__$ctx);
                }
            } else {
                return $178(__$ctx);
            }
        } else {
            return $178(__$ctx);
        }
    }
    function $173(__$ctx) {
        {
            '';
            var __r0 = __$ctx['__$anflg35'];
            __$ctx['__$anflg35'] = true;
            {
                '';
                var __r1 = __$ctx.ctx;
                __$ctx.ctx = {
                    elem: 'box',
                    tag: 'span',
                    content: [
                        __$ctx.ctx,
                        {
                            elem: 'clear',
                            elemMods: __$ctx._value || __$ctx._value === 0 ? { visibility: 'visible' } : undefined
                        }
                    ]
                };
                var __r2 = $$mode;
                $$mode = '';
                $97(__$ctx);
                __$ctx.ctx = __r1;
                $$mode = __r2;
                '';
            }
            __$ctx['__$anflg35'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $178(__$ctx) {
        if (!(__$ctx['__$anflg34'] !== true) === false) {
            if (!!$$elem === false) {
                return $181(__$ctx);
            } else {
                return $295(__$ctx);
            }
        } else {
            return $295(__$ctx);
        }
    }
    function $181(__$ctx) {
        var __r0, __r1, __r2;
        var _$fvvalue = ('', __r0 = $$mode, $$mode = 'value', __r1 = __$ctx.ctx, __$ctx.ctx = __$ctx.ctx.value, __r2 = $224(__$ctx), $$mode = __r0, __$ctx.ctx = __r1, '', __r2), _$fvid = __$ctx.ctx.id || __$ctx.generateId(), _$fvmods = __$ctx.ctx.mods || {};
        _$fvmods.theme = _$fvmods.theme || 'normal';
        {
            '';
            var __r3 = __$ctx['__$anflg34'];
            __$ctx['__$anflg34'] = true;
            {
                '';
                var __r4 = __$ctx._inputId;
                __$ctx._inputId = _$fvid;
                var __r5 = __$ctx._labelId;
                __$ctx._labelId = 'label' + _$fvid;
                var __r6 = __$ctx._hintId;
                __$ctx._hintId = 'hint' + _$fvid;
                var __r7 = __$ctx._name;
                __$ctx._name = __$ctx.ctx.name || '';
                var __r8 = __$ctx._value;
                __$ctx._value = _$fvvalue;
                var __r9 = __$ctx._inputLink;
                __$ctx._inputLink = true;
                var __r10 = __$ctx._disabled;
                __$ctx._disabled = $$mods.disabled;
                var __r11 = __$ctx.ctx, __r12 = __r11.mods;
                __r11.mods = _$fvmods;
                $169(__$ctx);
                __$ctx._inputId = __r4;
                __$ctx._labelId = __r5;
                __$ctx._hintId = __r6;
                __$ctx._name = __r7;
                __$ctx._value = __r8;
                __$ctx._inputLink = __r9;
                __$ctx._disabled = __r10;
                __r11.mods = __r12;
                '';
            }
            __$ctx['__$anflg34'] = __r3;
            '';
        }
        undefined;
        return;
    }
    function $186(__$ctx) {
        var __t = $$elem;
        if (__t === 'lego-static-host') {
            return '//yastatic.net/lego/2.10-142';
            return;
        } else if (__t === 'export-host') {
            return '//export.yandex.ru';
            return;
        } else if (__t === 'social-host') {
            return '//social.yandex.ru';
            return;
        } else if (__t === 'pass-host') {
            return '//pass.yandex.ru';
            return;
        } else if (__t === 'passport-host') {
            return 'https://passport.yandex.ru';
            return;
        } else if (__t === 'click-host') {
            return '//clck.yandex.ru';
            return;
        } else if (__t === 'content-region' || __t === 'tld' || __t === 'lang') {
            return 'ru';
            return;
        } else {
            if (!$$elem === false) {
                return '';
                return;
            } else {
                if (!!$$elem === false) {
                    return $210(__$ctx);
                } else {
                    return $295(__$ctx);
                }
            }
        }
    }
    function $210(__$ctx) {
        var _$fcparams = __$ctx.ctx.params || {}, _$fciGlobal = __$ctx['i-global'], _$fcisTldChanged = _$fcparams.tld && _$fcparams.tld !== _$fciGlobal.tld, _$fctld, _$fcxYaDomain, _$fcyaDomain;
        if (_$fcisTldChanged) {
            _$fctld = _$fcparams.tld;
            _$fcxYaDomain = _$fctld === 'tr' ? 'yandex.com.tr' : 'yandex.' + _$fctld;
            _$fcyaDomain = [
                'ua',
                'by',
                'kz'
            ].indexOf(_$fctld) != -1 ? 'yandex.ru' : _$fcxYaDomain;
            _$fciGlobal['content-region'] = _$fctld;
            _$fciGlobal['click-host'] = '//clck.' + _$fcyaDomain;
            _$fciGlobal['passport-host'] = 'https://passport.' + _$fcyaDomain;
            _$fciGlobal['pass-host'] = '//pass.' + _$fcxYaDomain;
            _$fciGlobal['social-host'] = '//social.' + _$fcxYaDomain;
            _$fciGlobal['export-host'] = '//export.' + _$fcxYaDomain;
        } else {
            undefined;
        }
        for (var _$fcp in _$fcparams) {
            _$fciGlobal[_$fcp] = _$fcparams[_$fcp];
        }
        return;
    }
    function $222(__$ctx) {
        return undefined;
        return;
    }
    function $224(__$ctx) {
        if (!__$ctx.isSimple(__$ctx.ctx) === false) {
            if (!!$$elem === false) {
                return __$ctx.ctx;
                return;
            } else {
                return $230(__$ctx);
            }
        } else {
            return $230(__$ctx);
        }
    }
    function $230(__$ctx) {
        if (!__$ctx.ctx === false) {
            if (!!$$elem === false) {
                var _$fxvalue = [];
                {
                    '';
                    var __r0 = __$ctx._buf;
                    __$ctx._buf = _$fxvalue;
                    var __r1 = $$mode;
                    $$mode = '';
                    $97(__$ctx);
                    __$ctx._buf = __r0;
                    $$mode = __r1;
                    '';
                }
                undefined;
                return _$fxvalue.join('');
                return;
            } else {
                return $236(__$ctx);
            }
        } else {
            return $236(__$ctx);
        }
    }
    function $236(__$ctx) {
        if (!true === false) {
            if (!!$$elem === false) {
                return '';
                return;
            } else {
                return $295(__$ctx);
            }
        } else {
            return $295(__$ctx);
        }
    }
    function $253(__$ctx) {
        return undefined;
        return;
    }
    function $261(__$ctx) {
        return undefined;
        return;
    }
    function $265(__$ctx) {
        var __r0, __r1, __r2, __r3;
        var _$fo_this = __$ctx['i-global'], _$fojs = {}, _$foblock = {
                block: 'i-global',
                js: _$fojs
            }, _$foe;
        for (_$foe in _$fo_this) {
            if (_$fo_this.hasOwnProperty(_$foe) && ('', __r0 = $$mode, $$mode = 'public-params', __r1 = $$block, $$block = 'i-global', __r2 = $$elem, $$elem = _$foe, __r3 = $271(__$ctx), $$mode = __r0, $$block = __r1, $$elem = __r2, '', __r3)) {
                _$fojs[_$foe] = _$fo_this[_$foe];
            } else {
                undefined;
            }
        }
        return _$foblock;
        return;
    }
    function $271(__$ctx) {
        if (!$$elem === false) {
            return {
                id: 1,
                lang: 1,
                tld: 1,
                'content-region': 1,
                'user-region': 1,
                login: 1,
                displayName: 1,
                index: 1,
                yandexuid: 1,
                'passport-host': 1,
                'pass-host': 1,
                'passport-msg': 1,
                'static-host': 1,
                'lego-static-host': 1,
                'social-host': 1,
                clck: 1,
                'click-host': 1,
                'export-host': 1,
                'i-host': 1,
                'social-retpath': 1,
                'lego-path': 1,
                sid: 1,
                retpath: 1,
                uid: 1
            }[$$elem] || false;
            return;
        } else {
            return $295(__$ctx);
        }
    }
    function $279(__$ctx) {
        if (!!$$elem === false) {
            return {};
            return;
        } else {
            return $295(__$ctx);
        }
    }
    function $288(__$ctx) {
        var __r0, __r1, __r2, __r3, __r4, __r5, __r6;
        var _$faps = {}, _$faes = [
                'lang',
                'tld',
                'content-region',
                'click-host',
                'passport-host',
                'pass-host',
                'social-host',
                'export-host',
                'login',
                'lego-static-host'
            ], _$fae;
        while (_$fae = _$faes.shift()) {
            _$faps[_$fae] = ('', __r0 = $$mode, $$mode = 'default', __r1 = $$block, $$block = 'i-global', __r2 = $$elem, $$elem = _$fae, __r3 = $186(__$ctx), $$mode = __r0, $$block = __r1, $$elem = __r2, '', __r3);
        }
        __$ctx['i-global'] = __$ctx._.extend(_$faps, ('', __r4 = $$mode, $$mode = 'env', __r5 = $$block, $$block = 'i-global', __r6 = $279(__$ctx), $$mode = __r4, $$block = __r5, '', __r6));
        applyc(__$ctx);
        undefined;
        return;
    }
    function $295(__$ctx) {
        if (!__$ctx.ctx === false) {
            if (!__$ctx.ctx.link === false) {
                if (!!__$ctx._.isSimple(__$ctx.ctx) === false) {
                    return $299(__$ctx);
                } else {
                    return $304(__$ctx);
                }
            } else {
                return $304(__$ctx);
            }
        } else {
            return $304(__$ctx);
        }
    }
    function $299(__$ctx) {
        var __r0, __r1;
        function _$f1follow() {
            if (this.ctx.link === 'no-follow') {
                return undefined;
            } else {
                undefined;
            }
            var data = this._links[this.ctx.link];
            return '', __r0 = this.ctx, this.ctx = data, __r1 = $1(__$ctx), this.ctx = __r0, '', __r1;
        }
        if (!cache || !__$ctx._cacheLog) {
            return _$f1follow.call(__$ctx);
        } else {
            undefined;
        }
        var _$f1contents = __$ctx._buf.slice(__$ctx._cachePos).join('');
        __$ctx._cachePos = __$ctx._buf.length;
        __$ctx._cacheLog.push(_$f1contents, {
            log: __$ctx._localLog.slice(),
            link: __$ctx.ctx.link
        });
        var _$f1res = _$f1follow.call(__$ctx);
        __$ctx._cachePos = __$ctx._buf.length;
        return _$f1res;
        return;
    }
    function $304(__$ctx) {
        if (!cache === false) {
            if (!__$ctx.ctx === false) {
                if (!__$ctx.ctx.cache === false) {
                    return $308(__$ctx);
                } else {
                    return $313(__$ctx);
                }
            } else {
                return $313(__$ctx);
            }
        } else {
            return $313(__$ctx);
        }
    }
    function $308(__$ctx) {
        var _$f0cached;
        function _$f0setProperty(obj, key, value) {
            if (key.length === 0) {
                return undefined;
            } else {
                undefined;
            }
            if (Array.isArray(value)) {
                var target = obj;
                for (var i = 0; i < value.length - 1; i++) {
                    target = target[value[i]];
                }
                value = target[value[i]];
            } else {
                undefined;
            }
            var host = obj, previous;
            for (var i = 0; i < key.length - 1; i++) {
                host = host[key[i]];
            }
            previous = host[key[i]];
            host[key[i]] = value;
            return previous;
        }
        if (_$f0cached = cache.get(__$ctx.ctx.cache)) {
            var _$f0oldLinks = __$ctx._links;
            if (__$ctx.ctx.links) {
                __$ctx._links = __$ctx.ctx.links;
            } else {
                undefined;
            }
            for (var _$f0i = 0; _$f0i < _$f0cached.log.length; _$f0i++) {
                if (typeof _$f0cached.log[_$f0i] === 'string') {
                    __$ctx._buf.push(_$f0cached.log[_$f0i]);
                    continue;
                } else {
                    undefined;
                }
                var _$f0log = _$f0cached.log[_$f0i], _$f0reverseLog;
                _$f0reverseLog = _$f0log.log.map(function (entry) {
                    return {
                        key: entry[0],
                        value: _$f0setProperty(this, entry[0], entry[1])
                    };
                }, __$ctx).reverse();
                {
                    '';
                    var __r0 = __$ctx.ctx, __r1 = __r0.cache;
                    __r0.cache = null;
                    var __r2 = __$ctx._cacheLog;
                    __$ctx._cacheLog = null;
                    var __r3 = __$ctx.ctx, __r4 = __r3.link;
                    __r3.link = _$f0log.link;
                    $1(__$ctx);
                    __r0.cache = __r1;
                    __$ctx._cacheLog = __r2;
                    __r3.link = __r4;
                    '';
                }
                undefined;
                _$f0reverseLog.forEach(function (entry) {
                    _$f0setProperty(this, entry.key, entry.value);
                }, __$ctx);
            }
            __$ctx._links = _$f0oldLinks;
            return _$f0cached.res;
        } else {
            undefined;
        }
        var _$f0cacheLog = [], _$f0res;
        {
            '';
            var __r5 = __$ctx.ctx, __r6 = __r5.cache;
            __r5.cache = null;
            var __r7 = __$ctx._cachePos;
            __$ctx._cachePos = __$ctx._buf.length;
            var __r8 = __$ctx._cacheLog;
            __$ctx._cacheLog = _$f0cacheLog;
            var __r9 = __$ctx._localLog;
            __$ctx._localLog = [];
            {
                _$f0res = $1(__$ctx);
                var _$f0tail = __$ctx._buf.slice(__$ctx._cachePos).join('');
                if (_$f0tail) {
                    _$f0cacheLog.push(_$f0tail);
                } else {
                    undefined;
                }
            }
            __r5.cache = __r6;
            __$ctx._cachePos = __r7;
            __$ctx._cacheLog = __r8;
            __$ctx._localLog = __r9;
            '';
        }
        cache.set(__$ctx.ctx.cache, {
            log: _$f0cacheLog,
            res: _$f0res
        });
        return _$f0res;
        return;
    }
    function $313(__$ctx) {
        var __t = $$mode;
        if (__t === 'default') {
            return $315(__$ctx);
        } else if (__t === '') {
            if (!__$ctx._.isSimple(__$ctx.ctx) === false) {
                __$ctx._listLength--;
                var _$eyctx = __$ctx.ctx;
                (_$eyctx && _$eyctx !== true || _$eyctx === 0) && __$ctx._buf.push(_$eyctx);
                return;
            } else {
                if (!!__$ctx.ctx === false) {
                    __$ctx._listLength--;
                    return;
                } else {
                    if (!__$ctx._.isArray(__$ctx.ctx) === false) {
                        return $324(__$ctx);
                    } else {
                        if (!true === false) {
                            return $327(__$ctx);
                        } else {
                            return $e(__$ctx);
                        }
                    }
                }
            }
        } else {
            return $e(__$ctx);
        }
    }
    function $315(__$ctx) {
        var __r13, __r0, __r4, __r5, __r6, __r7, __r8, __r9, __r10, __r11, __r12, __r1, __r14, __r15, __r16, __r17, __r20, __r21, __r22, __r23, __r24, __r25;
        var _$ezBEM_ = __$ctx.BEM, _$ezv = __$ctx.ctx, _$ezbuf = __$ctx._buf, _$eztag;
        _$eztag = ('', __r0 = $$mode, $$mode = 'tag', __r1 = $89(__$ctx), $$mode = __r0, '', __r1);
        typeof _$eztag != 'undefined' || (_$eztag = _$ezv.tag);
        typeof _$eztag != 'undefined' || (_$eztag = 'div');
        if (_$eztag) {
            var _$ezjsParams, _$ezjs;
            if ($$block && _$ezv.js !== false) {
                _$ezjs = ('', __r4 = $$mode, $$mode = 'js', __r5 = $47(__$ctx), $$mode = __r4, '', __r5);
                _$ezjs = _$ezjs ? __$ctx._.extend(_$ezv.js, _$ezjs === true ? {} : _$ezjs) : _$ezv.js === true ? {} : _$ezv.js;
                _$ezjs && ((_$ezjsParams = {})[_$ezBEM_.INTERNAL.buildClass($$block, _$ezv.elem)] = _$ezjs);
            } else {
                undefined;
            }
            _$ezbuf.push('<', _$eztag);
            var _$ezisBEM = ('', __r6 = $$mode, $$mode = 'bem', __r7 = $105(__$ctx), $$mode = __r6, '', __r7);
            typeof _$ezisBEM != 'undefined' || (_$ezisBEM = typeof _$ezv.bem != 'undefined' ? _$ezv.bem : _$ezv.block || _$ezv.elem);
            var _$ezcls = ('', __r8 = $$mode, $$mode = 'cls', __r9 = $105(__$ctx), $$mode = __r8, '', __r9);
            _$ezcls || (_$ezcls = _$ezv.cls);
            var _$ezaddJSInitClass = _$ezv.block && _$ezjsParams;
            if (_$ezisBEM || _$ezcls) {
                _$ezbuf.push(' class="');
                if (_$ezisBEM) {
                    _$ezBEM_.INTERNAL.buildClasses($$block, _$ezv.elem, _$ezv.elemMods || _$ezv.mods, _$ezbuf);
                    var _$ezmix = ('', __r10 = $$mode, $$mode = 'mix', __r11 = $33(__$ctx), $$mode = __r10, '', __r11);
                    _$ezv.mix && (_$ezmix = _$ezmix ? _$ezmix.concat(_$ezv.mix) : _$ezv.mix);
                    if (_$ezmix) {
                        var _$ezvisited = {};
                        function _$ezvisitedKey(block, elem) {
                            return (block || '') + '__' + (elem || '');
                        }
                        _$ezvisited[_$ezvisitedKey($$block, $$elem)] = true;
                        if (!__$ctx._.isArray(_$ezmix)) {
                            _$ezmix = [_$ezmix];
                        } else {
                            undefined;
                        }
                        for (var _$ezi = 0; _$ezi < _$ezmix.length; _$ezi++) {
                            var _$ezmixItem = _$ezmix[_$ezi];
                            if (!_$ezmixItem) {
                                continue;
                            } else {
                                undefined;
                            }
                            var _$ezhasItem = _$ezmixItem.block || _$ezmixItem.elem, _$ezblock = _$ezmixItem.block || _$ezmixItem._block || $$block, _$ezelem = _$ezmixItem.elem || _$ezmixItem._elem || $$elem, _$ezmods = _$ezmixItem.mods || $$mods, _$ezelemMods = _$ezmixItem.elemMods || {};
                            _$ezhasItem && _$ezbuf.push(' ');
                            _$ezBEM_.INTERNAL[_$ezhasItem ? 'buildClasses' : 'buildModsClasses'](_$ezblock, _$ezmixItem.elem || _$ezmixItem._elem || (_$ezmixItem.block ? undefined : $$elem), _$ezmixItem.elemMods || _$ezmixItem.mods, _$ezbuf);
                            if (_$ezmixItem.js) {
                                (_$ezjsParams || (_$ezjsParams = {}))[_$ezBEM_.INTERNAL.buildClass(_$ezblock, _$ezmixItem.elem)] = _$ezmixItem.js === true ? {} : _$ezmixItem.js;
                                _$ezaddJSInitClass || (_$ezaddJSInitClass = _$ezblock && !_$ezmixItem.elem);
                            } else {
                                undefined;
                            }
                            if (_$ezhasItem && !_$ezvisited[_$ezvisitedKey(_$ezblock, _$ezelem)]) {
                                _$ezvisited[_$ezvisitedKey(_$ezblock, _$ezelem)] = true;
                                var _$eznestedMix = ('', __r12 = $$block, $$block = _$ezblock, __r13 = $$elem, $$elem = _$ezelem, __r14 = $$mods, $$mods = _$ezmods, __r15 = $$elemMods, $$elemMods = _$ezelemMods, __r16 = $$mode, $$mode = 'mix', __r17 = $33(__$ctx), $$block = __r12, $$elem = __r13, $$mods = __r14, $$elemMods = __r15, $$mode = __r16, '', __r17);
                                if (_$eznestedMix) {
                                    for (var _$ezj = 0; _$ezj < _$eznestedMix.length; _$ezj++) {
                                        var _$eznestedItem = _$eznestedMix[_$ezj];
                                        if (!_$eznestedItem.block && !_$eznestedItem.elem || !_$ezvisited[_$ezvisitedKey(_$eznestedItem.block, _$eznestedItem.elem)]) {
                                            _$eznestedItem._block = _$ezblock;
                                            _$eznestedItem._elem = _$ezelem;
                                            _$ezmix.splice(_$ezi + 1, 0, _$eznestedItem);
                                        } else {
                                            undefined;
                                        }
                                    }
                                } else {
                                    undefined;
                                }
                            } else {
                                undefined;
                            }
                        }
                    } else {
                        undefined;
                    }
                } else {
                    undefined;
                }
                _$ezcls && _$ezbuf.push(_$ezisBEM ? ' ' : '', _$ezcls);
                _$ezaddJSInitClass && _$ezbuf.push(' i-bem');
                _$ezbuf.push('"');
            } else {
                undefined;
            }
            if (_$ezjsParams) {
                var _$ezjsAttr = ('', __r20 = $$mode, $$mode = 'jsAttr', __r21 = $105(__$ctx), $$mode = __r20, '', __r21);
                _$ezbuf.push(' ', _$ezjsAttr || 'data-bem', '="', __$ctx._.attrEscape(JSON.stringify(_$ezjsParams)), '"');
            } else {
                undefined;
            }
            var _$ezattrs = ('', __r22 = $$mode, $$mode = 'attrs', __r23 = $105(__$ctx), $$mode = __r22, '', __r23);
            _$ezattrs = __$ctx._.extend(_$ezattrs, _$ezv.attrs);
            if (_$ezattrs) {
                var _$ezname;
                for (_$ezname in _$ezattrs) {
                    if (_$ezattrs[_$ezname] === undefined) {
                        continue;
                    } else {
                        undefined;
                    }
                    _$ezbuf.push(' ', _$ezname, '="', __$ctx._.attrEscape(_$ezattrs[_$ezname]), '"');
                }
            } else {
                undefined;
            }
        } else {
            undefined;
        }
        if (__$ctx._.isShortTag(_$eztag)) {
            _$ezbuf.push('/>');
        } else {
            _$eztag && _$ezbuf.push('>');
            var _$ezcontent = ('', __r24 = $$mode, $$mode = 'content', __r25 = $2(__$ctx), $$mode = __r24, '', __r25);
            if (_$ezcontent || _$ezcontent === 0) {
                var _$ezisBEM = $$block || $$elem;
                {
                    '';
                    var __r26 = __$ctx._notNewList;
                    __$ctx._notNewList = false;
                    var __r27 = __$ctx.position;
                    __$ctx.position = _$ezisBEM ? 1 : __$ctx.position;
                    var __r28 = __$ctx._listLength;
                    __$ctx._listLength = _$ezisBEM ? 1 : __$ctx._listLength;
                    var __r29 = __$ctx.ctx;
                    __$ctx.ctx = _$ezcontent;
                    var __r30 = $$mode;
                    $$mode = '';
                    $97(__$ctx);
                    __$ctx._notNewList = __r26;
                    __$ctx.position = __r27;
                    __$ctx._listLength = __r28;
                    __$ctx.ctx = __r29;
                    $$mode = __r30;
                    '';
                }
                undefined;
            } else {
                undefined;
            }
            _$eztag && _$ezbuf.push('</', _$eztag, '>');
        }
        return;
    }
    function $324(__$ctx) {
        var _$ewv = __$ctx.ctx, _$ewl = _$ewv.length, _$ewi = 0, _$ewprevPos = __$ctx.position, _$ewprevNotNewList = __$ctx._notNewList;
        if (_$ewprevNotNewList) {
            __$ctx._listLength += _$ewl - 1;
        } else {
            __$ctx.position = 0;
            __$ctx._listLength = _$ewl;
        }
        __$ctx._notNewList = true;
        while (_$ewi < _$ewl) {
            var _$ewnewCtx = _$ewv[_$ewi++];
            {
                '';
                var __r0 = __$ctx.ctx;
                __$ctx.ctx = _$ewnewCtx == null ? '' : _$ewnewCtx;
                $97(__$ctx);
                __$ctx.ctx = __r0;
                '';
            }
            undefined;
        }
        _$ewprevNotNewList || (__$ctx.position = _$ewprevPos);
        return;
    }
    function $327(__$ctx) {
        var _$evvBlock = __$ctx.ctx.block, _$evvElem = __$ctx.ctx.elem, _$evblock = __$ctx._currBlock || $$block;
        __$ctx.ctx || (__$ctx.ctx = {});
        {
            '';
            var __r0 = $$mode;
            $$mode = 'default';
            var __r1 = __$ctx._links;
            __$ctx._links = __$ctx.ctx.links || __$ctx._links;
            var __r2 = $$block;
            $$block = _$evvBlock || (_$evvElem ? _$evblock : undefined);
            var __r3 = __$ctx._currBlock;
            __$ctx._currBlock = _$evvBlock || _$evvElem ? undefined : _$evblock;
            var __r4 = $$elem;
            $$elem = __$ctx.ctx.elem;
            var __r5 = $$mods;
            $$mods = (_$evvBlock ? __$ctx.ctx.mods : $$mods) || {};
            var __r6 = $$elemMods;
            $$elemMods = __$ctx.ctx.elemMods || {};
            {
                $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
                $67(__$ctx);
                undefined;
            }
            $$mode = __r0;
            __$ctx._links = __r1;
            $$block = __r2;
            __$ctx._currBlock = __r3;
            $$elem = __r4;
            $$mods = __r5;
            $$elemMods = __r6;
            '';
        }
        return;
    }
    function $e(__$ctx) {
        throw new Error(this);
        return;
    }
    !function oninit() {
        var BEM_ = {}, toString = Object.prototype.toString, SHORT_TAGS = {
                area: 1,
                base: 1,
                br: 1,
                col: 1,
                command: 1,
                embed: 1,
                hr: 1,
                img: 1,
                input: 1,
                keygen: 1,
                link: 1,
                meta: 1,
                param: 1,
                source: 1,
                wbr: 1
            };
        (function (BEM, undefined) {
            var MOD_DELIM = '_', ELEM_DELIM = '__', NAME_PATTERN = '[a-zA-Z0-9-]+';
            function buildModPostfix(modName, modVal, buffer) {
                buffer.push(MOD_DELIM, modName, MOD_DELIM, modVal);
            }
            function buildBlockClass(name, modName, modVal, buffer) {
                buffer.push(name);
                modVal && buildModPostfix(modName, modVal, buffer);
            }
            function buildElemClass(block, name, modName, modVal, buffer) {
                buildBlockClass(block, undefined, undefined, buffer);
                buffer.push(ELEM_DELIM, name);
                modVal && buildModPostfix(modName, modVal, buffer);
            }
            BEM.INTERNAL = {
                NAME_PATTERN: NAME_PATTERN,
                MOD_DELIM: MOD_DELIM,
                ELEM_DELIM: ELEM_DELIM,
                buildModPostfix: function (modName, modVal, buffer) {
                    var res = buffer || [];
                    buildModPostfix(modName, modVal, res);
                    return buffer ? res : res.join('');
                },
                buildClass: function (block, elem, modName, modVal, buffer) {
                    var typeOf = typeof modName;
                    if (typeOf == 'string') {
                        if (typeof modVal != 'string') {
                            buffer = modVal;
                            modVal = modName;
                            modName = elem;
                            elem = undefined;
                        } else {
                            undefined;
                        }
                    } else {
                        if (typeOf != 'undefined') {
                            buffer = modName;
                            modName = undefined;
                        } else {
                            if (elem && typeof elem != 'string') {
                                buffer = elem;
                                elem = undefined;
                            } else {
                                undefined;
                            }
                        }
                    }
                    if (!(elem || modName || buffer)) {
                        return block;
                    } else {
                        undefined;
                    }
                    var res = buffer || [];
                    elem ? buildElemClass(block, elem, modName, modVal, res) : buildBlockClass(block, modName, modVal, res);
                    return buffer ? res : res.join('');
                },
                buildModsClasses: function (block, elem, mods, buffer) {
                    var res = buffer || [];
                    if (mods) {
                        var modName;
                        for (modName in mods) {
                            if (!mods.hasOwnProperty(modName)) {
                                continue;
                            } else {
                                undefined;
                            }
                            var modVal = mods[modName];
                            if (modVal == null) {
                                continue;
                            } else {
                                undefined;
                            }
                            modVal = mods[modName] + '';
                            if (!modVal) {
                                continue;
                            } else {
                                undefined;
                            }
                            res.push(' ');
                            if (elem) {
                                buildElemClass(block, elem, modName, modVal, res);
                            } else {
                                buildBlockClass(block, modName, modVal, res);
                            }
                        }
                    } else {
                        undefined;
                    }
                    return buffer ? res : res.join('');
                },
                buildClasses: function (block, elem, mods, buffer) {
                    var res = buffer || [];
                    elem ? buildElemClass(block, elem, undefined, undefined, res) : buildBlockClass(block, undefined, undefined, res);
                    this.buildModsClasses(block, elem, mods, buffer);
                    return buffer ? res : res.join('');
                }
            };
        }(BEM_));
        var buildEscape = function () {
                var ts = {
                        '"': '&quot;',
                        '&': '&amp;',
                        '<': '&lt;',
                        '>': '&gt;'
                    }, f = function (t) {
                        return ts[t] || t;
                    };
                return function (r) {
                    r = new RegExp(r, 'g');
                    return function (s) {
                        return ('' + s).replace(r, f);
                    };
                };
            }();
        function BEMContext(context, apply_) {
            this.ctx = typeof context === null ? '' : context;
            this.apply = apply_;
            this._buf = [];
            this._ = this;
            this._start = true;
            this._listLength = 0;
            this._notNewList = false;
            this.position = 0;
        }
        BEMContext.prototype.isArray = function isArray(obj) {
            return toString.call(obj) === '[object Array]';
        };
        BEMContext.prototype.isSimple = function isSimple(obj) {
            var t = typeof obj;
            return t === 'string' || t === 'number' || t === 'boolean';
        };
        BEMContext.prototype.isShortTag = function isShortTag(t) {
            return SHORT_TAGS.hasOwnProperty(t);
        };
        BEMContext.prototype.extend = function extend(o1, o2) {
            if (!o1 || !o2) {
                return o1 || o2;
            } else {
                undefined;
            }
            var res = {}, n;
            for (n in o1) {
                o1.hasOwnProperty(n) && (res[n] = o1[n]);
            }
            for (n in o2) {
                o2.hasOwnProperty(n) && (res[n] = o2[n]);
            }
            return res;
        };
        BEMContext.prototype.identify = function () {
            var cnt = 0, id = BEM_['__id'] = +new Date(), expando = '__' + id, get = function () {
                    return 'uniq' + id + ++cnt;
                };
            return function (obj, onlyGet) {
                if (!obj) {
                    return get();
                } else {
                    undefined;
                }
                if (onlyGet || obj[expando]) {
                    return obj[expando];
                } else {
                    return obj[expando] = get();
                }
            };
        }();
        BEMContext.prototype.xmlEscape = buildEscape('[&<>]');
        BEMContext.prototype.attrEscape = buildEscape('["&<>]');
        BEMContext.prototype.BEM = BEM_;
        BEMContext.prototype.isFirst = function isFirst() {
            return this.position === 1;
        };
        BEMContext.prototype.isLast = function isLast() {
            return this.position === this._listLength;
        };
        BEMContext.prototype.generateId = function generateId() {
            return this.identify(this.ctx);
        };
        exports.apply = BEMContext.apply = function _apply() {
            var ctx = new BEMContext(this, apply);
            ctx.apply();
            return ctx._buf.join('');
        };
    }();
    return exports;
    exports.apply = apply;
    function apply(ctx) {
        return applyc(ctx || this);
    }
    function applyc(__$ctx) {
        return $1(__$ctx);
    }
    return exports;
}(typeof exports === 'undefined' ? {} : exports));;
  return function(options) {
    var context = this;
    if (!options) options = {};
    cache = options.cache;
    return function() {
      if (context === this) {
        context = undefined;
$$mode = ''
$$block = ''
$$elem = ''
$$elemMods = ''
$$mods = ''
      } else {
$$mode = '';
$$block = '';
$$elem = '';
$$elemMods = '';
$$mods = '';
      }
      return xjst.apply.call(
[context]
      );
    }.call(null);
  };
}();
typeof exports === "undefined" || (exports.BEMHTML = BEMHTML);/* ../../../../libs/bem-bl/blocks-common/i-jquery/__inherit/i-jquery__inherit.js begin */
/**
 * Inheritance plugin
 *
 * Copyright (c) 2010 Filatov Dmitry (dfilatov@yandex-team.ru)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * @version 1.3.5
 */

(function($) {

var hasIntrospection = (function(){'_';}).toString().indexOf('_') > -1,
    emptyBase = function() {},
    objCreate = Object.create || function(ptp) {
        var inheritance = function() {};
        inheritance.prototype = ptp;
        return new inheritance();
    },
    needCheckProps = true,
    testPropObj = { toString : '' };

for(var i in testPropObj) { // fucking ie hasn't toString, valueOf in for
    testPropObj.hasOwnProperty(i) && (needCheckProps = false);
}

var specProps = needCheckProps? ['toString', 'valueOf'] : null;

function override(base, result, add) {

    var hasSpecProps = false;
    if(needCheckProps) {
        var addList = [];
        $.each(specProps, function() {
            add.hasOwnProperty(this) && (hasSpecProps = true) && addList.push({
                name : this,
                val  : add[this]
            });
        });
        if(hasSpecProps) {
            $.each(add, function(name) {
                addList.push({
                    name : name,
                    val  : this
                });
            });
            add = addList;
        }
    }

    $.each(add, function(name, prop) {
        if(hasSpecProps) {
            name = prop.name;
            prop = prop.val;
        }
        if($.isFunction(prop) &&
           (!hasIntrospection || prop.toString().indexOf('.__base') > -1)) {

            var baseMethod = base[name] || function() {};
            result[name] = function() {
                var baseSaved = this.__base;
                this.__base = baseMethod;
                var result = prop.apply(this, arguments);
                this.__base = baseSaved;
                return result;
            };

        }
        else {
            result[name] = prop;
        }

    });

}

$.inherit = function() {

    var args = arguments,
        hasBase = $.isFunction(args[0]),
        base = hasBase? args[0] : emptyBase,
        props = args[hasBase? 1 : 0] || {},
        staticProps = args[hasBase? 2 : 1],
        result = props.__constructor || (hasBase && base.prototype.__constructor)?
            function() {
                return this.__constructor.apply(this, arguments);
            } : function() {};

    if(!hasBase) {
        result.prototype = props;
        result.prototype.__self = result.prototype.constructor = result;
        return $.extend(result, staticProps);
    }

    $.extend(result, base);

    var basePtp = base.prototype,
        resultPtp = result.prototype = objCreate(basePtp);

    resultPtp.__self = resultPtp.constructor = result;

    override(basePtp, resultPtp, props);
    staticProps && override(base, result, staticProps);

    return result;

};

$.inheritSelf = function(base, props, staticProps) {

    var basePtp = base.prototype;

    override(basePtp, basePtp, props);
    staticProps && override(base, base, staticProps);

    return base;

};

})(jQuery);

/* ../../../../libs/bem-bl/blocks-common/i-jquery/__inherit/i-jquery__inherit.js end */
;
/* ../../../../libs/bem-bl/blocks-common/i-jquery/__identify/i-jquery__identify.js begin */
/**
 * Identify plugin
 *
 * @version 1.0.0
 */

(function($) {

var counter = 0,
    expando = '__' + (+new Date),
    get = function() {
        return 'uniq' + ++counter;
    };

/**
 * Makes unique ID
 * @param {Object} [obj] Object that needs to be identified
 * @param {Boolean} [onlyGet=false] Return a unique value only if it had already been assigned before
 * @returns {String} ID
 */
$.identify = function(obj, onlyGet) {

    if(!obj) return get();

    var key = 'uniqueID' in obj? 'uniqueID' : expando; // Use when possible. native uniqueID for elements in IE

    return onlyGet || key in obj?
        obj[key] :
        obj[key] = get();

};

})(jQuery);
/* ../../../../libs/bem-bl/blocks-common/i-jquery/__identify/i-jquery__identify.js end */
;
/* ../../../../libs/bem-bl/blocks-common/i-jquery/__is-empty-object/i-jquery__is-empty-object.js begin */
(function($) {

$.isEmptyObject || ($.isEmptyObject = function(obj) {
        for(var i in obj) return false;
        return true;
    });

})(jQuery);

/* ../../../../libs/bem-bl/blocks-common/i-jquery/__is-empty-object/i-jquery__is-empty-object.js end */
;
/* ../../../../libs/bem-bl/blocks-common/i-jquery/__debounce/i-jquery__debounce.js begin */
/**
 * Debounce and throttle function's decorator plugin 1.0.6
 *
 * Copyright (c) 2009 Filatov Dmitry (alpha@zforms.ru)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

(function($) {

$.extend({

    debounce : function(fn, timeout, invokeAsap, ctx) {

        if(arguments.length == 3 && typeof invokeAsap != 'boolean') {
            ctx = invokeAsap;
            invokeAsap = false;
        }

        var timer;

        return function() {

            var args = arguments;
            ctx = ctx || this;

            invokeAsap && !timer && fn.apply(ctx, args);

            clearTimeout(timer);

            timer = setTimeout(function() {
                invokeAsap || fn.apply(ctx, args);
                timer = null;
            }, timeout);

        };

    },

    throttle : function(fn, timeout, ctx) {

        var timer, args, needInvoke;

        return function() {

            args = arguments;
            needInvoke = true;
            ctx = ctx || this;

            timer || (function() {
                if(needInvoke) {
                    fn.apply(ctx, args);
                    needInvoke = false;
                    timer = setTimeout(arguments.callee, timeout);
                }
                else {
                    timer = null;
                }
            })();

        };

    }

});

})(jQuery);
/* ../../../../libs/bem-bl/blocks-common/i-jquery/__debounce/i-jquery__debounce.js end */
;
/* ../../../../libs/bem-bl/blocks-common/i-jquery/__observable/i-jquery__observable.js begin */
/**
 * Observable plugin
 *
 * Copyright (c) 2010 Filatov Dmitry (alpha@zforms.ru)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * @version 1.0.0
 * @requires $.identify
 * @requires $.inherit
 */

(function($) {

var storageExpando = '__' + (+new Date) + 'storage',
    getFnId = function(fn, ctx) {
        return $.identify(fn) + (ctx? $.identify(ctx) : '');
    },
    Observable = /** @lends $.observable.prototype */{

        /**
         * Builds full event name
         * @protected
         * @param {String} e Event type
         * @returns {String}
         */
        buildEventName : function(e) {

            return e;

        },

        /**
         * Adding event handler
         * @param {String} e Event type
         * @param {Object} [data] Additional data that the handler gets as e.data
         * @param {Function} fn Handler
         * @param {Object} [ctx] Handler context
         * @returns {$.observable}
         */
        on : function(e, data, fn, ctx, _special) {

            if(typeof e == 'string') {
                if($.isFunction(data)) {
                    ctx = fn;
                    fn = data;
                    data = undefined;
                }

                var id = getFnId(fn, ctx),
                    storage = this[storageExpando] || (this[storageExpando] = {}),
                    eList = e.split(' '),
                    i = 0,
                    eStorage;

                while(e = eList[i++]) {
                    e = this.buildEventName(e);
                    eStorage = storage[e] || (storage[e] = { ids : {}, list : {} });

                    if(!(id in eStorage.ids)) {
                        var list = eStorage.list,
                            item = { fn : fn, data : data, ctx : ctx, special : _special };
                        if(list.last) {
                            list.last.next = item;
                            item.prev = list.last;
                        } else {
                            list.first = item;
                        }

                        eStorage.ids[id] = list.last = item;
                    }
                }
            } else {
                var _this = this;
                $.each(e, function(e, fn) {
                    _this.on(e, fn, data, _special);
                });
            }

            return this;

        },

        onFirst : function(e, data, fn, ctx) {

            return this.on(e, data, fn, ctx, { one : true });

        },

        /**
         * Removing event handler(s)
         * @param {String} [e] Event type
         * @param {Function} [fn] Handler
         * @param {Object} [ctx] Handler context
         * @returns {$.observable}
         */
        un : function(e, fn, ctx) {

            if(typeof e == 'string' || typeof e == 'undefined') {
                var storage = this[storageExpando];
                if(storage) {
                    if(e) { // if event type was passed
                        var eList = e.split(' '),
                            i = 0,
                            eStorage;
                        while(e = eList[i++]) {
                            e = this.buildEventName(e);
                            if(eStorage = storage[e]) {
                                if(fn) {  // if specific handler was passed
                                    var id = getFnId(fn, ctx),
                                        ids = eStorage.ids;
                                    if(id in ids) {
                                        var list = eStorage.list,
                                            item = ids[id],
                                            prev = item.prev,
                                            next = item.next;

                                        if(prev) {
                                            prev.next = next;
                                        }
                                        else if(item === list.first) {
                                            list.first = next;
                                        }

                                        if(next) {
                                            next.prev = prev;
                                        }
                                        else if(item === list.last) {
                                            list.last = prev;
                                        }

                                        delete ids[id];
                                    }
                                } else {
                                    delete this[storageExpando][e];
                                }
                            }
                        }
                    } else {
                        delete this[storageExpando];
                    }
                }
            } else {
                var _this = this;
                $.each(e, function(e, fn) {
                    _this.un(e, fn, ctx);
                });
            }

            return this;

        },

        /**
         * Fires event handlers
         * @param {String|$.Event} e Event
         * @param {Object} [data] Additional data
         * @returns {$.observable}
         */
        trigger : function(e, data) {

            var _this = this,
                storage = _this[storageExpando],
                rawType;

            typeof e === 'string'?
                e = $.Event(_this.buildEventName(rawType = e)) :
                e.type = _this.buildEventName(rawType = e.type);

            e.target || (e.target = _this);

            if(storage && (storage = storage[e.type])) {
                var item = storage.list.first,
                    ret;
                while(item) {
                    e.data = item.data;
                    ret = item.fn.call(item.ctx || _this, e, data);
                    if(typeof ret !== 'undefined') {
                        e.result = ret;
                        if(ret === false) {
                            e.preventDefault();
                            e.stopPropagation();
                        }
                    }

                    item.special && item.special.one &&
                        _this.un(rawType, item.fn, item.ctx);
                    item = item.next;
                }
            }

            return this;

        }

    };

$.observable = $.inherit(Observable, Observable);

})(jQuery);
/* ../../../../libs/bem-bl/blocks-common/i-jquery/__observable/i-jquery__observable.js end */
;
/* ../../../../libs/bem-bl/blocks-common/i-bem/i-bem.js begin */
/** @requires jquery.inherit */
/** @requires jquery.isEmptyObject */
/** @requires jquery.identify */
/** @requires jquery.observable */

(function($, undefined) {

/**
 * Storage for deferred functions
 * @private
 * @type Array
 */
var afterCurrentEventFns = [],

/**
 * Storage for block declarations (hash by block name)
 * @private
 * @type Object
 */
    blocks = {},

/**
 * Communication channels
 * @static
 * @private
 * @type Object
 */
    channels = {};

/**
 * Builds the name of the handler method for setting a modifier
 * @static
 * @private
 * @param {String} elemName Element name
 * @param {String} modName Modifier name
 * @param {String} modVal Modifier value
 * @returns {String}
 */
function buildModFnName(elemName, modName, modVal) {

    return (elemName? '__elem_' + elemName : '') +
           '__mod' +
           (modName? '_' + modName : '') +
           (modVal? '_' + modVal : '');

}

/**
 * Transforms a hash of modifier handlers to methods
 * @static
 * @private
 * @param {Object} modFns
 * @param {Object} props
 * @param {String} [elemName]
 */
function modFnsToProps(modFns, props, elemName) {

    $.isFunction(modFns)?
        (props[buildModFnName(elemName, '*', '*')] = modFns) :
        $.each(modFns, function(modName, modFn) {
            $.isFunction(modFn)?
                (props[buildModFnName(elemName, modName, '*')] = modFn) :
                $.each(modFn, function(modVal, modFn) {
                    props[buildModFnName(elemName, modName, modVal)] = modFn;
                });
        });

}

function buildCheckMod(modName, modVal) {

    return modVal?
        Array.isArray(modVal)?
            function(block) {
                var i = 0, len = modVal.length;
                while(i < len)
                    if(block.hasMod(modName, modVal[i++]))
                        return true;
                return false;
            } :
            function(block) {
                return block.hasMod(modName, modVal);
            } :
        function(block) {
            return block.hasMod(modName);
        };

}

/** @namespace */
this.BEM = $.inherit($.observable, /** @lends BEM.prototype */ {

    /**
     * @class Base block for creating BEM blocks
     * @constructs
     * @private
     * @param {Object} mods Block modifiers
     * @param {Object} params Block parameters
     * @param {Boolean} [initImmediately=true]
     */
    __constructor : function(mods, params, initImmediately) {

        var _this = this;

        /**
         * Cache of block modifiers
         * @private
         * @type Object
         */
        _this._modCache = mods || {};

        /**
         * Current modifiers in the stack
         * @private
         * @type Object
         */
        _this._processingMods = {};

        /**
         * The block's parameters, taking into account the defaults
         * @protected
         * @type Object
         */
        _this._params = params; // это нужно для правильной сборки параметров у блока из нескольких нод
        _this.params = null;

        initImmediately !== false?
            _this._init() :
            _this.afterCurrentEvent(function() {
                _this._init();
            });

    },

    /**
     * Initializes the block
     * @private
     */
    _init : function() {

        if(!this._initing && !this.hasMod('js', 'inited')) {
            this._initing = true;

            if(!this.params) {
                this.params = $.extend(this.getDefaultParams(), this._params);
                delete this._params;
            }

            this.setMod('js', 'inited');
            delete this._initing;
            this.hasMod('js', 'inited') && this.trigger('init');
        }

        return this;

    },

    /**
     * Changes the context of the function being passed
     * @protected
     * @param {Function} fn
     * @param {Object} [ctx=this] Context
     * @returns {Function} Function with a modified context
     */
    changeThis : function(fn, ctx) {

        return fn.bind(ctx || this);

    },

    /**
     * Executes the function in the context of the block, after the "current event"
     * @protected
     * @param {Function} fn
     * @param {Object} [ctx] Context
     */
    afterCurrentEvent : function(fn, ctx) {

        this.__self.afterCurrentEvent(this.changeThis(fn, ctx));

    },

    /**
     * Executes the block's event handlers and live event handlers
     * @protected
     * @param {String} e Event name
     * @param {Object} [data] Additional information
     * @returns {BEM}
     */
    trigger : function(e, data) {

        this
            .__base(e = this.buildEvent(e), data)
            .__self.trigger(e, data);

        return this;

    },

    buildEvent : function(e) {

        typeof e == 'string' && (e = $.Event(e));
        e.block = this;

        return e;

    },

    /**
     * Checks whether a block or nested element has a modifier
     * @protected
     * @param {Object} [elem] Nested element
     * @param {String} modName Modifier name
     * @param {String} [modVal] Modifier value
     * @returns {Boolean}
     */
    hasMod : function(elem, modName, modVal) {

        var len = arguments.length,
            invert = false;

        if(len == 1) {
            modVal = '';
            modName = elem;
            elem = undefined;
            invert = true;
        }
        else if(len == 2) {
            if(typeof elem == 'string') {
                modVal = modName;
                modName = elem;
                elem = undefined;
            }
            else {
                modVal = '';
                invert = true;
            }
        }

        var res = this.getMod(elem, modName) === modVal;
        return invert? !res : res;

    },

    /**
     * Returns the value of the modifier of the block/nested element
     * @protected
     * @param {Object} [elem] Nested element
     * @param {String} modName Modifier name
     * @returns {String} Modifier value
     */
    getMod : function(elem, modName) {

        var type = typeof elem;
        if(type === 'string' || type === 'undefined') { // elem either omitted or undefined
            modName = elem || modName;
            var modCache = this._modCache;
            return modName in modCache?
                modCache[modName] :
                modCache[modName] = this._extractModVal(modName);
        }

        return this._getElemMod(modName, elem);

    },

    /**
     * Returns the value of the modifier of the nested element
     * @private
     * @param {String} modName Modifier name
     * @param {Object} elem Nested element
     * @param {Object} [elem] Nested element name
     * @returns {String} Modifier value
     */
    _getElemMod : function(modName, elem, elemName) {

        return this._extractModVal(modName, elem, elemName);

    },

    /**
     * Returns values of modifiers of the block/nested element
     * @protected
     * @param {Object} [elem] Nested element
     * @param {String} [modName1, ..., modNameN] Modifier names
     * @returns {Object} Hash of modifier values
     */
    getMods : function(elem) {

        var hasElem = elem && typeof elem != 'string',
            _this = this,
            modNames = [].slice.call(arguments, hasElem? 1 : 0),
            res = _this._extractMods(modNames, hasElem? elem : undefined);

        if(!hasElem) { // caching
            modNames.length?
                modNames.forEach(function(name) {
                    _this._modCache[name] = res[name];
                }):
                _this._modCache = res;
        }

        return res;

    },

    /**
     * Sets the modifier for a block/nested element
     * @protected
     * @param {Object} [elem] Nested element
     * @param {String} modName Modifier name
     * @param {String} modVal Modifier value
     * @returns {BEM}
     */
    setMod : function(elem, modName, modVal) {

        if(typeof modVal == 'undefined') {
            modVal = modName;
            modName = elem;
            elem = undefined;
        }

        var _this = this;

        if(!elem || elem[0]) {

            var modId = (elem && elem[0]? $.identify(elem[0]) : '') + '_' + modName;

            if(this._processingMods[modId]) return _this;

            var elemName,
                curModVal = elem?
                    _this._getElemMod(modName, elem, elemName = _this.__self._extractElemNameFrom(elem)) :
                    _this.getMod(modName);

            if(curModVal === modVal) return _this;

            this._processingMods[modId] = true;

            var needSetMod = true,
                modFnParams = [modName, modVal, curModVal];

            elem && modFnParams.unshift(elem);

            [['*', '*'], [modName, '*'], [modName, modVal]].forEach(function(mod) {
                needSetMod = _this._callModFn(elemName, mod[0], mod[1], modFnParams) !== false && needSetMod;
            });

            !elem && needSetMod && (_this._modCache[modName] = modVal);

            needSetMod && _this._afterSetMod(modName, modVal, curModVal, elem, elemName);

            delete this._processingMods[modId];
        }

        return _this;

    },

    /**
     * Function after successfully changing the modifier of the block/nested element
     * @protected
     * @param {String} modName Modifier name
     * @param {String} modVal Modifier value
     * @param {String} oldModVal Old modifier value
     * @param {Object} [elem] Nested element
     * @param {String} [elemName] Element name
     */
    _afterSetMod : function(modName, modVal, oldModVal, elem, elemName) {},

    /**
     * Sets a modifier for a block/nested element, depending on conditions.
     * If the condition parameter is passed: when true, modVal1 is set; when false, modVal2 is set.
     * If the condition parameter is not passed: modVal1 is set if modVal2 was set, or vice versa.
     * @protected
     * @param {Object} [elem] Nested element
     * @param {String} modName Modifier name
     * @param {String} modVal1 First modifier value
     * @param {String} [modVal2] Second modifier value
     * @param {Boolean} [condition] Condition
     * @returns {BEM}
     */
    toggleMod : function(elem, modName, modVal1, modVal2, condition) {

        if(typeof elem == 'string') { // if this is a block
            condition = modVal2;
            modVal2 = modVal1;
            modVal1 = modName;
            modName = elem;
            elem = undefined;
        }
        if(typeof modVal2 == 'undefined') {
            modVal2 = '';
        } else if(typeof modVal2 == 'boolean') {
            condition = modVal2;
            modVal2 = '';
        }

        var modVal = this.getMod(elem, modName);
        (modVal == modVal1 || modVal == modVal2) &&
            this.setMod(
                elem,
                modName,
                typeof condition === 'boolean'?
                    (condition? modVal1 : modVal2) :
                    this.hasMod(elem, modName, modVal1)? modVal2 : modVal1);

        return this;

    },

    /**
     * Removes a modifier from a block/nested element
     * @protected
     * @param {Object} [elem] Nested element
     * @param {String} modName Modifier name
     * @returns {BEM}
     */
    delMod : function(elem, modName) {

        if(!modName) {
            modName = elem;
            elem = undefined;
        }

        return this.setMod(elem, modName, '');

    },

    /**
     * Executes handlers for setting modifiers
     * @private
     * @param {String} elemName Element name
     * @param {String} modName Modifier name
     * @param {String} modVal Modifier value
     * @param {Array} modFnParams Handler parameters
     */
    _callModFn : function(elemName, modName, modVal, modFnParams) {

        var modFnName = buildModFnName(elemName, modName, modVal);
        return this[modFnName]?
           this[modFnName].apply(this, modFnParams) :
           undefined;

    },

    /**
     * Retrieves the value of the modifier
     * @private
     * @param {String} modName Modifier name
     * @param {Object} [elem] Element
     * @returns {String} Modifier value
     */
    _extractModVal : function(modName, elem) {

        return '';

    },

    /**
     * Retrieves name/value for a list of modifiers
     * @private
     * @param {Array} modNames Names of modifiers
     * @param {Object} [elem] Element
     * @returns {Object} Hash of modifier values by name
     */
    _extractMods : function(modNames, elem) {

        return {};

    },

    /**
     * Returns a named communication channel
     * @param {String} [id='default'] Channel ID
     * @param {Boolean} [drop=false] Destroy the channel
     * @returns {$.observable|undefined} Communication channel
     */
    channel : function(id, drop) {

        return this.__self.channel(id, drop);

    },

    /**
     * Returns a block's default parameters
     * @returns {Object}
     */
    getDefaultParams : function() {

        return {};

    },

    /**
     * Helper for cleaning up block properties
     * @param {Object} [obj=this]
     */
    del : function(obj) {

        var args = [].slice.call(arguments);
        typeof obj == 'string' && args.unshift(this);
        this.__self.del.apply(this.__self, args);
        return this;

	},

    /**
     * Deletes a block
     */
    destruct : function() {}

}, {

    _name : 'i-bem',

    /**
     * Storage for block declarations (hash by block name)
     * @static
     * @protected
     * @type Object
     */
    blocks : blocks,

    /**
     * Declares blocks and creates a block class
     * @static
     * @protected
     * @param {String|Object} decl Block name (simple syntax) or description
     * @param {String} decl.block|decl.name Block name
     * @param {String} [decl.baseBlock] Name of the parent block
     * @param {String} [decl.modName] Modifier name
     * @param {String} [decl.modVal] Modifier value
     * @param {Object} [props] Methods
     * @param {Object} [staticProps] Static methods
     */
    decl : function(decl, props, staticProps) {

        if(typeof decl == 'string')
            decl = { block : decl };
        else if(decl.name) {
            decl.block = decl.name;
        }

        if(decl.baseBlock && !blocks[decl.baseBlock])
            throw('baseBlock "' + decl.baseBlock + '" for "' + decl.block + '" is undefined');

        props || (props = {});

        if(props.onSetMod) {
            modFnsToProps(props.onSetMod, props);
            delete props.onSetMod;
        }

        if(props.onElemSetMod) {
            $.each(props.onElemSetMod, function(elemName, modFns) {
                modFnsToProps(modFns, props, elemName);
            });
            delete props.onElemSetMod;
        }

        var baseBlock = blocks[decl.baseBlock || decl.block] || this;

        if(decl.modName) {
            var checkMod = buildCheckMod(decl.modName, decl.modVal);
            $.each(props, function(name, prop) {
                $.isFunction(prop) &&
                    (props[name] = function() {
                        var method;
                        if(checkMod(this)) {
                            method = prop;
                        } else {
                            var baseMethod = baseBlock.prototype[name];
                            baseMethod && baseMethod !== props[name] &&
                                (method = this.__base);
                        }
                        return method?
                            method.apply(this, arguments) :
                            undefined;
                    });
            });
        }

        if(staticProps && typeof staticProps.live === 'boolean') {
            var live = staticProps.live;
            staticProps.live = function() {
                return live;
            };
        }

        var block;
        if(decl.block == baseBlock._name) {
            // makes a new "live" if the old one was already executed
            (block = $.inheritSelf(baseBlock, props, staticProps))._processLive(true);
        } else {
            (block = blocks[decl.block] = $.inherit(baseBlock, props, staticProps))._name = decl.block;
            delete block._liveInitable;
        }

        return block;

    },

    /**
     * Processes a block's live properties
     * @private
     * @param {Boolean} [heedLive=false] Whether to take into account that the block already processed its live properties
     * @returns {Boolean} Whether the block is a live block
     */
    _processLive : function(heedLive) {

        return false;

    },

    /**
     * Factory method for creating an instance of the block named
     * @static
     * @param {String|Object} block Block name or description
     * @param {Object} [params] Block parameters
     * @returns {BEM}
     */
    create : function(block, params) {

        typeof block == 'string' && (block = { block : block });

        return new blocks[block.block](block.mods, params);

    },

    /**
     * Returns the name of the current block
     * @static
     * @protected
     * @returns {String}
     */
    getName : function() {

        return this._name;

    },

    /**
     * Retrieves the name of an element nested in a block
     * @static
     * @private
     * @param {Object} elem Nested element
     * @returns {String|undefined}
     */
    _extractElemNameFrom : function(elem) {},

    /**
     * Adds a function to the queue for executing after the "current event"
     * @static
     * @protected
     * @param {Function} fn
     * @param {Object} ctx
     */
    afterCurrentEvent : function(fn, ctx) {

        afterCurrentEventFns.push({ fn : fn, ctx : ctx }) == 1 &&
            setTimeout(this._runAfterCurrentEventFns, 0);

    },

    /**
     * Executes the queue
     * @private
     */
    _runAfterCurrentEventFns : function() {

        var fnsLen = afterCurrentEventFns.length;
        if(fnsLen) {
            var fnObj,
                fnsCopy = afterCurrentEventFns.splice(0, fnsLen);

            while(fnObj = fnsCopy.shift()) fnObj.fn.call(fnObj.ctx || this);
        }

    },

    /**
     * Changes the context of the function being passed
     * @protected
     * @param {Function} fn
     * @param {Object} ctx Context
     * @returns {Function} Function with a modified context
     */
    changeThis : function(fn, ctx) {

        return fn.bind(ctx || this);

    },

    /**
     * Helper for cleaning out properties
     * @param {Object} [obj=this]
     */
    del : function(obj) {

        var delInThis = typeof obj == 'string',
            i = delInThis? 0 : 1,
            len = arguments.length;
        delInThis && (obj = this);

        while(i < len) delete obj[arguments[i++]];

        return this;

	},

    /**
     * Returns/destroys a named communication channel
     * @param {String} [id='default'] Channel ID
     * @param {Boolean} [drop=false] Destroy the channel
     * @returns {$.observable|undefined} Communication channel
     */
    channel : function(id, drop) {

        if(typeof id == 'boolean') {
            drop = id;
            id = undefined;
        }

        id || (id = 'default');

        if(drop) {
            if(channels[id]) {
                channels[id].un();
                delete channels[id];
            }
            return;
        }

        return channels[id] || (channels[id] = new $.observable());

    }

});

})(jQuery);

/* ../../../../libs/bem-bl/blocks-common/i-bem/i-bem.js end */
;
/* ../../../../libs/bem-bl/blocks-common/i-ecma/__object/i-ecma__object.js begin */
/**
 * Block i-ecma. Shim for some ES5 methods
 *
 * @block i-ecma
 */
(function() {

/**
 * Возвращает массив свойств объекта
 *
 * @param {Object} obj объект
 * @returns {Array}
 */
Object.keys || (Object.keys = function(obj) {
    var res = [];

    for(var i in obj) obj.hasOwnProperty(i) &&
        res.push(i);

    return res;
});

})();

/* ../../../../libs/bem-bl/blocks-common/i-ecma/__object/i-ecma__object.js end */
;
/* ../../../../libs/bem-bl/blocks-common/i-ecma/__array/i-ecma__array.js begin */
(function() {

var ptp = Array.prototype,
    toStr = Object.prototype.toString,
    methods = {

        /**
         * Finds the index of an element in an array
         *
         * @param {Object} item
         * @param {Number} [fromIdx] Starting from index (length - 1 - fromIdx, if fromIdx < 0)
         * @returns {Number} Element index or -1, if not found
         */
        indexOf : function(item, fromIdx) {

            fromIdx = +(fromIdx || 0);

            var t = this, len = t.length;

            if(len > 0 && fromIdx < len) {
                fromIdx = fromIdx < 0? Math.ceil(fromIdx) : Math.floor(fromIdx);
                fromIdx < -len && (fromIdx = 0);
                fromIdx < 0 && (fromIdx = fromIdx + len);

                while(fromIdx < len) {
                    if(fromIdx in t && t[fromIdx] === item)
                        return fromIdx;
                    ++fromIdx;
                }
            }

            return -1;

        },

        /**
         * Calls the callback for each element
         *
         * @param {Function} callback Called for each element
         * @param {Object} [ctx=null] Callback context
         */
        forEach : function(callback, ctx) {

            var i = -1, t = this, len = t.length;
            while(++i < len) i in t &&
                (ctx? callback.call(ctx, t[i], i, t) : callback(t[i], i, t));

        },

        /**
         * Creates array B from array A so that B[i] = callback(A[i])
         * @param {Function} callback Called for each element
         * @param {Object} [ctx=null] Callback context
         * @returns {Array}
         */
        map : function(callback, ctx) {

            var i = -1, t = this, len = t.length,
                res = new Array(len);

            while(++i < len) i in t &&
                (res[i] = ctx? callback.call(ctx, t[i], i, t) : callback(t[i], i, t));

            return res;

        },

        /**
         * Creates an array containing only the elements from the source array that the callback returns true for. 
         * @param {Function} callback Called for each element
         * @param {Object} [ctx] Callback context
         * @returns {Array}
         */
        filter : function(callback, ctx) {

            var i = -1, t = this, len = t.length,
                res = [];

            while(++i < len) i in t &&
                (ctx? callback.call(ctx, t[i], i, t) : callback(t[i], i, t)) && res.push(t[i]);

            return res;

        },

        /**
         * Wraps the array using an accumulator
         * @param {Function} callback Called for each element
         * @param {Object} [initialVal] Initial value of the accumulator
         * @returns {Object} Accumulator
         */
        reduce : function(callback, initialVal) {

            var i = -1, t = this, len = t.length,
                res;

            if(arguments.length < 2) {
                while(++i < len) {
                    if(i in t) {
                        res = t[i];
                        break;
                    }
                }
            }
            else {
                res = initialVal;
            }

            while(++i < len) i in t &&
                (res = callback(res, t[i], i, t));

            return res;

        },

        /**
         * Checks whether at least one element in the array meets the condition in the callback
         * @param {Function} callback
         * @param {Object} [ctx=this] Callback context
         * @returns {Boolean}
         */
        some : function(callback, ctx) {

            var i = -1, t = this, len = t.length;

            while(++i < len)
                if(i in t && (ctx ? callback.call(ctx, t[i], i, t) : callback(t[i], i, t)))
                    return true;

            return false;

        },

        /**
         * Checks whether every element in the array meets the condition in the callback
         * @param {Function} callback
         * @param {Object} [ctx=this] Context of the callback call
         * @returns {Boolean}
         */
        every : function(callback, ctx) {

            var i = -1, t = this, len = t.length;

            while(++i < len)
                if(i in t && !(ctx ? callback.call(ctx, t[i], i, t) : callback(t[i], i, t)))
                    return false;

            return true;

        }

    };

for(var name in methods)
    ptp[name] || (ptp[name] = methods[name]);

Array.isArray || (Array.isArray = function(obj) {
    return toStr.call(obj) === '[object Array]';
});

})();

/* ../../../../libs/bem-bl/blocks-common/i-ecma/__array/i-ecma__array.js end */
;
/* ../../../../libs/bem-bl/blocks-common/i-ecma/__function/i-ecma__function.js begin */
(function() {

var slice = Array.prototype.slice;

Function.prototype.bind || (Function.prototype.bind = function(ctx) {

    var fn = this,
        args = slice.call(arguments, 1);

    return function () {
        return fn.apply(ctx, args.concat(slice.call(arguments)));
    }

});

})();
/* ../../../../libs/bem-bl/blocks-common/i-ecma/__function/i-ecma__function.js end */
;
/* ../../../../libs/bem-bl/blocks-common/i-bem/__internal/i-bem__internal.js begin */
/** @fileOverview Module for internal BEM helpers */
/** @requires BEM */

(function(BEM, $, undefined) {

/**
 * Separator for modifiers and their values
 * @const
 * @type String
 */
var MOD_DELIM = '_',

/**
 * Separator between names of a block and a nested element
 * @const
 * @type String
 */
    ELEM_DELIM = '__',

/**
 * Pattern for acceptable element and modifier names
 * @const
 * @type String
 */
    NAME_PATTERN = '[a-zA-Z0-9-]+';

function buildModPostfix(modName, modVal, buffer) {

    buffer.push(MOD_DELIM, modName, MOD_DELIM, modVal);

}

function buildBlockClass(name, modName, modVal, buffer) {

    buffer.push(name);
    modVal && buildModPostfix(modName, modVal, buffer);

}

function buildElemClass(block, name, modName, modVal, buffer) {

    buildBlockClass(block, undefined, undefined, buffer);
    buffer.push(ELEM_DELIM, name);
    modVal && buildModPostfix(modName, modVal, buffer);

}

BEM.INTERNAL = {

    NAME_PATTERN : NAME_PATTERN,

    MOD_DELIM : MOD_DELIM,
    ELEM_DELIM : ELEM_DELIM,

    buildModPostfix : function(modName, modVal, buffer) {

        var res = buffer || [];
        buildModPostfix(modName, modVal, res);
        return buffer? res : res.join('');

    },

    /**
     * Builds the class of a block or element with a modifier
     * @private
     * @param {String} block Block name
     * @param {String} [elem] Element name
     * @param {String} [modName] Modifier name
     * @param {String} [modVal] Modifier value
     * @param {Array} [buffer] Buffer
     * @returns {String|Array} Class or buffer string (depending on whether the buffer parameter is present)
     */
    buildClass : function(block, elem, modName, modVal, buffer) {

        var typeOf = typeof modName;
        if(typeOf == 'string') {
            if(typeof modVal != 'string' && typeof modVal != 'number') {
                buffer = modVal;
                modVal = modName;
                modName = elem;
                elem = undefined;
            }
        } else if(typeOf != 'undefined') {
            buffer = modName;
            modName = undefined;
        } else if(elem && typeof elem != 'string') {
            buffer = elem;
            elem = undefined;
        }

        if(!(elem || modName || buffer)) { // оптимизация для самого простого случая
            return block;
        }

        var res = buffer || [];

        elem?
            buildElemClass(block, elem, modName, modVal, res) :
            buildBlockClass(block, modName, modVal, res);

        return buffer? res : res.join('');

    },

    /**
     * Builds full classes for a buffer or element with modifiers
     * @private
     * @param {String} block Block name
     * @param {String} [elem] Element name
     * @param {Object} [mods] Modifiers
     * @param {Array} [buffer] Buffer
     * @returns {String|Array} Class or buffer string (depending on whether the buffer parameter is present)
     */
    buildClasses : function(block, elem, mods, buffer) {

        if(elem && typeof elem != 'string') {
            buffer = mods;
            mods = elem;
            elem = undefined;
        }

        var res = buffer || [];

        elem?
            buildElemClass(block, elem, undefined, undefined, res) :
            buildBlockClass(block, undefined, undefined, res);

        mods && $.each(mods, function(modName, modVal) {
            if(modVal) {
                res.push(' ');
                elem?
                    buildElemClass(block, elem, modName, modVal, res) :
                    buildBlockClass(block, modName, modVal, res);
            }
        });

        return buffer? res : res.join('');

        /*var typeOf = typeof elem;
        if(typeOf != 'string' && typeOf != 'undefined') {
            buffer = mods;
            mods = elem;
            elem = undefined;
        }
        if($.isArray(mods)) {
            buffer = mods;
            mods = undefined;
        }

        var res = buffer || [];
        buildClasses(block, elem, mods, res);
        return buffer? res : res.join('');*/

    }

}

})(BEM, jQuery);
/* ../../../../libs/bem-bl/blocks-common/i-bem/__internal/i-bem__internal.js end */
;
/* ../../../../libs/bem-bl/blocks-common/i-jquery/__cookie/i-jquery__cookie.js begin */
/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * Create a cookie with the given name and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String name The name of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};
/* ../../../../libs/bem-bl/blocks-common/i-jquery/__cookie/i-jquery__cookie.js end */
;
/* ../../../../libs/bem-bl/blocks-common/i-jquery/__decodeuri/i-jquery__decodeuri.js begin */
/**
 * Plugin for decoding URI-escaped strings in CP1251 encoding
 *
 * Copyright (c) 2011-2012 Roman Rozhdestvenskiy (sbmaxx@gmail.com)
 */
(function($) {

// Equivalency table for cp1251 and utf8.
var map = { "%D0": "%D0%A0","%C0": "%D0%90","%C1": "%D0%91","%C2": "%D0%92","%C3": "%D0%93","%C4": "%D0%94","%C5": "%D0%95","%A8": "%D0%81","%C6": "%D0%96","%C7": "%D0%97","%C8": "%D0%98","%C9": "%D0%99","%CA": "%D0%9A","%CB": "%D0%9B","%CC": "%D0%9C","%CD": "%D0%9D","%CE": "%D0%9E","%CF": "%D0%9F","%D1": "%D0%A1","%D2": "%D0%A2","%D3": "%D0%A3","%D4": "%D0%A4","%D5": "%D0%A5","%D6": "%D0%A6","%D7": "%D0%A7","%D8": "%D0%A8","%D9": "%D0%A9","%DA": "%D0%AA","%DB": "%D0%AB","%DC": "%D0%AC","%DD": "%D0%AD","%DE": "%D0%AE","%DF": "%D0%AF","%E0": "%D0%B0","%E1": "%D0%B1","%E2": "%D0%B2","%E3": "%D0%B3","%E4": "%D0%B4","%E5": "%D0%B5","%B8": "%D1%91","%E6": "%D0%B6","%E7": "%D0%B7","%E8": "%D0%B8","%E9": "%D0%B9","%EA": "%D0%BA","%EB": "%D0%BB","%EC": "%D0%BC","%ED": "%D0%BD","%EE": "%D0%BE","%EF": "%D0%BF","%F0": "%D1%80","%F1": "%D1%81","%F2": "%D1%82","%F3": "%D1%83","%F4": "%D1%84","%F5": "%D1%85","%F6": "%D1%86","%F7": "%D1%87","%F8": "%D1%88","%F9": "%D1%89","%FA": "%D1%8A","%FB": "%D1%8B","%FC": "%D1%8C","%FD": "%D1%8D","%FE": "%D1%8E","%FF": "%D1%8F" };

function convert(str) {
    // Symbol code in cp1251 (hex) : symbol code in utf8)
    return str.replace(/%.{2}/g, function($0) { return map[$0] || $0; });
}

function decode(func, str) {

    var decoded = '';
    // try/catch block for getting the encoding of the source string
    // error is thrown if a non-UTF8 string is input
    // if the string was not decoded, it is returned without changes
    try {
        decoded = func(str);
    } catch (e) {
        try {
            decoded = func(convert(str));
        } catch (e) {
            decoded = str;
        }
    }
    return decoded;

}

$.extend({

    decodeURI : function(str) {
        return decode(decodeURI, str);
    },

    decodeURIComponent : function(str) {
        return decode(decodeURIComponent, str);
    }

});

})(jQuery);

/* ../../../../libs/bem-bl/blocks-common/i-jquery/__decodeuri/i-jquery__decodeuri.js end */
;
/* ../../../../libs/islands-romochka/desktop.blocks/i-bem/html/i-bem__html.js begin */
/** @requires BEM */
/** @requires BEM.INTERNAL */
/** @requires jquery.stringify */

(function(BEM, $, undefined) {

var INTERNAL = BEM.INTERNAL,
    ELEM_DELIM = INTERNAL.ELEM_DELIM,
    SHORT_TAGS = { // хэш для быстрого определения, является ли тэг коротким
        area : 1, base : 1, br : 1, col : 1, command : 1, embed : 1, hr : 1, img : 1,
        input : 1, keygen : 1, link : 1, meta : 1, param : 1, source : 1, wbr : 1 },
    buildClass = INTERNAL.buildClass,
    buildClasses = INTERNAL.buildClasses,
    decls = {};

function addPropToDecl(decl, name, fn) {

    (decl[name] || (decl[name] = [])).unshift(fn);

}

function buildDeclFn(fn, desc) {

    return desc.modName?
        function(ctx) {
            (ctx._curBlock.mods || {})[desc.modName] === desc.modVal && fn(ctx);
        } :
        fn;

}

function join(a, b) {

    var isArrayB = $.isArray(b),
        res;

    $.isArray(a)?
        isArrayB? res = a.concat(b) : (res = a).push(b) :
        isArrayB? (res = b).unshift(a) : res = [a, b];

    return res;

}

var attrEscapes = { '"': '&quot;', '&': '&amp;', '<': '&lt;', '>': '&gt;' },
    attrEscapesRE = /["&<>]/g;
function escapeAttr(attrVal) {
    return attrVal.replace(attrEscapesRE, function(needToEscape) {
        return attrEscapes[needToEscape];
    });
}

/**
 * @namespace
 * @name BEM.HTML
 */
BEM.HTML = {

    /**
     * Декларация
     * @protected
     * @param {String|Object} decl имя блока (простой синтаксис) или описание
     * @param {String} decl.block имя блока
     * @param {String} [decl.modName] имя модификатора
     * @param {String} [decl.modVal] значение модификатора
     * @param {Object} props свойства
     */
    decl : function(desc, props) {

        typeof desc == 'string' && (desc = { block : desc });
        desc.name && (desc.block = desc.name);

        var decl = decls[desc.block] || (decls[desc.block] = {});

        props.onBlock && addPropToDecl(decl, '_block', buildDeclFn(props.onBlock, desc));

        if(props.onElem) {
            $.isFunction(props.onElem)?
                addPropToDecl(decl, '_elem', buildDeclFn(props.onElem, desc)) :
                $.each(props.onElem, function(elem, fn) {
                    addPropToDecl(decl, '_elem' + (elem === '*'? '' : ELEM_DELIM + elem), buildDeclFn(fn, desc));
                });
        }

    },

    /**
     * Строит HTML-представление
     * @param {Object|Array} params JSON-описание
     */
    build : function(params) {

        var builder = new this.Ctx(params);
        builder._buildAll();
        return builder._flush();

    },

    Ctx : $.inherit(/** @lends BEM.HTML.Ctx.prototype */{
        /**
         * @class Внутренний класс контекста билдера HTML-представления
         * @constructs
         * @param {Object|Array|String} params параметры
         */
        __constructor : function(params) {

            /**
             * буфер
             * @private
             * @type Array
             */
            this._buffer = [];

            /**
             * текущие параметры
             * @private
             * @type Object
             */
            this._params = params;

            /**
             * туннелированные параметры
             * @private
             * @type Object
             */
            this._tParams = null;

            this._tParamsChanges = null;

            /**
             * имя текущего блока
             * @private
             * @type String
             */
            this._curBlock = undefined;

        },

        /**
         * Возвращает позицию контекста
         * @returns {Number}
         */
        pos : function() {

            return this._params._pos;

        },

        /**
         * Проверяет, является ли текущий контекст первым
         * @returns {Boolean}
         */
        isFirst : function() {

            return this._params._pos === 1;

        },

        /**
         * Проверяет, является ли текущий контекст последним
         * @returns {Boolean}
         */
        isLast : function() {

            var params = this._params;
            return params._pos === params._siblingsCount;

        },

        /**
         * Возвращает/устанавливает параметры контекста
         * @param {Object} [params] параметры
         */
        params : function(params) {

            var _this = this;
            if(typeof params == 'undefined') return _this._params;

            _this._params = params;
            return _this;

        },

        /**
         * Возвращает/устанавливает один параметр контекста
         * @param {String} name имя параметра
         * @param {String} [val] значение параметра
         * @param {Boolean} [force=false] установить параметр независимо от его наличия в контексте
         * @param {Boolean} [needExtend=false] расширять параметр
         */
        param : function(name, val, force, needExtend) {

            var _this = this,
                params = _this._params;

            if(typeof val == 'undefined') return params[name];

            if(force || !(name in params)) {
                params[name] = val;
            } else if(needExtend) {
                params[name] = $.extend(val, params[name]);
            }

            return _this;

        },

        /**
         * Возвращает/устанавливает html-атрибуты контекста (шорткат к params('attrs', val))
         * @param {Object} [val] хэш атрибутов
         * @param {Boolean} [force=false]
         */
        attrs : function(val, force) {

            return this.param('attrs', val, force, true);

        },

        /**
         * Возвращает/устанавливает один html-атрибут контекста
         * @param {String} name имя атрибута
         * @param {String} [val] значение атрибута
         * @param {Boolean} [force=false]
         */
        attr : function(name, val, force) {

            var _this = this;
            if(typeof val == 'undefined') return (_this._params.attrs || {})[name];

            var attrs = _this._params.attrs;
            attrs?
                (force || !(name in attrs)) && (attrs[name] = val) :
                (_this._params.attrs = {})[name] = val;

            return _this;

        },

        /**
         * Возвращает/устанавливает имя html-тэга контекста (шорткат к params('tag', val))
         * @param {String} [val] тэг
         * @param {Boolean} [force=false]
         */
        tag : function(val, force) {

            return this.param('tag', val, force);

        },

        /**
         * Возвращает/устанавливает дополнительные CSS-классы контекста (шорткат к params('cls', val))
         * @param {String} [val] CSS-класс
         * @param {Boolean} [force=false]
         */
        cls : function(val, force) {

            return this.param('cls', val, force);

        },

        /**
         * Возвращает/устанавливает модификаторы контекста (шорткат к params('mods', val))
         * @param {Object} [val] хэш модификаторов
         * @param {Boolean} [force=false]
         */
        mods : function(val, force) {

            return this.param('mods', val, force, true);

        },

        /**
         * Возвращает/устанавливает один модификатор контекста
         * @param {String} name имя модификатора
         * @param {String} [val] значение модификатора
         * @param {Boolean} [force=false]
         */
        mod : function(name, val, force) {

            var _this = this;
            if(typeof val == 'undefined') return (_this._params.mods || {})[name];

            var mods = _this._params.mods;
            mods?
                (force || !(name in mods)) && (mods[name] = val) :
                (_this._params.mods = {})[name] = val;

            return _this;

        },

        /**
         * Возвращает/добавляет/устанавливает миксы
         * @param {Array} [val] миксы
         * @param {Boolean} [force=false]
         */
        mix : function(val, force) {

            var _this = this,
                params = _this._params;

            if(typeof val == 'undefined') return params.mix;

            if(force || !('mix' in params)) {
                params.mix = val;
            } else {
                params.mix = params.mix.concat(val);
            }

            return _this;

        },

        /**
         * Возвращает/устанавливает js-параметры контекста (шорткат к params('js', val))
         * @param {Boolean|Object} [val] параметры
         */
        js : function(val) {

            return this.param('js', val);

        },

        /**
         * Возвращает/устанавливает контент контекста (шорткат к params('content', val))
         * @param {String|Object|Array} [val] контент
         * @param {Boolean} [force=false] установить контент независимо от его наличия
         */
        content : function(val, force) {

            return this.param('content', val, force);

        },

        /**
         * Оборачивает контент контекста (например, другим элементом)
         * @param {Object} obj
         */
        wrapContent : function(obj) {

            var _this = this,
                params = _this._params;

            obj.content = params.content;
            params.content = obj;

            return _this;

        },

        /**
         * Добавляет контент перед контентом контекста (например, еще один элемент)
         * @param {Object|Array} obj
         */
        beforeContent : function(obj) {

            var _this = this,
                params = _this._params;

            params.content = join(obj, params.content);

            return _this;

        },

        /**
         * Добавляет контент после контента контекста (например, еще один элемент)
         * @param {Object|Array} obj
         */
        afterContent : function(obj) {

            var _this = this,
                params = _this._params;

            params.content = join(params.content, obj);

            return _this;

        },

        /**
         * Оборачивает контекста (например, другим элементом или блоком)
         * @param {Object} obj
         */
        wrap : function(obj) {

            var _this = this,
                params = _this._params;

            obj.block || (obj._curBlock = _this._curBlock);
            obj.content = params._wrapper? params._wrapper : params;
            params._wrapper = obj;

            return _this;

        },

        /**
         * Возвращает/устанавливает один туннелированный параметр контекста
         * @param {String} name имя параметра
         * @param {String} [val] значение параметра
         */
        tParam : function(name, val) {

            var _this = this,
                tParams = _this._tParams || (_this._tParams = {});

            if(typeof val == 'undefined') return tParams[name];

            var tParamsChanges = _this._tParamsChanges || (_this._tParamsChanges = {});

            name in tParamsChanges || (tParamsChanges[name] = tParams[name]);

            tParams[name] = val;

            return _this;

        },

        /**
         * Генерирует уникальный идентификатор
         * returns {String}
         */
        generateId : function() {

            return $.identify();

        },

        /**
         * Останавливает применение более базовых шаблонов
         */
        stop : function() {

            this._params._isStopped = true;

        },

        /**
         * Выполняет одну итерацию билда в зависимости от типа контекста
         * @private
         */
        _buildAll : function() {

            var _this = this,
                buffer = _this._buffer,
                params = _this._params,
                paramsType = typeof params;

            if(paramsType == 'string' || paramsType == 'number') {
                buffer.push(params);
            } else if($.isArray(params)) {
                var i = 0, len = params.length, currParams, currParamsType;
                while(i < len) {
                     _this._params = currParams = params[i++];
                    currParamsType = typeof currParams;
                    if(currParamsType == 'string' || currParamsType == 'number') {
                        buffer.push(currParams);
                    } else if(currParams) {
                        currParams._pos = i;
                        currParams._siblingsCount = len;
                        _this._buildByDecl();
                    }
                }
            } else if(params) {
                _this._params._pos = _this._params._siblingsCount = 1;
                _this._buildByDecl();
            }

        },

        /**
         * Дефолтный билд
         * @private
         */
        _build : function() {

            var _this = this,
                buffer = _this._buffer,
                params = _this._params,
                tag = params.tag || 'div',
                jsParams,
                isBEM = params.block || params.elem,
                curBlock = isBEM && (params.block || _this._curBlock.block),
                addInitingCls = false;

            if(params.js) {
                (jsParams = {})[buildClass(curBlock, params.elem)] = params.js === true? {} : params.js;
                addInitingCls = !params.elem;
            }

            buffer.push('<', tag);

            if(isBEM || params.cls) {
                buffer.push(' class="');
                if(isBEM) {
                    buildClasses(curBlock, params.elem, params.mods, buffer);
                    params.mix && $.each(params.mix, function(i, mix) {
                        if(mix) {
                            buffer.push(' ');
                            buildClasses(mix.block, mix.elem, mix.mods, buffer);
                            if(mix.js) {
                                (jsParams || (jsParams = {}))[buildClass(mix.block, mix.elem)] = mix.js === true? {} : mix.js;
                                addInitingCls || (addInitingCls = !mix.elem);
                            }
                        }
                    });
                }

                params.cls && buffer.push(isBEM? ' ' : '', params.cls);

                addInitingCls && buffer.push(' i-bem');
                buffer.push('"');
            }

            jsParams && buffer.push(
                ' onclick="return ',
                escapeAttr(JSON.stringify(jsParams)),
                '"');

            params.attrs && $.each(params.attrs, function(name, val) {
                typeof val != 'undefined' && val !== null && val !== false && buffer.push(
                    ' ',
                    name,
                    '="',
                    val.toString().replace(/"/g, "&quot;"),
                    '"');
            });

            if(SHORT_TAGS[tag]) {
                buffer.push('/>');
            } else {
                buffer.push('>');

                if(typeof params.content != 'undefined') {
                    _this._params = params.content;
                    _this._buildAll();
                }

                buffer.push('</', tag, '>');
            }

        },

        /**
         * Очищает буфер и возвращает его содержимое
         * @private
         * @returns {String} содержимое буфера
         */
        _flush : function() {

            var res = this._buffer.join('');
            delete this._buffer;
            return res;

        },

        _buildByDecl : function() {

            var _this = this,
                currBlock = _this._curBlock,
                params = _this._params;

            params._curBlock && (_this._curBlock = params._curBlock);
            params.block && (_this._curBlock = params);

            if(!params._wrapper) {
                if(params.block || params.elem) {
                    var decl = decls[_this._curBlock.block];
                    if(decl) {
                        var fns;
                        if(params.elem) {
                            fns = decl['_elem' + ELEM_DELIM + params.elem];
                            decl._elem && (fns = (fns? fns.concat(decl._elem) : decl._elem));
                        } else {
                            fns = decl._block;
                        }

                        if(fns) {
                            var i = 0, fn;
                            while(fn = fns[i++]) {
                                fn(_this);
                                if(params._isStopped) break;
                            }
                        }
                    }
                }

                if(params._wrapper) {
                    params._curBlock = _this._curBlock;
                    _this._params = params._wrapper;
                    return _this._buildAll();
                }
            }

            var tParamsChanges = _this._tParamsChanges;
                _this._tParamsChanges = null;

            _this._build();

            _this._curBlock = currBlock;

            if(tParamsChanges) {
                var tParams = _this._tParams;
                $.each(tParamsChanges, function(name, val) {
                    typeof val == 'undefined'?
                        delete tParams[name] :
                        tParams[name] = val;
                });
            }

        }

    })

};

})(BEM, jQuery);

/* ../../../../libs/islands-romochka/desktop.blocks/i-bem/html/i-bem__html.js end */
;
/* ../../../../libs/bem-bl/blocks-common/i-ecma/__json/i-ecma__json.js begin */
(function(undefined) {

if(window.JSON) return;

var _toString = Object.prototype.toString,
    escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    meta = {
        '\b' : '\\b',
        '\t' : '\\t',
        '\n' : '\\n',
        '\f' : '\\f',
        '\r' : '\\r',
        '"'  : '\\"',
        '\\' : '\\\\'
    },
    stringify;

window.JSON = {
    stringify : stringify = function(val) {
        if(val === null) {
            return 'null';
        }
        if(typeof val === 'undefined') {
            return undefined;
        }
        switch(_toString.call(val)) {
            case '[object String]':
                escapable.lastIndex = 0;
                return '"' +
                    (escapable.test(val)?
                        val.replace(escapable, function(a) {
                            var c = meta[a];
                            return typeof c === 'string'? c : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                        }) :
                        val) +
                    '"';
            case '[object Number]':
            case '[object Boolean]':
                return '' + val;
            case '[object Array]':
                var res = '[', i = 0, len = val.length, strVal;
                while(i < len) {
                    strVal = stringify(val[i]);
                    res += (i++? ',' : '') + (typeof strVal === 'undefined'? 'null' : strVal);
                }
                return res + ']';
            case '[object Object]':
                if(_toString.call(val.toJSON) === '[object Function]') {
                    return stringify(val.toJSON());
                }
                var res = '{', i = 0, strVal;
                for(var key in val) {
                    if(val.hasOwnProperty(key)) {
                        strVal = stringify(val[key]);
                        typeof strVal !== 'undefined' && (res += (i++? ',' : '') + '"' + key + '":' + strVal);
                    }
                }
                return res + '}';
            default:
                return undefined;
        }
    },
    parse : function(str) {
        /*jshint -W061 */
        return Function('return ' + str)();
    }
};
})();

/* ../../../../libs/bem-bl/blocks-common/i-ecma/__json/i-ecma__json.js end */
;
/* ../../../../libs/bem-bl/blocks-common/i-bem/__dom/i-bem__dom.js begin */
/** @requires BEM */
/** @requires BEM.INTERNAL */

(function(BEM, $, undefined) {

var win = $(window),
    doc = $(document),

/**
 * Storage for DOM elements by unique key
 * @private
 * @type Object
 */
    uniqIdToDomElems = {},

/**
 * Storage for blocks by unique key
 * @static
 * @private
 * @type Object
 */
    uniqIdToBlock = {},

/**
 * Storage for block parameters
 * @private
 * @type Object
 */
    domElemToParams = {},

/**
 * Storage for liveCtx event handlers
 * @private
 * @type Object
 */
    liveEventCtxStorage = {},

/**
 * Storage for liveClass event handlers
 * @private
 * @type Object
 */
    liveClassEventStorage = {},

    blocks = BEM.blocks,

    INTERNAL = BEM.INTERNAL,

    NAME_PATTERN = INTERNAL.NAME_PATTERN,

    MOD_DELIM = INTERNAL.MOD_DELIM,
    ELEM_DELIM = INTERNAL.ELEM_DELIM,

    buildModPostfix = INTERNAL.buildModPostfix,
    buildClass = INTERNAL.buildClass,

    slice = Array.prototype.slice,
    reverse = Array.prototype.reverse;

/**
 * Initializes blocks on a DOM element
 * @private
 * @param {jQuery} domElem DOM element
 * @param {String} uniqInitId ID of the "initialization wave"
 */
function init(domElem, uniqInitId) {

    var domNode = domElem[0];
    $.each(getParams(domNode), function(blockName, params) {
        processParams(params, domNode, blockName, uniqInitId);
        var block = uniqIdToBlock[params.uniqId];
        if(block) {
            if(block.domElem.index(domNode) < 0) {
                block.domElem = block.domElem.add(domElem);
                $.extend(block._params, params);
            }
        } else {
            initBlock(blockName, domElem, params);
        }
    });

}

/**
 * Initializes a specific block on a DOM element, or returns the existing block if it was already created
 * @private
 * @param {String} blockName Block name
 * @param {jQuery} domElem DOM element
 * @param {Object} [params] Initialization parameters
 * @param {Boolean} [forceLive] Force live initialization
 * @param {Function} [callback] Handler to call after complete initialization
 */
function initBlock(blockName, domElem, params, forceLive, callback) {

    if(typeof params == 'boolean') {
        callback = forceLive;
        forceLive = params;
        params = undefined;
    }

    var domNode = domElem[0];
    params = processParams(params || getParams(domNode)[blockName], domNode, blockName);

    var uniqId = params.uniqId;
    if(uniqIdToBlock[uniqId]) {
        return uniqIdToBlock[uniqId]._init();
    }

    uniqIdToDomElems[uniqId] = uniqIdToDomElems[uniqId]?
        uniqIdToDomElems[uniqId].add(domElem) :
        domElem;

    var parentDomNode = domNode.parentNode;
    if(!parentDomNode || parentDomNode.nodeType === 11) { // jquery doesn't unique disconnected node
        $.unique(uniqIdToDomElems[uniqId]);
    }

    var blockClass = blocks[blockName] || DOM.decl(blockName, {}, { live : true });
    if(!(blockClass._liveInitable = !!blockClass._processLive()) || forceLive || params.live === false) {
        forceLive && domElem.addClass('i-bem');

        var block = new blockClass(uniqIdToDomElems[uniqId], params, !!forceLive);
        delete uniqIdToDomElems[uniqId];
        callback && callback.apply(block, slice.call(arguments, 4));
        return block;
    }

}

/**
 * Processes and adds necessary block parameters
 * @private
 * @param {Object} params Initialization parameters
 * @param {HTMLElement} domNode DOM node
 * @param {String} blockName Block name
 * @param {String} [uniqInitId] ID of the "initialization wave"
 */
function processParams(params, domNode, blockName, uniqInitId) {

    (params || (params = {})).uniqId ||
        (params.uniqId = (params.id? blockName + '-id-' + params.id : $.identify()) + (uniqInitId || $.identify()));

    var domUniqId = $.identify(domNode),
        domParams = domElemToParams[domUniqId] || (domElemToParams[domUniqId] = {});

    domParams[blockName] || (domParams[blockName] = params);

    return params;

}

/**
 * Helper for searching for a DOM element using a selector inside the context, including the context itself
 * @private
 * @param {jQuery} ctx Context
 * @param {String} selector CSS selector
 * @param {Boolean} [excludeSelf=false] Exclude context from search
 * @returns {jQuery}
 */
function findDomElem(ctx, selector, excludeSelf) {

    var res = ctx.find(selector);
    return excludeSelf?
       res :
       res.add(ctx.filter(selector));

}

/**
 * Returns parameters of a block's DOM element
 * @private
 * @param {HTMLElement} domNode DOM node
 * @returns {Object}
 */
function getParams(domNode) {

    var uniqId = $.identify(domNode);
    return domElemToParams[uniqId] ||
           (domElemToParams[uniqId] = extractParams(domNode));

}

/**
 * Retrieves block parameters from a DOM element
 * @private
 * @param {HTMLElement} domNode DOM node
 * @returns {Object}
 */
function extractParams(domNode) {

    var fn, elem,
        attr = domNode.getAttribute('data-bem');

    if (attr) return JSON.parse(attr);

    fn = domNode.onclick || domNode.ondblclick;
    if(!fn && domNode.tagName.toLowerCase() == 'body') { // LEGO-2027 in FF onclick doesn't work on body
        elem = $(domNode);
        attr = elem.attr('onclick') || elem.attr('ondblclick');
        attr && (fn = Function(attr));
    }

    return fn? fn() : {};

}

/**
 * Cleans up all the BEM storages associated with a DOM node
 * @private
 * @param {HTMLElement} domNode DOM node
 */
function cleanupDomNode(domNode) {

    delete domElemToParams[$.identify(domNode)];

}

/**
 * Uncople DOM node from the block. If this is the last node, then destroys the block.
 * @private
 * @param {BEM.DOM} block block
 * @param {HTMLElement} domNode DOM node
 */
function removeDomNodeFromBlock(block, domNode) {

    block.domElem.length === 1?
        block.destruct(true) :
        block.domElem = block.domElem.not(domNode);

}

/**
 * Returns a DOM node for calculating the window size in IE
 * @returns {HTMLElement}
 */
function getClientNode() {

    return doc[0][$.support.boxModel? 'documentElement' : 'body'];

}

/**
 * Returns a block on a DOM element and initializes it if necessary
 * @param {String} blockName Block name
 * @param {Object} params Block parameters
 * @returns {BEM}
 */
$.fn.bem = function(blockName, params) {
    return initBlock(blockName, this, params, true);
};

/**
 * Provides methods for work with DOM tree
 *
 * @block i-bem
 * @mod default
 */
var DOM = BEM.DOM = BEM.decl('i-bem__dom', {
    /**
     * @class Base block for creating BEM blocks that have DOM representation
     * @constructs
     * @private
     * @param {jQuery} domElem DOM element that the block is created on
     * @param {Object} params Block parameters
     * @param {Boolean} [initImmediately=true]
     */
    __constructor : function(domElem, params, initImmediately) {

        var _this = this;

        /**
         * Block's DOM elements
         * @protected
         * @type jQuery
         */
        _this.domElem = domElem;

        /**
         * Cache for names of events on DOM elements
         * @private
         * @type Object
         */
        _this._eventNameCache = {};

        /**
         * Cache for elements
         * @private
         * @type Object
         */
        _this._elemCache = {};

        /**
         * Unique block ID
         * @private
         * @type String
         */
        uniqIdToBlock[_this._uniqId = params.uniqId || $.identify(_this)] = _this;

        /**
         * Flag for whether it's necessary to unbind from the document and window when destroying the block
         * @private
         * @type Boolean
         */
        _this._needSpecialUnbind = false;

        _this.__base(null, params, initImmediately);

    },

    /**
     * Finds blocks inside the current block or its elements (including context)
     * @protected
     * @param {String|jQuery} [elem] Block element
     * @param {String|Object} block Name or description (block,modName,modVal) of the block to find
     * @returns {BEM[]}
     */
    findBlocksInside : function(elem, block) {

        return this._findBlocks('find', elem, block);

    },

    /**
     * Finds the first block inside the current block or its elements (including context)
     * @protected
     * @param {String|jQuery} [elem] Block element
     * @param {String|Object} block Name or description (block,modName,modVal) of the block to find
     * @returns {BEM}
     */
    findBlockInside : function(elem, block) {

        return this._findBlocks('find', elem, block, true);

    },

    /**
     * Finds blocks outside the current block or its elements (including context)
     * @protected
     * @param {String|jQuery} [elem] Block element
     * @param {String|Object} block Name or description (block,modName,modVal) of the block to find
     * @returns {BEM[]}
     */
    findBlocksOutside : function(elem, block) {

        return this._findBlocks('parents', elem, block);

    },

    /**
     * Finds the first block outside the current block or its elements (including context)
     * @protected
     * @param {String|jQuery} [elem] Block element
     * @param {String|Object} block Name or description (block,modName,modVal) of the block to find
     * @returns {BEM}
     */
    findBlockOutside : function(elem, block) {

        return this._findBlocks('closest', elem, block)[0] || null;

    },

    /**
     * Finds blocks on DOM elements of the current block or its elements
     * @protected
     * @param {String|jQuery} [elem] Block element
     * @param {String|Object} block Name or description (block,modName,modVal) of the block to find
     * @returns {BEM[]}
     */
    findBlocksOn : function(elem, block) {

        return this._findBlocks('', elem, block);

    },

    /**
     * Finds the first block on DOM elements of the current block or its elements
     * @protected
     * @param {String|jQuery} [elem] Block element
     * @param {String|Object} block Name or description (block,modName,modVal) of the block to find
     * @returns {BEM}
     */
    findBlockOn : function(elem, block) {

        return this._findBlocks('', elem, block, true);

    },

    _findBlocks : function(select, elem, block, onlyFirst) {
        if(!this.domElem) return [];

        if(!block) {
            block = elem;
            elem = undefined;
        }

        var ctxElem = elem?
                (typeof elem == 'string'? this.findElem(elem) : elem) :
                this.domElem,
            isSimpleBlock = typeof block == 'string',
            blockName = isSimpleBlock? block : (block.block || block.blockName),
            selector = '.' +
                (isSimpleBlock?
                    buildClass(blockName) :
                    buildClass(blockName, block.modName, block.modVal)) +
                (onlyFirst? ':first' : ''),
            domElems = ctxElem.filter(selector);

        select && (domElems = domElems.add(ctxElem[select](selector)));

        if(onlyFirst) {
            return domElems[0]? initBlock(blockName, domElems.eq(0), true) : null;
        }

        var res = [],
            uniqIds = {};

        $.each(domElems, function(i, domElem) {
            var block = initBlock(blockName, $(domElem), true);
            if(!uniqIds[block._uniqId]) {
                uniqIds[block._uniqId] = true;
                res.push(block);
            }
        });

        return res;

    },

    /**
     * Adds an event handler for any DOM element
     * @protected
     * @param {jQuery} domElem DOM element where the event will be listened for
     * @param {String|Object} event Event name or event object
     * @param {Function} fn Handler function, which will be executed in the block's context
     * @returns {BEM}
     */
    bindToDomElem : function(domElem, event, fn) {

        var _this = this;

        fn?
            domElem.bind(
                _this._buildEventName(event),
                function(e) {
                    (e.data || (e.data = {})).domElem = $(this);
                    return fn.apply(_this, arguments);
                }
            ) :
            $.each(event, function(event, fn) {
                _this.bindToDomElem(domElem, event, fn);
            });

        return _this;

    },

    /**
     * Adds an event handler to the document
     * @protected
     * @param {String} event Event name
     * @param {Function} fn Handler function, which will be executed in the block's context
     * @returns {BEM}
     */
    bindToDoc : function(event, fn) {

        this._needSpecialUnbind = true;
        return this.bindToDomElem(doc, event, fn);

    },

    /**
     * Adds an event handler to the window
     * @protected
     * @param {String} event Event name
     * @param {Function} fn Handler function, which will be executed in the block's context
     * @returns {BEM}
     */
    bindToWin : function(event, fn) {

        var _fn = fn,
            currentHeight,
            currentWidth;

        if (event === 'resize') {

            fn = function() {

                var height = win.height(),
                    width = win.width();

                if (currentHeight !== height || currentWidth !== width) {

                    currentHeight = height;
                    currentWidth = width;

                    _fn.apply(this, arguments);

                }


            }

        }

        this._needSpecialUnbind = true;
        return this.bindToDomElem(win, event, fn);

    },

    /**
     * Adds an event handler to the block's main DOM elements or its nested elements
     * @protected
     * @param {jQuery|String} [elem] Element
     * @param {String} event Event name
     * @param {Function} fn Handler function, which will be executed in the block's context
     * @returns {BEM}
     */
    bindTo : function(elem, event, fn) {

        if(!event || $.isFunction(event)) { // if there is no element
            fn = event;
            event = elem;
            elem = this.domElem;
        } else if(typeof elem == 'string') {
            elem = this.elem(elem);
        }

        return this.bindToDomElem(elem, event, fn);

    },

    /**
     * Removes event handlers from any DOM element
     * @protected
     * @param {jQuery} domElem DOM element where the event was being listened for
     * @param {String} event Event name
     * @returns {BEM}
     */
    unbindFromDomElem : function(domElem, event) {

        domElem.unbind(this._buildEventName(event));
        return this;

    },

    /**
     * Removes event handler from document
     * @protected
     * @param {String} event Event name
     * @returns {BEM}
     */
    unbindFromDoc : function(event) {

        return this.unbindFromDomElem(doc, event);

    },

    /**
     * Removes event handler from window
     * @protected
     * @param {String} event Event name
     * @returns {BEM}
     */
    unbindFromWin : function(event) {

        return this.unbindFromDomElem(win, event);

    },

    /**
     * Removes event handlers from the block's main DOM elements or its nested elements
     * @protected
     * @param {jQuery|String} [elem] Nested element
     * @param {String} event Event name
     * @returns {BEM}
     */
    unbindFrom : function(elem, event) {

        if(!event) {
            event = elem;
            elem = this.domElem;
        } else if(typeof elem == 'string') {
            elem = this.elem(elem);
        }

        return this.unbindFromDomElem(elem, event);

    },

    /**
     * Builds a full name for an event
     * @private
     * @param {String} event Event name
     * @returns {String}
     */
    _buildEventName : function(event) {

        var _this = this;
        return event.indexOf(' ') > 1?
            event.split(' ').map(function(e) {
                return _this._buildOneEventName(e);
            }).join(' ') :
            _this._buildOneEventName(event);

    },

    /**
     * Builds a full name for a single event
     * @private
     * @param {String} event Event name
     * @returns {String}
     */
    _buildOneEventName : function(event) {

        var _this = this,
            eventNameCache = _this._eventNameCache;

        if(event in eventNameCache) return eventNameCache[event];

        var uniq = '.' + _this._uniqId;

        if(event.indexOf('.') < 0) return eventNameCache[event] = event + uniq;

        var lego = '.bem_' + _this.__self._name;

        return eventNameCache[event] = event.split('.').map(function(e, i) {
            return i == 0? e + lego : lego + '_' + e;
        }).join('') + uniq;

    },

    /**
     * Triggers block event handlers and live event handlers
     * @protected
     * @param {String} e Event name
     * @param {Object} [data] Additional information
     * @returns {BEM}
     */
    trigger : function(e, data) {

        this
            .__base(e = this.buildEvent(e), data)
            .domElem && this._ctxTrigger(e, data);

        return this;

    },

    _ctxTrigger : function(e, data) {

        var _this = this,
            storage = liveEventCtxStorage[_this.__self._buildCtxEventName(e.type)],
            ctxIds = {};

        storage && _this.domElem.each(function() {
            var ctx = this,
                counter = storage.counter;
            while(ctx && counter) {
                var ctxId = $.identify(ctx, true);
                if(ctxId) {
                    if(ctxIds[ctxId]) break;
                    var storageCtx = storage.ctxs[ctxId];
                    if(storageCtx) {
                        $.each(storageCtx, function(uniqId, handler) {
                            handler.fn.call(
                                handler.ctx || _this,
                                e,
                                data);
                        });
                        counter--;
                    }
                    ctxIds[ctxId] = true;
                }
                ctx = ctx.parentNode;
            }
        });

    },

    /**
     * Sets a modifier for a block/nested element
     * @protected
     * @param {jQuery} [elem] Nested element
     * @param {String} modName Modifier name
     * @param {String} modVal Modifier value
     * @returns {BEM}
     */
    setMod : function(elem, modName, modVal) {

        if(elem && typeof modVal != 'undefined' && elem.length > 1) {
            var _this = this;
            elem.each(function() {
                var item = $(this);
                item.__bemElemName = elem.__bemElemName;
                _this.setMod(item, modName, modVal);
            });
            return _this;
        }
        return this.__base(elem, modName, modVal);

    },

    /**
     * Retrieves modifier value from the DOM node's CSS class
     * @private
     * @param {String} modName Modifier name
     * @param {jQuery} [elem] Nested element
     * @param {String} [elemName] Name of the nested element
     * @returns {String} Modifier value
     */
    _extractModVal : function(modName, elem, elemName) {

        var domNode = (elem || this.domElem)[0],
            matches;

        domNode &&
            (matches = domNode.className
                .match(this.__self._buildModValRE(modName, elemName || elem)));

        return matches? matches[2] : '';

    },

    /**
     * Retrieves a name/value list of modifiers
     * @private
     * @param {Array} [modNames] Names of modifiers
     * @param {Object} [elem] Element
     * @returns {Object} Hash of modifier values by names
     */
    _extractMods : function(modNames, elem) {

        var res = {},
            extractAll = !modNames.length,
            countMatched = 0;

        ((elem || this.domElem)[0].className
            .match(this.__self._buildModValRE(
                '(' + (extractAll? NAME_PATTERN : modNames.join('|')) + ')',
                elem,
                'g')) || []).forEach(function(className) {
                    var iModVal = (className = className.trim()).lastIndexOf(MOD_DELIM),
                        iModName = className.substr(0, iModVal - 1).lastIndexOf(MOD_DELIM);
                    res[className.substr(iModName + 1, iModVal - iModName - 1)] = className.substr(iModVal + 1);
                    ++countMatched;
                });

        // empty modifier values are not reflected in classes; they must be filled with empty values
        countMatched < modNames.length && modNames.forEach(function(modName) {
            modName in res || (res[modName] = '');
        });

        return res;

    },

    /**
     * Sets a modifier's CSS class for a block's DOM element or nested element
     * @private
     * @param {String} modName Modifier name
     * @param {String} modVal Modifier value
     * @param {String} oldModVal Old modifier value
     * @param {jQuery} [elem] Element
     * @param {String} [elemName] Element name
     */
    _afterSetMod : function(modName, modVal, oldModVal, elem, elemName) {

        var _self = this.__self,
            classPrefix = _self._buildModClassPrefix(modName, elemName),
            classRE = _self._buildModValRE(modName, elemName),
            needDel = modVal === '';

        (elem || this.domElem).each(function() {
            var className = this.className;
            className.indexOf(classPrefix) > -1?
                this.className = className.replace(
                    classRE,
                    (needDel? '' : '$1' + classPrefix + modVal)) :
                needDel || $(this).addClass(classPrefix + modVal);
        });

        elemName && this
            .dropElemCache(elemName, modName, oldModVal)
            .dropElemCache(elemName, modName, modVal);

    },

    /**
     * Finds elements nested in a block
     * @protected
     * @param {String|jQuery} [ctx=this.domElem] Element where search is being performed
     * @param {String} names Nested element name (or names separated by spaces)
     * @param {String} [modName] Modifier name
     * @param {String} [modVal] Modifier value
     * @returns {jQuery} DOM elements
     */
    findElem : function(ctx, names, modName, modVal) {

        if(arguments.length % 2) { // if the number of arguments is one or three
            modVal = modName;
            modName = names;
            names = ctx;
            ctx = this.domElem;
        } else if(typeof ctx == 'string') {
            ctx = this.findElem(ctx);
        }

        var _self = this.__self,
            selector = '.' +
                names.split(' ').map(function(name) {
                    return buildClass(_self._name, name, modName, modVal);
                }).join(',.');
        return findDomElem(ctx, selector);

    },

    /**
     * Finds elements nested in a block
     * @protected
     * @param {String} name Nested element name
     * @param {String} [modName] Modifier name
     * @param {String} [modVal] Modifier value
     * @returns {jQuery} DOM elements
     */
    _elem : function(name, modName, modVal) {

        var key = name + buildModPostfix(modName, modVal),
            res;

        if(!(res = this._elemCache[key])) {
            res = this._elemCache[key] = this.findElem(name, modName, modVal);
            res.__bemElemName = name;
        }

        return res;

    },

    /**
     * Lazy search for elements nested in a block (caches results)
     * @protected
     * @param {String} names Nested element name (or names separated by spaces)
     * @param {String} [modName] Modifier name
     * @param {String} [modVal] Modifier value
     * @returns {jQuery} DOM elements
     */
    elem : function(names, modName, modVal) {

        if(modName && typeof modName != 'string') {
            modName.__bemElemName = names;
            return modName;
        }

        if(names.indexOf(' ') < 0) {
            return this._elem(names, modName, modVal);
        }

        var res = $([]),
            _this = this;
        names.split(' ').forEach(function(name) {
            res = res.add(_this._elem(name, modName, modVal));
        });
        return res;

    },

    /**
     * Clearing the cache for elements
     * @protected
     * @param {String} [names] Nested element name (or names separated by spaces)
     * @param {String} [modName] Modifier name
     * @param {String} [modVal] Modifier value
     * @returns {BEM}
     */
    dropElemCache : function(names, modName, modVal) {

        if(names) {
            var _this = this,
                modPostfix = buildModPostfix(modName, modVal);
            names.indexOf(' ') < 0?
                delete _this._elemCache[names + modPostfix] :
                names.split(' ').forEach(function(name) {
                    delete _this._elemCache[name + modPostfix];
                });
        } else {
            this._elemCache = {};
        }

        return this;

    },

    /**
     * Retrieves parameters of a block element
     * @param {String|jQuery} elem Element
     * @returns {Object} Parameters
     */
    elemParams : function(elem) {

        var elemName;
        if(typeof elem ==  'string') {
            elemName = elem;
            elem = this.elem(elem);
        } else {
            elemName = this.__self._extractElemNameFrom(elem);
        }

        return extractParams(elem[0])[buildClass(this.__self.getName(), elemName)] || {};

    },

    /**
     * Elemify given element
     * @param {jQuery} elem Element
     * @param {String} elemName Name
     * @returns {jQuery}
     */
    elemify : function(elem, elemName) {
        (elem = $(elem)).__bemElemName = elemName;
        return elem;
    },

    /**
     * Checks whether a DOM element is in a block
     * @protected
     * @param {jQuery} domElem DOM element
     * @returns {Boolean}
     */
    containsDomElem : function(domElem) {

        var res = false;

        this.domElem.each(function() {
            return !(res = domElem.parents().andSelf().index(this) > -1);
        });

        return res;

    },

    /**
     * Builds a CSS selector corresponding to a block/element and modifier
     * @param {String} [elem] Element name
     * @param {String} [modName] Modifier name
     * @param {String} [modVal] Modifier value
     * @returns {String}
     */
    buildSelector : function(elem, modName, modVal) {

        return this.__self.buildSelector(elem, modName, modVal);

    },

    /**
     * Deletes a block
     * @param {Boolean} [keepDOM=false] Whether to keep the block's DOM nodes in the document
     */
    destruct : function(keepDOM) {

        var _this = this,
            _self = _this.__self;

        if(_this._isDestructing) return;

        _this._isDestructing = true;

        _this._needSpecialUnbind && _self.doc.add(_self.win).unbind('.' + _this._uniqId);

        _this.dropElemCache().domElem.each(function(i, domNode) {
            var params = getParams(domNode);
            $.each(params, function(blockName, blockParams) {
                var block = uniqIdToBlock[blockParams.uniqId];
                block?
                    block._isDestructing || removeDomNodeFromBlock(block, domNode) :
                    delete uniqIdToDomElems[blockParams.uniqId];
            });
            cleanupDomNode(domNode);
        });

        keepDOM || _this.domElem.remove();

        delete uniqIdToBlock[_this.un()._uniqId];
        delete _this.domElem;
        delete _this._elemCache;

        _this.__base();

    }

}, {

    /**
     * Scope
     * Will be set on onDomReady to tag `body`
     * @protected
     * @type jQuery
     */
    scope : null,

    /**
     * Document shortcut
     * @protected
     * @type jQuery
     */
    doc : doc,

    /**
     * Window shortcut
     * @protected
     * @type jQuery
     */
    win : win,

    /**
     * Processes a block's live properties
     * @private
     * @param {Boolean} [heedLive=false] Whether to take into account that the block already processed its live properties
     * @returns {Boolean} Whether the block is a live block
     */
    _processLive : function(heedLive) {

        var _this = this,
            res = _this._liveInitable;

        if('live' in _this) {
            var noLive = typeof res == 'undefined';

            if(noLive ^ heedLive) {
                res = _this.live() !== false;

                var blockName = _this.getName(),
                    origLive = _this.live;

                _this.live = function() {
                    return this.getName() === blockName?
                        res :
                        origLive.apply(this, arguments);
                };
            }
        }

        return res;

    },

    /**
     * Initializes blocks on a fragment of the DOM tree
     * @static
     * @protected
     * @param {jQuery} [ctx=document] Root DOM node
     * @returns {jQuery} ctx Initialization context
     */
    init : function(ctx, callback, callbackCtx) {

        if(!ctx || $.isFunction(ctx)) {
            callbackCtx = callback;
            callback = ctx;
            ctx = doc;
        }

        var uniqInitId = $.identify();
        findDomElem(ctx, '.i-bem').each(function() {
            init($(this), uniqInitId);
        });

        callback && this.afterCurrentEvent(
            function() {
                callback.call(callbackCtx || this, ctx);
            });

        // makes initialization completely synchronous
        this._runAfterCurrentEventFns();

        return ctx;

    },

    /**
     * Destroys blocks on a fragment of the DOM tree
     * @static
     * @protected
     * @param {Boolean} [keepDOM=false] Whether to keep DOM nodes in the document
     * @param {jQuery} ctx Root DOM node
     * @param {Boolean} [excludeSelf=false] Exclude the context
     */
    destruct : function(keepDOM, ctx, excludeSelf) {

        if(typeof keepDOM != 'boolean') {
            excludeSelf = ctx;
            ctx = keepDOM;
            keepDOM = undefined;
        }

        reverse.call(findDomElem(ctx, '.i-bem', excludeSelf)).each(function(i, domNode) {
            var params = getParams(this);
            $.each(params, function(blockName, blockParams) {
                if(blockParams.uniqId) {
                    var block = uniqIdToBlock[blockParams.uniqId];
                    block?
                        removeDomNodeFromBlock(block, domNode) :
                        delete uniqIdToDomElems[blockParams.uniqId];
                }
            });
            cleanupDomNode(this);
        });
        keepDOM || (excludeSelf? ctx.empty() : ctx.remove());

    },

    /**
     * Replaces a fragment of the DOM tree inside the context, destroying old blocks and intializing new ones
     * @static
     * @protected
     * @param {jQuery} ctx Root DOM node
     * @param {jQuery|String} content New content
     * @param {Function} [callback] Handler to be called after initialization
     * @param {Object} [callbackCtx] Handler's context
     */
    update : function(ctx, content, callback, callbackCtx) {

        this.destruct(ctx, true);
        this.init(ctx.html(content), callback, callbackCtx);

    },

    /**
     * Changes a fragment of the DOM tree including the context and initializes blocks.
     * @param {jQuery} ctx Root DOM node
     * @param {jQuery|String} content Content to be added
     */
    replace : function(ctx, content) {

        this.destruct(true, ctx);
        this.init($(content).replaceAll(ctx));

    },

    /**
     * Adds a fragment of the DOM tree at the end of the context and initializes blocks
     * @param {jQuery} ctx Root DOM node
     * @param {jQuery|String} content Content to be added
     */
    append : function(ctx, content) {

        this.init($(content).appendTo(ctx));

    },

    /**
     * Adds a fragment of the DOM tree at the beginning of the context and initializes blocks
     * @param {jQuery} ctx Root DOM node
     * @param {jQuery|String} content Content to be added
     */
    prepend : function(ctx, content) {

        this.init($(content).prependTo(ctx));

    },

    /**
     * Adds a fragment of the DOM tree before the context and initializes blocks
     * @param {jQuery} ctx Contextual DOM node
     * @param {jQuery|String} content Content to be added
     */
    before : function(ctx, content) {

        this.init($(content).insertBefore(ctx));

    },

    /**
     * Adds a fragment of the DOM tree after the context and initializes blocks
     * @param {jQuery} ctx Contextual DOM node
     * @param {jQuery|String} content Content to be added
     */
    after : function(ctx, content) {

        this.init($(content).insertAfter(ctx));

    },

    /**
     * Builds a full name for a live event
     * @static
     * @private
     * @param {String} e Event name
     * @returns {String}
     */
    _buildCtxEventName : function(e) {

        return this._name + ':' + e;

    },

    _liveClassBind : function(className, e, callback, invokeOnInit) {

        var _this = this;
        if(e.indexOf(' ') > -1) {
            e.split(' ').forEach(function(e) {
                _this._liveClassBind(className, e, callback, invokeOnInit);
            });
        }
        else {
            var storage = liveClassEventStorage[e],
                uniqId = $.identify(callback);

            if(!storage) {
                storage = liveClassEventStorage[e] = {};
                doc.bind(e, _this.changeThis(_this._liveClassTrigger, _this));
            }

            storage = storage[className] || (storage[className] = { uniqIds : {}, fns : [] });

            if(!(uniqId in storage.uniqIds)) {
                storage.fns.push({ uniqId : uniqId, fn : _this._buildLiveEventFn(callback, invokeOnInit) });
                storage.uniqIds[uniqId] = storage.fns.length - 1;
            }
        }

        return this;

    },

    _liveClassUnbind : function(className, e, callback) {

        var storage = liveClassEventStorage[e];
        if(storage) {
            if(callback) {
                if(storage = storage[className]) {
                    var uniqId = $.identify(callback);
                    if(uniqId in storage.uniqIds) {
                        var i = storage.uniqIds[uniqId],
                            len = storage.fns.length - 1;
                        storage.fns.splice(i, 1);
                        while(i < len) storage.uniqIds[storage.fns[i++].uniqId] = i - 1;
                        delete storage.uniqIds[uniqId];
                    }
                }
            } else {
                delete storage[className];
            }
        }

        return this;

    },

    _liveClassTrigger : function(e) {

        var storage = liveClassEventStorage[e.type];
        if(storage) {
            var node = e.target, classNames = [];
            for(var className in storage) storage.hasOwnProperty(className) && classNames.push(className);
            do {
                var nodeClassName = ' ' + node.className + ' ', i = 0;
                while(className = classNames[i++]) {
                    if(nodeClassName.indexOf(' ' + className + ' ') > -1) {
                        var j = 0, fns = storage[className].fns, fn, stopPropagationAndPreventDefault = false;
                        while(fn = fns[j++])
                            if(fn.fn.call($(node), e) === false) stopPropagationAndPreventDefault = true;

                        stopPropagationAndPreventDefault && e.preventDefault();
                        if(stopPropagationAndPreventDefault || e.isPropagationStopped()) return;

                        classNames.splice(--i, 1);
                    }
                }
            } while(classNames.length && (node = node.parentNode));
        }

    },

    _buildLiveEventFn : function(callback, invokeOnInit) {

        var _this = this;
        return function(e) {
            var args = [
                    _this._name,
                    ((e.data || (e.data = {})).domElem = $(this)).closest(_this.buildSelector()),
                    true ],
                block = initBlock.apply(null, invokeOnInit? args.concat([callback, e]) : args);

            if(block && !invokeOnInit && callback)
                return callback.apply(block, arguments);
        };

    },

    /**
     * Helper for live initialization for an event on DOM elements of a block or its elements
     * @static
     * @protected
     * @param {String} [elemName] Element name or names (separated by spaces)
     * @param {String} event Event name
     * @param {Function} [callback] Handler to call after successful initialization
     */
    liveInitOnEvent : function(elemName, event, callback) {

        return this.liveBindTo(elemName, event, callback, true);

    },

    /**
     * Helper for subscribing to live events on DOM elements of a block or its elements
     * @static
     * @protected
     * @param {String|Object} [to] Description (object with modName, modVal, elem) or name of the element or elements (space-separated)
     * @param {String} event Event name
     * @param {Function} [callback] Handler
     */
    liveBindTo : function(to, event, callback, invokeOnInit) {

        if(!event || $.isFunction(event)) {
            callback = event;
            event = to;
            to = undefined;
        }

        if(!to || typeof to == 'string') {
            to = { elem : to };
        }

        to.elemName && (to.elem = to.elemName);

        var _this = this;

        if(to.elem && to.elem.indexOf(' ') > 0) {
            to.elem.split(' ').forEach(function(elem) {
                _this._liveClassBind(
                    buildClass(_this._name, elem, to.modName, to.modVal),
                    event,
                    callback,
                    invokeOnInit);
            });
            return _this;
        }

        return _this._liveClassBind(
            buildClass(_this._name, to.elem, to.modName, to.modVal),
            event,
            callback,
            invokeOnInit);

    },

    /**
     * Helper for unsubscribing from live events on DOM elements of a block or its elements
     * @static
     * @protected
     * @param {String} [elem] Name of the element or elements (space-separated)
     * @param {String} event Event name
     * @param {Function} [callback] Handler
     */
    liveUnbindFrom : function(elem, event, callback) {

        if (!event || $.isFunction(event)) {
            callback = event;
            event = elem;
            elem = undefined;
        }

        var _this = this;

        if(elem && elem.indexOf(' ') > 1) {
            elem.split(' ').forEach(function(elem) {
                _this._liveClassUnbind(
                    buildClass(_this._name, elem),
                    event,
                    callback);
            });
            return _this;
        }

        return _this._liveClassUnbind(
            buildClass(_this._name, elem),
            event,
            callback);

    },

    /**
     * Helper for live initialization when a different block is initialized
     * @static
     * @private
     * @param {String} event Event name
     * @param {String} blockName Name of the block that should trigger a reaction when initialized
     * @param {Function} callback Handler to be called after successful initialization in the new block's context
     * @param {String} findFnName Name of the method for searching
     */
    _liveInitOnBlockEvent : function(event, blockName, callback, findFnName) {

        var name = this._name;
        blocks[blockName].on(event, function(e) {
            if(!e.block.domElem) return; // if block was destructed at that moment

            var args = arguments,
                blocks = e.block[findFnName](name);

            callback && blocks.forEach(function(block) {
                callback.apply(block, args);
            });
        });
        return this;

    },

    /**
     * Helper for live initialization for a different block's event on the current block's DOM element
     * @static
     * @protected
     * @param {String} event Event name
     * @param {String} blockName Name of the block that should trigger a reaction when initialized
     * @param {Function} callback Handler to be called after successful initialization in the new block's context
     */
    liveInitOnBlockEvent : function(event, blockName, callback) {

        return this._liveInitOnBlockEvent(event, blockName, callback, 'findBlocksOn');

    },

    /**
     * Helper for live initialization for a different block's event inside the current block
     * @static
     * @protected
     * @param {String} event Event name
     * @param {String} blockName Name of the block that should trigger a reaction when initialized
     * @param {Function} [callback] Handler to be called after successful initialization in the new block's context
     */
    liveInitOnBlockInsideEvent : function(event, blockName, callback) {

        return this._liveInitOnBlockEvent(event, blockName, callback, 'findBlocksOutside');

    },

    /**
     * Helper for live initialization when a different block is initialized on a DOM element of the current block
     * @deprecated - use liveInitOnBlockEvent
     * @static
     * @protected
     * @param {String} blockName Name of the block that should trigger a reaction when initialized
     * @param {Function} callback Handler to be called after successful initialization in the new block's context
     */
    liveInitOnBlockInit : function(blockName, callback) {

        return this.liveInitOnBlockEvent('init', blockName, callback);

    },

    /**
     * Helper for live initialization when a different block is initialized inside the current block
     * @deprecated - use liveInitOnBlockInsideEvent
     * @static
     * @protected
     * @param {String} blockName Name of the block that should trigger a reaction when initialized
     * @param {Function} [callback] Handler to be called after successful initialization in the new block's context
     */
    liveInitOnBlockInsideInit : function(blockName, callback) {

        return this.liveInitOnBlockInsideEvent('init', blockName, callback);

    },

    /**
     * Adds a live event handler to a block, based on a specified element where the event will be listened for
     * @static
     * @protected
     * @param {jQuery} [ctx] The element in which the event will be listened for
     * @param {String} e Event name
     * @param {Object} [data] Additional information that the handler gets as e.data
     * @param {Function} fn Handler
     * @param {Object} [fnCtx] Handler's context
     */
    on : function(ctx, e, data, fn, fnCtx) {

        return ctx.jquery?
            this._liveCtxBind(ctx, e, data, fn, fnCtx) :
            this.__base(ctx, e, data, fn);

    },

    /**
     * Removes the live event handler from a block, based on a specified element where the event was being listened for
     * @static
     * @protected
     * @param {jQuery} [ctx] The element in which the event was being listened for
     * @param {String} e Event name
     * @param {Function} [fn] Handler
     * @param {Object} [fnCtx] Handler context
     */
    un : function(ctx, e, fn, fnCtx) {

        return ctx.jquery?
            this._liveCtxUnbind(ctx, e, fn, fnCtx) :
            this.__base(ctx, e, fn);

    },

    /**
     * Adds a live event handler to a block, based on a specified element where the event will be listened for
     * @deprecated Use on
     * @static
     * @protected
     * @param {jQuery} ctx The element in which the event will be listened for
     * @param {String} e Event name
     * @param {Object} [data] Additional information that the handler gets as e.data
     * @param {Function} fn Handler
     * @param {Object} [fnCtx] Handler context
     */
    liveCtxBind : function(ctx, e, data, fn, fnCtx) {

        return this._liveCtxBind(ctx, e, data, fn, fnCtx);

    },

    /**
     * Adds a live event handler to a block, based on a specified element where the event will be listened for
     * @static
     * @private
     * @param {jQuery} ctx The element in which the event will be listened for
     * @param {String} e  Event name
     * @param {Object} [data] Additional information that the handler gets as e.data
     * @param {Function} fn Handler
     * @param {Object} [fnCtx] Handler context
     */
    _liveCtxBind : function(ctx, e, data, fn, fnCtx) {

        var _this = this;

        if(typeof e == 'string') {
            if($.isFunction(data)) {
                fnCtx = fn;
                fn = data;
                data = undefined;
            }

            if(e.indexOf(' ') > -1) {
                e.split(' ').forEach(function(e) {
                    _this._liveCtxBind(ctx, e, data, fn, fnCtx);
                });
            } else {
                var ctxE = _this._buildCtxEventName(e),
                    storage = liveEventCtxStorage[ctxE] ||
                        (liveEventCtxStorage[ctxE] = { counter : 0, ctxs : {} });

                ctx.each(function() {
                    var ctxId = $.identify(this),
                        ctxStorage = storage.ctxs[ctxId];
                    if(!ctxStorage) {
                        ctxStorage = storage.ctxs[ctxId] = {};
                        ++storage.counter;
                    }
                    ctxStorage[$.identify(fn) + (fnCtx? $.identify(fnCtx) : '')] = {
                        fn   : fn,
                        data : data,
                        ctx  : fnCtx
                    };
                });
            }
        } else {
            $.each(e, function(e, fn) {
                _this._liveCtxBind(ctx, e, fn, data);
            });
        }

        return _this;

    },

    /**
     * Removes a live event handler from a block, based on a specified element where the event was being listened for
     * @deprecated Use on
     * @static
     * @protected
     * @param {jQuery} ctx The element in which the event was being listened for
     * @param {String} e Event name
     * @param {Function} [fn] Handler
     * @param {Object} [fnCtx] Handler context
     */
    liveCtxUnbind : function(ctx, e, fn, fnCtx) {

        return this._liveCtxUnbind(ctx, e, fn, fnCtx);

    },

    /**
     * Removes a live event handler from a block, based on a specified element where the event was being listened for
     * @static
     * @private
     * @param {jQuery} ctx The element in which the event was being listened for
     * @param {String} e Event name
     * @param {Function} [fn] Handler
     * @param {Object} [fnCtx] Handler context
     */
    _liveCtxUnbind : function(ctx, e, fn, fnCtx) {

        var _this = this,
            storage = liveEventCtxStorage[e =_this._buildCtxEventName(e)];

        if(storage) {
            ctx.each(function() {
                var ctxId = $.identify(this, true),
                    ctxStorage;
                if(ctxId && (ctxStorage = storage.ctxs[ctxId])) {
                    fn && delete ctxStorage[$.identify(fn) + (fnCtx? $.identify(fnCtx) : '')];
                    if(!fn || $.isEmptyObject(ctxStorage)) {
                        storage.counter--;
                        delete storage.ctxs[ctxId];
                    }
                }
            });
            storage.counter || delete liveEventCtxStorage[e];
        }

        return _this;

    },

    /**
     * Retrieves the name of an element nested in a block
     * @static
     * @private
     * @param {jQuery} elem Nested element
     * @returns {String|undefined}
     */
    _extractElemNameFrom : function(elem) {

        if(elem.__bemElemName) return elem.__bemElemName;

        var matches = elem[0].className.match(this._buildElemNameRE());
        return matches? matches[1] : undefined;

    },

    /**
     * Retrieves block parameters from a DOM element
     * @static
     * @param {HTMLElement} domNode DOM node
     * @returns {Object}
     */
    extractParams : extractParams,

    /**
     * Builds a prefix for the CSS class of a DOM element or nested element of the block, based on modifier name
     * @static
     * @private
     * @param {String} modName Modifier name
     * @param {jQuery|String} [elem] Element
     * @returns {String}
     */
    _buildModClassPrefix : function(modName, elem) {

        return buildClass(this._name) +
               (elem?
                   ELEM_DELIM + (typeof elem === 'string'? elem : this._extractElemNameFrom(elem)) :
                   '') +
               MOD_DELIM + modName + MOD_DELIM;

    },

    /**
     * Builds a regular expression for extracting modifier values from a DOM element or nested element of a block
     * @static
     * @private
     * @param {String} modName Modifier name
     * @param {jQuery|String} [elem] Element
     * @param {String} [quantifiers] Regular expression quantifiers
     * @returns {RegExp}
     */
    _buildModValRE : function(modName, elem, quantifiers) {

        return new RegExp('(\\s|^)' + this._buildModClassPrefix(modName, elem) + '(' + NAME_PATTERN + ')(?=\\s|$)', quantifiers);

    },

    /**
     * Builds a regular expression for extracting names of elements nested in a block
     * @static
     * @private
     * @returns {RegExp}
     */
    _buildElemNameRE : function() {

        return new RegExp(this._name + ELEM_DELIM + '(' + NAME_PATTERN + ')(?:\\s|$)');

    },

    /**
     * Builds a CSS selector corresponding to the block/element and modifier
     * @param {String} [elem] Element name
     * @param {String} [modName] Modifier name
     * @param {String} [modVal] Modifier value
     * @returns {String}
     */
    buildSelector : function(elem, modName, modVal) {

        return '.' + buildClass(this._name, elem, modName, modVal);

    },

    /**
     * Returns a block instance by unique ID
     * @deprecated
     * @param {String} [uniqId]
     * @returns {BEM.DOM}
     */
    getBlockByUniqId : function(uniqId) {

        return uniqIdToBlock[uniqId];

    },

    /**
     * Returns the size of the current window
     * @returns {Object} Object with width and height fields
     */
    getWindowSize : function() {

        return {
            width  : win.width(),
            height : win.height()
        };

    }

});

/**
 * Set default scope after DOM ready
 */
$(function() {
    BEM.DOM.scope = $('body');
});

})(BEM, jQuery);

/* ../../../../libs/bem-bl/blocks-common/i-bem/__dom/i-bem__dom.js end */
;
/* ../../../../libs/bem-bl/blocks-common/i-ecma/__string/i-ecma__string.js begin */
(function() {

String.prototype.trim || (String.prototype.trim = function () {

    var str = this.replace(/^\s\s*/, ''),
        ws = /\s/,
        i = str.length;

    while(ws.test(str.charAt(--i)));

    return str.slice(0, i + 1);

});

})();
/* ../../../../libs/bem-bl/blocks-common/i-ecma/__string/i-ecma__string.js end */
;
/* ../../../../libs/islands-romochka/common.blocks/i-common/check-session/i-common__check-session.js begin */
(function(Lego){
if (!Lego) Lego = window.Lego = {};
/**
 * Проверяет жива ли сессия пользователя (наличие куки yandex_login).
 *
 * @return  true, если сессия пользователя живая.
 */
Lego.isSessionValid = function() {
    return !!Lego.getCookie('yandex_login');
}
})(window.Lego);

/* ../../../../libs/islands-romochka/common.blocks/i-common/check-session/i-common__check-session.js end */
;
/* ../../../../libs/islands-romochka/common.blocks/i-global/i-global.js begin */

BEM.DOM.decl('i-global', {

    onSetMod : {

        'js' : function() {

            // удаляем системные свойства
            this.del(this.__self._params = $.extend({}, this.params), 'uniqId', 'name');

            var params = this.__self._params;

            params['passport-msg'] || (params['passport-msg'] = params.id);

            if(params['show-counters'] === undefined) {
                params['show-counters'] = Math.round(Math.random() * 100) <= params['show-counters-percent'];
            }
            params.locale = params.lang;

            $(function(){
                params.oframebust && Lego.oframebust(params.oframebust);
            });

        }

    },

    getDefaultParams : function() {

        return {
            id : '',
            login : Lego.isSessionValid() ? $.cookie('yandex_login') || '' : '',
            yandexuid : $.cookie('yandexuid'),
            lang : 'ru',
            tld : 'ru',
            retpath : encodeURI($.decodeURI(location.href)), // LEGO-8443 + LEGO-9226
            'passport-host' : 'https://passport.yandex.ru',
            'pass-host' : '//pass.yandex.ru',
            'social-host' : '//social.yandex.ru',
            'lego-path' : '/lego',
            'show-counters-percent' : 100
        };

    }

}, {

    param  : function(name) {

        return (this._params || {})[name];

    }

});

/* ../../../../libs/islands-romochka/common.blocks/i-global/i-global.js end */
;
/* ../../../../libs/islands-romochka/common.blocks/i-counter/i-counter.js begin */
(function(Lego){
if (!Lego) Lego = window.Lego = {};

!Lego.params && (Lego.params = {});


/**
 * Хелпер удаляющий протокол из переданного хоста, для приведения
 * к каноническому виду.
 *
 * @param h {String}
 * @returns {String}
 */
function preparseHost(h) {
    return h.replace(/^(?:https?:)?\/\//, '');
}

/**
 * Счётчик клика на ссылку или просто показа.
 *
 * В случае клика подменяет href на redir'овский, потом по таймауту возвращает его обратно.
 *
 * В случае учёта показа динамически создаёт скрипт с URL системы учёта.
 *
 * Пример использования:
 *
 * <a href="http://meteoinfo.ru" onmousedown="Lego.c('stred/pid=7/cid=433',this)">Гидрометцентр</a>
 *
 * или
 *
 * < script type="text/javascript">Lego.c('stred/pid=7/cid=433')< /script>
 *
 * @param w     параметры счётчика
 * @param a     (optional) ссылка, клик на которую надо учитывать
 * @param opts  (optional) opts.noRedirect = true обрабатывает клик по обычной ссылке, как по b-link_pseudo_yes
 */ /**/
Lego.c = function(w, a, opts) {
/*
    new Image().src = location.protocol + '//clck.yandex.ru/click/dtype=' + w +
        '/rnd=' + ((new Date()).getTime() + Math.round(Math.random()*100)) +
        '/*' + (a ? (a.href || location.href) : '');
*/

    var host = preparseHost((opts && opts.host) || BEM.blocks['i-global'].param('click-host') || 'clck.yandex.ru'),
        url = function(w, h, t, a) {

            h = h.replace("'", "%27"); //см. LEGO-6428

            return h.indexOf('/dtype=') > -1?
                h :
                location.protocol + '//' + host + '/' + t + '/dtype=' + w +
                    '/rnd=' + ((new Date()).getTime() + Math.round(Math.random()*100)) +
                    (a?
                        '/*' + (h.match(/^http/) ? h : location.protocol + '//' + location.host + (h.match('^/') ? h : '/' + h)) :
                        '/*data=' + encodeURIComponent('url='+ encodeURIComponent((h.match(/^http/) ? h : location.protocol + '//' + location.host + (h.match('^/') ? h : '/' + h)))));
        },
        click = function() {
            var head = document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0];
            var script = document.createElement('script');
            script.setAttribute('src', url(w, location.href, 'jclck'));
            head.insertBefore(script, head.firstChild);
        };

    if (a) {
        // для псевдоссылки и ссылки mailto просто считаем click, создавая iframe и в него грузим счётчик
        if (a.className.match(/b-link_pseudo_yes/) || (a.href && a.href.match(/^mailto:/)) || (opts && opts.noRedirect === true)) {
            click();
        } else if (a.href) { // клик на ссылку, подменяем href на redir'овский, потом по таймауту обратно
            var h = a.href;
            a.href = url(w, h, "redir");
            setTimeout(function() { a.href = h }, 500);
        } else if (a.form) { // клик на элемент формы
            if (a.type.match(/submit|button|image/)) { // клик на кнопку, подменяем action на redir'овский, потом по таймауту обратно
                var h = a.form.action;
                a.form.action = url(w, h, "redir", true);
                setTimeout(function() { a.form.action = h }, 500);
            } else { // просто считаем click, создавая iframe и в него грузим счётчик
                click();
            }
        } else if (a.action) { //случай сабмита формы - подменяем его action на redir'овский, назад нам его менять не нужно
            a.action = url(w, a.action, "redir", true);
        } else {
            throw "counter.js: not link and not form!";
        }
    } else { // ссылки нет, просто учёт показа, создаём iframe и в него грузим счётчик
        click();
    }
}

})(window.Lego);

(function(Lego, undefined){
if (!Lego) Lego = window.Lego = {};

/**
 * Параметризованный счётчик клика на ссылку или просто показа.
 * Перевызывает Lego.c(w, a) из counter.js
 *
 * В случае клика подменяет href на redir'овский, потом по таймауту возвращает его обратно.
 *
 * В случае учёта показа динамически создаёт iframe с URL системы учёта.
 *
 * Пример использования:
 *
 * < a href="http://meteoinfo.ru" onclick="Lego.cp(0,1917,'weather.tabs.fotki',this)">Гидрометцентр< /a>
 *
 * или
 *
 * < script type="text/javascript">Lego.cp(0,1917,'weather.tabs.fotki')< /script>
 *
 * или даже
 *
 * < a href="http://meteoinfo.ru" onclick="Lego.cp(0,1917,'weather.tabs.fotki','84=85,732=87')">Гидрометцентр< /a>
 *
 * @param pi    номер проекта (pid)
 * @param ci    номер счётчика (cid)
 * @param p     (optional) path
 * @param v     (optional) vars
 * @param a     (optional) ссылка, клик на которую надо учитывать
 * @param opts  (optional) opts.noRedirect = true обрабатывает клик по обычной ссылке, как по b-link_pseudo_yes
 */
Lego.cp = function(pi, ci, p, v, a, opts) {
    typeof v === 'string' ||
        (opts = a, a = v, v = undefined);
    Lego.c('stred/pid=' + pi + '/cid=' + ci + (p ? '/path=' + p + (v ? '/vars=' + v : '') : ''), a, opts);
};

})(window.Lego);

(function(Lego){
if (!Lego) Lego = window.Lego = {};

/**
 * Параметризованный счётчик клика на ссылку в шапке. Перевызывает cp(w, a) из counter-cp.js
 * Используется для уменьшения веса страницы.
 *
 * Пример использования:
 *
 * < a href="http://meteoinfo.ru" onclick="ch('weather.tabs.fotki',this)">Гидрометцентр< /a>
 *
 * или
 *
 * < script type="text/javascript">ch('weather')< /script>
 *
 * @param p     path
 * @param v     (optional) vars
 * @param a     (optional) ссылка, клик на которую надо учитывать
 */
Lego.ch = function(p, v, a) {
    BEM.blocks['i-global'].param('show-counters') && Lego.cp(0, 2219, p, v, a);
};

})(window.Lego);

/* ../../../../libs/islands-romochka/common.blocks/i-counter/i-counter.js end */
;
/* ../../../../libs/islands-romochka/common.blocks/i-common/cookie/i-common__cookie.js begin */
(function(Lego){
if (!Lego) Lego = window.Lego = {};

Lego.getCookie = function(n) {
    var c = document.cookie;
    if (c.length < 1) return false;

    var b = c.indexOf(n + '=');
    if (b == -1) return false;

    b += (n.length + 1);
    var e = c.indexOf(';', b);

    return decodeURIComponent((e == -1) ? c.substring(b) : c.substring(b, e));
}

})(window.Lego);

/* ../../../../libs/islands-romochka/common.blocks/i-common/cookie/i-common__cookie.js end */
;
/* ../../../../libs/islands-romochka/common.blocks/i-common/init/i-common__init.js begin */
(function($, Lego){
if (!Lego) Lego = window.Lego = {};
// Использует cookie.js и check-session.js. Без них не работает.

/**
 * Инициализирует Лего некоторыми параметрами (для вариативности в пределах разных страниц).
 *
 * @param params объект Лего-параметров, необходимые параметры инициализируются умолчательными значениями
 *        params.login логин текущего пользователя ('' для неавторизованного)
 *        params.locale двухбуквенный код локали в нижнем регистре
 *        params.id идентификатор сервиса
 *        params['show-counters-percent'] процент срабатывания счётчиков Lego.ch() (по умолчанию 100)
 *
 * @return возвращает установленные параметры с учетом умолчательных значений
 */
Lego.init || (Lego.init = function(params) {
    (params = Lego.params = $.extend(
        {
            id : '',
            login : Lego.isSessionValid() ? Lego.getCookie('yandex_login') || '' : '',
            yandexuid : Lego.getCookie('yandexuid'),
            locale : 'ru',
            retpath : window.location.toString(),
            'passport-host' : '//passport.yandex.ru',
            'pass-host' : '//pass.yandex.ru',
            'passport-msg' : params.id,
            'social-host' : '//social.yandex.ru',
            'lego-path' : '/lego',
            'show-counters-percent' : 100
        },
        params,
        Lego.params))
        ['show-counters'] = Math.round(Math.random() * 100) <= params['show-counters-percent'];

    BEM.blocks['i-global']._params || $.extend(BEM.blocks['i-global']._params = {}, params);

    $(function(){
        params.oframebust && Lego.oframebust(params.oframebust);
    });

    return params;
});

Lego.block || (Lego.block = {});

Lego.blockInit || (Lego.blockInit = function(context, blockSelector) {
    context = context || document;
    blockSelector = blockSelector || '.g-js';
    $(context).find(blockSelector).each(function(){
        var block = $(this),
            params = this.onclick ? this.onclick() : {},
            name = params.name || '',
            init = Lego.block[name];
        if (init && !block.data(name)) {
            init.call(block, params);
            block
                .data(name, true)
                .addClass(name + '_js_inited');
        }
    });
});

Lego.blockInitBinded || (Lego.blockInitBinded = !!$(document).ready(function(){ Lego.blockInit() }));

})(jQuery, window.Lego);

/* ../../../../libs/islands-romochka/common.blocks/i-common/init/i-common__init.js end */
;
/* ../../../../libs/islands-romochka/common.blocks/i-common/i-common.js begin */
(function(Lego){
if (!Lego) Lego = window.Lego = {};

Lego.messages = Lego.messages || {};

Lego.message = function(id, text) {
    return Lego.params.locale == 'ru' ? text : (Lego.messages[id] || text);
};

})(window.Lego);
/* ../../../../libs/islands-romochka/common.blocks/i-common/i-common.js end */
;
/* ../../../../libs/bem-bl/blocks-common/i-bem/__dom/_init/i-bem__dom_init_auto.js begin */
/* дефолтная инициализация */
$(function() {
    BEM.afterCurrentEvent(function() {
        BEM.DOM.init();
    });
});

/* ../../../../libs/bem-bl/blocks-common/i-bem/__dom/_init/i-bem__dom_init_auto.js end */
;
/* ../../../../libs/bem-bl/blocks-common/i-ua/_interaction/i-ua_interaction_yes.js begin */
/*
 * Block to determine how the user interacts with the page.
 * Distinguishes interaction with a keyboard or mouse/finger.
 * For performance reason this code use data-attr `data-interaction` instead `setMod` (which switch css class and
 * always trigger repaint)
 */
(function() {

    var INTERACT_KEYS = {
        9: 'tab',
        13: 'enter',
        32: 'space',
        33: 'page up',
        34: 'page down',
        35: 'end',
        36: 'home',
        37: 'left arrow',
        38: 'up arrow',
        39: 'right arrow',
        40: 'down arrow',
        46: 'delete'
    };

    var INTERACT_DISABLE_KEYS = {
        27: 'escape'
    };

    BEM.DOM.decl({
        block: 'i-ua',
        modName: 'interaction',
        modVal: 'yes' }, {

        onSetMod: {
            js: {
                inited: function() {
                    this.bindTo('mousedown', this._onPointer)
                        .bindTo('keydown', this._onKeyboard);
                }
            }
        },

        /**
         * @private
         */
        _onPointer: function() {
            this.interaction = 'pointer';
            this.domElem.attr('data-interaction', 'pointer');

            this.unbindFrom('mousedown');
        },

        /**
         * @private
         */
        _onKeyboard: function(e) {

            var keyCode = e.keyCode;

            if(INTERACT_DISABLE_KEYS[keyCode]) {
                this._onPointer();
                return;

            } else if(!INTERACT_KEYS[keyCode]) {
                return;
            }

            if(this.interaction === 'keyboard') {
                return;
            }

            this.domElem.attr('data-interaction', 'keyboard');
            this.interaction = 'keyboard';

            this.bindTo('mousedown', this._onPointer);
        }

    });

}());

/* ../../../../libs/bem-bl/blocks-common/i-ua/_interaction/i-ua_interaction_yes.js end */
;
/* ../../../../libs/islands-romochka/desktop.blocks/i-oframebust/i-oframebust.js begin */
(function(Lego) {

    Lego = Lego || {};

    Lego.oframebustMatchDomain = function(whitelist, domain) {
        whitelist = Object.prototype.toString.call(whitelist) === "[object Array]" ? whitelist : (function() {
            var arr = [];
            for (var k in whitelist) {
                whitelist.hasOwnProperty(k) && arr.push(k);
            }
            return arr;
        }());

        for (var i = 0, l = whitelist.length; i < l; i++) {
            var d = whitelist[i];
            if (typeof(d) == 'string') {
                //поддержка wildcard
                if (/(\?|\*)/.test(d)) {
                    var re = d.replace(/\./g, '\\.').replace(/\*/g, '.*').replace(/\?/g, '\.{1}');
                    if ((new RegExp('^' + re + '$')).test(domain)) return true;
                } else if (domain == d) {
                    return true; //обычная строка
                }
            } else {
                //предполагаем, что d -- regexp
                try {
                    if (d.test(domain)) return true;
                } catch(e) {}
            }
        }
    }

})(window.Lego);

/* ../../../../libs/islands-romochka/desktop.blocks/i-oframebust/i-oframebust.js end */
;
/* ../../../../libs/islands-romochka/desktop.blocks/i-oframebust/_type/i-oframebust_type_referrer.js begin */
(function(Lego) {

    Lego = Lego || {};

    Lego.oframebust = function(whitelist) {
        if (window.top.location != window.location) {
            var match = document.referrer.match(/^https?:\/\/([^:\/\s]+)\/?.*/);

            //не выпрыгиваем для тех, у кого скрыт referrer
            if (!match) return;

            !Lego.oframebustMatchDomain(whitelist, match[1]) && (window.top.location = window.location);
        }
    };

})(window.Lego);

/* ../../../../libs/islands-romochka/desktop.blocks/i-oframebust/_type/i-oframebust_type_referrer.js end */
;
/* ../../../../libs/islands-romochka/common.blocks/i-request/i-request.js begin */
(function() {

var cache = {};

BEM.decl('i-request', {

    onSetMod : {

        'js' : function() {

            this._preventCache = false;

        }

    },

    get : function(request, onSuccess, onError, params) {

        if(!$.isFunction(onError)) {
            params = onError;
            onError = this.params.onError;
        }

        this._get(request, onSuccess, onError, $.extend({}, this.params, params));

    },

    _get : function(request, onSuccess, onError, params) {

        var key = this._buildCacheKey(request, params),
            cacheGroup = cache[params.cacheGroup];

        params.cache && cacheGroup && key in cacheGroup.data?
            this.afterCurrentEvent(function() {
                onSuccess.call(this.params.callbackCtx, cacheGroup.data[key])
            }, this) :
            this._do(request, onSuccess, onError, params);
    },

    _do : function(request, onSuccess, onError, params) {},

    _onSuccess : function(requestKey, request, data, params) {

        params.cache && !this._preventCache && this.putToCache(params, requestKey, data);
        this._preventCache = false;

    },

    _buildCacheKey : function(obj, params) {

        return typeof obj == 'string' ? obj : $.param(obj);

    },

    putToCache : function(params, request, data) {

        var cacheGroup = cache[params.cacheGroup] || (cache[params.cacheGroup] = { keys : [], data : {}});

        if(cacheGroup.keys.length >= params.cacheSize) {
            delete cacheGroup.data[cacheGroup.keys.shift()];
        }

        var key = this._buildCacheKey(request, params);

        cacheGroup.data[key] = data;
        cacheGroup.keys.push(key);
    },

    dropCache : function() {

        delete cache[this.params.cacheGroup];

    },

    getDefaultParams : function() {

        return {
            cache : false,
            cacheGroup : 'default',
            cacheSize : 100,
            callbackCtx : this
        };

    }

}, {

    _cache: cache

});

})();
/* ../../../../libs/islands-romochka/common.blocks/i-request/i-request.js end */
;
/* ../../../../libs/bem-bl/blocks-desktop/i-jquery/__leftclick/i-jquery__leftclick.js begin */
/**
 * leftClick event plugin
 *
 * Copyright (c) 2010 Filatov Dmitry (alpha@zforms.ru)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * @version 1.0.0
 */

(function($) {

var leftClick = $.event.special.leftclick = {

    setup : function() {

        $(this).bind('click', leftClick.handler);

    },

    teardown : function() {

        $(this).unbind('click', leftClick.handler);

    },

    handler : function(e) {

        if(!e.button) {
            e.type = 'leftclick';
            $.event.handle.apply(this, arguments);
            e.type = 'click';
        }

    }

};

})(jQuery);
/* ../../../../libs/bem-bl/blocks-desktop/i-jquery/__leftclick/i-jquery__leftclick.js end */
;
/* ../../../../common.blocks/input/input.js begin */
/**
 * Поле ввода.
 *
 * Оборачивает нативный контрол (`input` или `textarea`) в контейнер и реализует различные дополнения к нему.
 */
BEM.DOM.decl('input', {

    /**
     * Генерируется при смене значения.
     *
     * @event input#change
     * @property {Object} [data]           Дополнительные параметры.
     * @property {String} [data.source]    Источник события. Например:
     *  - `clear` - если значение было очищено с помощью крестика;
     *  - `autocomplete` - если значение было изменено при перемещении по подсказкам саджеста;
     *  - `sample` - если значение было подставлено из примера.
     *
     * @property {Number} [data.itemIndex] Индекс подсказки, которая была выделена, если событие
     * сгенерировано при перемещении по подсказкам саджеста.
     */

    /**
     * Генерируется при получении фокуса.
     *
     * @event input#focus
     */

    /**
     * Генерируется при потере фокуса.
     *
     * @event input#blur
     */

    /**
     * @private
     */
    onSetMod: {

        js: function() {

            /**
             * Текущее значение.
             *
             * @private
             * @type {String}
             */
            this._val = this.elem('control').val();

        },

        disabled: function(modName, modVal) {

            this.elem('control').attr('disabled', modVal === 'yes');

        },

        focused: function(modName, modVal) {

            if(this.hasMod('disabled', 'yes')) {
                return false;
            }

            var focused = modVal === 'yes';

            focused ? this._focused || this._focus() : this._focused && this._blur();

            this.afterCurrentEvent(function() {
                this.trigger(focused ? 'focus' : 'blur');
            });

        }

    },

    /**
     * Проверяет, находится ли блок в отключенном состоянии.
     * Отключенное состояние характеризуется наличием модификатора `_disabled_yes`.
     *
     * @public
     * @returns {Boolean}
     */
    isDisabled: function() {
        return this.hasMod('disabled', 'yes');
    },

    /**
     * Устанавливает/возвращает текущее значение.
     *
     * Если перадан параметр val, то устанавливает значение и возвращает экземпляр блока.
     * При этом генерирует событие `change`.
     *
     * Если метод вызван без параметров, то возвращает текущее значение.
     *
     * @public
     * @param {String} [val] Устанавливаемое значение.
     * @param {Object} [data] Дополнительные данные, которые будут переданы в обработчик события `change`.
     * @returns {BEM.DOM|String}
     */
    val: function(val, data) {

        if(typeof val === 'undefined') {
            return this._val;
        }

        val = val === null ? '' : val.toString();

        var input = this.elem('control');
        if(input.val() !== val) {
            input.val(val);
        }
        this._val = val;
        this.trigger('change', data);

        return this;

    },

    /**
     * Возвращает имя нативного контрола.
     *
     * @public
     * @returns {String}
     */
    name: function() {
        return this.elem('control').attr('name');
    },

    /**
     * Возвращает позицию курсора в текстовом поле.
     * @see http://stackoverflow.com/questions/4185821#4186100
     *
     * @public
     * @returns {Number}
     */
    getSelectionEnd: function() {
        var input = this.elem('control')[0],
            end = 0;
        if(typeof(input.selectionEnd) === 'number') {
            end = input.selectionEnd;
        } else {
            var range = document.selection.createRange();
            if(range && range.parentElement() === input) {
                var len = input.value.length,
                    textInputRange = input.createTextRange();
                textInputRange.moveToBookmark(range.getBookmark());

                var endRange = input.createTextRange();
                endRange.collapse(false);
                end = textInputRange.compareEndPoints('EndToEnd', endRange) > -1
                    ? len
                    : -textInputRange.moveEnd('character', -len);
            }
        }

        return end;
    },

    /**
     * Обработчик DOM-события `focus` на нативном контроле.
     *
     * @private
     * @returns {BEM.DOM}
     */
    _onFocus: function() {
        this._focused = true;
        return this.setMod('focused', 'yes');
    },

    /**
     * Обработчик DOM-события `blur` на нативном контроле.
     *
     * @private
     * @returns {BEM.DOM}
     */
    _onBlur: function() {

        // https://st.yandex-team.ru/ISLCOMPONENTS-768
        if(this._returnFocus) {
            this.afterCurrentEvent(function() {
                this._focus();
            });
            return this;
        }

        if(this.hasMod(this.elem('clear'), 'pressed')) {
            return this;
        }

        this._focused = false;
        return this.delMod('focused');

    },

    /**
     * Передает фокус нативному контролу.
     *
     * @private
     */
    _focus: function() {

        if(this.hasMod('disabled', 'yes')) {
            return false;
        }

        this.elem('control').focus();
    },

    /**
     * Вызыввает потерю фокуса нативным контролом.
     *
     * @private
     */
    _blur: function() {
        this._returnFocus = false;
        this.elem('control').blur();
    },

    /**
     * Уничтожает блок.
     *
     * @public
     */
    destruct: function() {
        // принудительный сброс фокуса позволяет получить
        // корректное поведение при уничтожении
        // блока в фокусе
        this._blur();
        this.__base.apply(this, arguments);
    }

}, {

    live: function() {

        this.liveBindTo('control', 'focusin focusout', function(e) {
            this[e.type === 'focusin' ? '_onFocus' : '_onBlur'](e);
        });

    }

});

/* ../../../../common.blocks/input/input.js end */
;
/* ../../../../desktop.blocks/input/input.js begin */
(function() {

var instances = [],
    sysChannel,
    update = function() {
        instances.forEach(function(instance) {
            instance.val(instance.elem('control').val());
        });
    },
    getActiveElement = function(doc) {
        // В iframe в IE9: "Error: Unspecified error."
        try {
            return doc.activeElement;
        } catch (e) {}
    };

/**
 * Смена значения в нативном контроле отслеживается с помощью polling'а его значений.
 * Для этого используется событие `tick` из канала `sys`, реализованого в блоке `i-system`.
 *
 * @param {Object} [params] Параметры блока.
 * @param {Boolean} [params.autoFocus=false] Если `true`, то на инпут будет установлен фокус при инициализации.
 * @param {Boolean} [params.shortcut=false]  Если `true`, то включает шоткат перехода в в инпут (ctrl+стрелка вверх).
 */
BEM.DOM.decl('input', {

    onSetMod: {

        js: {

            inited: function() {

                this.__base.apply(this, arguments);

                // сохраняем индекс в массиве инстансов чтобы потом быстро из него удалять
                this._instanceIndex = instances.push(this) - 1;

                var input = this.elem('control'),
                    activeElement = getActiveElement(this.__self.doc[0]),
                    haveToSetAutoFocus =
                        this.params.autoFocus && (!activeElement || !$(activeElement).is('input, textarea'));

                if(activeElement === input[0] || haveToSetAutoFocus) {
                    this.setMod('focused', 'yes')._focused = true;
                }

                // факт подписки
                if(!sysChannel) {
                    sysChannel = this.channel('sys')
                        .on({
                            tick: update,
                            idle: function() {
                                sysChannel.un('tick', update);
                            },
                            wakeup: function() {
                                sysChannel.on('tick', update);
                            }});
                }

                // шорткат для перехода в инпут - ctrl+стрелка вверх
                this.params.shortcut && this.bindToDoc('keydown', function(e) {
                    if(e.ctrlKey && e.which === 38 && !$(e.target).is('input, textarea')) {
                        this.setMod('focused', 'yes');
                    }
                });

            }

        }

    },

    /**
     * Возвращает/устанавливает текущее значение
     * @param {String} [val] значение
     * @param {Object} [data] дополнительные данные
     * @returns {String|BEM} если передан параметр val, то возвращается сам блок, если не передан -- текущее значение
     */
    val: function(val, data) {

        var isVal = typeof val !== 'undefined',
            input = this.elem('control');

        if(isVal) {
            val = val === null ? '' : val.toString();
        } else {
            val = input.val();
        }

        if(this._val !== val) {
            this._val = val;

            if(input.val() !== val) {
                input.val(val);
            }

            this.trigger('change', data);
        }

        return isVal ? this : val;
    },

    _focus: function() {
        // NOTE: Нормализация установки фокуса для IE
        var input = this.elem('control')[0];
        if(input.createTextRange && !input.selectionStart) {
            var range = input.createTextRange();
            range.move('character', input.value.length);
            range.select();
        } else {
            input.focus();
        }

    },

    destruct: function() {

        this.__base.apply(this, arguments);

        this.params.shortcut && this.unbindFromDoc('keydown');

        instances.splice(this._instanceIndex, 1);

        instances.slice(this._instanceIndex).forEach(function(instance) {
            instance._instanceIndex--;
        });

    }

}, {

});

})();

/* ../../../../desktop.blocks/input/input.js end */
;
/* ../../../../libs/bem-bl/blocks-common/i-system/i-system.js begin */
(function() {

var timer,
    counter = 0,
    isIdle = false,
    idleInterval = 0,
    channel = BEM.channel('sys'),
    TICK_INTERVAL = 50;

/**
 * System channel for tick, idle, wakeup messages
 */
BEM.decl('i-system', {}, {

    start : function() {

        $(document).bind('mousemove keydown', function() {
            idleInterval = 0;
            if(isIdle) {
                isIdle = false;
                channel.trigger('wakeup');
            }
        });

        this._tick();

    },

    _tick : function() {

        var _this = this;

        channel.trigger('tick', { counter : counter++ });

        if(!isIdle && (idleInterval += TICK_INTERVAL) > 3000) {
            isIdle = true;
            channel.trigger('idle');
        }

        timer = setTimeout(function() {
            _this._tick();
        }, TICK_INTERVAL);

    }

}).start();

})();

/* ../../../../libs/bem-bl/blocks-common/i-system/i-system.js end */
;
/* ../../../../common.blocks/input/__clear/input__clear.js begin */
/*
 * Поле ввода с крестиком для очистки значения.
 * TODO: как обрабатывать такие недо-элементы?
 */
BEM.DOM.decl('input', {

    onSetMod: {

        js: function() {
            this.__base.apply(this, arguments);

            this
                .on('change', this._updateClear)
                // на случай включенного автокомплита дополнительно проверяем необходимость отображения крестика
                ._updateClear();
        }
    },

    /**
     * Обработчик клика на контейнере инпута.
     * Костылик для перевода фокуса на контрол при клике на место очищаего крестика, когда его не видно.
     *
     * @private
     */
    _onBoxClear: function() {
        this.hasMod('clear', 'visibility', 'visible') || this.setMod('focused', 'yes');
    },

    /**
     * Обработчик клика на очищающем крестике.
     * Очищает значение и устанавливает фокус на контрол.
     *
     * @private
     * @returns {BEM.DOM}
     */
    _onClearClick: function() {
        this.trigger('clear');
        this.removeInsets && this.removeInsets();

        return this
            .clearInput({source: 'clear'})
            ._focus();
    },

    /**
     * Очищает значение в поле ввода.
     *
     * Генерирует событие `change`.
     *
     * @public
     * @param  {Object} data Дополнительные данные, которые будут переданы в обработчик события `change`.
     * @returns {BEM.DOM}
     */
    clearInput: function(data) {
        this.val('', data);

        return this;
    },

    /**
     * Скрывает крестик (элемент `__clear`) при отсутствии текста в поле ввода, при наличии текста – показывает.
     *
     * @private
     * @returns {BEM.DOM}
     */
    _updateClear: function() {
        return this.toggleMod(this.elem('clear'), 'visibility', 'visible', '', !!this._val);
    }

}, {

    live: function() {

        this.__base.apply(this, arguments);

        this
            .liveBindTo('clear', 'mousedown', function(e) {
                if(e.which !== 1) {
                    return;
                }
                this.setMod(this.elem('clear'), 'pressed', 'yes');
            })
            .liveBindTo('clear', 'leftclick tap', function() {
                this.delMod(this.elem('clear'), 'pressed');
                this._onClearClick();
            })
            .liveBindTo('box', 'leftclick tap', function() {
                this._onBoxClear();
            });
    }

});

/* ../../../../common.blocks/input/__clear/input__clear.js end */
;
/* ../../../../libs/islands-romochka/common.blocks/i-request/_type/i-request_type_ajax.js begin */
BEM.decl({ block : 'i-request_type_ajax', baseBlock : 'i-request' }, {

    onSetMod : {

        'js' : function() {

            this.__base();
            this._requestNumber = this._number = this._preventNumber = this._retryCount = 0;

        }

    },

    _get : function(request, onSuccess, onError, params) {

        this._number++;
        this._requestNumber++;
        this._retryCount = params.retryCount;

        this.__base.apply(this, arguments);

    },

    _do : function(request, onSuccess, onError, params) {

        var _this = this;
        if(_this._number > _this._preventNumber) { // условие на случай, если кто-то синхронно позовет preventCallbacks
            var args = arguments,
                settings = {
                    data : params.data? $.extend({}, params.data, request) : request
                },
                done = _this._wrapCallback(function(respArgs, requestNumber, number) {
                    _this._onSuccess(_this._buildCacheKey(request, params), request, respArgs[0], params);
                    _this._allowCallback(requestNumber, number) &&
                    onSuccess.apply(params.callbackCtx, respArgs);
                }),
                fail = _this._wrapCallback(function(respArgs, requestNumber, number) {
                    _this._allowCallback(requestNumber, number) &&
                    (_this._retryCount-- > 0?
                        setTimeout(
                            function() {
                                _this._do.apply(_this, args);
                            },
                            params.retryInterval) :
                        onError && onError.apply(params.callbackCtx, respArgs));
                });

            $.each(['url', 'dataType', 'timeout', 'type', 'jsonp', 'jsonpCallback'].concat(params.paramsToSettings || []), function(i, name) {
                settings[name] = params[name];
            });

            $.ajax(settings).done(done).fail(fail);
        }

    },

    _wrapCallback : function(callback) {

        var requestNumber = this._requestNumber,
            number = this._number;

        return function(data) {
            data !== null && callback(arguments, requestNumber, number);
        };

    },

    _allowCallback : function(requestNumber, number) {

        return number > this._preventNumber && this._requestNumber == requestNumber;

    },

    _buildCacheKey : function(obj, params) {

        return typeof obj == 'string'?
            obj :
            this.__base(obj) + params.url;

    },

    abort : function() {

        this._preventNumber = ++this._number;

    },

    /**
     * @deprecated использовать abort
     */
    preventCallbacks : function() {

        this.abort();

    },

    getDefaultParams : function() {

        return $.extend(
            this.__base(),
            {
                cache         : true,
                type          : 'GET',
                dataType      : 'jsonp',
                timeout       : 20000,
                retryCount    : 0,
                retryInterval : 2000
            });

    }

});

/* ../../../../libs/islands-romochka/common.blocks/i-request/_type/i-request_type_ajax.js end */
;
/* ../../../../common.blocks/input/_suggest/input_suggest_yes.js begin */
(function() {

var DOM = BEM.DOM,

    KEYDOWN_EVENT = ($.browser.opera && $.browser.version < 12.10) ? 'keypress' : 'keydown';

/**
 * Поле ввода с саджестом.
 *
 * Саджест представляет из себя выпадушку (используется блок popup), в которой размещены варианты саджеста.
 * Вариантами являются блоки `b-autocomplete-item` (romochka).
 *
 * Саджест появляется во время изменения текста в поле ввода. Вариант в саджесте можно выбрать с помощью
 * мыши или стрелчек вверх/вниз на клавиатуре.
 *
 * Внизу саджеста можно установить подвал. Подвал - это блок `b-autocomplete-item__type_foot`, который
 * отображает кастомный текст и не реагирует на перемещения по саджесту.
 *
 * Поставщиком данных для саджеста служит элемент `__dataprovider`, который наследует блок
 * `i-request_type_ajax` (romochka).
 *
 * @param {Number}   [params.debounceDelay=50]     Время (в ms), в течении которого при изменении текста не будет
 * выполняться запрос новых данных.
 * @param {Boolean}  [params.showListOnFocus=true] Если `true`, то саджест откроется по фокусу на поле ввода,
 * иначе он откроется только при изменении текста.
 * @param {Boolean}  [params.updateOnEnter=true]   Если `true`, то текст в поле ввода будет дополнятся вариантами,
 * при перемещении по ним стрелочками вверх/вниз.
 * @param {Object}   params.dataprovider           Параметры для создания поставщика данных.
 * @param {Object}   [params.popupMods]            Модификаторы для создания блока popup.
 * @param {Object}   [params.popupMixs]            Миксины для создания блока popup.
 * @param {String[]} [params.foot]                 Параметры подвала.
 * @param {String}   params.foot[0]                Значение модификатора `b-autocomplete-item__type_*`, например `foot`.
 * @param {String}   params.foot[1]                Строка для отображения в подвале.
 */
DOM.decl({name: 'input', modName: 'suggest', modVal: 'yes'}, {

    /**
     * Генерируется при запросе данных для саджеста.
     *
     * @event input_suggest_yes#data-requested
     */

    /**
     * Генерируется при получении данных для саджеста.
     *
     * @event input_suggest_yes#data-received
     * @param {Object} data Данные для саджеста.
     */

    /**
     * Генерируется при обновлении саджеста новыми данными.
     *
     * @event input#update-items
     */

    /**
     * Генерируется при выборе варианта из саджеста.
     *
     * @event input#select
     * @param {Object}  data            Дополнительные данные события.
     * @param {BEM.DOM} data.item       Блок выбранного элемента саджеста.
     * @param {Boolean} data.byKeyboard `true`, если выбор подсказки произошел с помощью клавиатуры
     * (нажата клавиша Enter).
     */

    onSetMod: {

        'js': function() {

            var _this = this;

            _this.params.foot && (_this.foot = _this.params.foot); // упячка!

            /**
             * Флаг, предотвращающий выполнение запросов за новыми данными для саджеста.
             *
             * @private
             * @type {Boolean}
             */
            _this._preventRequest = true;

            _this.__base.apply(_this, arguments);

            /**
             * Последнее значение, введенное пользователем.
             *
             * @private
             * @type {String}
             */
            _this._userVal = _this.val();

            // выключаем браузерный саджест
            var focused = _this._focused;
            focused && _this.delMod('focused');
            _this.elem('control').attr('autocomplete', 'off');
            _this._preventRequest = false;
            focused && _this.setMod('focused', 'yes');

            /**
             * Массив, содержащий ссылки на блоки подсказок.
             *
             * @private
             * @type {BEM.DOM[]}
             */
            _this._items = [];

            /**
             * Индекс текущей выделенной подсказки.
             *
             * @private
             * @type {Number}
             */
            _this._curItemIndex = -1;

            _this._doRequest = $.debounce(_this._doRequest, _this.params.debounceDelay);

            this.bindToWin('resize', $.throttle(this._setWidth, 60));

        },

        'focused': {

            'yes': function() {

                this.__base();

                var onChangeFn = this.params.showListOnFocus ? this._onChange() : this._onChange;
                this.on('change', onChangeFn);

            },

            '': function() {

                this.__base();
                this
                    .un('change', this._onChange)
                    ._preventHide || this._getPopup().hide();

            }

        }

    },

    /**
     * Возвращает блок-поставщик данных. Создает его при первом обращении.
     *
     * @protected
     * @returns {BEM}
     */
    getDataprovider: function() {

        var url = this.params.dataprovider.url;

        return this._dataprovider || (this._dataprovider = BEM.create(
            this.params.dataprovider.name || this.__self.getName() + '__dataprovider',
            $.extend(this.params.dataprovider, {
                url: url,
                callbackCtx: this
            })));

    },

    /**
     * Обработчик события `change`. Вызывает загрузку данных для саджеста.
     * Возвращает сам себя.
     *
     * @private
     * @returns {Function}
     */
    _onChange: function() {

        this._preventRequest || this._doRequest();
        return this._onChange;

    },

    /**
     * Обработчик нажатий на клавиши при открытом саджесте.
     * Реализует перемещение по подсказкам вверх/вниз.
     *
     * @private
     * @param {$.Event} e DOM-событие нажатия клавиши.
     */
    _onKeyDown: function(e) {

        var isArrow = e.which === 38 || e.which === 40;

        if(isArrow && !e.shiftKey) {
            e.preventDefault();
            var len = this._items.length,
                out = false;
            if(len) {
                var direction = e.which - 39, // пользуемся особенностями кодов клавиш "вверх"/"вниз" ;-)
                    index = this._curItemIndex,
                    i = 0;

                do {
                    // если выбор перемещается с крайней подсказки вовне списка,
                    // то ставим фокус на инпут и возвращаем в него пользовательское значение
                    out = ((index === 0 && direction === -1) || (index + direction >= len)) &&
                            this._onLeaveItem(this._items[index], true);

                    index += direction;
                    if(index < 0) {
                        index = len - 1;
                    } else if(index >= len) {
                        index = 0;
                    }
                } while(!out && this._onEnterItem(this._items[index], true) === false && ++i < len);
            }
        }

    },

    /**
     * Обработчк нажатий на символьные клавиши при открытом саджесте.
     * Реализует выбор выделенной подсказки с помощью клавиши Enter.
     *
     * @private
     * @param {DOMEvent} e DOM-событие нажатия клавиши.
     */
    _onKeyPress: function(e) {

        if(e.which === 13 && this._curItemIndex > -1 && this._isCurItemEnteredByKeyboard) {
            e.preventDefault();
            this._onSelectItem(this._items[this._curItemIndex], true);
        }

    },

    /**
     * Возвращает блок popup, используемый для размещения вариантов саджеста.
     * При первом обращении создает блок и устанавливает необходимые обработчики событий.
     *
     * @private
     * @returns {BEM.DOM} Блок `popup`.
     */
    _getPopup: function() {

        var _this = this;
        if(!_this._popup) {
            var block = _this.__self.getName(),
                content = [{elem: 'items', tag: 'ul', mix: [{block: block, elem: 'popup-items'}]}],
                popupMix = Array.isArray(_this.params.popupMixs) ? _this.params.popupMixs : [],
                popupParams = {directions: 'bottom-left'};

            _this._hasPopupFade() && content.push({block: block, elem: 'fade'});

            // пробрасываем пользовательские параметры из js-параметра 'popupParams' в блок 'popup'
            $.extend(popupParams, _this.params.popupParams);

            popupMix.push({
                block: block,
                elem: 'popup',
                mods: _this.params.popupMods,
                js: {uniqId: _this._uniqId}
            });

            _this._popup = $(BEMHTML.apply({
                block: 'popup',
                mods: {animate: 'no'},
                mix: popupMix,
                js: popupParams,
                content: {
                    elem: 'content',
                    content: content
                }
            })).bem('popup')
                .on({
                    'show': function() {
                        _this
                            .bindTo('keypress', _this._onKeyPress)
                            .bindTo(KEYDOWN_EVENT, _this._onKeyDown);
                    },
                    'hide': function() {
                        _this
                            .unbindFrom('keypress ' + KEYDOWN_EVENT)
                            ._curItemIndex = -1;
                    }
                });

            // при первом создании попапа подписываемся на live-события его элементов
            $.each({
                    mouseover: _this._onEnterItem,
                    mouseout: _this._onLeaveItem,
                    mousedown: _this._onSelectItem,
                    mouseup: _this._onItemMouseUp
                }, function(e, fn) {
                    BEM.blocks['b-autocomplete-item'].on(_this._popup.domElem, e, function(e) {
                        fn.call(_this, e.block);
                    });
                });

            DOM.init(_this._popup.domElem);
        }

        return _this._popup;

    },

    /**
     * Возвращает блок popup, используемый для размещения вариантов саджеста.
     *
     * @public
     * @returns {BEM.DOM} Блок `popup`.
     */
    getPopup: function() {
        return this._getPopup();
    },

    /**
     * Проверяет, имеет ли блок `popup` модификатор `popup_fade_yes`.
     *
     * @private
     * @returns {Boolean}
     */
    _hasPopupFade: function() {
        return (this.params.popupMods || {}).fade === 'yes';
    },

    /**
     * Обработчик выделения варианта с помощью мыши или клавиатуры.
     *
     * @private
     * @param {BEM.DOM} item       Блок выделенного варианта.
     * @param {Boolean} byKeyboard `true`, если выделение произошло с помощью клавиатуры.
     * @returns {Boolean|undefined} `false`, если блок не должен принимать выделение.
     */
    _onEnterItem: function(item, byKeyboard) {

        if(item.hasMod('enterable', 'no')) {
            return false;
        }

        var items = this._items,
            index = this._curItemIndex;

        index > -1 && items[index].delMod('hovered');
        index = this._getItemIndex(item);
        index > -1 && items[index].setMod('hovered', 'yes');

        this._curItemIndex = index;
        this._isCurItemEnteredByKeyboard = !!byKeyboard;

        if(byKeyboard && this.params.updateOnEnter) {
            this._preventRequest = true;
            this
                .val(
                    item.enter() !== false ? item.val() : this._userVal,
                    {source: 'autocomplete', itemIndex: this._curItemIndex})
                .del('_preventRequest');
        }

    },

    /**
     * Обработчик снятия выделения с варианта. Вызывается, когда
     * с помощью мыши и или клавиатуры был выделен другой вариант.
     *
     * @private
     * @param {BEM.DOM} item       Блок варианта, с которого снято выделение.
     * @param {Boolean} byKeyboard `true`, если снятие выделения произошло с помощью клавиатуры.
     * @returns {Boolean} Всегда `true`.
     */
    _onLeaveItem: function(item, byKeyboard) {

        var index = this._curItemIndex;
        if(index > -1 && index === this._getItemIndex(item)) {
            this._items[index].delMod('hovered');
            this._curItemIndex = -1;
        }

        byKeyboard && this.val(this._userVal);

        return true;

    },

    /**
     * Обработчик выбора варианта. Вызывается по клику или
     * нажатию Enter на выделенном варианте.
     *
     * @private
     * @param  {BEM.DOM} item        Блок выбранного варианта.
     * @param  {Boolean} byKeyboard  `true`, если выбор подсказки произошел с помощью клавиатуры.
     * (нажата клавиша Enter).
     */
    _onSelectItem: function(item, byKeyboard) {

        var selectResult = item.select(byKeyboard || false),
            needUpdate = (typeof selectResult === 'object') ? selectResult.needUpdate : (selectResult !== false),
            needEvent = (typeof selectResult === 'object') && selectResult.needEvent;

        this._preventRequest = true;

        if(needUpdate) {
            this._userVal = item.val();
            this.val(this._userVal, {source: 'autocomplete', itemIndex: this._curItemIndex});
        }

        if(byKeyboard) {
            this
                .del('_preventRequest')
                ._getPopup()
                .hide();
        } else {
            // Возвращаем фокус обратно, чтобы popup не закрылся по mousedown
            // https://st.yandex-team.ru/ISLCOMPONENTS-768
            this._returnFocus = true;

            needUpdate || (this._preventHide = true);
            this.afterCurrentEvent(function() {
                this
                    .setMod('focused', 'yes')
                    .del('_preventRequest', '_preventHide');
            });
        }

        (needUpdate || needEvent) && this.trigger('select', {item: item, byKeyboard: byKeyboard});

    },

    _onItemMouseUp: function() {
        this
            .del('_returnFocus')
            ._getPopup()
            .hide();
    },

    /**
     * Возвращает позицию варианта в саджесте.
     *
     * @private
     * @param  {BEM.DOM} item Блок варианта.
     * @returns {Numbert}
     */
    _getItemIndex: function(item) {
        return $.inArray(item, this._items);
    },

    /**
     * Делает запрос за данными и обновляет ими саджест.
     * Генерирует события `data-requested`, `data-recieved`, `unpdate-items` соответственно.
     *
     * @private
     */
    _doRequest: function() {

        var _this = this;
        _this._userVal = _this.val();
        _this
            .trigger('data-requested')
            .getDataprovider().get(
                _this.val(),
                function(data) {
                    _this.trigger('data-received', data);

                    var popup = _this._getPopup(),
                        dataItems = data.items || data;

                    _this.foot && dataItems.length &&
                        ($.inArray(_this.foot, dataItems) === -1) && dataItems.push(_this.foot);

                    if(dataItems.length) {
                        _this._curItemIndex = -1;
                        DOM.update(popup.elem('items'), _this._buildItemsHtml(dataItems), function() {

                            if(!popup.isShown()) {
                                popup.show(_this.elem('box'));
                                _this._setWidth();
                            }

                            // https://st.yandex-team.ru/ISLCOMPONENTS-180
                            popup.repaintShadowIfNeeded();

                            _this._items = popup.findBlocksInside('b-autocomplete-item');
                            _this.trigger('update-items');
                        });
                    } else {
                        popup.hide();
                    }
                });

    },

    /**
     * Устанавливает ширину саджеста равной ширине инпута.
     *
     * @private
     */
    _setWidth: function() {
        this._hasPopupFade() && this._getPopup().domElem.css('width', this.elem('box').outerWidth());
    },

    /**
     * Шаблонизирует данные саджеста в html.
     *
     * @private
     * @param  {String[]} data Массив данных саджеста.
     * @returns {String} Выходной html.
     */
    _buildItemsHtml: function(data) {
        var _this = this;

        return BEMHTML.apply($.map(data, function(data, i) {

            var autocompleteItem = {
                    block: 'b-autocomplete-item',
                    data: data,
                    mods: {type: $.isArray(data) ? data[0] : 'text'},
                    suggestVersion: _this.params.dataprovider.version || 4
                },
                prefs;

            ($.isArray(data)) && $.isPlainObject(prefs = data.concat().pop()) && $.extend(autocompleteItem, prefs);

            return autocompleteItem;

        }));

    },

    /**
     * Устанавливает параметры подвала.
     *
     * @public
     * @param {String[]} data    Параметры подвала.
     * @param {String}   data.0 Значение модификатора `b-autocomplete-item__type_*`, например `foot`.
     * @param {String}   data.1 Строка для отображения в подвале.
     * @returns {String[]} Параметры подвала.
     */
    setFoot: function(data) {

        this.foot = data;
        return this.foot;

    },

    /**
     * Возвращает параметры блока по умолчанию.
     *
     * @protected
     * @returns {Object}
     */
    getDefaultParams: function() {

        return $.extend(this.__base(), {
            updateOnEnter: true,
            debounceDelay: 50,
            showListOnFocus: true
        });

    }

});

})();

/* ../../../../common.blocks/input/_suggest/input_suggest_yes.js end */
;
/* ../../../../common.blocks/input/__dataprovider/input__dataprovider.js begin */
/**
 * Поставщик данных для саджеста.
 * Элемент реализован как наследник от блока `i-request_type_ajax`.
 */
BEM.decl({name: 'input__dataprovider', baseBlock: 'i-request_type_ajax'}, {

    /**
     * Запрашивает подсказки для саджеста.
     *
     * @public
     * @param {String}            request  Часть текста, для которой нужно запросить данные.
     * @param {inputDataRecieved} callback Метод, который будет вызван после успешного получения данных.
     */
    get: function(request, callback) {

        return this.__base(
            {part: request},
            function(data) {
                callback.call(this, {items: data[1], metainfo: data[2]});
            });

    }

});

/**
 * @callback inputDataRecieved
 * @param {Object}   data          Данные ответа.
 * @param {String[]} data.items    Подсказки для саджеста.
 * @param {Object}   data.metainfo Мета-информация о запросе.
 */

/* ../../../../common.blocks/input/__dataprovider/input__dataprovider.js end */
;
/* ../../../../common.blocks/popup/popup.js begin */
(function($) {

var bro = $.browser,
    isOpera = bro.opera && bro.version < 13,
    KEYDOWN_EVENT = (bro.opera && bro.version < 12.10) ? 'keypress' : 'keydown',
    /**
     * Шоткаты для некоторых методов.
     */
    hasOwn = Object.prototype.hasOwnProperty,
    BEMDOM = BEM.DOM,

    // NOTE: Используется _generateDirections.
    generateDirectionsCache,

    // https://st.yandex-team.ru/ISLCOMPONENTS-180
    needRepaintShadow = bro.msie && bro.version >= 9 && bro.version < 10,

    getActiveElement = function(doc) {
        try {
            return doc.activeElement;
        } catch(e) {
        }
    };

/**
 * Popup - блок для создания выпадающих элементов интерфейса или модальных окон.
 *
 * @param {String|Object} [directions]                 Может быть строкой,
 *                                                     устанавливающей направление раскрытия попапа или
 *                                                     объектом с параметрами.
 *
 * @param {String}        [directions='bottom']        Если указана строка, то будет задано напрвление раскрытия попапа.
 *                                                     Допустимые значения: 'top', 'bottom', 'right', 'left'.
 *
 * @param {Object}        [directions]                 Направления раскрытия попапа
 *                                                     (не учитывается для модального окна).
 * @param {String}         directions.to               Сторона раскрытия попапа.
 *                                                     Допустимые значения: `top`, `bottom`, `left`, `right`.
 * @param {String}        [directions.axis]            Ось попапа. Допустимые значения:
 *                                                    `left`, `right`, `center`, `middle`, `bottom`, `top`.
 * @param {Object|Number} [directions.offset]          Смещение попапа по направлениям `top`, `right`, `bottom`, `left`
 *                                                     относительно центра `owner`.
 *                                                     Если указано число, то это значение будет раскрыто для
 *                                                     всех направлений.
 *
 * @param {String}        [directions.tail]            Параметры хвоста в контексте направления раскрытия.
 * @param {String}        [directions.width=24.04]     Ширина хвоста.
 * @param {String}        [directions.height=12.02]    Высота хвоста.
 * @param {String}        [directions.tail.axis]       Ось хвоста попапа.
 * @param {Object|Number} [directions.tail.offset]     Смещение хвоста по направлениям `top`, `right`, `bottom`, `left`
 *                                                     относительно центра `owner`.
 *                                                     Если указано число, то это значение будет раскрыто для
 *                                                     всех направлений.
 *
 * @param {Object}        [directions.position]        Фиксированное положение попапа.
 * @param {Number}        [directions.position.top]    Фиксированное положение попапа по вертикали.
 * @param {Number}        [directions.position.left]   Фиксированное положение попапа по горизонтали.
 */
BEMDOM.decl('popup',  {

    /**
     * Генерируется при показе блока.
     *
     * Если включена анимация, то генерируется сразу
     * в момент ее начала.
     *
     * @event popup#show
     */

    /**
     * Генерируется при скрытии блока.
     *
     * Если включена анимация, то генерируется по ее
     * окончании.
     *
     * @event popup#hide
     */

    /**
     * Возвращает параметры блока по умолчанию.
     *
     * @protected
     * @returns {Object}
     */
    getDefaultParams: function() {

        var tailOffset = {
                left: 15,
                right: 15,

                top: 15,
                bottom: 15
            };

        return {
            directions: [ // FIXME: Острова 2.0 выпилить в пользу _generateDirections при мердже параметров
                {
                    to: 'bottom',
                    axis: 'center',
                    tail: {axis: 'center'}
                },
                {
                    to: 'top',
                    axis: 'center',
                    tail: {axis: 'center'}
                },
                {
                    to: 'right',
                    axis: 'middle',
                    tail: {axis: 'middle'}
                },
                {
                    to: 'left',
                    axis: 'middle',
                    tail: {axis: 'middle'}
                }
            ],
            tail: {
                // Размеры указываются такими, какими они будут если попап будет открыт вниз.
                // Тоесть хвост будет наверху.
                // В направлениях left, right они свапаются.
                width: 24.04,
                height: 12.02,
                offset: tailOffset
            },
            duration: 150
        };

    },

    /**
     * @private
     */
    onSetMod: {

        'js': function() {

            /**
             * Кэш размеров и позиций
             *
             * @private
             * @type {Object}
             */
            this._cache = {};

            /**
             * Вьюпорт для попапа, в котором он должен быть виден (DOM-нода или window).
             * Блок будет менять направление раскрытия на наилучшее по фактору попадания в _viewport.
             *
             * @private
             * @type {jQuery}
             */
            this._viewport = BEMDOM.win;

            /**
             * Ссылка на скоуп (по умолчанию `body`).
             * Когда блок показывается он смотрит, является ли он последним
             * потомком скоупа.
             *
             * @private
             * @type {BEM}
             */
            this._scope = BEMDOM.scope;

            /**
             * Канал для управления всеми открытыми блоками на странице.
             *
             * @private
             */
            this._channel = BEM.channel('popups');

            /**
             * Перенесен ли попап в контейнер.
             * По умолчанию все попапы переносятся в скоуп (`body` или `div`),
             * но есть исключения. Например, фиксированный попап.
             * Если блок обнаруживает, что его родитель — фиксированный попап,
             * то он переместит себя внутрь элемента `content` родителя.
             *
             * @private
             * @type {Boolean}
             */
            this._inContainer = false;

            /**
             * У родительского попапа фиксированное позиционирование?
             * @private
             * @type {Boolean}
             */
            this._isParentFixed = false;

            /**
             * DOM-элемент, для которого открывается блок.
             * @private
             * @type {jQuery}
             */
            this._owner = null;

            /**
             * Переданные пользователем координаты для отображения блока.
             * @private
             * @type {Object}
             */
            this._userPosition = null;

            /**
             * Родитель блока.
             * @private
             * @type {BEM}
             */
            this._parent = null;

            /**
             * Потомки блока.
             * @private
             * @type {Array}
             */
            this._childs = [];

            /**
             * Состояние видимости.
             * @private
             * @type Boolean
             */
            this._isShown = false;

            /**
             * Находится ли блок в состоянии анимированного скрытия.
             * (Анимация асинхронна)
             * @private
             * @type {Boolean}
             */
            this._isHiding = false;

            /**
             * Посчитанные позиции блока на странице(без учета полного помещения во вьюпорт).
             * @private
             * @type {Object}
             */
            this._positions = {};

            /**
             * Содержит текущую позицию, которая была рассчитана или передана пользователем явно.
             * @private
             * @type {Object}
             */
            this._currPos = {};

            /**
             * Текущий показатель видимости.
             * @private
             * @type {Nubmer}
             */
            this._visibilityFactor = null;

            /**
             * Направление раскрытия.
             * @private
             * @type {Boolean|Object}
             */
            this._direction = false;

            /**
             * Направления открытия блока.
             * @private
             * @type {Object}
             */
            this._directions = {};

            var defaultParams = this.getDefaultParams(),
                userParams = this.params,

                defaults = this._repackDirParams(defaultParams.directions),
                directions = userParams.generateDirections ? this._generateDirections: userParams.directions,
                user = this._repackDirParams(directions);
                // FIXME: Острова 2.0
                // Если направления не указаны, то вызываем _generateDirections не смотря на наличие
                // userParams.generateDirections

            if(userParams.tail) {
                this.params.tail = this._mergeParams(defaultParams.tail, userParams.tail);
            }

            /**
             * Направления открытия блока по приоритету.
             * @private
             * @type {String[]}
             */
            this._order = user.keys.map(function(key) {
                var userDirection = user.directions[key],
                    defaultDirection = defaults.directions[key];

                defaultDirection ||
                    (defaultDirection = defaults.directions[userDirection.to]);

                this._directions[key] = this._mergeParams(defaultDirection, userDirection, {
                    tail: this._tailParamsHook
                });

                return key;

            }, this);

        },

        'visibility': {

            'visible': function() {
                this._onShown();
            },

            '': function() {
                this._onHidden();
            }

        }

    },

    /**
     * Показывает popup.
     *
     * В зависимости от переданных параметров может быть показан как выпадающий элемент
     * либо как модальное окно.
     *
     * Показ блока относительно другого блока:
     *
     * ```javascript
     * popup.show(otherBlock);
     * ```
     *
     * Показ блока относительно DOM-элемента:
     *
     * ```javascript
     * popup.show($('.some-class');)
     * ```
     *
     * Показ блока, в заданной позиции:
     *
     * ```javascript
     * popup.show({top: 100, left: 100});
     * ```
     *
     * Если параметры не переданы, просто завершает работу не показывая блок.
     *
     * В случае, если установлен модификатор `_animate_yes` и не
     * установлен модификатор `_fade-in_no`, проигрывает анимацию.
     *
     * Устанавливает модификатор `_visibility_visible` и генерирует событие `show`
     * до начала анимации.
     *
     * @public
     * @param {jQuery|BEM|Object} [params] Объект jQuery, i-bem блок или позиция
     * попапа. В первых двух случаях позиция расчитывается соответственно параметру directions
     * относительно DOM-элемента или блока.
     * @param {Number} params.top Отступ сверху, в пикселях
     * @param {Number} params.left Отступ слева, в пикселях
     * @returns {BEM.DOM}
     */
    show: function(params) {

        var owner;

        if(params instanceof BEM) {
            owner = params.domElem.eq(0);
        } else if(params instanceof $) {
            owner = params;
        } else if(!params) {
            return;
        }

        /**
         * NOTE: Если нет `owner`, то в `params` хэш с left, top
         */
        if(owner) {
            if(this._owner && owner[0] !== this._owner[0]) {
                this.delMod('visibility');
            }

            this._owner = owner;

            var parent = this.findBlockOutside(owner, 'popup');
            parent && this.setParent(parent);
        } else {
            this._userPosition = params;
        }

        /**
         * NOTE: Необходимо показать блок для подсчета его размеров.
         */
        return this.setMod('visibility', 'outside').repaint();

    },

    /**
     * Скрывает popup и все его дочерние попапы.
     *
     * В случае, если установлен модификатор `_animate_yes` и не
     * установлен модификатор `_fade-out_no`, проигрывает анимацию.
     *
     * Удаляет модификатор `visibility` и генерирует событие `hide`
     * по окончании анимации, если анимация включена, или моментально,
     * если анимация выключена.
     *
     * @public
     * @returns {BEM.DOM}
     */
    hide: function() {

        if(this._isHiding) {
            return this;
        }

        if(this._isShown) {
            this._isHiding = true;

            this._childs.forEach(function(child) {
                child.hide();
            });

            if(this.hasMod('animate', 'yes') && !this.hasMod('fade-out', 'no')) {
                var _this = this;

                this.beforeHide(function() {
                    _this.domElem && _this.delMod('visibility');
                });

                return this;
            }
        }

        return this.delMod('visibility');

    },

    /**
     * Показывает блок, если он скрыт или скрывает его, если он показан.
     *
     * В зависимости от текущего соcтояния, вызывает либо `show`, либо `hide`.
     *
     * Если установлен модификатор _animate_yes, прогрывает анимацию. По отдельности
     * анимацию показа и скрытия можно также отключить при помощи модификаторов
     * `_fade-in_no` и `_fade-out_no` соответственно.
     *
     * Устанавливает модификатор `visibility` в значение `visible` или удаляет его по окончании
     * анимации (или моментально, если соответствующая анимация отключена).
     *
     * @public
     * @param {jQuery|BEM|Object} [owner] DOM-элемент или блок относительно которых расчитывается позиция
     * блока или явно заданные координаты { left : x, top : y }. Используется только при показе.
     * Если не передан, будет использовано предыдущее значение DOM-элемента или блока,
     * использованное при вызове popup#show или popup#toggle. Если это первый вызов или
     * предыдущий вызов использовал координаты для задания позиции, метод завершит выполнение
     * и не покажет блок (будет исправлено в [ISLCOMPONENTS-546](http://st/ISLCOMPONENTS-546)).
     * @param {Number} param.top отступ сверху, в пикселях
     * @param {Number} param.left отступ слева, в пикселях
     */
    toggle: function(owner) {

        return (this._isShown && !this._isHiding)
            ? this.hide()
            : this.show(owner || this._owner);

    },

    /**
     * Перерисовывает блок.
     *
     * При вызове направление раскрытия будет выбрано заново согласно
     * js-параметрам блока и текущему `viewport`.
     *
     * Eсли блок в момент вызова скрыт, он будет показан в своей предыдущей позиции.
     *
     * @public
     * @returns {BEM.DOM}
     */
    repaint: function() {

        this._moveToContainer();

        var direction = this._pickDirection();

        this.setMod('to', direction.to)
            ._show(
                this._positions[direction.key],
                this._tailPos && this._tailPos[direction.key]);

        return this;

    },

    /**
     * Вызывает перерисовку для тени в IE9.
     *
     * Нужно вызвать сразу после смены контента в попапе (в текущем тике eventloop, не в следующем).
     * https://st.yandex-team.ru/ISLCOMPONENTS-180
     *
     * @public
     * @returns {BEM.DOM}
     */
    repaintShadowIfNeeded: function() {

        needRepaintShadow && this._repaintShadow();

        return this;

    },

    /**
     * Возвращает текущую позицию блока.
     *
     * @public
     * @returns {Object} Объект с координатами `left`, `top`, которые содержат координаты
     * блока в пикселях.
     *
     */
    getCurrPos:  function() {
        return this._currPos;
    },

    /**
     * Возвращает настройки текущего направления раскрытия.
     *
     * @public
     * @returns {Object|Boolean} Возвращает `false` если направление не было рассчитано
     * или у этого блока нет направления(пример: popup_position_fixed)
     */
    getCurrDirection: function() {
        return this._direction;
    },

    /**
     * Устанавливает содержимое блока.
     *
     * @public
     * @param {String|jQuery} content jQuery-элемент или строка, используемые в качестве содержимого.
     * @returns {BEM.DOM}
     */
    setContent: function(content) {

        BEMDOM.update(this.elem('content'), content);
        this._resetDefault();
        this._isShown && this.repaint();

        return this;

    },

    /**
     * Возвращает `true`, если блок в данный момент видим.
     *
     * Блок считается видимым начиная с момента начала
     * fade-in анимации и перстает быть видимым в момент
     * окончания fade-out анимации.
     *
     * @public
     * @returns {Boolean}
     */
    isShown: function() {
        return this._isShown;
    },

    /**
     * Устанавливает родительский попап.
     *
     * Дочерние попапы автоматически закрываются при закрытии родителя.
     * Связь автоматически удалится при скрытии дочернего попапа.
     *
     * @public
     * @param {BEM.DOM} parent родительский попап
     * @returns {BEM.DOM}
     */
    setParent: function(parent) {
        this._parent = parent;

        this._isParentFixed = parent.hasMod('position', 'fixed');

        parent.addChild(this);

        return this;
    },

    /**
     * Добавляет дочерний попап к этому блоку.
     *
     * Дочерние попапы автоматически закрываются при закрытии родителя.
     * Связь автоматически удалится при скрытии дочернего попапа.
     *
     * @public
     * @param {BEM.DOM} child Дочерний попап.
     * @return {BEM.DOM} Дочерний попап.
     */
    addChild: function(child) {

        var childs = this._childs,
            len = childs.length,
            i = 0;

        for(; i < len; i++) {
            if(childs[i]._uniqId === child._uniqId) {
                return;
            }
        }

        // FIXME: отписываться от событий дочернего попапа
        child.on('hide', function() {
            this.removeChild(child);
        }, this);

        childs.push(child);

    },

    /**
     * Разрывает связь с дочерним попапом.
     *
     * При этом дочерний попап становится независимым и больше не будет
     * автоматически скрываться при скрытии родителя.
     *
     * @public
     * @param {BEM.DOM} child дочерний попап
     */
    removeChild: function(child) {

        var childs = this._childs,
            len = childs.length,
            i = 0;

        for(; i < len; i++) {
            if(childs[i]._uniqId === child._uniqId) {
                childs.splice(i, 1);
                return;
            }
        }

    },

    /**
     * Устанавливает заданные размеры попапа
     *
     * @public
     * @param {Object} dimensions хэш с параметрами
     * @returns {BEM.DOM}
     */
    setSize: function(dimensions) {
        if(dimensions){
            this._resetDefault();
            this.domElem.css(dimensions);
            if(this._isShown && !this._isHiding) {
                this.repaint();
            }
        }
        return this;
    },

    /**
     * Делает блок видимым.
     *
     * @private
     * @param {Object} position CSS-свойства, описывающие положение popup.
     * @param {Object} [tailPos] CSS-свойства, описывающие положение хвоста.
     * @returns {BEM.DOM}
     */
    _show: function(position, tailPos) {

        this._currPos = position;

        tailPos &&
            this.elem('tail').removeAttr('style').css(tailPos);

        this.domElem.css(position);

        (!this._isShown || this._isHiding) &&
            (this.hasMod('animate', 'yes') && !this.hasMod('fade-in', 'no')) &&
                this.afterShow();

        this._isHiding = false;
        this.setMod('visibility', 'visible');

        return this;
    },

    /**
     * Обработчик показа блока.
     *
     * @private
     */
    _onShown: function() {

        this.bindToDoc(KEYDOWN_EVENT, function(e) {
            if(e.which === 27) {
                if(this._childs.length === 0) {
                    this.hide();
                }
            }
        });

        this._bindFocusEvents();

        this._attachUnder();

        this._isShown = true;

        /*
         * Нужно чтобы предотвратить мгновенное закрытие
         * фиксированного попапа с паранджой, если он открылся
         * по событию на кнопке, например.
         */
        if(this.hasMod('autoclosable', 'yes')) {
            this.afterCurrentEvent(function() {
                this._enableAutoclosable();
            });
        }

        if(this.hasMod('adaptive', 'yes')) {
            this._enableAdaptive();
        }

        this._channel.on('hide', this.hide, this);

        this.trigger('show');

    },

    /**
     * Обработчик скрытия блока.
     *
     * @private
     */
    _onHidden: function() {

        this._unbindFocusEvents();

        this.unbindFromDoc(KEYDOWN_EVENT);

        this._detachUnder();

        if(this.hasMod('autoclosable', 'yes')) {
            this._disableAutoclosable();
        }

        if(this.hasMod('adaptive', 'yes')) {
            this._disableAdaptive();
        }

        this._cache = {};
        this._isShown = false;
        this._isHiding = false;

        this._channel.un('hide');

        this._returnFocus();

        this.trigger('hide');

    },

    /**
     * Привязывает события слежения за фокусом.
     *
     * @protected
     */
    _bindFocusEvents: function() {

        this._lastFocused = $(getActiveElement(document) || this._scope);

        var focusable = this.__self._getFocusable(this.elem('content'));
        this._firstFocusable = focusable.first();
        this._lastFocusable = focusable.last();

        /* Фокус не должен оставаться внутри popup после его скрытия!
         *
         * При скрытии выпадушки нажатием на Escape или программно,
         * возвращаем фокус в то место, откуда его сняли при показе;
         * при клике во вне — не возвращаем. */
        this._skipReturnFocus = false;

        /* Если внутри выпадушки нет элементов, на которые можно поставить фокус,
         * то не применяем всю эту магию с зацикливанием фокуса. */
        if(this._firstFocusable.length === 0) {
            this._skipReturnFocus = true;
            return;
        }

        this
            .bindTo(this._lastFocused, 'keydown', this._onLastFocusedKeyDown)
            .bindTo(this._firstFocusable, 'keydown', this._onFirstFocusableKeyDown)
            .bindTo(this._lastFocusable, 'keydown', this._onLastFocusableKeyDown);

    },

    /**
     * Отвязывает от элемента ранее установленные события.
     *
     * Обратная функция для _bindFocusEvents().
     *
     * @protected
     */
    _unbindFocusEvents: function() {

        this.unbindFrom(this._firstFocusable, 'keydown');
        this.unbindFrom(this._lastFocusable, 'keydown');
        this.unbindFrom(this._lastFocused, 'keydown');

    },

    /**
     * Вызывается на нажатие клавиши на последнем элементе, на котором стоял фокус до того,
     * как началась магия с зацикливанием.
     *
     * @protected
     * @param {Event} e DOM-событие
     */
    _onLastFocusedKeyDown: function(e) {

        if(e.ctrlKey || e.altKey || e.metaKey) {
            return;
        }

        if(e.which === 9) { /* SHIFT+TAB */
            e.preventDefault();
            this[e.shiftKey ? '_lastFocusable' : '_firstFocusable'].focus();
        }

    },

    /**
     * Вызывается на нажатие клавиши на первом элементе, на который можно поставить фокус
     * внутри выпадушки.
     *
     * Переопределяется на модификаторе popup_position_fixed.
     *
     * @protected
     * @param {Event} e DOM-событие
     */
    _onFirstFocusableKeyDown: function(e) {

        if(e.ctrlKey || e.altKey || e.metaKey) {
            return;
        }

        if(e.shiftKey && e.which === 9) { /* SHIFT+TAB */
            e.preventDefault();
            this._lastFocused.focus();
        }

    },

    /**
     * Вызывается на нажатие клавиши на последнем элементе, на который можно поставить фокус
     * внутри выпадушки.
     *
     * Переопределяется на модификаторе popup_position_fixed.
     *
     * @protected
     * @param {Event} e DOM-событие
     */
    _onLastFocusableKeyDown: function(e) {

        if(e.shiftKey || e.ctrlKey || e.altKey || e.metaKey) {
            return;
        }

        if(e.which === 9) { /* TAB */
            e.preventDefault();
            this._lastFocused.focus();
        }

    },

    /**
     * Возвращает фокус на элемент, имевший фокус до открытия выпадушки.
     *
     * @protected
     */
    _returnFocus: function() {

        /* Если popup-родитель не возвращает фокус, то и popup-потомок тоже
         * не должен возвращать. */
        var skipReturnFocus = (this._parent || {})._skipReturnFocus || this._skipReturnFocus;

        if(!skipReturnFocus) {
            this._lastFocused.focus();
        }

    },

    /**
     * DeepMerge для доопределения параметров блока
     * Доопределяет дефолтные параметры пользовательскими
     *
     * @private
     * @param {Object} defaultParams
     * @param {Object} userParams
     * @param {Object} hooks         Список хуков, которые могут быть
     * задействованы в процессе слияния хэшей. Хук будет вызван
     * при совпадении его ключа с ключем во вливаемом хэше
     * @returns {Object}
     */
    _mergeParams: function(defaultParams, userParams, hooks) {

        var res = {};

        hooks || (hooks = {});

        if(defaultParams && typeof defaultParams === 'object') {
            Object.keys(defaultParams).forEach(function(key) {
                res[key] = defaultParams[key];
            });
        }

        Object.keys(userParams).forEach(function(key) {
            var hookRes = hasOwn.call(hooks, key)
                ? hooks[key].call(this, defaultParams[key], userParams[key])
                : userParams[key];

            if(!hookRes || typeof hookRes !== 'object' || Array.isArray(hookRes)) {
                res[key] = hookRes;
            } else if(defaultParams[key]) {
                res[key] = this._mergeParams(defaultParams[key], hookRes, hooks);
            } else {
                res[key] = hookRes;
            }

        }, this);

        return res;
    },

    /**
     * Обработчик для поля `tail` в параметрах направлений раскрытия.
     * Отвечает за наследование дефолтных отступов для элемента `tail`.
     *
     * @private
     * @param {*}    defaultParams
     * @param {*}    userParams
     * @returns {*}  userParams
     */
    _tailParamsHook: function(defaultParams, userParams) {

        if(!userParams.offset) {
            userParams.offset = this.params.tail.offset;
        }

        return typeof userParams.offset === 'number'
            ? {
                offset: {
                    left: userParams.offset,
                    top: userParams.offset
                }
            }
            : userParams;
    },

    /**
     * Генерирует список возможных направлений раскрытия.
     * Потребность возникла для popup в произвольном месте страницы
     * из-за необходимости показывать его с наибольшим попаданием во `viewport`
     * ISLCOMPONENTS-106
     *
     * @private
     * @returns [Array{Object}]
     */
    _generateDirections: function() {
        if(generateDirectionsCache) {
            return generateDirectionsCache;
        }

        var directions = [
                ['bottom', 'top'], ['left', 'right']
            ],
            axises = [
                ['center', 'left', 'right'],
                ['middle', 'top', 'bottom']
            ],
            tailAxises = axises,
            directionsLen = directions.length,
            res = [];

        for(var tier = 0; tier < directionsLen; tier++) {
            var directionsTier = directions[tier],
                tierLen = directionsTier.length;

            for(var j = 0; j < tierLen; j++) {
                var axisesTier = axises[tier],
                    axisesTierLen = axisesTier.length;

                for(var k = 0; k < axisesTierLen; k++) {
                var tailAxisesTier = tailAxises[tier],
                    tailAxisesTierLen = tailAxisesTier.length;

                    for(var l = 0; l < tailAxisesTierLen; l++) {
                        res.push({
                            direction: directionsTier[j],
                            axis: axisesTier[k],
                            tail: {
                                axis: tailAxisesTier[l]
                            }
                        });
                    }
                }
            }
        }

        generateDirectionsCache = res;
        return res;

    },

    /**
     * Переупаковывает настройки направлений из массива в объект.
     *
     * @private
     * @param {Array} dirParams
     * @returns {Object.directions} Направления раскрытия
     * @returns {Object.keys} Массив ключей направлений по убыванию приоритета
     */
    _repackDirParams: function(dirParams) {

        // XXX: Нужно как-то упростить этот метод,
        // возможно через внесение некой внутренней терминологии.

        var directions = {},
            keys = [];

        /**
         * 'bottom-left'
         * { to: 'bottom' }
         */
        if(typeof dirParams === 'string' || $.isPlainObject(dirParams)) {
            dirParams = [dirParams];
        }

        keys = dirParams.map(function(direction) {

            /**
             * [ 'bottom', 'top' ]
             */
            if(typeof direction === 'string') {
                var keys = direction.split('-');

                direction = {to: keys[0], tail: {}};
                keys[1] && (direction.axis = keys[1]);
                keys[2] && (direction.tail.axis = keys[2]);
            }

            var key = direction.to;

            if(!directions[key]) {
                directions[key] = direction;
            }

            if(direction.axis) {
                key += '-' + direction.axis;
            }

            direction.key = key;
            directions[key] = direction;

            return key;

        }, this);

        return {directions: directions, keys: keys};

    },

    /**
     * Устанавливает элемент-"окно", в которое попап должен быть вмещен.
     *
     * Если элемент задан, то при показе будет выбрано такое
     * направление раскрытия (из разрешенных), при котором максимальная
     * площадь попапа уместится внутри окна.
     *
     * Метод НЕ вызывает перерисовку. В случае, если на момент вызова блок
     * уже показывается позиция пересчитана не будет.
     *
     * @public
     * @param {jQuery} viewport DOM-элемент, в который должен вместиться попап.
     * @returns {BEM.DOM}
     */
    setViewport: function(viewport) {
        this._viewport = viewport;
        return this;
    },

    /**
     * Выбирает направление для раскрытия.
     *
     * @private
     * @returns {Object} Направление раскрытия.
     */
    _pickDirection: function() {

        // FIXME: Подумать как можно красивее и правильней реализовать этот метод

        var order = this._order,
            len = this.hasMod('adaptive', 'yes') ? order.length : 1,
            i;

        /**
         * NOTE: Нужно обнулить, потому что мы не знаем, на сколько изменилось окно браузера.
         */
        this._visibilityFactor = 0;

        for(i = 0; i < len; i++) {
            var key = order[i],
                direction = this._directions[key];

            this
                ._resetPos(key)
                ._pushPos(key, this._calcPos(direction))
                ._pushPos(key, this._calcOffsets(direction));

            this._hasTail() &&
                this
                    ._resetTailPos(key)
                    ._pushTailPos(key, this._calcTailPos(direction))
                    ._pushTailPos(key, this._calcTailOffset(direction))
                    ._pushPos(key, this._calcOffsetByTail(direction));

            this._pushPos(key, this._getParentOffset());

            var visibilityFactor = this._calcVisibilityFactor(direction);

            if(visibilityFactor > this._visibilityFactor || !this._direction) {
                this._visibilityFactor = visibilityFactor;
                this._direction = this._directions[key];
                this.size = this.getPlacingSize();
                if(visibilityFactor === 100) {
                    break;
                }
            }

        }

        return this._direction;

    },

    /**
     * Если у родительского элемента есть смещение, то возвращает его.
     * Относительное позиционирование ломает отображение если у body есть margin, например
     * LEGO-8709
     *
     * @private
     * @returns {Object}
     */
    _getParentOffset: function() {

        var offset = this.domElem.offsetParent().offset();
            //position = parent.position();

        //if(position.left > 0 && position.top > 0) {
            /**
             * NOTE: Фикс для IE7, в котором offset() при наличии margin удваивается о_О
             * а position при этом больше 0
             */
            //offset.left = position.left;
            //offset.top = position.top;
        //}

        offset.left *= -1;
        offset.top *= -1;

        return offset;

    },

    /**
     * Подсчитывает позицию блока в указанном направлении.
     *
     * @private
     * @param {Object} direction Параметры открытия блока
     * @returns {Object}
     */
    _calcPos: function(direction) {
        this._calcPlacingSize(direction);

        var ownerPos = this.getOwnerPos(),
            ownerSize = this.getOwnerSize(),
            popupSize = this.getPlacingSize(),

            axis = direction.axis,

            userPos = this.params.position || {},

            position = {};

        switch(direction.to) {
            case 'bottom' :
                position = {
                    top: hasOwn.call(userPos, 'top')
                        ? userPos.top
                        : ownerPos.top + ownerSize.height,
                    left: hasOwn.call(userPos, 'left')
                        ? userPos.left
                        : this._calcLeft(axis)
                };

                break;

            case 'top' :
                position = {
                    top: hasOwn.call(userPos, 'top')
                        ? userPos.top
                        : ownerPos.top - popupSize.height,
                    left: hasOwn.call(userPos, 'left')
                        ? userPos.left
                        : this._calcLeft(axis)
                };

                break;

            case 'left' :
                position = {
                    top: hasOwn.call(userPos, 'top')
                        ? userPos.top
                        : this._calcTop(axis),
                    left: hasOwn.call(userPos, 'left')
                        ? userPos.left
                        : ownerPos.left - popupSize.width
                };

                break;

            case 'right' :
                position = {
                    top: hasOwn.call(userPos, 'top')
                        ? userPos.top
                        : this._calcTop(axis),
                    left: hasOwn.call(userPos, 'left')
                        ? userPos.left
                        : ownerPos.left + ownerSize.width
                };

                break;

        }

        return position;

    },

    /**
     * Подсчитывает вертикальную координату по оси.
     *
     * @private
     * @param {String} axis Имя оси для рассчетов.
     * @returns {Number}
     */
    _calcTop: function(axis) {

        var top = 0,
            popupSize = this.getPlacingSize(),
            ownerPos = this.getOwnerPos(),
            ownerSize = this.getOwnerSize();

        if(axis === 'top') {
            top += ownerPos.top;
        } else if(axis === 'middle') {
            top += (ownerPos.top + ownerSize.height / 2) - popupSize.height / 2;
        } else if(axis === 'bottom') {
            top += (ownerPos.top + ownerSize.height) - popupSize.height;
        }

        return top;

    },

    /**
     * Подсчитывает горизонтальную координату по оси.
     *
     * @private
     * @param {String} axis Имя оси для рассчетов.
     * @returns {Number}
     */
    _calcLeft: function(axis) {

        var left = 0,
            popupSize = this.getPlacingSize(),
            ownerPos = this.getOwnerPos(),
            ownerSize = this.getOwnerSize();

        if(axis === 'left') {
            left += ownerPos.left;
        } else if(axis === 'center') {
            left += (ownerPos.left + ownerSize.width / 2) - popupSize.width / 2;
        } else if(axis === 'right') {
            left += (ownerPos.left + ownerSize.width) - popupSize.width;
        }

        return left;

    },

    /**
    * Возвращает размер области, на которую необходимо разместить попаа
    * @public
    * @returns {Object} Размеры
    */
    getPlacingSize: function() {
        return this.getPopupSize();
    },

    /**
     * Подсчитывает и кэширует смещение блока по указанным параметрам.
     *
     * @private
     * @param {Object} direction
     * @returns {Object} Отступы.
     */
    _calcOffsets: function(direction) {

        var cache = this._cache.offset || (this._cache.offset = {}),
            key = direction.key,
            offsetParams = direction.offset,
            offset;

        if(cache[key]) {
            return cache[key];
        }

        if(!offsetParams) {
            return false;
        }

        offset = {
            left: 0,
            top: 0
        };

        if(typeof offsetParams === 'number') {
            switch(key){
                case 'left':
                    offset.left += offsetParams;
                    break;

                case 'right':
                    offset.left -= offsetParams;
                    break;

                case 'top':
                    offset.top += offsetParams;
                    break;

                case 'bottom':
                    offset.top -= offsetParams;
                    break;
            }
        } else {
            if(offsetParams.left) {
                offset.left += offsetParams.left;
            }

            if(offsetParams.right) {
                offset.left -= offsetParams.right;
            }

            if(offsetParams.top) {
                offset.top += offsetParams.top;
            }

            if(offsetParams.bottom) {
                offset.top -= offsetParams.bottom;
            }

        }
        cache[key] = offset;

        return offset;

    },

    /**
     * Проверяет, есть ли у блока хвост.
     *
     * @private
     * @returns {Boolean}
     */
    _hasTail: function() {
        return this.elem('tail').length !== 0;
    },

    /**
     * Перемещает попап в конец скоупа.
     * По умолчанию это скоуп (`body` или `div`), но наш родитель — модальное окно
     * (фиксированный попап), то контейнером будет он.
     *
     * @param {jQuery} [container] Контейнер для блока.
     * @private
     */
    _moveToContainer: function(container) {

        if(container) {
            // если передан контейнер сбрасываем флаг о нахождении попапа в контейнере
            this._inContainer = false;
        } else {
            if(this._isShown) {
                // если попап уже показан, не нужно пытаться перенести его в конец _старого_ скоупа
                // https://st.yandex-team.ru/ISLCOMPONENTS-1064
                return;
            }

            container = this._parent ? this._parent.domElem : this._scope;
        }

        this.domElem.appendTo(container);
        this._inContainer = true;

    },

    /**
     * Обнуляет позицию во внутреннем хранилище.
     *
     * @private
     * @param {String} key Ключ позиции.
     * @returns {BEM.DOM}
     */
    _resetPos: function(key) {

        key ? this._positions[key] = null : this._positions = {};

        return this;
    },

    /**
     * Смещает начало координат на указанную величину.
     *
     * @private
     * @param {Object} target   Координаты, к которым применяется смещение.
     * @param {String} [key]    Уникальный ключ направления.
     * @param {Object} offset   Объект, описывающий позицию для смещения.
     */
    _pushPosTo: function(target, key, offset) {

        if(offset === false) {
            return;
        }

        if(typeof key === 'string') {
            this._sum(target[key] || (target[key] = {}), offset);
        } else {
            offset = key;

            Object.keys(target).forEach(function(key) {
                this._sum(target[key], offset);
            }, this);
        }

    },

    /**
     * Смещает позицию блока на указанные во втором аргументе координаты с учётом текущей позиции.
     *
     * @private
     * @param {String} [key]   Уникальный ключ направления.
     * @param {Object} offset  Объект, описывающий позицию для смещения.
     * @returns {BEM.DOM}
     */
    _pushPos: function(key, offset) {

        this._pushPosTo(this._positions, key, offset);

        return this;

    },

    /**
     * Складывает числовые значения в объектах.
     *
     * @private
     * @param {Object} source   Объект с исходными числами.
     * @param {Object} adds     Объект с прибавляемыми числами.
     */
    _sum: function(source, adds) {

        Object.keys(adds).forEach(function(key) {
            source[key] = (source[key] || 0) + adds[key];
        });

    },

    /**
     * Получает размер указанного DOM-элемента.
     *
     * @private
     * @param {jQuery} domElem
     * @returns {Object}
     */
    _getSizeOf: function(domElem) {

        return {
            height: domElem.outerHeight(),
            width: domElem.outerWidth()
        };

    },

    /**
     * Получает и кэширует размер owner.
     *
     * @private
     * @returns {Object}
     */
    getOwnerSize: function() {

        return this._owner
            ? this._cache.ownerSize || (this._cache.ownerSize = this._getSizeOf(this._owner))
            : {
                height: 0,
                width: 0
            };

    },

    /**
     * Получает и кэширует размер popup.
     *
     * @private
     * @returns {Object}
     */
    getPopupSize: function() {

        return this._getSizeOf(this.domElem);

    },

    /**
     * Получает позицию указанного DOM-элемента.
     *
     * @private
     * @param {jQuery} domElem
     * @returns {Object}
     */
    _getPosOf: function(domElem) {

        /**
         * XXX: Если брать offset window, то возвращается null
         */
        return domElem.offset() || {
            left: 0,
            top: 0
        };

    },

    /**
     * Получает позицию owner.
     *
     * @private
     * @returns {Object}
     */
    getOwnerPos: function() {

        var pos;

        if(this._owner) {
            pos = this._getPosOf(this._owner);

            //XXX: IE 10 Scale fix (https://st.yandex-team.ru/ISLCOMPONENTS-13)
            if('pageYOffset' in window) {
                //Обычно эти разности равны 0, так что не IE и не заметит.
                pos.top -= (window.pageYOffset - (document.documentElement.scrollTop || document.body.scrollTop));
                pos.left -= (window.pageXOffset - (document.documentElement.scrollLeft || document.body.scrollLeft));
            }
        }

        return pos || this._userPosition;

    },

    /**
     * Подсчитывает "видимость" блока на странице.
     *
     * @private
     * @param {Object} direction   Параметры направления раскрытия.
     * @returns {Number}
     */
    _calcVisibilityFactor: function(direction) {

        var viewport = this._viewport,
            viewportSize = this._getSizeOf(viewport),
            popupSize = this.getPopupSize(),
            popupPos = this._positions[direction.key],

            parentOffset = this._parent ? this._parent.domElem.offset() : {
                top: 0,
                left: 0
            },

            top = popupPos.top + (this._isParentFixed ? parentOffset.top : -viewport.scrollTop()),
            left = popupPos.left + (this._isParentFixed ? parentOffset.left : -viewport.scrollLeft()),
            right = (left + popupSize.width) - viewportSize.width,
            bottom = (top + popupSize.height) - viewportSize.height,

            visibleRect = {
                height: popupSize.height,
                width: popupSize.width
            },

            popupArea,
            visibleArea,
            visibility = 100;

        if(bottom > 0) {
            visibleRect.height -= bottom;
        }

        if(top < 0) {
            visibleRect.height += top;
        }

        if(left < 0) {
            visibleRect.width += left;
        }

        if(right > 0) {
            visibleRect.width -= right;
        }

        if(visibleRect.height < 0 || visibleRect.width < 0) {
            visibility = 0;
        } else {
            visibleArea = Math.abs(visibleRect.height * visibleRect.width);
            popupArea = popupSize.height * popupSize.width;

            popupArea !== visibleArea &&
                (visibility = (visibleArea / popupArea) * 100);
        }

        return visibility;

    },

    /**
     * @private
     */
    _repaintShadow: function() {

        if(typeof this._repaintShadowCounter === 'undefined') {
            this._repaintShadowCounter = 0;
        }

        this.domElem.css('zoom', ++this._repaintShadowCounter & 1);

    },

    /**
     * Уничтожает блок и его потомков.
     *
     * @public
     * @returns {BEM.DOM}
     */
    destruct: function() {

        var args = arguments;

        this._channel.un('hide');

        this._childs.forEach(function(child) {
            child.destruct.apply(child, args);
        });

        return this.__base.apply(this, args);

    },

    /**
     * Заглушки для модификатора autosize
     *
     * @private
     */
    _resetDefault: function(){},
    _calcPlacingSize: function(){}

}, {

    live: function() {

        this.liveBindTo('close', 'leftclick tap', function() {
            this.hide();
        });

    },

    /**
     * Возвращает список элементов, на которые можно поставить фокус.
     *
     * При открытом popup, нажатием TAB, необходимо поставить фокус на любой элемент, который
     * может получить фокус внутри popup.
     *
     * @private
     * @param {jQuery} domElem откуда начать поиск элементов, на которые можно сфокусироваться.
     * @return {jQuery}
     */
    _getFocusable: function(domElem) {

        /* Ставим на domElem какой-нибудь id, чтобы знать, что выше этого элемента не следует искать
         * родителей с display:none. */
        var id = $.data(domElem, 'popup-getFocusable-id');
        if(!id) {
            id = $.identify();
            $.data(domElem, 'popup-getFocusable-id', id);
        }

        id = '*[data-popup-getFocusable-id="' + id + '"]';

        var link = isOpera ? '' : 'a[href], link, ';

        return domElem.find(link + '*[tabindex], button, input:not([type="hidden"]), textarea, select, menuitem')
            .filter(function() {
                var $this = $(this),
                    res = true;

                /* На элементы с отрицательным tabindex нельзя поставить фокус.
                 * visibility наследуется. */
                if(parseInt($this.prop('tabindex'), 10) < 0 || $this.css('visibility') === 'hidden') {
                    return false;
                }

                /* Нельзя поставить фокус в скрытый родителем элемент. */
                $(this).parentsUntil(id).each(function() {
                    var $this = $(this);
                    if($this.css('display') === 'none') {
                        res = false;
                        return res;
                    }
                });

                return res;
            });

    }
});

})(jQuery);

/* ../../../../common.blocks/popup/popup.js end */
;
/* ../../../../common.blocks/popup/_autoclosable/popup_autoclosable_yes.js begin */
/**
 * Попап, автоматически закрывающийся при нажатии за его пределами.
 *
 */
BEM.DOM.decl('popup', {

    /**
     * Генерируется при клике за пределами попапа.
     *
     * По окончании обработки события блок будет скрыт. Для того, чтобы
     * отменить это поведение и оставить блок видимым, можно воспользоваться
     * методом event.preventDefault().
     *
     * @event popup_autoclosable_yes#click-outside
     * @param {DOMEvent} domEvent DOM-событие нажатия
     */

    /**
     * @private
     */
    onSetMod: {
        autoclosable: {
            yes: function() {
                this._enableAutoclosable();
            },
            '': function() {
                this._disableAutoclosable();
            }
        }
    },

    /**
     * Биндится на события, прячет блок при клике по не связанным элементам\блокам.
     *
     * @private
     */
    _enableAutoclosable: function() {

        var under = this._under;

        if(this.hasMod(under, 'type', 'paranja')) {
            /*
             * NOTE: contentWindow, contentWindow.document для разных браузеров
             * Некоторые не обрабатывают клик на contentWindow
             * Отписываться от события leftclick здесь не нужно
             */
            under.is('iframe') &&
                (under = $([under[0].contentWindow, under[0].contentWindow.document]));

            this.bindTo(under, 'leftclick tap', function(e) {
                e.stopPropagation();
                this.hide();
            });

            this.bindTo(under, 'mousedown', function() {
                /* Не возвращаем фокус после клика или касания. */
                this._skipReturnFocus = true;
            });
        }

        this.bindToDoc('leftclick tap', function(domEvent) {
            if(this._isRelatedNode($(domEvent.target))) {
                return;
            }

            var e = $.Event('outside-click');
            this.trigger(e, domEvent);
            if(!e.isDefaultPrevented()) {
                this.hide();
            }
        });

        this.bindToDoc('mousedown', function() {
            /* Не возвращаем фокус после клика или касания.
             *
             * Используем mousedown, поскольку фокус может быть установлен
             * в input, находящийся вне popup (например, suggest),
             * с которого blur придёт раньше, чем click (клик во вне
             * снимет фокус, а мы его обратно вернём). */
            this._skipReturnFocus = true;
        });

    },

    /**
     * Отписывается от событий.
     *
     * @private
     */
    _disableAutoclosable: function() {

        if(this.hasMod(this._under, 'type', 'paranja')) {
            this.unbindFrom(this._under, 'leftclick tap mousedown');
        }

        this.unbindFromDoc('leftclick tap mousedown');

    },

    /**
     * Проверяет, является ли нода родственной.
     * Метод ищет в потомках блока, owner и самом себе.
     * Применяется для предотвращения закрытия блока при
     * клике на родственных ему блоках\элементах.
     *
     * @private
     * @param {jQuery} node - что искать
     * @return {Boolean}
     */
    _isRelatedNode: function(node) {
        var isSimpleRelation = this.containsDomElem(node);

        if(!isSimpleRelation) {
            isSimpleRelation = Boolean(this._owner) && this.containsDomElem.call({
                domElem: this._owner
            }, node);
        }

        if(isSimpleRelation) {
            return true;
        }

        var len = this._childs.length,
            i;

        for(i = 0; i < len; i++) {
            if(this.containsDomElem.call({
                domElem: this._childs[i].domElem
            }, node)) {
                return true;
            }
        }

        return false;
    }

});

/* ../../../../common.blocks/popup/_autoclosable/popup_autoclosable_yes.js end */
;
/* ../../../../common.blocks/popup/_adaptive/popup_adaptive_yes.js begin */
/**
 * Попап, автоматически меняющий направление
 * раскрытия при изменении размеров окна браузера или прокрутке.
 *
 * Направление выбирается из js-параметра `directions` таким образом, чтобы
 * на экране отображалась максимум содержимого попапа.
 */
BEM.DOM.decl({
    block: 'popup',
    modName: 'adaptive',
    modVal: 'yes'
}, {

    onSetMod: {

        'adaptive': {
            'yes': function() {
                this._enableAdaptive();
            },

            'no': function() {
                this._disableAdaptive();
            }
        },

        'watch-scroll': {
            'yes': function() {
                this._watchScroll();
            },
            'no': function() {
                this._unwatchScroll();
            }
        }

    },

    /**
     * Включает адаптивность блока.
     *
     * @private
     */
    _enableAdaptive: function() {

        this.bindToWin('resize', $.throttle(this.onResize, 500, this))
            ._watchScroll();

    },

    /**
     * Отключает адаптивность блока.
     *
     * @private
     */
    _disableAdaptive: function() {

        this.unbindFromWin('resize')
            ._unwatchScroll();

    },

    /**
     * Возвращает массив с именами событий скрола.
     * Сделал так для удобного доопределения с уровня тачей.
     *
     * @protected
     * @returns {Array}
     */
    getScrollEvents: function() {
        return ['scroll'];
    },

    /**
     * Подписывается на событие `scroll` если у блока отстутствует модификатор
     * `watch-scroll_no`.
     *
     * @private
     */
    _watchScroll: function() {

        if(this._owner && !this.hasMod('watch-scroll', 'no')) {
            this.bindTo(
                this._owner.parents().add(this._viewport),
                this.getScrollEvents().join(' '),
                $.throttle(this.onScroll, 500, this),
                this);
        }

    },

    /**
     * Отписывается от получения событий `scroll`.
     *
     * @private
     */
    _unwatchScroll: function() {

        this._owner &&
            this.unbindFromDomElem(
                this._owner.parents().add(this._viewport),
                this.getScrollEvents().join(' '));

    },

    /**
     * Обработчик события `resize`
     * Подчищает кэши, инициирует перерисовку блока.
     *
     * @param {Event} e
     * @private
     */
    onResize: function(e) {

        this._cache = {};

        if(this._isShown && !this._isHiding) {
            this.repaint();
        }

    },

    /**
     * Обработчик события `scroll`.
     * Подчищает кэши, инициирует перерисовку блока.
     *
     * @param {Event} e
     * @public
     */
    onScroll: function(e) {

        this._cache = {};

        if(this._isShown && !this._isHiding) {
            this.repaint();
        }

    },

    /**
     * Уничтожает блок, выключает адаптивность (отписывается от события `scroll` на DOM-элементе блока).
     */
    destruct: function() {
        this._disableAdaptive();
        this.__base.apply(this, arguments);
    }

});

/* ../../../../common.blocks/popup/_adaptive/popup_adaptive_yes.js end */
;
/* ../../../../common.blocks/popup/_animate/popup_animate_yes.js begin */
/**
 * Анимированный попап.
 *
 * При показе и скрытии проигрывает анимацию.
 */
BEM.DOM.decl({
    block: 'popup',
    modName: 'animate',
    modVal: 'yes'
}, {

    /**
     * Метод предназначен для проигрывания анимации показа блока.
     *
     * Выполняется при показе блока, когда модификатор
     * `_visibility_visible` уже установлен.
     *
     * По умолчанию проигрывает fade-in анимацию.
     * Переопределите этот метод для реализации другой анимации.
     *
     * @protected
     */
    afterShow: function() {

        var direction = this.getCurrDirection();

        if(!direction) {
            return;
        }

        var to = direction.to,
            position = this.getCurrPos(),
            animateOpts = {
                opacity: 1,
                top: position.top,
                left: position.left
            },
            cssOpts = {
                opacity: 0,
                top: position.top,
                left: position.left
            };

        if(to === 'bottom') {
            cssOpts.top += 10;
        } else if(to === 'top') {
            cssOpts.top -= 10;
        } else if(to === 'left') {
            cssOpts.left -= 10;
        } else if(to === 'right') {
            cssOpts.left += 10;
        }

        this
            .domElem
            .stop(true) // NOTE: Не нужно, чтобы выполнялся callback
            .css(cssOpts)
            .animate(animateOpts, this.params.duration);

    },

    /**
     * Метод предназначен для проигрывания анимации скрытия блока.
     *
     * Выполняется перед скрытием блока. В момент вызова
     * модификатор `_visibility_visible` еще не снят.
     *
     * По умолчанию проигрывает fade-out анимацию.
     * Переопределите этот метод для реализации другой анимации.
     *
     * **ВАЖНО:** при реализации нестандартной анимации, необходимо
     * вызвать callback по ее окончании.
     *
     * @protected
     * @param {Function} callback функция, которую необходимо вызвать
     * по окончании анимации. Не принимает аргументов и не возвращает
     * никаких значений.
     */
    beforeHide: function(callback) {

        var direction = this.getCurrDirection();

        if(!direction) {
            return callback();
        }

        var to = direction.to,
            position = this.getCurrPos(),
            domElem = this.domElem,
            animateOpts = {
                top: position.top,
                left: position.left,
                opacity: 0
            };

        if(to === 'bottom') {
            animateOpts.top += 10;
        } else if(to === 'top') {
            animateOpts.top -= 10;
        } else if(to === 'left') {
            animateOpts.left -= 10;
        } else if(to === 'right') {
            animateOpts.left += 10;
        }

        return domElem
            .stop(true, true)
            .animate(animateOpts, this.params.duration, function() {

                callback();

                domElem.css('opacity', '');

            }); // NOTE: нужно убрать модификатор visibility_visible только по окончанию эффекта

    }

});

/* ../../../../common.blocks/popup/_animate/popup_animate_yes.js end */
;
/* ../../../../common.blocks/popup/__under/popup__under.js begin */
(function() {

/**
 * Пулл подложек блока.
 * Используется чтобы не создавать iframe'ы для каждого инстанса блока на странице.
 *
 * @type {Array}
 */
var underPool = [];

BEM.DOM.decl('popup', {

    onSetMod: {

        'js': function() {

            this.__base.call(this);

            var under = this.findElem('under').first();

            /**
             * Наименование классов оригинальной подложки из DOM.
             *
             * @private
             * @type {String}
             */
            this._underClassAttr = under.attr('class');

            /**
             * NOTE: Изначально присутствует div подложка,
             * если её не достаточно, то нужно её удалить,
             * чтобы _getUnder создал iframe подложку
             */
            if(this.isDivEnough()) {
                this._under = under;
            } else {
                under.remove();
                this._under = null;
            }

            /**
             * Сигнализирует наличие подложки от инстанса этого блока в пуле.
             *
             * @private
             * @type {Boolean}
             */
            this._underInPool = false;

        }

    },

    /**
     * Метод, позволяющий выбрать между `div` и `iframe`
     * по кастомным факторам.
     *
     * @public
     * @returns {Boolean}
     */
    isDivEnough: function() {

        // На десктопе пока(LEGO-8537) используем только iframe
        return false;

    },

    /**
     * Создаёт `iframe` подложку.
     *
     * @return {jQuery}
     */
    _createUnder: function() {

        /*
         * NOTE: frameBorder для IE
         */

        return $('<iframe frameBorder="0" tabindex="-1" src="' + 'about:blank' + '"/>');

    },

    /**
     * Получить подложку из пула или создать новую.
     *
     * @private
     * @return {jQuery}
     */
    _getUnder: function() {

        if(this._under) {
            return this._under;
        }

        var fromPool = underPool.pop();

        fromPool && (this._underInPool = false);

        /**
         * Подложка popup
         * @private
         * @type {jQuery}
         */
        /*jshint boss:true */
        return this._under = fromPool ||
            this._createUnder();

    },

    /**
     * Получает подложку из _getUnder, добавляет в DOM.
     *
     * @private
     */
    _attachUnder: function() {

        var under = this._under = this._getUnder();

        under
            .attr('class', this._underClassAttr);

        this.hasMod(under, 'type', 'paranja')
            ? under.detach().insertBefore(this.domElem)
            : under.prependTo(this.domElem);

    },

    /**
     * Извлекает подложку из DOM, откладывает её в пул.
     *
     * @private
     */
    _detachUnder: function() {

        var under = this._under;

        underPool.push(under.detach());

        this._under = null;
        this._underInPool = true;

    },

    /**
     * Убирает подложку из пула, если этот блок
     * её туда положил.
     */
    destruct: function() {

        this._underInPool && underPool.pop();

        return this.__base.apply(this, arguments);

    }
});

})();

/* ../../../../common.blocks/popup/__under/popup__under.js end */
;
/* ../../../../libs/islands-romochka/common.blocks/i-common/string/i-common__string.js begin */
BEM.decl('i-common__string', {}, {

    /**
     * Обрезать входную строку `str` до `maxLength` символов.
     * Порт функции `lego:clever-substring()` из i-common.xsl.
     *
     * @param {String} str строка на вход
     * @param {Nubmer} maxLength максимальная длина в символах
     * @param {Number} maxLengthRelative погрешность при обрезе сверх макс. длины
     *
     * @return {String}
     */
    cleverSubstring : (function() {

        var ellipsisChar = '…';

        return function(str, maxLength, maxLengthRelative) {
            return (str.length > maxLength + maxLengthRelative) ? str.substring(0, maxLength - 1) + ellipsisChar : str;
        }

    })(),


    /**
     * Экранирование специальных символов HTML
     *
     * @param {String} string экранируемая строка
     *
     * @return {String}
     */
    escapeHTML : (function() {

        var map = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': '&quot;',
                "'": '&#39;'
            },
            f = function(t) { return map[t] || t };

        return function(string) {
            return String(string).replace(/&(?!\w+;)|[<>"']/g, function(s) {
                return map[s] || s
            });
        }

    })(),

    /**
     * Экранирование специальных символов регулярных выражений в строке
     *
     * @param {String} string
     *
     * @return {String}
     */
    escapeRegExp : function(string) {

        return string.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');

    },

    /**
     * Подсветка частей строки по заданным позициям.
     * Изначально подоразумевается для использования в поисквых подсказках.
     *
     * @param {String} text Исходная экранированная строка.
     * @param {Array} ranges Массив пар начала-конца диапазонов выделения.
     *
     * @return {String|Array} Массив строк и бэм-сущностей, предназначающийся для вставки в bemjson, либо исходная строка.
     */
    highlight  : function(text, ranges) {

        if (!$.isArray(ranges)) return text;

        var emphasized = [],
            cursor = 0, index,
            _ranges = ranges.sort(function(a, b) {
                return a[0] - b[0];
            }),
            entities = [],
            encodeChar = '?',
            hasEncode = ~text.indexOf(encodeChar),
            // заменяем экранированные символы на знаки вопроса
            decodeEntity = function() {
                var symbol, entityCode = /\&#\d+;/gi;

                while((symbol = entityCode.exec(text))) {
                    entities.push(symbol[0]);
                    text = text.replace(symbol[0], encodeChar);
                }

            },
            // заменяем знаки вопроса обратно на сохраненные символы
            encodeEntity = function(decodeText) {
                if (hasEncode) return decodeText;

                while (~decodeText.indexOf(encodeChar) && entities.length) {
                    decodeText = decodeText.replace(encodeChar, entities[0]);
                    entities.shift();
                }
                return decodeText;
            };

        !hasEncode && decodeEntity();

        _ranges.forEach(function(range) {
            index = (cursor > range[0]) ? cursor : range[0];
            emphasized.push({
                tag: 'span',
                elem: 'span',
                content: encodeEntity(text.slice(cursor, index))
            });
            emphasized.push({
                tag: 'em',
                elem: 'em',
                content: encodeEntity(text.slice(index, cursor = range[1]))
            });
        }, this);

        emphasized.push({
            tag: 'span',
            elem: 'span',
            content: encodeEntity(text.slice(cursor))
        });

        return emphasized;

    }

});

/* ../../../../libs/islands-romochka/common.blocks/i-common/string/i-common__string.js end */
;
/* ../../../../libs/islands-romochka/common.blocks/b-autocomplete-item/b-autocomplete-item.js begin */
BEM.DOM.decl('b-autocomplete-item', {

    /**
     * Возвращает значение, которое надо вставить в input.
     * @returns {String}
     */
    val: function() {
        return this.params.val || this.elem('text').text() || this.domElem.text();
    },

    /**
     * Действие на наведение на пункт клавиатурой
     * @returns {Boolean=true} Если возвращается false, значит подставлять значение пункта не надо
     */
    enter: function() {},

    /**
     * Действие на выбор пункта
     * @param {Boolean} [byKeyboard=false] выбор осуществлен клавиатурой
     * @returns {Boolean=true} Если возвращается false, значит пункт сам сделал все необходимые действия
     */
    select: function(byKeyboard) {}

});

/* ../../../../libs/islands-romochka/common.blocks/b-autocomplete-item/b-autocomplete-item.js end */
;
/* ../../../../libs/islands-romochka/desktop.blocks/b-autocomplete-item/b-autocomplete-item.js begin */
BEM.DOM.decl('b-autocomplete-item', {}, {
    live : function() {
        this.liveBindTo('mouseover mouseout mousedown mouseup', function(e) {
            this.trigger(e.type);
        });
    }
});

BEM.HTML.decl('b-autocomplete-item', {
    onBlock : function(ctx) {
        var data = ctx.param('data'),
            text = BEM.blocks['i-common__string'].escapeHTML($.isArray(data) ? data[1] : data);

        $.isArray(ctx.param('search_cgi')) && ctx.js({ cgi: ctx.param('search_cgi') });

        ctx
            .tag('li')
            .mod('pers', ctx.param('pers') ? 'yes' : false)
            .content(BEM.blocks['i-common__string'].highlight(text, ctx.param('hl')))
            .js(true);
    }
});

/* ../../../../libs/islands-romochka/desktop.blocks/b-autocomplete-item/b-autocomplete-item.js end */
;
/* ../../../../libs/islands-romochka/desktop.blocks/b-autocomplete-item/_nav/b-autocomplete-item_nav_yes.js begin */
BEM.DOM.decl({ block : 'b-autocomplete-item', modName : 'nav', modVal : 'yes' }, {

   enter : function() {
       return false;
   },

    /**
     * Действие на выбор пункта
     * @param {Boolean} [byKeyboard=false] выбор осуществлен клавиатурой
     * @returns {Boolean=true} Если возвращается false, значит пункт сам сделал все необходимые действия
     * @returns {Object.<needUpdate|needEvent>}
     */
    select : function(byKeyboard) {
        // открываем ссылку только когда выбрали с помощью клавиатуры, если выбрали мышкой, то сработает обычная ссылка
        byKeyboard && $('<form style="display:none" action="' + this.val() + '" target="_blank"/>')
            .appendTo('body')
            .submit()
            .remove();

        return { needEvent: true };

    }

}, {

    /**
     * Получить полную ссылку с протоколом
     * @param {String} url Ссылка
     * @returns {String}
     */
    getUrl : function(url) {
        return (url.match(/^\w[\w-]*:\/\//g)? '' : 'http://') + url;
    }

});

/* ../../../../libs/islands-romochka/desktop.blocks/b-autocomplete-item/_nav/b-autocomplete-item_nav_yes.js end */
;
/* ../../../../libs/islands-romochka/desktop.blocks/b-autocomplete-item/_type/b-autocomplete-item_type_nav.js begin */
BEM.DOM.decl({ block : 'b-autocomplete-item', modName : 'type', modVal : 'nav' }, {

    onSetMod : {

        js: function() {
            this.setMod('nav', 'yes');
        }

    },

    /**
     * __base в /_nav/b-autocomplete-item_nav_yes.js
     */
    enter : function() {
        return this.__base.apply(this, arguments);
    },

    /**
     * Действие на выбор пункта
     * __base в /_nav/b-autocomplete-item_nav_yes.js
     */
    select : function() {
        return this.__base.apply(this, arguments);
    }

});

BEM.HTML.decl({ block : 'b-autocomplete-item', modName : 'type', modVal : 'nav' }, {

    onBlock : function(ctx) {

        var data = ctx.param('data'),
            isV4 = ctx.param('suggestVersion') == 4,
            urlData = data[4] || data[3],
            url = (urlData.match(/^\w[\w-]*:\/\//g)? '' : 'http://') + urlData;

        ctx
            .js({ val : url })
            .content({
                elem : 'link',
                url  : url,
                title : BEM.blocks['i-common__string'].escapeHTML(isV4 ? data[3] : data[2]),
                description : BEM.blocks['i-common__string'].highlight(isV4 ? data[2] : data[1], ctx.param('hl'))
            });

    },

    onElem : {

        'link' : function(ctx) {

            ctx
                .tag('a')
                .attrs({ href : ctx.param('url'), target : '_blank' })
                .content([
                    { elem : 'link-url', tag : 'span', content : ctx.param('title') },
                    { elem : 'link-info', tag : 'span', content : ['&nbsp;&mdash; '].concat(ctx.param('description')) }
                ]);

        }


    }

});

/* ../../../../libs/islands-romochka/desktop.blocks/b-autocomplete-item/_type/b-autocomplete-item_type_nav.js end */
;
/* ../../../../libs/islands-romochka/desktop.blocks/b-autocomplete-item/_type/b-autocomplete-item_type_foot.js begin */
BEM.DOM.decl({ block : 'b-autocomplete-item', modName : 'type', modVal : 'foot' }, {

    select : function() {
        return false;
    }

});

BEM.HTML.decl({ block : 'b-autocomplete-item', modName : 'type', modVal : 'foot' }, {

    onBlock : function(ctx) {

        ctx
            .mod('enterable', 'no')
            .content($.map(ctx.param('data').slice(1), function(chunk) {
                return $.isArray(chunk)?
                    { tag : 'span', elem : 'foot', content : chunk[0] } :
                    chunk;
            }));

    }

});


/* ../../../../libs/islands-romochka/desktop.blocks/b-autocomplete-item/_type/b-autocomplete-item_type_foot.js end */
;
/* ../../../../libs/islands-romochka/desktop.blocks/b-autocomplete-item/_type/b-autocomplete-item_type_lingvo.js begin */
BEM.HTML.decl({ block : 'b-autocomplete-item', modName : 'type', modVal : 'lingvo' }, {

    onBlock : function(ctx) {

        var data = ctx.param('data')[1];
        
        ctx.content([
            { tag : 'span', elem : 'text', content : data.text },
            { tag : 'span', elem : 'translation', content : [' — ', data.translation] }
        ]);

    }

});

/* ../../../../libs/islands-romochka/desktop.blocks/b-autocomplete-item/_type/b-autocomplete-item_type_lingvo.js end */
;
/* ../../../../common.blocks/input/_tap-ahead/input_tap-ahead_yes.js begin */
/**
 * Поле ввода с автодополнением.
 *
 * Для отображения использует дополнительную подсказку (элемент `__ahead`).
 * Завершает автодополнение, при нажатии клавиш `Tab` или `→`, и по клику на видимую часть дополнительной подсказки.
 *
 * @property {Number} [data.showOverChars=3]    Количество набранных символов, с которых начинать показ автодополнения.
 */
BEM.DOM.decl({name: 'input', modName: 'tap-ahead', modVal: 'yes'}, {

    /**
     * Генерируется при клике
     *
     * @event input#ahead-click
     */

    /**
     * Генерируется при завершени автодополнения.
     *
     * @event input_tap-ahead_yes#ahead-fill
     * @param {Object} data       Параметры автодополнения.
     * @param {Number} data.chars Количество дополненных символов.
     * @param {Number} data.usage C помощью чего вызвано завершение автодополнения:
     *  - `ahead-click` - клик на видимой части дополнительной подсказки;
     *  - `tab` - нажатие `Tab`;
     *  - `arrow` - нажатие `→`.
     */

    onSetMod: {

        'js': function() {

            this.__base();

            /**
             * Контейнер дополнительной подсказки.
             *
             * @private
             * @type {jQuery}
             */
            this._ahead = this.buildAhead();

            /**
             * Текущий текст дополнения.
             *
             * @private
             * @type {Boolean|String}
             */
            this._intent = false;

            /**
             * Кэш текста, который был введен до последнего события `change`.
             *
             * @private
             * @type {String}
             */
            this._text = this.val();

            /**
             * Флаг, блокирует обновление дополнительной подсказки.
             *
             * @private
             * @type {Boolean}
             */
            this._preventAhead = false;

            // Нигде не используется.
            this._lastBackspace = 0;

            this
                .on({
                    'data-received': this._onDataReceive,
                    change: this._onTextChange
                })
                .bindTo('leftclick tap', function(e) {
                    // Завершаем автодополнение по клику на видимую часть дополнительной подсказки.
                    var offset = e.offsetX - parseInt(this._ahead.css('padding-left'), 10),
                        fillerWidth = this.elem('ahead-filler').width(),
                        aheadWidth = fillerWidth + this.elem('ahead-hint').width();

                    if(offset > fillerWidth && offset < aheadWidth) {
                        this.trigger('ahead-click');
                        this._fill({usage: 'mouse'});
                    }
                });

            this._getPopup().on('hide', function() {this.clearAhead();}, this);

        }

    },

    /**
     * Обработчик нажатий на клавиши при открытом саджесте.
     * Завершает автодополнение при надатии `Tab` или `→`.
     *
     * @param {$.Event} e Объект события.
     * @private
     */
    _onKeyDown: function(e) {

        this.__base.apply(this, arguments);

        switch(e.which) {
            case 9: // TAB
                var filled = this._fill({usage: 'tab'});

                // noprevent-tab:
                // не отменять нажатие TAB, если нечего было дополнять
                if(this.hasMod('noprevent-tab', 'yes')) {
                    filled && e.preventDefault();
                } else {
                    e.preventDefault();
                }
                break;

            case 39: // RIGHT
                (this.val().length === this.getSelectionEnd()) && this._fill({usage: 'arrow'});
                break;
        }

    },

    /**
     * Обработчик события `data-received`.
     *
     * Устанавливает дополнительную подсказку, если введенный текст совпадает
     * с началом первой подсказки саджеста.
     *
     * @private
     * @param {$.Event} e    Объект события.
     * @param {Object}  data Данные для саджеста.
     * @returns {Boolean|undefined} `false`, если обновление дополнения было заблокировано.
     */
    _onDataReceive: function(e, data) {

        if(this._preventAhead) {
            return false;
        }

        var topItem = data.items && data.items[0],
            text = this._text,
            intent = (typeof topItem === 'object') ? topItem[1] : topItem,
            escapeRegExp = BEM.blocks['i-common__string'].escapeRegExp,
            re = new RegExp('^' + escapeRegExp(text.toLowerCase()) + '(.*)$', 'i'),
            ahead = (typeof intent === 'string') && intent.match(re);

        if(ahead && (text.length >= this.params.showOverChars)) {
            // nosplit-words:
            // не разбивать подсказку по словам
            ahead = this.hasMod('nosplit-words', 'yes') ? ahead[1] : ahead[1].split(' ')[0];
            this._intent = this.showAhead(text, ahead);
        } else {
            this._intent = this.clearAhead();
        }

    },

    /**
     * Обработчик события `change`.
     *
     * Перемещает символ из видимой части дополнительной подсказки в невидимую, если введенный текст
     * все еще совпадает с предложенным дополнением.
     *
     * @param {Event} e
     * @private
     */
    _onTextChange: function(e) {

        var shift = this._text.length - (this._text = this.val()).length;

        shift !== 0 && this.shiftAhead(shift);

        var escapeRegExp = BEM.blocks['i-common__string'].escapeRegExp,
            re = new RegExp('^' + escapeRegExp(this.val().toLowerCase()) + '(.*)$', 'i');
        this._intent && !this._intent.match(re) && this.clearAhead();

    },

    /**
     * Завершает автодополнение с помощью установки текста дополнения в поле ввода.
     * Генерирует событие `ahead-fill`.
     *
     * @private
     * @param {Object} [props] Пареметры, будут переданы как данные в событие `ahead-fill`.
     * @returns {Boolean} `true`, если было дополнено один и более символов.
     */
    _fill: function(props) {

        var _props = $.extend(props, {
            chars: this._intent.length - this._text.length
        });

        if(typeof this._intent === 'string') {
            this.val(this._intent);
            this.trigger('ahead-fill', _props);
        }

        return _props.chars > 0;

    },

    /**
     * Возвращает параметры блока по умолчанию.
     *
     * @protected
     * @returns {Object}
     */
    getDefaultParams: function() {

        return $.extend(this.__base(), {
            showOverChars: 3,
            backspaceDelay: 100 // Нигде не используется.
        });

    }

});

/* ../../../../common.blocks/input/_tap-ahead/input_tap-ahead_yes.js end */
;
/* ../../../../common.blocks/input/__ahead/input__ahead.js begin */
/**
 * Дополнительная подсказка.
 *
 * Представляет собой контейнер (элемент `__ahead`) содержащий невидимую (элемент `__ahead-filler`)
 * и видимую (элемент `__ahead-hint`) части подсказки. Невидимая часть нужна для правильного позиционирования
 * видимой части, в ней дублируется значение из поля ввода. В видимую часть записывается
 * остаток слова для дополнения.
 */
BEM.DOM.decl('input', {

    onSetMod: {

        'js': function() {

            this.__base();

            /**
             * Невидимая часть дополнительной подсказки.
             *
             * @private
             * @type {String}
             */
            this._filler = '';

            /**
             * Видимая часть дополнительной подсказки.
             *
             * @private
             * @type {String}
             */
            this._hint = '';

        }

    },

    /**
     * Создает и инициализирует контейнер для дополнительной подсказки.
     *
     * @protected
     * @returns {jQuery} Контейнер дополнительной подсказки.
     */
    buildAhead: function() {

        this._ahead = $(BEMHTML.apply({
            block: 'input',
            elem: 'ahead'
        }));

        BEM.DOM.before(this.elem('control'), this._ahead);

        return this._ahead;

    },

    /**
     * Устанавливает текст в видимой и невидимой частях дополнительной подсказки.
     *
     * @private
     * @param {String} filler Невидимая часть дополнительной подсказки.
     * @param {String} hint   Видимая часть дополнительной подсказки.
     * @returns {String} Полный текст дополнительной подсказки.
     */
    _setAhead: function(filler, hint) {

        this.elem('ahead-filler').html(!this._preventAhead && (this._filler = filler) || '');
        this.elem('ahead-hint').html(!this._preventAhead && (this._hint = hint) || '');

        return filler + hint;

    },

    /**
     * Устанавливает текст дополнительной подсказки если переданы параметры `filler` и `hint`, или
     * очищает его, если параметры не переданы.
     *
     * @protected
     * @param {String} filler Невидимая часть дополнительной подсказки.
     * @param {String} hint   Видимая часть дополнительной подсказки.
     * @returns {String} Полный текст дополнительной подсказки.
     */
    showAhead: function(filler, hint) {

        if(typeof filler === 'undefined') {
            this.clearAhead();
        }

        return this._setAhead(filler, hint);

    },

    /**
     * Очищает текст дополнительной подсказки.
     *
     * @protected
     * @todo Логичнее возвращать пустую строку.
     * @returns {Boolean} `false`, как знак того, что полный текст дополнительной подсказки пуст.
     */
    clearAhead: function() {

        this._setAhead('', '');

        return false;

    },

    /**
     * Перемещает символы из невидидимой части дополнительной подсказки в видимую часть,
     * если параметр `shift` положителен, и наоборот, если отрицателен.
     *
     * @protected
     * @param {Number} shift Количество символов для перемещения.
     * @returns {String} Полный текст дополнительной подсказки.
     */
    shiftAhead: function(shift) {

        var filler, hint, diff;
        if(shift > 0) {
            diff = this._filler.slice(-shift);
            hint = diff.concat(this._hint);
            filler = this._filler.slice(0, -shift);
        } else {
            diff = this._hint.slice(0, -shift);
            hint = this._hint.slice(-shift);
            filler = this._filler.concat(diff);
        }

        return this._setAhead(filler, hint);

    }

});

/* ../../../../common.blocks/input/__ahead/input__ahead.js end */
;


/* global BEM, i18n */
(function(global_, bem_, undefined) {

// Check if BEM.I18N was already initialized
if(typeof bem_.I18N === 'function' && bem_.I18N._proto) {
    return bem_.I18N;
}

/**
 * Support tanker-like syntax of keys in `i-bem__i18n`
 * @example
 *  i18n['prj']['keyset']['key'](params)
 */
if(typeof i18n === 'undefined') {
    /* jshint -W020 */
    i18n = {};
    /* jshint +W020 */
}

/* jshint -W020 */
BEM = bem_;
/* jshint +W020 */

var MOD_DELIM = '_',
    ELEM_DELIM = '__',
    DEFAULT_LANG = 'ru',
    cache = {},
    // {String[]} A stack used for restoring context of dynamic keysets
    stack = [],
    debug = false,
    // @see http://whattheheadsaid.com/2011/04/internet-explorer-9s-problematic-console-object
    hasConsole = typeof console !== 'undefined' && typeof console.log === 'function';

function log() {
    if(debug && hasConsole) {
        console.log.apply(console, arguments);
    }
}

function bemName(decl) {
    typeof decl === 'string' && (decl = { block: decl });

    return decl.block +
        (decl.elem ? (ELEM_DELIM + decl.elem) : '') +
        (decl.modName ? MOD_DELIM + decl.modName + MOD_DELIM + decl.modVal : '');
}

function bemParse(name) {
    var bemitem = {};

    name.split(ELEM_DELIM).forEach(function(item, i) {
        var keys = [ i ? 'elem' : 'block', 'mod', 'val' ];

        item.split(MOD_DELIM).forEach(function(part, j) {
            bemitem[keys[j]] = part;
        });
    });

    return bemitem;
}

function _pushStack(name) {
    if(!name) return false;
    return stack.push(name);
}

function _popStack() {
    return stack.length && stack.pop();
}


/**
 * @constructor
 */
function _i18n() {
    this._lang = '';
    this._prj = 'lego'; // FIXME: bem-bl?
    this._keyset = '';
    this._key = '';
}

_i18n.prototype = {

    lang : function(name) {
        this._lang = name;
        return this;
    },

    project : function(name) {
        this._prj = name;
        return this;
    },

    keyset : function(name, saveCtx) {
        saveCtx && _pushStack(this._keyset);

        this._keyset = bemName(name);
        return this;
    },

    key : function(name) {
        this._key = name;
        return this;
    },

    /**
     * FIXME: Move legacy-syntax support into separat method
     * @param {Object|Function} v
     */
    decl : function(v) {
        var bemitem = bemParse(this._keyset),
            // tanker legacy syntax
            prj = bemitem.block === 'i-tanker' ? 'tanker' : this._prj,
            keyset = bemitem.elem || this._keyset,
            key = this._key;

        prj = i18n[prj] || (i18n[prj] = {});
        keyset = prj[keyset] || (prj[keyset] = {});
        keyset[key] = typeof v === 'function' ? v : (function(p) { return (v); });

        // `BEM.I18N` syntax
        var l = cache[this._lang] || (cache[this._lang] = {}),
            k = l[this._keyset] || (l[this._keyset] = {});

        k[key] = v;
    },

    val : function(params, ctx) {
        var value = cache[this._lang] && cache[this._lang][this._keyset],
            debugString = 'keyset: ' + this._keyset + ' key: ' + this._key + ' (lang: ' + this._lang + ')';

        if(!value) {
            log('[I18N_NO_KEYSET] %s', debugString);
            return '';
        }

        value = value[this._key];

        var valtype = typeof value;
        if(valtype === 'undefined') {
            log("[I18N_NO_VALUE] %s", debugString);
            return '';
        }

        if(valtype === 'string') {
            return value;
        }

        ctx || (ctx = this);
        // TODO: try/catch
        return value.call(ctx, params);
    },

    _cache : function() { return cache; }

};

/**
 * @namespace
 * @lends BEM.I18N
 */
bem_.I18N = (function(base) {

    /**
     * Shortcut to get key value
     *
     * @param {String|Object} keyset
     * @param {String} key
     * @param {Object} [params]
     * @returns {String}
     */
    var klass = function(keyset, key, params) {
        return klass.keyset(keyset).key(key, params);
    };

    klass._proto = base;

    /**
     * @param {String} name
     * @returns {BEM.I18N}
     */
    klass.project = function(name) {
        this._proto.project(name);
        return this;
    };

    /**
     * @param {String} name
     * @returns {BEM.I18N}
     */
    klass.keyset = function(name) {
        this._proto.keyset(name, true);
        return this;
    };

    /**
     * @param {String} name Key name
     * @param {Object} params
     * @returns {String}
     */
    klass.key = function(name, params) {
        var proto = this._proto,
            result,
            ksetRestored;

        proto.lang(this._lang).key(name);

        // TODO: kiss
        result = proto.val.call(proto, params, klass);

        // restoring keyset's context
        // NOTE: should not save current ctx, `saveCtx = false`
        ksetRestored = _popStack();
        ksetRestored && proto.keyset(ksetRestored, false);

        return result;
    };

    /**
     * Declaration of translations
     *
     * @param {String|Object} bemitem
     * @param {Object} keysets
     * @param {Object} [params] declaration params
     * @returns {BEM.I18N}
     */
    klass.decl = function(bemitem, keysets, params) {
        var proto = this._proto,
            k;

        params || (params = {});
        params.lang && proto.lang(params.lang);

        proto.keyset(bemitem);

        for(k in keysets) {
            if(keysets.hasOwnProperty(k)) {
                proto.key(k).decl(keysets[k]);
            }
        }

        return this;
    };

    /**
     * Get/set current language
     *
     * @param {String} [lang]
     * @returns {String}
     */
    klass.lang = function(lang) {
        typeof lang !== 'undefined' && (this._lang = lang);
        return this._lang;
    };

    klass.debug = function(flag) {
        debug = !!flag;
    };

    klass.lang(DEFAULT_LANG);

    return klass;

}(new _i18n()));

})(this, typeof BEM === 'undefined' ? {} : BEM);


BEM.I18N.lang('en');
