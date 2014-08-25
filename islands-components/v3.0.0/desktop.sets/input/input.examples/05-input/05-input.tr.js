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
                        return $155(__$ctx);
                    }
                } else if (__t === 'ahead') {
                    return [
                        { elem: 'ahead-filler' },
                        { elem: 'ahead-hint' }
                    ];
                    return;
                } else {
                    return $155(__$ctx);
                }
            } else if (__t === 'attrs') {
                var __t = $$elem;
                if (__t === 'clear') {
                    return { unselectable: 'on' };
                    return;
                } else if (__t === 'control') {
                    var _$79a = __$ctx._.extend({
                            id: __$ctx._inputId,
                            name: __$ctx._name
                        }, __$ctx.ctx.controlAttrs);
                    (__$ctx._value || __$ctx._value === 0) && (_$79a.value = __$ctx._value);
                    $$mods.disabled && (_$79a.disabled = 'disabled');
                    _$79a['aria-labelledby'] = __$ctx._labelId + ' ' + __$ctx._hintId;
                    return _$79a;
                    return;
                } else {
                    return $155(__$ctx);
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
                        return $155(__$ctx);
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
                    return $155(__$ctx);
                }
            } else if (__t === 'value') {
                return $56(__$ctx);
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
                    return $155(__$ctx);
                }
            } else {
                return $155(__$ctx);
            }
        } else if (__t === 'i-ua') {
            var __t = $$mode;
            if (__t === 'content') {
                return $84(__$ctx);
            } else if (__t === 'bem') {
                if (!!$$elem === false) {
                    return false;
                    return;
                } else {
                    return $155(__$ctx);
                }
            } else if (__t === 'tag') {
                if (!!$$elem === false) {
                    return 'script';
                    return;
                } else {
                    return $155(__$ctx);
                }
            } else {
                return $155(__$ctx);
            }
        } else if (__t === 'b-page') {
            if ($$mode === 'js-params') {
                if (!!$$elem === false) {
                    return $110(__$ctx);
                } else {
                    return $155(__$ctx);
                }
            } else {
                return $155(__$ctx);
            }
        } else if (__t === 'i-global') {
            var __t = $$mode;
            if (__t === 'public-params') {
                return $116(__$ctx);
            } else if (__t === 'default') {
                return $121(__$ctx);
            } else if (__t === 'env') {
                return $148(__$ctx);
            } else {
                return $155(__$ctx);
            }
        } else {
            return $155(__$ctx);
        }
    }
    function $34(__$ctx) {
        if ($$elem === 'control') {
            if (!(__$ctx['__$anflg15'] !== true) === false) {
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
            var __r0 = __$ctx['__$anflg15'];
            __$ctx['__$anflg15'] = true;
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
                $156(__$ctx);
                __$ctx.ctx = __r1;
                $$mode = __r2;
                '';
            }
            __$ctx['__$anflg15'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $43(__$ctx) {
        if (!(__$ctx['__$anflg14'] !== true) === false) {
            if (!!$$elem === false) {
                return $46(__$ctx);
            } else {
                return $155(__$ctx);
            }
        } else {
            return $155(__$ctx);
        }
    }
    function $46(__$ctx) {
        var __r0, __r1, __r2;
        var _$70value = ('', __r0 = $$mode, $$mode = 'value', __r1 = __$ctx.ctx, __$ctx.ctx = __$ctx.ctx.value, __r2 = $56(__$ctx), $$mode = __r0, __$ctx.ctx = __r1, '', __r2), _$70id = __$ctx.ctx.id || __$ctx.generateId(), _$70mods = __$ctx.ctx.mods || {};
        _$70mods.theme = _$70mods.theme || 'normal';
        {
            '';
            var __r3 = __$ctx['__$anflg14'];
            __$ctx['__$anflg14'] = true;
            {
                '';
                var __r4 = __$ctx._inputId;
                __$ctx._inputId = _$70id;
                var __r5 = __$ctx._labelId;
                __$ctx._labelId = 'label' + _$70id;
                var __r6 = __$ctx._hintId;
                __$ctx._hintId = 'hint' + _$70id;
                var __r7 = __$ctx._name;
                __$ctx._name = __$ctx.ctx.name || '';
                var __r8 = __$ctx._value;
                __$ctx._value = _$70value;
                var __r9 = __$ctx._inputLink;
                __$ctx._inputLink = true;
                var __r10 = __$ctx._disabled;
                __$ctx._disabled = $$mods.disabled;
                var __r11 = __$ctx.ctx, __r12 = __r11.mods;
                __r11.mods = _$70mods;
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
            __$ctx['__$anflg14'] = __r3;
            '';
        }
        undefined;
        return;
    }
    function $56(__$ctx) {
        if (!__$ctx.isSimple(__$ctx.ctx) === false) {
            if (!!$$elem === false) {
                return __$ctx.ctx;
                return;
            } else {
                return $62(__$ctx);
            }
        } else {
            return $62(__$ctx);
        }
    }
    function $62(__$ctx) {
        if (!__$ctx.ctx === false) {
            if (!!$$elem === false) {
                var _$72value = [];
                {
                    '';
                    var __r0 = __$ctx._buf;
                    __$ctx._buf = _$72value;
                    var __r1 = $$mode;
                    $$mode = '';
                    $156(__$ctx);
                    __$ctx._buf = __r0;
                    $$mode = __r1;
                    '';
                }
                undefined;
                return _$72value.join('');
                return;
            } else {
                return $68(__$ctx);
            }
        } else {
            return $68(__$ctx);
        }
    }
    function $68(__$ctx) {
        if (!true === false) {
            if (!!$$elem === false) {
                return '';
                return;
            } else {
                return $155(__$ctx);
            }
        } else {
            return $155(__$ctx);
        }
    }
    function $84(__$ctx) {
        if (!(__$ctx['__$anflg13'] !== true) === false) {
            if (!!$$elem === false) {
                var __r0, __r1;
                var _$6xc = ('', __r0 = __$ctx['__$anflg13'], __$ctx['__$anflg13'] = true, __r1 = $84(__$ctx), __$ctx['__$anflg13'] = __r0, '', __r1);
                _$6xc += [
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
                return _$6xc;
                return;
            } else {
                return $90(__$ctx);
            }
        } else {
            return $90(__$ctx);
        }
    }
    function $90(__$ctx) {
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
            return $155(__$ctx);
        }
    }
    function $110(__$ctx) {
        var __r0, __r1, __r2, __r3;
        var _$6t_this = __$ctx['i-global'], _$6tjs = {}, _$6tblock = {
                block: 'i-global',
                js: _$6tjs
            }, _$6te;
        for (_$6te in _$6t_this) {
            if (_$6t_this.hasOwnProperty(_$6te) && ('', __r0 = $$mode, $$mode = 'public-params', __r1 = $$block, $$block = 'i-global', __r2 = $$elem, $$elem = _$6te, __r3 = $116(__$ctx), $$mode = __r0, $$block = __r1, $$elem = __r2, '', __r3)) {
                _$6tjs[_$6te] = _$6t_this[_$6te];
            } else {
                undefined;
            }
        }
        return _$6tblock;
        return;
    }
    function $116(__$ctx) {
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
            return $155(__$ctx);
        }
    }
    function $121(__$ctx) {
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
                    return $145(__$ctx);
                } else {
                    return $155(__$ctx);
                }
            }
        }
    }
    function $145(__$ctx) {
        var _$6hparams = __$ctx.ctx.params || {}, _$6hiGlobal = __$ctx['i-global'], _$6hisTldChanged = _$6hparams.tld && _$6hparams.tld !== _$6hiGlobal.tld, _$6htld, _$6hxYaDomain, _$6hyaDomain;
        if (_$6hisTldChanged) {
            _$6htld = _$6hparams.tld;
            _$6hxYaDomain = _$6htld === 'tr' ? 'yandex.com.tr' : 'yandex.' + _$6htld;
            _$6hyaDomain = [
                'ua',
                'by',
                'kz'
            ].indexOf(_$6htld) != -1 ? 'yandex.ru' : _$6hxYaDomain;
            _$6hiGlobal['content-region'] = _$6htld;
            _$6hiGlobal['click-host'] = '//clck.' + _$6hyaDomain;
            _$6hiGlobal['passport-host'] = 'https://passport.' + _$6hyaDomain;
            _$6hiGlobal['pass-host'] = '//pass.' + _$6hxYaDomain;
            _$6hiGlobal['social-host'] = '//social.' + _$6hxYaDomain;
            _$6hiGlobal['export-host'] = '//export.' + _$6hxYaDomain;
        } else {
            undefined;
        }
        for (var _$6hp in _$6hparams) {
            _$6hiGlobal[_$6hp] = _$6hparams[_$6hp];
        }
        return;
    }
    function $148(__$ctx) {
        if (!!$$elem === false) {
            return {};
            return;
        } else {
            return $155(__$ctx);
        }
    }
    function $155(__$ctx) {
        var __t = $$mode;
        if (__t === '') {
            return $156(__$ctx);
        } else if (__t === 'content') {
            return __$ctx.ctx.content;
            return;
        } else if (__t === 'mix' || __t === 'bem' || __t === 'jsAttr' || __t === 'js' || __t === 'cls' || __t === 'attrs' || __t === 'tag') {
            return undefined;
            return;
        } else {
            return $177(__$ctx);
        }
    }
    function $156(__$ctx) {
        if (!!__$ctx['i-global'] === false) {
            return $158(__$ctx);
        } else {
            return $177(__$ctx);
        }
    }
    function $158(__$ctx) {
        var __r0, __r1, __r2, __r3, __r4, __r5, __r6;
        var _$6fps = {}, _$6fes = [
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
            ], _$6fe;
        while (_$6fe = _$6fes.shift()) {
            _$6fps[_$6fe] = ('', __r0 = $$mode, $$mode = 'default', __r1 = $$block, $$block = 'i-global', __r2 = $$elem, $$elem = _$6fe, __r3 = $121(__$ctx), $$mode = __r0, $$block = __r1, $$elem = __r2, '', __r3);
        }
        __$ctx['i-global'] = __$ctx._.extend(_$6fps, ('', __r4 = $$mode, $$mode = 'env', __r5 = $$block, $$block = 'i-global', __r6 = $148(__$ctx), $$mode = __r4, $$block = __r5, '', __r6));
        applyc(__$ctx);
        undefined;
        return;
    }
    function $177(__$ctx) {
        if (!__$ctx.ctx === false) {
            if (!__$ctx.ctx.link === false) {
                if (!!__$ctx._.isSimple(__$ctx.ctx) === false) {
                    return $181(__$ctx);
                } else {
                    return $186(__$ctx);
                }
            } else {
                return $186(__$ctx);
            }
        } else {
            return $186(__$ctx);
        }
    }
    function $181(__$ctx) {
        var __r0, __r1;
        function _$66follow() {
            if (this.ctx.link === 'no-follow') {
                return undefined;
            } else {
                undefined;
            }
            var data = this._links[this.ctx.link];
            return '', __r0 = this.ctx, this.ctx = data, __r1 = $1(__$ctx), this.ctx = __r0, '', __r1;
        }
        if (!cache || !__$ctx._cacheLog) {
            return _$66follow.call(__$ctx);
        } else {
            undefined;
        }
        var _$66contents = __$ctx._buf.slice(__$ctx._cachePos).join('');
        __$ctx._cachePos = __$ctx._buf.length;
        __$ctx._cacheLog.push(_$66contents, {
            log: __$ctx._localLog.slice(),
            link: __$ctx.ctx.link
        });
        var _$66res = _$66follow.call(__$ctx);
        __$ctx._cachePos = __$ctx._buf.length;
        return _$66res;
        return;
    }
    function $186(__$ctx) {
        if (!cache === false) {
            if (!__$ctx.ctx === false) {
                if (!__$ctx.ctx.cache === false) {
                    return $190(__$ctx);
                } else {
                    return $195(__$ctx);
                }
            } else {
                return $195(__$ctx);
            }
        } else {
            return $195(__$ctx);
        }
    }
    function $190(__$ctx) {
        var _$65cached;
        function _$65setProperty(obj, key, value) {
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
        if (_$65cached = cache.get(__$ctx.ctx.cache)) {
            var _$65oldLinks = __$ctx._links;
            if (__$ctx.ctx.links) {
                __$ctx._links = __$ctx.ctx.links;
            } else {
                undefined;
            }
            for (var _$65i = 0; _$65i < _$65cached.log.length; _$65i++) {
                if (typeof _$65cached.log[_$65i] === 'string') {
                    __$ctx._buf.push(_$65cached.log[_$65i]);
                    continue;
                } else {
                    undefined;
                }
                var _$65log = _$65cached.log[_$65i], _$65reverseLog;
                _$65reverseLog = _$65log.log.map(function (entry) {
                    return {
                        key: entry[0],
                        value: _$65setProperty(this, entry[0], entry[1])
                    };
                }, __$ctx).reverse();
                {
                    '';
                    var __r0 = __$ctx.ctx, __r1 = __r0.cache;
                    __r0.cache = null;
                    var __r2 = __$ctx._cacheLog;
                    __$ctx._cacheLog = null;
                    var __r3 = __$ctx.ctx, __r4 = __r3.link;
                    __r3.link = _$65log.link;
                    $1(__$ctx);
                    __r0.cache = __r1;
                    __$ctx._cacheLog = __r2;
                    __r3.link = __r4;
                    '';
                }
                undefined;
                _$65reverseLog.forEach(function (entry) {
                    _$65setProperty(this, entry.key, entry.value);
                }, __$ctx);
            }
            __$ctx._links = _$65oldLinks;
            return _$65cached.res;
        } else {
            undefined;
        }
        var _$65cacheLog = [], _$65res;
        {
            '';
            var __r5 = __$ctx.ctx, __r6 = __r5.cache;
            __r5.cache = null;
            var __r7 = __$ctx._cachePos;
            __$ctx._cachePos = __$ctx._buf.length;
            var __r8 = __$ctx._cacheLog;
            __$ctx._cacheLog = _$65cacheLog;
            var __r9 = __$ctx._localLog;
            __$ctx._localLog = [];
            {
                _$65res = $1(__$ctx);
                var _$65tail = __$ctx._buf.slice(__$ctx._cachePos).join('');
                if (_$65tail) {
                    _$65cacheLog.push(_$65tail);
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
            log: _$65cacheLog,
            res: _$65res
        });
        return _$65res;
        return;
    }
    function $195(__$ctx) {
        var __t = $$mode;
        if (__t === 'default') {
            return $197(__$ctx);
        } else if (__t === '') {
            if (!__$ctx._.isSimple(__$ctx.ctx) === false) {
                __$ctx._listLength--;
                var _$63ctx = __$ctx.ctx;
                (_$63ctx && _$63ctx !== true || _$63ctx === 0) && __$ctx._buf.push(_$63ctx);
                return;
            } else {
                if (!!__$ctx.ctx === false) {
                    __$ctx._listLength--;
                    return;
                } else {
                    if (!__$ctx._.isArray(__$ctx.ctx) === false) {
                        return $206(__$ctx);
                    } else {
                        if (!true === false) {
                            return $209(__$ctx);
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
    function $197(__$ctx) {
        var __r13, __r0, __r4, __r5, __r6, __r7, __r8, __r9, __r10, __r11, __r12, __r1, __r14, __r15, __r16, __r17, __r20, __r21, __r22, __r23, __r24, __r25;
        var _$64BEM_ = __$ctx.BEM, _$64v = __$ctx.ctx, _$64buf = __$ctx._buf, _$64tag;
        _$64tag = ('', __r0 = $$mode, $$mode = 'tag', __r1 = $1(__$ctx), $$mode = __r0, '', __r1);
        typeof _$64tag != 'undefined' || (_$64tag = _$64v.tag);
        typeof _$64tag != 'undefined' || (_$64tag = 'div');
        if (_$64tag) {
            var _$64jsParams, _$64js;
            if ($$block && _$64v.js !== false) {
                _$64js = ('', __r4 = $$mode, $$mode = 'js', __r5 = $1(__$ctx), $$mode = __r4, '', __r5);
                _$64js = _$64js ? __$ctx._.extend(_$64v.js, _$64js === true ? {} : _$64js) : _$64v.js === true ? {} : _$64v.js;
                _$64js && ((_$64jsParams = {})[_$64BEM_.INTERNAL.buildClass($$block, _$64v.elem)] = _$64js);
            } else {
                undefined;
            }
            _$64buf.push('<', _$64tag);
            var _$64isBEM = ('', __r6 = $$mode, $$mode = 'bem', __r7 = $1(__$ctx), $$mode = __r6, '', __r7);
            typeof _$64isBEM != 'undefined' || (_$64isBEM = typeof _$64v.bem != 'undefined' ? _$64v.bem : _$64v.block || _$64v.elem);
            var _$64cls = ('', __r8 = $$mode, $$mode = 'cls', __r9 = $1(__$ctx), $$mode = __r8, '', __r9);
            _$64cls || (_$64cls = _$64v.cls);
            var _$64addJSInitClass = _$64v.block && _$64jsParams;
            if (_$64isBEM || _$64cls) {
                _$64buf.push(' class="');
                if (_$64isBEM) {
                    _$64BEM_.INTERNAL.buildClasses($$block, _$64v.elem, _$64v.elemMods || _$64v.mods, _$64buf);
                    var _$64mix = ('', __r10 = $$mode, $$mode = 'mix', __r11 = $1(__$ctx), $$mode = __r10, '', __r11);
                    _$64v.mix && (_$64mix = _$64mix ? _$64mix.concat(_$64v.mix) : _$64v.mix);
                    if (_$64mix) {
                        var _$64visited = {};
                        function _$64visitedKey(block, elem) {
                            return (block || '') + '__' + (elem || '');
                        }
                        _$64visited[_$64visitedKey($$block, $$elem)] = true;
                        if (!__$ctx._.isArray(_$64mix)) {
                            _$64mix = [_$64mix];
                        } else {
                            undefined;
                        }
                        for (var _$64i = 0; _$64i < _$64mix.length; _$64i++) {
                            var _$64mixItem = _$64mix[_$64i];
                            if (!_$64mixItem) {
                                continue;
                            } else {
                                undefined;
                            }
                            var _$64hasItem = _$64mixItem.block || _$64mixItem.elem, _$64block = _$64mixItem.block || _$64mixItem._block || $$block, _$64elem = _$64mixItem.elem || _$64mixItem._elem || $$elem, _$64mods = _$64mixItem.mods || $$mods, _$64elemMods = _$64mixItem.elemMods || {};
                            _$64hasItem && _$64buf.push(' ');
                            _$64BEM_.INTERNAL[_$64hasItem ? 'buildClasses' : 'buildModsClasses'](_$64block, _$64mixItem.elem || _$64mixItem._elem || (_$64mixItem.block ? undefined : $$elem), _$64mixItem.elemMods || _$64mixItem.mods, _$64buf);
                            if (_$64mixItem.js) {
                                (_$64jsParams || (_$64jsParams = {}))[_$64BEM_.INTERNAL.buildClass(_$64block, _$64mixItem.elem)] = _$64mixItem.js === true ? {} : _$64mixItem.js;
                                _$64addJSInitClass || (_$64addJSInitClass = _$64block && !_$64mixItem.elem);
                            } else {
                                undefined;
                            }
                            if (_$64hasItem && !_$64visited[_$64visitedKey(_$64block, _$64elem)]) {
                                _$64visited[_$64visitedKey(_$64block, _$64elem)] = true;
                                var _$64nestedMix = ('', __r12 = $$block, $$block = _$64block, __r13 = $$elem, $$elem = _$64elem, __r14 = $$mods, $$mods = _$64mods, __r15 = $$elemMods, $$elemMods = _$64elemMods, __r16 = $$mode, $$mode = 'mix', __r17 = $1(__$ctx), $$block = __r12, $$elem = __r13, $$mods = __r14, $$elemMods = __r15, $$mode = __r16, '', __r17);
                                if (_$64nestedMix) {
                                    for (var _$64j = 0; _$64j < _$64nestedMix.length; _$64j++) {
                                        var _$64nestedItem = _$64nestedMix[_$64j];
                                        if (!_$64nestedItem.block && !_$64nestedItem.elem || !_$64visited[_$64visitedKey(_$64nestedItem.block, _$64nestedItem.elem)]) {
                                            _$64nestedItem._block = _$64block;
                                            _$64nestedItem._elem = _$64elem;
                                            _$64mix.splice(_$64i + 1, 0, _$64nestedItem);
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
                _$64cls && _$64buf.push(_$64isBEM ? ' ' : '', _$64cls);
                _$64addJSInitClass && _$64buf.push(' i-bem');
                _$64buf.push('"');
            } else {
                undefined;
            }
            if (_$64jsParams) {
                var _$64jsAttr = ('', __r20 = $$mode, $$mode = 'jsAttr', __r21 = $1(__$ctx), $$mode = __r20, '', __r21);
                _$64buf.push(' ', _$64jsAttr || 'data-bem', '="', __$ctx._.attrEscape(JSON.stringify(_$64jsParams)), '"');
            } else {
                undefined;
            }
            var _$64attrs = ('', __r22 = $$mode, $$mode = 'attrs', __r23 = $1(__$ctx), $$mode = __r22, '', __r23);
            _$64attrs = __$ctx._.extend(_$64attrs, _$64v.attrs);
            if (_$64attrs) {
                var _$64name;
                for (_$64name in _$64attrs) {
                    if (_$64attrs[_$64name] === undefined) {
                        continue;
                    } else {
                        undefined;
                    }
                    _$64buf.push(' ', _$64name, '="', __$ctx._.attrEscape(_$64attrs[_$64name]), '"');
                }
            } else {
                undefined;
            }
        } else {
            undefined;
        }
        if (__$ctx._.isShortTag(_$64tag)) {
            _$64buf.push('/>');
        } else {
            _$64tag && _$64buf.push('>');
            var _$64content = ('', __r24 = $$mode, $$mode = 'content', __r25 = $1(__$ctx), $$mode = __r24, '', __r25);
            if (_$64content || _$64content === 0) {
                var _$64isBEM = $$block || $$elem;
                {
                    '';
                    var __r26 = __$ctx._notNewList;
                    __$ctx._notNewList = false;
                    var __r27 = __$ctx.position;
                    __$ctx.position = _$64isBEM ? 1 : __$ctx.position;
                    var __r28 = __$ctx._listLength;
                    __$ctx._listLength = _$64isBEM ? 1 : __$ctx._listLength;
                    var __r29 = __$ctx.ctx;
                    __$ctx.ctx = _$64content;
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
            _$64tag && _$64buf.push('</', _$64tag, '>');
        }
        return;
    }
    function $206(__$ctx) {
        var _$61v = __$ctx.ctx, _$61l = _$61v.length, _$61i = 0, _$61prevPos = __$ctx.position, _$61prevNotNewList = __$ctx._notNewList;
        if (_$61prevNotNewList) {
            __$ctx._listLength += _$61l - 1;
        } else {
            __$ctx.position = 0;
            __$ctx._listLength = _$61l;
        }
        __$ctx._notNewList = true;
        while (_$61i < _$61l) {
            var _$61newCtx = _$61v[_$61i++];
            {
                '';
                var __r0 = __$ctx.ctx;
                __$ctx.ctx = _$61newCtx == null ? '' : _$61newCtx;
                $1(__$ctx);
                __$ctx.ctx = __r0;
                '';
            }
            undefined;
        }
        _$61prevNotNewList || (__$ctx.position = _$61prevPos);
        return;
    }
    function $209(__$ctx) {
        var _$60vBlock = __$ctx.ctx.block, _$60vElem = __$ctx.ctx.elem, _$60block = __$ctx._currBlock || $$block;
        __$ctx.ctx || (__$ctx.ctx = {});
        {
            '';
            var __r0 = $$mode;
            $$mode = 'default';
            var __r1 = __$ctx._links;
            __$ctx._links = __$ctx.ctx.links || __$ctx._links;
            var __r2 = $$block;
            $$block = _$60vBlock || (_$60vElem ? _$60block : undefined);
            var __r3 = __$ctx._currBlock;
            __$ctx._currBlock = _$60vBlock || _$60vElem ? undefined : _$60block;
            var __r4 = $$elem;
            $$elem = __$ctx.ctx.elem;
            var __r5 = $$mods;
            $$mods = (_$60vBlock ? __$ctx.ctx.mods : $$mods) || {};
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


BEM.I18N.lang('tr');
