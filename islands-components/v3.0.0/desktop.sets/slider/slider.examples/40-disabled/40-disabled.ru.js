var BEMHTML = function() {
  var $$mode, $$block, $$elem, $$elemMods, $$mods;
  var cache,
      exports = {},
      xjst = (function (exports) {
    function $1(__$ctx) {
        var __t = $$block;
        if (__t === 'input') {
            var __t = $$mode;
            if (__t === 'content') {
                var __t = $$elem;
                if (__t === 'clear') {
                    if (!!__$ctx.ctx.content === false) {
                        return '';
                        return;
                    } else {
                        return $216(__$ctx);
                    }
                } else if (__t === 'ahead') {
                    return [
                        { elem: 'ahead-filler' },
                        { elem: 'ahead-hint' }
                    ];
                    return;
                } else {
                    return $216(__$ctx);
                }
            } else if (__t === 'attrs') {
                var __t = $$elem;
                if (__t === 'clear') {
                    return { unselectable: 'on' };
                    return;
                } else if (__t === 'control') {
                    var _$2hga = __$ctx._.extend({
                            id: __$ctx._inputId,
                            name: __$ctx._name
                        }, __$ctx.ctx.controlAttrs);
                    (__$ctx._value || __$ctx._value === 0) && (_$2hga.value = __$ctx._value);
                    $$mods.disabled && (_$2hga.disabled = 'disabled');
                    _$2hga['aria-labelledby'] = __$ctx._labelId + ' ' + __$ctx._hintId;
                    return _$2hga;
                    return;
                } else {
                    return $216(__$ctx);
                }
            } else if (__t === 'tag') {
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
                        return $216(__$ctx);
                    }
                }
            } else if (__t === 'default') {
                return $34(__$ctx);
            } else if (__t === 'mix') {
                if ($$elem === 'ahead') {
                    return [{
                            block: 'input',
                            elem: 'input'
                        }];
                    return;
                } else {
                    if (!__$ctx._inSlider === false) {
                        if (!!$$elem === false) {
                            return [{
                                    block: 'slider',
                                    elem: 'input'
                                }];
                            return;
                        } else {
                            return $216(__$ctx);
                        }
                    } else {
                        return $216(__$ctx);
                    }
                }
            } else if (__t === 'value') {
                return $62(__$ctx);
            } else if (__t === 'js') {
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
                    return $216(__$ctx);
                }
            } else {
                return $216(__$ctx);
            }
        } else if (__t === 'slider') {
            var __t = $$mode;
            if (__t === 'mix') {
                if ($$elem === 'body') {
                    return $91(__$ctx);
                } else {
                    return $216(__$ctx);
                }
            } else if (__t === 'attrs') {
                var __t = $$elem;
                if (__t === 'mark') {
                    return { 'aria-hidden': true };
                    return;
                } else if (__t === 'runner') {
                    return {
                        hideFocus: 'true',
                        id: __$ctx.ctx.id,
                        role: 'slider',
                        'aria-valuenow': __$ctx._value,
                        'aria-valuemin': __$ctx.ctx.min,
                        'aria-valuemax': __$ctx.ctx.max,
                        'aria-disabled': (__$ctx.ctx.mods || {}).disabled === 'yes',
                        'aria-labelledby': __$ctx.ctx.labelledby,
                        'aria-controls': __$ctx.ctx.inputId
                    };
                    return;
                } else {
                    return $216(__$ctx);
                }
            } else if (__t === 'content') {
                var __t = $$elem;
                if (__t === 'text') {
                    return __$ctx._value;
                    return;
                } else if (__t === 'runner') {
                    return { elem: 'text' };
                    return;
                } else {
                    if (!!$$elem === false) {
                        return [
                            __$ctx.ctx.content,
                            {
                                elem: 'body',
                                content: { elem: 'click' }
                            }
                        ];
                        return;
                    } else {
                        return $216(__$ctx);
                    }
                }
            } else if (__t === 'tag') {
                var __t = $$elem;
                if (__t === 'text') {
                    return 'span';
                    return;
                } else if (__t === 'runner') {
                    return 'a';
                    return;
                } else {
                    return $216(__$ctx);
                }
            } else if (__t === 'default') {
                return $128(__$ctx);
            } else {
                return $216(__$ctx);
            }
        } else if (__t === 'i-ua') {
            var __t = $$mode;
            if (__t === 'content') {
                return $145(__$ctx);
            } else if (__t === 'bem') {
                if (!!$$elem === false) {
                    return false;
                    return;
                } else {
                    return $216(__$ctx);
                }
            } else if (__t === 'tag') {
                if (!!$$elem === false) {
                    return 'script';
                    return;
                } else {
                    return $216(__$ctx);
                }
            } else {
                return $216(__$ctx);
            }
        } else if (__t === 'b-page') {
            if ($$mode === 'js-params') {
                if (!!$$elem === false) {
                    return $171(__$ctx);
                } else {
                    return $216(__$ctx);
                }
            } else {
                return $216(__$ctx);
            }
        } else if (__t === 'i-global') {
            var __t = $$mode;
            if (__t === 'public-params') {
                return $177(__$ctx);
            } else if (__t === 'default') {
                return $182(__$ctx);
            } else if (__t === 'env') {
                return $209(__$ctx);
            } else {
                return $216(__$ctx);
            }
        } else {
            return $216(__$ctx);
        }
    }
    function $34(__$ctx) {
        if ($$elem === 'control') {
            if (!(__$ctx['__$anflg269'] !== true) === false) {
                if (!!$$mods.clear === false) {
                    return $38(__$ctx);
                } else {
                    return $43(__$ctx);
                }
            } else {
                return $43(__$ctx);
            }
        } else {
            return $43(__$ctx);
        }
    }
    function $38(__$ctx) {
        {
            '';
            var __r0 = __$ctx['__$anflg269'];
            __$ctx['__$anflg269'] = true;
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
                $217(__$ctx);
                __$ctx.ctx = __r1;
                $$mode = __r2;
                '';
            }
            __$ctx['__$anflg269'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $43(__$ctx) {
        if (!(__$ctx['__$anflg268'] !== true) === false) {
            if (!!$$elem === false) {
                return $46(__$ctx);
            } else {
                return $216(__$ctx);
            }
        } else {
            return $216(__$ctx);
        }
    }
    function $46(__$ctx) {
        var __r0, __r1, __r2;
        var _$2h7value = ('', __r0 = $$mode, $$mode = 'value', __r1 = __$ctx.ctx, __$ctx.ctx = __$ctx.ctx.value, __r2 = $62(__$ctx), $$mode = __r0, __$ctx.ctx = __r1, '', __r2), _$2h7id = __$ctx.ctx.id || __$ctx.generateId(), _$2h7mods = __$ctx.ctx.mods || {};
        _$2h7mods.theme = _$2h7mods.theme || 'normal';
        {
            '';
            var __r3 = __$ctx['__$anflg268'];
            __$ctx['__$anflg268'] = true;
            {
                '';
                var __r4 = __$ctx._inputId;
                __$ctx._inputId = _$2h7id;
                var __r5 = __$ctx._labelId;
                __$ctx._labelId = 'label' + _$2h7id;
                var __r6 = __$ctx._hintId;
                __$ctx._hintId = 'hint' + _$2h7id;
                var __r7 = __$ctx._name;
                __$ctx._name = __$ctx.ctx.name || '';
                var __r8 = __$ctx._value;
                __$ctx._value = _$2h7value;
                var __r9 = __$ctx._inputLink;
                __$ctx._inputLink = true;
                var __r10 = __$ctx._disabled;
                __$ctx._disabled = $$mods.disabled;
                var __r11 = __$ctx.ctx, __r12 = __r11.mods;
                __r11.mods = _$2h7mods;
                $34(__$ctx);
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
            __$ctx['__$anflg268'] = __r3;
            '';
        }
        undefined;
        return;
    }
    function $62(__$ctx) {
        if (!__$ctx.isSimple(__$ctx.ctx) === false) {
            if (!!$$elem === false) {
                return __$ctx.ctx;
                return;
            } else {
                return $68(__$ctx);
            }
        } else {
            return $68(__$ctx);
        }
    }
    function $68(__$ctx) {
        if (!__$ctx.ctx === false) {
            if (!!$$elem === false) {
                var _$2h9value = [];
                {
                    '';
                    var __r0 = __$ctx._buf;
                    __$ctx._buf = _$2h9value;
                    var __r1 = $$mode;
                    $$mode = '';
                    $217(__$ctx);
                    __$ctx._buf = __r0;
                    $$mode = __r1;
                    '';
                }
                undefined;
                return _$2h9value.join('');
                return;
            } else {
                return $74(__$ctx);
            }
        } else {
            return $74(__$ctx);
        }
    }
    function $74(__$ctx) {
        if (!true === false) {
            if (!!$$elem === false) {
                return '';
                return;
            } else {
                return $216(__$ctx);
            }
        } else {
            return $216(__$ctx);
        }
    }
    function $91(__$ctx) {
        if (!(__$ctx['__$anflg267'] !== true) === false) {
            if (!$$mods.orientation === false) {
                if (!!__$ctx.ctx._wOrigin === false) {
                    return $95(__$ctx);
                } else {
                    return $216(__$ctx);
                }
            } else {
                return $216(__$ctx);
            }
        } else {
            return $216(__$ctx);
        }
    }
    function $95(__$ctx) {
        var __r0, __r4, __r1, __r2, __r3;
        var _$2h4m = ('', __r0 = __$ctx['__$anflg267'], __$ctx['__$anflg267'] = true, __r4 = ('', __r1 = __$ctx.ctx, __r2 = __r1._wOrigin, __r1._wOrigin = true, __r3 = $91(__$ctx), __r1._wOrigin = __r2, '', __r3), __$ctx['__$anflg267'] = __r0, '', __r4) || [];
        _$2h4m.push({ elemMods: { origin: $$mods.orientation === 'vert' ? 'y' : 'x' } });
        return _$2h4m;
        return;
    }
    function $128(__$ctx) {
        if ($$elem === 'runner') {
            return $129(__$ctx);
        } else {
            return $134(__$ctx);
        }
    }
    function $129(__$ctx) {
        if (!!__$ctx._done === false) {
            var __r0, __r1, __r2;
            return '', __r0 = __$ctx._value, __$ctx._value = __$ctx.ctx.value, __r1 = __$ctx._done, __$ctx._done = true, __r2 = $129(__$ctx), __$ctx._value = __r0, __$ctx._done = __r1, '', __r2;
            return;
        } else {
            return $134(__$ctx);
        }
    }
    function $134(__$ctx) {
        if (!(__$ctx['__$anflg266'] !== true) === false) {
            if (!!$$elem === false) {
                var _$2guid = __$ctx.generateId();
                {
                    '';
                    var __r0 = __$ctx['__$anflg266'];
                    __$ctx['__$anflg266'] = true;
                    {
                        '';
                        var __r1 = __$ctx._inSlider;
                        __$ctx._inSlider = true;
                        var __r2 = __$ctx._titleId;
                        __$ctx._titleId = 'title' + _$2guid;
                        $128(__$ctx);
                        __$ctx._inSlider = __r1;
                        __$ctx._titleId = __r2;
                        '';
                    }
                    __$ctx['__$anflg266'] = __r0;
                    '';
                }
                return;
            } else {
                return $216(__$ctx);
            }
        } else {
            return $216(__$ctx);
        }
    }
    function $145(__$ctx) {
        if (!(__$ctx['__$anflg265'] !== true) === false) {
            if (!!$$elem === false) {
                var __r0, __r1;
                var _$2gtc = ('', __r0 = __$ctx['__$anflg265'], __$ctx['__$anflg265'] = true, __r1 = $145(__$ctx), __$ctx['__$anflg265'] = __r0, '', __r1);
                _$2gtc += [
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
                return _$2gtc;
                return;
            } else {
                return $151(__$ctx);
            }
        } else {
            return $151(__$ctx);
        }
    }
    function $151(__$ctx) {
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
            return $216(__$ctx);
        }
    }
    function $171(__$ctx) {
        var __r0, __r1, __r2, __r3;
        var _$2gp_this = __$ctx['i-global'], _$2gpjs = {}, _$2gpblock = {
                block: 'i-global',
                js: _$2gpjs
            }, _$2gpe;
        for (_$2gpe in _$2gp_this) {
            if (_$2gp_this.hasOwnProperty(_$2gpe) && ('', __r0 = $$mode, $$mode = 'public-params', __r1 = $$block, $$block = 'i-global', __r2 = $$elem, $$elem = _$2gpe, __r3 = $177(__$ctx), $$mode = __r0, $$block = __r1, $$elem = __r2, '', __r3)) {
                _$2gpjs[_$2gpe] = _$2gp_this[_$2gpe];
            } else {
                undefined;
            }
        }
        return _$2gpblock;
        return;
    }
    function $177(__$ctx) {
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
            return $216(__$ctx);
        }
    }
    function $182(__$ctx) {
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
                    return $206(__$ctx);
                } else {
                    return $216(__$ctx);
                }
            }
        }
    }
    function $206(__$ctx) {
        var _$2gdparams = __$ctx.ctx.params || {}, _$2gdiGlobal = __$ctx['i-global'], _$2gdisTldChanged = _$2gdparams.tld && _$2gdparams.tld !== _$2gdiGlobal.tld, _$2gdtld, _$2gdxYaDomain, _$2gdyaDomain;
        if (_$2gdisTldChanged) {
            _$2gdtld = _$2gdparams.tld;
            _$2gdxYaDomain = _$2gdtld === 'tr' ? 'yandex.com.tr' : 'yandex.' + _$2gdtld;
            _$2gdyaDomain = [
                'ua',
                'by',
                'kz'
            ].indexOf(_$2gdtld) != -1 ? 'yandex.ru' : _$2gdxYaDomain;
            _$2gdiGlobal['content-region'] = _$2gdtld;
            _$2gdiGlobal['click-host'] = '//clck.' + _$2gdyaDomain;
            _$2gdiGlobal['passport-host'] = 'https://passport.' + _$2gdyaDomain;
            _$2gdiGlobal['pass-host'] = '//pass.' + _$2gdxYaDomain;
            _$2gdiGlobal['social-host'] = '//social.' + _$2gdxYaDomain;
            _$2gdiGlobal['export-host'] = '//export.' + _$2gdxYaDomain;
        } else {
            undefined;
        }
        for (var _$2gdp in _$2gdparams) {
            _$2gdiGlobal[_$2gdp] = _$2gdparams[_$2gdp];
        }
        return;
    }
    function $209(__$ctx) {
        if (!!$$elem === false) {
            return {};
            return;
        } else {
            return $216(__$ctx);
        }
    }
    function $216(__$ctx) {
        var __t = $$mode;
        if (__t === '') {
            return $217(__$ctx);
        } else if (__t === 'content') {
            return __$ctx.ctx.content;
            return;
        } else if (__t === 'mix' || __t === 'bem' || __t === 'jsAttr' || __t === 'js' || __t === 'cls' || __t === 'attrs' || __t === 'tag') {
            return undefined;
            return;
        } else {
            return $238(__$ctx);
        }
    }
    function $217(__$ctx) {
        if (!!__$ctx['i-global'] === false) {
            return $219(__$ctx);
        } else {
            return $238(__$ctx);
        }
    }
    function $219(__$ctx) {
        var __r0, __r1, __r2, __r3, __r4, __r5, __r6;
        var _$2gbps = {}, _$2gbes = [
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
            ], _$2gbe;
        while (_$2gbe = _$2gbes.shift()) {
            _$2gbps[_$2gbe] = ('', __r0 = $$mode, $$mode = 'default', __r1 = $$block, $$block = 'i-global', __r2 = $$elem, $$elem = _$2gbe, __r3 = $182(__$ctx), $$mode = __r0, $$block = __r1, $$elem = __r2, '', __r3);
        }
        __$ctx['i-global'] = __$ctx._.extend(_$2gbps, ('', __r4 = $$mode, $$mode = 'env', __r5 = $$block, $$block = 'i-global', __r6 = $209(__$ctx), $$mode = __r4, $$block = __r5, '', __r6));
        applyc(__$ctx);
        undefined;
        return;
    }
    function $238(__$ctx) {
        if (!__$ctx.ctx === false) {
            if (!__$ctx.ctx.link === false) {
                if (!!__$ctx._.isSimple(__$ctx.ctx) === false) {
                    return $242(__$ctx);
                } else {
                    return $247(__$ctx);
                }
            } else {
                return $247(__$ctx);
            }
        } else {
            return $247(__$ctx);
        }
    }
    function $242(__$ctx) {
        var __r0, __r1;
        function _$2g2follow() {
            if (this.ctx.link === 'no-follow') {
                return undefined;
            } else {
                undefined;
            }
            var data = this._links[this.ctx.link];
            return '', __r0 = this.ctx, this.ctx = data, __r1 = $1(__$ctx), this.ctx = __r0, '', __r1;
        }
        if (!cache || !__$ctx._cacheLog) {
            return _$2g2follow.call(__$ctx);
        } else {
            undefined;
        }
        var _$2g2contents = __$ctx._buf.slice(__$ctx._cachePos).join('');
        __$ctx._cachePos = __$ctx._buf.length;
        __$ctx._cacheLog.push(_$2g2contents, {
            log: __$ctx._localLog.slice(),
            link: __$ctx.ctx.link
        });
        var _$2g2res = _$2g2follow.call(__$ctx);
        __$ctx._cachePos = __$ctx._buf.length;
        return _$2g2res;
        return;
    }
    function $247(__$ctx) {
        if (!cache === false) {
            if (!__$ctx.ctx === false) {
                if (!__$ctx.ctx.cache === false) {
                    return $251(__$ctx);
                } else {
                    return $256(__$ctx);
                }
            } else {
                return $256(__$ctx);
            }
        } else {
            return $256(__$ctx);
        }
    }
    function $251(__$ctx) {
        var _$2g1cached;
        function _$2g1setProperty(obj, key, value) {
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
        if (_$2g1cached = cache.get(__$ctx.ctx.cache)) {
            var _$2g1oldLinks = __$ctx._links;
            if (__$ctx.ctx.links) {
                __$ctx._links = __$ctx.ctx.links;
            } else {
                undefined;
            }
            for (var _$2g1i = 0; _$2g1i < _$2g1cached.log.length; _$2g1i++) {
                if (typeof _$2g1cached.log[_$2g1i] === 'string') {
                    __$ctx._buf.push(_$2g1cached.log[_$2g1i]);
                    continue;
                } else {
                    undefined;
                }
                var _$2g1log = _$2g1cached.log[_$2g1i], _$2g1reverseLog;
                _$2g1reverseLog = _$2g1log.log.map(function (entry) {
                    return {
                        key: entry[0],
                        value: _$2g1setProperty(this, entry[0], entry[1])
                    };
                }, __$ctx).reverse();
                {
                    '';
                    var __r0 = __$ctx.ctx, __r1 = __r0.cache;
                    __r0.cache = null;
                    var __r2 = __$ctx._cacheLog;
                    __$ctx._cacheLog = null;
                    var __r3 = __$ctx.ctx, __r4 = __r3.link;
                    __r3.link = _$2g1log.link;
                    $1(__$ctx);
                    __r0.cache = __r1;
                    __$ctx._cacheLog = __r2;
                    __r3.link = __r4;
                    '';
                }
                undefined;
                _$2g1reverseLog.forEach(function (entry) {
                    _$2g1setProperty(this, entry.key, entry.value);
                }, __$ctx);
            }
            __$ctx._links = _$2g1oldLinks;
            return _$2g1cached.res;
        } else {
            undefined;
        }
        var _$2g1cacheLog = [], _$2g1res;
        {
            '';
            var __r5 = __$ctx.ctx, __r6 = __r5.cache;
            __r5.cache = null;
            var __r7 = __$ctx._cachePos;
            __$ctx._cachePos = __$ctx._buf.length;
            var __r8 = __$ctx._cacheLog;
            __$ctx._cacheLog = _$2g1cacheLog;
            var __r9 = __$ctx._localLog;
            __$ctx._localLog = [];
            {
                _$2g1res = $1(__$ctx);
                var _$2g1tail = __$ctx._buf.slice(__$ctx._cachePos).join('');
                if (_$2g1tail) {
                    _$2g1cacheLog.push(_$2g1tail);
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
            log: _$2g1cacheLog,
            res: _$2g1res
        });
        return _$2g1res;
        return;
    }
    function $256(__$ctx) {
        var __t = $$mode;
        if (__t === 'default') {
            return $258(__$ctx);
        } else if (__t === '') {
            if (!__$ctx._.isSimple(__$ctx.ctx) === false) {
                __$ctx._listLength--;
                var _$2fzctx = __$ctx.ctx;
                (_$2fzctx && _$2fzctx !== true || _$2fzctx === 0) && __$ctx._buf.push(_$2fzctx);
                return;
            } else {
                if (!!__$ctx.ctx === false) {
                    __$ctx._listLength--;
                    return;
                } else {
                    if (!__$ctx._.isArray(__$ctx.ctx) === false) {
                        return $267(__$ctx);
                    } else {
                        if (!true === false) {
                            return $270(__$ctx);
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
    function $258(__$ctx) {
        var __r13, __r0, __r4, __r5, __r6, __r7, __r8, __r9, __r10, __r11, __r12, __r1, __r14, __r15, __r16, __r17, __r20, __r21, __r22, __r23, __r24, __r25;
        var _$2g0BEM_ = __$ctx.BEM, _$2g0v = __$ctx.ctx, _$2g0buf = __$ctx._buf, _$2g0tag;
        _$2g0tag = ('', __r0 = $$mode, $$mode = 'tag', __r1 = $1(__$ctx), $$mode = __r0, '', __r1);
        typeof _$2g0tag != 'undefined' || (_$2g0tag = _$2g0v.tag);
        typeof _$2g0tag != 'undefined' || (_$2g0tag = 'div');
        if (_$2g0tag) {
            var _$2g0jsParams, _$2g0js;
            if ($$block && _$2g0v.js !== false) {
                _$2g0js = ('', __r4 = $$mode, $$mode = 'js', __r5 = $1(__$ctx), $$mode = __r4, '', __r5);
                _$2g0js = _$2g0js ? __$ctx._.extend(_$2g0v.js, _$2g0js === true ? {} : _$2g0js) : _$2g0v.js === true ? {} : _$2g0v.js;
                _$2g0js && ((_$2g0jsParams = {})[_$2g0BEM_.INTERNAL.buildClass($$block, _$2g0v.elem)] = _$2g0js);
            } else {
                undefined;
            }
            _$2g0buf.push('<', _$2g0tag);
            var _$2g0isBEM = ('', __r6 = $$mode, $$mode = 'bem', __r7 = $1(__$ctx), $$mode = __r6, '', __r7);
            typeof _$2g0isBEM != 'undefined' || (_$2g0isBEM = typeof _$2g0v.bem != 'undefined' ? _$2g0v.bem : _$2g0v.block || _$2g0v.elem);
            var _$2g0cls = ('', __r8 = $$mode, $$mode = 'cls', __r9 = $1(__$ctx), $$mode = __r8, '', __r9);
            _$2g0cls || (_$2g0cls = _$2g0v.cls);
            var _$2g0addJSInitClass = _$2g0v.block && _$2g0jsParams;
            if (_$2g0isBEM || _$2g0cls) {
                _$2g0buf.push(' class="');
                if (_$2g0isBEM) {
                    _$2g0BEM_.INTERNAL.buildClasses($$block, _$2g0v.elem, _$2g0v.elemMods || _$2g0v.mods, _$2g0buf);
                    var _$2g0mix = ('', __r10 = $$mode, $$mode = 'mix', __r11 = $1(__$ctx), $$mode = __r10, '', __r11);
                    _$2g0v.mix && (_$2g0mix = _$2g0mix ? _$2g0mix.concat(_$2g0v.mix) : _$2g0v.mix);
                    if (_$2g0mix) {
                        var _$2g0visited = {};
                        function _$2g0visitedKey(block, elem) {
                            return (block || '') + '__' + (elem || '');
                        }
                        _$2g0visited[_$2g0visitedKey($$block, $$elem)] = true;
                        if (!__$ctx._.isArray(_$2g0mix)) {
                            _$2g0mix = [_$2g0mix];
                        } else {
                            undefined;
                        }
                        for (var _$2g0i = 0; _$2g0i < _$2g0mix.length; _$2g0i++) {
                            var _$2g0mixItem = _$2g0mix[_$2g0i];
                            if (!_$2g0mixItem) {
                                continue;
                            } else {
                                undefined;
                            }
                            var _$2g0hasItem = _$2g0mixItem.block || _$2g0mixItem.elem, _$2g0block = _$2g0mixItem.block || _$2g0mixItem._block || $$block, _$2g0elem = _$2g0mixItem.elem || _$2g0mixItem._elem || $$elem, _$2g0mods = _$2g0mixItem.mods || $$mods, _$2g0elemMods = _$2g0mixItem.elemMods || {};
                            _$2g0hasItem && _$2g0buf.push(' ');
                            _$2g0BEM_.INTERNAL[_$2g0hasItem ? 'buildClasses' : 'buildModsClasses'](_$2g0block, _$2g0mixItem.elem || _$2g0mixItem._elem || (_$2g0mixItem.block ? undefined : $$elem), _$2g0mixItem.elemMods || _$2g0mixItem.mods, _$2g0buf);
                            if (_$2g0mixItem.js) {
                                (_$2g0jsParams || (_$2g0jsParams = {}))[_$2g0BEM_.INTERNAL.buildClass(_$2g0block, _$2g0mixItem.elem)] = _$2g0mixItem.js === true ? {} : _$2g0mixItem.js;
                                _$2g0addJSInitClass || (_$2g0addJSInitClass = _$2g0block && !_$2g0mixItem.elem);
                            } else {
                                undefined;
                            }
                            if (_$2g0hasItem && !_$2g0visited[_$2g0visitedKey(_$2g0block, _$2g0elem)]) {
                                _$2g0visited[_$2g0visitedKey(_$2g0block, _$2g0elem)] = true;
                                var _$2g0nestedMix = ('', __r12 = $$block, $$block = _$2g0block, __r13 = $$elem, $$elem = _$2g0elem, __r14 = $$mods, $$mods = _$2g0mods, __r15 = $$elemMods, $$elemMods = _$2g0elemMods, __r16 = $$mode, $$mode = 'mix', __r17 = $1(__$ctx), $$block = __r12, $$elem = __r13, $$mods = __r14, $$elemMods = __r15, $$mode = __r16, '', __r17);
                                if (_$2g0nestedMix) {
                                    for (var _$2g0j = 0; _$2g0j < _$2g0nestedMix.length; _$2g0j++) {
                                        var _$2g0nestedItem = _$2g0nestedMix[_$2g0j];
                                        if (!_$2g0nestedItem.block && !_$2g0nestedItem.elem || !_$2g0visited[_$2g0visitedKey(_$2g0nestedItem.block, _$2g0nestedItem.elem)]) {
                                            _$2g0nestedItem._block = _$2g0block;
                                            _$2g0nestedItem._elem = _$2g0elem;
                                            _$2g0mix.splice(_$2g0i + 1, 0, _$2g0nestedItem);
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
                _$2g0cls && _$2g0buf.push(_$2g0isBEM ? ' ' : '', _$2g0cls);
                _$2g0addJSInitClass && _$2g0buf.push(' i-bem');
                _$2g0buf.push('"');
            } else {
                undefined;
            }
            if (_$2g0jsParams) {
                var _$2g0jsAttr = ('', __r20 = $$mode, $$mode = 'jsAttr', __r21 = $1(__$ctx), $$mode = __r20, '', __r21);
                _$2g0buf.push(' ', _$2g0jsAttr || 'data-bem', '="', __$ctx._.attrEscape(JSON.stringify(_$2g0jsParams)), '"');
            } else {
                undefined;
            }
            var _$2g0attrs = ('', __r22 = $$mode, $$mode = 'attrs', __r23 = $1(__$ctx), $$mode = __r22, '', __r23);
            _$2g0attrs = __$ctx._.extend(_$2g0attrs, _$2g0v.attrs);
            if (_$2g0attrs) {
                var _$2g0name;
                for (_$2g0name in _$2g0attrs) {
                    if (_$2g0attrs[_$2g0name] === undefined) {
                        continue;
                    } else {
                        undefined;
                    }
                    _$2g0buf.push(' ', _$2g0name, '="', __$ctx._.attrEscape(_$2g0attrs[_$2g0name]), '"');
                }
            } else {
                undefined;
            }
        } else {
            undefined;
        }
        if (__$ctx._.isShortTag(_$2g0tag)) {
            _$2g0buf.push('/>');
        } else {
            _$2g0tag && _$2g0buf.push('>');
            var _$2g0content = ('', __r24 = $$mode, $$mode = 'content', __r25 = $1(__$ctx), $$mode = __r24, '', __r25);
            if (_$2g0content || _$2g0content === 0) {
                var _$2g0isBEM = $$block || $$elem;
                {
                    '';
                    var __r26 = __$ctx._notNewList;
                    __$ctx._notNewList = false;
                    var __r27 = __$ctx.position;
                    __$ctx.position = _$2g0isBEM ? 1 : __$ctx.position;
                    var __r28 = __$ctx._listLength;
                    __$ctx._listLength = _$2g0isBEM ? 1 : __$ctx._listLength;
                    var __r29 = __$ctx.ctx;
                    __$ctx.ctx = _$2g0content;
                    var __r30 = $$mode;
                    $$mode = '';
                    $1(__$ctx);
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
            _$2g0tag && _$2g0buf.push('</', _$2g0tag, '>');
        }
        return;
    }
    function $267(__$ctx) {
        var _$2fxv = __$ctx.ctx, _$2fxl = _$2fxv.length, _$2fxi = 0, _$2fxprevPos = __$ctx.position, _$2fxprevNotNewList = __$ctx._notNewList;
        if (_$2fxprevNotNewList) {
            __$ctx._listLength += _$2fxl - 1;
        } else {
            __$ctx.position = 0;
            __$ctx._listLength = _$2fxl;
        }
        __$ctx._notNewList = true;
        while (_$2fxi < _$2fxl) {
            var _$2fxnewCtx = _$2fxv[_$2fxi++];
            {
                '';
                var __r0 = __$ctx.ctx;
                __$ctx.ctx = _$2fxnewCtx == null ? '' : _$2fxnewCtx;
                $1(__$ctx);
                __$ctx.ctx = __r0;
                '';
            }
            undefined;
        }
        _$2fxprevNotNewList || (__$ctx.position = _$2fxprevPos);
        return;
    }
    function $270(__$ctx) {
        var _$2fwvBlock = __$ctx.ctx.block, _$2fwvElem = __$ctx.ctx.elem, _$2fwblock = __$ctx._currBlock || $$block;
        __$ctx.ctx || (__$ctx.ctx = {});
        {
            '';
            var __r0 = $$mode;
            $$mode = 'default';
            var __r1 = __$ctx._links;
            __$ctx._links = __$ctx.ctx.links || __$ctx._links;
            var __r2 = $$block;
            $$block = _$2fwvBlock || (_$2fwvElem ? _$2fwblock : undefined);
            var __r3 = __$ctx._currBlock;
            __$ctx._currBlock = _$2fwvBlock || _$2fwvElem ? undefined : _$2fwblock;
            var __r4 = $$elem;
            $$elem = __$ctx.ctx.elem;
            var __r5 = $$mods;
            $$mods = (_$2fwvBlock ? __$ctx.ctx.mods : $$mods) || {};
            var __r6 = $$elemMods;
            $$elemMods = __$ctx.ctx.elemMods || {};
            {
                $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
                $1(__$ctx);
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
/*borschik:include:../../../../common.blocks/slider/slider.js*/;
/*borschik:include:../../../../desktop.blocks/slider/slider.js*/;
/*borschik:include:../../../../common.blocks/slider/__ui/slider__ui.js*/;
/*borschik:include:../../../../desktop.blocks/slider/__ui/slider__ui.js*/;
/*borschik:include:../../../../common.blocks/slider/__math/slider__math.js*/;
/*borschik:include:../../../../common.blocks/slider/_orientation/slider_orientation_horiz.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-desktop/i-jquery/__leftclick/i-jquery__leftclick.js*/;
/*borschik:include:../../../../common.blocks/input/input.js*/;
/*borschik:include:../../../../desktop.blocks/input/input.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-system/i-system.js*/;
/*borschik:include:../../../../common.blocks/input/__clear/input__clear.js*/;
/*borschik:include:../../../../common.blocks/slider/_type/slider_type_range.js*/;


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


BEM.I18N.lang('ru');
