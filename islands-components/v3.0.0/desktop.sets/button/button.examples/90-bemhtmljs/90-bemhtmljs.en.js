var BEMHTML = function() {
  var $$mode, $$block, $$elem, $$elemMods, $$mods;
  var cache,
      exports = {},
      xjst = (function (exports) {
    function $1(__$ctx) {
        var __t = $$mode;
        if (__t === 'content') {
            return $2(__$ctx);
        } else if (__t === 'js') {
            return $88(__$ctx);
        } else if (__t === 'tag') {
            return $96(__$ctx);
        } else if (__t === 'bem') {
            return $115(__$ctx);
        } else if (__t === 'default') {
            return $50(__$ctx);
        } else if (__t === 'public-params') {
            if ($$block === 'i-global') {
                return $132(__$ctx);
            } else {
                return $158(__$ctx);
            }
        } else if (__t === 'env') {
            if ($$block === 'i-global') {
                return $140(__$ctx);
            } else {
                return $158(__$ctx);
            }
        } else if (__t === '') {
            return $147(__$ctx);
        } else if (__t === 'mix') {
            return $153(__$ctx);
        } else if (__t === 'jsAttr') {
            return $155(__$ctx);
        } else if (__t === 'attrs') {
            return $21(__$ctx);
        } else if (__t === 'cls') {
            return $157(__$ctx);
        } else if (__t === 'js-params') {
            if ($$block === 'b-page') {
                if (!!$$elem === false) {
                    return $126(__$ctx);
                } else {
                    return $158(__$ctx);
                }
            } else {
                return $158(__$ctx);
            }
        } else {
            return $158(__$ctx);
        }
    }
    function $2(__$ctx) {
        var __t = $$block;
        if (__t === 'button') {
            if (!!$$elem === false) {
                return {
                    elem: 'text',
                    tag: 'span',
                    content: __$ctx.ctx.content
                };
                return;
            } else {
                return $20(__$ctx);
            }
        } else if (__t === 'i-ua') {
            return $8(__$ctx);
        } else {
            return $20(__$ctx);
        }
    }
    function $8(__$ctx) {
        if (!(__$ctx['__$anflg6'] !== true) === false) {
            if (!!$$elem === false) {
                var __r0, __r1;
                var _$4dc = ('', __r0 = __$ctx['__$anflg6'], __$ctx['__$anflg6'] = true, __r1 = $8(__$ctx), __$ctx['__$anflg6'] = __r0, '', __r1);
                _$4dc += [
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
                return _$4dc;
                return;
            } else {
                return $14(__$ctx);
            }
        } else {
            return $14(__$ctx);
        }
    }
    function $14(__$ctx) {
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
            return $20(__$ctx);
        }
    }
    function $20(__$ctx) {
        return __$ctx.ctx.content;
        return;
    }
    function $21(__$ctx) {
        if ($$block === 'button') {
            return $22(__$ctx);
        } else {
            return $49(__$ctx);
        }
    }
    function $22(__$ctx) {
        if (!(__$ctx['__$anflg9'] !== true) === false) {
            if (!__$ctx.ctx.url === false) {
                if (!!$$elem === false) {
                    var __r0, __r1;
                    var _$4kctx = __$ctx.ctx, _$4kp = ('', __r0 = __$ctx['__$anflg9'], __$ctx['__$anflg9'] = true, __r1 = $22(__$ctx), __$ctx['__$anflg9'] = __r0, '', __r1), _$4ka = { href: _$4kctx.url };
                    _$4kctx.target && (_$4ka.target = _$4kctx.target);
                    $$mods.disabled && (_$4ka['aria-disabled'] = true);
                    return __$ctx._.extend(_$4kp, _$4ka);
                    return;
                } else {
                    return $31(__$ctx);
                }
            } else {
                return $31(__$ctx);
            }
        } else {
            return $31(__$ctx);
        }
    }
    function $31(__$ctx) {
        if (!(__$ctx['__$anflg8'] !== true) === false) {
            if (!!$$elem === false) {
                if (!!__$ctx.ctx.url === false) {
                    return $35(__$ctx);
                } else {
                    return $40(__$ctx);
                }
            } else {
                return $40(__$ctx);
            }
        } else {
            return $40(__$ctx);
        }
    }
    function $35(__$ctx) {
        var __r0, __r1;
        var _$4jctx = __$ctx.ctx, _$4jp = ('', __r0 = __$ctx['__$anflg8'], __$ctx['__$anflg8'] = true, __r1 = $22(__$ctx), __$ctx['__$anflg8'] = __r0, '', __r1), _$4ja = { type: _$4jctx.type || 'button' }, _$4jprops = [
                'name',
                'value'
            ], _$4ji;
        while (_$4ji = _$4jprops.shift()) {
            _$4jctx[_$4ji] && (_$4ja[_$4ji] = _$4jctx[_$4ji]);
        }
        $$mods.disabled && (_$4ja.disabled = 'disabled');
        return __$ctx._.extend(_$4jp, _$4ja);
        return;
    }
    function $40(__$ctx) {
        if (!true === false) {
            if (!!$$elem === false) {
                var _$4ictx = __$ctx.ctx, _$4ia = { role: 'button' };
                _$4ictx.tabindex && (_$4ia.tabindex = _$4ictx.tabindex);
                return _$4ia;
                return;
            } else {
                return $49(__$ctx);
            }
        } else {
            return $49(__$ctx);
        }
    }
    function $49(__$ctx) {
        return undefined;
        return;
    }
    function $50(__$ctx) {
        var __t = $$block;
        if (__t === 'button') {
            return $51(__$ctx);
        } else if (__t === 'i-global') {
            return $59(__$ctx);
        } else {
            return $158(__$ctx);
        }
    }
    function $51(__$ctx) {
        if (!(__$ctx['__$anflg7'] !== true) === false) {
            if (!!$$elem === false) {
                var _$4hmods = __$ctx.ctx.mods || {};
                _$4hmods.theme = _$4hmods.theme || 'normal';
                {
                    '';
                    var __r0 = __$ctx['__$anflg7'];
                    __$ctx['__$anflg7'] = true;
                    {
                        '';
                        var __r1 = __$ctx.ctx, __r2 = __r1.mods;
                        __r1.mods = _$4hmods;
                        $51(__$ctx);
                        __r1.mods = __r2;
                        '';
                    }
                    __$ctx['__$anflg7'] = __r0;
                    '';
                }
                undefined;
                return;
            } else {
                return $158(__$ctx);
            }
        } else {
            return $158(__$ctx);
        }
    }
    function $59(__$ctx) {
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
                    return $83(__$ctx);
                } else {
                    return $158(__$ctx);
                }
            }
        }
    }
    function $83(__$ctx) {
        var _$3xparams = __$ctx.ctx.params || {}, _$3xiGlobal = __$ctx['i-global'], _$3xisTldChanged = _$3xparams.tld && _$3xparams.tld !== _$3xiGlobal.tld, _$3xtld, _$3xxYaDomain, _$3xyaDomain;
        if (_$3xisTldChanged) {
            _$3xtld = _$3xparams.tld;
            _$3xxYaDomain = _$3xtld === 'tr' ? 'yandex.com.tr' : 'yandex.' + _$3xtld;
            _$3xyaDomain = [
                'ua',
                'by',
                'kz'
            ].indexOf(_$3xtld) != -1 ? 'yandex.ru' : _$3xxYaDomain;
            _$3xiGlobal['content-region'] = _$3xtld;
            _$3xiGlobal['click-host'] = '//clck.' + _$3xyaDomain;
            _$3xiGlobal['passport-host'] = 'https://passport.' + _$3xyaDomain;
            _$3xiGlobal['pass-host'] = '//pass.' + _$3xxYaDomain;
            _$3xiGlobal['social-host'] = '//social.' + _$3xxYaDomain;
            _$3xiGlobal['export-host'] = '//export.' + _$3xxYaDomain;
        } else {
            undefined;
        }
        for (var _$3xp in _$3xparams) {
            _$3xiGlobal[_$3xp] = _$3xparams[_$3xp];
        }
        return;
    }
    function $88(__$ctx) {
        if ($$block === 'button') {
            if (!!$$elem === false) {
                return true;
                return;
            } else {
                return $95(__$ctx);
            }
        } else {
            return $95(__$ctx);
        }
    }
    function $95(__$ctx) {
        return undefined;
        return;
    }
    function $96(__$ctx) {
        var __t = $$block;
        if (__t === 'button') {
            if (!__$ctx.ctx.url === false) {
                if (!!$$elem === false) {
                    return 'a';
                    return;
                } else {
                    return $103(__$ctx);
                }
            } else {
                return $103(__$ctx);
            }
        } else if (__t === 'i-ua') {
            if (!!$$elem === false) {
                return 'script';
                return;
            } else {
                return $114(__$ctx);
            }
        } else {
            return $114(__$ctx);
        }
    }
    function $103(__$ctx) {
        if (!!$$elem === false) {
            return 'button';
            return;
        } else {
            return $114(__$ctx);
        }
    }
    function $114(__$ctx) {
        return undefined;
        return;
    }
    function $115(__$ctx) {
        if ($$block === 'i-ua') {
            if (!!$$elem === false) {
                return false;
                return;
            } else {
                return $122(__$ctx);
            }
        } else {
            return $122(__$ctx);
        }
    }
    function $122(__$ctx) {
        return undefined;
        return;
    }
    function $126(__$ctx) {
        var __r0, __r1, __r2, __r3;
        var _$49_this = __$ctx['i-global'], _$49js = {}, _$49block = {
                block: 'i-global',
                js: _$49js
            }, _$49e;
        for (_$49e in _$49_this) {
            if (_$49_this.hasOwnProperty(_$49e) && ('', __r0 = $$mode, $$mode = 'public-params', __r1 = $$block, $$block = 'i-global', __r2 = $$elem, $$elem = _$49e, __r3 = $132(__$ctx), $$mode = __r0, $$block = __r1, $$elem = __r2, '', __r3)) {
                _$49js[_$49e] = _$49_this[_$49e];
            } else {
                undefined;
            }
        }
        return _$49block;
        return;
    }
    function $132(__$ctx) {
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
            return $158(__$ctx);
        }
    }
    function $140(__$ctx) {
        if (!!$$elem === false) {
            return {};
            return;
        } else {
            return $158(__$ctx);
        }
    }
    function $147(__$ctx) {
        if (!!__$ctx['i-global'] === false) {
            return $149(__$ctx);
        } else {
            return $158(__$ctx);
        }
    }
    function $149(__$ctx) {
        var __r0, __r1, __r2, __r3, __r4, __r5, __r6;
        var _$3vps = {}, _$3ves = [
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
            ], _$3ve;
        while (_$3ve = _$3ves.shift()) {
            _$3vps[_$3ve] = ('', __r0 = $$mode, $$mode = 'default', __r1 = $$block, $$block = 'i-global', __r2 = $$elem, $$elem = _$3ve, __r3 = $59(__$ctx), $$mode = __r0, $$block = __r1, $$elem = __r2, '', __r3);
        }
        __$ctx['i-global'] = __$ctx._.extend(_$3vps, ('', __r4 = $$mode, $$mode = 'env', __r5 = $$block, $$block = 'i-global', __r6 = $140(__$ctx), $$mode = __r4, $$block = __r5, '', __r6));
        applyc(__$ctx);
        undefined;
        return;
    }
    function $153(__$ctx) {
        return undefined;
        return;
    }
    function $155(__$ctx) {
        return undefined;
        return;
    }
    function $157(__$ctx) {
        return undefined;
        return;
    }
    function $158(__$ctx) {
        if (!__$ctx.ctx === false) {
            if (!__$ctx.ctx.link === false) {
                if (!!__$ctx._.isSimple(__$ctx.ctx) === false) {
                    return $162(__$ctx);
                } else {
                    return $167(__$ctx);
                }
            } else {
                return $167(__$ctx);
            }
        } else {
            return $167(__$ctx);
        }
    }
    function $162(__$ctx) {
        var __r0, __r1;
        function _$3mfollow() {
            if (this.ctx.link === 'no-follow') {
                return undefined;
            } else {
                undefined;
            }
            var data = this._links[this.ctx.link];
            return '', __r0 = this.ctx, this.ctx = data, __r1 = $1(__$ctx), this.ctx = __r0, '', __r1;
        }
        if (!cache || !__$ctx._cacheLog) {
            return _$3mfollow.call(__$ctx);
        } else {
            undefined;
        }
        var _$3mcontents = __$ctx._buf.slice(__$ctx._cachePos).join('');
        __$ctx._cachePos = __$ctx._buf.length;
        __$ctx._cacheLog.push(_$3mcontents, {
            log: __$ctx._localLog.slice(),
            link: __$ctx.ctx.link
        });
        var _$3mres = _$3mfollow.call(__$ctx);
        __$ctx._cachePos = __$ctx._buf.length;
        return _$3mres;
        return;
    }
    function $167(__$ctx) {
        if (!cache === false) {
            if (!__$ctx.ctx === false) {
                if (!__$ctx.ctx.cache === false) {
                    return $171(__$ctx);
                } else {
                    return $176(__$ctx);
                }
            } else {
                return $176(__$ctx);
            }
        } else {
            return $176(__$ctx);
        }
    }
    function $171(__$ctx) {
        var _$3lcached;
        function _$3lsetProperty(obj, key, value) {
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
        if (_$3lcached = cache.get(__$ctx.ctx.cache)) {
            var _$3loldLinks = __$ctx._links;
            if (__$ctx.ctx.links) {
                __$ctx._links = __$ctx.ctx.links;
            } else {
                undefined;
            }
            for (var _$3li = 0; _$3li < _$3lcached.log.length; _$3li++) {
                if (typeof _$3lcached.log[_$3li] === 'string') {
                    __$ctx._buf.push(_$3lcached.log[_$3li]);
                    continue;
                } else {
                    undefined;
                }
                var _$3llog = _$3lcached.log[_$3li], _$3lreverseLog;
                _$3lreverseLog = _$3llog.log.map(function (entry) {
                    return {
                        key: entry[0],
                        value: _$3lsetProperty(this, entry[0], entry[1])
                    };
                }, __$ctx).reverse();
                {
                    '';
                    var __r0 = __$ctx.ctx, __r1 = __r0.cache;
                    __r0.cache = null;
                    var __r2 = __$ctx._cacheLog;
                    __$ctx._cacheLog = null;
                    var __r3 = __$ctx.ctx, __r4 = __r3.link;
                    __r3.link = _$3llog.link;
                    $1(__$ctx);
                    __r0.cache = __r1;
                    __$ctx._cacheLog = __r2;
                    __r3.link = __r4;
                    '';
                }
                undefined;
                _$3lreverseLog.forEach(function (entry) {
                    _$3lsetProperty(this, entry.key, entry.value);
                }, __$ctx);
            }
            __$ctx._links = _$3loldLinks;
            return _$3lcached.res;
        } else {
            undefined;
        }
        var _$3lcacheLog = [], _$3lres;
        {
            '';
            var __r5 = __$ctx.ctx, __r6 = __r5.cache;
            __r5.cache = null;
            var __r7 = __$ctx._cachePos;
            __$ctx._cachePos = __$ctx._buf.length;
            var __r8 = __$ctx._cacheLog;
            __$ctx._cacheLog = _$3lcacheLog;
            var __r9 = __$ctx._localLog;
            __$ctx._localLog = [];
            {
                _$3lres = $1(__$ctx);
                var _$3ltail = __$ctx._buf.slice(__$ctx._cachePos).join('');
                if (_$3ltail) {
                    _$3lcacheLog.push(_$3ltail);
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
            log: _$3lcacheLog,
            res: _$3lres
        });
        return _$3lres;
        return;
    }
    function $176(__$ctx) {
        var __t = $$mode;
        if (__t === 'default') {
            return $178(__$ctx);
        } else if (__t === '') {
            if (!__$ctx._.isSimple(__$ctx.ctx) === false) {
                __$ctx._listLength--;
                var _$3jctx = __$ctx.ctx;
                (_$3jctx && _$3jctx !== true || _$3jctx === 0) && __$ctx._buf.push(_$3jctx);
                return;
            } else {
                if (!!__$ctx.ctx === false) {
                    __$ctx._listLength--;
                    return;
                } else {
                    if (!__$ctx._.isArray(__$ctx.ctx) === false) {
                        return $187(__$ctx);
                    } else {
                        if (!true === false) {
                            return $190(__$ctx);
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
    function $178(__$ctx) {
        var __r13, __r0, __r4, __r5, __r6, __r7, __r8, __r9, __r10, __r11, __r12, __r1, __r14, __r15, __r16, __r17, __r20, __r21, __r22, __r23, __r24, __r25;
        var _$3kBEM_ = __$ctx.BEM, _$3kv = __$ctx.ctx, _$3kbuf = __$ctx._buf, _$3ktag;
        _$3ktag = ('', __r0 = $$mode, $$mode = 'tag', __r1 = $96(__$ctx), $$mode = __r0, '', __r1);
        typeof _$3ktag != 'undefined' || (_$3ktag = _$3kv.tag);
        typeof _$3ktag != 'undefined' || (_$3ktag = 'div');
        if (_$3ktag) {
            var _$3kjsParams, _$3kjs;
            if ($$block && _$3kv.js !== false) {
                _$3kjs = ('', __r4 = $$mode, $$mode = 'js', __r5 = $88(__$ctx), $$mode = __r4, '', __r5);
                _$3kjs = _$3kjs ? __$ctx._.extend(_$3kv.js, _$3kjs === true ? {} : _$3kjs) : _$3kv.js === true ? {} : _$3kv.js;
                _$3kjs && ((_$3kjsParams = {})[_$3kBEM_.INTERNAL.buildClass($$block, _$3kv.elem)] = _$3kjs);
            } else {
                undefined;
            }
            _$3kbuf.push('<', _$3ktag);
            var _$3kisBEM = ('', __r6 = $$mode, $$mode = 'bem', __r7 = $115(__$ctx), $$mode = __r6, '', __r7);
            typeof _$3kisBEM != 'undefined' || (_$3kisBEM = typeof _$3kv.bem != 'undefined' ? _$3kv.bem : _$3kv.block || _$3kv.elem);
            var _$3kcls = ('', __r8 = $$mode, $$mode = 'cls', __r9 = $157(__$ctx), $$mode = __r8, '', __r9);
            _$3kcls || (_$3kcls = _$3kv.cls);
            var _$3kaddJSInitClass = _$3kv.block && _$3kjsParams;
            if (_$3kisBEM || _$3kcls) {
                _$3kbuf.push(' class="');
                if (_$3kisBEM) {
                    _$3kBEM_.INTERNAL.buildClasses($$block, _$3kv.elem, _$3kv.elemMods || _$3kv.mods, _$3kbuf);
                    var _$3kmix = ('', __r10 = $$mode, $$mode = 'mix', __r11 = $153(__$ctx), $$mode = __r10, '', __r11);
                    _$3kv.mix && (_$3kmix = _$3kmix ? _$3kmix.concat(_$3kv.mix) : _$3kv.mix);
                    if (_$3kmix) {
                        var _$3kvisited = {};
                        function _$3kvisitedKey(block, elem) {
                            return (block || '') + '__' + (elem || '');
                        }
                        _$3kvisited[_$3kvisitedKey($$block, $$elem)] = true;
                        if (!__$ctx._.isArray(_$3kmix)) {
                            _$3kmix = [_$3kmix];
                        } else {
                            undefined;
                        }
                        for (var _$3ki = 0; _$3ki < _$3kmix.length; _$3ki++) {
                            var _$3kmixItem = _$3kmix[_$3ki];
                            if (!_$3kmixItem) {
                                continue;
                            } else {
                                undefined;
                            }
                            var _$3khasItem = _$3kmixItem.block || _$3kmixItem.elem, _$3kblock = _$3kmixItem.block || _$3kmixItem._block || $$block, _$3kelem = _$3kmixItem.elem || _$3kmixItem._elem || $$elem, _$3kmods = _$3kmixItem.mods || $$mods, _$3kelemMods = _$3kmixItem.elemMods || {};
                            _$3khasItem && _$3kbuf.push(' ');
                            _$3kBEM_.INTERNAL[_$3khasItem ? 'buildClasses' : 'buildModsClasses'](_$3kblock, _$3kmixItem.elem || _$3kmixItem._elem || (_$3kmixItem.block ? undefined : $$elem), _$3kmixItem.elemMods || _$3kmixItem.mods, _$3kbuf);
                            if (_$3kmixItem.js) {
                                (_$3kjsParams || (_$3kjsParams = {}))[_$3kBEM_.INTERNAL.buildClass(_$3kblock, _$3kmixItem.elem)] = _$3kmixItem.js === true ? {} : _$3kmixItem.js;
                                _$3kaddJSInitClass || (_$3kaddJSInitClass = _$3kblock && !_$3kmixItem.elem);
                            } else {
                                undefined;
                            }
                            if (_$3khasItem && !_$3kvisited[_$3kvisitedKey(_$3kblock, _$3kelem)]) {
                                _$3kvisited[_$3kvisitedKey(_$3kblock, _$3kelem)] = true;
                                var _$3knestedMix = ('', __r12 = $$block, $$block = _$3kblock, __r13 = $$elem, $$elem = _$3kelem, __r14 = $$mods, $$mods = _$3kmods, __r15 = $$elemMods, $$elemMods = _$3kelemMods, __r16 = $$mode, $$mode = 'mix', __r17 = $153(__$ctx), $$block = __r12, $$elem = __r13, $$mods = __r14, $$elemMods = __r15, $$mode = __r16, '', __r17);
                                if (_$3knestedMix) {
                                    for (var _$3kj = 0; _$3kj < _$3knestedMix.length; _$3kj++) {
                                        var _$3knestedItem = _$3knestedMix[_$3kj];
                                        if (!_$3knestedItem.block && !_$3knestedItem.elem || !_$3kvisited[_$3kvisitedKey(_$3knestedItem.block, _$3knestedItem.elem)]) {
                                            _$3knestedItem._block = _$3kblock;
                                            _$3knestedItem._elem = _$3kelem;
                                            _$3kmix.splice(_$3ki + 1, 0, _$3knestedItem);
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
                _$3kcls && _$3kbuf.push(_$3kisBEM ? ' ' : '', _$3kcls);
                _$3kaddJSInitClass && _$3kbuf.push(' i-bem');
                _$3kbuf.push('"');
            } else {
                undefined;
            }
            if (_$3kjsParams) {
                var _$3kjsAttr = ('', __r20 = $$mode, $$mode = 'jsAttr', __r21 = $155(__$ctx), $$mode = __r20, '', __r21);
                _$3kbuf.push(' ', _$3kjsAttr || 'data-bem', '="', __$ctx._.attrEscape(JSON.stringify(_$3kjsParams)), '"');
            } else {
                undefined;
            }
            var _$3kattrs = ('', __r22 = $$mode, $$mode = 'attrs', __r23 = $21(__$ctx), $$mode = __r22, '', __r23);
            _$3kattrs = __$ctx._.extend(_$3kattrs, _$3kv.attrs);
            if (_$3kattrs) {
                var _$3kname;
                for (_$3kname in _$3kattrs) {
                    if (_$3kattrs[_$3kname] === undefined) {
                        continue;
                    } else {
                        undefined;
                    }
                    _$3kbuf.push(' ', _$3kname, '="', __$ctx._.attrEscape(_$3kattrs[_$3kname]), '"');
                }
            } else {
                undefined;
            }
        } else {
            undefined;
        }
        if (__$ctx._.isShortTag(_$3ktag)) {
            _$3kbuf.push('/>');
        } else {
            _$3ktag && _$3kbuf.push('>');
            var _$3kcontent = ('', __r24 = $$mode, $$mode = 'content', __r25 = $2(__$ctx), $$mode = __r24, '', __r25);
            if (_$3kcontent || _$3kcontent === 0) {
                var _$3kisBEM = $$block || $$elem;
                {
                    '';
                    var __r26 = __$ctx._notNewList;
                    __$ctx._notNewList = false;
                    var __r27 = __$ctx.position;
                    __$ctx.position = _$3kisBEM ? 1 : __$ctx.position;
                    var __r28 = __$ctx._listLength;
                    __$ctx._listLength = _$3kisBEM ? 1 : __$ctx._listLength;
                    var __r29 = __$ctx.ctx;
                    __$ctx.ctx = _$3kcontent;
                    var __r30 = $$mode;
                    $$mode = '';
                    $147(__$ctx);
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
            _$3ktag && _$3kbuf.push('</', _$3ktag, '>');
        }
        return;
    }
    function $187(__$ctx) {
        var _$3hv = __$ctx.ctx, _$3hl = _$3hv.length, _$3hi = 0, _$3hprevPos = __$ctx.position, _$3hprevNotNewList = __$ctx._notNewList;
        if (_$3hprevNotNewList) {
            __$ctx._listLength += _$3hl - 1;
        } else {
            __$ctx.position = 0;
            __$ctx._listLength = _$3hl;
        }
        __$ctx._notNewList = true;
        while (_$3hi < _$3hl) {
            var _$3hnewCtx = _$3hv[_$3hi++];
            {
                '';
                var __r0 = __$ctx.ctx;
                __$ctx.ctx = _$3hnewCtx == null ? '' : _$3hnewCtx;
                $147(__$ctx);
                __$ctx.ctx = __r0;
                '';
            }
            undefined;
        }
        _$3hprevNotNewList || (__$ctx.position = _$3hprevPos);
        return;
    }
    function $190(__$ctx) {
        var _$3gvBlock = __$ctx.ctx.block, _$3gvElem = __$ctx.ctx.elem, _$3gblock = __$ctx._currBlock || $$block;
        __$ctx.ctx || (__$ctx.ctx = {});
        {
            '';
            var __r0 = $$mode;
            $$mode = 'default';
            var __r1 = __$ctx._links;
            __$ctx._links = __$ctx.ctx.links || __$ctx._links;
            var __r2 = $$block;
            $$block = _$3gvBlock || (_$3gvElem ? _$3gblock : undefined);
            var __r3 = __$ctx._currBlock;
            __$ctx._currBlock = _$3gvBlock || _$3gvElem ? undefined : _$3gblock;
            var __r4 = $$elem;
            $$elem = __$ctx.ctx.elem;
            var __r5 = $$mods;
            $$mods = (_$3gvBlock ? __$ctx.ctx.mods : $$mods) || {};
            var __r6 = $$elemMods;
            $$elemMods = __$ctx.ctx.elemMods || {};
            {
                $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
                $50(__$ctx);
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
/*borschik:include:../../../../common.blocks/button/button.examples/90-bemhtmljs.blocks/example/example.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-desktop/i-jquery/__leftclick/i-jquery__leftclick.js*/;
/*borschik:include:../../../../common.blocks/button/button.js*/;
/*borschik:include:../../../../desktop.blocks/button/button.js*/;
/*borschik:include:../../../../common.blocks/button/_pseudo/button_pseudo_yes.js*/;


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
