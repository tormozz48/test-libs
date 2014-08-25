var BEMHTML = function() {
  var $$mode, $$block, $$elem, $$elemMods, $$mods;
  var cache,
      exports = {},
      xjst = (function (exports) {
    function $1(__$ctx) {
        var __t = $$mode;
        if (__t === 'attrs') {
            return $2(__$ctx);
        } else if (__t === 'tag') {
            return $10(__$ctx);
        } else if (__t === 'mix') {
            return $18(__$ctx);
        } else if (__t === 'content') {
            return $27(__$ctx);
        } else if (__t === 'bem') {
            return $29(__$ctx);
        } else if (__t === 'jsAttr') {
            return $31(__$ctx);
        } else if (__t === 'js') {
            return $33(__$ctx);
        } else if (__t === 'cls') {
            return $35(__$ctx);
        } else {
            return $36(__$ctx);
        }
    }
    function $2(__$ctx) {
        if ($$block === 'attach') {
            if ($$elem === 'control') {
                var _$2csa = {
                        type: 'file',
                        name: __$ctx._name
                    };
                !!__$ctx._disabled && (_$2csa.disabled = 'disabled');
                __$ctx._tabindex && (_$2csa.tabindex = __$ctx._tabindex);
                _$2csa['aria-labelledby'] = __$ctx._textId;
                return _$2csa;
                return;
            } else {
                return $9(__$ctx);
            }
        } else {
            return $9(__$ctx);
        }
    }
    function $9(__$ctx) {
        return undefined;
        return;
    }
    function $10(__$ctx) {
        if ($$block === 'attach') {
            if ($$elem === 'control') {
                return 'input';
                return;
            } else {
                return $17(__$ctx);
            }
        } else {
            return $17(__$ctx);
        }
    }
    function $17(__$ctx) {
        return undefined;
        return;
    }
    function $18(__$ctx) {
        if ($$block === 'attach') {
            if ($$elem === 'control') {
                return [{
                        block: 'button',
                        elem: 'control'
                    }];
                return;
            } else {
                return $25(__$ctx);
            }
        } else {
            return $25(__$ctx);
        }
    }
    function $25(__$ctx) {
        return undefined;
        return;
    }
    function $27(__$ctx) {
        return __$ctx.ctx.content;
        return;
    }
    function $29(__$ctx) {
        return undefined;
        return;
    }
    function $31(__$ctx) {
        return undefined;
        return;
    }
    function $33(__$ctx) {
        return undefined;
        return;
    }
    function $35(__$ctx) {
        return undefined;
        return;
    }
    function $36(__$ctx) {
        if (!__$ctx.ctx === false) {
            if (!__$ctx.ctx.link === false) {
                if (!!__$ctx._.isSimple(__$ctx.ctx) === false) {
                    return $40(__$ctx);
                } else {
                    return $45(__$ctx);
                }
            } else {
                return $45(__$ctx);
            }
        } else {
            return $45(__$ctx);
        }
    }
    function $40(__$ctx) {
        var __r0, __r1;
        function _$2chfollow() {
            if (this.ctx.link === 'no-follow') {
                return undefined;
            } else {
                undefined;
            }
            var data = this._links[this.ctx.link];
            return '', __r0 = this.ctx, this.ctx = data, __r1 = $1(__$ctx), this.ctx = __r0, '', __r1;
        }
        if (!cache || !__$ctx._cacheLog) {
            return _$2chfollow.call(__$ctx);
        } else {
            undefined;
        }
        var _$2chcontents = __$ctx._buf.slice(__$ctx._cachePos).join('');
        __$ctx._cachePos = __$ctx._buf.length;
        __$ctx._cacheLog.push(_$2chcontents, {
            log: __$ctx._localLog.slice(),
            link: __$ctx.ctx.link
        });
        var _$2chres = _$2chfollow.call(__$ctx);
        __$ctx._cachePos = __$ctx._buf.length;
        return _$2chres;
        return;
    }
    function $45(__$ctx) {
        if (!cache === false) {
            if (!__$ctx.ctx === false) {
                if (!__$ctx.ctx.cache === false) {
                    return $49(__$ctx);
                } else {
                    return $54(__$ctx);
                }
            } else {
                return $54(__$ctx);
            }
        } else {
            return $54(__$ctx);
        }
    }
    function $49(__$ctx) {
        var _$2cgcached;
        function _$2cgsetProperty(obj, key, value) {
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
        if (_$2cgcached = cache.get(__$ctx.ctx.cache)) {
            var _$2cgoldLinks = __$ctx._links;
            if (__$ctx.ctx.links) {
                __$ctx._links = __$ctx.ctx.links;
            } else {
                undefined;
            }
            for (var _$2cgi = 0; _$2cgi < _$2cgcached.log.length; _$2cgi++) {
                if (typeof _$2cgcached.log[_$2cgi] === 'string') {
                    __$ctx._buf.push(_$2cgcached.log[_$2cgi]);
                    continue;
                } else {
                    undefined;
                }
                var _$2cglog = _$2cgcached.log[_$2cgi], _$2cgreverseLog;
                _$2cgreverseLog = _$2cglog.log.map(function (entry) {
                    return {
                        key: entry[0],
                        value: _$2cgsetProperty(this, entry[0], entry[1])
                    };
                }, __$ctx).reverse();
                {
                    '';
                    var __r0 = __$ctx.ctx, __r1 = __r0.cache;
                    __r0.cache = null;
                    var __r2 = __$ctx._cacheLog;
                    __$ctx._cacheLog = null;
                    var __r3 = __$ctx.ctx, __r4 = __r3.link;
                    __r3.link = _$2cglog.link;
                    $1(__$ctx);
                    __r0.cache = __r1;
                    __$ctx._cacheLog = __r2;
                    __r3.link = __r4;
                    '';
                }
                undefined;
                _$2cgreverseLog.forEach(function (entry) {
                    _$2cgsetProperty(this, entry.key, entry.value);
                }, __$ctx);
            }
            __$ctx._links = _$2cgoldLinks;
            return _$2cgcached.res;
        } else {
            undefined;
        }
        var _$2cgcacheLog = [], _$2cgres;
        {
            '';
            var __r5 = __$ctx.ctx, __r6 = __r5.cache;
            __r5.cache = null;
            var __r7 = __$ctx._cachePos;
            __$ctx._cachePos = __$ctx._buf.length;
            var __r8 = __$ctx._cacheLog;
            __$ctx._cacheLog = _$2cgcacheLog;
            var __r9 = __$ctx._localLog;
            __$ctx._localLog = [];
            {
                _$2cgres = $1(__$ctx);
                var _$2cgtail = __$ctx._buf.slice(__$ctx._cachePos).join('');
                if (_$2cgtail) {
                    _$2cgcacheLog.push(_$2cgtail);
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
            log: _$2cgcacheLog,
            res: _$2cgres
        });
        return _$2cgres;
        return;
    }
    function $54(__$ctx) {
        var __t = $$mode;
        if (__t === 'default') {
            return $56(__$ctx);
        } else if (__t === '') {
            if (!__$ctx._.isSimple(__$ctx.ctx) === false) {
                __$ctx._listLength--;
                var _$2cectx = __$ctx.ctx;
                (_$2cectx && _$2cectx !== true || _$2cectx === 0) && __$ctx._buf.push(_$2cectx);
                return;
            } else {
                if (!!__$ctx.ctx === false) {
                    __$ctx._listLength--;
                    return;
                } else {
                    if (!__$ctx._.isArray(__$ctx.ctx) === false) {
                        return $65(__$ctx);
                    } else {
                        if (!true === false) {
                            return $68(__$ctx);
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
    function $56(__$ctx) {
        var __r13, __r0, __r4, __r5, __r6, __r7, __r8, __r9, __r10, __r11, __r12, __r1, __r14, __r15, __r16, __r17, __r20, __r21, __r22, __r23, __r24, __r25;
        var _$2cfBEM_ = __$ctx.BEM, _$2cfv = __$ctx.ctx, _$2cfbuf = __$ctx._buf, _$2cftag;
        _$2cftag = ('', __r0 = $$mode, $$mode = 'tag', __r1 = $10(__$ctx), $$mode = __r0, '', __r1);
        typeof _$2cftag != 'undefined' || (_$2cftag = _$2cfv.tag);
        typeof _$2cftag != 'undefined' || (_$2cftag = 'div');
        if (_$2cftag) {
            var _$2cfjsParams, _$2cfjs;
            if ($$block && _$2cfv.js !== false) {
                _$2cfjs = ('', __r4 = $$mode, $$mode = 'js', __r5 = $33(__$ctx), $$mode = __r4, '', __r5);
                _$2cfjs = _$2cfjs ? __$ctx._.extend(_$2cfv.js, _$2cfjs === true ? {} : _$2cfjs) : _$2cfv.js === true ? {} : _$2cfv.js;
                _$2cfjs && ((_$2cfjsParams = {})[_$2cfBEM_.INTERNAL.buildClass($$block, _$2cfv.elem)] = _$2cfjs);
            } else {
                undefined;
            }
            _$2cfbuf.push('<', _$2cftag);
            var _$2cfisBEM = ('', __r6 = $$mode, $$mode = 'bem', __r7 = $29(__$ctx), $$mode = __r6, '', __r7);
            typeof _$2cfisBEM != 'undefined' || (_$2cfisBEM = typeof _$2cfv.bem != 'undefined' ? _$2cfv.bem : _$2cfv.block || _$2cfv.elem);
            var _$2cfcls = ('', __r8 = $$mode, $$mode = 'cls', __r9 = $35(__$ctx), $$mode = __r8, '', __r9);
            _$2cfcls || (_$2cfcls = _$2cfv.cls);
            var _$2cfaddJSInitClass = _$2cfv.block && _$2cfjsParams;
            if (_$2cfisBEM || _$2cfcls) {
                _$2cfbuf.push(' class="');
                if (_$2cfisBEM) {
                    _$2cfBEM_.INTERNAL.buildClasses($$block, _$2cfv.elem, _$2cfv.elemMods || _$2cfv.mods, _$2cfbuf);
                    var _$2cfmix = ('', __r10 = $$mode, $$mode = 'mix', __r11 = $18(__$ctx), $$mode = __r10, '', __r11);
                    _$2cfv.mix && (_$2cfmix = _$2cfmix ? _$2cfmix.concat(_$2cfv.mix) : _$2cfv.mix);
                    if (_$2cfmix) {
                        var _$2cfvisited = {};
                        function _$2cfvisitedKey(block, elem) {
                            return (block || '') + '__' + (elem || '');
                        }
                        _$2cfvisited[_$2cfvisitedKey($$block, $$elem)] = true;
                        if (!__$ctx._.isArray(_$2cfmix)) {
                            _$2cfmix = [_$2cfmix];
                        } else {
                            undefined;
                        }
                        for (var _$2cfi = 0; _$2cfi < _$2cfmix.length; _$2cfi++) {
                            var _$2cfmixItem = _$2cfmix[_$2cfi];
                            if (!_$2cfmixItem) {
                                continue;
                            } else {
                                undefined;
                            }
                            var _$2cfhasItem = _$2cfmixItem.block || _$2cfmixItem.elem, _$2cfblock = _$2cfmixItem.block || _$2cfmixItem._block || $$block, _$2cfelem = _$2cfmixItem.elem || _$2cfmixItem._elem || $$elem, _$2cfmods = _$2cfmixItem.mods || $$mods, _$2cfelemMods = _$2cfmixItem.elemMods || {};
                            _$2cfhasItem && _$2cfbuf.push(' ');
                            _$2cfBEM_.INTERNAL[_$2cfhasItem ? 'buildClasses' : 'buildModsClasses'](_$2cfblock, _$2cfmixItem.elem || _$2cfmixItem._elem || (_$2cfmixItem.block ? undefined : $$elem), _$2cfmixItem.elemMods || _$2cfmixItem.mods, _$2cfbuf);
                            if (_$2cfmixItem.js) {
                                (_$2cfjsParams || (_$2cfjsParams = {}))[_$2cfBEM_.INTERNAL.buildClass(_$2cfblock, _$2cfmixItem.elem)] = _$2cfmixItem.js === true ? {} : _$2cfmixItem.js;
                                _$2cfaddJSInitClass || (_$2cfaddJSInitClass = _$2cfblock && !_$2cfmixItem.elem);
                            } else {
                                undefined;
                            }
                            if (_$2cfhasItem && !_$2cfvisited[_$2cfvisitedKey(_$2cfblock, _$2cfelem)]) {
                                _$2cfvisited[_$2cfvisitedKey(_$2cfblock, _$2cfelem)] = true;
                                var _$2cfnestedMix = ('', __r12 = $$block, $$block = _$2cfblock, __r13 = $$elem, $$elem = _$2cfelem, __r14 = $$mods, $$mods = _$2cfmods, __r15 = $$elemMods, $$elemMods = _$2cfelemMods, __r16 = $$mode, $$mode = 'mix', __r17 = $18(__$ctx), $$block = __r12, $$elem = __r13, $$mods = __r14, $$elemMods = __r15, $$mode = __r16, '', __r17);
                                if (_$2cfnestedMix) {
                                    for (var _$2cfj = 0; _$2cfj < _$2cfnestedMix.length; _$2cfj++) {
                                        var _$2cfnestedItem = _$2cfnestedMix[_$2cfj];
                                        if (!_$2cfnestedItem.block && !_$2cfnestedItem.elem || !_$2cfvisited[_$2cfvisitedKey(_$2cfnestedItem.block, _$2cfnestedItem.elem)]) {
                                            _$2cfnestedItem._block = _$2cfblock;
                                            _$2cfnestedItem._elem = _$2cfelem;
                                            _$2cfmix.splice(_$2cfi + 1, 0, _$2cfnestedItem);
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
                _$2cfcls && _$2cfbuf.push(_$2cfisBEM ? ' ' : '', _$2cfcls);
                _$2cfaddJSInitClass && _$2cfbuf.push(' i-bem');
                _$2cfbuf.push('"');
            } else {
                undefined;
            }
            if (_$2cfjsParams) {
                var _$2cfjsAttr = ('', __r20 = $$mode, $$mode = 'jsAttr', __r21 = $31(__$ctx), $$mode = __r20, '', __r21);
                _$2cfbuf.push(' ', _$2cfjsAttr || 'data-bem', '="', __$ctx._.attrEscape(JSON.stringify(_$2cfjsParams)), '"');
            } else {
                undefined;
            }
            var _$2cfattrs = ('', __r22 = $$mode, $$mode = 'attrs', __r23 = $2(__$ctx), $$mode = __r22, '', __r23);
            _$2cfattrs = __$ctx._.extend(_$2cfattrs, _$2cfv.attrs);
            if (_$2cfattrs) {
                var _$2cfname;
                for (_$2cfname in _$2cfattrs) {
                    if (_$2cfattrs[_$2cfname] === undefined) {
                        continue;
                    } else {
                        undefined;
                    }
                    _$2cfbuf.push(' ', _$2cfname, '="', __$ctx._.attrEscape(_$2cfattrs[_$2cfname]), '"');
                }
            } else {
                undefined;
            }
        } else {
            undefined;
        }
        if (__$ctx._.isShortTag(_$2cftag)) {
            _$2cfbuf.push('/>');
        } else {
            _$2cftag && _$2cfbuf.push('>');
            var _$2cfcontent = ('', __r24 = $$mode, $$mode = 'content', __r25 = $27(__$ctx), $$mode = __r24, '', __r25);
            if (_$2cfcontent || _$2cfcontent === 0) {
                var _$2cfisBEM = $$block || $$elem;
                {
                    '';
                    var __r26 = __$ctx._notNewList;
                    __$ctx._notNewList = false;
                    var __r27 = __$ctx.position;
                    __$ctx.position = _$2cfisBEM ? 1 : __$ctx.position;
                    var __r28 = __$ctx._listLength;
                    __$ctx._listLength = _$2cfisBEM ? 1 : __$ctx._listLength;
                    var __r29 = __$ctx.ctx;
                    __$ctx.ctx = _$2cfcontent;
                    var __r30 = $$mode;
                    $$mode = '';
                    $36(__$ctx);
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
            _$2cftag && _$2cfbuf.push('</', _$2cftag, '>');
        }
        return;
    }
    function $65(__$ctx) {
        var _$2ccv = __$ctx.ctx, _$2ccl = _$2ccv.length, _$2cci = 0, _$2ccprevPos = __$ctx.position, _$2ccprevNotNewList = __$ctx._notNewList;
        if (_$2ccprevNotNewList) {
            __$ctx._listLength += _$2ccl - 1;
        } else {
            __$ctx.position = 0;
            __$ctx._listLength = _$2ccl;
        }
        __$ctx._notNewList = true;
        while (_$2cci < _$2ccl) {
            var _$2ccnewCtx = _$2ccv[_$2cci++];
            {
                '';
                var __r0 = __$ctx.ctx;
                __$ctx.ctx = _$2ccnewCtx == null ? '' : _$2ccnewCtx;
                $36(__$ctx);
                __$ctx.ctx = __r0;
                '';
            }
            undefined;
        }
        _$2ccprevNotNewList || (__$ctx.position = _$2ccprevPos);
        return;
    }
    function $68(__$ctx) {
        var _$2cbvBlock = __$ctx.ctx.block, _$2cbvElem = __$ctx.ctx.elem, _$2cbblock = __$ctx._currBlock || $$block;
        __$ctx.ctx || (__$ctx.ctx = {});
        {
            '';
            var __r0 = $$mode;
            $$mode = 'default';
            var __r1 = __$ctx._links;
            __$ctx._links = __$ctx.ctx.links || __$ctx._links;
            var __r2 = $$block;
            $$block = _$2cbvBlock || (_$2cbvElem ? _$2cbblock : undefined);
            var __r3 = __$ctx._currBlock;
            __$ctx._currBlock = _$2cbvBlock || _$2cbvElem ? undefined : _$2cbblock;
            var __r4 = $$elem;
            $$elem = __$ctx.ctx.elem;
            var __r5 = $$mods;
            $$mods = (_$2cbvBlock ? __$ctx.ctx.mods : $$mods) || {};
            var __r6 = $$elemMods;
            $$elemMods = __$ctx.ctx.elemMods || {};
            {
                $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
                $36(__$ctx);
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
/*borschik:include:../../../../common.blocks/attach/attach.js*/;


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


BEM.I18N.decl('attach', {"button-text": 'Выбрать файл',"no-file": 'файл не выбран'}, {
"lang": "tr"
});

BEM.I18N.lang('tr');
