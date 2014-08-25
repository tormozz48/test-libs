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
        if (!(__$ctx['__$anflg159'] !== true) === false) {
            {
                '';
                var __r0 = __$ctx['__$anflg159'];
                __$ctx['__$anflg159'] = true;
                {
                    '';
                    var __r1 = __$ctx._labelId;
                    __$ctx._labelId = __$ctx.generateId();
                    $4(__$ctx);
                    __$ctx._labelId = __r1;
                    '';
                }
                __$ctx['__$anflg159'] = __r0;
                '';
            }
            undefined;
            return;
        } else {
            return $9(__$ctx);
        }
    }
    function $9(__$ctx) {
        if (!(__$ctx['__$anflg156'] !== true) === false) {
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
        var _$1ofctx = __$ctx.ctx, _$1ofid = _$1ofctx.id || __$ctx.generateId();
        {
            '';
            var __r0 = __$ctx['__$anflg156'];
            __$ctx['__$anflg156'] = true;
            {
                '';
                var __r1 = __$ctx._controlAttrs;
                __$ctx._controlAttrs = {
                    id: _$1ofid,
                    name: _$1ofctx.name || _$1ofid,
                    tabindex: _$1ofctx.tabindex
                };
                var __r2 = __$ctx._formSelect;
                __$ctx._formSelect = {
                    block: $$block,
                    mods: $$mods,
                    tabindex: _$1ofctx.tabindex
                };
                $3(__$ctx);
                __$ctx._controlAttrs = __r1;
                __$ctx._formSelect = __r2;
                '';
            }
            __$ctx['__$anflg156'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $17(__$ctx) {
        if (!(__$ctx['__$anflg158'] !== true) === false) {
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
        var _$1ooctx = __$ctx.ctx, _$1ooselectMods = __$ctx._formSelect.mods, _$1ootabindex = __$ctx._formSelect.tabindex, _$1oom = _$1ooctx.mods || {};
        _$1oom.arrow = 'down';
        _$1ooselectMods.theme && (_$1oom.theme = _$1ooselectMods.theme);
        _$1ooselectMods.size && (_$1oom.size = _$1ooselectMods.size);
        _$1ooselectMods.disabled === 'yes' && (_$1oom.disabled = 'yes');
        _$1ooctx.mods = _$1oom;
        _$1ootabindex && (_$1ooctx.tabindex = _$1ootabindex);
        {
            '';
            var __r0 = __$ctx['__$anflg158'];
            __$ctx['__$anflg158'] = true;
            {
                '';
                var __r1 = __$ctx.ctx, __r2 = __r1._theme;
                __r1._theme = true;
                $17(__$ctx);
                __r1._theme = __r2;
                '';
            }
            __$ctx['__$anflg158'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $26(__$ctx) {
        if (!(__$ctx['__$anflg153'] !== true) === false) {
            if (!!$$elem === false) {
                var _$1oamods = __$ctx.ctx.mods || {};
                _$1oamods.theme = _$1oamods.theme || 'normal';
                {
                    '';
                    var __r0 = __$ctx['__$anflg153'];
                    __$ctx['__$anflg153'] = true;
                    {
                        '';
                        var __r1 = __$ctx.ctx, __r2 = __r1.mods;
                        __r1.mods = _$1oamods;
                        $17(__$ctx);
                        __r1.mods = __r2;
                        '';
                    }
                    __$ctx['__$anflg153'] = __r0;
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
        var _$1o5ctx = __$ctx.ctx;
        _$1o5ctx.mods = $$mods = __$ctx.extend({
            theme: 'ffffff',
            autoclosable: 'yes',
            adaptive: 'yes',
            animate: 'yes'
        }, $$mods);
        if (_$1o5ctx.zIndex) {
            var _$1o5attrs = _$1o5ctx.attrs || (_$1o5ctx.attrs = {});
            _$1o5attrs.style = (_$1o5attrs.style || '') + ';z-index:' + _$1o5ctx.zIndex + ';';
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
                var _$1orattrs = [
                        'id',
                        'name',
                        'tabindex'
                    ], _$1orprop = {}, _$1orp;
                while (_$1orp = _$1orattrs.pop()) {
                    __$ctx._controlAttrs[_$1orp] && (_$1orprop[_$1orp] = __$ctx._controlAttrs[_$1orp]);
                }
                $$mods.disabled === 'yes' && (_$1orprop.disabled = 'disabled');
                _$1orprop.tabindex = -1;
                _$1orprop['aria-hidden'] = true;
                return __$ctx.ctx.controlAttrs || _$1orprop;
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
        if (!(__$ctx['__$anflg157'] !== true) === false) {
            var __r0, __r1;
            var _$1oma = ('', __r0 = __$ctx['__$anflg157'], __$ctx['__$anflg157'] = true, __r1 = $50(__$ctx), __$ctx['__$anflg157'] = __r0, '', __r1) || {};
            if ((__$ctx.ctx.elemMods || {}).label === 'yes') {
                _$1oma.id = __$ctx._labelId;
                _$1oma['aria-hidden'] = true;
            } else {
                undefined;
            }
            return _$1oma;
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
        if (!(__$ctx['__$anflg155'] !== true) === false) {
            if (!__$ctx.ctx.url === false) {
                if (!!$$elem === false) {
                    var __r0, __r1;
                    var _$1odctx = __$ctx.ctx, _$1odp = ('', __r0 = __$ctx['__$anflg155'], __$ctx['__$anflg155'] = true, __r1 = $57(__$ctx), __$ctx['__$anflg155'] = __r0, '', __r1), _$1oda = { href: _$1odctx.url };
                    _$1odctx.target && (_$1oda.target = _$1odctx.target);
                    $$mods.disabled && (_$1oda['aria-disabled'] = true);
                    return __$ctx._.extend(_$1odp, _$1oda);
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
        if (!(__$ctx['__$anflg154'] !== true) === false) {
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
        var _$1occtx = __$ctx.ctx, _$1ocp = ('', __r0 = __$ctx['__$anflg154'], __$ctx['__$anflg154'] = true, __r1 = $57(__$ctx), __$ctx['__$anflg154'] = __r0, '', __r1), _$1oca = { type: _$1occtx.type || 'button' }, _$1ocprops = [
                'name',
                'value'
            ], _$1oci;
        while (_$1oci = _$1ocprops.shift()) {
            _$1occtx[_$1oci] && (_$1oca[_$1oci] = _$1occtx[_$1oci]);
        }
        $$mods.disabled && (_$1oca.disabled = 'disabled');
        return __$ctx._.extend(_$1ocp, _$1oca);
        return;
    }
    function $81(__$ctx) {
        if (!true === false) {
            if (!!$$elem === false) {
                var _$1obctx = __$ctx.ctx, _$1oba = { role: 'button' };
                _$1obctx.tabindex && (_$1oba.tabindex = _$1obctx.tabindex);
                return _$1oba;
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
        function _$1nvfollow() {
            if (this.ctx.link === 'no-follow') {
                return undefined;
            } else {
                undefined;
            }
            var data = this._links[this.ctx.link];
            return '', __r0 = this.ctx, this.ctx = data, __r1 = $1(__$ctx), this.ctx = __r0, '', __r1;
        }
        if (!cache || !__$ctx._cacheLog) {
            return _$1nvfollow.call(__$ctx);
        } else {
            undefined;
        }
        var _$1nvcontents = __$ctx._buf.slice(__$ctx._cachePos).join('');
        __$ctx._cachePos = __$ctx._buf.length;
        __$ctx._cacheLog.push(_$1nvcontents, {
            log: __$ctx._localLog.slice(),
            link: __$ctx.ctx.link
        });
        var _$1nvres = _$1nvfollow.call(__$ctx);
        __$ctx._cachePos = __$ctx._buf.length;
        return _$1nvres;
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
        var _$1nucached;
        function _$1nusetProperty(obj, key, value) {
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
        if (_$1nucached = cache.get(__$ctx.ctx.cache)) {
            var _$1nuoldLinks = __$ctx._links;
            if (__$ctx.ctx.links) {
                __$ctx._links = __$ctx.ctx.links;
            } else {
                undefined;
            }
            for (var _$1nui = 0; _$1nui < _$1nucached.log.length; _$1nui++) {
                if (typeof _$1nucached.log[_$1nui] === 'string') {
                    __$ctx._buf.push(_$1nucached.log[_$1nui]);
                    continue;
                } else {
                    undefined;
                }
                var _$1nulog = _$1nucached.log[_$1nui], _$1nureverseLog;
                _$1nureverseLog = _$1nulog.log.map(function (entry) {
                    return {
                        key: entry[0],
                        value: _$1nusetProperty(this, entry[0], entry[1])
                    };
                }, __$ctx).reverse();
                {
                    '';
                    var __r0 = __$ctx.ctx, __r1 = __r0.cache;
                    __r0.cache = null;
                    var __r2 = __$ctx._cacheLog;
                    __$ctx._cacheLog = null;
                    var __r3 = __$ctx.ctx, __r4 = __r3.link;
                    __r3.link = _$1nulog.link;
                    $1(__$ctx);
                    __r0.cache = __r1;
                    __$ctx._cacheLog = __r2;
                    __r3.link = __r4;
                    '';
                }
                undefined;
                _$1nureverseLog.forEach(function (entry) {
                    _$1nusetProperty(this, entry.key, entry.value);
                }, __$ctx);
            }
            __$ctx._links = _$1nuoldLinks;
            return _$1nucached.res;
        } else {
            undefined;
        }
        var _$1nucacheLog = [], _$1nures;
        {
            '';
            var __r5 = __$ctx.ctx, __r6 = __r5.cache;
            __r5.cache = null;
            var __r7 = __$ctx._cachePos;
            __$ctx._cachePos = __$ctx._buf.length;
            var __r8 = __$ctx._cacheLog;
            __$ctx._cacheLog = _$1nucacheLog;
            var __r9 = __$ctx._localLog;
            __$ctx._localLog = [];
            {
                _$1nures = $1(__$ctx);
                var _$1nutail = __$ctx._buf.slice(__$ctx._cachePos).join('');
                if (_$1nutail) {
                    _$1nucacheLog.push(_$1nutail);
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
            log: _$1nucacheLog,
            res: _$1nures
        });
        return _$1nures;
        return;
    }
    function $197(__$ctx) {
        var __t = $$mode;
        if (__t === 'default') {
            return $199(__$ctx);
        } else if (__t === '') {
            if (!__$ctx._.isSimple(__$ctx.ctx) === false) {
                __$ctx._listLength--;
                var _$1nsctx = __$ctx.ctx;
                (_$1nsctx && _$1nsctx !== true || _$1nsctx === 0) && __$ctx._buf.push(_$1nsctx);
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
                if (!(__$ctx['__$anflg152'] !== true) === false) {
                    if (!!$$elem === false) {
                        var __r0, __r1;
                        var _$1noc = ('', __r0 = __$ctx['__$anflg152'], __$ctx['__$anflg152'] = true, __r1 = $164(__$ctx), __$ctx['__$anflg152'] = __r0, '', __r1);
                        _$1noc += [
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
                        return _$1noc;
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
        var _$1ntBEM_ = __$ctx.BEM, _$1ntv = __$ctx.ctx, _$1ntbuf = __$ctx._buf, _$1nttag;
        _$1nttag = ('', __r0 = $$mode, $$mode = 'tag', __r1 = $91(__$ctx), $$mode = __r0, '', __r1);
        typeof _$1nttag != 'undefined' || (_$1nttag = _$1ntv.tag);
        typeof _$1nttag != 'undefined' || (_$1nttag = 'div');
        if (_$1nttag) {
            var _$1ntjsParams, _$1ntjs;
            if ($$block && _$1ntv.js !== false) {
                _$1ntjs = ('', __r4 = $$mode, $$mode = 'js', __r5 = $130(__$ctx), $$mode = __r4, '', __r5);
                _$1ntjs = _$1ntjs ? __$ctx._.extend(_$1ntv.js, _$1ntjs === true ? {} : _$1ntjs) : _$1ntv.js === true ? {} : _$1ntv.js;
                _$1ntjs && ((_$1ntjsParams = {})[_$1ntBEM_.INTERNAL.buildClass($$block, _$1ntv.elem)] = _$1ntjs);
            } else {
                undefined;
            }
            _$1ntbuf.push('<', _$1nttag);
            var _$1ntisBEM = ('', __r6 = $$mode, $$mode = 'bem', __r7 = $156(__$ctx), $$mode = __r6, '', __r7);
            typeof _$1ntisBEM != 'undefined' || (_$1ntisBEM = typeof _$1ntv.bem != 'undefined' ? _$1ntv.bem : _$1ntv.block || _$1ntv.elem);
            var _$1ntcls = ('', __r8 = $$mode, $$mode = 'cls', __r9 = $156(__$ctx), $$mode = __r8, '', __r9);
            _$1ntcls || (_$1ntcls = _$1ntv.cls);
            var _$1ntaddJSInitClass = _$1ntv.block && _$1ntjsParams;
            if (_$1ntisBEM || _$1ntcls) {
                _$1ntbuf.push(' class="');
                if (_$1ntisBEM) {
                    _$1ntBEM_.INTERNAL.buildClasses($$block, _$1ntv.elem, _$1ntv.elemMods || _$1ntv.mods, _$1ntbuf);
                    var _$1ntmix = ('', __r10 = $$mode, $$mode = 'mix', __r11 = $119(__$ctx), $$mode = __r10, '', __r11);
                    _$1ntv.mix && (_$1ntmix = _$1ntmix ? _$1ntmix.concat(_$1ntv.mix) : _$1ntv.mix);
                    if (_$1ntmix) {
                        var _$1ntvisited = {};
                        function _$1ntvisitedKey(block, elem) {
                            return (block || '') + '__' + (elem || '');
                        }
                        _$1ntvisited[_$1ntvisitedKey($$block, $$elem)] = true;
                        if (!__$ctx._.isArray(_$1ntmix)) {
                            _$1ntmix = [_$1ntmix];
                        } else {
                            undefined;
                        }
                        for (var _$1nti = 0; _$1nti < _$1ntmix.length; _$1nti++) {
                            var _$1ntmixItem = _$1ntmix[_$1nti];
                            if (!_$1ntmixItem) {
                                continue;
                            } else {
                                undefined;
                            }
                            var _$1nthasItem = _$1ntmixItem.block || _$1ntmixItem.elem, _$1ntblock = _$1ntmixItem.block || _$1ntmixItem._block || $$block, _$1ntelem = _$1ntmixItem.elem || _$1ntmixItem._elem || $$elem, _$1ntmods = _$1ntmixItem.mods || $$mods, _$1ntelemMods = _$1ntmixItem.elemMods || {};
                            _$1nthasItem && _$1ntbuf.push(' ');
                            _$1ntBEM_.INTERNAL[_$1nthasItem ? 'buildClasses' : 'buildModsClasses'](_$1ntblock, _$1ntmixItem.elem || _$1ntmixItem._elem || (_$1ntmixItem.block ? undefined : $$elem), _$1ntmixItem.elemMods || _$1ntmixItem.mods, _$1ntbuf);
                            if (_$1ntmixItem.js) {
                                (_$1ntjsParams || (_$1ntjsParams = {}))[_$1ntBEM_.INTERNAL.buildClass(_$1ntblock, _$1ntmixItem.elem)] = _$1ntmixItem.js === true ? {} : _$1ntmixItem.js;
                                _$1ntaddJSInitClass || (_$1ntaddJSInitClass = _$1ntblock && !_$1ntmixItem.elem);
                            } else {
                                undefined;
                            }
                            if (_$1nthasItem && !_$1ntvisited[_$1ntvisitedKey(_$1ntblock, _$1ntelem)]) {
                                _$1ntvisited[_$1ntvisitedKey(_$1ntblock, _$1ntelem)] = true;
                                var _$1ntnestedMix = ('', __r12 = $$block, $$block = _$1ntblock, __r13 = $$elem, $$elem = _$1ntelem, __r14 = $$mods, $$mods = _$1ntmods, __r15 = $$elemMods, $$elemMods = _$1ntelemMods, __r16 = $$mode, $$mode = 'mix', __r17 = $119(__$ctx), $$block = __r12, $$elem = __r13, $$mods = __r14, $$elemMods = __r15, $$mode = __r16, '', __r17);
                                if (_$1ntnestedMix) {
                                    for (var _$1ntj = 0; _$1ntj < _$1ntnestedMix.length; _$1ntj++) {
                                        var _$1ntnestedItem = _$1ntnestedMix[_$1ntj];
                                        if (!_$1ntnestedItem.block && !_$1ntnestedItem.elem || !_$1ntvisited[_$1ntvisitedKey(_$1ntnestedItem.block, _$1ntnestedItem.elem)]) {
                                            _$1ntnestedItem._block = _$1ntblock;
                                            _$1ntnestedItem._elem = _$1ntelem;
                                            _$1ntmix.splice(_$1nti + 1, 0, _$1ntnestedItem);
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
                _$1ntcls && _$1ntbuf.push(_$1ntisBEM ? ' ' : '', _$1ntcls);
                _$1ntaddJSInitClass && _$1ntbuf.push(' i-bem');
                _$1ntbuf.push('"');
            } else {
                undefined;
            }
            if (_$1ntjsParams) {
                var _$1ntjsAttr = ('', __r20 = $$mode, $$mode = 'jsAttr', __r21 = $156(__$ctx), $$mode = __r20, '', __r21);
                _$1ntbuf.push(' ', _$1ntjsAttr || 'data-bem', '="', __$ctx._.attrEscape(JSON.stringify(_$1ntjsParams)), '"');
            } else {
                undefined;
            }
            var _$1ntattrs = ('', __r22 = $$mode, $$mode = 'attrs', __r23 = $44(__$ctx), $$mode = __r22, '', __r23);
            _$1ntattrs = __$ctx._.extend(_$1ntattrs, _$1ntv.attrs);
            if (_$1ntattrs) {
                var _$1ntname;
                for (_$1ntname in _$1ntattrs) {
                    if (_$1ntattrs[_$1ntname] === undefined) {
                        continue;
                    } else {
                        undefined;
                    }
                    _$1ntbuf.push(' ', _$1ntname, '="', __$ctx._.attrEscape(_$1ntattrs[_$1ntname]), '"');
                }
            } else {
                undefined;
            }
        } else {
            undefined;
        }
        if (__$ctx._.isShortTag(_$1nttag)) {
            _$1ntbuf.push('/>');
        } else {
            _$1nttag && _$1ntbuf.push('>');
            var _$1ntcontent = ('', __r24 = $$mode, $$mode = 'content', __r25 = $143(__$ctx), $$mode = __r24, '', __r25);
            if (_$1ntcontent || _$1ntcontent === 0) {
                var _$1ntisBEM = $$block || $$elem;
                {
                    '';
                    var __r26 = __$ctx._notNewList;
                    __$ctx._notNewList = false;
                    var __r27 = __$ctx.position;
                    __$ctx.position = _$1ntisBEM ? 1 : __$ctx.position;
                    var __r28 = __$ctx._listLength;
                    __$ctx._listLength = _$1ntisBEM ? 1 : __$ctx._listLength;
                    var __r29 = __$ctx.ctx;
                    __$ctx.ctx = _$1ntcontent;
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
            _$1nttag && _$1ntbuf.push('</', _$1nttag, '>');
        }
        return;
    }
    function $208(__$ctx) {
        var _$1nqv = __$ctx.ctx, _$1nql = _$1nqv.length, _$1nqi = 0, _$1nqprevPos = __$ctx.position, _$1nqprevNotNewList = __$ctx._notNewList;
        if (_$1nqprevNotNewList) {
            __$ctx._listLength += _$1nql - 1;
        } else {
            __$ctx.position = 0;
            __$ctx._listLength = _$1nql;
        }
        __$ctx._notNewList = true;
        while (_$1nqi < _$1nql) {
            var _$1nqnewCtx = _$1nqv[_$1nqi++];
            {
                '';
                var __r0 = __$ctx.ctx;
                __$ctx.ctx = _$1nqnewCtx == null ? '' : _$1nqnewCtx;
                $156(__$ctx);
                __$ctx.ctx = __r0;
                '';
            }
            undefined;
        }
        _$1nqprevNotNewList || (__$ctx.position = _$1nqprevPos);
        return;
    }
    function $211(__$ctx) {
        var _$1npvBlock = __$ctx.ctx.block, _$1npvElem = __$ctx.ctx.elem, _$1npblock = __$ctx._currBlock || $$block;
        __$ctx.ctx || (__$ctx.ctx = {});
        {
            '';
            var __r0 = $$mode;
            $$mode = 'default';
            var __r1 = __$ctx._links;
            __$ctx._links = __$ctx.ctx.links || __$ctx._links;
            var __r2 = $$block;
            $$block = _$1npvBlock || (_$1npvElem ? _$1npblock : undefined);
            var __r3 = __$ctx._currBlock;
            __$ctx._currBlock = _$1npvBlock || _$1npvElem ? undefined : _$1npblock;
            var __r4 = $$elem;
            $$elem = __$ctx.ctx.elem;
            var __r5 = $$mods;
            $$mods = (_$1npvBlock ? __$ctx.ctx.mods : $$mods) || {};
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
        var _$1n6ps = {}, _$1n6es = [
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
            ], _$1n6e;
        while (_$1n6e = _$1n6es.shift()) {
            _$1n6ps[_$1n6e] = ('', __r0 = $$mode, $$mode = 'default', __r1 = $$block, $$block = 'i-global', __r2 = $$elem, $$elem = _$1n6e, __r3 = $179(__$ctx), $$mode = __r0, $$block = __r1, $$elem = __r2, '', __r3);
        }
        __$ctx['i-global'] = __$ctx._.extend(_$1n6ps, ('', __r4 = $$mode, $$mode = 'env', __r5 = $$block, $$block = 'i-global', __r6 = $179(__$ctx), $$mode = __r4, $$block = __r5, '', __r6));
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
        var _$1nk_this = __$ctx['i-global'], _$1nkjs = {}, _$1nkblock = {
                block: 'i-global',
                js: _$1nkjs
            }, _$1nke;
        for (_$1nke in _$1nk_this) {
            if (_$1nk_this.hasOwnProperty(_$1nke) && ('', __r0 = $$mode, $$mode = 'public-params', __r1 = $$block, $$block = 'i-global', __r2 = $$elem, $$elem = _$1nke, __r3 = $179(__$ctx), $$mode = __r0, $$block = __r1, $$elem = __r2, '', __r3)) {
                _$1nkjs[_$1nke] = _$1nk_this[_$1nke];
            } else {
                undefined;
            }
        }
        return _$1nkblock;
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
/*borschik:include:../../../../common.blocks/button/button.js*/;
/*borschik:include:../../../../desktop.blocks/button/button.js*/;
/*borschik:include:../../../../common.blocks/popup/popup.js*/;
/*borschik:include:../../../../common.blocks/popup/_autoclosable/popup_autoclosable_yes.js*/;
/*borschik:include:../../../../common.blocks/popup/_adaptive/popup_adaptive_yes.js*/;
/*borschik:include:../../../../common.blocks/popup/_animate/popup_animate_yes.js*/;
/*borschik:include:../../../../common.blocks/popup/__under/popup__under.js*/;
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


BEM.I18N.lang('tr');
