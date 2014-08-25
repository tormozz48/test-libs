var BEMHTML = function() {
  var $$mode, $$block, $$elem, $$elemMods, $$mods;
  var cache,
      exports = {},
      xjst = (function (exports) {
    function $1(__$ctx) {
        if ($$block === 'input') {
            var __t = $$mode;
            if (__t === 'content') {
                var __t = $$elem;
                if (__t === 'clear') {
                    if (!!__$ctx.ctx.content === false) {
                        return '';
                        return;
                    } else {
                        return $86(__$ctx);
                    }
                } else if (__t === 'ahead') {
                    return [
                        { elem: 'ahead-filler' },
                        { elem: 'ahead-hint' }
                    ];
                    return;
                } else {
                    return $86(__$ctx);
                }
            } else if (__t === 'tag') {
                var __t = $$elem;
                if (__t === 'clear') {
                    return 'a';
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
                        return $86(__$ctx);
                    }
                }
            } else if (__t === 'attrs') {
                var __t = $$elem;
                if (__t === 'clear') {
                    return { unselectable: 'on' };
                    return;
                } else if (__t === 'control') {
                    return $30(__$ctx);
                } else {
                    return $86(__$ctx);
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
                    return $86(__$ctx);
                }
            } else if (__t === 'value') {
                return $59(__$ctx);
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
                    return $86(__$ctx);
                }
            } else {
                return $86(__$ctx);
            }
        } else {
            return $86(__$ctx);
        }
    }
    function $30(__$ctx) {
        if (!(__$ctx['__$anflg577'] !== true) === false) {
            var __r0, __r1;
            var _$4jzctx = __$ctx.ctx, _$4jza = __$ctx._.extend(('', __r0 = __$ctx['__$anflg577'], __$ctx['__$anflg577'] = true, __r1 = $30(__$ctx), __$ctx['__$anflg577'] = __r0, '', __r1), {
                    autocomplete: _$4jzctx.autocomplete || 'off',
                    autocorrect: _$4jzctx.autocorrect || 'off',
                    autocapitalize: _$4jzctx.autocapitalize || 'off',
                    spellcheck: _$4jzctx.spellcheck || 'false'
                });
            return _$4jza;
            return;
        } else {
            var _$4jxa = __$ctx._.extend({
                    id: __$ctx._inputId,
                    name: __$ctx._name
                }, __$ctx.ctx.controlAttrs);
            (__$ctx._value || __$ctx._value === 0) && (_$4jxa.value = __$ctx._value);
            $$mods.disabled && (_$4jxa.disabled = 'disabled');
            _$4jxa['aria-labelledby'] = __$ctx._labelId + ' ' + __$ctx._hintId;
            return _$4jxa;
            return;
        }
    }
    function $37(__$ctx) {
        if ($$elem === 'control') {
            if (!(__$ctx['__$anflg576'] !== true) === false) {
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
            var __r0 = __$ctx['__$anflg576'];
            __$ctx['__$anflg576'] = true;
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
                $103(__$ctx);
                __$ctx.ctx = __r1;
                $$mode = __r2;
                '';
            }
            __$ctx['__$anflg576'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $46(__$ctx) {
        if (!(__$ctx['__$anflg575'] !== true) === false) {
            if (!!$$elem === false) {
                return $49(__$ctx);
            } else {
                return $86(__$ctx);
            }
        } else {
            return $86(__$ctx);
        }
    }
    function $49(__$ctx) {
        var __r0, __r1, __r2;
        var _$4jovalue = ('', __r0 = $$mode, $$mode = 'value', __r1 = __$ctx.ctx, __$ctx.ctx = __$ctx.ctx.value, __r2 = $59(__$ctx), $$mode = __r0, __$ctx.ctx = __r1, '', __r2), _$4joid = __$ctx.ctx.id || __$ctx.generateId(), _$4jomods = __$ctx.ctx.mods || {};
        _$4jomods.theme = _$4jomods.theme || 'normal';
        {
            '';
            var __r3 = __$ctx['__$anflg575'];
            __$ctx['__$anflg575'] = true;
            {
                '';
                var __r4 = __$ctx._inputId;
                __$ctx._inputId = _$4joid;
                var __r5 = __$ctx._labelId;
                __$ctx._labelId = 'label' + _$4joid;
                var __r6 = __$ctx._hintId;
                __$ctx._hintId = 'hint' + _$4joid;
                var __r7 = __$ctx._name;
                __$ctx._name = __$ctx.ctx.name || '';
                var __r8 = __$ctx._value;
                __$ctx._value = _$4jovalue;
                var __r9 = __$ctx._inputLink;
                __$ctx._inputLink = true;
                var __r10 = __$ctx._disabled;
                __$ctx._disabled = $$mods.disabled;
                var __r11 = __$ctx.ctx, __r12 = __r11.mods;
                __r11.mods = _$4jomods;
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
            __$ctx['__$anflg575'] = __r3;
            '';
        }
        undefined;
        return;
    }
    function $59(__$ctx) {
        if (!__$ctx.isSimple(__$ctx.ctx) === false) {
            if (!!$$elem === false) {
                return __$ctx.ctx;
                return;
            } else {
                return $65(__$ctx);
            }
        } else {
            return $65(__$ctx);
        }
    }
    function $65(__$ctx) {
        if (!__$ctx.ctx === false) {
            if (!!$$elem === false) {
                var _$4jqvalue = [];
                {
                    '';
                    var __r0 = __$ctx._buf;
                    __$ctx._buf = _$4jqvalue;
                    var __r1 = $$mode;
                    $$mode = '';
                    $104(__$ctx);
                    __$ctx._buf = __r0;
                    $$mode = __r1;
                    '';
                }
                undefined;
                return _$4jqvalue.join('');
                return;
            } else {
                return $71(__$ctx);
            }
        } else {
            return $71(__$ctx);
        }
    }
    function $71(__$ctx) {
        if (!true === false) {
            if (!!$$elem === false) {
                return '';
                return;
            } else {
                return $86(__$ctx);
            }
        } else {
            return $86(__$ctx);
        }
    }
    function $86(__$ctx) {
        var __t = $$mode;
        if (__t === 'content') {
            return __$ctx.ctx.content;
            return;
        } else if (__t === 'mix' || __t === 'bem' || __t === 'jsAttr' || __t === 'js' || __t === 'cls' || __t === 'attrs' || __t === 'tag') {
            return undefined;
            return;
        } else {
            return $103(__$ctx);
        }
    }
    function $103(__$ctx) {
        if (!__$ctx.ctx === false) {
            return $104(__$ctx);
        } else {
            return $112(__$ctx);
        }
    }
    function $104(__$ctx) {
        if (!__$ctx.ctx.link === false) {
            if (!!__$ctx._.isSimple(__$ctx.ctx) === false) {
                return $107(__$ctx);
            } else {
                return $112(__$ctx);
            }
        } else {
            return $112(__$ctx);
        }
    }
    function $107(__$ctx) {
        var __r0, __r1;
        function _$4jdfollow() {
            if (this.ctx.link === 'no-follow') {
                return undefined;
            } else {
                undefined;
            }
            var data = this._links[this.ctx.link];
            return '', __r0 = this.ctx, this.ctx = data, __r1 = $1(__$ctx), this.ctx = __r0, '', __r1;
        }
        if (!cache || !__$ctx._cacheLog) {
            return _$4jdfollow.call(__$ctx);
        } else {
            undefined;
        }
        var _$4jdcontents = __$ctx._buf.slice(__$ctx._cachePos).join('');
        __$ctx._cachePos = __$ctx._buf.length;
        __$ctx._cacheLog.push(_$4jdcontents, {
            log: __$ctx._localLog.slice(),
            link: __$ctx.ctx.link
        });
        var _$4jdres = _$4jdfollow.call(__$ctx);
        __$ctx._cachePos = __$ctx._buf.length;
        return _$4jdres;
        return;
    }
    function $112(__$ctx) {
        if (!cache === false) {
            if (!__$ctx.ctx === false) {
                if (!__$ctx.ctx.cache === false) {
                    return $116(__$ctx);
                } else {
                    return $121(__$ctx);
                }
            } else {
                return $121(__$ctx);
            }
        } else {
            return $121(__$ctx);
        }
    }
    function $116(__$ctx) {
        var _$4jccached;
        function _$4jcsetProperty(obj, key, value) {
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
        if (_$4jccached = cache.get(__$ctx.ctx.cache)) {
            var _$4jcoldLinks = __$ctx._links;
            if (__$ctx.ctx.links) {
                __$ctx._links = __$ctx.ctx.links;
            } else {
                undefined;
            }
            for (var _$4jci = 0; _$4jci < _$4jccached.log.length; _$4jci++) {
                if (typeof _$4jccached.log[_$4jci] === 'string') {
                    __$ctx._buf.push(_$4jccached.log[_$4jci]);
                    continue;
                } else {
                    undefined;
                }
                var _$4jclog = _$4jccached.log[_$4jci], _$4jcreverseLog;
                _$4jcreverseLog = _$4jclog.log.map(function (entry) {
                    return {
                        key: entry[0],
                        value: _$4jcsetProperty(this, entry[0], entry[1])
                    };
                }, __$ctx).reverse();
                {
                    '';
                    var __r0 = __$ctx.ctx, __r1 = __r0.cache;
                    __r0.cache = null;
                    var __r2 = __$ctx._cacheLog;
                    __$ctx._cacheLog = null;
                    var __r3 = __$ctx.ctx, __r4 = __r3.link;
                    __r3.link = _$4jclog.link;
                    $1(__$ctx);
                    __r0.cache = __r1;
                    __$ctx._cacheLog = __r2;
                    __r3.link = __r4;
                    '';
                }
                undefined;
                _$4jcreverseLog.forEach(function (entry) {
                    _$4jcsetProperty(this, entry.key, entry.value);
                }, __$ctx);
            }
            __$ctx._links = _$4jcoldLinks;
            return _$4jccached.res;
        } else {
            undefined;
        }
        var _$4jccacheLog = [], _$4jcres;
        {
            '';
            var __r5 = __$ctx.ctx, __r6 = __r5.cache;
            __r5.cache = null;
            var __r7 = __$ctx._cachePos;
            __$ctx._cachePos = __$ctx._buf.length;
            var __r8 = __$ctx._cacheLog;
            __$ctx._cacheLog = _$4jccacheLog;
            var __r9 = __$ctx._localLog;
            __$ctx._localLog = [];
            {
                _$4jcres = $1(__$ctx);
                var _$4jctail = __$ctx._buf.slice(__$ctx._cachePos).join('');
                if (_$4jctail) {
                    _$4jccacheLog.push(_$4jctail);
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
            log: _$4jccacheLog,
            res: _$4jcres
        });
        return _$4jcres;
        return;
    }
    function $121(__$ctx) {
        var __t = $$mode;
        if (__t === 'default') {
            return $123(__$ctx);
        } else if (__t === '') {
            if (!__$ctx._.isSimple(__$ctx.ctx) === false) {
                __$ctx._listLength--;
                var _$4jactx = __$ctx.ctx;
                (_$4jactx && _$4jactx !== true || _$4jactx === 0) && __$ctx._buf.push(_$4jactx);
                return;
            } else {
                if (!!__$ctx.ctx === false) {
                    __$ctx._listLength--;
                    return;
                } else {
                    if (!__$ctx._.isArray(__$ctx.ctx) === false) {
                        return $132(__$ctx);
                    } else {
                        if (!true === false) {
                            return $135(__$ctx);
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
    function $123(__$ctx) {
        var __r13, __r0, __r4, __r5, __r6, __r7, __r8, __r9, __r10, __r11, __r12, __r1, __r14, __r15, __r16, __r17, __r20, __r21, __r22, __r23, __r24, __r25;
        var _$4jbBEM_ = __$ctx.BEM, _$4jbv = __$ctx.ctx, _$4jbbuf = __$ctx._buf, _$4jbtag;
        _$4jbtag = ('', __r0 = $$mode, $$mode = 'tag', __r1 = $1(__$ctx), $$mode = __r0, '', __r1);
        typeof _$4jbtag != 'undefined' || (_$4jbtag = _$4jbv.tag);
        typeof _$4jbtag != 'undefined' || (_$4jbtag = 'div');
        if (_$4jbtag) {
            var _$4jbjsParams, _$4jbjs;
            if ($$block && _$4jbv.js !== false) {
                _$4jbjs = ('', __r4 = $$mode, $$mode = 'js', __r5 = $1(__$ctx), $$mode = __r4, '', __r5);
                _$4jbjs = _$4jbjs ? __$ctx._.extend(_$4jbv.js, _$4jbjs === true ? {} : _$4jbjs) : _$4jbv.js === true ? {} : _$4jbv.js;
                _$4jbjs && ((_$4jbjsParams = {})[_$4jbBEM_.INTERNAL.buildClass($$block, _$4jbv.elem)] = _$4jbjs);
            } else {
                undefined;
            }
            _$4jbbuf.push('<', _$4jbtag);
            var _$4jbisBEM = ('', __r6 = $$mode, $$mode = 'bem', __r7 = $1(__$ctx), $$mode = __r6, '', __r7);
            typeof _$4jbisBEM != 'undefined' || (_$4jbisBEM = typeof _$4jbv.bem != 'undefined' ? _$4jbv.bem : _$4jbv.block || _$4jbv.elem);
            var _$4jbcls = ('', __r8 = $$mode, $$mode = 'cls', __r9 = $1(__$ctx), $$mode = __r8, '', __r9);
            _$4jbcls || (_$4jbcls = _$4jbv.cls);
            var _$4jbaddJSInitClass = _$4jbv.block && _$4jbjsParams;
            if (_$4jbisBEM || _$4jbcls) {
                _$4jbbuf.push(' class="');
                if (_$4jbisBEM) {
                    _$4jbBEM_.INTERNAL.buildClasses($$block, _$4jbv.elem, _$4jbv.elemMods || _$4jbv.mods, _$4jbbuf);
                    var _$4jbmix = ('', __r10 = $$mode, $$mode = 'mix', __r11 = $1(__$ctx), $$mode = __r10, '', __r11);
                    _$4jbv.mix && (_$4jbmix = _$4jbmix ? _$4jbmix.concat(_$4jbv.mix) : _$4jbv.mix);
                    if (_$4jbmix) {
                        var _$4jbvisited = {};
                        function _$4jbvisitedKey(block, elem) {
                            return (block || '') + '__' + (elem || '');
                        }
                        _$4jbvisited[_$4jbvisitedKey($$block, $$elem)] = true;
                        if (!__$ctx._.isArray(_$4jbmix)) {
                            _$4jbmix = [_$4jbmix];
                        } else {
                            undefined;
                        }
                        for (var _$4jbi = 0; _$4jbi < _$4jbmix.length; _$4jbi++) {
                            var _$4jbmixItem = _$4jbmix[_$4jbi];
                            if (!_$4jbmixItem) {
                                continue;
                            } else {
                                undefined;
                            }
                            var _$4jbhasItem = _$4jbmixItem.block || _$4jbmixItem.elem, _$4jbblock = _$4jbmixItem.block || _$4jbmixItem._block || $$block, _$4jbelem = _$4jbmixItem.elem || _$4jbmixItem._elem || $$elem, _$4jbmods = _$4jbmixItem.mods || $$mods, _$4jbelemMods = _$4jbmixItem.elemMods || {};
                            _$4jbhasItem && _$4jbbuf.push(' ');
                            _$4jbBEM_.INTERNAL[_$4jbhasItem ? 'buildClasses' : 'buildModsClasses'](_$4jbblock, _$4jbmixItem.elem || _$4jbmixItem._elem || (_$4jbmixItem.block ? undefined : $$elem), _$4jbmixItem.elemMods || _$4jbmixItem.mods, _$4jbbuf);
                            if (_$4jbmixItem.js) {
                                (_$4jbjsParams || (_$4jbjsParams = {}))[_$4jbBEM_.INTERNAL.buildClass(_$4jbblock, _$4jbmixItem.elem)] = _$4jbmixItem.js === true ? {} : _$4jbmixItem.js;
                                _$4jbaddJSInitClass || (_$4jbaddJSInitClass = _$4jbblock && !_$4jbmixItem.elem);
                            } else {
                                undefined;
                            }
                            if (_$4jbhasItem && !_$4jbvisited[_$4jbvisitedKey(_$4jbblock, _$4jbelem)]) {
                                _$4jbvisited[_$4jbvisitedKey(_$4jbblock, _$4jbelem)] = true;
                                var _$4jbnestedMix = ('', __r12 = $$block, $$block = _$4jbblock, __r13 = $$elem, $$elem = _$4jbelem, __r14 = $$mods, $$mods = _$4jbmods, __r15 = $$elemMods, $$elemMods = _$4jbelemMods, __r16 = $$mode, $$mode = 'mix', __r17 = $1(__$ctx), $$block = __r12, $$elem = __r13, $$mods = __r14, $$elemMods = __r15, $$mode = __r16, '', __r17);
                                if (_$4jbnestedMix) {
                                    for (var _$4jbj = 0; _$4jbj < _$4jbnestedMix.length; _$4jbj++) {
                                        var _$4jbnestedItem = _$4jbnestedMix[_$4jbj];
                                        if (!_$4jbnestedItem.block && !_$4jbnestedItem.elem || !_$4jbvisited[_$4jbvisitedKey(_$4jbnestedItem.block, _$4jbnestedItem.elem)]) {
                                            _$4jbnestedItem._block = _$4jbblock;
                                            _$4jbnestedItem._elem = _$4jbelem;
                                            _$4jbmix.splice(_$4jbi + 1, 0, _$4jbnestedItem);
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
                _$4jbcls && _$4jbbuf.push(_$4jbisBEM ? ' ' : '', _$4jbcls);
                _$4jbaddJSInitClass && _$4jbbuf.push(' i-bem');
                _$4jbbuf.push('"');
            } else {
                undefined;
            }
            if (_$4jbjsParams) {
                var _$4jbjsAttr = ('', __r20 = $$mode, $$mode = 'jsAttr', __r21 = $1(__$ctx), $$mode = __r20, '', __r21);
                _$4jbbuf.push(' ', _$4jbjsAttr || 'data-bem', '="', __$ctx._.attrEscape(JSON.stringify(_$4jbjsParams)), '"');
            } else {
                undefined;
            }
            var _$4jbattrs = ('', __r22 = $$mode, $$mode = 'attrs', __r23 = $1(__$ctx), $$mode = __r22, '', __r23);
            _$4jbattrs = __$ctx._.extend(_$4jbattrs, _$4jbv.attrs);
            if (_$4jbattrs) {
                var _$4jbname;
                for (_$4jbname in _$4jbattrs) {
                    if (_$4jbattrs[_$4jbname] === undefined) {
                        continue;
                    } else {
                        undefined;
                    }
                    _$4jbbuf.push(' ', _$4jbname, '="', __$ctx._.attrEscape(_$4jbattrs[_$4jbname]), '"');
                }
            } else {
                undefined;
            }
        } else {
            undefined;
        }
        if (__$ctx._.isShortTag(_$4jbtag)) {
            _$4jbbuf.push('/>');
        } else {
            _$4jbtag && _$4jbbuf.push('>');
            var _$4jbcontent = ('', __r24 = $$mode, $$mode = 'content', __r25 = $1(__$ctx), $$mode = __r24, '', __r25);
            if (_$4jbcontent || _$4jbcontent === 0) {
                var _$4jbisBEM = $$block || $$elem;
                {
                    '';
                    var __r26 = __$ctx._notNewList;
                    __$ctx._notNewList = false;
                    var __r27 = __$ctx.position;
                    __$ctx.position = _$4jbisBEM ? 1 : __$ctx.position;
                    var __r28 = __$ctx._listLength;
                    __$ctx._listLength = _$4jbisBEM ? 1 : __$ctx._listLength;
                    var __r29 = __$ctx.ctx;
                    __$ctx.ctx = _$4jbcontent;
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
            _$4jbtag && _$4jbbuf.push('</', _$4jbtag, '>');
        }
        return;
    }
    function $132(__$ctx) {
        var _$4j8v = __$ctx.ctx, _$4j8l = _$4j8v.length, _$4j8i = 0, _$4j8prevPos = __$ctx.position, _$4j8prevNotNewList = __$ctx._notNewList;
        if (_$4j8prevNotNewList) {
            __$ctx._listLength += _$4j8l - 1;
        } else {
            __$ctx.position = 0;
            __$ctx._listLength = _$4j8l;
        }
        __$ctx._notNewList = true;
        while (_$4j8i < _$4j8l) {
            var _$4j8newCtx = _$4j8v[_$4j8i++];
            {
                '';
                var __r0 = __$ctx.ctx;
                __$ctx.ctx = _$4j8newCtx == null ? '' : _$4j8newCtx;
                $1(__$ctx);
                __$ctx.ctx = __r0;
                '';
            }
            undefined;
        }
        _$4j8prevNotNewList || (__$ctx.position = _$4j8prevPos);
        return;
    }
    function $135(__$ctx) {
        var _$4j7vBlock = __$ctx.ctx.block, _$4j7vElem = __$ctx.ctx.elem, _$4j7block = __$ctx._currBlock || $$block;
        __$ctx.ctx || (__$ctx.ctx = {});
        {
            '';
            var __r0 = $$mode;
            $$mode = 'default';
            var __r1 = __$ctx._links;
            __$ctx._links = __$ctx.ctx.links || __$ctx._links;
            var __r2 = $$block;
            $$block = _$4j7vBlock || (_$4j7vElem ? _$4j7block : undefined);
            var __r3 = __$ctx._currBlock;
            __$ctx._currBlock = _$4j7vBlock || _$4j7vElem ? undefined : _$4j7block;
            var __r4 = $$elem;
            $$elem = __$ctx.ctx.elem;
            var __r5 = $$mods;
            $$mods = (_$4j7vBlock ? __$ctx.ctx.mods : $$mods) || {};
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
/*borschik:include:../../../../libs/bem-bl/blocks-touch/i-jquery/__tap/i-jquery__tap.js*/;
/*borschik:include:../../../../common.blocks/input/input.js*/;
/*borschik:include:../../../../touch.blocks/input/input.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-system/i-system.js*/;
/*borschik:include:../../../../common.blocks/input/__clear/input__clear.js*/;
/*borschik:include:../../../../touch-phone.blocks/input/__clear/input__clear.js*/;


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
