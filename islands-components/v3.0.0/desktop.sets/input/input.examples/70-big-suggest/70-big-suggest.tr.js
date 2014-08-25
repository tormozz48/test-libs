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
                    var _$13zdata = __$ctx.ctx.data[1];
                    return [
                        {
                            tag: 'span',
                            elem: 'text',
                            content: _$13zdata.text
                        },
                        {
                            tag: 'span',
                            elem: 'translation',
                            content: [
                                ' \u2014 ',
                                _$13zdata.translation
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
            var _$13tdata = __$ctx.ctx.data, _$13tiCommonString = BEM.blocks['i-common__string'], _$13ttext = _$13tiCommonString.escapeHTML(__$ctx._.isArray(_$13tdata) ? _$13tdata[1] : _$13tdata);
            return _$13tiCommonString.highlight(_$13ttext, __$ctx.ctx.hl);
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
        if (!(__$ctx['__$anflg87'] !== true) === false) {
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
        var _$13udata = __$ctx.ctx.data, _$13uurlData = _$13udata[4], _$13uurl = (_$13uurlData.match(/^\w[\w-]*:\/\//g) ? '' : 'http://') + _$13uurlData, _$13ulinkUrlContent = BEM.blocks['i-common__string'].escapeHTML(_$13udata[3]), _$13ulinkInfoConten = '&nbsp;&mdash;&nbsp;' + BEM.blocks['i-common__string'].highlight(_$13udata[2], __$ctx.ctx.hl);
        return '', __r0 = __$ctx['__$anflg87'], __$ctx['__$anflg87'] = true, __r5 = ('', __r1 = __$ctx._linkUrlContent, __$ctx._linkUrlContent = _$13ulinkUrlContent, __r2 = __$ctx._linkInfoConten, __$ctx._linkInfoConten = _$13ulinkInfoConten, __r3 = __$ctx._url, __$ctx._url = _$13uurl, __r4 = $68(__$ctx), __$ctx._linkUrlContent = __r1, __$ctx._linkInfoConten = __r2, __$ctx._url = __r3, '', __r4), __$ctx['__$anflg87'] = __r0, '', __r5;
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
        var _$13mctx = __$ctx.ctx;
        _$13mctx.mods = $$mods = __$ctx.extend({
            theme: 'ffffff',
            autoclosable: 'yes',
            adaptive: 'yes',
            animate: 'yes'
        }, $$mods);
        if (_$13mctx.zIndex) {
            var _$13mattrs = _$13mctx.attrs || (_$13mctx.attrs = {});
            _$13mattrs.style = (_$13mattrs.style || '') + ';z-index:' + _$13mctx.zIndex + ';';
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
                    var _$13ga = __$ctx._.extend({
                            id: __$ctx._inputId,
                            name: __$ctx._name
                        }, __$ctx.ctx.controlAttrs);
                    (__$ctx._value || __$ctx._value === 0) && (_$13ga.value = __$ctx._value);
                    $$mods.disabled && (_$13ga.disabled = 'disabled');
                    _$13ga['aria-labelledby'] = __$ctx._labelId + ' ' + __$ctx._hintId;
                    return _$13ga;
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
        if (!(__$ctx['__$anflg84'] !== true) === false) {
            if (!!$$elem === false) {
                var __r0, __r1;
                var _$134c = ('', __r0 = __$ctx['__$anflg84'], __$ctx['__$anflg84'] = true, __r1 = $123(__$ctx), __$ctx['__$anflg84'] = __r0, '', __r1);
                _$134c += [
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
                return _$134c;
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
            if (!(__$ctx['__$anflg86'] !== true) === false) {
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
            var __r0 = __$ctx['__$anflg86'];
            __$ctx['__$anflg86'] = true;
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
            __$ctx['__$anflg86'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $178(__$ctx) {
        if (!(__$ctx['__$anflg85'] !== true) === false) {
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
        var _$137value = ('', __r0 = $$mode, $$mode = 'value', __r1 = __$ctx.ctx, __$ctx.ctx = __$ctx.ctx.value, __r2 = $224(__$ctx), $$mode = __r0, __$ctx.ctx = __r1, '', __r2), _$137id = __$ctx.ctx.id || __$ctx.generateId(), _$137mods = __$ctx.ctx.mods || {};
        _$137mods.theme = _$137mods.theme || 'normal';
        {
            '';
            var __r3 = __$ctx['__$anflg85'];
            __$ctx['__$anflg85'] = true;
            {
                '';
                var __r4 = __$ctx._inputId;
                __$ctx._inputId = _$137id;
                var __r5 = __$ctx._labelId;
                __$ctx._labelId = 'label' + _$137id;
                var __r6 = __$ctx._hintId;
                __$ctx._hintId = 'hint' + _$137id;
                var __r7 = __$ctx._name;
                __$ctx._name = __$ctx.ctx.name || '';
                var __r8 = __$ctx._value;
                __$ctx._value = _$137value;
                var __r9 = __$ctx._inputLink;
                __$ctx._inputLink = true;
                var __r10 = __$ctx._disabled;
                __$ctx._disabled = $$mods.disabled;
                var __r11 = __$ctx.ctx, __r12 = __r11.mods;
                __r11.mods = _$137mods;
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
            __$ctx['__$anflg85'] = __r3;
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
        var _$12oparams = __$ctx.ctx.params || {}, _$12oiGlobal = __$ctx['i-global'], _$12oisTldChanged = _$12oparams.tld && _$12oparams.tld !== _$12oiGlobal.tld, _$12otld, _$12oxYaDomain, _$12oyaDomain;
        if (_$12oisTldChanged) {
            _$12otld = _$12oparams.tld;
            _$12oxYaDomain = _$12otld === 'tr' ? 'yandex.com.tr' : 'yandex.' + _$12otld;
            _$12oyaDomain = [
                'ua',
                'by',
                'kz'
            ].indexOf(_$12otld) != -1 ? 'yandex.ru' : _$12oxYaDomain;
            _$12oiGlobal['content-region'] = _$12otld;
            _$12oiGlobal['click-host'] = '//clck.' + _$12oyaDomain;
            _$12oiGlobal['passport-host'] = 'https://passport.' + _$12oyaDomain;
            _$12oiGlobal['pass-host'] = '//pass.' + _$12oxYaDomain;
            _$12oiGlobal['social-host'] = '//social.' + _$12oxYaDomain;
            _$12oiGlobal['export-host'] = '//export.' + _$12oxYaDomain;
        } else {
            undefined;
        }
        for (var _$12op in _$12oparams) {
            _$12oiGlobal[_$12op] = _$12oparams[_$12op];
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
                var _$139value = [];
                {
                    '';
                    var __r0 = __$ctx._buf;
                    __$ctx._buf = _$139value;
                    var __r1 = $$mode;
                    $$mode = '';
                    $97(__$ctx);
                    __$ctx._buf = __r0;
                    $$mode = __r1;
                    '';
                }
                undefined;
                return _$139value.join('');
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
        var _$130_this = __$ctx['i-global'], _$130js = {}, _$130block = {
                block: 'i-global',
                js: _$130js
            }, _$130e;
        for (_$130e in _$130_this) {
            if (_$130_this.hasOwnProperty(_$130e) && ('', __r0 = $$mode, $$mode = 'public-params', __r1 = $$block, $$block = 'i-global', __r2 = $$elem, $$elem = _$130e, __r3 = $271(__$ctx), $$mode = __r0, $$block = __r1, $$elem = __r2, '', __r3)) {
                _$130js[_$130e] = _$130_this[_$130e];
            } else {
                undefined;
            }
        }
        return _$130block;
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
        var _$12mps = {}, _$12mes = [
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
            ], _$12me;
        while (_$12me = _$12mes.shift()) {
            _$12mps[_$12me] = ('', __r0 = $$mode, $$mode = 'default', __r1 = $$block, $$block = 'i-global', __r2 = $$elem, $$elem = _$12me, __r3 = $186(__$ctx), $$mode = __r0, $$block = __r1, $$elem = __r2, '', __r3);
        }
        __$ctx['i-global'] = __$ctx._.extend(_$12mps, ('', __r4 = $$mode, $$mode = 'env', __r5 = $$block, $$block = 'i-global', __r6 = $279(__$ctx), $$mode = __r4, $$block = __r5, '', __r6));
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
        function _$12dfollow() {
            if (this.ctx.link === 'no-follow') {
                return undefined;
            } else {
                undefined;
            }
            var data = this._links[this.ctx.link];
            return '', __r0 = this.ctx, this.ctx = data, __r1 = $1(__$ctx), this.ctx = __r0, '', __r1;
        }
        if (!cache || !__$ctx._cacheLog) {
            return _$12dfollow.call(__$ctx);
        } else {
            undefined;
        }
        var _$12dcontents = __$ctx._buf.slice(__$ctx._cachePos).join('');
        __$ctx._cachePos = __$ctx._buf.length;
        __$ctx._cacheLog.push(_$12dcontents, {
            log: __$ctx._localLog.slice(),
            link: __$ctx.ctx.link
        });
        var _$12dres = _$12dfollow.call(__$ctx);
        __$ctx._cachePos = __$ctx._buf.length;
        return _$12dres;
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
        var _$12ccached;
        function _$12csetProperty(obj, key, value) {
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
        if (_$12ccached = cache.get(__$ctx.ctx.cache)) {
            var _$12coldLinks = __$ctx._links;
            if (__$ctx.ctx.links) {
                __$ctx._links = __$ctx.ctx.links;
            } else {
                undefined;
            }
            for (var _$12ci = 0; _$12ci < _$12ccached.log.length; _$12ci++) {
                if (typeof _$12ccached.log[_$12ci] === 'string') {
                    __$ctx._buf.push(_$12ccached.log[_$12ci]);
                    continue;
                } else {
                    undefined;
                }
                var _$12clog = _$12ccached.log[_$12ci], _$12creverseLog;
                _$12creverseLog = _$12clog.log.map(function (entry) {
                    return {
                        key: entry[0],
                        value: _$12csetProperty(this, entry[0], entry[1])
                    };
                }, __$ctx).reverse();
                {
                    '';
                    var __r0 = __$ctx.ctx, __r1 = __r0.cache;
                    __r0.cache = null;
                    var __r2 = __$ctx._cacheLog;
                    __$ctx._cacheLog = null;
                    var __r3 = __$ctx.ctx, __r4 = __r3.link;
                    __r3.link = _$12clog.link;
                    $1(__$ctx);
                    __r0.cache = __r1;
                    __$ctx._cacheLog = __r2;
                    __r3.link = __r4;
                    '';
                }
                undefined;
                _$12creverseLog.forEach(function (entry) {
                    _$12csetProperty(this, entry.key, entry.value);
                }, __$ctx);
            }
            __$ctx._links = _$12coldLinks;
            return _$12ccached.res;
        } else {
            undefined;
        }
        var _$12ccacheLog = [], _$12cres;
        {
            '';
            var __r5 = __$ctx.ctx, __r6 = __r5.cache;
            __r5.cache = null;
            var __r7 = __$ctx._cachePos;
            __$ctx._cachePos = __$ctx._buf.length;
            var __r8 = __$ctx._cacheLog;
            __$ctx._cacheLog = _$12ccacheLog;
            var __r9 = __$ctx._localLog;
            __$ctx._localLog = [];
            {
                _$12cres = $1(__$ctx);
                var _$12ctail = __$ctx._buf.slice(__$ctx._cachePos).join('');
                if (_$12ctail) {
                    _$12ccacheLog.push(_$12ctail);
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
            log: _$12ccacheLog,
            res: _$12cres
        });
        return _$12cres;
        return;
    }
    function $313(__$ctx) {
        var __t = $$mode;
        if (__t === 'default') {
            return $315(__$ctx);
        } else if (__t === '') {
            if (!__$ctx._.isSimple(__$ctx.ctx) === false) {
                __$ctx._listLength--;
                var _$12actx = __$ctx.ctx;
                (_$12actx && _$12actx !== true || _$12actx === 0) && __$ctx._buf.push(_$12actx);
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
        var _$12bBEM_ = __$ctx.BEM, _$12bv = __$ctx.ctx, _$12bbuf = __$ctx._buf, _$12btag;
        _$12btag = ('', __r0 = $$mode, $$mode = 'tag', __r1 = $89(__$ctx), $$mode = __r0, '', __r1);
        typeof _$12btag != 'undefined' || (_$12btag = _$12bv.tag);
        typeof _$12btag != 'undefined' || (_$12btag = 'div');
        if (_$12btag) {
            var _$12bjsParams, _$12bjs;
            if ($$block && _$12bv.js !== false) {
                _$12bjs = ('', __r4 = $$mode, $$mode = 'js', __r5 = $47(__$ctx), $$mode = __r4, '', __r5);
                _$12bjs = _$12bjs ? __$ctx._.extend(_$12bv.js, _$12bjs === true ? {} : _$12bjs) : _$12bv.js === true ? {} : _$12bv.js;
                _$12bjs && ((_$12bjsParams = {})[_$12bBEM_.INTERNAL.buildClass($$block, _$12bv.elem)] = _$12bjs);
            } else {
                undefined;
            }
            _$12bbuf.push('<', _$12btag);
            var _$12bisBEM = ('', __r6 = $$mode, $$mode = 'bem', __r7 = $105(__$ctx), $$mode = __r6, '', __r7);
            typeof _$12bisBEM != 'undefined' || (_$12bisBEM = typeof _$12bv.bem != 'undefined' ? _$12bv.bem : _$12bv.block || _$12bv.elem);
            var _$12bcls = ('', __r8 = $$mode, $$mode = 'cls', __r9 = $105(__$ctx), $$mode = __r8, '', __r9);
            _$12bcls || (_$12bcls = _$12bv.cls);
            var _$12baddJSInitClass = _$12bv.block && _$12bjsParams;
            if (_$12bisBEM || _$12bcls) {
                _$12bbuf.push(' class="');
                if (_$12bisBEM) {
                    _$12bBEM_.INTERNAL.buildClasses($$block, _$12bv.elem, _$12bv.elemMods || _$12bv.mods, _$12bbuf);
                    var _$12bmix = ('', __r10 = $$mode, $$mode = 'mix', __r11 = $33(__$ctx), $$mode = __r10, '', __r11);
                    _$12bv.mix && (_$12bmix = _$12bmix ? _$12bmix.concat(_$12bv.mix) : _$12bv.mix);
                    if (_$12bmix) {
                        var _$12bvisited = {};
                        function _$12bvisitedKey(block, elem) {
                            return (block || '') + '__' + (elem || '');
                        }
                        _$12bvisited[_$12bvisitedKey($$block, $$elem)] = true;
                        if (!__$ctx._.isArray(_$12bmix)) {
                            _$12bmix = [_$12bmix];
                        } else {
                            undefined;
                        }
                        for (var _$12bi = 0; _$12bi < _$12bmix.length; _$12bi++) {
                            var _$12bmixItem = _$12bmix[_$12bi];
                            if (!_$12bmixItem) {
                                continue;
                            } else {
                                undefined;
                            }
                            var _$12bhasItem = _$12bmixItem.block || _$12bmixItem.elem, _$12bblock = _$12bmixItem.block || _$12bmixItem._block || $$block, _$12belem = _$12bmixItem.elem || _$12bmixItem._elem || $$elem, _$12bmods = _$12bmixItem.mods || $$mods, _$12belemMods = _$12bmixItem.elemMods || {};
                            _$12bhasItem && _$12bbuf.push(' ');
                            _$12bBEM_.INTERNAL[_$12bhasItem ? 'buildClasses' : 'buildModsClasses'](_$12bblock, _$12bmixItem.elem || _$12bmixItem._elem || (_$12bmixItem.block ? undefined : $$elem), _$12bmixItem.elemMods || _$12bmixItem.mods, _$12bbuf);
                            if (_$12bmixItem.js) {
                                (_$12bjsParams || (_$12bjsParams = {}))[_$12bBEM_.INTERNAL.buildClass(_$12bblock, _$12bmixItem.elem)] = _$12bmixItem.js === true ? {} : _$12bmixItem.js;
                                _$12baddJSInitClass || (_$12baddJSInitClass = _$12bblock && !_$12bmixItem.elem);
                            } else {
                                undefined;
                            }
                            if (_$12bhasItem && !_$12bvisited[_$12bvisitedKey(_$12bblock, _$12belem)]) {
                                _$12bvisited[_$12bvisitedKey(_$12bblock, _$12belem)] = true;
                                var _$12bnestedMix = ('', __r12 = $$block, $$block = _$12bblock, __r13 = $$elem, $$elem = _$12belem, __r14 = $$mods, $$mods = _$12bmods, __r15 = $$elemMods, $$elemMods = _$12belemMods, __r16 = $$mode, $$mode = 'mix', __r17 = $33(__$ctx), $$block = __r12, $$elem = __r13, $$mods = __r14, $$elemMods = __r15, $$mode = __r16, '', __r17);
                                if (_$12bnestedMix) {
                                    for (var _$12bj = 0; _$12bj < _$12bnestedMix.length; _$12bj++) {
                                        var _$12bnestedItem = _$12bnestedMix[_$12bj];
                                        if (!_$12bnestedItem.block && !_$12bnestedItem.elem || !_$12bvisited[_$12bvisitedKey(_$12bnestedItem.block, _$12bnestedItem.elem)]) {
                                            _$12bnestedItem._block = _$12bblock;
                                            _$12bnestedItem._elem = _$12belem;
                                            _$12bmix.splice(_$12bi + 1, 0, _$12bnestedItem);
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
                _$12bcls && _$12bbuf.push(_$12bisBEM ? ' ' : '', _$12bcls);
                _$12baddJSInitClass && _$12bbuf.push(' i-bem');
                _$12bbuf.push('"');
            } else {
                undefined;
            }
            if (_$12bjsParams) {
                var _$12bjsAttr = ('', __r20 = $$mode, $$mode = 'jsAttr', __r21 = $105(__$ctx), $$mode = __r20, '', __r21);
                _$12bbuf.push(' ', _$12bjsAttr || 'data-bem', '="', __$ctx._.attrEscape(JSON.stringify(_$12bjsParams)), '"');
            } else {
                undefined;
            }
            var _$12battrs = ('', __r22 = $$mode, $$mode = 'attrs', __r23 = $105(__$ctx), $$mode = __r22, '', __r23);
            _$12battrs = __$ctx._.extend(_$12battrs, _$12bv.attrs);
            if (_$12battrs) {
                var _$12bname;
                for (_$12bname in _$12battrs) {
                    if (_$12battrs[_$12bname] === undefined) {
                        continue;
                    } else {
                        undefined;
                    }
                    _$12bbuf.push(' ', _$12bname, '="', __$ctx._.attrEscape(_$12battrs[_$12bname]), '"');
                }
            } else {
                undefined;
            }
        } else {
            undefined;
        }
        if (__$ctx._.isShortTag(_$12btag)) {
            _$12bbuf.push('/>');
        } else {
            _$12btag && _$12bbuf.push('>');
            var _$12bcontent = ('', __r24 = $$mode, $$mode = 'content', __r25 = $2(__$ctx), $$mode = __r24, '', __r25);
            if (_$12bcontent || _$12bcontent === 0) {
                var _$12bisBEM = $$block || $$elem;
                {
                    '';
                    var __r26 = __$ctx._notNewList;
                    __$ctx._notNewList = false;
                    var __r27 = __$ctx.position;
                    __$ctx.position = _$12bisBEM ? 1 : __$ctx.position;
                    var __r28 = __$ctx._listLength;
                    __$ctx._listLength = _$12bisBEM ? 1 : __$ctx._listLength;
                    var __r29 = __$ctx.ctx;
                    __$ctx.ctx = _$12bcontent;
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
            _$12btag && _$12bbuf.push('</', _$12btag, '>');
        }
        return;
    }
    function $324(__$ctx) {
        var _$128v = __$ctx.ctx, _$128l = _$128v.length, _$128i = 0, _$128prevPos = __$ctx.position, _$128prevNotNewList = __$ctx._notNewList;
        if (_$128prevNotNewList) {
            __$ctx._listLength += _$128l - 1;
        } else {
            __$ctx.position = 0;
            __$ctx._listLength = _$128l;
        }
        __$ctx._notNewList = true;
        while (_$128i < _$128l) {
            var _$128newCtx = _$128v[_$128i++];
            {
                '';
                var __r0 = __$ctx.ctx;
                __$ctx.ctx = _$128newCtx == null ? '' : _$128newCtx;
                $97(__$ctx);
                __$ctx.ctx = __r0;
                '';
            }
            undefined;
        }
        _$128prevNotNewList || (__$ctx.position = _$128prevPos);
        return;
    }
    function $327(__$ctx) {
        var _$127vBlock = __$ctx.ctx.block, _$127vElem = __$ctx.ctx.elem, _$127block = __$ctx._currBlock || $$block;
        __$ctx.ctx || (__$ctx.ctx = {});
        {
            '';
            var __r0 = $$mode;
            $$mode = 'default';
            var __r1 = __$ctx._links;
            __$ctx._links = __$ctx.ctx.links || __$ctx._links;
            var __r2 = $$block;
            $$block = _$127vBlock || (_$127vElem ? _$127block : undefined);
            var __r3 = __$ctx._currBlock;
            __$ctx._currBlock = _$127vBlock || _$127vElem ? undefined : _$127block;
            var __r4 = $$elem;
            $$elem = __$ctx.ctx.elem;
            var __r5 = $$mods;
            $$mods = (_$127vBlock ? __$ctx.ctx.mods : $$mods) || {};
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
typeof exports === "undefined" || (exports.BEMHTML = BEMHTML);/*borschik:include:../../../../libs/bem-bl/blocks-common/i-jquery/__inherit/i-jquery__inherit.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-jquery/__identify/i-jquery__identify.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-jquery/__is-empty-object/i-jquery__is-empty-object.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-jquery/__debounce/i-jquery__debounce.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-jquery/__observable/i-jquery__observable.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-bem/i-bem.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-ecma/__object/i-ecma__object.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-ecma/__array/i-ecma__array.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-ecma/__function/i-ecma__function.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-bem/__internal/i-bem__internal.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-jquery/__cookie/i-jquery__cookie.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-jquery/__decodeuri/i-jquery__decodeuri.js*/;
/*borschik:include:../../../../libs/islands-romochka/desktop.blocks/i-bem/html/i-bem__html.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-ecma/__json/i-ecma__json.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-bem/__dom/i-bem__dom.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-ecma/__string/i-ecma__string.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-common/check-session/i-common__check-session.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-global/i-global.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-counter/i-counter.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-common/cookie/i-common__cookie.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-common/init/i-common__init.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-common/i-common.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-bem/__dom/_init/i-bem__dom_init_auto.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-ua/_interaction/i-ua_interaction_yes.js*/;
/*borschik:include:../../../../libs/islands-romochka/desktop.blocks/i-oframebust/i-oframebust.js*/;
/*borschik:include:../../../../libs/islands-romochka/desktop.blocks/i-oframebust/_type/i-oframebust_type_referrer.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-request/i-request.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-desktop/i-jquery/__leftclick/i-jquery__leftclick.js*/;
/*borschik:include:../../../../common.blocks/input/input.js*/;
/*borschik:include:../../../../desktop.blocks/input/input.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-system/i-system.js*/;
/*borschik:include:../../../../common.blocks/input/__clear/input__clear.js*/;
/*borschik:include:../../../../common.blocks/input/__hint/input__hint.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-request/_type/i-request_type_ajax.js*/;
/*borschik:include:../../../../common.blocks/input/_suggest/input_suggest_yes.js*/;
/*borschik:include:../../../../common.blocks/input/__dataprovider/input__dataprovider.js*/;
/*borschik:include:../../../../common.blocks/popup/popup.js*/;
/*borschik:include:../../../../common.blocks/popup/_autoclosable/popup_autoclosable_yes.js*/;
/*borschik:include:../../../../common.blocks/popup/_adaptive/popup_adaptive_yes.js*/;
/*borschik:include:../../../../common.blocks/popup/_animate/popup_animate_yes.js*/;
/*borschik:include:../../../../common.blocks/popup/__under/popup__under.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-common/string/i-common__string.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/b-autocomplete-item/b-autocomplete-item.js*/;
/*borschik:include:../../../../libs/islands-romochka/desktop.blocks/b-autocomplete-item/b-autocomplete-item.js*/;
/*borschik:include:../../../../libs/islands-romochka/desktop.blocks/b-autocomplete-item/_nav/b-autocomplete-item_nav_yes.js*/;
/*borschik:include:../../../../libs/islands-romochka/desktop.blocks/b-autocomplete-item/_type/b-autocomplete-item_type_nav.js*/;
/*borschik:include:../../../../libs/islands-romochka/desktop.blocks/b-autocomplete-item/_type/b-autocomplete-item_type_foot.js*/;
/*borschik:include:../../../../libs/islands-romochka/desktop.blocks/b-autocomplete-item/_type/b-autocomplete-item_type_lingvo.js*/;


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


BEM.I18N.lang('tr');
