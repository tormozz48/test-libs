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
        if (!(__$ctx['__$anflg741'] !== true) === false) {
            {
                '';
                var __r0 = __$ctx['__$anflg741'];
                __$ctx['__$anflg741'] = true;
                {
                    '';
                    var __r1 = __$ctx._labelId;
                    __$ctx._labelId = __$ctx.generateId();
                    $4(__$ctx);
                    __$ctx._labelId = __r1;
                    '';
                }
                __$ctx['__$anflg741'] = __r0;
                '';
            }
            undefined;
            return;
        } else {
            return $9(__$ctx);
        }
    }
    function $9(__$ctx) {
        if (!(__$ctx['__$anflg738'] !== true) === false) {
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
        var _$5oictx = __$ctx.ctx, _$5oiid = _$5oictx.id || __$ctx.generateId();
        {
            '';
            var __r0 = __$ctx['__$anflg738'];
            __$ctx['__$anflg738'] = true;
            {
                '';
                var __r1 = __$ctx._controlAttrs;
                __$ctx._controlAttrs = {
                    id: _$5oiid,
                    name: _$5oictx.name || _$5oiid,
                    tabindex: _$5oictx.tabindex
                };
                var __r2 = __$ctx._formSelect;
                __$ctx._formSelect = {
                    block: $$block,
                    mods: $$mods,
                    tabindex: _$5oictx.tabindex
                };
                $3(__$ctx);
                __$ctx._controlAttrs = __r1;
                __$ctx._formSelect = __r2;
                '';
            }
            __$ctx['__$anflg738'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $17(__$ctx) {
        if (!(__$ctx['__$anflg740'] !== true) === false) {
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
        var _$5oqctx = __$ctx.ctx, _$5oqselectMods = __$ctx._formSelect.mods, _$5oqtabindex = __$ctx._formSelect.tabindex, _$5oqm = _$5oqctx.mods || {};
        _$5oqm.arrow = 'down';
        _$5oqselectMods.theme && (_$5oqm.theme = _$5oqselectMods.theme);
        _$5oqselectMods.size && (_$5oqm.size = _$5oqselectMods.size);
        _$5oqselectMods.disabled === 'yes' && (_$5oqm.disabled = 'yes');
        _$5oqctx.mods = _$5oqm;
        _$5oqtabindex && (_$5oqctx.tabindex = _$5oqtabindex);
        {
            '';
            var __r0 = __$ctx['__$anflg740'];
            __$ctx['__$anflg740'] = true;
            {
                '';
                var __r1 = __$ctx.ctx, __r2 = __r1._theme;
                __r1._theme = true;
                $17(__$ctx);
                __r1._theme = __r2;
                '';
            }
            __$ctx['__$anflg740'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $26(__$ctx) {
        if (!(__$ctx['__$anflg735'] !== true) === false) {
            if (!!$$elem === false) {
                var _$5odmods = __$ctx.ctx.mods || {};
                _$5odmods.theme = _$5odmods.theme || 'normal';
                {
                    '';
                    var __r0 = __$ctx['__$anflg735'];
                    __$ctx['__$anflg735'] = true;
                    {
                        '';
                        var __r1 = __$ctx.ctx, __r2 = __r1.mods;
                        __r1.mods = _$5odmods;
                        $17(__$ctx);
                        __r1.mods = __r2;
                        '';
                    }
                    __$ctx['__$anflg735'] = __r0;
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
        var _$5o7ctx = __$ctx.ctx;
        _$5o7ctx.mods = $$mods = __$ctx.extend({
            theme: 'ffffff',
            autoclosable: 'yes',
            adaptive: 'yes',
            animate: 'yes'
        }, $$mods);
        if (_$5o7ctx.zIndex) {
            var _$5o7attrs = _$5o7ctx.attrs || (_$5o7ctx.attrs = {});
            _$5o7attrs.style = (_$5o7attrs.style || '') + ';z-index:' + _$5o7ctx.zIndex + ';';
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
                var _$5otattrs = [
                        'id',
                        'name',
                        'tabindex'
                    ], _$5otprop = {}, _$5otp;
                while (_$5otp = _$5otattrs.pop()) {
                    __$ctx._controlAttrs[_$5otp] && (_$5otprop[_$5otp] = __$ctx._controlAttrs[_$5otp]);
                }
                $$mods.disabled === 'yes' && (_$5otprop.disabled = 'disabled');
                _$5otprop.tabindex = -1;
                _$5otprop['aria-hidden'] = true;
                return __$ctx.ctx.controlAttrs || _$5otprop;
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
        if (!(__$ctx['__$anflg739'] !== true) === false) {
            var __r0, __r1;
            var _$5ooa = ('', __r0 = __$ctx['__$anflg739'], __$ctx['__$anflg739'] = true, __r1 = $50(__$ctx), __$ctx['__$anflg739'] = __r0, '', __r1) || {};
            if ((__$ctx.ctx.elemMods || {}).label === 'yes') {
                _$5ooa.id = __$ctx._labelId;
                _$5ooa['aria-hidden'] = true;
            } else {
                undefined;
            }
            return _$5ooa;
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
        if (!(__$ctx['__$anflg737'] !== true) === false) {
            if (!__$ctx.ctx.url === false) {
                if (!!$$elem === false) {
                    var __r0, __r1;
                    var _$5ogctx = __$ctx.ctx, _$5ogp = ('', __r0 = __$ctx['__$anflg737'], __$ctx['__$anflg737'] = true, __r1 = $57(__$ctx), __$ctx['__$anflg737'] = __r0, '', __r1), _$5oga = { href: _$5ogctx.url };
                    _$5ogctx.target && (_$5oga.target = _$5ogctx.target);
                    $$mods.disabled && (_$5oga['aria-disabled'] = true);
                    return __$ctx._.extend(_$5ogp, _$5oga);
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
        if (!(__$ctx['__$anflg736'] !== true) === false) {
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
        var _$5ofctx = __$ctx.ctx, _$5ofp = ('', __r0 = __$ctx['__$anflg736'], __$ctx['__$anflg736'] = true, __r1 = $57(__$ctx), __$ctx['__$anflg736'] = __r0, '', __r1), _$5ofa = { type: _$5ofctx.type || 'button' }, _$5ofprops = [
                'name',
                'value'
            ], _$5ofi;
        while (_$5ofi = _$5ofprops.shift()) {
            _$5ofctx[_$5ofi] && (_$5ofa[_$5ofi] = _$5ofctx[_$5ofi]);
        }
        $$mods.disabled && (_$5ofa.disabled = 'disabled');
        return __$ctx._.extend(_$5ofp, _$5ofa);
        return;
    }
    function $81(__$ctx) {
        if (!true === false) {
            if (!!$$elem === false) {
                var _$5oectx = __$ctx.ctx, _$5oea = { role: 'button' };
                _$5oectx.tabindex && (_$5oea.tabindex = _$5oectx.tabindex);
                return _$5oea;
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
        function _$5nxfollow() {
            if (this.ctx.link === 'no-follow') {
                return undefined;
            } else {
                undefined;
            }
            var data = this._links[this.ctx.link];
            return '', __r0 = this.ctx, this.ctx = data, __r1 = $1(__$ctx), this.ctx = __r0, '', __r1;
        }
        if (!cache || !__$ctx._cacheLog) {
            return _$5nxfollow.call(__$ctx);
        } else {
            undefined;
        }
        var _$5nxcontents = __$ctx._buf.slice(__$ctx._cachePos).join('');
        __$ctx._cachePos = __$ctx._buf.length;
        __$ctx._cacheLog.push(_$5nxcontents, {
            log: __$ctx._localLog.slice(),
            link: __$ctx.ctx.link
        });
        var _$5nxres = _$5nxfollow.call(__$ctx);
        __$ctx._cachePos = __$ctx._buf.length;
        return _$5nxres;
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
        var _$5nwcached;
        function _$5nwsetProperty(obj, key, value) {
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
        if (_$5nwcached = cache.get(__$ctx.ctx.cache)) {
            var _$5nwoldLinks = __$ctx._links;
            if (__$ctx.ctx.links) {
                __$ctx._links = __$ctx.ctx.links;
            } else {
                undefined;
            }
            for (var _$5nwi = 0; _$5nwi < _$5nwcached.log.length; _$5nwi++) {
                if (typeof _$5nwcached.log[_$5nwi] === 'string') {
                    __$ctx._buf.push(_$5nwcached.log[_$5nwi]);
                    continue;
                } else {
                    undefined;
                }
                var _$5nwlog = _$5nwcached.log[_$5nwi], _$5nwreverseLog;
                _$5nwreverseLog = _$5nwlog.log.map(function (entry) {
                    return {
                        key: entry[0],
                        value: _$5nwsetProperty(this, entry[0], entry[1])
                    };
                }, __$ctx).reverse();
                {
                    '';
                    var __r0 = __$ctx.ctx, __r1 = __r0.cache;
                    __r0.cache = null;
                    var __r2 = __$ctx._cacheLog;
                    __$ctx._cacheLog = null;
                    var __r3 = __$ctx.ctx, __r4 = __r3.link;
                    __r3.link = _$5nwlog.link;
                    $1(__$ctx);
                    __r0.cache = __r1;
                    __$ctx._cacheLog = __r2;
                    __r3.link = __r4;
                    '';
                }
                undefined;
                _$5nwreverseLog.forEach(function (entry) {
                    _$5nwsetProperty(this, entry.key, entry.value);
                }, __$ctx);
            }
            __$ctx._links = _$5nwoldLinks;
            return _$5nwcached.res;
        } else {
            undefined;
        }
        var _$5nwcacheLog = [], _$5nwres;
        {
            '';
            var __r5 = __$ctx.ctx, __r6 = __r5.cache;
            __r5.cache = null;
            var __r7 = __$ctx._cachePos;
            __$ctx._cachePos = __$ctx._buf.length;
            var __r8 = __$ctx._cacheLog;
            __$ctx._cacheLog = _$5nwcacheLog;
            var __r9 = __$ctx._localLog;
            __$ctx._localLog = [];
            {
                _$5nwres = $1(__$ctx);
                var _$5nwtail = __$ctx._buf.slice(__$ctx._cachePos).join('');
                if (_$5nwtail) {
                    _$5nwcacheLog.push(_$5nwtail);
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
            log: _$5nwcacheLog,
            res: _$5nwres
        });
        return _$5nwres;
        return;
    }
    function $197(__$ctx) {
        var __t = $$mode;
        if (__t === 'default') {
            return $199(__$ctx);
        } else if (__t === '') {
            if (!__$ctx._.isSimple(__$ctx.ctx) === false) {
                __$ctx._listLength--;
                var _$5nuctx = __$ctx.ctx;
                (_$5nuctx && _$5nuctx !== true || _$5nuctx === 0) && __$ctx._buf.push(_$5nuctx);
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
        var _$5nvBEM_ = __$ctx.BEM, _$5nvv = __$ctx.ctx, _$5nvbuf = __$ctx._buf, _$5nvtag;
        _$5nvtag = ('', __r0 = $$mode, $$mode = 'tag', __r1 = $91(__$ctx), $$mode = __r0, '', __r1);
        typeof _$5nvtag != 'undefined' || (_$5nvtag = _$5nvv.tag);
        typeof _$5nvtag != 'undefined' || (_$5nvtag = 'div');
        if (_$5nvtag) {
            var _$5nvjsParams, _$5nvjs;
            if ($$block && _$5nvv.js !== false) {
                _$5nvjs = ('', __r4 = $$mode, $$mode = 'js', __r5 = $130(__$ctx), $$mode = __r4, '', __r5);
                _$5nvjs = _$5nvjs ? __$ctx._.extend(_$5nvv.js, _$5nvjs === true ? {} : _$5nvjs) : _$5nvv.js === true ? {} : _$5nvv.js;
                _$5nvjs && ((_$5nvjsParams = {})[_$5nvBEM_.INTERNAL.buildClass($$block, _$5nvv.elem)] = _$5nvjs);
            } else {
                undefined;
            }
            _$5nvbuf.push('<', _$5nvtag);
            var _$5nvisBEM = ('', __r6 = $$mode, $$mode = 'bem', __r7 = $156(__$ctx), $$mode = __r6, '', __r7);
            typeof _$5nvisBEM != 'undefined' || (_$5nvisBEM = typeof _$5nvv.bem != 'undefined' ? _$5nvv.bem : _$5nvv.block || _$5nvv.elem);
            var _$5nvcls = ('', __r8 = $$mode, $$mode = 'cls', __r9 = $156(__$ctx), $$mode = __r8, '', __r9);
            _$5nvcls || (_$5nvcls = _$5nvv.cls);
            var _$5nvaddJSInitClass = _$5nvv.block && _$5nvjsParams;
            if (_$5nvisBEM || _$5nvcls) {
                _$5nvbuf.push(' class="');
                if (_$5nvisBEM) {
                    _$5nvBEM_.INTERNAL.buildClasses($$block, _$5nvv.elem, _$5nvv.elemMods || _$5nvv.mods, _$5nvbuf);
                    var _$5nvmix = ('', __r10 = $$mode, $$mode = 'mix', __r11 = $119(__$ctx), $$mode = __r10, '', __r11);
                    _$5nvv.mix && (_$5nvmix = _$5nvmix ? _$5nvmix.concat(_$5nvv.mix) : _$5nvv.mix);
                    if (_$5nvmix) {
                        var _$5nvvisited = {};
                        function _$5nvvisitedKey(block, elem) {
                            return (block || '') + '__' + (elem || '');
                        }
                        _$5nvvisited[_$5nvvisitedKey($$block, $$elem)] = true;
                        if (!__$ctx._.isArray(_$5nvmix)) {
                            _$5nvmix = [_$5nvmix];
                        } else {
                            undefined;
                        }
                        for (var _$5nvi = 0; _$5nvi < _$5nvmix.length; _$5nvi++) {
                            var _$5nvmixItem = _$5nvmix[_$5nvi];
                            if (!_$5nvmixItem) {
                                continue;
                            } else {
                                undefined;
                            }
                            var _$5nvhasItem = _$5nvmixItem.block || _$5nvmixItem.elem, _$5nvblock = _$5nvmixItem.block || _$5nvmixItem._block || $$block, _$5nvelem = _$5nvmixItem.elem || _$5nvmixItem._elem || $$elem, _$5nvmods = _$5nvmixItem.mods || $$mods, _$5nvelemMods = _$5nvmixItem.elemMods || {};
                            _$5nvhasItem && _$5nvbuf.push(' ');
                            _$5nvBEM_.INTERNAL[_$5nvhasItem ? 'buildClasses' : 'buildModsClasses'](_$5nvblock, _$5nvmixItem.elem || _$5nvmixItem._elem || (_$5nvmixItem.block ? undefined : $$elem), _$5nvmixItem.elemMods || _$5nvmixItem.mods, _$5nvbuf);
                            if (_$5nvmixItem.js) {
                                (_$5nvjsParams || (_$5nvjsParams = {}))[_$5nvBEM_.INTERNAL.buildClass(_$5nvblock, _$5nvmixItem.elem)] = _$5nvmixItem.js === true ? {} : _$5nvmixItem.js;
                                _$5nvaddJSInitClass || (_$5nvaddJSInitClass = _$5nvblock && !_$5nvmixItem.elem);
                            } else {
                                undefined;
                            }
                            if (_$5nvhasItem && !_$5nvvisited[_$5nvvisitedKey(_$5nvblock, _$5nvelem)]) {
                                _$5nvvisited[_$5nvvisitedKey(_$5nvblock, _$5nvelem)] = true;
                                var _$5nvnestedMix = ('', __r12 = $$block, $$block = _$5nvblock, __r13 = $$elem, $$elem = _$5nvelem, __r14 = $$mods, $$mods = _$5nvmods, __r15 = $$elemMods, $$elemMods = _$5nvelemMods, __r16 = $$mode, $$mode = 'mix', __r17 = $119(__$ctx), $$block = __r12, $$elem = __r13, $$mods = __r14, $$elemMods = __r15, $$mode = __r16, '', __r17);
                                if (_$5nvnestedMix) {
                                    for (var _$5nvj = 0; _$5nvj < _$5nvnestedMix.length; _$5nvj++) {
                                        var _$5nvnestedItem = _$5nvnestedMix[_$5nvj];
                                        if (!_$5nvnestedItem.block && !_$5nvnestedItem.elem || !_$5nvvisited[_$5nvvisitedKey(_$5nvnestedItem.block, _$5nvnestedItem.elem)]) {
                                            _$5nvnestedItem._block = _$5nvblock;
                                            _$5nvnestedItem._elem = _$5nvelem;
                                            _$5nvmix.splice(_$5nvi + 1, 0, _$5nvnestedItem);
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
                _$5nvcls && _$5nvbuf.push(_$5nvisBEM ? ' ' : '', _$5nvcls);
                _$5nvaddJSInitClass && _$5nvbuf.push(' i-bem');
                _$5nvbuf.push('"');
            } else {
                undefined;
            }
            if (_$5nvjsParams) {
                var _$5nvjsAttr = ('', __r20 = $$mode, $$mode = 'jsAttr', __r21 = $156(__$ctx), $$mode = __r20, '', __r21);
                _$5nvbuf.push(' ', _$5nvjsAttr || 'data-bem', '="', __$ctx._.attrEscape(JSON.stringify(_$5nvjsParams)), '"');
            } else {
                undefined;
            }
            var _$5nvattrs = ('', __r22 = $$mode, $$mode = 'attrs', __r23 = $44(__$ctx), $$mode = __r22, '', __r23);
            _$5nvattrs = __$ctx._.extend(_$5nvattrs, _$5nvv.attrs);
            if (_$5nvattrs) {
                var _$5nvname;
                for (_$5nvname in _$5nvattrs) {
                    if (_$5nvattrs[_$5nvname] === undefined) {
                        continue;
                    } else {
                        undefined;
                    }
                    _$5nvbuf.push(' ', _$5nvname, '="', __$ctx._.attrEscape(_$5nvattrs[_$5nvname]), '"');
                }
            } else {
                undefined;
            }
        } else {
            undefined;
        }
        if (__$ctx._.isShortTag(_$5nvtag)) {
            _$5nvbuf.push('/>');
        } else {
            _$5nvtag && _$5nvbuf.push('>');
            var _$5nvcontent = ('', __r24 = $$mode, $$mode = 'content', __r25 = $143(__$ctx), $$mode = __r24, '', __r25);
            if (_$5nvcontent || _$5nvcontent === 0) {
                var _$5nvisBEM = $$block || $$elem;
                {
                    '';
                    var __r26 = __$ctx._notNewList;
                    __$ctx._notNewList = false;
                    var __r27 = __$ctx.position;
                    __$ctx.position = _$5nvisBEM ? 1 : __$ctx.position;
                    var __r28 = __$ctx._listLength;
                    __$ctx._listLength = _$5nvisBEM ? 1 : __$ctx._listLength;
                    var __r29 = __$ctx.ctx;
                    __$ctx.ctx = _$5nvcontent;
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
            _$5nvtag && _$5nvbuf.push('</', _$5nvtag, '>');
        }
        return;
    }
    function $208(__$ctx) {
        var _$5nsv = __$ctx.ctx, _$5nsl = _$5nsv.length, _$5nsi = 0, _$5nsprevPos = __$ctx.position, _$5nsprevNotNewList = __$ctx._notNewList;
        if (_$5nsprevNotNewList) {
            __$ctx._listLength += _$5nsl - 1;
        } else {
            __$ctx.position = 0;
            __$ctx._listLength = _$5nsl;
        }
        __$ctx._notNewList = true;
        while (_$5nsi < _$5nsl) {
            var _$5nsnewCtx = _$5nsv[_$5nsi++];
            {
                '';
                var __r0 = __$ctx.ctx;
                __$ctx.ctx = _$5nsnewCtx == null ? '' : _$5nsnewCtx;
                $156(__$ctx);
                __$ctx.ctx = __r0;
                '';
            }
            undefined;
        }
        _$5nsprevNotNewList || (__$ctx.position = _$5nsprevPos);
        return;
    }
    function $211(__$ctx) {
        var _$5nrvBlock = __$ctx.ctx.block, _$5nrvElem = __$ctx.ctx.elem, _$5nrblock = __$ctx._currBlock || $$block;
        __$ctx.ctx || (__$ctx.ctx = {});
        {
            '';
            var __r0 = $$mode;
            $$mode = 'default';
            var __r1 = __$ctx._links;
            __$ctx._links = __$ctx.ctx.links || __$ctx._links;
            var __r2 = $$block;
            $$block = _$5nrvBlock || (_$5nrvElem ? _$5nrblock : undefined);
            var __r3 = __$ctx._currBlock;
            __$ctx._currBlock = _$5nrvBlock || _$5nrvElem ? undefined : _$5nrblock;
            var __r4 = $$elem;
            $$elem = __$ctx.ctx.elem;
            var __r5 = $$mods;
            $$mods = (_$5nrvBlock ? __$ctx.ctx.mods : $$mods) || {};
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
/*borschik:include:../../../../common.blocks/select/select.examples/52-related.blocks/example/example.js*/;
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


BEM.I18N.lang('tr');
