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
/* ../../../../common.blocks/slider/slider.js begin */
(function($, BEM, undefined) {

var KEYDOWN_EVENT = $.browser.opera ? 'keypress' : 'keydown',

    /** @const Number проценты */
    RENDER_THROTTLING = 0.25,

    percentsCache = [],
    valsCache = [];

/**
 * Хелпер для обновления кешей значений слайдера во время движения.
 *
 * @private
 * @param {Number} idx Индекс активного ползунка.
 * @param {Number} val Расчетное значение ползунка к координатах.
 * @param {Number} percent Расчетное значение в процентах.
 * @param {Array} vals Значения слайдера.
 */
function dropCache(idx, val, percent, vals) {
    // троттлинг
    if(Math.abs(percent - percentsCache[idx]) < RENDER_THROTTLING) {
        return;
    }

    var inc = percent > percentsCache[idx] ? 1 : 0,
        i = 0,
        n = percentsCache.length,
        next;

    percentsCache[idx] = percent;

    if(n === 1) {
        return;
    }

    do {
        if(i === idx) {
            continue;
        }

        next = percentsCache[i];

        if(inc) {
            if(i > idx) {
                next < percent && (percentsCache[i] = percent);
                val >= vals[i] && (valsCache[i] = vals[i]);
            } else {
                percentsCache[i] = val < valsCache[i] ? percent : this._calcPercentByValue(valsCache[i]);
            }
        } else {
            if(i < idx) {
                next > percent && (percentsCache[i] = percent);
                val <= vals[i] && (valsCache[i] = vals[i]);
            } else {
                percentsCache[i] = val > valsCache[i] ? percent : this._calcPercentByValue(valsCache[i]);
            }
        }
    } while(++i < n);

}

/**
 * @private
 * @param {Number} keyCode
 * @returns {Number|Boolean} флаг описывающий направление 1 — влево/вниз; 2 — вправо/вверх
 */
function isArrowKey(keyCode) {

    return ({37: 1, 38: 2, 39: 2, 40: 1}[keyCode]);

}

/**
 * Блок `slider` («слайдер») —  управляющий элемент интерфейса для удобного и наглядного выбора диапазона значений.
 * Позволяет создавать слайдер с одним или двумя ползунками, равномерной или неравномерной шкалой.
 *
 * @param {Object} [params] JS-параметры блока.
 * @param {Number} [params.min] Минимальное значение слайдера. Если не задано, будет использовано крайнее правое
 * значение шкалы.
 * @param {Number} [params.max] Максимальное значение слайдера. Если не задано, будет использовано крайнее левое
 * значение шкалы.
 * @param {Object[]} [params.scale] Массив объектов, описывающих деления шкалы. Каждый элемент массива - объект со
 * следуюшими ключами:
 * - `value` - Значение элемента шкалы.
 * - `step` - Шаг изменения шкалы на заданном участке.
 * - `percent` - Процент от общей ширины шкалы. Обязателен для всех значений, кроме первого и последнего.
 * - `label` - Метка деления. Будет отображена в нижней части слайдера, в позиции, заданной параметром
 *   `percent`.
 */
BEM.DOM.decl('slider', {

    /**
     * Генерируется при изменении значения любого ползунка.
     *
     * @event slider#change
     * @param {Object} [data] Дополнительные данные о событии.
     * @param {String} [data.source] Источник изменения. Принимает
     * значение `drag`, если значение изменено перетаскиванием ползунка.
     */

    /**
     * Генерируется при завершении перетаскивания ползунка (когда
     * пользователь отпускает кнопку мыши).
     *
     * @event slider#dragend
     */

    /**
     * @private
     */
    onSetMod: {

        'js': function() {
            this._setScale();

            this._setVals();

            this.on('change', this._onChange, this);
        },

        'disabled': function(modName, modVal) {
            this.setMod(this.elem('runner'), modName, modVal);
        }

    },

    /**
     * @private
     */
    onElemSetMod: {

        'runner': {

            'disabled': function(elem, modName, modVal) {
                var isDisabled = modVal === 'yes';

                isDisabled && this.delMod(elem, 'focused');

                elem.attr({
                    tabindex: isDisabled ? -1 : 0,
                    'aria-disabled': isDisabled
                });

                this._getInputs()[this._getRunnerIdx(elem)].toggleMod(modName, 'yes', '', isDisabled);
            },

            'focused': {

                'yes': function(elem, modName, value) {
                    if(this.isRunnerDisabled(elem) || this.isDisabled()) {
                        return false;
                    }

                    this.delMod(this.elem('runner'), modName);

                    this
                        .bindToDoc(KEYDOWN_EVENT, function(e) {
                            var direction = isArrowKey(e.which);
                            if(!direction) {
                                return;
                            }

                            e.preventDefault();

                            this._isSliding || (this.delMod('animation')._isSliding = true);

                            direction > 1 ? this.next() : this.prev();
                        })
                        .bindToDoc('keyup', function(e) {
                            this._isSliding &&
                                (this.setMod('animation', 'yes')._isSliding = false);
                        });

                    this._interval = this._getIntervalByValue(this._vals[this._getRunnerIdx(elem)]);

                    elem.focus();
                },

                '': function(elem, modName, value, prev) {
                    this.unbindFromDoc(KEYDOWN_EVENT + ' keyup');

                    elem.eq(this._activeRunner) && (this._activeRunner = null);
                }

            }

        }

    },

    /**
     * @private
     */
    _setScale: function() {
        var scale = this._scale = this.params.scale;

        scale[0].percent = 0;
        scale.length > 1 && (scale[scale.length - 1].percent = 100);
    },

    /**
     * @private
     */
    _setVals: function() {
        var _this = this;
        this._vals = this._getInputs().map(function(block) {
            var v = parseFloat(block.val());
            return isNaN(v) ? _this.min() : v;
        });
    },

    /**
     * @private
     */
    _getInputs: function() {
        return this._inputs || (this._inputs = this.findBlocksInside('input'));
    },

    /**
     * @private
     */
    _getInputIdx: function(input) {
        return $.inArray(input, this._getInputs());
    },

    /**
     * @private
     */
    _getRunnerIdx: function(runner) {
        return this.hasMod(runner, 'pos') ?
                this.getMod(runner, 'pos') - 1 : 0;
    },

    /**
     * @private
     */
    _getActiveRunner: function() {
        return this._activeRunner || (this._activeRunner = this.elem('runner', 'focused', 'yes'));
    },

    /**
     * @private
     */
    _onMouseDown: function(e) {
        e.preventDefault();

        if((e.type === 'mousedown' && e.which !== 1) || this.isDisabled() || this.isRunnerDisabled(e.data.domElem)) {
            return;
        }

        this._getOffsetPointerCoord(e);

        valsCache = this._vals.slice(0);
        percentsCache = this._calcPercentsByValue(valsCache);

        this
            .delMod('animation')
            .bindToDoc('mousemove touchmove', this._onMouseMove)
            .bindToDoc('mouseup touchend', this._onMouseUp)
            .setMod(e.data.domElem, 'focused', 'yes');
    },

    /**
     * @private
     */
    _onMouseMove: function(e) {
        var idx = this._getRunnerIdx(this._getActiveRunner()),
            val = this._calcValueByEvent(e);

        dropCache.call(this, idx, val,
            this._calcPercentByValue(this.toAllowedRange(idx, val)), this._vals);

        this._render(percentsCache);

        this._val(idx, val) && this.trigger('change', {source: 'drag'});
    },

    /**
     * @private
     */
    _onMouseUp: function(e) {
        this.unbindFromDoc('mousemove touchmove mouseup touchend');

        valsCache = [];
        percentsCache = [];

        this
            .setMod('animation', 'yes')
            ._render();

        this.trigger('dragend');
    },

    /**
     * @private
     */
    _onTrackClick: function(e) {
        if(this.isDisabled()) {
            return;
        }

        var val = this._calcValueByEvent(e),
            runner = this._getClosestRunnerByValue(val);

        if(runner) {
            this.vals(this._getRunnerIdx(runner), val, {source: 'click'});
        }
    },

    /**
     * @private
     */
    _onChange: function(e, data) {
        var inputs = this._getInputs();

        this._vals.forEach(function(val, i) {
            inputs[i].val(val);
        });

        return this;
    },

    /**
     * @private
     */
    _onInputChange: function(e) {
        var idx = this.elem('input').index(e.data.domElem),
            prev = this._vals[idx],
            input = this._getInputs()[idx];

        this.vals(idx, input.val(), {source: 'input'});

        prev === this._vals[idx] && input.val(this._vals[idx]);
    },

    /**
     * Выставить значение `val` в индекс `idx`.
     *
     * @private
     * @param {Numner} idx Индекс ползунка.
     * @param {Number} val Значение.
     * @returns {Boolean} Измелилось ли значение?
     */
    _val: function(idx, val) {
        val = parseFloat(val);

        // автовалидация ввода «не числа»
        if(isNaN(val)) {
            return true;
        }

        this._interval = this._getIntervalByValue(val);

        var step = this._scale[this._interval].step,
            mod = val % step;

        // пересчет значения в соответствии с шагом шкалы
        mod && ( val = val - mod + (step - mod > parseFloat((step / 2).toFixed()) ? 0 : step) );

        val = this.toAllowedRange(idx, parseFloat(val.toFixed(2)));

        var i = 0,
            vals = this._vals,
            n = vals.length,
            prev = vals[idx],
            inc, next;

        if(vals[idx] === val ? false : (vals[idx] = val, true)) {
            if(n === 1) {
                return true;
            }

            /** {Boolean} двигаем ползунок вперед */
            inc = prev > val ? 0 : 1;

            // обновляем значения соседних ползунков если неоходимо
            do {
                if(i === idx) {
                    continue;
                }

                next = vals[i];

                if(inc) {
                    i > idx ? (next < val && (vals[i] = val)) : (val <= valsCache[i] && (vals[i] = val));
                } else {
                    i < idx ? (next > val && (vals[i] = val)) : (val >= valsCache[i] && (vals[i] = val));
                }
            } while(++i < n);

            return true;
        }

        return false;
    },

    /**
     * Приводит значения выставляемое значение к допустимому диапазону.
     *
     * Переопределите этот метод для задания отличного от
     * [min; max] диапазона.
     *
     * @protected
     * @param {Number} idx Индекс ползунка, для которого выставляется значение.
     * @param {Number} val Текущее значение ползунка.
     * @returns {Number} Значение, приведенное к допустимому диапазону (по умолчанию
     * [min; max]).
     */
    toAllowedRange: function(idx, val) {
        var scale = this._scale,
            min = scale[0].value,
            max = scale[scale.length - 1].value;

        /*
        min = this._vals[idx - 1] || this._scale[this._interval].value;
        min < this.min() && (min = this.min());

        max = this._vals[idx + 1] || this._scale[this._interval + 1].value;
        max > this.max() && (max = this.max());
        */

        val > max && (val = max);
        val < min && (val = min);

        return val;
    },

    /**
     * Устанавливает значение первого ползунка, если передан параметр
     * `val`, или возвращает текущее значение, если параметр не передан.
     *
     * Если блок выключен, новое значение не будет уcтановлено.
     *
     * @public
     * @param {Number} [val] Выставляемое значение.
     * @param {Object} [data] Дополнительные данные, которые будут переданы в качестве параметра
     * сгенерированному событию `change`.
     * @returns {BEM.DOM|Number} Текущее значение или сам блок, если значение устанавливается.
     */
    val: function(val, data) {
        return this.vals(0, val, data);
    },

    /**
     * Выставляет или получает текущее значение для одного или нескольких ползунков.
     *
     * Если блок выключен, новые значения не будут установлены.
     *
     * Выставить первый ползунок в значение 123:
     *
     * ```javascript
     * slider.vals(0, 123);
     * ```
     *
     * Выставить значения двух ползунков в 123 и 456:
     *
     * ```javascript
     * slider.vals([123, 456])
     * ```
     *
     * Получить текушие значения ползунков:
     *
     * ```javascript
     * slider.vals() //вернет массив [123, 456]
     * ```
     *
     * Получить текущее значение второго ползунка:
     *
     * ```javascript
     * slider.vals(1) //вернет значение 456
     * ```
     *
     * При установке значений, генерирует событие `change`.
     *
     * @public
     * @param {Number} [idx=0] Индекс ползунка для установки или получения значения.
     * Если не передан, то val должен быть массивом, содержащим значения всех ползунков.
     * Индексация начинается с 0.
     * @param {Number|Number[]} [val] Значение ползунка для установки. Если передан массив,
     * будут установлены значения для всех ползунков.
     * @param {Object} [data] дополнительные данные, которые будут переданны в обработчик
     * события change.
     * @returns {BEM.DOM|Number|Number[]} Текущее значение одного ползунка, все значения или сам блок,
     * если значение устанавливается или блок заблокирован.
     */
    vals: function(idx, val, data) {
        var idxType = typeof idx;
        if(typeof val === 'undefined') {
            if(idxType !== 'object') {
                return idxType === 'number' ? this._vals[idx] : this._vals;
            }

            val = idx;
        }

        if(this.isDisabled()) {
            return this;
        }

        var _this = this,
            isChanged = false;

        if($.isArray(val)) {
            if(val.length < this._vals.length) {
                return _this;
            }

            this._vals.forEach(function(v, i) {
                _this._val(i, val[i]) && !isChanged && (isChanged = true);
            });
        } else {
            isChanged = _this._val(idx, val);
        }

        if(isChanged) {
            this._render();
            this.trigger('change', data);
        }

        return this;
    },

    /**
     * Устанавливает минимально допустимое значение,
     * если передан параметр min, или возвращает текущее значение,
     * если параметр не передан.
     *
     * @param {Number} [min] Устанавливаемое минимальное значение.
     * @returns {BEM.DOM|Number} Текущее значение или сам блок, если значение устанавливается.
     */
    min: function(min) {
        var params = this.params;

        if(typeof min === 'undefined') {
            return params.min ? params.min : this._scale[0].value;
        }

        return this.range(min, this.max());
    },

    /**
     * Устанавливает максимально допустимое значение,
     * если передан параметр max, или возвращает текущее значение,
     * если параметр не передан.
     *
     * @param {Number} [max] Устанавливаемое максимальное значение.
     * @returns {BEM.DOM|Number} Текущее значение или сам блок, если значение устанавливается.
     */
    max: function(max) {
        var params = this.params;

        if(typeof max === 'undefined') {
            return params.max ? params.max : this._scale[this._scale.length - 1].value;
        }

        return this.range(this.min(), max);
    },

    /**
     * Устанавливает или возвращает диапазон допустимых значений.
     *
     * @param {Number} [min] Минимально допустимое значение.
     * @param {Number} [max] Максимально допустимое значение. Если значение
     * не передано или оно меньше min, будет установлено максимально допусимое
     * значение текущей шкалы.
     * @returns {BEM.DOM|Number[]} текущие значения или сам блок, если значение устанавливается.
     */
    range: function(min, max) {
        if(typeof min === 'undefined') {
            return [this.min(), this.max()];
        }

        min < max || (max = this._scale[this._scale.length - 1].value);

        this.params.min = min;
        this.params.max = max;

        this._updateRange();
        this._render();

        return this;
    },

    /**
     * Сдвигает активный ползунок назад на один шаг шкалы.
     *
     * Вызывается при нажатии стрелки влево на клавиатуре.
     *
     * Не выполняет никаких действий, если у слайдера нет активного
     * ползунка или он находится в крайнем левом положении.
     *
     * @private
     * @returns {BEM.DOM}
     */
    prev: function() {
        var idx = this._getRunnerIdx(this._getActiveRunner());
        if(typeof idx === 'undefined' || !this._vals[idx]) {
            return;
        }

        var val = this._vals[idx] - this._scale[this._interval].step,
            interval = this._getIntervalByValue(val);

        // в случае «скачка» в соседний интервал, пересчитываем значение для него
        interval < this._interval &&
            (val = this._vals[idx] - this._scale[interval].step);

        return this.vals(idx, val, {source: 'keyboard'});
    },

    /**
     * Сдвигает активный ползунок вперед на один шаг шкалы.
     *
     * Вызывается при нажатии стрелки вправо на клавиатуре.
     *
     * Не выполняет никаких действий, если у слайдера нет активного
     * ползунка или он находится в крайнем правом положении.
     *
     * @private
     * @returns {BEM.DOM}
     */
    next: function() {
        var idx = this._getRunnerIdx(this._getActiveRunner());
        if(typeof idx === 'undefined' || (this._vals[idx] >= this._scale[this._scale.length - 1].value)) {
            return;
        }

        var val = this._vals[idx] + this._scale[this._interval].step,
            interval = this._getIntervalByValue(val);

        // в случае «скачка» в соседний интервал, пересчитываем значение для него
        interval > this._interval && (val = this._scale[interval].value);

        return this.vals(idx, val, {source: 'keyboard'});
    },

    /**
     * Возвращает `true`, если ползунок выключен.
     *
     * @public
     * @param {Number|jQuery} runner Индекс ползунка или его DOM-элемент.
     * @returns {Boolean}
     */
    isRunnerDisabled: function(runner) {
        if(typeof runner === 'number') {
            runner = this.elem('runner').eq(runner);
        }
        return this.hasMod(runner, 'disabled', 'yes');
    },

    /**
     * Возвращает `true`, если слайдер выключен.
     *
     * @public
     * @returns {Boolean}
     */
    isDisabled: function() {
        return this.hasMod('disabled', 'yes');
    },

    /**
     * Возвращает текущий интервал по шкале для активного ползунка.
     *
     * @public
     * @returns {Number}
     */
    getInterval: function() {
        return this._interval;
    },

    /**
     * Возвращает параметры по умолчанию.
     *
     * @public
     * @returns {{scale: Array}}
     */
    getDefaultParams: function() {
        return {
            scale: [
                {percent: 0, value: 0, step: 1, label: ''},
                {percent: 100, value: 100, step: 1, label: ''}
            ]
        };
    }

}, {

    live: function() {

        this
            .liveBindTo('click', 'leftclick', function(e){
                this._onTrackClick(e);
            })
            .liveBindTo('runner', 'focusin', function(e) {
                this.setMod($(e.target), 'focused', 'yes');
            })
            .liveBindTo('focusout', function(e){
                this.delMod(this.elem('runner'), 'focused');
            })
            .liveBindTo('runner', 'mousedown touchstart', function(e){
                this._onMouseDown(e);
            })
            .liveBindTo('input', 'focusout', function(e) {
                this._onInputChange(e);
            })
            .liveBindTo('input', 'keypress', function(e) {
                e.which === 13 && this._onInputChange(e);
            });

        return false;
    }

});

}(jQuery, BEM));

