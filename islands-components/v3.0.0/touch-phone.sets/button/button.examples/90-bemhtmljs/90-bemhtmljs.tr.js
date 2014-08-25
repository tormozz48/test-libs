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
        if (!(__$ctx['__$anflg562'] !== true) === false) {
            if (!__$ctx.ctx.url === false) {
                if (!!$$elem === false) {
                    var __r0, __r1;
                    var _$4fdctx = __$ctx.ctx, _$4fdp = ('', __r0 = __$ctx['__$anflg562'], __$ctx['__$anflg562'] = true, __r1 = $11(__$ctx), __$ctx['__$anflg562'] = __r0, '', __r1), _$4fda = { href: _$4fdctx.url };
                    _$4fdctx.target && (_$4fda.target = _$4fdctx.target);
                    $$mods.disabled && (_$4fda['aria-disabled'] = true);
                    return __$ctx._.extend(_$4fdp, _$4fda);
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
        if (!(__$ctx['__$anflg561'] !== true) === false) {
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
        var _$4fcctx = __$ctx.ctx, _$4fcp = ('', __r0 = __$ctx['__$anflg561'], __$ctx['__$anflg561'] = true, __r1 = $11(__$ctx), __$ctx['__$anflg561'] = __r0, '', __r1), _$4fca = { type: _$4fcctx.type || 'button' }, _$4fcprops = [
                'name',
                'value'
            ], _$4fci;
        while (_$4fci = _$4fcprops.shift()) {
            _$4fcctx[_$4fci] && (_$4fca[_$4fci] = _$4fcctx[_$4fci]);
        }
        $$mods.disabled && (_$4fca.disabled = 'disabled');
        return __$ctx._.extend(_$4fcp, _$4fca);
        return;
    }
    function $29(__$ctx) {
        if (!true === false) {
            if (!!$$elem === false) {
                var _$4fbctx = __$ctx.ctx, _$4fba = { role: 'button' };
                _$4fbctx.tabindex && (_$4fba.tabindex = _$4fbctx.tabindex);
                return _$4fba;
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
        if (!(__$ctx['__$anflg560'] !== true) === false) {
            if (!!$$elem === false) {
                var _$4famods = __$ctx.ctx.mods || {};
                _$4famods.theme = _$4famods.theme || 'normal';
                {
                    '';
                    var __r0 = __$ctx['__$anflg560'];
                    __$ctx['__$anflg560'] = true;
                    {
                        '';
                        var __r1 = __$ctx.ctx, __r2 = __r1.mods;
                        __r1.mods = _$4famods;
                        $40(__$ctx);
                        __r1.mods = __r2;
                        '';
                    }
                    __$ctx['__$anflg560'] = __r0;
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
        function _$4eyfollow() {
            if (this.ctx.link === 'no-follow') {
                return undefined;
            } else {
                undefined;
            }
            var data = this._links[this.ctx.link];
            return '', __r0 = this.ctx, this.ctx = data, __r1 = $1(__$ctx), this.ctx = __r0, '', __r1;
        }
        if (!cache || !__$ctx._cacheLog) {
            return _$4eyfollow.call(__$ctx);
        } else {
            undefined;
        }
        var _$4eycontents = __$ctx._buf.slice(__$ctx._cachePos).join('');
        __$ctx._cachePos = __$ctx._buf.length;
        __$ctx._cacheLog.push(_$4eycontents, {
            log: __$ctx._localLog.slice(),
            link: __$ctx.ctx.link
        });
        var _$4eyres = _$4eyfollow.call(__$ctx);
        __$ctx._cachePos = __$ctx._buf.length;
        return _$4eyres;
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
        var _$4excached;
        function _$4exsetProperty(obj, key, value) {
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
        if (_$4excached = cache.get(__$ctx.ctx.cache)) {
            var _$4exoldLinks = __$ctx._links;
            if (__$ctx.ctx.links) {
                __$ctx._links = __$ctx.ctx.links;
            } else {
                undefined;
            }
            for (var _$4exi = 0; _$4exi < _$4excached.log.length; _$4exi++) {
                if (typeof _$4excached.log[_$4exi] === 'string') {
                    __$ctx._buf.push(_$4excached.log[_$4exi]);
                    continue;
                } else {
                    undefined;
                }
                var _$4exlog = _$4excached.log[_$4exi], _$4exreverseLog;
                _$4exreverseLog = _$4exlog.log.map(function (entry) {
                    return {
                        key: entry[0],
                        value: _$4exsetProperty(this, entry[0], entry[1])
                    };
                }, __$ctx).reverse();
                {
                    '';
                    var __r0 = __$ctx.ctx, __r1 = __r0.cache;
                    __r0.cache = null;
                    var __r2 = __$ctx._cacheLog;
                    __$ctx._cacheLog = null;
                    var __r3 = __$ctx.ctx, __r4 = __r3.link;
                    __r3.link = _$4exlog.link;
                    $1(__$ctx);
                    __r0.cache = __r1;
                    __$ctx._cacheLog = __r2;
                    __r3.link = __r4;
                    '';
                }
                undefined;
                _$4exreverseLog.forEach(function (entry) {
                    _$4exsetProperty(this, entry.key, entry.value);
                }, __$ctx);
            }
            __$ctx._links = _$4exoldLinks;
            return _$4excached.res;
        } else {
            undefined;
        }
        var _$4excacheLog = [], _$4exres;
        {
            '';
            var __r5 = __$ctx.ctx, __r6 = __r5.cache;
            __r5.cache = null;
            var __r7 = __$ctx._cachePos;
            __$ctx._cachePos = __$ctx._buf.length;
            var __r8 = __$ctx._cacheLog;
            __$ctx._cacheLog = _$4excacheLog;
            var __r9 = __$ctx._localLog;
            __$ctx._localLog = [];
            {
                _$4exres = $1(__$ctx);
                var _$4extail = __$ctx._buf.slice(__$ctx._cachePos).join('');
                if (_$4extail) {
                    _$4excacheLog.push(_$4extail);
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
            log: _$4excacheLog,
            res: _$4exres
        });
        return _$4exres;
        return;
    }
    function $98(__$ctx) {
        var __t = $$mode;
        if (__t === 'default') {
            return $100(__$ctx);
        } else if (__t === '') {
            if (!__$ctx._.isSimple(__$ctx.ctx) === false) {
                __$ctx._listLength--;
                var _$4evctx = __$ctx.ctx;
                (_$4evctx && _$4evctx !== true || _$4evctx === 0) && __$ctx._buf.push(_$4evctx);
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
        var _$4ewBEM_ = __$ctx.BEM, _$4ewv = __$ctx.ctx, _$4ewbuf = __$ctx._buf, _$4ewtag;
        _$4ewtag = ('', __r0 = $$mode, $$mode = 'tag', __r1 = $58(__$ctx), $$mode = __r0, '', __r1);
        typeof _$4ewtag != 'undefined' || (_$4ewtag = _$4ewv.tag);
        typeof _$4ewtag != 'undefined' || (_$4ewtag = 'div');
        if (_$4ewtag) {
            var _$4ewjsParams, _$4ewjs;
            if ($$block && _$4ewv.js !== false) {
                _$4ewjs = ('', __r4 = $$mode, $$mode = 'js', __r5 = $50(__$ctx), $$mode = __r4, '', __r5);
                _$4ewjs = _$4ewjs ? __$ctx._.extend(_$4ewv.js, _$4ewjs === true ? {} : _$4ewjs) : _$4ewv.js === true ? {} : _$4ewv.js;
                _$4ewjs && ((_$4ewjsParams = {})[_$4ewBEM_.INTERNAL.buildClass($$block, _$4ewv.elem)] = _$4ewjs);
            } else {
                undefined;
            }
            _$4ewbuf.push('<', _$4ewtag);
            var _$4ewisBEM = ('', __r6 = $$mode, $$mode = 'bem', __r7 = $75(__$ctx), $$mode = __r6, '', __r7);
            typeof _$4ewisBEM != 'undefined' || (_$4ewisBEM = typeof _$4ewv.bem != 'undefined' ? _$4ewv.bem : _$4ewv.block || _$4ewv.elem);
            var _$4ewcls = ('', __r8 = $$mode, $$mode = 'cls', __r9 = $79(__$ctx), $$mode = __r8, '', __r9);
            _$4ewcls || (_$4ewcls = _$4ewv.cls);
            var _$4ewaddJSInitClass = _$4ewv.block && _$4ewjsParams;
            if (_$4ewisBEM || _$4ewcls) {
                _$4ewbuf.push(' class="');
                if (_$4ewisBEM) {
                    _$4ewBEM_.INTERNAL.buildClasses($$block, _$4ewv.elem, _$4ewv.elemMods || _$4ewv.mods, _$4ewbuf);
                    var _$4ewmix = ('', __r10 = $$mode, $$mode = 'mix', __r11 = $73(__$ctx), $$mode = __r10, '', __r11);
                    _$4ewv.mix && (_$4ewmix = _$4ewmix ? _$4ewmix.concat(_$4ewv.mix) : _$4ewv.mix);
                    if (_$4ewmix) {
                        var _$4ewvisited = {};
                        function _$4ewvisitedKey(block, elem) {
                            return (block || '') + '__' + (elem || '');
                        }
                        _$4ewvisited[_$4ewvisitedKey($$block, $$elem)] = true;
                        if (!__$ctx._.isArray(_$4ewmix)) {
                            _$4ewmix = [_$4ewmix];
                        } else {
                            undefined;
                        }
                        for (var _$4ewi = 0; _$4ewi < _$4ewmix.length; _$4ewi++) {
                            var _$4ewmixItem = _$4ewmix[_$4ewi];
                            if (!_$4ewmixItem) {
                                continue;
                            } else {
                                undefined;
                            }
                            var _$4ewhasItem = _$4ewmixItem.block || _$4ewmixItem.elem, _$4ewblock = _$4ewmixItem.block || _$4ewmixItem._block || $$block, _$4ewelem = _$4ewmixItem.elem || _$4ewmixItem._elem || $$elem, _$4ewmods = _$4ewmixItem.mods || $$mods, _$4ewelemMods = _$4ewmixItem.elemMods || {};
                            _$4ewhasItem && _$4ewbuf.push(' ');
                            _$4ewBEM_.INTERNAL[_$4ewhasItem ? 'buildClasses' : 'buildModsClasses'](_$4ewblock, _$4ewmixItem.elem || _$4ewmixItem._elem || (_$4ewmixItem.block ? undefined : $$elem), _$4ewmixItem.elemMods || _$4ewmixItem.mods, _$4ewbuf);
                            if (_$4ewmixItem.js) {
                                (_$4ewjsParams || (_$4ewjsParams = {}))[_$4ewBEM_.INTERNAL.buildClass(_$4ewblock, _$4ewmixItem.elem)] = _$4ewmixItem.js === true ? {} : _$4ewmixItem.js;
                                _$4ewaddJSInitClass || (_$4ewaddJSInitClass = _$4ewblock && !_$4ewmixItem.elem);
                            } else {
                                undefined;
                            }
                            if (_$4ewhasItem && !_$4ewvisited[_$4ewvisitedKey(_$4ewblock, _$4ewelem)]) {
                                _$4ewvisited[_$4ewvisitedKey(_$4ewblock, _$4ewelem)] = true;
                                var _$4ewnestedMix = ('', __r12 = $$block, $$block = _$4ewblock, __r13 = $$elem, $$elem = _$4ewelem, __r14 = $$mods, $$mods = _$4ewmods, __r15 = $$elemMods, $$elemMods = _$4ewelemMods, __r16 = $$mode, $$mode = 'mix', __r17 = $73(__$ctx), $$block = __r12, $$elem = __r13, $$mods = __r14, $$elemMods = __r15, $$mode = __r16, '', __r17);
                                if (_$4ewnestedMix) {
                                    for (var _$4ewj = 0; _$4ewj < _$4ewnestedMix.length; _$4ewj++) {
                                        var _$4ewnestedItem = _$4ewnestedMix[_$4ewj];
                                        if (!_$4ewnestedItem.block && !_$4ewnestedItem.elem || !_$4ewvisited[_$4ewvisitedKey(_$4ewnestedItem.block, _$4ewnestedItem.elem)]) {
                                            _$4ewnestedItem._block = _$4ewblock;
                                            _$4ewnestedItem._elem = _$4ewelem;
                                            _$4ewmix.splice(_$4ewi + 1, 0, _$4ewnestedItem);
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
                _$4ewcls && _$4ewbuf.push(_$4ewisBEM ? ' ' : '', _$4ewcls);
                _$4ewaddJSInitClass && _$4ewbuf.push(' i-bem');
                _$4ewbuf.push('"');
            } else {
                undefined;
            }
            if (_$4ewjsParams) {
                var _$4ewjsAttr = ('', __r20 = $$mode, $$mode = 'jsAttr', __r21 = $77(__$ctx), $$mode = __r20, '', __r21);
                _$4ewbuf.push(' ', _$4ewjsAttr || 'data-bem', '="', __$ctx._.attrEscape(JSON.stringify(_$4ewjsParams)), '"');
            } else {
                undefined;
            }
            var _$4ewattrs = ('', __r22 = $$mode, $$mode = 'attrs', __r23 = $10(__$ctx), $$mode = __r22, '', __r23);
            _$4ewattrs = __$ctx._.extend(_$4ewattrs, _$4ewv.attrs);
            if (_$4ewattrs) {
                var _$4ewname;
                for (_$4ewname in _$4ewattrs) {
                    if (_$4ewattrs[_$4ewname] === undefined) {
                        continue;
                    } else {
                        undefined;
                    }
                    _$4ewbuf.push(' ', _$4ewname, '="', __$ctx._.attrEscape(_$4ewattrs[_$4ewname]), '"');
                }
            } else {
                undefined;
            }
        } else {
            undefined;
        }
        if (__$ctx._.isShortTag(_$4ewtag)) {
            _$4ewbuf.push('/>');
        } else {
            _$4ewtag && _$4ewbuf.push('>');
            var _$4ewcontent = ('', __r24 = $$mode, $$mode = 'content', __r25 = $2(__$ctx), $$mode = __r24, '', __r25);
            if (_$4ewcontent || _$4ewcontent === 0) {
                var _$4ewisBEM = $$block || $$elem;
                {
                    '';
                    var __r26 = __$ctx._notNewList;
                    __$ctx._notNewList = false;
                    var __r27 = __$ctx.position;
                    __$ctx.position = _$4ewisBEM ? 1 : __$ctx.position;
                    var __r28 = __$ctx._listLength;
                    __$ctx._listLength = _$4ewisBEM ? 1 : __$ctx._listLength;
                    var __r29 = __$ctx.ctx;
                    __$ctx.ctx = _$4ewcontent;
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
            _$4ewtag && _$4ewbuf.push('</', _$4ewtag, '>');
        }
        return;
    }
    function $109(__$ctx) {
        var _$4etv = __$ctx.ctx, _$4etl = _$4etv.length, _$4eti = 0, _$4etprevPos = __$ctx.position, _$4etprevNotNewList = __$ctx._notNewList;
        if (_$4etprevNotNewList) {
            __$ctx._listLength += _$4etl - 1;
        } else {
            __$ctx.position = 0;
            __$ctx._listLength = _$4etl;
        }
        __$ctx._notNewList = true;
        while (_$4eti < _$4etl) {
            var _$4etnewCtx = _$4etv[_$4eti++];
            {
                '';
                var __r0 = __$ctx.ctx;
                __$ctx.ctx = _$4etnewCtx == null ? '' : _$4etnewCtx;
                $80(__$ctx);
                __$ctx.ctx = __r0;
                '';
            }
            undefined;
        }
        _$4etprevNotNewList || (__$ctx.position = _$4etprevPos);
        return;
    }
    function $112(__$ctx) {
        var _$4esvBlock = __$ctx.ctx.block, _$4esvElem = __$ctx.ctx.elem, _$4esblock = __$ctx._currBlock || $$block;
        __$ctx.ctx || (__$ctx.ctx = {});
        {
            '';
            var __r0 = $$mode;
            $$mode = 'default';
            var __r1 = __$ctx._links;
            __$ctx._links = __$ctx.ctx.links || __$ctx._links;
            var __r2 = $$block;
            $$block = _$4esvBlock || (_$4esvElem ? _$4esblock : undefined);
            var __r3 = __$ctx._currBlock;
            __$ctx._currBlock = _$4esvBlock || _$4esvElem ? undefined : _$4esblock;
            var __r4 = $$elem;
            $$elem = __$ctx.ctx.elem;
            var __r5 = $$mods;
            $$mods = (_$4esvBlock ? __$ctx.ctx.mods : $$mods) || {};
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


BEM.I18N.lang('tr');
