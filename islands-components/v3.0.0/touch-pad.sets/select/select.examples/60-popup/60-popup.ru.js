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
        if (!(__$ctx['__$anflg492'] !== true) === false) {
            {
                '';
                var __r0 = __$ctx['__$anflg492'];
                __$ctx['__$anflg492'] = true;
                {
                    '';
                    var __r1 = __$ctx._labelId;
                    __$ctx._labelId = __$ctx.generateId();
                    $4(__$ctx);
                    __$ctx._labelId = __r1;
                    '';
                }
                __$ctx['__$anflg492'] = __r0;
                '';
            }
            undefined;
            return;
        } else {
            return $9(__$ctx);
        }
    }
    function $9(__$ctx) {
        if (!(__$ctx['__$anflg489'] !== true) === false) {
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
        var _$3xmctx = __$ctx.ctx, _$3xmid = _$3xmctx.id || __$ctx.generateId();
        {
            '';
            var __r0 = __$ctx['__$anflg489'];
            __$ctx['__$anflg489'] = true;
            {
                '';
                var __r1 = __$ctx._controlAttrs;
                __$ctx._controlAttrs = {
                    id: _$3xmid,
                    name: _$3xmctx.name || _$3xmid,
                    tabindex: _$3xmctx.tabindex
                };
                var __r2 = __$ctx._formSelect;
                __$ctx._formSelect = {
                    block: $$block,
                    mods: $$mods,
                    tabindex: _$3xmctx.tabindex
                };
                $3(__$ctx);
                __$ctx._controlAttrs = __r1;
                __$ctx._formSelect = __r2;
                '';
            }
            __$ctx['__$anflg489'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $17(__$ctx) {
        if (!(__$ctx['__$anflg491'] !== true) === false) {
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
        var _$3xvctx = __$ctx.ctx, _$3xvselectMods = __$ctx._formSelect.mods, _$3xvtabindex = __$ctx._formSelect.tabindex, _$3xvm = _$3xvctx.mods || {};
        _$3xvm.arrow = 'down';
        _$3xvselectMods.theme && (_$3xvm.theme = _$3xvselectMods.theme);
        _$3xvselectMods.size && (_$3xvm.size = _$3xvselectMods.size);
        _$3xvselectMods.disabled === 'yes' && (_$3xvm.disabled = 'yes');
        _$3xvctx.mods = _$3xvm;
        _$3xvtabindex && (_$3xvctx.tabindex = _$3xvtabindex);
        {
            '';
            var __r0 = __$ctx['__$anflg491'];
            __$ctx['__$anflg491'] = true;
            {
                '';
                var __r1 = __$ctx.ctx, __r2 = __r1._theme;
                __r1._theme = true;
                $17(__$ctx);
                __r1._theme = __r2;
                '';
            }
            __$ctx['__$anflg491'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $26(__$ctx) {
        if (!(__$ctx['__$anflg486'] !== true) === false) {
            if (!!$$elem === false) {
                var _$3xhmods = __$ctx.ctx.mods || {};
                _$3xhmods.theme = _$3xhmods.theme || 'normal';
                {
                    '';
                    var __r0 = __$ctx['__$anflg486'];
                    __$ctx['__$anflg486'] = true;
                    {
                        '';
                        var __r1 = __$ctx.ctx, __r2 = __r1.mods;
                        __r1.mods = _$3xhmods;
                        $17(__$ctx);
                        __r1.mods = __r2;
                        '';
                    }
                    __$ctx['__$anflg486'] = __r0;
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
        var _$3xcctx = __$ctx.ctx;
        _$3xcctx.mods = $$mods = __$ctx.extend({
            theme: 'ffffff',
            autoclosable: 'yes',
            adaptive: 'yes',
            animate: 'yes'
        }, $$mods);
        if (_$3xcctx.zIndex) {
            var _$3xcattrs = _$3xcctx.attrs || (_$3xcctx.attrs = {});
            _$3xcattrs.style = (_$3xcattrs.style || '') + ';z-index:' + _$3xcctx.zIndex + ';';
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
                var _$3xyattrs = [
                        'id',
                        'name',
                        'tabindex'
                    ], _$3xyprop = {}, _$3xyp;
                while (_$3xyp = _$3xyattrs.pop()) {
                    __$ctx._controlAttrs[_$3xyp] && (_$3xyprop[_$3xyp] = __$ctx._controlAttrs[_$3xyp]);
                }
                $$mods.disabled === 'yes' && (_$3xyprop.disabled = 'disabled');
                _$3xyprop.tabindex = -1;
                _$3xyprop['aria-hidden'] = true;
                return __$ctx.ctx.controlAttrs || _$3xyprop;
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
        if (!(__$ctx['__$anflg490'] !== true) === false) {
            var __r0, __r1;
            var _$3xta = ('', __r0 = __$ctx['__$anflg490'], __$ctx['__$anflg490'] = true, __r1 = $50(__$ctx), __$ctx['__$anflg490'] = __r0, '', __r1) || {};
            if ((__$ctx.ctx.elemMods || {}).label === 'yes') {
                _$3xta.id = __$ctx._labelId;
                _$3xta['aria-hidden'] = true;
            } else {
                undefined;
            }
            return _$3xta;
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
        if (!(__$ctx['__$anflg488'] !== true) === false) {
            if (!__$ctx.ctx.url === false) {
                if (!!$$elem === false) {
                    var __r0, __r1;
                    var _$3xkctx = __$ctx.ctx, _$3xkp = ('', __r0 = __$ctx['__$anflg488'], __$ctx['__$anflg488'] = true, __r1 = $57(__$ctx), __$ctx['__$anflg488'] = __r0, '', __r1), _$3xka = { href: _$3xkctx.url };
                    _$3xkctx.target && (_$3xka.target = _$3xkctx.target);
                    $$mods.disabled && (_$3xka['aria-disabled'] = true);
                    return __$ctx._.extend(_$3xkp, _$3xka);
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
        if (!(__$ctx['__$anflg487'] !== true) === false) {
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
        var _$3xjctx = __$ctx.ctx, _$3xjp = ('', __r0 = __$ctx['__$anflg487'], __$ctx['__$anflg487'] = true, __r1 = $57(__$ctx), __$ctx['__$anflg487'] = __r0, '', __r1), _$3xja = { type: _$3xjctx.type || 'button' }, _$3xjprops = [
                'name',
                'value'
            ], _$3xji;
        while (_$3xji = _$3xjprops.shift()) {
            _$3xjctx[_$3xji] && (_$3xja[_$3xji] = _$3xjctx[_$3xji]);
        }
        $$mods.disabled && (_$3xja.disabled = 'disabled');
        return __$ctx._.extend(_$3xjp, _$3xja);
        return;
    }
    function $81(__$ctx) {
        if (!true === false) {
            if (!!$$elem === false) {
                var _$3xictx = __$ctx.ctx, _$3xia = { role: 'button' };
                _$3xictx.tabindex && (_$3xia.tabindex = _$3xictx.tabindex);
                return _$3xia;
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
            return __$ctx.ctx.content;
            return;
        } else if (__t === 'mix' || __t === 'bem' || __t === 'jsAttr' || __t === 'js' || __t === 'cls' || __t === 'attrs' || __t === 'tag') {
            return undefined;
            return;
        } else {
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
    }
    function $183(__$ctx) {
        var __r0, __r1;
        function _$3x2follow() {
            if (this.ctx.link === 'no-follow') {
                return undefined;
            } else {
                undefined;
            }
            var data = this._links[this.ctx.link];
            return '', __r0 = this.ctx, this.ctx = data, __r1 = $1(__$ctx), this.ctx = __r0, '', __r1;
        }
        if (!cache || !__$ctx._cacheLog) {
            return _$3x2follow.call(__$ctx);
        } else {
            undefined;
        }
        var _$3x2contents = __$ctx._buf.slice(__$ctx._cachePos).join('');
        __$ctx._cachePos = __$ctx._buf.length;
        __$ctx._cacheLog.push(_$3x2contents, {
            log: __$ctx._localLog.slice(),
            link: __$ctx.ctx.link
        });
        var _$3x2res = _$3x2follow.call(__$ctx);
        __$ctx._cachePos = __$ctx._buf.length;
        return _$3x2res;
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
        var _$3x1cached;
        function _$3x1setProperty(obj, key, value) {
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
        if (_$3x1cached = cache.get(__$ctx.ctx.cache)) {
            var _$3x1oldLinks = __$ctx._links;
            if (__$ctx.ctx.links) {
                __$ctx._links = __$ctx.ctx.links;
            } else {
                undefined;
            }
            for (var _$3x1i = 0; _$3x1i < _$3x1cached.log.length; _$3x1i++) {
                if (typeof _$3x1cached.log[_$3x1i] === 'string') {
                    __$ctx._buf.push(_$3x1cached.log[_$3x1i]);
                    continue;
                } else {
                    undefined;
                }
                var _$3x1log = _$3x1cached.log[_$3x1i], _$3x1reverseLog;
                _$3x1reverseLog = _$3x1log.log.map(function (entry) {
                    return {
                        key: entry[0],
                        value: _$3x1setProperty(this, entry[0], entry[1])
                    };
                }, __$ctx).reverse();
                {
                    '';
                    var __r0 = __$ctx.ctx, __r1 = __r0.cache;
                    __r0.cache = null;
                    var __r2 = __$ctx._cacheLog;
                    __$ctx._cacheLog = null;
                    var __r3 = __$ctx.ctx, __r4 = __r3.link;
                    __r3.link = _$3x1log.link;
                    $1(__$ctx);
                    __r0.cache = __r1;
                    __$ctx._cacheLog = __r2;
                    __r3.link = __r4;
                    '';
                }
                undefined;
                _$3x1reverseLog.forEach(function (entry) {
                    _$3x1setProperty(this, entry.key, entry.value);
                }, __$ctx);
            }
            __$ctx._links = _$3x1oldLinks;
            return _$3x1cached.res;
        } else {
            undefined;
        }
        var _$3x1cacheLog = [], _$3x1res;
        {
            '';
            var __r5 = __$ctx.ctx, __r6 = __r5.cache;
            __r5.cache = null;
            var __r7 = __$ctx._cachePos;
            __$ctx._cachePos = __$ctx._buf.length;
            var __r8 = __$ctx._cacheLog;
            __$ctx._cacheLog = _$3x1cacheLog;
            var __r9 = __$ctx._localLog;
            __$ctx._localLog = [];
            {
                _$3x1res = $1(__$ctx);
                var _$3x1tail = __$ctx._buf.slice(__$ctx._cachePos).join('');
                if (_$3x1tail) {
                    _$3x1cacheLog.push(_$3x1tail);
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
            log: _$3x1cacheLog,
            res: _$3x1res
        });
        return _$3x1res;
        return;
    }
    function $197(__$ctx) {
        var __t = $$mode;
        if (__t === 'default') {
            return $199(__$ctx);
        } else if (__t === '') {
            if (!__$ctx._.isSimple(__$ctx.ctx) === false) {
                __$ctx._listLength--;
                var _$3wzctx = __$ctx.ctx;
                (_$3wzctx && _$3wzctx !== true || _$3wzctx === 0) && __$ctx._buf.push(_$3wzctx);
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
                            return $e(__$ctx);
                        }
                    }
                }
            }
        } else {
            return $e(__$ctx);
        }
    }
    function $199(__$ctx) {
        var __r13, __r0, __r4, __r5, __r6, __r7, __r8, __r9, __r10, __r11, __r12, __r1, __r14, __r15, __r16, __r17, __r20, __r21, __r22, __r23, __r24, __r25;
        var _$3x0BEM_ = __$ctx.BEM, _$3x0v = __$ctx.ctx, _$3x0buf = __$ctx._buf, _$3x0tag;
        _$3x0tag = ('', __r0 = $$mode, $$mode = 'tag', __r1 = $91(__$ctx), $$mode = __r0, '', __r1);
        typeof _$3x0tag != 'undefined' || (_$3x0tag = _$3x0v.tag);
        typeof _$3x0tag != 'undefined' || (_$3x0tag = 'div');
        if (_$3x0tag) {
            var _$3x0jsParams, _$3x0js;
            if ($$block && _$3x0v.js !== false) {
                _$3x0js = ('', __r4 = $$mode, $$mode = 'js', __r5 = $130(__$ctx), $$mode = __r4, '', __r5);
                _$3x0js = _$3x0js ? __$ctx._.extend(_$3x0v.js, _$3x0js === true ? {} : _$3x0js) : _$3x0v.js === true ? {} : _$3x0v.js;
                _$3x0js && ((_$3x0jsParams = {})[_$3x0BEM_.INTERNAL.buildClass($$block, _$3x0v.elem)] = _$3x0js);
            } else {
                undefined;
            }
            _$3x0buf.push('<', _$3x0tag);
            var _$3x0isBEM = ('', __r6 = $$mode, $$mode = 'bem', __r7 = $156(__$ctx), $$mode = __r6, '', __r7);
            typeof _$3x0isBEM != 'undefined' || (_$3x0isBEM = typeof _$3x0v.bem != 'undefined' ? _$3x0v.bem : _$3x0v.block || _$3x0v.elem);
            var _$3x0cls = ('', __r8 = $$mode, $$mode = 'cls', __r9 = $156(__$ctx), $$mode = __r8, '', __r9);
            _$3x0cls || (_$3x0cls = _$3x0v.cls);
            var _$3x0addJSInitClass = _$3x0v.block && _$3x0jsParams;
            if (_$3x0isBEM || _$3x0cls) {
                _$3x0buf.push(' class="');
                if (_$3x0isBEM) {
                    _$3x0BEM_.INTERNAL.buildClasses($$block, _$3x0v.elem, _$3x0v.elemMods || _$3x0v.mods, _$3x0buf);
                    var _$3x0mix = ('', __r10 = $$mode, $$mode = 'mix', __r11 = $119(__$ctx), $$mode = __r10, '', __r11);
                    _$3x0v.mix && (_$3x0mix = _$3x0mix ? _$3x0mix.concat(_$3x0v.mix) : _$3x0v.mix);
                    if (_$3x0mix) {
                        var _$3x0visited = {};
                        function _$3x0visitedKey(block, elem) {
                            return (block || '') + '__' + (elem || '');
                        }
                        _$3x0visited[_$3x0visitedKey($$block, $$elem)] = true;
                        if (!__$ctx._.isArray(_$3x0mix)) {
                            _$3x0mix = [_$3x0mix];
                        } else {
                            undefined;
                        }
                        for (var _$3x0i = 0; _$3x0i < _$3x0mix.length; _$3x0i++) {
                            var _$3x0mixItem = _$3x0mix[_$3x0i];
                            if (!_$3x0mixItem) {
                                continue;
                            } else {
                                undefined;
                            }
                            var _$3x0hasItem = _$3x0mixItem.block || _$3x0mixItem.elem, _$3x0block = _$3x0mixItem.block || _$3x0mixItem._block || $$block, _$3x0elem = _$3x0mixItem.elem || _$3x0mixItem._elem || $$elem, _$3x0mods = _$3x0mixItem.mods || $$mods, _$3x0elemMods = _$3x0mixItem.elemMods || {};
                            _$3x0hasItem && _$3x0buf.push(' ');
                            _$3x0BEM_.INTERNAL[_$3x0hasItem ? 'buildClasses' : 'buildModsClasses'](_$3x0block, _$3x0mixItem.elem || _$3x0mixItem._elem || (_$3x0mixItem.block ? undefined : $$elem), _$3x0mixItem.elemMods || _$3x0mixItem.mods, _$3x0buf);
                            if (_$3x0mixItem.js) {
                                (_$3x0jsParams || (_$3x0jsParams = {}))[_$3x0BEM_.INTERNAL.buildClass(_$3x0block, _$3x0mixItem.elem)] = _$3x0mixItem.js === true ? {} : _$3x0mixItem.js;
                                _$3x0addJSInitClass || (_$3x0addJSInitClass = _$3x0block && !_$3x0mixItem.elem);
                            } else {
                                undefined;
                            }
                            if (_$3x0hasItem && !_$3x0visited[_$3x0visitedKey(_$3x0block, _$3x0elem)]) {
                                _$3x0visited[_$3x0visitedKey(_$3x0block, _$3x0elem)] = true;
                                var _$3x0nestedMix = ('', __r12 = $$block, $$block = _$3x0block, __r13 = $$elem, $$elem = _$3x0elem, __r14 = $$mods, $$mods = _$3x0mods, __r15 = $$elemMods, $$elemMods = _$3x0elemMods, __r16 = $$mode, $$mode = 'mix', __r17 = $119(__$ctx), $$block = __r12, $$elem = __r13, $$mods = __r14, $$elemMods = __r15, $$mode = __r16, '', __r17);
                                if (_$3x0nestedMix) {
                                    for (var _$3x0j = 0; _$3x0j < _$3x0nestedMix.length; _$3x0j++) {
                                        var _$3x0nestedItem = _$3x0nestedMix[_$3x0j];
                                        if (!_$3x0nestedItem.block && !_$3x0nestedItem.elem || !_$3x0visited[_$3x0visitedKey(_$3x0nestedItem.block, _$3x0nestedItem.elem)]) {
                                            _$3x0nestedItem._block = _$3x0block;
                                            _$3x0nestedItem._elem = _$3x0elem;
                                            _$3x0mix.splice(_$3x0i + 1, 0, _$3x0nestedItem);
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
                _$3x0cls && _$3x0buf.push(_$3x0isBEM ? ' ' : '', _$3x0cls);
                _$3x0addJSInitClass && _$3x0buf.push(' i-bem');
                _$3x0buf.push('"');
            } else {
                undefined;
            }
            if (_$3x0jsParams) {
                var _$3x0jsAttr = ('', __r20 = $$mode, $$mode = 'jsAttr', __r21 = $156(__$ctx), $$mode = __r20, '', __r21);
                _$3x0buf.push(' ', _$3x0jsAttr || 'data-bem', '="', __$ctx._.attrEscape(JSON.stringify(_$3x0jsParams)), '"');
            } else {
                undefined;
            }
            var _$3x0attrs = ('', __r22 = $$mode, $$mode = 'attrs', __r23 = $44(__$ctx), $$mode = __r22, '', __r23);
            _$3x0attrs = __$ctx._.extend(_$3x0attrs, _$3x0v.attrs);
            if (_$3x0attrs) {
                var _$3x0name;
                for (_$3x0name in _$3x0attrs) {
                    if (_$3x0attrs[_$3x0name] === undefined) {
                        continue;
                    } else {
                        undefined;
                    }
                    _$3x0buf.push(' ', _$3x0name, '="', __$ctx._.attrEscape(_$3x0attrs[_$3x0name]), '"');
                }
            } else {
                undefined;
            }
        } else {
            undefined;
        }
        if (__$ctx._.isShortTag(_$3x0tag)) {
            _$3x0buf.push('/>');
        } else {
            _$3x0tag && _$3x0buf.push('>');
            var _$3x0content = ('', __r24 = $$mode, $$mode = 'content', __r25 = $143(__$ctx), $$mode = __r24, '', __r25);
            if (_$3x0content || _$3x0content === 0) {
                var _$3x0isBEM = $$block || $$elem;
                {
                    '';
                    var __r26 = __$ctx._notNewList;
                    __$ctx._notNewList = false;
                    var __r27 = __$ctx.position;
                    __$ctx.position = _$3x0isBEM ? 1 : __$ctx.position;
                    var __r28 = __$ctx._listLength;
                    __$ctx._listLength = _$3x0isBEM ? 1 : __$ctx._listLength;
                    var __r29 = __$ctx.ctx;
                    __$ctx.ctx = _$3x0content;
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
            _$3x0tag && _$3x0buf.push('</', _$3x0tag, '>');
        }
        return;
    }
    function $208(__$ctx) {
        var _$3wxv = __$ctx.ctx, _$3wxl = _$3wxv.length, _$3wxi = 0, _$3wxprevPos = __$ctx.position, _$3wxprevNotNewList = __$ctx._notNewList;
        if (_$3wxprevNotNewList) {
            __$ctx._listLength += _$3wxl - 1;
        } else {
            __$ctx.position = 0;
            __$ctx._listLength = _$3wxl;
        }
        __$ctx._notNewList = true;
        while (_$3wxi < _$3wxl) {
            var _$3wxnewCtx = _$3wxv[_$3wxi++];
            {
                '';
                var __r0 = __$ctx.ctx;
                __$ctx.ctx = _$3wxnewCtx == null ? '' : _$3wxnewCtx;
                $156(__$ctx);
                __$ctx.ctx = __r0;
                '';
            }
            undefined;
        }
        _$3wxprevNotNewList || (__$ctx.position = _$3wxprevPos);
        return;
    }
    function $211(__$ctx) {
        var _$3wwvBlock = __$ctx.ctx.block, _$3wwvElem = __$ctx.ctx.elem, _$3wwblock = __$ctx._currBlock || $$block;
        __$ctx.ctx || (__$ctx.ctx = {});
        {
            '';
            var __r0 = $$mode;
            $$mode = 'default';
            var __r1 = __$ctx._links;
            __$ctx._links = __$ctx.ctx.links || __$ctx._links;
            var __r2 = $$block;
            $$block = _$3wwvBlock || (_$3wwvElem ? _$3wwblock : undefined);
            var __r3 = __$ctx._currBlock;
            __$ctx._currBlock = _$3wwvBlock || _$3wwvElem ? undefined : _$3wwblock;
            var __r4 = $$elem;
            $$elem = __$ctx.ctx.elem;
            var __r5 = $$mods;
            $$mods = (_$3wwvBlock ? __$ctx.ctx.mods : $$mods) || {};
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
/*borschik:include:../../../../libs/bem-bl/blocks-touch/i-fastclick/i-fastclick.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-touch/i-pointer-events/i-pointer-events.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-bem/i-bem.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-ecma/__object/i-ecma__object.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-ecma/__array/i-ecma__array.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-ecma/__function/i-ecma__function.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-bem/__internal/i-bem__internal.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-bem/__dom/i-bem__dom.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-ecma/__string/i-ecma__string.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-ecma/__json/i-ecma__json.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-bem/__dom/_init/i-bem__dom_init_auto.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-touch/i-ua/i-ua.js*/;
/*borschik:include:../../../../libs/islands-romochka/touch.blocks/i-ua/i-ua.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-jquery/__cookie/i-jquery__cookie.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-jquery/__decodeuri/i-jquery__decodeuri.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-common/check-session/i-common__check-session.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-global/i-global.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-counter/i-counter.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-common/cookie/i-common__cookie.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-common/init/i-common__init.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-common/i-common.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-ua/_interaction/i-ua_interaction_yes.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-touch/i-jquery/__tap/i-jquery__tap.js*/;
/*borschik:include:../../../../common.blocks/select/select.examples/60-popup.blocks/example/example.js*/;
/*borschik:include:../../../../common.blocks/link/link.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-touch/i-pressed-controller/i-pressed-controller.js*/;
/*borschik:include:../../../../common.blocks/link/_pseudo/link_pseudo_yes.js*/;
/*borschik:include:../../../../common.blocks/popup/popup.js*/;
/*borschik:include:../../../../touch-pad.blocks/popup/popup.js*/;
/*borschik:include:../../../../common.blocks/popup/_autoclosable/popup_autoclosable_yes.js*/;
/*borschik:include:../../../../common.blocks/popup/_adaptive/popup_adaptive_yes.js*/;
/*borschik:include:../../../../common.blocks/popup/_animate/popup_animate_yes.js*/;
/*borschik:include:../../../../common.blocks/popup/__under/popup__under.js*/;
/*borschik:include:../../../../touch.blocks/popup/__under/popup__under.js*/;
/*borschik:include:../../../../common.blocks/popup/__tail/popup__tail.js*/;
/*borschik:include:../../../../common.blocks/button/button.js*/;
/*borschik:include:../../../../touch.blocks/button/button.js*/;
/*borschik:include:../../../../common.blocks/popup/_autosize/popup_autosize_yes.js*/;
/*borschik:include:../../../../common.blocks/select/select.js*/;
/*borschik:include:../../../../common.blocks/select/__ui/select__ui.js*/;
/*borschik:include:../../../../touch.blocks/select/__ui/select__ui.js*/;
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