/* ../../../../common.blocks/slider/slider.js end */
;
/* ../../../../desktop.blocks/slider/slider.js begin */
BEM.DOM.decl('slider', {
    /**
     * @private
     */
    _onRunnerHover: function(e) {
        if(this.isDisabled()) {
            return;
        }

        this.toggleMod(e.data.domElem, 'hovered', 'yes', '', e.type === 'mouseenter');
    }
});

/* ../../../../desktop.blocks/slider/slider.js end */
;
/* ../../../../common.blocks/slider/__ui/slider__ui.js begin */
(function(BEM) {

// @const Number Заляпа, для LEGO-7371
var UI_DEVIATION = 0.2;

BEM.DOM.decl('slider', {

    onSetMod: {

        'js': function() {
            this.__base();

            this._build();

            // «выключаем» внутренние элементы
            this.hasMod('disabled', 'yes') &&
                this.setMod(this.elem('runner'), 'disabled', 'yes');

            if(typeof this.elem('body')[0].onselectstart !== 'undefined') {
                this.elem('body')[0].onselectstart = function() { return false };
            }

            this.afterCurrentEvent(function() {
                // https://st.yandex-team.ru/ISLCOMPONENTS-700
                this.domElem && this.setMod('animation', 'yes');
            });
        }
    },

    /**
     * Возвращает значение, выводимое на бегунке.
     *
     * @private
     * @param {String|Number} val Порядковый номер бегунка, или строка.
     * В последнем случае просто вернет этот аргумент.
     * @returns {String}
     */
    _getRunnerText: function(val) {
        if(typeof val === 'string') {
            return val;
        }

        return this._vals[val];
    },

    /**
     * @private
     */
    _updateOne: function(idx, percent) {
        var st = this._scale,
            runner = this.elem('runner').eq(idx);

        /** {Number} Определяет крайние состояния ползунка (__runner_state_left/_right) */
        st = this._vals[idx] === st[0].value ?
                -1 : (this._vals[idx] === st[st.length - 1].value ? 1 : 0);

        runner.css(this.__POS_UNIT, percent + '%');
        this
            .toggleMod(runner, 'state', 'start', '', st < 0)
            .toggleMod(runner, 'state', 'end', '', st > 0);

        var val = this._vals[idx];
        this.findElem(runner, 'text').html(this._getRunnerText(idx, val));
        runner.attr('aria-valuenow', val);
    },

    /**
     * @private
     */
    _updateRanges: function(percents) {
        var posUnit = this.__POS_UNIT,
            dimUnit = this.__DIM_UNIT,
            idx = percents.length,
            pos,
            dim = (100 - percents[idx - 1] - UI_DEVIATION).toFixed(1),
            ranges = this.elem('range');

        function render(range, pos, dim) {
            var css = {};

            css[posUnit] = typeof pos === 'undefined' ? 'auto' : pos + '%';
            css[dimUnit] = (dim > 0 ? dim : 0) + '%';

            range.css(css);
        }

        do {
            render(ranges.eq(idx--), pos, dim);

            pos = parseFloat((percents[idx - 1] || 0).toFixed(1));
            dim = parseFloat((percents[idx] - pos + UI_DEVIATION).toFixed(1));
        } while(idx);

        render(ranges.eq(0), 0, percents[0]);
    },

    /**
     * @private
     */
    _updateRange: function() {
        var min = this._calcPercentByValue(this.min()),
            max = this.max(),
            css = {};

        css[this.__POS_UNIT] = min + '%';
        css[this.__DIM_UNIT] = ((max ? this._calcPercentByValue(max) : 100) - min) + '%';

        this.elem('allowed-range').css(css);
    },

    /**
     * @private
     */
    _render: function(percents) {
        var _this = this;
        percents || (percents = this._calcPercentsByValue(this._vals));

        percents.forEach(function(percent, idx){
            _this._updateOne(idx, percent);
        });

        this._updateRanges(percents);

        return percents;
    },

    /**
     * Строит шкалу значений.
     *
     * @private
     * @param {String} block Имя блока.
     * @returns {Object} `bemjson` шкалы.
     */
    _buildScale: function(block) {
        var posUnit = this.__POS_UNIT,
            marks = this._scale.map(function(mark) {
                return {
                    block: block,
                    elem: 'mark',
                    mods: {},
                    attrs: {style: posUnit + ':' + mark.percent + '%'},
                    content: mark.label || ''
                };
            }),
            hasMarks = 0,
            m = marks.length;

        while(hasMarks < m && !marks[hasMarks].content.length) {
            hasMarks++;
        }

        if(hasMarks < m) {
            /** __mark_postion_(first/last) */
            marks[0].mods.position = 'first';
            marks[this._scale.length - 1].mods.position = 'last';

            return {
                block: block,
                elem: 'scale',
                content: marks
            };
        }

    },

    /**
     * Строит бегунок.
     *
     * @private
     * @param {String} block Имя блока.
     * @param {Number} pos Номер бегунка.
     * @param {Number} percent Позиция бегунка в процентах.
     * @returns {Object} `bemjson` бегунка.
     */
    _buildRunner: function(block, pos, percent) {
        var mods = {pos: pos},
            s = this._scale;

        // проверяем крайнии значени, для выставления модификатора `_state_start/end`
        pos = pos - 1;
        s = this._vals[pos] === s[0].value ?
                -1 : (this._vals[pos] === s[s.length - 1].value ? 1 : 0);

        s === 0 || (mods.state = s > 0 ? 'end' : 'start');

        return {
            block: block,
            elem: 'runner',
            mods: mods,
            attrs: {
                tabindex: 0,
                style: this.__POS_UNIT + ':' + percent + '%;'
            },
            idx: pos,
            value: this._getRunnerText(pos)
        };

    },

    /**
     * Строит подложку для области допустимых значений.
     *
     * @private
     * @param {String} block Имя блока.
     * @returns {Object} `bemjson` подложки.
     */
    _buildAllowedRange: function(block) {
        var min = this._calcPercentByValue(this.min()),
            max = this.max();

        return {
            block: block,
            elem: 'allowed-range',
            attrs: {
                style: this.__POS_UNIT + ':' + min + '%;' +
                    this.__DIM_UNIT + ':' + ((max ? this._calcPercentByValue(max) : 100) - min) + '%;'
            }
        };
    },

    /**
     * @private
     */
    _build: function() {
        var _this = this,
            /** @const String */
            blockName = this.__self.getName(),
            /** @const String */
            posUnit = this.__POS_UNIT,
            /** @const String */
            dimUnit = this.__DIM_UNIT,

            /** BEMJSON[] Шкала */
            scale = this._buildScale(blockName),

            /** BEMJSON[] */
            percents = this._vals.map(function(val) {
                return _this._calcPercentByValue(val);
            }),
            n = percents.length - 1,

            /** BEMJSON[] */
            range = [
                {
                    block: blockName,
                    elem: 'range',
                    mods: {pos: 1, position: 'first'},
                    attrs: {
                        style: posUnit + ':0%;' + dimUnit + ':' + (percents[0]) + '%'
                    }
                }
            ],

            /** BEMJSON[] */
            runners = [],

            /** Boolean */
            isCollapsed = false,

            inputs = this._getInputs(),
            titleId = this.elem('title').attr('id') || '',
            min = this.min(),
            max = this.max(),
            inputId, runnerId;

        percents.forEach(function(percent, i) {
            runners.push(_this._buildRunner(blockName, i + 1, percent));

            inputId = $.identify();
            runnerId = $.identify();

            inputs[i].elem('control').attr({
                'id': inputId,
                'aria-labelledby': titleId,
                'aria-controls': runnerId
            });

            $.extend(runners[i], {
                id: runnerId,
                inputId: inputId,
                labelledby: titleId,
                min: min,
                max: max
            });

            range.push({
                    block: blockName,
                    elem: 'range',
                    mods: {pos: i + 2},
                    attrs: {
                        style: posUnit + ':' + (i < n ? (percent + '%;') : 'auto;') +
                            dimUnit + ':' +
                            ( (i < n ? (percents[i + 1] + UI_DEVIATION) : 100) - percent ).toFixed(1) + '%'
                    }
                });

            isCollapsed ||
                (i && percent === percents[i - 1] && (isCollapsed = true));
        });

        range[range.length - 1].mods.position = 'last';

        /** Выставляем модификаторы `__runner_position_(first/last)`*/
        if(runners.length > 1) {
            runners[0].mods.position = 'first';
            runners[runners.length - 1].mods.position = 'last';
        } else {
            // XXX: не использовать модификатор `__runner_pos` для одного ползунка
            runners[0].mods.pos = null;
            delete runners[0].mods.pos;
        }

        range.push(this._buildAllowedRange(blockName));

        // TODO:
//        this.hasMod('off-switcher') &&
//            marks.push({ block: block, elem: 'mark', attrs: { style: 'right: 5px' }, content: '∞' });

        isCollapsed && this.setMod('collapsed', 'yes');

        this.domElem.append(BEMHTML.apply(scale));

        this.elem('body').append(BEMHTML.apply(range.concat(runners)));

        this._updateDimmensions(this._calcDimmensions());

        // TODO: Runner label
        //this._popupa = this.findBlockInside('b-popupa');
    },

    /**
     * Вычисляет размеры элементов слайдера.
     *
     * @private
     * @returns {Object}
     */
    _calcDimmensions: function() {
        var runner,
            d = this.params.runnerWidth,
            scale = this._scale;

        if(!d) {
            scale = scale[scale.length - 1];

            runner = this._buildRunner(this.__self.getName(), 0, 100);
            runner.value = this._getRunnerText(scale.value + '');

            runner = $(BEMHTML.apply(runner)).appendTo(
                    this.elem('body')).css('width', 'auto');

            d = runner.outerWidth();

            runner.remove();
        }

        return {
            'width': d,
            'margin-left': 0 - (d / 2)
        };
    },

    /**
     * @private
     */
    _updateDimmensions: function(dim) {
        this.elem('runner').css(dim);
    }

});

}(BEM));

