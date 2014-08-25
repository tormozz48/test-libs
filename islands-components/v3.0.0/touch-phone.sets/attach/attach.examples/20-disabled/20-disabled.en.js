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
                var _$4afa = {
                        type: 'file',
                        name: __$ctx._name
                    };
                !!__$ctx._disabled && (_$4afa.disabled = 'disabled');
                __$ctx._tabindex && (_$4afa.tabindex = __$ctx._tabindex);
                _$4afa['aria-labelledby'] = __$ctx._textId;
                return _$4afa;
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
        function _$4a4follow() {
            if (this.ctx.link === 'no-follow') {
                return undefined;
            } else {
                undefined;
            }
            var data = this._links[this.ctx.link];
            return '', __r0 = this.ctx, this.ctx = data, __r1 = $1(__$ctx), this.ctx = __r0, '', __r1;
        }
        if (!cache || !__$ctx._cacheLog) {
            return _$4a4follow.call(__$ctx);
        } else {
            undefined;
        }
        var _$4a4contents = __$ctx._buf.slice(__$ctx._cachePos).join('');
        __$ctx._cachePos = __$ctx._buf.length;
        __$ctx._cacheLog.push(_$4a4contents, {
            log: __$ctx._localLog.slice(),
            link: __$ctx.ctx.link
        });
        var _$4a4res = _$4a4follow.call(__$ctx);
        __$ctx._cachePos = __$ctx._buf.length;
        return _$4a4res;
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
        var _$4a3cached;
        function _$4a3setProperty(obj, key, value) {
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
        if (_$4a3cached = cache.get(__$ctx.ctx.cache)) {
            var _$4a3oldLinks = __$ctx._links;
            if (__$ctx.ctx.links) {
                __$ctx._links = __$ctx.ctx.links;
            } else {
                undefined;
            }
            for (var _$4a3i = 0; _$4a3i < _$4a3cached.log.length; _$4a3i++) {
                if (typeof _$4a3cached.log[_$4a3i] === 'string') {
                    __$ctx._buf.push(_$4a3cached.log[_$4a3i]);
                    continue;
                } else {
                    undefined;
                }
                var _$4a3log = _$4a3cached.log[_$4a3i], _$4a3reverseLog;
                _$4a3reverseLog = _$4a3log.log.map(function (entry) {
                    return {
                        key: entry[0],
                        value: _$4a3setProperty(this, entry[0], entry[1])
                    };
                }, __$ctx).reverse();
                {
                    '';
                    var __r0 = __$ctx.ctx, __r1 = __r0.cache;
                    __r0.cache = null;
                    var __r2 = __$ctx._cacheLog;
                    __$ctx._cacheLog = null;
                    var __r3 = __$ctx.ctx, __r4 = __r3.link;
                    __r3.link = _$4a3log.link;
                    $1(__$ctx);
                    __r0.cache = __r1;
                    __$ctx._cacheLog = __r2;
                    __r3.link = __r4;
                    '';
                }
                undefined;
                _$4a3reverseLog.forEach(function (entry) {
                    _$4a3setProperty(this, entry.key, entry.value);
                }, __$ctx);
            }
            __$ctx._links = _$4a3oldLinks;
            return _$4a3cached.res;
        } else {
            undefined;
        }
        var _$4a3cacheLog = [], _$4a3res;
        {
            '';
            var __r5 = __$ctx.ctx, __r6 = __r5.cache;
            __r5.cache = null;
            var __r7 = __$ctx._cachePos;
            __$ctx._cachePos = __$ctx._buf.length;
            var __r8 = __$ctx._cacheLog;
            __$ctx._cacheLog = _$4a3cacheLog;
            var __r9 = __$ctx._localLog;
            __$ctx._localLog = [];
            {
                _$4a3res = $1(__$ctx);
                var _$4a3tail = __$ctx._buf.slice(__$ctx._cachePos).join('');
                if (_$4a3tail) {
                    _$4a3cacheLog.push(_$4a3tail);
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
            log: _$4a3cacheLog,
            res: _$4a3res
        });
        return _$4a3res;
        return;
    }
    function $54(__$ctx) {
        var __t = $$mode;
        if (__t === 'default') {
            return $56(__$ctx);
        } else if (__t === '') {
            if (!__$ctx._.isSimple(__$ctx.ctx) === false) {
                __$ctx._listLength--;
                var _$4a1ctx = __$ctx.ctx;
                (_$4a1ctx && _$4a1ctx !== true || _$4a1ctx === 0) && __$ctx._buf.push(_$4a1ctx);
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
        var _$4a2BEM_ = __$ctx.BEM, _$4a2v = __$ctx.ctx, _$4a2buf = __$ctx._buf, _$4a2tag;
        _$4a2tag = ('', __r0 = $$mode, $$mode = 'tag', __r1 = $10(__$ctx), $$mode = __r0, '', __r1);
        typeof _$4a2tag != 'undefined' || (_$4a2tag = _$4a2v.tag);
        typeof _$4a2tag != 'undefined' || (_$4a2tag = 'div');
        if (_$4a2tag) {
            var _$4a2jsParams, _$4a2js;
            if ($$block && _$4a2v.js !== false) {
                _$4a2js = ('', __r4 = $$mode, $$mode = 'js', __r5 = $33(__$ctx), $$mode = __r4, '', __r5);
                _$4a2js = _$4a2js ? __$ctx._.extend(_$4a2v.js, _$4a2js === true ? {} : _$4a2js) : _$4a2v.js === true ? {} : _$4a2v.js;
                _$4a2js && ((_$4a2jsParams = {})[_$4a2BEM_.INTERNAL.buildClass($$block, _$4a2v.elem)] = _$4a2js);
            } else {
                undefined;
            }
            _$4a2buf.push('<', _$4a2tag);
            var _$4a2isBEM = ('', __r6 = $$mode, $$mode = 'bem', __r7 = $29(__$ctx), $$mode = __r6, '', __r7);
            typeof _$4a2isBEM != 'undefined' || (_$4a2isBEM = typeof _$4a2v.bem != 'undefined' ? _$4a2v.bem : _$4a2v.block || _$4a2v.elem);
            var _$4a2cls = ('', __r8 = $$mode, $$mode = 'cls', __r9 = $35(__$ctx), $$mode = __r8, '', __r9);
            _$4a2cls || (_$4a2cls = _$4a2v.cls);
            var _$4a2addJSInitClass = _$4a2v.block && _$4a2jsParams;
            if (_$4a2isBEM || _$4a2cls) {
                _$4a2buf.push(' class="');
                if (_$4a2isBEM) {
                    _$4a2BEM_.INTERNAL.buildClasses($$block, _$4a2v.elem, _$4a2v.elemMods || _$4a2v.mods, _$4a2buf);
                    var _$4a2mix = ('', __r10 = $$mode, $$mode = 'mix', __r11 = $18(__$ctx), $$mode = __r10, '', __r11);
                    _$4a2v.mix && (_$4a2mix = _$4a2mix ? _$4a2mix.concat(_$4a2v.mix) : _$4a2v.mix);
                    if (_$4a2mix) {
                        var _$4a2visited = {};
                        function _$4a2visitedKey(block, elem) {
                            return (block || '') + '__' + (elem || '');
                        }
                        _$4a2visited[_$4a2visitedKey($$block, $$elem)] = true;
                        if (!__$ctx._.isArray(_$4a2mix)) {
                            _$4a2mix = [_$4a2mix];
                        } else {
                            undefined;
                        }
                        for (var _$4a2i = 0; _$4a2i < _$4a2mix.length; _$4a2i++) {
                            var _$4a2mixItem = _$4a2mix[_$4a2i];
                            if (!_$4a2mixItem) {
                                continue;
                            } else {
                                undefined;
                            }
                            var _$4a2hasItem = _$4a2mixItem.block || _$4a2mixItem.elem, _$4a2block = _$4a2mixItem.block || _$4a2mixItem._block || $$block, _$4a2elem = _$4a2mixItem.elem || _$4a2mixItem._elem || $$elem, _$4a2mods = _$4a2mixItem.mods || $$mods, _$4a2elemMods = _$4a2mixItem.elemMods || {};
                            _$4a2hasItem && _$4a2buf.push(' ');
                            _$4a2BEM_.INTERNAL[_$4a2hasItem ? 'buildClasses' : 'buildModsClasses'](_$4a2block, _$4a2mixItem.elem || _$4a2mixItem._elem || (_$4a2mixItem.block ? undefined : $$elem), _$4a2mixItem.elemMods || _$4a2mixItem.mods, _$4a2buf);
                            if (_$4a2mixItem.js) {
                                (_$4a2jsParams || (_$4a2jsParams = {}))[_$4a2BEM_.INTERNAL.buildClass(_$4a2block, _$4a2mixItem.elem)] = _$4a2mixItem.js === true ? {} : _$4a2mixItem.js;
                                _$4a2addJSInitClass || (_$4a2addJSInitClass = _$4a2block && !_$4a2mixItem.elem);
                            } else {
                                undefined;
                            }
                            if (_$4a2hasItem && !_$4a2visited[_$4a2visitedKey(_$4a2block, _$4a2elem)]) {
                                _$4a2visited[_$4a2visitedKey(_$4a2block, _$4a2elem)] = true;
                                var _$4a2nestedMix = ('', __r12 = $$block, $$block = _$4a2block, __r13 = $$elem, $$elem = _$4a2elem, __r14 = $$mods, $$mods = _$4a2mods, __r15 = $$elemMods, $$elemMods = _$4a2elemMods, __r16 = $$mode, $$mode = 'mix', __r17 = $18(__$ctx), $$block = __r12, $$elem = __r13, $$mods = __r14, $$elemMods = __r15, $$mode = __r16, '', __r17);
                                if (_$4a2nestedMix) {
                                    for (var _$4a2j = 0; _$4a2j < _$4a2nestedMix.length; _$4a2j++) {
                                        var _$4a2nestedItem = _$4a2nestedMix[_$4a2j];
                                        if (!_$4a2nestedItem.block && !_$4a2nestedItem.elem || !_$4a2visited[_$4a2visitedKey(_$4a2nestedItem.block, _$4a2nestedItem.elem)]) {
                                            _$4a2nestedItem._block = _$4a2block;
                                            _$4a2nestedItem._elem = _$4a2elem;
                                            _$4a2mix.splice(_$4a2i + 1, 0, _$4a2nestedItem);
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
                _$4a2cls && _$4a2buf.push(_$4a2isBEM ? ' ' : '', _$4a2cls);
                _$4a2addJSInitClass && _$4a2buf.push(' i-bem');
                _$4a2buf.push('"');
            } else {
                undefined;
            }
            if (_$4a2jsParams) {
                var _$4a2jsAttr = ('', __r20 = $$mode, $$mode = 'jsAttr', __r21 = $31(__$ctx), $$mode = __r20, '', __r21);
                _$4a2buf.push(' ', _$4a2jsAttr || 'data-bem', '="', __$ctx._.attrEscape(JSON.stringify(_$4a2jsParams)), '"');
            } else {
                undefined;
            }
            var _$4a2attrs = ('', __r22 = $$mode, $$mode = 'attrs', __r23 = $2(__$ctx), $$mode = __r22, '', __r23);
            _$4a2attrs = __$ctx._.extend(_$4a2attrs, _$4a2v.attrs);
            if (_$4a2attrs) {
                var _$4a2name;
                for (_$4a2name in _$4a2attrs) {
                    if (_$4a2attrs[_$4a2name] === undefined) {
                        continue;
                    } else {
                        undefined;
                    }
                    _$4a2buf.push(' ', _$4a2name, '="', __$ctx._.attrEscape(_$4a2attrs[_$4a2name]), '"');
                }
            } else {
                undefined;
            }
        } else {
            undefined;
        }
        if (__$ctx._.isShortTag(_$4a2tag)) {
            _$4a2buf.push('/>');
        } else {
            _$4a2tag && _$4a2buf.push('>');
            var _$4a2content = ('', __r24 = $$mode, $$mode = 'content', __r25 = $27(__$ctx), $$mode = __r24, '', __r25);
            if (_$4a2content || _$4a2content === 0) {
                var _$4a2isBEM = $$block || $$elem;
                {
                    '';
                    var __r26 = __$ctx._notNewList;
                    __$ctx._notNewList = false;
                    var __r27 = __$ctx.position;
                    __$ctx.position = _$4a2isBEM ? 1 : __$ctx.position;
                    var __r28 = __$ctx._listLength;
                    __$ctx._listLength = _$4a2isBEM ? 1 : __$ctx._listLength;
                    var __r29 = __$ctx.ctx;
                    __$ctx.ctx = _$4a2content;
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
            _$4a2tag && _$4a2buf.push('</', _$4a2tag, '>');
        }
        return;
    }
    function $65(__$ctx) {
        var _$49zv = __$ctx.ctx, _$49zl = _$49zv.length, _$49zi = 0, _$49zprevPos = __$ctx.position, _$49zprevNotNewList = __$ctx._notNewList;
        if (_$49zprevNotNewList) {
            __$ctx._listLength += _$49zl - 1;
        } else {
            __$ctx.position = 0;
            __$ctx._listLength = _$49zl;
        }
        __$ctx._notNewList = true;
        while (_$49zi < _$49zl) {
            var _$49znewCtx = _$49zv[_$49zi++];
            {
                '';
                var __r0 = __$ctx.ctx;
                __$ctx.ctx = _$49znewCtx == null ? '' : _$49znewCtx;
                $36(__$ctx);
                __$ctx.ctx = __r0;
                '';
            }
            undefined;
        }
        _$49zprevNotNewList || (__$ctx.position = _$49zprevPos);
        return;
    }
    function $68(__$ctx) {
        var _$49yvBlock = __$ctx.ctx.block, _$49yvElem = __$ctx.ctx.elem, _$49yblock = __$ctx._currBlock || $$block;
        __$ctx.ctx || (__$ctx.ctx = {});
        {
            '';
            var __r0 = $$mode;
            $$mode = 'default';
            var __r1 = __$ctx._links;
            __$ctx._links = __$ctx.ctx.links || __$ctx._links;
            var __r2 = $$block;
            $$block = _$49yvBlock || (_$49yvElem ? _$49yblock : undefined);
            var __r3 = __$ctx._currBlock;
            __$ctx._currBlock = _$49yvBlock || _$49yvElem ? undefined : _$49yblock;
            var __r4 = $$elem;
            $$elem = __$ctx.ctx.elem;
            var __r5 = $$mods;
            $$mods = (_$49yvBlock ? __$ctx.ctx.mods : $$mods) || {};
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
"lang": "en"
});

BEM.I18N.lang('en');
