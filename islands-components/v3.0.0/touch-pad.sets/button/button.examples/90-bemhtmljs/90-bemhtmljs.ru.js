var BEMHTML = function() {
  var $$mode, $$block, $$elem, $$elemMods, $$mods;
  var cache,
      exports = {},
      xjst = (function (exports) {
    function $1(__$ctx) {
        var __t = $$mode;
        if (__t === 'content') {
            return $2(__$ctx);
        } else if (__t === 'attrs') {
            return $10(__$ctx);
        } else if (__t === 'default') {
            return $39(__$ctx);
        } else if (__t === 'js') {
            return $50(__$ctx);
        } else if (__t === 'tag') {
            return $58(__$ctx);
        } else if (__t === 'mix') {
            return $73(__$ctx);
        } else if (__t === 'bem') {
            return $75(__$ctx);
        } else if (__t === 'jsAttr') {
            return $77(__$ctx);
        } else if (__t === 'cls') {
            return $79(__$ctx);
        } else {
            return $80(__$ctx);
        }
    }
    function $2(__$ctx) {
        if ($$block === 'button') {
            if (!!$$elem === false) {
                return {
                    elem: 'text',
                    tag: 'span',
                    content: __$ctx.ctx.content
                };
                return;
            } else {
                return $9(__$ctx);
            }
        } else {
            return $9(__$ctx);
        }
    }
    function $9(__$ctx) {
        return __$ctx.ctx.content;
        return;
    }
    function $10(__$ctx) {
        if ($$block === 'button') {
            return $11(__$ctx);
        } else {
            return $38(__$ctx);
        }
    }
    function $11(__$ctx) {
        if (!(__$ctx['__$anflg272'] !== true) === false) {
            if (!__$ctx.ctx.url === false) {
                if (!!$$elem === false) {
                    var __r0, __r1;
                    var _$2i6ctx = __$ctx.ctx, _$2i6p = ('', __r0 = __$ctx['__$anflg272'], __$ctx['__$anflg272'] = true, __r1 = $11(__$ctx), __$ctx['__$anflg272'] = __r0, '', __r1), _$2i6a = { href: _$2i6ctx.url };
                    _$2i6ctx.target && (_$2i6a.target = _$2i6ctx.target);
                    $$mods.disabled && (_$2i6a['aria-disabled'] = true);
                    return __$ctx._.extend(_$2i6p, _$2i6a);
                    return;
                } else {
                    return $20(__$ctx);
                }
            } else {
                return $20(__$ctx);
            }
        } else {
            return $20(__$ctx);
        }
    }
    function $20(__$ctx) {
        if (!(__$ctx['__$anflg271'] !== true) === false) {
            if (!!$$elem === false) {
                if (!!__$ctx.ctx.url === false) {
                    return $24(__$ctx);
                } else {
                    return $29(__$ctx);
                }
            } else {
                return $29(__$ctx);
            }
        } else {
            return $29(__$ctx);
        }
    }
    function $24(__$ctx) {
        var __r0, __r1;
        var _$2i5ctx = __$ctx.ctx, _$2i5p = ('', __r0 = __$ctx['__$anflg271'], __$ctx['__$anflg271'] = true, __r1 = $11(__$ctx), __$ctx['__$anflg271'] = __r0, '', __r1), _$2i5a = { type: _$2i5ctx.type || 'button' }, _$2i5props = [
                'name',
                'value'
            ], _$2i5i;
        while (_$2i5i = _$2i5props.shift()) {
            _$2i5ctx[_$2i5i] && (_$2i5a[_$2i5i] = _$2i5ctx[_$2i5i]);
        }
        $$mods.disabled && (_$2i5a.disabled = 'disabled');
        return __$ctx._.extend(_$2i5p, _$2i5a);
        return;
    }
    function $29(__$ctx) {
        if (!true === false) {
            if (!!$$elem === false) {
                var _$2i4ctx = __$ctx.ctx, _$2i4a = { role: 'button' };
                _$2i4ctx.tabindex && (_$2i4a.tabindex = _$2i4ctx.tabindex);
                return _$2i4a;
                return;
            } else {
                return $38(__$ctx);
            }
        } else {
            return $38(__$ctx);
        }
    }
    function $38(__$ctx) {
        return undefined;
        return;
    }
    function $39(__$ctx) {
        if ($$block === 'button') {
            return $40(__$ctx);
        } else {
            return $80(__$ctx);
        }
    }
    function $40(__$ctx) {
        if (!(__$ctx['__$anflg270'] !== true) === false) {
            if (!!$$elem === false) {
                var _$2i3mods = __$ctx.ctx.mods || {};
                _$2i3mods.theme = _$2i3mods.theme || 'normal';
                {
                    '';
                    var __r0 = __$ctx['__$anflg270'];
                    __$ctx['__$anflg270'] = true;
                    {
                        '';
                        var __r1 = __$ctx.ctx, __r2 = __r1.mods;
                        __r1.mods = _$2i3mods;
                        $40(__$ctx);
                        __r1.mods = __r2;
                        '';
                    }
                    __$ctx['__$anflg270'] = __r0;
                    '';
                }
                undefined;
                return;
            } else {
                return $80(__$ctx);
            }
        } else {
            return $80(__$ctx);
        }
    }
    function $50(__$ctx) {
        if ($$block === 'button') {
            if (!!$$elem === false) {
                return true;
                return;
            } else {
                return $57(__$ctx);
            }
        } else {
            return $57(__$ctx);
        }
    }
    function $57(__$ctx) {
        return undefined;
        return;
    }
    function $58(__$ctx) {
        if ($$block === 'button') {
            if (!__$ctx.ctx.url === false) {
                if (!!$$elem === false) {
                    return 'a';
                    return;
                } else {
                    return $65(__$ctx);
                }
            } else {
                return $65(__$ctx);
            }
        } else {
            return $71(__$ctx);
        }
    }
    function $65(__$ctx) {
        if (!!$$elem === false) {
            return 'button';
            return;
        } else {
            return $71(__$ctx);
        }
    }
    function $71(__$ctx) {
        return undefined;
        return;
    }
    function $73(__$ctx) {
        return undefined;
        return;
    }
    function $75(__$ctx) {
        return undefined;
        return;
    }
    function $77(__$ctx) {
        return undefined;
        return;
    }
    function $79(__$ctx) {
        return undefined;
        return;
    }
    function $80(__$ctx) {
        if (!__$ctx.ctx === false) {
            if (!__$ctx.ctx.link === false) {
                if (!!__$ctx._.isSimple(__$ctx.ctx) === false) {
                    return $84(__$ctx);
                } else {
                    return $89(__$ctx);
                }
            } else {
                return $89(__$ctx);
            }
        } else {
            return $89(__$ctx);
        }
    }
    function $84(__$ctx) {
        var __r0, __r1;
        function _$2hrfollow() {
            if (this.ctx.link === 'no-follow') {
                return undefined;
            } else {
                undefined;
            }
            var data = this._links[this.ctx.link];
            return '', __r0 = this.ctx, this.ctx = data, __r1 = $1(__$ctx), this.ctx = __r0, '', __r1;
        }
        if (!cache || !__$ctx._cacheLog) {
            return _$2hrfollow.call(__$ctx);
        } else {
            undefined;
        }
        var _$2hrcontents = __$ctx._buf.slice(__$ctx._cachePos).join('');
        __$ctx._cachePos = __$ctx._buf.length;
        __$ctx._cacheLog.push(_$2hrcontents, {
            log: __$ctx._localLog.slice(),
            link: __$ctx.ctx.link
        });
        var _$2hrres = _$2hrfollow.call(__$ctx);
        __$ctx._cachePos = __$ctx._buf.length;
        return _$2hrres;
        return;
    }
    function $89(__$ctx) {
        if (!cache === false) {
            if (!__$ctx.ctx === false) {
                if (!__$ctx.ctx.cache === false) {
                    return $93(__$ctx);
                } else {
                    return $98(__$ctx);
                }
            } else {
                return $98(__$ctx);
            }
        } else {
            return $98(__$ctx);
        }
    }
    function $93(__$ctx) {
        var _$2hqcached;
        function _$2hqsetProperty(obj, key, value) {
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
        if (_$2hqcached = cache.get(__$ctx.ctx.cache)) {
            var _$2hqoldLinks = __$ctx._links;
            if (__$ctx.ctx.links) {
                __$ctx._links = __$ctx.ctx.links;
            } else {
                undefined;
            }
            for (var _$2hqi = 0; _$2hqi < _$2hqcached.log.length; _$2hqi++) {
                if (typeof _$2hqcached.log[_$2hqi] === 'string') {
                    __$ctx._buf.push(_$2hqcached.log[_$2hqi]);
                    continue;
                } else {
                    undefined;
                }
                var _$2hqlog = _$2hqcached.log[_$2hqi], _$2hqreverseLog;
                _$2hqreverseLog = _$2hqlog.log.map(function (entry) {
                    return {
                        key: entry[0],
                        value: _$2hqsetProperty(this, entry[0], entry[1])
                    };
                }, __$ctx).reverse();
                {
                    '';
                    var __r0 = __$ctx.ctx, __r1 = __r0.cache;
                    __r0.cache = null;
                    var __r2 = __$ctx._cacheLog;
                    __$ctx._cacheLog = null;
                    var __r3 = __$ctx.ctx, __r4 = __r3.link;
                    __r3.link = _$2hqlog.link;
                    $1(__$ctx);
                    __r0.cache = __r1;
                    __$ctx._cacheLog = __r2;
                    __r3.link = __r4;
                    '';
                }
                undefined;
                _$2hqreverseLog.forEach(function (entry) {
                    _$2hqsetProperty(this, entry.key, entry.value);
                }, __$ctx);
            }
            __$ctx._links = _$2hqoldLinks;
            return _$2hqcached.res;
        } else {
            undefined;
        }
        var _$2hqcacheLog = [], _$2hqres;
        {
            '';
            var __r5 = __$ctx.ctx, __r6 = __r5.cache;
            __r5.cache = null;
            var __r7 = __$ctx._cachePos;
            __$ctx._cachePos = __$ctx._buf.length;
            var __r8 = __$ctx._cacheLog;
            __$ctx._cacheLog = _$2hqcacheLog;
            var __r9 = __$ctx._localLog;
            __$ctx._localLog = [];
            {
                _$2hqres = $1(__$ctx);
                var _$2hqtail = __$ctx._buf.slice(__$ctx._cachePos).join('');
                if (_$2hqtail) {
                    _$2hqcacheLog.push(_$2hqtail);
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
            log: _$2hqcacheLog,
            res: _$2hqres
        });
        return _$2hqres;
        return;
    }
    function $98(__$ctx) {
        var __t = $$mode;
        if (__t === 'default') {
            return $100(__$ctx);
        } else if (__t === '') {
            if (!__$ctx._.isSimple(__$ctx.ctx) === false) {
                __$ctx._listLength--;
                var _$2hoctx = __$ctx.ctx;
                (_$2hoctx && _$2hoctx !== true || _$2hoctx === 0) && __$ctx._buf.push(_$2hoctx);
                return;
            } else {
                if (!!__$ctx.ctx === false) {
                    __$ctx._listLength--;
                    return;
                } else {
                    if (!__$ctx._.isArray(__$ctx.ctx) === false) {
                        return $109(__$ctx);
                    } else {
                        if (!true === false) {
                            return $112(__$ctx);
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
    function $100(__$ctx) {
        var __r13, __r0, __r4, __r5, __r6, __r7, __r8, __r9, __r10, __r11, __r12, __r1, __r14, __r15, __r16, __r17, __r20, __r21, __r22, __r23, __r24, __r25;
        var _$2hpBEM_ = __$ctx.BEM, _$2hpv = __$ctx.ctx, _$2hpbuf = __$ctx._buf, _$2hptag;
        _$2hptag = ('', __r0 = $$mode, $$mode = 'tag', __r1 = $58(__$ctx), $$mode = __r0, '', __r1);
        typeof _$2hptag != 'undefined' || (_$2hptag = _$2hpv.tag);
        typeof _$2hptag != 'undefined' || (_$2hptag = 'div');
        if (_$2hptag) {
            var _$2hpjsParams, _$2hpjs;
            if ($$block && _$2hpv.js !== false) {
                _$2hpjs = ('', __r4 = $$mode, $$mode = 'js', __r5 = $50(__$ctx), $$mode = __r4, '', __r5);
                _$2hpjs = _$2hpjs ? __$ctx._.extend(_$2hpv.js, _$2hpjs === true ? {} : _$2hpjs) : _$2hpv.js === true ? {} : _$2hpv.js;
                _$2hpjs && ((_$2hpjsParams = {})[_$2hpBEM_.INTERNAL.buildClass($$block, _$2hpv.elem)] = _$2hpjs);
            } else {
                undefined;
            }
            _$2hpbuf.push('<', _$2hptag);
            var _$2hpisBEM = ('', __r6 = $$mode, $$mode = 'bem', __r7 = $75(__$ctx), $$mode = __r6, '', __r7);
            typeof _$2hpisBEM != 'undefined' || (_$2hpisBEM = typeof _$2hpv.bem != 'undefined' ? _$2hpv.bem : _$2hpv.block || _$2hpv.elem);
            var _$2hpcls = ('', __r8 = $$mode, $$mode = 'cls', __r9 = $79(__$ctx), $$mode = __r8, '', __r9);
            _$2hpcls || (_$2hpcls = _$2hpv.cls);
            var _$2hpaddJSInitClass = _$2hpv.block && _$2hpjsParams;
            if (_$2hpisBEM || _$2hpcls) {
                _$2hpbuf.push(' class="');
                if (_$2hpisBEM) {
                    _$2hpBEM_.INTERNAL.buildClasses($$block, _$2hpv.elem, _$2hpv.elemMods || _$2hpv.mods, _$2hpbuf);
                    var _$2hpmix = ('', __r10 = $$mode, $$mode = 'mix', __r11 = $73(__$ctx), $$mode = __r10, '', __r11);
                    _$2hpv.mix && (_$2hpmix = _$2hpmix ? _$2hpmix.concat(_$2hpv.mix) : _$2hpv.mix);
                    if (_$2hpmix) {
                        var _$2hpvisited = {};
                        function _$2hpvisitedKey(block, elem) {
                            return (block || '') + '__' + (elem || '');
                        }
                        _$2hpvisited[_$2hpvisitedKey($$block, $$elem)] = true;
                        if (!__$ctx._.isArray(_$2hpmix)) {
                            _$2hpmix = [_$2hpmix];
                        } else {
                            undefined;
                        }
                        for (var _$2hpi = 0; _$2hpi < _$2hpmix.length; _$2hpi++) {
                            var _$2hpmixItem = _$2hpmix[_$2hpi];
                            if (!_$2hpmixItem) {
                                continue;
                            } else {
                                undefined;
                            }
                            var _$2hphasItem = _$2hpmixItem.block || _$2hpmixItem.elem, _$2hpblock = _$2hpmixItem.block || _$2hpmixItem._block || $$block, _$2hpelem = _$2hpmixItem.elem || _$2hpmixItem._elem || $$elem, _$2hpmods = _$2hpmixItem.mods || $$mods, _$2hpelemMods = _$2hpmixItem.elemMods || {};
                            _$2hphasItem && _$2hpbuf.push(' ');
                            _$2hpBEM_.INTERNAL[_$2hphasItem ? 'buildClasses' : 'buildModsClasses'](_$2hpblock, _$2hpmixItem.elem || _$2hpmixItem._elem || (_$2hpmixItem.block ? undefined : $$elem), _$2hpmixItem.elemMods || _$2hpmixItem.mods, _$2hpbuf);
                            if (_$2hpmixItem.js) {
                                (_$2hpjsParams || (_$2hpjsParams = {}))[_$2hpBEM_.INTERNAL.buildClass(_$2hpblock, _$2hpmixItem.elem)] = _$2hpmixItem.js === true ? {} : _$2hpmixItem.js;
                                _$2hpaddJSInitClass || (_$2hpaddJSInitClass = _$2hpblock && !_$2hpmixItem.elem);
                            } else {
                                undefined;
                            }
                            if (_$2hphasItem && !_$2hpvisited[_$2hpvisitedKey(_$2hpblock, _$2hpelem)]) {
                                _$2hpvisited[_$2hpvisitedKey(_$2hpblock, _$2hpelem)] = true;
                                var _$2hpnestedMix = ('', __r12 = $$block, $$block = _$2hpblock, __r13 = $$elem, $$elem = _$2hpelem, __r14 = $$mods, $$mods = _$2hpmods, __r15 = $$elemMods, $$elemMods = _$2hpelemMods, __r16 = $$mode, $$mode = 'mix', __r17 = $73(__$ctx), $$block = __r12, $$elem = __r13, $$mods = __r14, $$elemMods = __r15, $$mode = __r16, '', __r17);
                                if (_$2hpnestedMix) {
                                    for (var _$2hpj = 0; _$2hpj < _$2hpnestedMix.length; _$2hpj++) {
                                        var _$2hpnestedItem = _$2hpnestedMix[_$2hpj];
                                        if (!_$2hpnestedItem.block && !_$2hpnestedItem.elem || !_$2hpvisited[_$2hpvisitedKey(_$2hpnestedItem.block, _$2hpnestedItem.elem)]) {
                                            _$2hpnestedItem._block = _$2hpblock;
                                            _$2hpnestedItem._elem = _$2hpelem;
                                            _$2hpmix.splice(_$2hpi + 1, 0, _$2hpnestedItem);
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
                _$2hpcls && _$2hpbuf.push(_$2hpisBEM ? ' ' : '', _$2hpcls);
                _$2hpaddJSInitClass && _$2hpbuf.push(' i-bem');
                _$2hpbuf.push('"');
            } else {
                undefined;
            }
            if (_$2hpjsParams) {
                var _$2hpjsAttr = ('', __r20 = $$mode, $$mode = 'jsAttr', __r21 = $77(__$ctx), $$mode = __r20, '', __r21);
                _$2hpbuf.push(' ', _$2hpjsAttr || 'data-bem', '="', __$ctx._.attrEscape(JSON.stringify(_$2hpjsParams)), '"');
            } else {
                undefined;
            }
            var _$2hpattrs = ('', __r22 = $$mode, $$mode = 'attrs', __r23 = $10(__$ctx), $$mode = __r22, '', __r23);
            _$2hpattrs = __$ctx._.extend(_$2hpattrs, _$2hpv.attrs);
            if (_$2hpattrs) {
                var _$2hpname;
                for (_$2hpname in _$2hpattrs) {
                    if (_$2hpattrs[_$2hpname] === undefined) {
                        continue;
                    } else {
                        undefined;
                    }
                    _$2hpbuf.push(' ', _$2hpname, '="', __$ctx._.attrEscape(_$2hpattrs[_$2hpname]), '"');
                }
            } else {
                undefined;
            }
        } else {
            undefined;
        }
        if (__$ctx._.isShortTag(_$2hptag)) {
            _$2hpbuf.push('/>');
        } else {
            _$2hptag && _$2hpbuf.push('>');
            var _$2hpcontent = ('', __r24 = $$mode, $$mode = 'content', __r25 = $2(__$ctx), $$mode = __r24, '', __r25);
            if (_$2hpcontent || _$2hpcontent === 0) {
                var _$2hpisBEM = $$block || $$elem;
                {
                    '';
                    var __r26 = __$ctx._notNewList;
                    __$ctx._notNewList = false;
                    var __r27 = __$ctx.position;
                    __$ctx.position = _$2hpisBEM ? 1 : __$ctx.position;
                    var __r28 = __$ctx._listLength;
                    __$ctx._listLength = _$2hpisBEM ? 1 : __$ctx._listLength;
                    var __r29 = __$ctx.ctx;
                    __$ctx.ctx = _$2hpcontent;
                    var __r30 = $$mode;
                    $$mode = '';
                    $80(__$ctx);
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
            _$2hptag && _$2hpbuf.push('</', _$2hptag, '>');
        }
        return;
    }
    function $109(__$ctx) {
        var _$2hmv = __$ctx.ctx, _$2hml = _$2hmv.length, _$2hmi = 0, _$2hmprevPos = __$ctx.position, _$2hmprevNotNewList = __$ctx._notNewList;
        if (_$2hmprevNotNewList) {
            __$ctx._listLength += _$2hml - 1;
        } else {
            __$ctx.position = 0;
            __$ctx._listLength = _$2hml;
        }
        __$ctx._notNewList = true;
        while (_$2hmi < _$2hml) {
            var _$2hmnewCtx = _$2hmv[_$2hmi++];
            {
                '';
                var __r0 = __$ctx.ctx;
                __$ctx.ctx = _$2hmnewCtx == null ? '' : _$2hmnewCtx;
                $80(__$ctx);
                __$ctx.ctx = __r0;
                '';
            }
            undefined;
        }
        _$2hmprevNotNewList || (__$ctx.position = _$2hmprevPos);
        return;
    }
    function $112(__$ctx) {
        var _$2hlvBlock = __$ctx.ctx.block, _$2hlvElem = __$ctx.ctx.elem, _$2hlblock = __$ctx._currBlock || $$block;
        __$ctx.ctx || (__$ctx.ctx = {});
        {
            '';
            var __r0 = $$mode;
            $$mode = 'default';
            var __r1 = __$ctx._links;
            __$ctx._links = __$ctx.ctx.links || __$ctx._links;
            var __r2 = $$block;
            $$block = _$2hlvBlock || (_$2hlvElem ? _$2hlblock : undefined);
            var __r3 = __$ctx._currBlock;
            __$ctx._currBlock = _$2hlvBlock || _$2hlvElem ? undefined : _$2hlblock;
            var __r4 = $$elem;
            $$elem = __$ctx.ctx.elem;
            var __r5 = $$mods;
            $$mods = (_$2hlvBlock ? __$ctx.ctx.mods : $$mods) || {};
            var __r6 = $$elemMods;
            $$elemMods = __$ctx.ctx.elemMods || {};
            {
                $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
                $39(__$ctx);
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
/*borschik:include:../../../../common.blocks/button/button.examples/90-bemhtmljs.blocks/example/example.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-touch/i-jquery/__tap/i-jquery__tap.js*/;
/*borschik:include:../../../../common.blocks/button/button.js*/;
/*borschik:include:../../../../touch.blocks/button/button.js*/;
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


BEM.I18N.lang('ru');