/* ../../../../common.blocks/slider/__ui/slider__ui.js end */
;
/* ../../../../desktop.blocks/slider/__ui/slider__ui.js begin */
BEM.DOM.decl('slider', {
    /**
     * @private
     */
    _build: function() {
        this.__base();

        this.bindTo('runner', 'mouseenter mouseleave', this._onRunnerHover);
    }
});

/* ../../../../desktop.blocks/slider/__ui/slider__ui.js end */
;
/* ../../../../common.blocks/slider/__math/slider__math.js begin */
(function(BEM, undefined) {

function calcPercentForInterval(a, b, val) {
    return (b.percent - a.percent) * (val - a.value) / (b.value - a.value) + a.percent;
}

function calcValueForInterval(a, b, percent) {
    return (b.value - a.value) * (percent - a.percent) / (b.percent - a.percent) + a.value;
}

BEM.DOM.decl('slider', {

    /**
     * Возвращает ориентацию слайдера.
     *
     * Возможные значения:
     *  - `vert` - вертикальный слайдер
     *  - `hor` - горизонтальный слайдер
     *
     * @public
     * @returns {String} Ориентация слайдера.
     */
    getOrientation: function() {
        return this.__ORIGIN === 'Y' ? 'vert' : 'hor';
    },

    /**
     * @private
     */
    _getDirrectionFromCoord: function(coord) {
        this._dirrection = coord > (this._dirrectionCoord || 0) ? 1 : -1;
        this._dirrectionCoord = coord;
        return this._dirrection;
    },

    /**
     * @private
     */
    _calcPercentByValue: function(val) {
        var scale = this._scale,
            it = (scale.length > 2) ? this._getIntervalByValue(val) : 0;
        return parseFloat(calcPercentForInterval(scale[it], scale[it + 1], val).toFixed(1));
    },

    /**
     * @private
     */
    _calcPercentsByValue: function(vals) {
        var t = this;
        return vals.map(function(val){
            return t._calcPercentByValue(val);
        });
    },

    /**
     * @private
     */
    _calcPercentByCoord: function(coord) {
        return parseFloat((coord * 100 / this.elem('body')[this.__DIM_UNIT]()).toFixed(1));
    },

    _calcValueByPercent: function(percent) {
        var scale = this._scale,
            it = (scale.length > 2) ? this._getIntervalByPercent(percent) : 0;
        return calcValueForInterval(scale[it], scale[it + 1], percent);
    },

    /**
     * @private
     */
    _calcValueByEvent: function(e) {
        return this._calcValueByPercent(this._calcPercentByEvent(e));
    },

    /**
     * Возвращает иднекс интревала шкалы в который попадает значение `val`.
     *
     * @private
     * @param {Number} val Числовое значение.
     * @returns {Number}
     */
    _getIntervalByValue: function(val) {
        var scale = this._scale,
            n = scale.length, i = 1;

        if(val <= scale[0].value) {
            return 0;
        } else if(val >= scale[n - 1].value) {
            return n - 2;
        }

        for(i = 1; i < n; i++) {
            if(val < scale[i].value) {
                return i - 1;
            }
        }

        return n - 2;
    },

    /**
     * Возвращает индекс интревала шкалы, в который попадает значение `percent`.
     *
     * @private
     * @param {Number} percent Значение в процентах.
     * @returns {Number}
     */
    _getIntervalByPercent: function(percent) {
        if(percent <= 0) {
            return 0;
        } else if(percent >= 100) {
            return this._scale.length - 2;
        }

        var scale = this._scale,
            n = scale.length, i;

        for(i = 0; i < n; i++) {
            if((percent >= scale[i].percent) &&
                (percent < (scale[i + 1] ? scale[i + 1].percent : 100))) {
                return i;
            }
        }

        return n - 2;
    },

    /**
     * @private
     */
    _getClosestRunnerByValue: function(val) {
        var sc = this._scale,
            distance = sc[sc.length - 1].value - sc[0].value,
            runner;

        this._vals.forEach(function(value, i) {
            var valDistance = value - val,
                absDistance = Math.abs(valDistance),
                cRunner;

            if(absDistance <= distance) {
                // проверяем случай если ползунки схлопнуты
                if(runner && absDistance === distance && valDistance > 0) {
                    return;
                }

                distance = absDistance;

                cRunner = this.elem('runner').eq(i);
                this.isRunnerDisabled(cRunner) || (runner = cRunner);
            }
        }, this);

        return runner;
    }

});

}(BEM));

