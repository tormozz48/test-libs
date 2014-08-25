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
        if (!(__$ctx['__$anflg678'] !== true) === false) {
            {
                '';
                var __r0 = __$ctx['__$anflg678'];
                __$ctx['__$anflg678'] = true;
                {
                    '';
                    var __r1 = __$ctx._labelId;
                    __$ctx._labelId = __$ctx.generateId();
                    $4(__$ctx);
                    __$ctx._labelId = __r1;
                    '';
                }
                __$ctx['__$anflg678'] = __r0;
                '';
            }
            undefined;
            return;
        } else {
            return $9(__$ctx);
        }
    }
    function $9(__$ctx) {
        if (!(__$ctx['__$anflg675'] !== true) === false) {
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
        var _$5e8ctx = __$ctx.ctx, _$5e8id = _$5e8ctx.id || __$ctx.generateId();
        {
            '';
            var __r0 = __$ctx['__$anflg675'];
            __$ctx['__$anflg675'] = true;
            {
                '';
                var __r1 = __$ctx._controlAttrs;
                __$ctx._controlAttrs = {
                    id: _$5e8id,
                    name: _$5e8ctx.name || _$5e8id,
                    tabindex: _$5e8ctx.tabindex
                };
                var __r2 = __$ctx._formSelect;
                __$ctx._formSelect = {
                    block: $$block,
                    mods: $$mods,
                    tabindex: _$5e8ctx.tabindex
                };
                $3(__$ctx);
                __$ctx._controlAttrs = __r1;
                __$ctx._formSelect = __r2;
                '';
            }
            __$ctx['__$anflg675'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $17(__$ctx) {
        if (!(__$ctx['__$anflg677'] !== true) === false) {
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
        var _$5ehctx = __$ctx.ctx, _$5ehselectMods = __$ctx._formSelect.mods, _$5ehtabindex = __$ctx._formSelect.tabindex, _$5ehm = _$5ehctx.mods || {};
        _$5ehm.arrow = 'down';
        _$5ehselectMods.theme && (_$5ehm.theme = _$5ehselectMods.theme);
        _$5ehselectMods.size && (_$5ehm.size = _$5ehselectMods.size);
        _$5ehselectMods.disabled === 'yes' && (_$5ehm.disabled = 'yes');
        _$5ehctx.mods = _$5ehm;
        _$5ehtabindex && (_$5ehctx.tabindex = _$5ehtabindex);
        {
            '';
            var __r0 = __$ctx['__$anflg677'];
            __$ctx['__$anflg677'] = true;
            {
                '';
                var __r1 = __$ctx.ctx, __r2 = __r1._theme;
                __r1._theme = true;
                $17(__$ctx);
                __r1._theme = __r2;
                '';
            }
            __$ctx['__$anflg677'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $26(__$ctx) {
        if (!(__$ctx['__$anflg672'] !== true) === false) {
            if (!!$$elem === false) {
                var _$5e3mods = __$ctx.ctx.mods || {};
                _$5e3mods.theme = _$5e3mods.theme || 'normal';
                {
                    '';
                    var __r0 = __$ctx['__$anflg672'];
                    __$ctx['__$anflg672'] = true;
                    {
                        '';
                        var __r1 = __$ctx.ctx, __r2 = __r1.mods;
                        __r1.mods = _$5e3mods;
                        $17(__$ctx);
                        __r1.mods = __r2;
                        '';
                    }
                    __$ctx['__$anflg672'] = __r0;
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
        var _$5dyctx = __$ctx.ctx;
        _$5dyctx.mods = $$mods = __$ctx.extend({
            theme: 'ffffff',
            autoclosable: 'yes',
            adaptive: 'yes',
            animate: 'yes'
        }, $$mods);
        if (_$5dyctx.zIndex) {
            var _$5dyattrs = _$5dyctx.attrs || (_$5dyctx.attrs = {});
            _$5dyattrs.style = (_$5dyattrs.style || '') + ';z-index:' + _$5dyctx.zIndex + ';';
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
                var _$5ekattrs = [
                        'id',
                        'name',
                        'tabindex'
                    ], _$5ekprop = {}, _$5ekp;
                while (_$5ekp = _$5ekattrs.pop()) {
                    __$ctx._controlAttrs[_$5ekp] && (_$5ekprop[_$5ekp] = __$ctx._controlAttrs[_$5ekp]);
                }
                $$mods.disabled === 'yes' && (_$5ekprop.disabled = 'disabled');
                _$5ekprop.tabindex = -1;
                _$5ekprop['aria-hidden'] = true;
                return __$ctx.ctx.controlAttrs || _$5ekprop;
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
        if (!(__$ctx['__$anflg676'] !== true) === false) {
            var __r0, __r1;
            var _$5efa = ('', __r0 = __$ctx['__$anflg676'], __$ctx['__$anflg676'] = true, __r1 = $50(__$ctx), __$ctx['__$anflg676'] = __r0, '', __r1) || {};
            if ((__$ctx.ctx.elemMods || {}).label === 'yes') {
                _$5efa.id = __$ctx._labelId;
                _$5efa['aria-hidden'] = true;
            } else {
                undefined;
            }
            return _$5efa;
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
        if (!(__$ctx['__$anflg674'] !== true) === false) {
            if (!__$ctx.ctx.url === false) {
                if (!!$$elem === false) {
                    var __r0, __r1;
                    var _$5e6ctx = __$ctx.ctx, _$5e6p = ('', __r0 = __$ctx['__$anflg674'], __$ctx['__$anflg674'] = true, __r1 = $57(__$ctx), __$ctx['__$anflg674'] = __r0, '', __r1), _$5e6a = { href: _$5e6ctx.url };
                    _$5e6ctx.target && (_$5e6a.target = _$5e6ctx.target);
                    $$mods.disabled && (_$5e6a['aria-disabled'] = true);
                    return __$ctx._.extend(_$5e6p, _$5e6a);
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
        if (!(__$ctx['__$anflg673'] !== true) === false) {
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
        var _$5e5ctx = __$ctx.ctx, _$5e5p = ('', __r0 = __$ctx['__$anflg673'], __$ctx['__$anflg673'] = true, __r1 = $57(__$ctx), __$ctx['__$anflg673'] = __r0, '', __r1), _$5e5a = { type: _$5e5ctx.type || 'button' }, _$5e5props = [
                'name',
                'value'
            ], _$5e5i;
        while (_$5e5i = _$5e5props.shift()) {
            _$5e5ctx[_$5e5i] && (_$5e5a[_$5e5i] = _$5e5ctx[_$5e5i]);
        }
        $$mods.disabled && (_$5e5a.disabled = 'disabled');
        return __$ctx._.extend(_$5e5p, _$5e5a);
        return;
    }
    function $81(__$ctx) {
        if (!true === false) {
            if (!!$$elem === false) {
                var _$5e4ctx = __$ctx.ctx, _$5e4a = { role: 'button' };
                _$5e4ctx.tabindex && (_$5e4a.tabindex = _$5e4ctx.tabindex);
                return _$5e4a;
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
        function _$5dofollow() {
            if (this.ctx.link === 'no-follow') {
                return undefined;
            } else {
                undefined;
            }
            var data = this._links[this.ctx.link];
            return '', __r0 = this.ctx, this.ctx = data, __r1 = $1(__$ctx), this.ctx = __r0, '', __r1;
        }
        if (!cache || !__$ctx._cacheLog) {
            return _$5dofollow.call(__$ctx);
        } else {
            undefined;
        }
        var _$5docontents = __$ctx._buf.slice(__$ctx._cachePos).join('');
        __$ctx._cachePos = __$ctx._buf.length;
        __$ctx._cacheLog.push(_$5docontents, {
            log: __$ctx._localLog.slice(),
            link: __$ctx.ctx.link
        });
        var _$5dores = _$5dofollow.call(__$ctx);
        __$ctx._cachePos = __$ctx._buf.length;
        return _$5dores;
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
        var _$5dncached;
        function _$5dnsetProperty(obj, key, value) {
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
        if (_$5dncached = cache.get(__$ctx.ctx.cache)) {
            var _$5dnoldLinks = __$ctx._links;
            if (__$ctx.ctx.links) {
                __$ctx._links = __$ctx.ctx.links;
            } else {
                undefined;
            }
            for (var _$5dni = 0; _$5dni < _$5dncached.log.length; _$5dni++) {
                if (typeof _$5dncached.log[_$5dni] === 'string') {
                    __$ctx._buf.push(_$5dncached.log[_$5dni]);
                    continue;
                } else {
                    undefined;
                }
                var _$5dnlog = _$5dncached.log[_$5dni], _$5dnreverseLog;
                _$5dnreverseLog = _$5dnlog.log.map(function (entry) {
                    return {
                        key: entry[0],
                        value: _$5dnsetProperty(this, entry[0], entry[1])
                    };
                }, __$ctx).reverse();
                {
                    '';
                    var __r0 = __$ctx.ctx, __r1 = __r0.cache;
                    __r0.cache = null;
                    var __r2 = __$ctx._cacheLog;
                    __$ctx._cacheLog = null;
                    var __r3 = __$ctx.ctx, __r4 = __r3.link;
                    __r3.link = _$5dnlog.link;
                    $1(__$ctx);
                    __r0.cache = __r1;
                    __$ctx._cacheLog = __r2;
                    __r3.link = __r4;
                    '';
                }
                undefined;
                _$5dnreverseLog.forEach(function (entry) {
                    _$5dnsetProperty(this, entry.key, entry.value);
                }, __$ctx);
            }
            __$ctx._links = _$5dnoldLinks;
            return _$5dncached.res;
        } else {
            undefined;
        }
        var _$5dncacheLog = [], _$5dnres;
        {
            '';
            var __r5 = __$ctx.ctx, __r6 = __r5.cache;
            __r5.cache = null;
            var __r7 = __$ctx._cachePos;
            __$ctx._cachePos = __$ctx._buf.length;
            var __r8 = __$ctx._cacheLog;
            __$ctx._cacheLog = _$5dncacheLog;
            var __r9 = __$ctx._localLog;
            __$ctx._localLog = [];
            {
                _$5dnres = $1(__$ctx);
                var _$5dntail = __$ctx._buf.slice(__$ctx._cachePos).join('');
                if (_$5dntail) {
                    _$5dncacheLog.push(_$5dntail);
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
            log: _$5dncacheLog,
            res: _$5dnres
        });
        return _$5dnres;
        return;
    }
    function $197(__$ctx) {
        var __t = $$mode;
        if (__t === 'default') {
            return $199(__$ctx);
        } else if (__t === '') {
            if (!__$ctx._.isSimple(__$ctx.ctx) === false) {
                __$ctx._listLength--;
                var _$5dlctx = __$ctx.ctx;
                (_$5dlctx && _$5dlctx !== true || _$5dlctx === 0) && __$ctx._buf.push(_$5dlctx);
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
        var _$5dmBEM_ = __$ctx.BEM, _$5dmv = __$ctx.ctx, _$5dmbuf = __$ctx._buf, _$5dmtag;
        _$5dmtag = ('', __r0 = $$mode, $$mode = 'tag', __r1 = $91(__$ctx), $$mode = __r0, '', __r1);
        typeof _$5dmtag != 'undefined' || (_$5dmtag = _$5dmv.tag);
        typeof _$5dmtag != 'undefined' || (_$5dmtag = 'div');
        if (_$5dmtag) {
            var _$5dmjsParams, _$5dmjs;
            if ($$block && _$5dmv.js !== false) {
                _$5dmjs = ('', __r4 = $$mode, $$mode = 'js', __r5 = $130(__$ctx), $$mode = __r4, '', __r5);
                _$5dmjs = _$5dmjs ? __$ctx._.extend(_$5dmv.js, _$5dmjs === true ? {} : _$5dmjs) : _$5dmv.js === true ? {} : _$5dmv.js;
                _$5dmjs && ((_$5dmjsParams = {})[_$5dmBEM_.INTERNAL.buildClass($$block, _$5dmv.elem)] = _$5dmjs);
            } else {
                undefined;
            }
            _$5dmbuf.push('<', _$5dmtag);
            var _$5dmisBEM = ('', __r6 = $$mode, $$mode = 'bem', __r7 = $156(__$ctx), $$mode = __r6, '', __r7);
            typeof _$5dmisBEM != 'undefined' || (_$5dmisBEM = typeof _$5dmv.bem != 'undefined' ? _$5dmv.bem : _$5dmv.block || _$5dmv.elem);
            var _$5dmcls = ('', __r8 = $$mode, $$mode = 'cls', __r9 = $156(__$ctx), $$mode = __r8, '', __r9);
            _$5dmcls || (_$5dmcls = _$5dmv.cls);
            var _$5dmaddJSInitClass = _$5dmv.block && _$5dmjsParams;
            if (_$5dmisBEM || _$5dmcls) {
                _$5dmbuf.push(' class="');
                if (_$5dmisBEM) {
                    _$5dmBEM_.INTERNAL.buildClasses($$block, _$5dmv.elem, _$5dmv.elemMods || _$5dmv.mods, _$5dmbuf);
                    var _$5dmmix = ('', __r10 = $$mode, $$mode = 'mix', __r11 = $119(__$ctx), $$mode = __r10, '', __r11);
                    _$5dmv.mix && (_$5dmmix = _$5dmmix ? _$5dmmix.concat(_$5dmv.mix) : _$5dmv.mix);
                    if (_$5dmmix) {
                        var _$5dmvisited = {};
                        function _$5dmvisitedKey(block, elem) {
                            return (block || '') + '__' + (elem || '');
                        }
                        _$5dmvisited[_$5dmvisitedKey($$block, $$elem)] = true;
                        if (!__$ctx._.isArray(_$5dmmix)) {
                            _$5dmmix = [_$5dmmix];
                        } else {
                            undefined;
                        }
                        for (var _$5dmi = 0; _$5dmi < _$5dmmix.length; _$5dmi++) {
                            var _$5dmmixItem = _$5dmmix[_$5dmi];
                            if (!_$5dmmixItem) {
                                continue;
                            } else {
                                undefined;
                            }
                            var _$5dmhasItem = _$5dmmixItem.block || _$5dmmixItem.elem, _$5dmblock = _$5dmmixItem.block || _$5dmmixItem._block || $$block, _$5dmelem = _$5dmmixItem.elem || _$5dmmixItem._elem || $$elem, _$5dmmods = _$5dmmixItem.mods || $$mods, _$5dmelemMods = _$5dmmixItem.elemMods || {};
                            _$5dmhasItem && _$5dmbuf.push(' ');
                            _$5dmBEM_.INTERNAL[_$5dmhasItem ? 'buildClasses' : 'buildModsClasses'](_$5dmblock, _$5dmmixItem.elem || _$5dmmixItem._elem || (_$5dmmixItem.block ? undefined : $$elem), _$5dmmixItem.elemMods || _$5dmmixItem.mods, _$5dmbuf);
                            if (_$5dmmixItem.js) {
                                (_$5dmjsParams || (_$5dmjsParams = {}))[_$5dmBEM_.INTERNAL.buildClass(_$5dmblock, _$5dmmixItem.elem)] = _$5dmmixItem.js === true ? {} : _$5dmmixItem.js;
                                _$5dmaddJSInitClass || (_$5dmaddJSInitClass = _$5dmblock && !_$5dmmixItem.elem);
                            } else {
                                undefined;
                            }
                            if (_$5dmhasItem && !_$5dmvisited[_$5dmvisitedKey(_$5dmblock, _$5dmelem)]) {
                                _$5dmvisited[_$5dmvisitedKey(_$5dmblock, _$5dmelem)] = true;
                                var _$5dmnestedMix = ('', __r12 = $$block, $$block = _$5dmblock, __r13 = $$elem, $$elem = _$5dmelem, __r14 = $$mods, $$mods = _$5dmmods, __r15 = $$elemMods, $$elemMods = _$5dmelemMods, __r16 = $$mode, $$mode = 'mix', __r17 = $119(__$ctx), $$block = __r12, $$elem = __r13, $$mods = __r14, $$elemMods = __r15, $$mode = __r16, '', __r17);
                                if (_$5dmnestedMix) {
                                    for (var _$5dmj = 0; _$5dmj < _$5dmnestedMix.length; _$5dmj++) {
                                        var _$5dmnestedItem = _$5dmnestedMix[_$5dmj];
                                        if (!_$5dmnestedItem.block && !_$5dmnestedItem.elem || !_$5dmvisited[_$5dmvisitedKey(_$5dmnestedItem.block, _$5dmnestedItem.elem)]) {
                                            _$5dmnestedItem._block = _$5dmblock;
                                            _$5dmnestedItem._elem = _$5dmelem;
                                            _$5dmmix.splice(_$5dmi + 1, 0, _$5dmnestedItem);
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
                _$5dmcls && _$5dmbuf.push(_$5dmisBEM ? ' ' : '', _$5dmcls);
                _$5dmaddJSInitClass && _$5dmbuf.push(' i-bem');
                _$5dmbuf.push('"');
            } else {
                undefined;
            }
            if (_$5dmjsParams) {
                var _$5dmjsAttr = ('', __r20 = $$mode, $$mode = 'jsAttr', __r21 = $156(__$ctx), $$mode = __r20, '', __r21);
                _$5dmbuf.push(' ', _$5dmjsAttr || 'data-bem', '="', __$ctx._.attrEscape(JSON.stringify(_$5dmjsParams)), '"');
            } else {
                undefined;
            }
            var _$5dmattrs = ('', __r22 = $$mode, $$mode = 'attrs', __r23 = $44(__$ctx), $$mode = __r22, '', __r23);
            _$5dmattrs = __$ctx._.extend(_$5dmattrs, _$5dmv.attrs);
            if (_$5dmattrs) {
                var _$5dmname;
                for (_$5dmname in _$5dmattrs) {
                    if (_$5dmattrs[_$5dmname] === undefined) {
                        continue;
                    } else {
                        undefined;
                    }
                    _$5dmbuf.push(' ', _$5dmname, '="', __$ctx._.attrEscape(_$5dmattrs[_$5dmname]), '"');
                }
            } else {
                undefined;
            }
        } else {
            undefined;
        }
        if (__$ctx._.isShortTag(_$5dmtag)) {
            _$5dmbuf.push('/>');
        } else {
            _$5dmtag && _$5dmbuf.push('>');
            var _$5dmcontent = ('', __r24 = $$mode, $$mode = 'content', __r25 = $143(__$ctx), $$mode = __r24, '', __r25);
            if (_$5dmcontent || _$5dmcontent === 0) {
                var _$5dmisBEM = $$block || $$elem;
                {
                    '';
                    var __r26 = __$ctx._notNewList;
                    __$ctx._notNewList = false;
                    var __r27 = __$ctx.position;
                    __$ctx.position = _$5dmisBEM ? 1 : __$ctx.position;
                    var __r28 = __$ctx._listLength;
                    __$ctx._listLength = _$5dmisBEM ? 1 : __$ctx._listLength;
                    var __r29 = __$ctx.ctx;
                    __$ctx.ctx = _$5dmcontent;
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
            _$5dmtag && _$5dmbuf.push('</', _$5dmtag, '>');
        }
        return;
    }
    function $208(__$ctx) {
        var _$5djv = __$ctx.ctx, _$5djl = _$5djv.length, _$5dji = 0, _$5djprevPos = __$ctx.position, _$5djprevNotNewList = __$ctx._notNewList;
        if (_$5djprevNotNewList) {
            __$ctx._listLength += _$5djl - 1;
        } else {
            __$ctx.position = 0;
            __$ctx._listLength = _$5djl;
        }
        __$ctx._notNewList = true;
        while (_$5dji < _$5djl) {
            var _$5djnewCtx = _$5djv[_$5dji++];
            {
                '';
                var __r0 = __$ctx.ctx;
                __$ctx.ctx = _$5djnewCtx == null ? '' : _$5djnewCtx;
                $156(__$ctx);
                __$ctx.ctx = __r0;
                '';
            }
            undefined;
        }
        _$5djprevNotNewList || (__$ctx.position = _$5djprevPos);
        return;
    }
    function $211(__$ctx) {
        var _$5divBlock = __$ctx.ctx.block, _$5divElem = __$ctx.ctx.elem, _$5diblock = __$ctx._currBlock || $$block;
        __$ctx.ctx || (__$ctx.ctx = {});
        {
            '';
            var __r0 = $$mode;
            $$mode = 'default';
            var __r1 = __$ctx._links;
            __$ctx._links = __$ctx.ctx.links || __$ctx._links;
            var __r2 = $$block;
            $$block = _$5divBlock || (_$5divElem ? _$5diblock : undefined);
            var __r3 = __$ctx._currBlock;
            __$ctx._currBlock = _$5divBlock || _$5divElem ? undefined : _$5diblock;
            var __r4 = $$elem;
            $$elem = __$ctx.ctx.elem;
            var __r5 = $$mods;
            $$mods = (_$5divBlock ? __$ctx.ctx.mods : $$mods) || {};
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
/*borschik:include:../../../../common.blocks/button/button.js*/;
/*borschik:include:../../../../touch.blocks/button/button.js*/;
/*borschik:include:../../../../common.blocks/popup/popup.js*/;
/*borschik:include:../../../../common.blocks/popup/_autoclosable/popup_autoclosable_yes.js*/;
/*borschik:include:../../../../common.blocks/popup/_adaptive/popup_adaptive_yes.js*/;
/*borschik:include:../../../../common.blocks/popup/_animate/popup_animate_yes.js*/;
/*borschik:include:../../../../common.blocks/popup/__under/popup__under.js*/;
/*borschik:include:../../../../touch.blocks/popup/__under/popup__under.js*/;
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


BEM.I18N.lang('en');
