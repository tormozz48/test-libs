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
        if (!(__$ctx['__$anflg499'] !== true) === false) {
            {
                '';
                var __r0 = __$ctx['__$anflg499'];
                __$ctx['__$anflg499'] = true;
                {
                    '';
                    var __r1 = __$ctx._labelId;
                    __$ctx._labelId = __$ctx.generateId();
                    $4(__$ctx);
                    __$ctx._labelId = __r1;
                    '';
                }
                __$ctx['__$anflg499'] = __r0;
                '';
            }
            undefined;
            return;
        } else {
            return $9(__$ctx);
        }
    }
    function $9(__$ctx) {
        if (!(__$ctx['__$anflg496'] !== true) === false) {
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
        var _$3yrctx = __$ctx.ctx, _$3yrid = _$3yrctx.id || __$ctx.generateId();
        {
            '';
            var __r0 = __$ctx['__$anflg496'];
            __$ctx['__$anflg496'] = true;
            {
                '';
                var __r1 = __$ctx._controlAttrs;
                __$ctx._controlAttrs = {
                    id: _$3yrid,
                    name: _$3yrctx.name || _$3yrid,
                    tabindex: _$3yrctx.tabindex
                };
                var __r2 = __$ctx._formSelect;
                __$ctx._formSelect = {
                    block: $$block,
                    mods: $$mods,
                    tabindex: _$3yrctx.tabindex
                };
                $3(__$ctx);
                __$ctx._controlAttrs = __r1;
                __$ctx._formSelect = __r2;
                '';
            }
            __$ctx['__$anflg496'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $17(__$ctx) {
        if (!(__$ctx['__$anflg498'] !== true) === false) {
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
        var _$3z0ctx = __$ctx.ctx, _$3z0selectMods = __$ctx._formSelect.mods, _$3z0tabindex = __$ctx._formSelect.tabindex, _$3z0m = _$3z0ctx.mods || {};
        _$3z0m.arrow = 'down';
        _$3z0selectMods.theme && (_$3z0m.theme = _$3z0selectMods.theme);
        _$3z0selectMods.size && (_$3z0m.size = _$3z0selectMods.size);
        _$3z0selectMods.disabled === 'yes' && (_$3z0m.disabled = 'yes');
        _$3z0ctx.mods = _$3z0m;
        _$3z0tabindex && (_$3z0ctx.tabindex = _$3z0tabindex);
        {
            '';
            var __r0 = __$ctx['__$anflg498'];
            __$ctx['__$anflg498'] = true;
            {
                '';
                var __r1 = __$ctx.ctx, __r2 = __r1._theme;
                __r1._theme = true;
                $17(__$ctx);
                __r1._theme = __r2;
                '';
            }
            __$ctx['__$anflg498'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $26(__$ctx) {
        if (!(__$ctx['__$anflg493'] !== true) === false) {
            if (!!$$elem === false) {
                var _$3ymmods = __$ctx.ctx.mods || {};
                _$3ymmods.theme = _$3ymmods.theme || 'normal';
                {
                    '';
                    var __r0 = __$ctx['__$anflg493'];
                    __$ctx['__$anflg493'] = true;
                    {
                        '';
                        var __r1 = __$ctx.ctx, __r2 = __r1.mods;
                        __r1.mods = _$3ymmods;
                        $17(__$ctx);
                        __r1.mods = __r2;
                        '';
                    }
                    __$ctx['__$anflg493'] = __r0;
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
        var _$3yhctx = __$ctx.ctx;
        _$3yhctx.mods = $$mods = __$ctx.extend({
            theme: 'ffffff',
            autoclosable: 'yes',
            adaptive: 'yes',
            animate: 'yes'
        }, $$mods);
        if (_$3yhctx.zIndex) {
            var _$3yhattrs = _$3yhctx.attrs || (_$3yhctx.attrs = {});
            _$3yhattrs.style = (_$3yhattrs.style || '') + ';z-index:' + _$3yhctx.zIndex + ';';
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
                var _$3z3attrs = [
                        'id',
                        'name',
                        'tabindex'
                    ], _$3z3prop = {}, _$3z3p;
                while (_$3z3p = _$3z3attrs.pop()) {
                    __$ctx._controlAttrs[_$3z3p] && (_$3z3prop[_$3z3p] = __$ctx._controlAttrs[_$3z3p]);
                }
                $$mods.disabled === 'yes' && (_$3z3prop.disabled = 'disabled');
                _$3z3prop.tabindex = -1;
                _$3z3prop['aria-hidden'] = true;
                return __$ctx.ctx.controlAttrs || _$3z3prop;
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
        if (!(__$ctx['__$anflg497'] !== true) === false) {
            var __r0, __r1;
            var _$3yya = ('', __r0 = __$ctx['__$anflg497'], __$ctx['__$anflg497'] = true, __r1 = $50(__$ctx), __$ctx['__$anflg497'] = __r0, '', __r1) || {};
            if ((__$ctx.ctx.elemMods || {}).label === 'yes') {
                _$3yya.id = __$ctx._labelId;
                _$3yya['aria-hidden'] = true;
            } else {
                undefined;
            }
            return _$3yya;
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
        if (!(__$ctx['__$anflg495'] !== true) === false) {
            if (!__$ctx.ctx.url === false) {
                if (!!$$elem === false) {
                    var __r0, __r1;
                    var _$3ypctx = __$ctx.ctx, _$3ypp = ('', __r0 = __$ctx['__$anflg495'], __$ctx['__$anflg495'] = true, __r1 = $57(__$ctx), __$ctx['__$anflg495'] = __r0, '', __r1), _$3ypa = { href: _$3ypctx.url };
                    _$3ypctx.target && (_$3ypa.target = _$3ypctx.target);
                    $$mods.disabled && (_$3ypa['aria-disabled'] = true);
                    return __$ctx._.extend(_$3ypp, _$3ypa);
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
        if (!(__$ctx['__$anflg494'] !== true) === false) {
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
        var _$3yoctx = __$ctx.ctx, _$3yop = ('', __r0 = __$ctx['__$anflg494'], __$ctx['__$anflg494'] = true, __r1 = $57(__$ctx), __$ctx['__$anflg494'] = __r0, '', __r1), _$3yoa = { type: _$3yoctx.type || 'button' }, _$3yoprops = [
                'name',
                'value'
            ], _$3yoi;
        while (_$3yoi = _$3yoprops.shift()) {
            _$3yoctx[_$3yoi] && (_$3yoa[_$3yoi] = _$3yoctx[_$3yoi]);
        }
        $$mods.disabled && (_$3yoa.disabled = 'disabled');
        return __$ctx._.extend(_$3yop, _$3yoa);
        return;
    }
    function $81(__$ctx) {
        if (!true === false) {
            if (!!$$elem === false) {
                var _$3ynctx = __$ctx.ctx, _$3yna = { role: 'button' };
                _$3ynctx.tabindex && (_$3yna.tabindex = _$3ynctx.tabindex);
                return _$3yna;
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
        function _$3y7follow() {
            if (this.ctx.link === 'no-follow') {
                return undefined;
            } else {
                undefined;
            }
            var data = this._links[this.ctx.link];
            return '', __r0 = this.ctx, this.ctx = data, __r1 = $1(__$ctx), this.ctx = __r0, '', __r1;
        }
        if (!cache || !__$ctx._cacheLog) {
            return _$3y7follow.call(__$ctx);
        } else {
            undefined;
        }
        var _$3y7contents = __$ctx._buf.slice(__$ctx._cachePos).join('');
        __$ctx._cachePos = __$ctx._buf.length;
        __$ctx._cacheLog.push(_$3y7contents, {
            log: __$ctx._localLog.slice(),
            link: __$ctx.ctx.link
        });
        var _$3y7res = _$3y7follow.call(__$ctx);
        __$ctx._cachePos = __$ctx._buf.length;
        return _$3y7res;
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
        var _$3y6cached;
        function _$3y6setProperty(obj, key, value) {
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
        if (_$3y6cached = cache.get(__$ctx.ctx.cache)) {
            var _$3y6oldLinks = __$ctx._links;
            if (__$ctx.ctx.links) {
                __$ctx._links = __$ctx.ctx.links;
            } else {
                undefined;
            }
            for (var _$3y6i = 0; _$3y6i < _$3y6cached.log.length; _$3y6i++) {
                if (typeof _$3y6cached.log[_$3y6i] === 'string') {
                    __$ctx._buf.push(_$3y6cached.log[_$3y6i]);
                    continue;
                } else {
                    undefined;
                }
                var _$3y6log = _$3y6cached.log[_$3y6i], _$3y6reverseLog;
                _$3y6reverseLog = _$3y6log.log.map(function (entry) {
                    return {
                        key: entry[0],
                        value: _$3y6setProperty(this, entry[0], entry[1])
                    };
                }, __$ctx).reverse();
                {
                    '';
                    var __r0 = __$ctx.ctx, __r1 = __r0.cache;
                    __r0.cache = null;
                    var __r2 = __$ctx._cacheLog;
                    __$ctx._cacheLog = null;
                    var __r3 = __$ctx.ctx, __r4 = __r3.link;
                    __r3.link = _$3y6log.link;
                    $1(__$ctx);
                    __r0.cache = __r1;
                    __$ctx._cacheLog = __r2;
                    __r3.link = __r4;
                    '';
                }
                undefined;
                _$3y6reverseLog.forEach(function (entry) {
                    _$3y6setProperty(this, entry.key, entry.value);
                }, __$ctx);
            }
            __$ctx._links = _$3y6oldLinks;
            return _$3y6cached.res;
        } else {
            undefined;
        }
        var _$3y6cacheLog = [], _$3y6res;
        {
            '';
            var __r5 = __$ctx.ctx, __r6 = __r5.cache;
            __r5.cache = null;
            var __r7 = __$ctx._cachePos;
            __$ctx._cachePos = __$ctx._buf.length;
            var __r8 = __$ctx._cacheLog;
            __$ctx._cacheLog = _$3y6cacheLog;
            var __r9 = __$ctx._localLog;
            __$ctx._localLog = [];
            {
                _$3y6res = $1(__$ctx);
                var _$3y6tail = __$ctx._buf.slice(__$ctx._cachePos).join('');
                if (_$3y6tail) {
                    _$3y6cacheLog.push(_$3y6tail);
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
            log: _$3y6cacheLog,
            res: _$3y6res
        });
        return _$3y6res;
        return;
    }
    function $197(__$ctx) {
        var __t = $$mode;
        if (__t === 'default') {
            return $199(__$ctx);
        } else if (__t === '') {
            if (!__$ctx._.isSimple(__$ctx.ctx) === false) {
                __$ctx._listLength--;
                var _$3y4ctx = __$ctx.ctx;
                (_$3y4ctx && _$3y4ctx !== true || _$3y4ctx === 0) && __$ctx._buf.push(_$3y4ctx);
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
        var _$3y5BEM_ = __$ctx.BEM, _$3y5v = __$ctx.ctx, _$3y5buf = __$ctx._buf, _$3y5tag;
        _$3y5tag = ('', __r0 = $$mode, $$mode = 'tag', __r1 = $91(__$ctx), $$mode = __r0, '', __r1);
        typeof _$3y5tag != 'undefined' || (_$3y5tag = _$3y5v.tag);
        typeof _$3y5tag != 'undefined' || (_$3y5tag = 'div');
        if (_$3y5tag) {
            var _$3y5jsParams, _$3y5js;
            if ($$block && _$3y5v.js !== false) {
                _$3y5js = ('', __r4 = $$mode, $$mode = 'js', __r5 = $130(__$ctx), $$mode = __r4, '', __r5);
                _$3y5js = _$3y5js ? __$ctx._.extend(_$3y5v.js, _$3y5js === true ? {} : _$3y5js) : _$3y5v.js === true ? {} : _$3y5v.js;
                _$3y5js && ((_$3y5jsParams = {})[_$3y5BEM_.INTERNAL.buildClass($$block, _$3y5v.elem)] = _$3y5js);
            } else {
                undefined;
            }
            _$3y5buf.push('<', _$3y5tag);
            var _$3y5isBEM = ('', __r6 = $$mode, $$mode = 'bem', __r7 = $156(__$ctx), $$mode = __r6, '', __r7);
            typeof _$3y5isBEM != 'undefined' || (_$3y5isBEM = typeof _$3y5v.bem != 'undefined' ? _$3y5v.bem : _$3y5v.block || _$3y5v.elem);
            var _$3y5cls = ('', __r8 = $$mode, $$mode = 'cls', __r9 = $156(__$ctx), $$mode = __r8, '', __r9);
            _$3y5cls || (_$3y5cls = _$3y5v.cls);
            var _$3y5addJSInitClass = _$3y5v.block && _$3y5jsParams;
            if (_$3y5isBEM || _$3y5cls) {
                _$3y5buf.push(' class="');
                if (_$3y5isBEM) {
                    _$3y5BEM_.INTERNAL.buildClasses($$block, _$3y5v.elem, _$3y5v.elemMods || _$3y5v.mods, _$3y5buf);
                    var _$3y5mix = ('', __r10 = $$mode, $$mode = 'mix', __r11 = $119(__$ctx), $$mode = __r10, '', __r11);
                    _$3y5v.mix && (_$3y5mix = _$3y5mix ? _$3y5mix.concat(_$3y5v.mix) : _$3y5v.mix);
                    if (_$3y5mix) {
                        var _$3y5visited = {};
                        function _$3y5visitedKey(block, elem) {
                            return (block || '') + '__' + (elem || '');
                        }
                        _$3y5visited[_$3y5visitedKey($$block, $$elem)] = true;
                        if (!__$ctx._.isArray(_$3y5mix)) {
                            _$3y5mix = [_$3y5mix];
                        } else {
                            undefined;
                        }
                        for (var _$3y5i = 0; _$3y5i < _$3y5mix.length; _$3y5i++) {
                            var _$3y5mixItem = _$3y5mix[_$3y5i];
                            if (!_$3y5mixItem) {
                                continue;
                            } else {
                                undefined;
                            }
                            var _$3y5hasItem = _$3y5mixItem.block || _$3y5mixItem.elem, _$3y5block = _$3y5mixItem.block || _$3y5mixItem._block || $$block, _$3y5elem = _$3y5mixItem.elem || _$3y5mixItem._elem || $$elem, _$3y5mods = _$3y5mixItem.mods || $$mods, _$3y5elemMods = _$3y5mixItem.elemMods || {};
                            _$3y5hasItem && _$3y5buf.push(' ');
                            _$3y5BEM_.INTERNAL[_$3y5hasItem ? 'buildClasses' : 'buildModsClasses'](_$3y5block, _$3y5mixItem.elem || _$3y5mixItem._elem || (_$3y5mixItem.block ? undefined : $$elem), _$3y5mixItem.elemMods || _$3y5mixItem.mods, _$3y5buf);
                            if (_$3y5mixItem.js) {
                                (_$3y5jsParams || (_$3y5jsParams = {}))[_$3y5BEM_.INTERNAL.buildClass(_$3y5block, _$3y5mixItem.elem)] = _$3y5mixItem.js === true ? {} : _$3y5mixItem.js;
                                _$3y5addJSInitClass || (_$3y5addJSInitClass = _$3y5block && !_$3y5mixItem.elem);
                            } else {
                                undefined;
                            }
                            if (_$3y5hasItem && !_$3y5visited[_$3y5visitedKey(_$3y5block, _$3y5elem)]) {
                                _$3y5visited[_$3y5visitedKey(_$3y5block, _$3y5elem)] = true;
                                var _$3y5nestedMix = ('', __r12 = $$block, $$block = _$3y5block, __r13 = $$elem, $$elem = _$3y5elem, __r14 = $$mods, $$mods = _$3y5mods, __r15 = $$elemMods, $$elemMods = _$3y5elemMods, __r16 = $$mode, $$mode = 'mix', __r17 = $119(__$ctx), $$block = __r12, $$elem = __r13, $$mods = __r14, $$elemMods = __r15, $$mode = __r16, '', __r17);
                                if (_$3y5nestedMix) {
                                    for (var _$3y5j = 0; _$3y5j < _$3y5nestedMix.length; _$3y5j++) {
                                        var _$3y5nestedItem = _$3y5nestedMix[_$3y5j];
                                        if (!_$3y5nestedItem.block && !_$3y5nestedItem.elem || !_$3y5visited[_$3y5visitedKey(_$3y5nestedItem.block, _$3y5nestedItem.elem)]) {
                                            _$3y5nestedItem._block = _$3y5block;
                                            _$3y5nestedItem._elem = _$3y5elem;
                                            _$3y5mix.splice(_$3y5i + 1, 0, _$3y5nestedItem);
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
                _$3y5cls && _$3y5buf.push(_$3y5isBEM ? ' ' : '', _$3y5cls);
                _$3y5addJSInitClass && _$3y5buf.push(' i-bem');
                _$3y5buf.push('"');
            } else {
                undefined;
            }
            if (_$3y5jsParams) {
                var _$3y5jsAttr = ('', __r20 = $$mode, $$mode = 'jsAttr', __r21 = $156(__$ctx), $$mode = __r20, '', __r21);
                _$3y5buf.push(' ', _$3y5jsAttr || 'data-bem', '="', __$ctx._.attrEscape(JSON.stringify(_$3y5jsParams)), '"');
            } else {
                undefined;
            }
            var _$3y5attrs = ('', __r22 = $$mode, $$mode = 'attrs', __r23 = $44(__$ctx), $$mode = __r22, '', __r23);
            _$3y5attrs = __$ctx._.extend(_$3y5attrs, _$3y5v.attrs);
            if (_$3y5attrs) {
                var _$3y5name;
                for (_$3y5name in _$3y5attrs) {
                    if (_$3y5attrs[_$3y5name] === undefined) {
                        continue;
                    } else {
                        undefined;
                    }
                    _$3y5buf.push(' ', _$3y5name, '="', __$ctx._.attrEscape(_$3y5attrs[_$3y5name]), '"');
                }
            } else {
                undefined;
            }
        } else {
            undefined;
        }
        if (__$ctx._.isShortTag(_$3y5tag)) {
            _$3y5buf.push('/>');
        } else {
            _$3y5tag && _$3y5buf.push('>');
            var _$3y5content = ('', __r24 = $$mode, $$mode = 'content', __r25 = $143(__$ctx), $$mode = __r24, '', __r25);
            if (_$3y5content || _$3y5content === 0) {
                var _$3y5isBEM = $$block || $$elem;
                {
                    '';
                    var __r26 = __$ctx._notNewList;
                    __$ctx._notNewList = false;
                    var __r27 = __$ctx.position;
                    __$ctx.position = _$3y5isBEM ? 1 : __$ctx.position;
                    var __r28 = __$ctx._listLength;
                    __$ctx._listLength = _$3y5isBEM ? 1 : __$ctx._listLength;
                    var __r29 = __$ctx.ctx;
                    __$ctx.ctx = _$3y5content;
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
            _$3y5tag && _$3y5buf.push('</', _$3y5tag, '>');
        }
        return;
    }
    function $208(__$ctx) {
        var _$3y2v = __$ctx.ctx, _$3y2l = _$3y2v.length, _$3y2i = 0, _$3y2prevPos = __$ctx.position, _$3y2prevNotNewList = __$ctx._notNewList;
        if (_$3y2prevNotNewList) {
            __$ctx._listLength += _$3y2l - 1;
        } else {
            __$ctx.position = 0;
            __$ctx._listLength = _$3y2l;
        }
        __$ctx._notNewList = true;
        while (_$3y2i < _$3y2l) {
            var _$3y2newCtx = _$3y2v[_$3y2i++];
            {
                '';
                var __r0 = __$ctx.ctx;
                __$ctx.ctx = _$3y2newCtx == null ? '' : _$3y2newCtx;
                $156(__$ctx);
                __$ctx.ctx = __r0;
                '';
            }
            undefined;
        }
        _$3y2prevNotNewList || (__$ctx.position = _$3y2prevPos);
        return;
    }
    function $211(__$ctx) {
        var _$3y1vBlock = __$ctx.ctx.block, _$3y1vElem = __$ctx.ctx.elem, _$3y1block = __$ctx._currBlock || $$block;
        __$ctx.ctx || (__$ctx.ctx = {});
        {
            '';
            var __r0 = $$mode;
            $$mode = 'default';
            var __r1 = __$ctx._links;
            __$ctx._links = __$ctx.ctx.links || __$ctx._links;
            var __r2 = $$block;
            $$block = _$3y1vBlock || (_$3y1vElem ? _$3y1block : undefined);
            var __r3 = __$ctx._currBlock;
            __$ctx._currBlock = _$3y1vBlock || _$3y1vElem ? undefined : _$3y1block;
            var __r4 = $$elem;
            $$elem = __$ctx.ctx.elem;
            var __r5 = $$mods;
            $$mods = (_$3y1vBlock ? __$ctx.ctx.mods : $$mods) || {};
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
/*borschik:include:../../../../common.blocks/select/select.examples/65-popup-fixed.blocks/example/example.js*/;
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


BEM.I18N.lang('tr');