/* ../../../../common.blocks/slider/__math/slider__math.js end */
;
/* ../../../../common.blocks/slider/_orientation/slider_orientation_horiz.js begin */
/**
 * Горизонтальный слайдер.
 */

BEM.DOM.decl({block: 'slider', modName: 'orientation', modVal: 'horiz'}, {

    onSetMod: {

        'js': function() {
            /** @const */
            this.__POS_UNIT = 'left';
            /** @const */
            this.__DIM_UNIT = 'width';
            /** @const */
            this.__ORIGIN = 'X';

            this.__base.apply(this, arguments);
        }

    },

    /**
     * @private
     */
    _getCoordFromEvent: function(e) {
        return typeof e.clientX === 'number' ?
            e.clientX : e.originalEvent.touches[0].clientX;
    },

    /**
     * @private
     */
    _getOffsetPointerCoord: function(e) {
        var runner = e.data.domElem;
        this._offsetPointer = this._dirrectionCoord = (
            this._getCoordFromEvent(e) - runner.offset().left +
            parseInt(runner.css('margin-left'), 10)).toFixed(2);
        return this._offsetPointer;
    },

    /**
     * @private
     */
    _calcPercentByEvent: function(e) {
        var t = this,
            coord = t._getCoordFromEvent(e);

        t._getDirrectionFromCoord(coord);

        return t._calcPercentByCoord(
            coord - t.elem('body').offset().left - (t._offsetPointer || 0));
    }

});

