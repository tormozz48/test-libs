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
                        return $147(__$ctx);
                    }
                } else if (__t === 'ahead') {
                    return [
                        { elem: 'ahead-filler' },
                        { elem: 'ahead-hint' }
                    ];
                    return;
                } else {
                    return $147(__$ctx);
                }
            } else if (__t === 'attrs') {
                var __t = $$elem;
                if (__t === 'clear') {
                    return { unselectable: 'on' };
                    return;
                } else if (__t === 'control') {
                    return $16(__$ctx);
                } else {
                    return $147(__$ctx);
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
                        return $147(__$ctx);
                    }
                }
            } else if (__t === 'default') {
                return $37(__$ctx);
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
                            return $147(__$ctx);
                        }
                    } else {
                        return $147(__$ctx);
                    }
                }
            } else if (__t === 'value') {
                return $65(__$ctx);
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
                    return $147(__$ctx);
                }
            } else {
                return $147(__$ctx);
            }
        } else if (__t === 'slider') {
            var __t = $$mode;
            if (__t === 'mix') {
                if ($$elem === 'body') {
                    return $94(__$ctx);
                } else {
                    return $147(__$ctx);
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
                    return $147(__$ctx);
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
                        return $147(__$ctx);
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
                    return $147(__$ctx);
                }
            } else if (__t === 'default') {
                return $131(__$ctx);
            } else {
                return $147(__$ctx);
            }
        } else {
            return $147(__$ctx);
        }
    }
    function $16(__$ctx) {
        if (!(__$ctx['__$anflg514'] !== true) === false) {
            var __r0, __r1;
            var _$42nctx = __$ctx.ctx, _$42na = __$ctx._.extend(('', __r0 = __$ctx['__$anflg514'], __$ctx['__$anflg514'] = true, __r1 = $16(__$ctx), __$ctx['__$anflg514'] = __r0, '', __r1), {
                    autocomplete: _$42nctx.autocomplete || 'off',
                    autocorrect: _$42nctx.autocorrect || 'off',
                    autocapitalize: _$42nctx.autocapitalize || 'off',
                    spellcheck: _$42nctx.spellcheck || 'false'
                });
            return _$42na;
            return;
        } else {
            var _$42la = __$ctx._.extend({
                    id: __$ctx._inputId,
                    name: __$ctx._name
                }, __$ctx.ctx.controlAttrs);
            (__$ctx._value || __$ctx._value === 0) && (_$42la.value = __$ctx._value);
            $$mods.disabled && (_$42la.disabled = 'disabled');
            _$42la['aria-labelledby'] = __$ctx._labelId + ' ' + __$ctx._hintId;
            return _$42la;
            return;
        }
    }
    function $37(__$ctx) {
        if ($$elem === 'control') {
            if (!(__$ctx['__$anflg513'] !== true) === false) {
                if (!!$$mods.clear === false) {
                    return $41(__$ctx);
                } else {
                    return $46(__$ctx);
                }
            } else {
                return $46(__$ctx);
            }
        } else {
            return $46(__$ctx);
        }
    }
    function $41(__$ctx) {
        {
            '';
            var __r0 = __$ctx['__$anflg513'];
            __$ctx['__$anflg513'] = true;
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
                $164(__$ctx);
                __$ctx.ctx = __r1;
                $$mode = __r2;
                '';
            }
            __$ctx['__$anflg513'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $46(__$ctx) {
        if (!(__$ctx['__$anflg512'] !== true) === false) {
            if (!!$$elem === false) {
                return $49(__$ctx);
            } else {
                return $147(__$ctx);
            }
        } else {
            return $147(__$ctx);
        }
    }
    function $49(__$ctx) {
        var __r0, __r1, __r2;
        var _$42cvalue = ('', __r0 = $$mode, $$mode = 'value', __r1 = __$ctx.ctx, __$ctx.ctx = __$ctx.ctx.value, __r2 = $65(__$ctx), $$mode = __r0, __$ctx.ctx = __r1, '', __r2), _$42cid = __$ctx.ctx.id || __$ctx.generateId(), _$42cmods = __$ctx.ctx.mods || {};
        _$42cmods.theme = _$42cmods.theme || 'normal';
        {
            '';
            var __r3 = __$ctx['__$anflg512'];
            __$ctx['__$anflg512'] = true;
            {
                '';
                var __r4 = __$ctx._inputId;
                __$ctx._inputId = _$42cid;
                var __r5 = __$ctx._labelId;
                __$ctx._labelId = 'label' + _$42cid;
                var __r6 = __$ctx._hintId;
                __$ctx._hintId = 'hint' + _$42cid;
                var __r7 = __$ctx._name;
                __$ctx._name = __$ctx.ctx.name || '';
                var __r8 = __$ctx._value;
                __$ctx._value = _$42cvalue;
                var __r9 = __$ctx._inputLink;
                __$ctx._inputLink = true;
                var __r10 = __$ctx._disabled;
                __$ctx._disabled = $$mods.disabled;
                var __r11 = __$ctx.ctx, __r12 = __r11.mods;
                __r11.mods = _$42cmods;
                $37(__$ctx);
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
            __$ctx['__$anflg512'] = __r3;
            '';
        }
        undefined;
        return;
    }
    function $65(__$ctx) {
        if (!__$ctx.isSimple(__$ctx.ctx) === false) {
            if (!!$$elem === false) {
                return __$ctx.ctx;
                return;
            } else {
                return $71(__$ctx);
            }
        } else {
            return $71(__$ctx);
        }
    }
    function $71(__$ctx) {
        if (!__$ctx.ctx === false) {
            if (!!$$elem === false) {
                var _$42evalue = [];
                {
                    '';
                    var __r0 = __$ctx._buf;
                    __$ctx._buf = _$42evalue;
                    var __r1 = $$mode;
                    $$mode = '';
                    $165(__$ctx);
                    __$ctx._buf = __r0;
                    $$mode = __r1;
                    '';
                }
                undefined;
                return _$42evalue.join('');
                return;
            } else {
                return $77(__$ctx);
            }
        } else {
            return $77(__$ctx);
        }
    }
    function $77(__$ctx) {
        if (!true === false) {
            if (!!$$elem === false) {
                return '';
                return;
            } else {
                return $147(__$ctx);
            }
        } else {
            return $147(__$ctx);
        }
    }
    function $94(__$ctx) {
        if (!(__$ctx['__$anflg511'] !== true) === false) {
            if (!$$mods.orientation === false) {
                if (!!__$ctx.ctx._wOrigin === false) {
                    return $98(__$ctx);
                } else {
                    return $147(__$ctx);
                }
            } else {
                return $147(__$ctx);
            }
        } else {
            return $147(__$ctx);
        }
    }
    function $98(__$ctx) {
        var __r0, __r4, __r1, __r2, __r3;
        var _$429m = ('', __r0 = __$ctx['__$anflg511'], __$ctx['__$anflg511'] = true, __r4 = ('', __r1 = __$ctx.ctx, __r2 = __r1._wOrigin, __r1._wOrigin = true, __r3 = $94(__$ctx), __r1._wOrigin = __r2, '', __r3), __$ctx['__$anflg511'] = __r0, '', __r4) || [];
        _$429m.push({ elemMods: { origin: $$mods.orientation === 'vert' ? 'y' : 'x' } });
        return _$429m;
        return;
    }
    function $131(__$ctx) {
        if ($$elem === 'runner') {
            return $132(__$ctx);
        } else {
            return $137(__$ctx);
        }
    }
    function $132(__$ctx) {
        if (!!__$ctx._done === false) {
            var __r0, __r1, __r2;
            return '', __r0 = __$ctx._value, __$ctx._value = __$ctx.ctx.value, __r1 = __$ctx._done, __$ctx._done = true, __r2 = $132(__$ctx), __$ctx._value = __r0, __$ctx._done = __r1, '', __r2;
            return;
        } else {
            return $137(__$ctx);
        }
    }
    function $137(__$ctx) {
        if (!(__$ctx['__$anflg510'] !== true) === false) {
            if (!!$$elem === false) {
                var _$41zid = __$ctx.generateId();
                {
                    '';
                    var __r0 = __$ctx['__$anflg510'];
                    __$ctx['__$anflg510'] = true;
                    {
                        '';
                        var __r1 = __$ctx._inSlider;
                        __$ctx._inSlider = true;
                        var __r2 = __$ctx._titleId;
                        __$ctx._titleId = 'title' + _$41zid;
                        $131(__$ctx);
                        __$ctx._inSlider = __r1;
                        __$ctx._titleId = __r2;
                        '';
                    }
                    __$ctx['__$anflg510'] = __r0;
                    '';
                }
                return;
            } else {
                return $147(__$ctx);
            }
        } else {
            return $147(__$ctx);
        }
    }
    function $147(__$ctx) {
        var __t = $$mode;
        if (__t === 'content') {
            return __$ctx.ctx.content;
            return;
        } else if (__t === 'mix' || __t === 'bem' || __t === 'jsAttr' || __t === 'js' || __t === 'cls' || __t === 'attrs' || __t === 'tag') {
            return undefined;
            return;
        } else {
            return $164(__$ctx);
        }
    }
    function $164(__$ctx) {
        if (!__$ctx.ctx === false) {
            return $165(__$ctx);
        } else {
            return $173(__$ctx);
        }
    }
    function $165(__$ctx) {
        if (!__$ctx.ctx.link === false) {
            if (!!__$ctx._.isSimple(__$ctx.ctx) === false) {
                return $168(__$ctx);
            } else {
                return $173(__$ctx);
            }
        } else {
            return $173(__$ctx);
        }
    }
    function $168(__$ctx) {
        var __r0, __r1;
        function _$41qfollow() {
            if (this.ctx.link === 'no-follow') {
                return undefined;
            } else {
                undefined;
            }
            var data = this._links[this.ctx.link];
            return '', __r0 = this.ctx, this.ctx = data, __r1 = $1(__$ctx), this.ctx = __r0, '', __r1;
        }
        if (!cache || !__$ctx._cacheLog) {
            return _$41qfollow.call(__$ctx);
        } else {
            undefined;
        }
        var _$41qcontents = __$ctx._buf.slice(__$ctx._cachePos).join('');
        __$ctx._cachePos = __$ctx._buf.length;
        __$ctx._cacheLog.push(_$41qcontents, {
            log: __$ctx._localLog.slice(),
            link: __$ctx.ctx.link
        });
        var _$41qres = _$41qfollow.call(__$ctx);
        __$ctx._cachePos = __$ctx._buf.length;
        return _$41qres;
        return;
    }
    function $173(__$ctx) {
        if (!cache === false) {
            if (!__$ctx.ctx === false) {
                if (!__$ctx.ctx.cache === false) {
                    return $177(__$ctx);
                } else {
                    return $182(__$ctx);
                }
            } else {
                return $182(__$ctx);
            }
        } else {
            return $182(__$ctx);
        }
    }
    function $177(__$ctx) {
        var _$41pcached;
        function _$41psetProperty(obj, key, value) {
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
        if (_$41pcached = cache.get(__$ctx.ctx.cache)) {
            var _$41poldLinks = __$ctx._links;
            if (__$ctx.ctx.links) {
                __$ctx._links = __$ctx.ctx.links;
            } else {
                undefined;
            }
            for (var _$41pi = 0; _$41pi < _$41pcached.log.length; _$41pi++) {
                if (typeof _$41pcached.log[_$41pi] === 'string') {
                    __$ctx._buf.push(_$41pcached.log[_$41pi]);
                    continue;
                } else {
                    undefined;
                }
                var _$41plog = _$41pcached.log[_$41pi], _$41preverseLog;
                _$41preverseLog = _$41plog.log.map(function (entry) {
                    return {
                        key: entry[0],
                        value: _$41psetProperty(this, entry[0], entry[1])
                    };
                }, __$ctx).reverse();
                {
                    '';
                    var __r0 = __$ctx.ctx, __r1 = __r0.cache;
                    __r0.cache = null;
                    var __r2 = __$ctx._cacheLog;
                    __$ctx._cacheLog = null;
                    var __r3 = __$ctx.ctx, __r4 = __r3.link;
                    __r3.link = _$41plog.link;
                    $1(__$ctx);
                    __r0.cache = __r1;
                    __$ctx._cacheLog = __r2;
                    __r3.link = __r4;
                    '';
                }
                undefined;
                _$41preverseLog.forEach(function (entry) {
                    _$41psetProperty(this, entry.key, entry.value);
                }, __$ctx);
            }
            __$ctx._links = _$41poldLinks;
            return _$41pcached.res;
        } else {
            undefined;
        }
        var _$41pcacheLog = [], _$41pres;
        {
            '';
            var __r5 = __$ctx.ctx, __r6 = __r5.cache;
            __r5.cache = null;
            var __r7 = __$ctx._cachePos;
            __$ctx._cachePos = __$ctx._buf.length;
            var __r8 = __$ctx._cacheLog;
            __$ctx._cacheLog = _$41pcacheLog;
            var __r9 = __$ctx._localLog;
            __$ctx._localLog = [];
            {
                _$41pres = $1(__$ctx);
                var _$41ptail = __$ctx._buf.slice(__$ctx._cachePos).join('');
                if (_$41ptail) {
                    _$41pcacheLog.push(_$41ptail);
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
            log: _$41pcacheLog,
            res: _$41pres
        });
        return _$41pres;
        return;
    }
    function $182(__$ctx) {
        var __t = $$mode;
        if (__t === 'default') {
            return $184(__$ctx);
        } else if (__t === '') {
            if (!__$ctx._.isSimple(__$ctx.ctx) === false) {
                __$ctx._listLength--;
                var _$41nctx = __$ctx.ctx;
                (_$41nctx && _$41nctx !== true || _$41nctx === 0) && __$ctx._buf.push(_$41nctx);
                return;
            } else {
                if (!!__$ctx.ctx === false) {
                    __$ctx._listLength--;
                    return;
                } else {
                    if (!__$ctx._.isArray(__$ctx.ctx) === false) {
                        return $193(__$ctx);
                    } else {
                        if (!true === false) {
                            return $196(__$ctx);
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
    function $184(__$ctx) {
        var __r13, __r0, __r4, __r5, __r6, __r7, __r8, __r9, __r10, __r11, __r12, __r1, __r14, __r15, __r16, __r17, __r20, __r21, __r22, __r23, __r24, __r25;
        var _$41oBEM_ = __$ctx.BEM, _$41ov = __$ctx.ctx, _$41obuf = __$ctx._buf, _$41otag;
        _$41otag = ('', __r0 = $$mode, $$mode = 'tag', __r1 = $1(__$ctx), $$mode = __r0, '', __r1);
        typeof _$41otag != 'undefined' || (_$41otag = _$41ov.tag);
        typeof _$41otag != 'undefined' || (_$41otag = 'div');
        if (_$41otag) {
            var _$41ojsParams, _$41ojs;
            if ($$block && _$41ov.js !== false) {
                _$41ojs = ('', __r4 = $$mode, $$mode = 'js', __r5 = $1(__$ctx), $$mode = __r4, '', __r5);
                _$41ojs = _$41ojs ? __$ctx._.extend(_$41ov.js, _$41ojs === true ? {} : _$41ojs) : _$41ov.js === true ? {} : _$41ov.js;
                _$41ojs && ((_$41ojsParams = {})[_$41oBEM_.INTERNAL.buildClass($$block, _$41ov.elem)] = _$41ojs);
            } else {
                undefined;
            }
            _$41obuf.push('<', _$41otag);
            var _$41oisBEM = ('', __r6 = $$mode, $$mode = 'bem', __r7 = $1(__$ctx), $$mode = __r6, '', __r7);
            typeof _$41oisBEM != 'undefined' || (_$41oisBEM = typeof _$41ov.bem != 'undefined' ? _$41ov.bem : _$41ov.block || _$41ov.elem);
            var _$41ocls = ('', __r8 = $$mode, $$mode = 'cls', __r9 = $1(__$ctx), $$mode = __r8, '', __r9);
            _$41ocls || (_$41ocls = _$41ov.cls);
            var _$41oaddJSInitClass = _$41ov.block && _$41ojsParams;
            if (_$41oisBEM || _$41ocls) {
                _$41obuf.push(' class="');
                if (_$41oisBEM) {
                    _$41oBEM_.INTERNAL.buildClasses($$block, _$41ov.elem, _$41ov.elemMods || _$41ov.mods, _$41obuf);
                    var _$41omix = ('', __r10 = $$mode, $$mode = 'mix', __r11 = $1(__$ctx), $$mode = __r10, '', __r11);
                    _$41ov.mix && (_$41omix = _$41omix ? _$41omix.concat(_$41ov.mix) : _$41ov.mix);
                    if (_$41omix) {
                        var _$41ovisited = {};
                        function _$41ovisitedKey(block, elem) {
                            return (block || '') + '__' + (elem || '');
                        }
                        _$41ovisited[_$41ovisitedKey($$block, $$elem)] = true;
                        if (!__$ctx._.isArray(_$41omix)) {
                            _$41omix = [_$41omix];
                        } else {
                            undefined;
                        }
                        for (var _$41oi = 0; _$41oi < _$41omix.length; _$41oi++) {
                            var _$41omixItem = _$41omix[_$41oi];
                            if (!_$41omixItem) {
                                continue;
                            } else {
                                undefined;
                            }
                            var _$41ohasItem = _$41omixItem.block || _$41omixItem.elem, _$41oblock = _$41omixItem.block || _$41omixItem._block || $$block, _$41oelem = _$41omixItem.elem || _$41omixItem._elem || $$elem, _$41omods = _$41omixItem.mods || $$mods, _$41oelemMods = _$41omixItem.elemMods || {};
                            _$41ohasItem && _$41obuf.push(' ');
                            _$41oBEM_.INTERNAL[_$41ohasItem ? 'buildClasses' : 'buildModsClasses'](_$41oblock, _$41omixItem.elem || _$41omixItem._elem || (_$41omixItem.block ? undefined : $$elem), _$41omixItem.elemMods || _$41omixItem.mods, _$41obuf);
                            if (_$41omixItem.js) {
                                (_$41ojsParams || (_$41ojsParams = {}))[_$41oBEM_.INTERNAL.buildClass(_$41oblock, _$41omixItem.elem)] = _$41omixItem.js === true ? {} : _$41omixItem.js;
                                _$41oaddJSInitClass || (_$41oaddJSInitClass = _$41oblock && !_$41omixItem.elem);
                            } else {
                                undefined;
                            }
                            if (_$41ohasItem && !_$41ovisited[_$41ovisitedKey(_$41oblock, _$41oelem)]) {
                                _$41ovisited[_$41ovisitedKey(_$41oblock, _$41oelem)] = true;
                                var _$41onestedMix = ('', __r12 = $$block, $$block = _$41oblock, __r13 = $$elem, $$elem = _$41oelem, __r14 = $$mods, $$mods = _$41omods, __r15 = $$elemMods, $$elemMods = _$41oelemMods, __r16 = $$mode, $$mode = 'mix', __r17 = $1(__$ctx), $$block = __r12, $$elem = __r13, $$mods = __r14, $$elemMods = __r15, $$mode = __r16, '', __r17);
                                if (_$41onestedMix) {
                                    for (var _$41oj = 0; _$41oj < _$41onestedMix.length; _$41oj++) {
                                        var _$41onestedItem = _$41onestedMix[_$41oj];
                                        if (!_$41onestedItem.block && !_$41onestedItem.elem || !_$41ovisited[_$41ovisitedKey(_$41onestedItem.block, _$41onestedItem.elem)]) {
                                            _$41onestedItem._block = _$41oblock;
                                            _$41onestedItem._elem = _$41oelem;
                                            _$41omix.splice(_$41oi + 1, 0, _$41onestedItem);
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
                _$41ocls && _$41obuf.push(_$41oisBEM ? ' ' : '', _$41ocls);
                _$41oaddJSInitClass && _$41obuf.push(' i-bem');
                _$41obuf.push('"');
            } else {
                undefined;
            }
            if (_$41ojsParams) {
                var _$41ojsAttr = ('', __r20 = $$mode, $$mode = 'jsAttr', __r21 = $1(__$ctx), $$mode = __r20, '', __r21);
                _$41obuf.push(' ', _$41ojsAttr || 'data-bem', '="', __$ctx._.attrEscape(JSON.stringify(_$41ojsParams)), '"');
            } else {
                undefined;
            }
            var _$41oattrs = ('', __r22 = $$mode, $$mode = 'attrs', __r23 = $1(__$ctx), $$mode = __r22, '', __r23);
            _$41oattrs = __$ctx._.extend(_$41oattrs, _$41ov.attrs);
            if (_$41oattrs) {
                var _$41oname;
                for (_$41oname in _$41oattrs) {
                    if (_$41oattrs[_$41oname] === undefined) {
                        continue;
                    } else {
                        undefined;
                    }
                    _$41obuf.push(' ', _$41oname, '="', __$ctx._.attrEscape(_$41oattrs[_$41oname]), '"');
                }
            } else {
                undefined;
            }
        } else {
            undefined;
        }
        if (__$ctx._.isShortTag(_$41otag)) {
            _$41obuf.push('/>');
        } else {
            _$41otag && _$41obuf.push('>');
            var _$41ocontent = ('', __r24 = $$mode, $$mode = 'content', __r25 = $1(__$ctx), $$mode = __r24, '', __r25);
            if (_$41ocontent || _$41ocontent === 0) {
                var _$41oisBEM = $$block || $$elem;
                {
                    '';
                    var __r26 = __$ctx._notNewList;
                    __$ctx._notNewList = false;
                    var __r27 = __$ctx.position;
                    __$ctx.position = _$41oisBEM ? 1 : __$ctx.position;
                    var __r28 = __$ctx._listLength;
                    __$ctx._listLength = _$41oisBEM ? 1 : __$ctx._listLength;
                    var __r29 = __$ctx.ctx;
                    __$ctx.ctx = _$41ocontent;
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
            _$41otag && _$41obuf.push('</', _$41otag, '>');
        }
        return;
    }
    function $193(__$ctx) {
        var _$41lv = __$ctx.ctx, _$41ll = _$41lv.length, _$41li = 0, _$41lprevPos = __$ctx.position, _$41lprevNotNewList = __$ctx._notNewList;
        if (_$41lprevNotNewList) {
            __$ctx._listLength += _$41ll - 1;
        } else {
            __$ctx.position = 0;
            __$ctx._listLength = _$41ll;
        }
        __$ctx._notNewList = true;
        while (_$41li < _$41ll) {
            var _$41lnewCtx = _$41lv[_$41li++];
            {
                '';
                var __r0 = __$ctx.ctx;
                __$ctx.ctx = _$41lnewCtx == null ? '' : _$41lnewCtx;
                $1(__$ctx);
                __$ctx.ctx = __r0;
                '';
            }
            undefined;
        }
        _$41lprevNotNewList || (__$ctx.position = _$41lprevPos);
        return;
    }
    function $196(__$ctx) {
        var _$41kvBlock = __$ctx.ctx.block, _$41kvElem = __$ctx.ctx.elem, _$41kblock = __$ctx._currBlock || $$block;
        __$ctx.ctx || (__$ctx.ctx = {});
        {
            '';
            var __r0 = $$mode;
            $$mode = 'default';
            var __r1 = __$ctx._links;
            __$ctx._links = __$ctx.ctx.links || __$ctx._links;
            var __r2 = $$block;
            $$block = _$41kvBlock || (_$41kvElem ? _$41kblock : undefined);
            var __r3 = __$ctx._currBlock;
            __$ctx._currBlock = _$41kvBlock || _$41kvElem ? undefined : _$41kblock;
            var __r4 = $$elem;
            $$elem = __$ctx.ctx.elem;
            var __r5 = $$mods;
            $$mods = (_$41kvBlock ? __$ctx.ctx.mods : $$mods) || {};
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
/*borschik:include:../../../../common.blocks/slider/slider.js*/;
/*borschik:include:../../../../common.blocks/slider/slider.examples/12-slider.blocks/slider/slider.js*/;
/*borschik:include:../../../../common.blocks/slider/__ui/slider__ui.js*/;
/*borschik:include:../../../../common.blocks/slider/__math/slider__math.js*/;
/*borschik:include:../../../../common.blocks/slider/_orientation/slider_orientation_horiz.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-touch/i-jquery/__tap/i-jquery__tap.js*/;
/*borschik:include:../../../../common.blocks/input/input.js*/;
/*borschik:include:../../../../touch.blocks/input/input.js*/;
/*borschik:include:../../../../touch-pad.blocks/input/input.js*/;
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


BEM.I18N.lang('ru');
