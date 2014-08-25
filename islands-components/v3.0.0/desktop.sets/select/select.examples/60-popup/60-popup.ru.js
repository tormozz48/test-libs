var BEMHTML = function() {
  var $$mode, $$block, $$elem, $$elemMods, $$mods;
  var cache,
      exports = {},
      xjst = (function (exports) {
    function $1(__$ctx) {
        var __t = $$mode;
        if (__t === 'default') {
            return $2(__$ctx);
        } else if (__t === 'attrs') {
            return $44(__$ctx);
        } else if (__t === 'tag') {
            return $91(__$ctx);
        } else if (__t === 'mix') {
            return $119(__$ctx);
        } else if (__t === 'js') {
            return $130(__$ctx);
        } else if (__t === 'content') {
            return $143(__$ctx);
        } else {
            return $156(__$ctx);
        }
    }
    function $2(__$ctx) {
        var __t = $$block;
        if (__t === 'select') {
            return $3(__$ctx);
        } else if (__t === 'button') {
            return $17(__$ctx);
        } else if (__t === 'popup') {
            return $34(__$ctx);
        } else {
            return $156(__$ctx);
        }
    }
    function $3(__$ctx) {
        if ($$elem === 'group') {
            return $4(__$ctx);
        } else {
            return $9(__$ctx);
        }
    }
    function $4(__$ctx) {
        if (!(__$ctx['__$anflg223'] !== true) === false) {
            {
                '';
                var __r0 = __$ctx['__$anflg223'];
                __$ctx['__$anflg223'] = true;
                {
                    '';
                    var __r1 = __$ctx._labelId;
                    __$ctx._labelId = __$ctx.generateId();
                    $4(__$ctx);
                    __$ctx._labelId = __r1;
                    '';
                }
                __$ctx['__$anflg223'] = __r0;
                '';
            }
            undefined;
            return;
        } else {
            return $9(__$ctx);
        }
    }
    function $9(__$ctx) {
        if (!(__$ctx['__$anflg220'] !== true) === false) {
            if (!!$$elem === false) {
                return $12(__$ctx);
            } else {
                return $156(__$ctx);
            }
        } else {
            return $156(__$ctx);
        }
    }
    function $12(__$ctx) {
        var _$21rctx = __$ctx.ctx, _$21rid = _$21rctx.id || __$ctx.generateId();
        {
            '';
            var __r0 = __$ctx['__$anflg220'];
            __$ctx['__$anflg220'] = true;
            {
                '';
                var __r1 = __$ctx._controlAttrs;
                __$ctx._controlAttrs = {
                    id: _$21rid,
                    name: _$21rctx.name || _$21rid,
                    tabindex: _$21rctx.tabindex
                };
                var __r2 = __$ctx._formSelect;
                __$ctx._formSelect = {
                    block: $$block,
                    mods: $$mods,
                    tabindex: _$21rctx.tabindex
                };
                $3(__$ctx);
                __$ctx._controlAttrs = __r1;
                __$ctx._formSelect = __r2;
                '';
            }
            __$ctx['__$anflg220'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $17(__$ctx) {
        if (!(__$ctx['__$anflg222'] !== true) === false) {
            if (!__$ctx._formSelect === false) {
                if (!!$$elem === false) {
                    return $21(__$ctx);
                } else {
                    return $26(__$ctx);
                }
            } else {
                return $26(__$ctx);
            }
        } else {
            return $26(__$ctx);
        }
    }
    function $21(__$ctx) {
        var _$220ctx = __$ctx.ctx, _$220selectMods = __$ctx._formSelect.mods, _$220tabindex = __$ctx._formSelect.tabindex, _$220m = _$220ctx.mods || {};
        _$220m.arrow = 'down';
        _$220selectMods.theme && (_$220m.theme = _$220selectMods.theme);
        _$220selectMods.size && (_$220m.size = _$220selectMods.size);
        _$220selectMods.disabled === 'yes' && (_$220m.disabled = 'yes');
        _$220ctx.mods = _$220m;
        _$220tabindex && (_$220ctx.tabindex = _$220tabindex);
        {
            '';
            var __r0 = __$ctx['__$anflg222'];
            __$ctx['__$anflg222'] = true;
            {
                '';
                var __r1 = __$ctx.ctx, __r2 = __r1._theme;
                __r1._theme = true;
                $17(__$ctx);
                __r1._theme = __r2;
                '';
            }
            __$ctx['__$anflg222'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $26(__$ctx) {
        if (!(__$ctx['__$anflg217'] !== true) === false) {
            if (!!$$elem === false) {
                var _$21mmods = __$ctx.ctx.mods || {};
                _$21mmods.theme = _$21mmods.theme || 'normal';
                {
                    '';
                    var __r0 = __$ctx['__$anflg217'];
                    __$ctx['__$anflg217'] = true;
                    {
                        '';
                        var __r1 = __$ctx.ctx, __r2 = __r1.mods;
                        __r1.mods = _$21mmods;
                        $17(__$ctx);
                        __r1.mods = __r2;
                        '';
                    }
                    __$ctx['__$anflg217'] = __r0;
                    '';
                }
                undefined;
                return;
            } else {
                return $156(__$ctx);
            }
        } else {
            return $156(__$ctx);
        }
    }
    function $34(__$ctx) {
        if (!!__$ctx._popupDefaults === false) {
            if (!!$$elem === false) {
                return $37(__$ctx);
            } else {
                return $156(__$ctx);
            }
        } else {
            return $156(__$ctx);
        }
    }
    function $37(__$ctx) {
        var _$21hctx = __$ctx.ctx;
        _$21hctx.mods = $$mods = __$ctx.extend({
            theme: 'ffffff',
            autoclosable: 'yes',
            adaptive: 'yes',
            animate: 'yes'
        }, $$mods);
        if (_$21hctx.zIndex) {
            var _$21hattrs = _$21hctx.attrs || (_$21hctx.attrs = {});
            _$21hattrs.style = (_$21hattrs.style || '') + ';z-index:' + _$21hctx.zIndex + ';';
        } else {
            undefined;
        }
        {
            '';
            var __r0 = __$ctx._popupDefaults;
            __$ctx._popupDefaults = true;
            $34(__$ctx);
            __$ctx._popupDefaults = __r0;
            '';
        }
        undefined;
        return;
    }
    function $44(__$ctx) {
        var __t = $$block;
        if (__t === 'select') {
            var __t = $$elem;
            if (__t === 'group') {
                return {
                    role: 'group',
                    'aria-labelledby': __$ctx._labelId
                };
                return;
            } else if (__t === 'control') {
                var _$223attrs = [
                        'id',
                        'name',
                        'tabindex'
                    ], _$223prop = {}, _$223p;
                while (_$223p = _$223attrs.pop()) {
                    __$ctx._controlAttrs[_$223p] && (_$223prop[_$223p] = __$ctx._controlAttrs[_$223p]);
                }
                $$mods.disabled === 'yes' && (_$223prop.disabled = 'disabled');
                _$223prop.tabindex = -1;
                _$223prop['aria-hidden'] = true;
                return __$ctx.ctx.controlAttrs || _$223prop;
                return;
            } else if (__t === 'item') {
                return $50(__$ctx);
            } else {
                return $156(__$ctx);
            }
        } else if (__t === 'button') {
            return $57(__$ctx);
        } else {
            return $156(__$ctx);
        }
    }
    function $50(__$ctx) {
        if (!(__$ctx['__$anflg221'] !== true) === false) {
            var __r0, __r1;
            var _$21ya = ('', __r0 = __$ctx['__$anflg221'], __$ctx['__$anflg221'] = true, __r1 = $50(__$ctx), __$ctx['__$anflg221'] = __r0, '', __r1) || {};
            if ((__$ctx.ctx.elemMods || {}).label === 'yes') {
                _$21ya.id = __$ctx._labelId;
                _$21ya['aria-hidden'] = true;
            } else {
                undefined;
            }
            return _$21ya;
            return;
        } else {
            return { id: __$ctx.generateId() };
            return;
        }
    }
    function $57(__$ctx) {
        if (!__$ctx._formSelect === false) {
            if (!!$$elem === false) {
                return {
                    role: 'listbox',
                    type: 'button',
                    'aria-haspopup': true,
                    'aria-expanded': false
                };
                return;
            } else {
                return $63(__$ctx);
            }
        } else {
            return $63(__$ctx);
        }
    }
    function $63(__$ctx) {
        if (!(__$ctx['__$anflg219'] !== true) === false) {
            if (!__$ctx.ctx.url === false) {
                if (!!$$elem === false) {
                    var __r0, __r1;
                    var _$21pctx = __$ctx.ctx, _$21pp = ('', __r0 = __$ctx['__$anflg219'], __$ctx['__$anflg219'] = true, __r1 = $57(__$ctx), __$ctx['__$anflg219'] = __r0, '', __r1), _$21pa = { href: _$21pctx.url };
                    _$21pctx.target && (_$21pa.target = _$21pctx.target);
                    $$mods.disabled && (_$21pa['aria-disabled'] = true);
                    return __$ctx._.extend(_$21pp, _$21pa);
                    return;
                } else {
                    return $72(__$ctx);
                }
            } else {
                return $72(__$ctx);
            }
        } else {
            return $72(__$ctx);
        }
    }
    function $72(__$ctx) {
        if (!(__$ctx['__$anflg218'] !== true) === false) {
            if (!!$$elem === false) {
                if (!!__$ctx.ctx.url === false) {
                    return $76(__$ctx);
                } else {
                    return $81(__$ctx);
                }
            } else {
                return $81(__$ctx);
            }
        } else {
            return $81(__$ctx);
        }
    }
    function $76(__$ctx) {
        var __r0, __r1;
        var _$21octx = __$ctx.ctx, _$21op = ('', __r0 = __$ctx['__$anflg218'], __$ctx['__$anflg218'] = true, __r1 = $57(__$ctx), __$ctx['__$anflg218'] = __r0, '', __r1), _$21oa = { type: _$21octx.type || 'button' }, _$21oprops = [
                'name',
                'value'
            ], _$21oi;
        while (_$21oi = _$21oprops.shift()) {
            _$21octx[_$21oi] && (_$21oa[_$21oi] = _$21octx[_$21oi]);
        }
        $$mods.disabled && (_$21oa.disabled = 'disabled');
        return __$ctx._.extend(_$21op, _$21oa);
        return;
    }
    function $81(__$ctx) {
        if (!true === false) {
            if (!!$$elem === false) {
                var _$21nctx = __$ctx.ctx, _$21na = { role: 'button' };
                _$21nctx.tabindex && (_$21na.tabindex = _$21nctx.tabindex);
                return _$21na;
                return;
            } else {
                return $156(__$ctx);
            }
        } else {
            return $156(__$ctx);
        }
    }
    function $91(__$ctx) {
        var __t = $$block;
        if (__t === 'select') {
            var __t = $$elem;
            if (__t === 'control') {
                return 'select';
                return;
            } else if (__t === 'text') {
                return 'span';
                return;
            } else if (__t === 'option-group') {
                return 'optgroup';
                return;
            } else if (__t === 'option') {
                return 'option';
                return;
            } else {
                if (!!$$elem === false) {
                    return 'span';
                    return;
                } else {
                    return $156(__$ctx);
                }
            }
        } else if (__t === 'button') {
            if (!__$ctx.ctx.url === false) {
                if (!!$$elem === false) {
                    return 'a';
                    return;
                } else {
                    return $112(__$ctx);
                }
            } else {
                return $112(__$ctx);
            }
        } else {
            return $156(__$ctx);
        }
    }
    function $112(__$ctx) {
        if (!!$$elem === false) {
            return 'button';
            return;
        } else {
            return $156(__$ctx);
        }
    }
    function $119(__$ctx) {
        if ($$block === 'button') {
            if (!__$ctx._formSelect === false) {
                if (!!$$elem === false) {
                    return [{
                            block: __$ctx._formSelect.block,
                            elem: 'button'
                        }];
                    return;
                } else {
                    return $156(__$ctx);
                }
            } else {
                return $156(__$ctx);
            }
        } else {
            return $156(__$ctx);
        }
    }
    function $130(__$ctx) {
        var __t = $$block;
        if (__t === 'select' || __t === 'button') {
            if (!!$$elem === false) {
                return true;
                return;
            } else {
                return $156(__$ctx);
            }
        } else {
            return $156(__$ctx);
        }
    }
    function $143(__$ctx) {
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
                return $156(__$ctx);
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
                return $156(__$ctx);
            }
        } else {
            return $156(__$ctx);
        }
    }
    function $156(__$ctx) {
        if ($$block === 'popup') {
            if (!($$mode === '' && __$ctx._popupDefaults) === false) {
                delete __$ctx._popupDefaults;
                applyc(__$ctx);
                undefined;
                return;
            } else {
                return $162(__$ctx);
            }
        } else {
            return $162(__$ctx);
        }
    }
    function $162(__$ctx) {
        var __t = $$mode;
        if (__t === 'content') {
            return $164(__$ctx);
        } else if (__t === 'mix' || __t === 'bem' || __t === 'jsAttr' || __t === 'js' || __t === 'cls' || __t === 'attrs' || __t === 'tag') {
            return undefined;
            return;
        } else {
            return $179(__$ctx);
        }
    }
    function $164(__$ctx) {
        return __$ctx.ctx.content;
        return;
    }
    function $179(__$ctx) {
        if (!__$ctx.ctx === false) {
            if (!__$ctx.ctx.link === false) {
                if (!!__$ctx._.isSimple(__$ctx.ctx) === false) {
                    return $183(__$ctx);
                } else {
                    return $188(__$ctx);
                }
            } else {
                return $188(__$ctx);
            }
        } else {
            return $188(__$ctx);
        }
    }
    function $183(__$ctx) {
        var __r0, __r1;
        function _$217follow() {
            if (this.ctx.link === 'no-follow') {
                return undefined;
            } else {
                undefined;
            }
            var data = this._links[this.ctx.link];
            return '', __r0 = this.ctx, this.ctx = data, __r1 = $1(__$ctx), this.ctx = __r0, '', __r1;
        }
        if (!cache || !__$ctx._cacheLog) {
            return _$217follow.call(__$ctx);
        } else {
            undefined;
        }
        var _$217contents = __$ctx._buf.slice(__$ctx._cachePos).join('');
        __$ctx._cachePos = __$ctx._buf.length;
        __$ctx._cacheLog.push(_$217contents, {
            log: __$ctx._localLog.slice(),
            link: __$ctx.ctx.link
        });
        var _$217res = _$217follow.call(__$ctx);
        __$ctx._cachePos = __$ctx._buf.length;
        return _$217res;
        return;
    }
    function $188(__$ctx) {
        if (!cache === false) {
            if (!__$ctx.ctx === false) {
                if (!__$ctx.ctx.cache === false) {
                    return $192(__$ctx);
                } else {
                    return $197(__$ctx);
                }
            } else {
                return $197(__$ctx);
            }
        } else {
            return $197(__$ctx);
        }
    }
    function $192(__$ctx) {
        var _$216cached;
        function _$216setProperty(obj, key, value) {
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
        if (_$216cached = cache.get(__$ctx.ctx.cache)) {
            var _$216oldLinks = __$ctx._links;
            if (__$ctx.ctx.links) {
                __$ctx._links = __$ctx.ctx.links;
            } else {
                undefined;
            }
            for (var _$216i = 0; _$216i < _$216cached.log.length; _$216i++) {
                if (typeof _$216cached.log[_$216i] === 'string') {
                    __$ctx._buf.push(_$216cached.log[_$216i]);
                    continue;
                } else {
                    undefined;
                }
                var _$216log = _$216cached.log[_$216i], _$216reverseLog;
                _$216reverseLog = _$216log.log.map(function (entry) {
                    return {
                        key: entry[0],
                        value: _$216setProperty(this, entry[0], entry[1])
                    };
                }, __$ctx).reverse();
                {
                    '';
                    var __r0 = __$ctx.ctx, __r1 = __r0.cache;
                    __r0.cache = null;
                    var __r2 = __$ctx._cacheLog;
                    __$ctx._cacheLog = null;
                    var __r3 = __$ctx.ctx, __r4 = __r3.link;
                    __r3.link = _$216log.link;
                    $1(__$ctx);
                    __r0.cache = __r1;
                    __$ctx._cacheLog = __r2;
                    __r3.link = __r4;
                    '';
                }
                undefined;
                _$216reverseLog.forEach(function (entry) {
                    _$216setProperty(this, entry.key, entry.value);
                }, __$ctx);
            }
            __$ctx._links = _$216oldLinks;
            return _$216cached.res;
        } else {
            undefined;
        }
        var _$216cacheLog = [], _$216res;
        {
            '';
            var __r5 = __$ctx.ctx, __r6 = __r5.cache;
            __r5.cache = null;
            var __r7 = __$ctx._cachePos;
            __$ctx._cachePos = __$ctx._buf.length;
            var __r8 = __$ctx._cacheLog;
            __$ctx._cacheLog = _$216cacheLog;
            var __r9 = __$ctx._localLog;
            __$ctx._localLog = [];
            {
                _$216res = $1(__$ctx);
                var _$216tail = __$ctx._buf.slice(__$ctx._cachePos).join('');
                if (_$216tail) {
                    _$216cacheLog.push(_$216tail);
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
            log: _$216cacheLog,
            res: _$216res
        });
        return _$216res;
        return;
    }
    function $197(__$ctx) {
        var __t = $$mode;
        if (__t === 'default') {
            return $199(__$ctx);
        } else if (__t === '') {
            if (!__$ctx._.isSimple(__$ctx.ctx) === false) {
                __$ctx._listLength--;
                var _$214ctx = __$ctx.ctx;
                (_$214ctx && _$214ctx !== true || _$214ctx === 0) && __$ctx._buf.push(_$214ctx);
                return;
            } else {
                if (!!__$ctx.ctx === false) {
                    __$ctx._listLength--;
                    return;
                } else {
                    if (!__$ctx._.isArray(__$ctx.ctx) === false) {
                        return $208(__$ctx);
                    } else {
                        if (!true === false) {
                            return $211(__$ctx);
                        } else {
                            if (!!__$ctx['i-global'] === false) {
                                return $214(__$ctx);
                            } else {
                                return $e(__$ctx);
                            }
                        }
                    }
                }
            }
        } else if (__t === 'content') {
            if ($$block === 'i-ua') {
                if (!(__$ctx['__$anflg216'] !== true) === false) {
                    if (!!$$elem === false) {
                        var __r0, __r1;
                        var _$210c = ('', __r0 = __$ctx['__$anflg216'], __$ctx['__$anflg216'] = true, __r1 = $164(__$ctx), __$ctx['__$anflg216'] = __r0, '', __r1);
                        _$210c += [
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
                        return _$210c;
                        return;
                    } else {
                        return $224(__$ctx);
                    }
                } else {
                    return $224(__$ctx);
                }
            } else {
                return $e(__$ctx);
            }
        } else if (__t === 'bem') {
            if ($$block === 'i-ua') {
                if (!!$$elem === false) {
                    return false;
                    return;
                } else {
                    return $e(__$ctx);
                }
            } else {
                return $e(__$ctx);
            }
        } else if (__t === 'tag') {
            if ($$block === 'i-ua') {
                if (!!$$elem === false) {
                    return 'script';
                    return;
                } else {
                    return $e(__$ctx);
                }
            } else {
                return $e(__$ctx);
            }
        } else if (__t === 'js-params') {
            if ($$block === 'b-page') {
                if (!!$$elem === false) {
                    return $250(__$ctx);
                } else {
                    return $e(__$ctx);
                }
            } else {
                return $e(__$ctx);
            }
        } else if (__t === 'public-params') {
            if ($$block === 'i-global') {
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
                    return $e(__$ctx);
                }
            } else {
                return $e(__$ctx);
            }
        } else if (__t === 'env') {
            if ($$block === 'i-global') {
                if (!!$$elem === false) {
                    return {};
                    return;
                } else {
                    return $e(__$ctx);
                }
            } else {
                return $e(__$ctx);
            }
        } else {
            return $e(__$ctx);
        }
    }
    function $199(__$ctx) {
        var __r13, __r0, __r4, __r5, __r6, __r7, __r8, __r9, __r10, __r11, __r12, __r1, __r14, __r15, __r16, __r17, __r20, __r21, __r22, __r23, __r24, __r25;
        var _$215BEM_ = __$ctx.BEM, _$215v = __$ctx.ctx, _$215buf = __$ctx._buf, _$215tag;
        _$215tag = ('', __r0 = $$mode, $$mode = 'tag', __r1 = $91(__$ctx), $$mode = __r0, '', __r1);
        typeof _$215tag != 'undefined' || (_$215tag = _$215v.tag);
        typeof _$215tag != 'undefined' || (_$215tag = 'div');
        if (_$215tag) {
            var _$215jsParams, _$215js;
            if ($$block && _$215v.js !== false) {
                _$215js = ('', __r4 = $$mode, $$mode = 'js', __r5 = $130(__$ctx), $$mode = __r4, '', __r5);
                _$215js = _$215js ? __$ctx._.extend(_$215v.js, _$215js === true ? {} : _$215js) : _$215v.js === true ? {} : _$215v.js;
                _$215js && ((_$215jsParams = {})[_$215BEM_.INTERNAL.buildClass($$block, _$215v.elem)] = _$215js);
            } else {
                undefined;
            }
            _$215buf.push('<', _$215tag);
            var _$215isBEM = ('', __r6 = $$mode, $$mode = 'bem', __r7 = $156(__$ctx), $$mode = __r6, '', __r7);
            typeof _$215isBEM != 'undefined' || (_$215isBEM = typeof _$215v.bem != 'undefined' ? _$215v.bem : _$215v.block || _$215v.elem);
            var _$215cls = ('', __r8 = $$mode, $$mode = 'cls', __r9 = $156(__$ctx), $$mode = __r8, '', __r9);
            _$215cls || (_$215cls = _$215v.cls);
            var _$215addJSInitClass = _$215v.block && _$215jsParams;
            if (_$215isBEM || _$215cls) {
                _$215buf.push(' class="');
                if (_$215isBEM) {
                    _$215BEM_.INTERNAL.buildClasses($$block, _$215v.elem, _$215v.elemMods || _$215v.mods, _$215buf);
                    var _$215mix = ('', __r10 = $$mode, $$mode = 'mix', __r11 = $119(__$ctx), $$mode = __r10, '', __r11);
                    _$215v.mix && (_$215mix = _$215mix ? _$215mix.concat(_$215v.mix) : _$215v.mix);
                    if (_$215mix) {
                        var _$215visited = {};
                        function _$215visitedKey(block, elem) {
                            return (block || '') + '__' + (elem || '');
                        }
                        _$215visited[_$215visitedKey($$block, $$elem)] = true;
                        if (!__$ctx._.isArray(_$215mix)) {
                            _$215mix = [_$215mix];
                        } else {
                            undefined;
                        }
                        for (var _$215i = 0; _$215i < _$215mix.length; _$215i++) {
                            var _$215mixItem = _$215mix[_$215i];
                            if (!_$215mixItem) {
                                continue;
                            } else {
                                undefined;
                            }
                            var _$215hasItem = _$215mixItem.block || _$215mixItem.elem, _$215block = _$215mixItem.block || _$215mixItem._block || $$block, _$215elem = _$215mixItem.elem || _$215mixItem._elem || $$elem, _$215mods = _$215mixItem.mods || $$mods, _$215elemMods = _$215mixItem.elemMods || {};
                            _$215hasItem && _$215buf.push(' ');
                            _$215BEM_.INTERNAL[_$215hasItem ? 'buildClasses' : 'buildModsClasses'](_$215block, _$215mixItem.elem || _$215mixItem._elem || (_$215mixItem.block ? undefined : $$elem), _$215mixItem.elemMods || _$215mixItem.mods, _$215buf);
                            if (_$215mixItem.js) {
                                (_$215jsParams || (_$215jsParams = {}))[_$215BEM_.INTERNAL.buildClass(_$215block, _$215mixItem.elem)] = _$215mixItem.js === true ? {} : _$215mixItem.js;
                                _$215addJSInitClass || (_$215addJSInitClass = _$215block && !_$215mixItem.elem);
                            } else {
                                undefined;
                            }
                            if (_$215hasItem && !_$215visited[_$215visitedKey(_$215block, _$215elem)]) {
                                _$215visited[_$215visitedKey(_$215block, _$215elem)] = true;
                                var _$215nestedMix = ('', __r12 = $$block, $$block = _$215block, __r13 = $$elem, $$elem = _$215elem, __r14 = $$mods, $$mods = _$215mods, __r15 = $$elemMods, $$elemMods = _$215elemMods, __r16 = $$mode, $$mode = 'mix', __r17 = $119(__$ctx), $$block = __r12, $$elem = __r13, $$mods = __r14, $$elemMods = __r15, $$mode = __r16, '', __r17);
                                if (_$215nestedMix) {
                                    for (var _$215j = 0; _$215j < _$215nestedMix.length; _$215j++) {
                                        var _$215nestedItem = _$215nestedMix[_$215j];
                                        if (!_$215nestedItem.block && !_$215nestedItem.elem || !_$215visited[_$215visitedKey(_$215nestedItem.block, _$215nestedItem.elem)]) {
                                            _$215nestedItem._block = _$215block;
                                            _$215nestedItem._elem = _$215elem;
                                            _$215mix.splice(_$215i + 1, 0, _$215nestedItem);
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
                _$215cls && _$215buf.push(_$215isBEM ? ' ' : '', _$215cls);
                _$215addJSInitClass && _$215buf.push(' i-bem');
                _$215buf.push('"');
            } else {
                undefined;
            }
            if (_$215jsParams) {
                var _$215jsAttr = ('', __r20 = $$mode, $$mode = 'jsAttr', __r21 = $156(__$ctx), $$mode = __r20, '', __r21);
                _$215buf.push(' ', _$215jsAttr || 'data-bem', '="', __$ctx._.attrEscape(JSON.stringify(_$215jsParams)), '"');
            } else {
                undefined;
            }
            var _$215attrs = ('', __r22 = $$mode, $$mode = 'attrs', __r23 = $44(__$ctx), $$mode = __r22, '', __r23);
            _$215attrs = __$ctx._.extend(_$215attrs, _$215v.attrs);
            if (_$215attrs) {
                var _$215name;
                for (_$215name in _$215attrs) {
                    if (_$215attrs[_$215name] === undefined) {
                        continue;
                    } else {
                        undefined;
                    }
                    _$215buf.push(' ', _$215name, '="', __$ctx._.attrEscape(_$215attrs[_$215name]), '"');
                }
            } else {
                undefined;
            }
        } else {
            undefined;
        }
        if (__$ctx._.isShortTag(_$215tag)) {
            _$215buf.push('/>');
        } else {
            _$215tag && _$215buf.push('>');
            var _$215content = ('', __r24 = $$mode, $$mode = 'content', __r25 = $143(__$ctx), $$mode = __r24, '', __r25);
            if (_$215content || _$215content === 0) {
                var _$215isBEM = $$block || $$elem;
                {
                    '';
                    var __r26 = __$ctx._notNewList;
                    __$ctx._notNewList = false;
                    var __r27 = __$ctx.position;
                    __$ctx.position = _$215isBEM ? 1 : __$ctx.position;
                    var __r28 = __$ctx._listLength;
                    __$ctx._listLength = _$215isBEM ? 1 : __$ctx._listLength;
                    var __r29 = __$ctx.ctx;
                    __$ctx.ctx = _$215content;
                    var __r30 = $$mode;
                    $$mode = '';
                    $156(__$ctx);
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
            _$215tag && _$215buf.push('</', _$215tag, '>');
        }
        return;
    }
    function $208(__$ctx) {
        var _$212v = __$ctx.ctx, _$212l = _$212v.length, _$212i = 0, _$212prevPos = __$ctx.position, _$212prevNotNewList = __$ctx._notNewList;
        if (_$212prevNotNewList) {
            __$ctx._listLength += _$212l - 1;
        } else {
            __$ctx.position = 0;
            __$ctx._listLength = _$212l;
        }
        __$ctx._notNewList = true;
        while (_$212i < _$212l) {
            var _$212newCtx = _$212v[_$212i++];
            {
                '';
                var __r0 = __$ctx.ctx;
                __$ctx.ctx = _$212newCtx == null ? '' : _$212newCtx;
                $156(__$ctx);
                __$ctx.ctx = __r0;
                '';
            }
            undefined;
        }
        _$212prevNotNewList || (__$ctx.position = _$212prevPos);
        return;
    }
    function $211(__$ctx) {
        var _$211vBlock = __$ctx.ctx.block, _$211vElem = __$ctx.ctx.elem, _$211block = __$ctx._currBlock || $$block;
        __$ctx.ctx || (__$ctx.ctx = {});
        {
            '';
            var __r0 = $$mode;
            $$mode = 'default';
            var __r1 = __$ctx._links;
            __$ctx._links = __$ctx.ctx.links || __$ctx._links;
            var __r2 = $$block;
            $$block = _$211vBlock || (_$211vElem ? _$211block : undefined);
            var __r3 = __$ctx._currBlock;
            __$ctx._currBlock = _$211vBlock || _$211vElem ? undefined : _$211block;
            var __r4 = $$elem;
            $$elem = __$ctx.ctx.elem;
            var __r5 = $$mods;
            $$mods = (_$211vBlock ? __$ctx.ctx.mods : $$mods) || {};
            var __r6 = $$elemMods;
            $$elemMods = __$ctx.ctx.elemMods || {};
            {
                $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
                $2(__$ctx);
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
    function $214(__$ctx) {
        var __r0, __r1, __r2, __r3, __r4, __r5, __r6;
        var _$20ips = {}, _$20ies = [
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
            ], _$20ie;
        while (_$20ie = _$20ies.shift()) {
            _$20ips[_$20ie] = ('', __r0 = $$mode, $$mode = 'default', __r1 = $$block, $$block = 'i-global', __r2 = $$elem, $$elem = _$20ie, __r3 = $179(__$ctx), $$mode = __r0, $$block = __r1, $$elem = __r2, '', __r3);
        }
        __$ctx['i-global'] = __$ctx._.extend(_$20ips, ('', __r4 = $$mode, $$mode = 'env', __r5 = $$block, $$block = 'i-global', __r6 = $179(__$ctx), $$mode = __r4, $$block = __r5, '', __r6));
        applyc(__$ctx);
        undefined;
        return;
    }
    function $224(__$ctx) {
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
            return $e(__$ctx);
        }
    }
    function $250(__$ctx) {
        var __r0, __r1, __r2, __r3;
        var _$20w_this = __$ctx['i-global'], _$20wjs = {}, _$20wblock = {
                block: 'i-global',
                js: _$20wjs
            }, _$20we;
        for (_$20we in _$20w_this) {
            if (_$20w_this.hasOwnProperty(_$20we) && ('', __r0 = $$mode, $$mode = 'public-params', __r1 = $$block, $$block = 'i-global', __r2 = $$elem, $$elem = _$20we, __r3 = $179(__$ctx), $$mode = __r0, $$block = __r1, $$elem = __r2, '', __r3)) {
                _$20wjs[_$20we] = _$20w_this[_$20we];
            } else {
                undefined;
            }
        }
        return _$20wblock;
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
/*borschik:include:../../../../common.blocks/select/select.examples/60-popup.blocks/example/example.js*/;
/*borschik:include:../../../../common.blocks/link/link.js*/;
/*borschik:include:../../../../common.blocks/link/_pseudo/link_pseudo_yes.js*/;
/*borschik:include:../../../../common.blocks/popup/popup.js*/;
/*borschik:include:../../../../common.blocks/popup/_autoclosable/popup_autoclosable_yes.js*/;
/*borschik:include:../../../../common.blocks/popup/_adaptive/popup_adaptive_yes.js*/;
/*borschik:include:../../../../common.blocks/popup/_animate/popup_animate_yes.js*/;
/*borschik:include:../../../../common.blocks/popup/__under/popup__under.js*/;
/*borschik:include:../../../../common.blocks/popup/__tail/popup__tail.js*/;
/*borschik:include:../../../../common.blocks/button/button.js*/;
/*borschik:include:../../../../desktop.blocks/button/button.js*/;
/*borschik:include:../../../../common.blocks/popup/_autosize/popup_autosize_yes.js*/;
/*borschik:include:../../../../common.blocks/select/select.js*/;
/*borschik:include:../../../../desktop.blocks/select/select.js*/;
/*borschik:include:../../../../common.blocks/select/__ui/select__ui.js*/;
/*borschik:include:../../../../desktop.blocks/select/__ui/select__ui.js*/;
/*borschik:include:../../../../common.blocks/select/__popup/select__popup.js*/;


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