/* ../../../../common.blocks/slider/_orientation/slider_orientation_horiz.js end */
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
/* ../../../../common.blocks/slider/_type/slider_type_range.js begin */
(function(BEM, undefined) {

/**
 * Слайдер с двумя ползунками, предназначенный для выбора диапазона значений.
 */
BEM.DOM.decl({block: 'slider', modName: 'type', modVal: 'range'}, {

    /**
     * Генерируется, когда оба ползунка устанавливаются в одно значение.
     *
     * @event popup_type_range#collapse
     */

    /**
     * Генерируется, когда ползунки устанавливаются в разные значения.
     *
     * @event popup_type_range#separate
     */
    onSetMod: {

        'collapsed': function(modName, modVal) {
            this.trigger(modVal === 'yes' ? 'collapse' : 'separate');
        }

    },

    /**
     * @private
     */
    _render: function(persents) {

        this.__base(persents);

        // определяем «схлопывание» ползунков

        var vals = this._vals,
        isSeparated = vals.slice(0, -1).some(function(val, i) {
            return val !== vals[i + 1];
        });

        this.toggleMod('collapsed', '', 'yes', isSeparated);
    },

    /**
     * @private
     */
    _updateDimmensions: function(dim) {
        this.__base.apply(this, arguments);

        // (HACK): левый ползунок должен быть смещен на пиклель правее,
        // иначе при `_collapsed_yes` появляется зазор
        this.elem('runner', 'position', 'first').css('margin-left', 1 - dim.width);
        this.elem('runner', 'position', 'last').css('margin-left', 0);
    }

});

}(BEM));

/* ../../../../common.blocks/slider/_type/slider_type_range.js end */
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
