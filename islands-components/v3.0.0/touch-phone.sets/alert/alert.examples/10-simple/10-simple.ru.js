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
            return $15(__$ctx);
        } else if (__t === 'default') {
            return $44(__$ctx);
        } else if (__t === 'js') {
            return $63(__$ctx);
        } else if (__t === 'tag') {
            return $71(__$ctx);
        } else {
            return $85(__$ctx);
        }
    }
    function $2(__$ctx) {
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
                return $85(__$ctx);
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
                return $85(__$ctx);
            }
        } else {
            return $85(__$ctx);
        }
    }
    function $15(__$ctx) {
        if ($$block === 'button') {
            return $16(__$ctx);
        } else {
            return $85(__$ctx);
        }
    }
    function $16(__$ctx) {
        if (!(__$ctx['__$anflg836'] !== true) === false) {
            if (!__$ctx.ctx.url === false) {
                if (!!$$elem === false) {
                    var __r0, __r1;
                    var _$68tctx = __$ctx.ctx, _$68tp = ('', __r0 = __$ctx['__$anflg836'], __$ctx['__$anflg836'] = true, __r1 = $16(__$ctx), __$ctx['__$anflg836'] = __r0, '', __r1), _$68ta = { href: _$68tctx.url };
                    _$68tctx.target && (_$68ta.target = _$68tctx.target);
                    $$mods.disabled && (_$68ta['aria-disabled'] = true);
                    return __$ctx._.extend(_$68tp, _$68ta);
                    return;
                } else {
                    return $25(__$ctx);
                }
            } else {
                return $25(__$ctx);
            }
        } else {
            return $25(__$ctx);
        }
    }
    function $25(__$ctx) {
        if (!(__$ctx['__$anflg835'] !== true) === false) {
            if (!!$$elem === false) {
                if (!!__$ctx.ctx.url === false) {
                    return $29(__$ctx);
                } else {
                    return $34(__$ctx);
                }
            } else {
                return $34(__$ctx);
            }
        } else {
            return $34(__$ctx);
        }
    }
    function $29(__$ctx) {
        var __r0, __r1;
        var _$68sctx = __$ctx.ctx, _$68sp = ('', __r0 = __$ctx['__$anflg835'], __$ctx['__$anflg835'] = true, __r1 = $16(__$ctx), __$ctx['__$anflg835'] = __r0, '', __r1), _$68sa = { type: _$68sctx.type || 'button' }, _$68sprops = [
                'name',
                'value'
            ], _$68si;
        while (_$68si = _$68sprops.shift()) {
            _$68sctx[_$68si] && (_$68sa[_$68si] = _$68sctx[_$68si]);
        }
        $$mods.disabled && (_$68sa.disabled = 'disabled');
        return __$ctx._.extend(_$68sp, _$68sa);
        return;
    }
    function $34(__$ctx) {
        if (!true === false) {
            if (!!$$elem === false) {
                var _$68rctx = __$ctx.ctx, _$68ra = { role: 'button' };
                _$68rctx.tabindex && (_$68ra.tabindex = _$68rctx.tabindex);
                return _$68ra;
                return;
            } else {
                return $85(__$ctx);
            }
        } else {
            return $85(__$ctx);
        }
    }
    function $44(__$ctx) {
        var __t = $$block;
        if (__t === 'button') {
            return $45(__$ctx);
        } else if (__t === 'popup') {
            return $53(__$ctx);
        } else {
            return $85(__$ctx);
        }
    }
    function $45(__$ctx) {
        if (!(__$ctx['__$anflg834'] !== true) === false) {
            if (!!$$elem === false) {
                var _$68qmods = __$ctx.ctx.mods || {};
                _$68qmods.theme = _$68qmods.theme || 'normal';
                {
                    '';
                    var __r0 = __$ctx['__$anflg834'];
                    __$ctx['__$anflg834'] = true;
                    {
                        '';
                        var __r1 = __$ctx.ctx, __r2 = __r1.mods;
                        __r1.mods = _$68qmods;
                        $45(__$ctx);
                        __r1.mods = __r2;
                        '';
                    }
                    __$ctx['__$anflg834'] = __r0;
                    '';
                }
                undefined;
                return;
            } else {
                return $85(__$ctx);
            }
        } else {
            return $85(__$ctx);
        }
    }
    function $53(__$ctx) {
        if (!!__$ctx._popupDefaults === false) {
            if (!!$$elem === false) {
                return $56(__$ctx);
            } else {
                return $85(__$ctx);
            }
        } else {
            return $85(__$ctx);
        }
    }
    function $56(__$ctx) {
        var _$68lctx = __$ctx.ctx;
        _$68lctx.mods = $$mods = __$ctx.extend({
            theme: 'ffffff',
            autoclosable: 'yes',
            adaptive: 'yes',
            animate: 'yes'
        }, $$mods);
        if (_$68lctx.zIndex) {
            var _$68lattrs = _$68lctx.attrs || (_$68lctx.attrs = {});
            _$68lattrs.style = (_$68lattrs.style || '') + ';z-index:' + _$68lctx.zIndex + ';';
        } else {
            undefined;
        }
        {
            '';
            var __r0 = __$ctx._popupDefaults;
            __$ctx._popupDefaults = true;
            $53(__$ctx);
            __$ctx._popupDefaults = __r0;
            '';
        }
        undefined;
        return;
    }
    function $63(__$ctx) {
        if ($$block === 'button') {
            if (!!$$elem === false) {
                return true;
                return;
            } else {
                return $85(__$ctx);
            }
        } else {
            return $85(__$ctx);
        }
    }
    function $71(__$ctx) {
        if ($$block === 'button') {
            if (!__$ctx.ctx.url === false) {
                if (!!$$elem === false) {
                    return 'a';
                    return;
                } else {
                    return $78(__$ctx);
                }
            } else {
                return $78(__$ctx);
            }
        } else {
            return $85(__$ctx);
        }
    }
    function $78(__$ctx) {
        if (!!$$elem === false) {
            return 'button';
            return;
        } else {
            return $85(__$ctx);
        }
    }
    function $85(__$ctx) {
        if ($$block === 'popup') {
            if (!($$mode === '' && __$ctx._popupDefaults) === false) {
                delete __$ctx._popupDefaults;
                applyc(__$ctx);
                undefined;
                return;
            } else {
                return $91(__$ctx);
            }
        } else {
            return $91(__$ctx);
        }
    }
    function $91(__$ctx) {
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
                        return $112(__$ctx);
                    } else {
                        return $117(__$ctx);
                    }
                } else {
                    return $117(__$ctx);
                }
            } else {
                return $117(__$ctx);
            }
        }
    }
    function $112(__$ctx) {
        var __r0, __r1;
        function _$68bfollow() {
            if (this.ctx.link === 'no-follow') {
                return undefined;
            } else {
                undefined;
            }
            var data = this._links[this.ctx.link];
            return '', __r0 = this.ctx, this.ctx = data, __r1 = $1(__$ctx), this.ctx = __r0, '', __r1;
        }
        if (!cache || !__$ctx._cacheLog) {
            return _$68bfollow.call(__$ctx);
        } else {
            undefined;
        }
        var _$68bcontents = __$ctx._buf.slice(__$ctx._cachePos).join('');
        __$ctx._cachePos = __$ctx._buf.length;
        __$ctx._cacheLog.push(_$68bcontents, {
            log: __$ctx._localLog.slice(),
            link: __$ctx.ctx.link
        });
        var _$68bres = _$68bfollow.call(__$ctx);
        __$ctx._cachePos = __$ctx._buf.length;
        return _$68bres;
        return;
    }
    function $117(__$ctx) {
        if (!cache === false) {
            if (!__$ctx.ctx === false) {
                if (!__$ctx.ctx.cache === false) {
                    return $121(__$ctx);
                } else {
                    return $126(__$ctx);
                }
            } else {
                return $126(__$ctx);
            }
        } else {
            return $126(__$ctx);
        }
    }
    function $121(__$ctx) {
        var _$68acached;
        function _$68asetProperty(obj, key, value) {
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
        if (_$68acached = cache.get(__$ctx.ctx.cache)) {
            var _$68aoldLinks = __$ctx._links;
            if (__$ctx.ctx.links) {
                __$ctx._links = __$ctx.ctx.links;
            } else {
                undefined;
            }
            for (var _$68ai = 0; _$68ai < _$68acached.log.length; _$68ai++) {
                if (typeof _$68acached.log[_$68ai] === 'string') {
                    __$ctx._buf.push(_$68acached.log[_$68ai]);
                    continue;
                } else {
                    undefined;
                }
                var _$68alog = _$68acached.log[_$68ai], _$68areverseLog;
                _$68areverseLog = _$68alog.log.map(function (entry) {
                    return {
                        key: entry[0],
                        value: _$68asetProperty(this, entry[0], entry[1])
                    };
                }, __$ctx).reverse();
                {
                    '';
                    var __r0 = __$ctx.ctx, __r1 = __r0.cache;
                    __r0.cache = null;
                    var __r2 = __$ctx._cacheLog;
                    __$ctx._cacheLog = null;
                    var __r3 = __$ctx.ctx, __r4 = __r3.link;
                    __r3.link = _$68alog.link;
                    $1(__$ctx);
                    __r0.cache = __r1;
                    __$ctx._cacheLog = __r2;
                    __r3.link = __r4;
                    '';
                }
                undefined;
                _$68areverseLog.forEach(function (entry) {
                    _$68asetProperty(this, entry.key, entry.value);
                }, __$ctx);
            }
            __$ctx._links = _$68aoldLinks;
            return _$68acached.res;
        } else {
            undefined;
        }
        var _$68acacheLog = [], _$68ares;
        {
            '';
            var __r5 = __$ctx.ctx, __r6 = __r5.cache;
            __r5.cache = null;
            var __r7 = __$ctx._cachePos;
            __$ctx._cachePos = __$ctx._buf.length;
            var __r8 = __$ctx._cacheLog;
            __$ctx._cacheLog = _$68acacheLog;
            var __r9 = __$ctx._localLog;
            __$ctx._localLog = [];
            {
                _$68ares = $1(__$ctx);
                var _$68atail = __$ctx._buf.slice(__$ctx._cachePos).join('');
                if (_$68atail) {
                    _$68acacheLog.push(_$68atail);
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
            log: _$68acacheLog,
            res: _$68ares
        });
        return _$68ares;
        return;
    }
    function $126(__$ctx) {
        var __t = $$mode;
        if (__t === 'default') {
            return $128(__$ctx);
        } else if (__t === '') {
            if (!__$ctx._.isSimple(__$ctx.ctx) === false) {
                __$ctx._listLength--;
                var _$688ctx = __$ctx.ctx;
                (_$688ctx && _$688ctx !== true || _$688ctx === 0) && __$ctx._buf.push(_$688ctx);
                return;
            } else {
                if (!!__$ctx.ctx === false) {
                    __$ctx._listLength--;
                    return;
                } else {
                    if (!__$ctx._.isArray(__$ctx.ctx) === false) {
                        return $137(__$ctx);
                    } else {
                        if (!true === false) {
                            return $140(__$ctx);
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
    function $128(__$ctx) {
        var __r13, __r0, __r4, __r5, __r6, __r7, __r8, __r9, __r10, __r11, __r12, __r1, __r14, __r15, __r16, __r17, __r20, __r21, __r22, __r23, __r24, __r25;
        var _$689BEM_ = __$ctx.BEM, _$689v = __$ctx.ctx, _$689buf = __$ctx._buf, _$689tag;
        _$689tag = ('', __r0 = $$mode, $$mode = 'tag', __r1 = $71(__$ctx), $$mode = __r0, '', __r1);
        typeof _$689tag != 'undefined' || (_$689tag = _$689v.tag);
        typeof _$689tag != 'undefined' || (_$689tag = 'div');
        if (_$689tag) {
            var _$689jsParams, _$689js;
            if ($$block && _$689v.js !== false) {
                _$689js = ('', __r4 = $$mode, $$mode = 'js', __r5 = $63(__$ctx), $$mode = __r4, '', __r5);
                _$689js = _$689js ? __$ctx._.extend(_$689v.js, _$689js === true ? {} : _$689js) : _$689v.js === true ? {} : _$689v.js;
                _$689js && ((_$689jsParams = {})[_$689BEM_.INTERNAL.buildClass($$block, _$689v.elem)] = _$689js);
            } else {
                undefined;
            }
            _$689buf.push('<', _$689tag);
            var _$689isBEM = ('', __r6 = $$mode, $$mode = 'bem', __r7 = $85(__$ctx), $$mode = __r6, '', __r7);
            typeof _$689isBEM != 'undefined' || (_$689isBEM = typeof _$689v.bem != 'undefined' ? _$689v.bem : _$689v.block || _$689v.elem);
            var _$689cls = ('', __r8 = $$mode, $$mode = 'cls', __r9 = $85(__$ctx), $$mode = __r8, '', __r9);
            _$689cls || (_$689cls = _$689v.cls);
            var _$689addJSInitClass = _$689v.block && _$689jsParams;
            if (_$689isBEM || _$689cls) {
                _$689buf.push(' class="');
                if (_$689isBEM) {
                    _$689BEM_.INTERNAL.buildClasses($$block, _$689v.elem, _$689v.elemMods || _$689v.mods, _$689buf);
                    var _$689mix = ('', __r10 = $$mode, $$mode = 'mix', __r11 = $85(__$ctx), $$mode = __r10, '', __r11);
                    _$689v.mix && (_$689mix = _$689mix ? _$689mix.concat(_$689v.mix) : _$689v.mix);
                    if (_$689mix) {
                        var _$689visited = {};
                        function _$689visitedKey(block, elem) {
                            return (block || '') + '__' + (elem || '');
                        }
                        _$689visited[_$689visitedKey($$block, $$elem)] = true;
                        if (!__$ctx._.isArray(_$689mix)) {
                            _$689mix = [_$689mix];
                        } else {
                            undefined;
                        }
                        for (var _$689i = 0; _$689i < _$689mix.length; _$689i++) {
                            var _$689mixItem = _$689mix[_$689i];
                            if (!_$689mixItem) {
                                continue;
                            } else {
                                undefined;
                            }
                            var _$689hasItem = _$689mixItem.block || _$689mixItem.elem, _$689block = _$689mixItem.block || _$689mixItem._block || $$block, _$689elem = _$689mixItem.elem || _$689mixItem._elem || $$elem, _$689mods = _$689mixItem.mods || $$mods, _$689elemMods = _$689mixItem.elemMods || {};
                            _$689hasItem && _$689buf.push(' ');
                            _$689BEM_.INTERNAL[_$689hasItem ? 'buildClasses' : 'buildModsClasses'](_$689block, _$689mixItem.elem || _$689mixItem._elem || (_$689mixItem.block ? undefined : $$elem), _$689mixItem.elemMods || _$689mixItem.mods, _$689buf);
                            if (_$689mixItem.js) {
                                (_$689jsParams || (_$689jsParams = {}))[_$689BEM_.INTERNAL.buildClass(_$689block, _$689mixItem.elem)] = _$689mixItem.js === true ? {} : _$689mixItem.js;
                                _$689addJSInitClass || (_$689addJSInitClass = _$689block && !_$689mixItem.elem);
                            } else {
                                undefined;
                            }
                            if (_$689hasItem && !_$689visited[_$689visitedKey(_$689block, _$689elem)]) {
                                _$689visited[_$689visitedKey(_$689block, _$689elem)] = true;
                                var _$689nestedMix = ('', __r12 = $$block, $$block = _$689block, __r13 = $$elem, $$elem = _$689elem, __r14 = $$mods, $$mods = _$689mods, __r15 = $$elemMods, $$elemMods = _$689elemMods, __r16 = $$mode, $$mode = 'mix', __r17 = $85(__$ctx), $$block = __r12, $$elem = __r13, $$mods = __r14, $$elemMods = __r15, $$mode = __r16, '', __r17);
                                if (_$689nestedMix) {
                                    for (var _$689j = 0; _$689j < _$689nestedMix.length; _$689j++) {
                                        var _$689nestedItem = _$689nestedMix[_$689j];
                                        if (!_$689nestedItem.block && !_$689nestedItem.elem || !_$689visited[_$689visitedKey(_$689nestedItem.block, _$689nestedItem.elem)]) {
                                            _$689nestedItem._block = _$689block;
                                            _$689nestedItem._elem = _$689elem;
                                            _$689mix.splice(_$689i + 1, 0, _$689nestedItem);
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
                _$689cls && _$689buf.push(_$689isBEM ? ' ' : '', _$689cls);
                _$689addJSInitClass && _$689buf.push(' i-bem');
                _$689buf.push('"');
            } else {
                undefined;
            }
            if (_$689jsParams) {
                var _$689jsAttr = ('', __r20 = $$mode, $$mode = 'jsAttr', __r21 = $85(__$ctx), $$mode = __r20, '', __r21);
                _$689buf.push(' ', _$689jsAttr || 'data-bem', '="', __$ctx._.attrEscape(JSON.stringify(_$689jsParams)), '"');
            } else {
                undefined;
            }
            var _$689attrs = ('', __r22 = $$mode, $$mode = 'attrs', __r23 = $15(__$ctx), $$mode = __r22, '', __r23);
            _$689attrs = __$ctx._.extend(_$689attrs, _$689v.attrs);
            if (_$689attrs) {
                var _$689name;
                for (_$689name in _$689attrs) {
                    if (_$689attrs[_$689name] === undefined) {
                        continue;
                    } else {
                        undefined;
                    }
                    _$689buf.push(' ', _$689name, '="', __$ctx._.attrEscape(_$689attrs[_$689name]), '"');
                }
            } else {
                undefined;
            }
        } else {
            undefined;
        }
        if (__$ctx._.isShortTag(_$689tag)) {
            _$689buf.push('/>');
        } else {
            _$689tag && _$689buf.push('>');
            var _$689content = ('', __r24 = $$mode, $$mode = 'content', __r25 = $2(__$ctx), $$mode = __r24, '', __r25);
            if (_$689content || _$689content === 0) {
                var _$689isBEM = $$block || $$elem;
                {
                    '';
                    var __r26 = __$ctx._notNewList;
                    __$ctx._notNewList = false;
                    var __r27 = __$ctx.position;
                    __$ctx.position = _$689isBEM ? 1 : __$ctx.position;
                    var __r28 = __$ctx._listLength;
                    __$ctx._listLength = _$689isBEM ? 1 : __$ctx._listLength;
                    var __r29 = __$ctx.ctx;
                    __$ctx.ctx = _$689content;
                    var __r30 = $$mode;
                    $$mode = '';
                    $85(__$ctx);
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
            _$689tag && _$689buf.push('</', _$689tag, '>');
        }
        return;
    }
    function $137(__$ctx) {
        var _$686v = __$ctx.ctx, _$686l = _$686v.length, _$686i = 0, _$686prevPos = __$ctx.position, _$686prevNotNewList = __$ctx._notNewList;
        if (_$686prevNotNewList) {
            __$ctx._listLength += _$686l - 1;
        } else {
            __$ctx.position = 0;
            __$ctx._listLength = _$686l;
        }
        __$ctx._notNewList = true;
        while (_$686i < _$686l) {
            var _$686newCtx = _$686v[_$686i++];
            {
                '';
                var __r0 = __$ctx.ctx;
                __$ctx.ctx = _$686newCtx == null ? '' : _$686newCtx;
                $85(__$ctx);
                __$ctx.ctx = __r0;
                '';
            }
            undefined;
        }
        _$686prevNotNewList || (__$ctx.position = _$686prevPos);
        return;
    }
    function $140(__$ctx) {
        var _$685vBlock = __$ctx.ctx.block, _$685vElem = __$ctx.ctx.elem, _$685block = __$ctx._currBlock || $$block;
        __$ctx.ctx || (__$ctx.ctx = {});
        {
            '';
            var __r0 = $$mode;
            $$mode = 'default';
            var __r1 = __$ctx._links;
            __$ctx._links = __$ctx.ctx.links || __$ctx._links;
            var __r2 = $$block;
            $$block = _$685vBlock || (_$685vElem ? _$685block : undefined);
            var __r3 = __$ctx._currBlock;
            __$ctx._currBlock = _$685vBlock || _$685vElem ? undefined : _$685block;
            var __r4 = $$elem;
            $$elem = __$ctx.ctx.elem;
            var __r5 = $$mods;
            $$mods = (_$685vBlock ? __$ctx.ctx.mods : $$mods) || {};
            var __r6 = $$elemMods;
            $$elemMods = __$ctx.ctx.elemMods || {};
            {
                $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
                $44(__$ctx);
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
/*borschik:include:../../../../libs/bem-bl/blocks-touch/i-jquery/__css-prefix/i-jquery__css-prefix.js*/;
/*borschik:include:../../../../touch-phone.blocks/alert/alert.js*/;
/*borschik:include:../../../../common.blocks/popup/popup.js*/;
/*borschik:include:../../../../common.blocks/popup/_autoclosable/popup_autoclosable_yes.js*/;
/*borschik:include:../../../../common.blocks/popup/_adaptive/popup_adaptive_yes.js*/;
/*borschik:include:../../../../common.blocks/popup/_animate/popup_animate_yes.js*/;
/*borschik:include:../../../../common.blocks/popup/__under/popup__under.js*/;
/*borschik:include:../../../../touch.blocks/popup/__under/popup__under.js*/;
/*borschik:include:../../../../touch-phone.blocks/alert-controller/alert-controller.js*/;
/*borschik:include:../../../../common.blocks/button/button.js*/;
/*borschik:include:../../../../touch.blocks/button/button.js*/;
/*borschik:include:../../../../touch-phone.blocks/alert/alert.examples/10-simple.blocks/button/_message/button_message_error.js*/;
/*borschik:include:../../../../touch-phone.blocks/alert/alert.examples/10-simple.blocks/button/_message/button_message_block.js*/;
/*borschik:include:../../../../touch-phone.blocks/alert/alert.examples/10-simple.blocks/button/_message/button_message_info.js*/;


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
