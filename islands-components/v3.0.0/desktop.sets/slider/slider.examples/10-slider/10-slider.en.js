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
                    var _$273a = __$ctx._.extend({
                            id: __$ctx._inputId,
                            name: __$ctx._name
                        }, __$ctx.ctx.controlAttrs);
                    (__$ctx._value || __$ctx._value === 0) && (_$273a.value = __$ctx._value);
                    $$mods.disabled && (_$273a.disabled = 'disabled');
                    _$273a['aria-labelledby'] = __$ctx._labelId + ' ' + __$ctx._hintId;
                    return _$273a;
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
            if (!(__$ctx['__$anflg241'] !== true) === false) {
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
            var __r0 = __$ctx['__$anflg241'];
            __$ctx['__$anflg241'] = true;
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
            __$ctx['__$anflg241'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $43(__$ctx) {
        if (!(__$ctx['__$anflg240'] !== true) === false) {
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
        var _$26uvalue = ('', __r0 = $$mode, $$mode = 'value', __r1 = __$ctx.ctx, __$ctx.ctx = __$ctx.ctx.value, __r2 = $62(__$ctx), $$mode = __r0, __$ctx.ctx = __r1, '', __r2), _$26uid = __$ctx.ctx.id || __$ctx.generateId(), _$26umods = __$ctx.ctx.mods || {};
        _$26umods.theme = _$26umods.theme || 'normal';
        {
            '';
            var __r3 = __$ctx['__$anflg240'];
            __$ctx['__$anflg240'] = true;
            {
                '';
                var __r4 = __$ctx._inputId;
                __$ctx._inputId = _$26uid;
                var __r5 = __$ctx._labelId;
                __$ctx._labelId = 'label' + _$26uid;
                var __r6 = __$ctx._hintId;
                __$ctx._hintId = 'hint' + _$26uid;
                var __r7 = __$ctx._name;
                __$ctx._name = __$ctx.ctx.name || '';
                var __r8 = __$ctx._value;
                __$ctx._value = _$26uvalue;
                var __r9 = __$ctx._inputLink;
                __$ctx._inputLink = true;
                var __r10 = __$ctx._disabled;
                __$ctx._disabled = $$mods.disabled;
                var __r11 = __$ctx.ctx, __r12 = __r11.mods;
                __r11.mods = _$26umods;
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
            __$ctx['__$anflg240'] = __r3;
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
                var _$26wvalue = [];
                {
                    '';
                    var __r0 = __$ctx._buf;
                    __$ctx._buf = _$26wvalue;
                    var __r1 = $$mode;
                    $$mode = '';
                    $217(__$ctx);
                    __$ctx._buf = __r0;
                    $$mode = __r1;
                    '';
                }
                undefined;
                return _$26wvalue.join('');
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
        if (!(__$ctx['__$anflg239'] !== true) === false) {
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
        var _$26rm = ('', __r0 = __$ctx['__$anflg239'], __$ctx['__$anflg239'] = true, __r4 = ('', __r1 = __$ctx.ctx, __r2 = __r1._wOrigin, __r1._wOrigin = true, __r3 = $91(__$ctx), __r1._wOrigin = __r2, '', __r3), __$ctx['__$anflg239'] = __r0, '', __r4) || [];
        _$26rm.push({ elemMods: { origin: $$mods.orientation === 'vert' ? 'y' : 'x' } });
        return _$26rm;
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
        if (!(__$ctx['__$anflg238'] !== true) === false) {
            if (!!$$elem === false) {
                var _$26hid = __$ctx.generateId();
                {
                    '';
                    var __r0 = __$ctx['__$anflg238'];
                    __$ctx['__$anflg238'] = true;
                    {
                        '';
                        var __r1 = __$ctx._inSlider;
                        __$ctx._inSlider = true;
                        var __r2 = __$ctx._titleId;
                        __$ctx._titleId = 'title' + _$26hid;
                        $128(__$ctx);
                        __$ctx._inSlider = __r1;
                        __$ctx._titleId = __r2;
                        '';
                    }
                    __$ctx['__$anflg238'] = __r0;
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
        if (!(__$ctx['__$anflg237'] !== true) === false) {
            if (!!$$elem === false) {
                var __r0, __r1;
                var _$26gc = ('', __r0 = __$ctx['__$anflg237'], __$ctx['__$anflg237'] = true, __r1 = $145(__$ctx), __$ctx['__$anflg237'] = __r0, '', __r1);
                _$26gc += [
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
                return _$26gc;
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
        var _$26c_this = __$ctx['i-global'], _$26cjs = {}, _$26cblock = {
                block: 'i-global',
                js: _$26cjs
            }, _$26ce;
        for (_$26ce in _$26c_this) {
            if (_$26c_this.hasOwnProperty(_$26ce) && ('', __r0 = $$mode, $$mode = 'public-params', __r1 = $$block, $$block = 'i-global', __r2 = $$elem, $$elem = _$26ce, __r3 = $177(__$ctx), $$mode = __r0, $$block = __r1, $$elem = __r2, '', __r3)) {
                _$26cjs[_$26ce] = _$26c_this[_$26ce];
            } else {
                undefined;
            }
        }
        return _$26cblock;
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
        var _$260params = __$ctx.ctx.params || {}, _$260iGlobal = __$ctx['i-global'], _$260isTldChanged = _$260params.tld && _$260params.tld !== _$260iGlobal.tld, _$260tld, _$260xYaDomain, _$260yaDomain;
        if (_$260isTldChanged) {
            _$260tld = _$260params.tld;
            _$260xYaDomain = _$260tld === 'tr' ? 'yandex.com.tr' : 'yandex.' + _$260tld;
            _$260yaDomain = [
                'ua',
                'by',
                'kz'
            ].indexOf(_$260tld) != -1 ? 'yandex.ru' : _$260xYaDomain;
            _$260iGlobal['content-region'] = _$260tld;
            _$260iGlobal['click-host'] = '//clck.' + _$260yaDomain;
            _$260iGlobal['passport-host'] = 'https://passport.' + _$260yaDomain;
            _$260iGlobal['pass-host'] = '//pass.' + _$260xYaDomain;
            _$260iGlobal['social-host'] = '//social.' + _$260xYaDomain;
            _$260iGlobal['export-host'] = '//export.' + _$260xYaDomain;
        } else {
            undefined;
        }
        for (var _$260p in _$260params) {
            _$260iGlobal[_$260p] = _$260params[_$260p];
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
        var _$25yps = {}, _$25yes = [
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
            ], _$25ye;
        while (_$25ye = _$25yes.shift()) {
            _$25yps[_$25ye] = ('', __r0 = $$mode, $$mode = 'default', __r1 = $$block, $$block = 'i-global', __r2 = $$elem, $$elem = _$25ye, __r3 = $182(__$ctx), $$mode = __r0, $$block = __r1, $$elem = __r2, '', __r3);
        }
        __$ctx['i-global'] = __$ctx._.extend(_$25yps, ('', __r4 = $$mode, $$mode = 'env', __r5 = $$block, $$block = 'i-global', __r6 = $209(__$ctx), $$mode = __r4, $$block = __r5, '', __r6));
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
        function _$25pfollow() {
            if (this.ctx.link === 'no-follow') {
                return undefined;
            } else {
                undefined;
            }
            var data = this._links[this.ctx.link];
            return '', __r0 = this.ctx, this.ctx = data, __r1 = $1(__$ctx), this.ctx = __r0, '', __r1;
        }
        if (!cache || !__$ctx._cacheLog) {
            return _$25pfollow.call(__$ctx);
        } else {
            undefined;
        }
        var _$25pcontents = __$ctx._buf.slice(__$ctx._cachePos).join('');
        __$ctx._cachePos = __$ctx._buf.length;
        __$ctx._cacheLog.push(_$25pcontents, {
            log: __$ctx._localLog.slice(),
            link: __$ctx.ctx.link
        });
        var _$25pres = _$25pfollow.call(__$ctx);
        __$ctx._cachePos = __$ctx._buf.length;
        return _$25pres;
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
        var _$25ocached;
        function _$25osetProperty(obj, key, value) {
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
        if (_$25ocached = cache.get(__$ctx.ctx.cache)) {
            var _$25ooldLinks = __$ctx._links;
            if (__$ctx.ctx.links) {
                __$ctx._links = __$ctx.ctx.links;
            } else {
                undefined;
            }
            for (var _$25oi = 0; _$25oi < _$25ocached.log.length; _$25oi++) {
                if (typeof _$25ocached.log[_$25oi] === 'string') {
                    __$ctx._buf.push(_$25ocached.log[_$25oi]);
                    continue;
                } else {
                    undefined;
                }
                var _$25olog = _$25ocached.log[_$25oi], _$25oreverseLog;
                _$25oreverseLog = _$25olog.log.map(function (entry) {
                    return {
                        key: entry[0],
                        value: _$25osetProperty(this, entry[0], entry[1])
                    };
                }, __$ctx).reverse();
                {
                    '';
                    var __r0 = __$ctx.ctx, __r1 = __r0.cache;
                    __r0.cache = null;
                    var __r2 = __$ctx._cacheLog;
                    __$ctx._cacheLog = null;
                    var __r3 = __$ctx.ctx, __r4 = __r3.link;
                    __r3.link = _$25olog.link;
                    $1(__$ctx);
                    __r0.cache = __r1;
                    __$ctx._cacheLog = __r2;
                    __r3.link = __r4;
                    '';
                }
                undefined;
                _$25oreverseLog.forEach(function (entry) {
                    _$25osetProperty(this, entry.key, entry.value);
                }, __$ctx);
            }
            __$ctx._links = _$25ooldLinks;
            return _$25ocached.res;
        } else {
            undefined;
        }
        var _$25ocacheLog = [], _$25ores;
        {
            '';
            var __r5 = __$ctx.ctx, __r6 = __r5.cache;
            __r5.cache = null;
            var __r7 = __$ctx._cachePos;
            __$ctx._cachePos = __$ctx._buf.length;
            var __r8 = __$ctx._cacheLog;
            __$ctx._cacheLog = _$25ocacheLog;
            var __r9 = __$ctx._localLog;
            __$ctx._localLog = [];
            {
                _$25ores = $1(__$ctx);
                var _$25otail = __$ctx._buf.slice(__$ctx._cachePos).join('');
                if (_$25otail) {
                    _$25ocacheLog.push(_$25otail);
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
            log: _$25ocacheLog,
            res: _$25ores
        });
        return _$25ores;
        return;
    }
    function $256(__$ctx) {
        var __t = $$mode;
        if (__t === 'default') {
            return $258(__$ctx);
        } else if (__t === '') {
            if (!__$ctx._.isSimple(__$ctx.ctx) === false) {
                __$ctx._listLength--;
                var _$25mctx = __$ctx.ctx;
                (_$25mctx && _$25mctx !== true || _$25mctx === 0) && __$ctx._buf.push(_$25mctx);
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
        var _$25nBEM_ = __$ctx.BEM, _$25nv = __$ctx.ctx, _$25nbuf = __$ctx._buf, _$25ntag;
        _$25ntag = ('', __r0 = $$mode, $$mode = 'tag', __r1 = $1(__$ctx), $$mode = __r0, '', __r1);
        typeof _$25ntag != 'undefined' || (_$25ntag = _$25nv.tag);
        typeof _$25ntag != 'undefined' || (_$25ntag = 'div');
        if (_$25ntag) {
            var _$25njsParams, _$25njs;
            if ($$block && _$25nv.js !== false) {
                _$25njs = ('', __r4 = $$mode, $$mode = 'js', __r5 = $1(__$ctx), $$mode = __r4, '', __r5);
                _$25njs = _$25njs ? __$ctx._.extend(_$25nv.js, _$25njs === true ? {} : _$25njs) : _$25nv.js === true ? {} : _$25nv.js;
                _$25njs && ((_$25njsParams = {})[_$25nBEM_.INTERNAL.buildClass($$block, _$25nv.elem)] = _$25njs);
            } else {
                undefined;
            }
            _$25nbuf.push('<', _$25ntag);
            var _$25nisBEM = ('', __r6 = $$mode, $$mode = 'bem', __r7 = $1(__$ctx), $$mode = __r6, '', __r7);
            typeof _$25nisBEM != 'undefined' || (_$25nisBEM = typeof _$25nv.bem != 'undefined' ? _$25nv.bem : _$25nv.block || _$25nv.elem);
            var _$25ncls = ('', __r8 = $$mode, $$mode = 'cls', __r9 = $1(__$ctx), $$mode = __r8, '', __r9);
            _$25ncls || (_$25ncls = _$25nv.cls);
            var _$25naddJSInitClass = _$25nv.block && _$25njsParams;
            if (_$25nisBEM || _$25ncls) {
                _$25nbuf.push(' class="');
                if (_$25nisBEM) {
                    _$25nBEM_.INTERNAL.buildClasses($$block, _$25nv.elem, _$25nv.elemMods || _$25nv.mods, _$25nbuf);
                    var _$25nmix = ('', __r10 = $$mode, $$mode = 'mix', __r11 = $1(__$ctx), $$mode = __r10, '', __r11);
                    _$25nv.mix && (_$25nmix = _$25nmix ? _$25nmix.concat(_$25nv.mix) : _$25nv.mix);
                    if (_$25nmix) {
                        var _$25nvisited = {};
                        function _$25nvisitedKey(block, elem) {
                            return (block || '') + '__' + (elem || '');
                        }
                        _$25nvisited[_$25nvisitedKey($$block, $$elem)] = true;
                        if (!__$ctx._.isArray(_$25nmix)) {
                            _$25nmix = [_$25nmix];
                        } else {
                            undefined;
                        }
                        for (var _$25ni = 0; _$25ni < _$25nmix.length; _$25ni++) {
                            var _$25nmixItem = _$25nmix[_$25ni];
                            if (!_$25nmixItem) {
                                continue;
                            } else {
                                undefined;
                            }
                            var _$25nhasItem = _$25nmixItem.block || _$25nmixItem.elem, _$25nblock = _$25nmixItem.block || _$25nmixItem._block || $$block, _$25nelem = _$25nmixItem.elem || _$25nmixItem._elem || $$elem, _$25nmods = _$25nmixItem.mods || $$mods, _$25nelemMods = _$25nmixItem.elemMods || {};
                            _$25nhasItem && _$25nbuf.push(' ');
                            _$25nBEM_.INTERNAL[_$25nhasItem ? 'buildClasses' : 'buildModsClasses'](_$25nblock, _$25nmixItem.elem || _$25nmixItem._elem || (_$25nmixItem.block ? undefined : $$elem), _$25nmixItem.elemMods || _$25nmixItem.mods, _$25nbuf);
                            if (_$25nmixItem.js) {
                                (_$25njsParams || (_$25njsParams = {}))[_$25nBEM_.INTERNAL.buildClass(_$25nblock, _$25nmixItem.elem)] = _$25nmixItem.js === true ? {} : _$25nmixItem.js;
                                _$25naddJSInitClass || (_$25naddJSInitClass = _$25nblock && !_$25nmixItem.elem);
                            } else {
                                undefined;
                            }
                            if (_$25nhasItem && !_$25nvisited[_$25nvisitedKey(_$25nblock, _$25nelem)]) {
                                _$25nvisited[_$25nvisitedKey(_$25nblock, _$25nelem)] = true;
                                var _$25nnestedMix = ('', __r12 = $$block, $$block = _$25nblock, __r13 = $$elem, $$elem = _$25nelem, __r14 = $$mods, $$mods = _$25nmods, __r15 = $$elemMods, $$elemMods = _$25nelemMods, __r16 = $$mode, $$mode = 'mix', __r17 = $1(__$ctx), $$block = __r12, $$elem = __r13, $$mods = __r14, $$elemMods = __r15, $$mode = __r16, '', __r17);
                                if (_$25nnestedMix) {
                                    for (var _$25nj = 0; _$25nj < _$25nnestedMix.length; _$25nj++) {
                                        var _$25nnestedItem = _$25nnestedMix[_$25nj];
                                        if (!_$25nnestedItem.block && !_$25nnestedItem.elem || !_$25nvisited[_$25nvisitedKey(_$25nnestedItem.block, _$25nnestedItem.elem)]) {
                                            _$25nnestedItem._block = _$25nblock;
                                            _$25nnestedItem._elem = _$25nelem;
                                            _$25nmix.splice(_$25ni + 1, 0, _$25nnestedItem);
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
                _$25ncls && _$25nbuf.push(_$25nisBEM ? ' ' : '', _$25ncls);
                _$25naddJSInitClass && _$25nbuf.push(' i-bem');
                _$25nbuf.push('"');
            } else {
                undefined;
            }
            if (_$25njsParams) {
                var _$25njsAttr = ('', __r20 = $$mode, $$mode = 'jsAttr', __r21 = $1(__$ctx), $$mode = __r20, '', __r21);
                _$25nbuf.push(' ', _$25njsAttr || 'data-bem', '="', __$ctx._.attrEscape(JSON.stringify(_$25njsParams)), '"');
            } else {
                undefined;
            }
            var _$25nattrs = ('', __r22 = $$mode, $$mode = 'attrs', __r23 = $1(__$ctx), $$mode = __r22, '', __r23);
            _$25nattrs = __$ctx._.extend(_$25nattrs, _$25nv.attrs);
            if (_$25nattrs) {
                var _$25nname;
                for (_$25nname in _$25nattrs) {
                    if (_$25nattrs[_$25nname] === undefined) {
                        continue;
                    } else {
                        undefined;
                    }
                    _$25nbuf.push(' ', _$25nname, '="', __$ctx._.attrEscape(_$25nattrs[_$25nname]), '"');
                }
            } else {
                undefined;
            }
        } else {
            undefined;
        }
        if (__$ctx._.isShortTag(_$25ntag)) {
            _$25nbuf.push('/>');
        } else {
            _$25ntag && _$25nbuf.push('>');
            var _$25ncontent = ('', __r24 = $$mode, $$mode = 'content', __r25 = $1(__$ctx), $$mode = __r24, '', __r25);
            if (_$25ncontent || _$25ncontent === 0) {
                var _$25nisBEM = $$block || $$elem;
                {
                    '';
                    var __r26 = __$ctx._notNewList;
                    __$ctx._notNewList = false;
                    var __r27 = __$ctx.position;
                    __$ctx.position = _$25nisBEM ? 1 : __$ctx.position;
                    var __r28 = __$ctx._listLength;
                    __$ctx._listLength = _$25nisBEM ? 1 : __$ctx._listLength;
                    var __r29 = __$ctx.ctx;
                    __$ctx.ctx = _$25ncontent;
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
            _$25ntag && _$25nbuf.push('</', _$25ntag, '>');
        }
        return;
    }
    function $267(__$ctx) {
        var _$25kv = __$ctx.ctx, _$25kl = _$25kv.length, _$25ki = 0, _$25kprevPos = __$ctx.position, _$25kprevNotNewList = __$ctx._notNewList;
        if (_$25kprevNotNewList) {
            __$ctx._listLength += _$25kl - 1;
        } else {
            __$ctx.position = 0;
            __$ctx._listLength = _$25kl;
        }
        __$ctx._notNewList = true;
        while (_$25ki < _$25kl) {
            var _$25knewCtx = _$25kv[_$25ki++];
            {
                '';
                var __r0 = __$ctx.ctx;
                __$ctx.ctx = _$25knewCtx == null ? '' : _$25knewCtx;
                $1(__$ctx);
                __$ctx.ctx = __r0;
                '';
            }
            undefined;
        }
        _$25kprevNotNewList || (__$ctx.position = _$25kprevPos);
        return;
    }
    function $270(__$ctx) {
        var _$25jvBlock = __$ctx.ctx.block, _$25jvElem = __$ctx.ctx.elem, _$25jblock = __$ctx._currBlock || $$block;
        __$ctx.ctx || (__$ctx.ctx = {});
        {
            '';
            var __r0 = $$mode;
            $$mode = 'default';
            var __r1 = __$ctx._links;
            __$ctx._links = __$ctx.ctx.links || __$ctx._links;
            var __r2 = $$block;
            $$block = _$25jvBlock || (_$25jvElem ? _$25jblock : undefined);
            var __r3 = __$ctx._currBlock;
            __$ctx._currBlock = _$25jvBlock || _$25jvElem ? undefined : _$25jblock;
            var __r4 = $$elem;
            $$elem = __$ctx.ctx.elem;
            var __r5 = $$mods;
            $$mods = (_$25jvBlock ? __$ctx.ctx.mods : $$mods) || {};
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
/*borschik:include:../../../../common.blocks/slider/slider.examples/10-slider.blocks/slider/slider.js*/;
/*borschik:include:../../../../common.blocks/slider/__ui/slider__ui.js*/;
/*borschik:include:../../../../desktop.blocks/slider/__ui/slider__ui.js*/;
/*borschik:include:../../../../common.blocks/slider/__math/slider__math.js*/;
/*borschik:include:../../../../common.blocks/slider/_orientation/slider_orientation_horiz.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-desktop/i-jquery/__leftclick/i-jquery__leftclick.js*/;
/*borschik:include:../../../../common.blocks/input/input.js*/;
/*borschik:include:../../../../desktop.blocks/input/input.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-system/i-system.js*/;
/*borschik:include:../../../../common.blocks/input/__clear/input__clear.js*/;


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
