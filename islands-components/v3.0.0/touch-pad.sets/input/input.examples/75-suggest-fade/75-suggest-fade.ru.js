var BEMHTML = function() {
  var $$mode, $$block, $$elem, $$elemMods, $$mods;
  var cache,
      exports = {},
      xjst = (function (exports) {
    function $1(__$ctx) {
        var __t = $$mode;
        if (__t === 'js') {
            return $2(__$ctx);
        } else if (__t === 'content') {
            return $16(__$ctx);
        } else if (__t === 'mix') {
            return $37(__$ctx);
        } else if (__t === 'tag') {
            return $45(__$ctx);
        } else if (__t === '') {
            return $53(__$ctx);
        } else if (__t === 'default') {
            return $61(__$ctx);
        } else {
            return $72(__$ctx);
        }
    }
    function $2(__$ctx) {
        if ($$block === 'b-autocomplete-item') {
            if (!!$$elem === false) {
                return true;
                return;
            } else {
                if (!__$ctx.ctx['search_cgi'] === false) {
                    if (!__$ctx._.isArray(__$ctx.ctx['search_cgi']) === false) {
                        return { cgi: __$ctx.ctx['search_cgi'] };
                        return;
                    } else {
                        return $72(__$ctx);
                    }
                } else {
                    return $72(__$ctx);
                }
            }
        } else {
            return $72(__$ctx);
        }
    }
    function $16(__$ctx) {
        var __t = $$block;
        if (__t === 'b-autocomplete-item') {
            if (!!$$elem === false) {
                var _$39zdata = __$ctx.ctx.data, _$39ziCommonString = BEM.blocks['i-common__string'], _$39ztext = _$39ziCommonString.escapeHTML(__$ctx._.isArray(_$39zdata) ? _$39zdata[1] : _$39zdata);
                return _$39ziCommonString.highlight(_$39ztext, __$ctx.ctx.hl);
                return;
            } else {
                return $72(__$ctx);
            }
        } else if (__t === 'i-ua') {
            return $22(__$ctx);
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
                return $72(__$ctx);
            }
        } else {
            return $72(__$ctx);
        }
    }
    function $22(__$ctx) {
        if (!(__$ctx['__$anflg370'] !== true) === false) {
            if (!!$$elem === false) {
                var __r0, __r1;
                var _$39uc = ('', __r0 = __$ctx['__$anflg370'], __$ctx['__$anflg370'] = true, __r1 = $22(__$ctx), __$ctx['__$anflg370'] = __r0, '', __r1);
                _$39uc += [
                    ';(function(d,e,c,r,n,w,v,f){',
                    'e=d.documentElement;',
                    'c="className";',
                    'r="replace";',
                    'n="createElementNS";',
                    'f="firstChild";',
                    'w="http://www.w3.org/2000/svg";',
                    'e[c]+=" i-ua_svg_"+(!!d[n]&&!!d[n](w,"svg").createSVGRect?"yes":"no");',
                    'v=d.createElement("div");',
                    'v.innerHTML="<svg/>";',
                    'e[c]+=" i-ua_inlinesvg_"+((v[f]&&v[f].namespaceURI)==w?"yes":"no");',
                    '})(document);'
                ].join('');
                return _$39uc;
                return;
            } else {
                return $72(__$ctx);
            }
        } else {
            return $72(__$ctx);
        }
    }
    function $37(__$ctx) {
        if ($$block === 'b-autocomplete-item') {
            if (!!$$elem === false) {
                return [{ mods: { pers: __$ctx.ctx.pers ? 'yes' : '' } }];
                return;
            } else {
                return $72(__$ctx);
            }
        } else {
            return $72(__$ctx);
        }
    }
    function $45(__$ctx) {
        if ($$block === 'b-autocomplete-item') {
            if (!!$$elem === false) {
                return 'li';
                return;
            } else {
                return $72(__$ctx);
            }
        } else {
            return $72(__$ctx);
        }
    }
    function $53(__$ctx) {
        if (!__$ctx._ === false) {
            if (!!__$ctx._.cleverSubstring === false) {
                __$ctx._.cleverSubstring = function cleverSubstring(str, maxLength, maxLengthRelative) {
                    return str.length > maxLength + maxLengthRelative ? str.substring(0, maxLength - 1) + '\u2026' : str;
                };
                applyc(__$ctx);
                undefined;
                return;
            } else {
                return $72(__$ctx);
            }
        } else {
            return $72(__$ctx);
        }
    }
    function $61(__$ctx) {
        if ($$block === 'popup') {
            return $62(__$ctx);
        } else {
            return $72(__$ctx);
        }
    }
    function $62(__$ctx) {
        if (!!__$ctx._popupDefaults === false) {
            if (!!$$elem === false) {
                return $65(__$ctx);
            } else {
                return $72(__$ctx);
            }
        } else {
            return $72(__$ctx);
        }
    }
    function $65(__$ctx) {
        var _$39rctx = __$ctx.ctx;
        _$39rctx.mods = $$mods = __$ctx.extend({
            theme: 'ffffff',
            autoclosable: 'yes',
            adaptive: 'yes',
            animate: 'yes'
        }, $$mods);
        if (_$39rctx.zIndex) {
            var _$39rattrs = _$39rctx.attrs || (_$39rctx.attrs = {});
            _$39rattrs.style = (_$39rattrs.style || '') + ';z-index:' + _$39rctx.zIndex + ';';
        } else {
            undefined;
        }
        {
            '';
            var __r0 = __$ctx._popupDefaults;
            __$ctx._popupDefaults = true;
            $62(__$ctx);
            __$ctx._popupDefaults = __r0;
            '';
        }
        undefined;
        return;
    }
    function $72(__$ctx) {
        if ($$block === 'popup') {
            if (!($$mode === '' && __$ctx._popupDefaults) === false) {
                delete __$ctx._popupDefaults;
                applyc(__$ctx);
                undefined;
                return;
            } else {
                return $78(__$ctx);
            }
        } else {
            return $78(__$ctx);
        }
    }
    function $78(__$ctx) {
        var __t = $$mode;
        if (__t === 'content') {
            if ($$block === 'input') {
                var __t = $$elem;
                if (__t === 'clear') {
                    if (!!__$ctx.ctx.content === false) {
                        return '';
                        return;
                    } else {
                        return $91(__$ctx);
                    }
                } else if (__t === 'ahead') {
                    return [
                        { elem: 'ahead-filler' },
                        { elem: 'ahead-hint' }
                    ];
                    return;
                } else {
                    return $91(__$ctx);
                }
            } else {
                return $91(__$ctx);
            }
        } else if (__t === 'attrs') {
            if ($$block === 'input') {
                var __t = $$elem;
                if (__t === 'clear') {
                    return { unselectable: 'on' };
                    return;
                } else if (__t === 'control') {
                    return $96(__$ctx);
                } else {
                    return $104(__$ctx);
                }
            } else {
                return $104(__$ctx);
            }
        } else if (__t === 'tag') {
            if ($$block === 'input') {
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
                        return $121(__$ctx);
                    }
                }
            } else {
                return $121(__$ctx);
            }
        } else if (__t === 'default') {
            if ($$block === 'input') {
                return $123(__$ctx);
            } else {
                return $187(__$ctx);
            }
        } else if (__t === 'mix') {
            if ($$block === 'input') {
                if ($$elem === 'ahead') {
                    return [{
                            block: 'input',
                            elem: 'input'
                        }];
                    return;
                } else {
                    return $149(__$ctx);
                }
            } else {
                return $149(__$ctx);
            }
        } else if (__t === 'value') {
            if ($$block === 'input') {
                return $151(__$ctx);
            } else {
                return $187(__$ctx);
            }
        } else if (__t === 'js') {
            if ($$block === 'input') {
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
                    return $180(__$ctx);
                }
            } else {
                return $180(__$ctx);
            }
        } else if (__t === 'bem' || __t === 'jsAttr' || __t === 'cls') {
            return undefined;
            return;
        } else {
            return $187(__$ctx);
        }
    }
    function $91(__$ctx) {
        return __$ctx.ctx.content;
        return;
    }
    function $96(__$ctx) {
        if (!(__$ctx['__$anflg369'] !== true) === false) {
            var __r0, __r1;
            var _$39mctx = __$ctx.ctx, _$39ma = __$ctx._.extend(('', __r0 = __$ctx['__$anflg369'], __$ctx['__$anflg369'] = true, __r1 = $96(__$ctx), __$ctx['__$anflg369'] = __r0, '', __r1), {
                    autocomplete: _$39mctx.autocomplete || 'off',
                    autocorrect: _$39mctx.autocorrect || 'off',
                    autocapitalize: _$39mctx.autocapitalize || 'off',
                    spellcheck: _$39mctx.spellcheck || 'false'
                });
            return _$39ma;
            return;
        } else {
            var _$39ka = __$ctx._.extend({
                    id: __$ctx._inputId,
                    name: __$ctx._name
                }, __$ctx.ctx.controlAttrs);
            (__$ctx._value || __$ctx._value === 0) && (_$39ka.value = __$ctx._value);
            $$mods.disabled && (_$39ka.disabled = 'disabled');
            _$39ka['aria-labelledby'] = __$ctx._labelId + ' ' + __$ctx._hintId;
            return _$39ka;
            return;
        }
    }
    function $104(__$ctx) {
        return undefined;
        return;
    }
    function $121(__$ctx) {
        return undefined;
        return;
    }
    function $123(__$ctx) {
        if ($$elem === 'control') {
            if (!(__$ctx['__$anflg368'] !== true) === false) {
                if (!!$$mods.clear === false) {
                    return $127(__$ctx);
                } else {
                    return $132(__$ctx);
                }
            } else {
                return $132(__$ctx);
            }
        } else {
            return $132(__$ctx);
        }
    }
    function $127(__$ctx) {
        {
            '';
            var __r0 = __$ctx['__$anflg368'];
            __$ctx['__$anflg368'] = true;
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
                $53(__$ctx);
                __$ctx.ctx = __r1;
                $$mode = __r2;
                '';
            }
            __$ctx['__$anflg368'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $132(__$ctx) {
        if (!(__$ctx['__$anflg367'] !== true) === false) {
            if (!!$$elem === false) {
                return $135(__$ctx);
            } else {
                return $187(__$ctx);
            }
        } else {
            return $187(__$ctx);
        }
    }
    function $135(__$ctx) {
        var __r0, __r1, __r2;
        var _$39bvalue = ('', __r0 = $$mode, $$mode = 'value', __r1 = __$ctx.ctx, __$ctx.ctx = __$ctx.ctx.value, __r2 = $151(__$ctx), $$mode = __r0, __$ctx.ctx = __r1, '', __r2), _$39bid = __$ctx.ctx.id || __$ctx.generateId(), _$39bmods = __$ctx.ctx.mods || {};
        _$39bmods.theme = _$39bmods.theme || 'normal';
        {
            '';
            var __r3 = __$ctx['__$anflg367'];
            __$ctx['__$anflg367'] = true;
            {
                '';
                var __r4 = __$ctx._inputId;
                __$ctx._inputId = _$39bid;
                var __r5 = __$ctx._labelId;
                __$ctx._labelId = 'label' + _$39bid;
                var __r6 = __$ctx._hintId;
                __$ctx._hintId = 'hint' + _$39bid;
                var __r7 = __$ctx._name;
                __$ctx._name = __$ctx.ctx.name || '';
                var __r8 = __$ctx._value;
                __$ctx._value = _$39bvalue;
                var __r9 = __$ctx._inputLink;
                __$ctx._inputLink = true;
                var __r10 = __$ctx._disabled;
                __$ctx._disabled = $$mods.disabled;
                var __r11 = __$ctx.ctx, __r12 = __r11.mods;
                __r11.mods = _$39bmods;
                $123(__$ctx);
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
            __$ctx['__$anflg367'] = __r3;
            '';
        }
        undefined;
        return;
    }
    function $149(__$ctx) {
        return undefined;
        return;
    }
    function $151(__$ctx) {
        if (!__$ctx.isSimple(__$ctx.ctx) === false) {
            if (!!$$elem === false) {
                return __$ctx.ctx;
                return;
            } else {
                return $157(__$ctx);
            }
        } else {
            return $157(__$ctx);
        }
    }
    function $157(__$ctx) {
        if (!__$ctx.ctx === false) {
            if (!!$$elem === false) {
                var _$39dvalue = [];
                {
                    '';
                    var __r0 = __$ctx._buf;
                    __$ctx._buf = _$39dvalue;
                    var __r1 = $$mode;
                    $$mode = '';
                    $53(__$ctx);
                    __$ctx._buf = __r0;
                    $$mode = __r1;
                    '';
                }
                undefined;
                return _$39dvalue.join('');
                return;
            } else {
                return $163(__$ctx);
            }
        } else {
            return $163(__$ctx);
        }
    }
    function $163(__$ctx) {
        if (!true === false) {
            if (!!$$elem === false) {
                return '';
                return;
            } else {
                return $187(__$ctx);
            }
        } else {
            return $187(__$ctx);
        }
    }
    function $180(__$ctx) {
        return undefined;
        return;
    }
    function $187(__$ctx) {
        if (!__$ctx.ctx === false) {
            if (!__$ctx.ctx.link === false) {
                if (!!__$ctx._.isSimple(__$ctx.ctx) === false) {
                    return $191(__$ctx);
                } else {
                    return $196(__$ctx);
                }
            } else {
                return $196(__$ctx);
            }
        } else {
            return $196(__$ctx);
        }
    }
    function $191(__$ctx) {
        var __r0, __r1;
        function _$390follow() {
            if (this.ctx.link === 'no-follow') {
                return undefined;
            } else {
                undefined;
            }
            var data = this._links[this.ctx.link];
            return '', __r0 = this.ctx, this.ctx = data, __r1 = $1(__$ctx), this.ctx = __r0, '', __r1;
        }
        if (!cache || !__$ctx._cacheLog) {
            return _$390follow.call(__$ctx);
        } else {
            undefined;
        }
        var _$390contents = __$ctx._buf.slice(__$ctx._cachePos).join('');
        __$ctx._cachePos = __$ctx._buf.length;
        __$ctx._cacheLog.push(_$390contents, {
            log: __$ctx._localLog.slice(),
            link: __$ctx.ctx.link
        });
        var _$390res = _$390follow.call(__$ctx);
        __$ctx._cachePos = __$ctx._buf.length;
        return _$390res;
        return;
    }
    function $196(__$ctx) {
        if (!cache === false) {
            if (!__$ctx.ctx === false) {
                if (!__$ctx.ctx.cache === false) {
                    return $200(__$ctx);
                } else {
                    return $205(__$ctx);
                }
            } else {
                return $205(__$ctx);
            }
        } else {
            return $205(__$ctx);
        }
    }
    function $200(__$ctx) {
        var _$38zcached;
        function _$38zsetProperty(obj, key, value) {
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
        if (_$38zcached = cache.get(__$ctx.ctx.cache)) {
            var _$38zoldLinks = __$ctx._links;
            if (__$ctx.ctx.links) {
                __$ctx._links = __$ctx.ctx.links;
            } else {
                undefined;
            }
            for (var _$38zi = 0; _$38zi < _$38zcached.log.length; _$38zi++) {
                if (typeof _$38zcached.log[_$38zi] === 'string') {
                    __$ctx._buf.push(_$38zcached.log[_$38zi]);
                    continue;
                } else {
                    undefined;
                }
                var _$38zlog = _$38zcached.log[_$38zi], _$38zreverseLog;
                _$38zreverseLog = _$38zlog.log.map(function (entry) {
                    return {
                        key: entry[0],
                        value: _$38zsetProperty(this, entry[0], entry[1])
                    };
                }, __$ctx).reverse();
                {
                    '';
                    var __r0 = __$ctx.ctx, __r1 = __r0.cache;
                    __r0.cache = null;
                    var __r2 = __$ctx._cacheLog;
                    __$ctx._cacheLog = null;
                    var __r3 = __$ctx.ctx, __r4 = __r3.link;
                    __r3.link = _$38zlog.link;
                    $1(__$ctx);
                    __r0.cache = __r1;
                    __$ctx._cacheLog = __r2;
                    __r3.link = __r4;
                    '';
                }
                undefined;
                _$38zreverseLog.forEach(function (entry) {
                    _$38zsetProperty(this, entry.key, entry.value);
                }, __$ctx);
            }
            __$ctx._links = _$38zoldLinks;
            return _$38zcached.res;
        } else {
            undefined;
        }
        var _$38zcacheLog = [], _$38zres;
        {
            '';
            var __r5 = __$ctx.ctx, __r6 = __r5.cache;
            __r5.cache = null;
            var __r7 = __$ctx._cachePos;
            __$ctx._cachePos = __$ctx._buf.length;
            var __r8 = __$ctx._cacheLog;
            __$ctx._cacheLog = _$38zcacheLog;
            var __r9 = __$ctx._localLog;
            __$ctx._localLog = [];
            {
                _$38zres = $1(__$ctx);
                var _$38ztail = __$ctx._buf.slice(__$ctx._cachePos).join('');
                if (_$38ztail) {
                    _$38zcacheLog.push(_$38ztail);
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
            log: _$38zcacheLog,
            res: _$38zres
        });
        return _$38zres;
        return;
    }
    function $205(__$ctx) {
        var __t = $$mode;
        if (__t === 'default') {
            return $207(__$ctx);
        } else if (__t === '') {
            if (!__$ctx._.isSimple(__$ctx.ctx) === false) {
                __$ctx._listLength--;
                var _$38xctx = __$ctx.ctx;
                (_$38xctx && _$38xctx !== true || _$38xctx === 0) && __$ctx._buf.push(_$38xctx);
                return;
            } else {
                if (!!__$ctx.ctx === false) {
                    __$ctx._listLength--;
                    return;
                } else {
                    if (!__$ctx._.isArray(__$ctx.ctx) === false) {
                        return $216(__$ctx);
                    } else {
                        if (!true === false) {
                            return $219(__$ctx);
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
    function $207(__$ctx) {
        var __r13, __r0, __r4, __r5, __r6, __r7, __r8, __r9, __r10, __r11, __r12, __r1, __r14, __r15, __r16, __r17, __r20, __r21, __r22, __r23, __r24, __r25;
        var _$38yBEM_ = __$ctx.BEM, _$38yv = __$ctx.ctx, _$38ybuf = __$ctx._buf, _$38ytag;
        _$38ytag = ('', __r0 = $$mode, $$mode = 'tag', __r1 = $45(__$ctx), $$mode = __r0, '', __r1);
        typeof _$38ytag != 'undefined' || (_$38ytag = _$38yv.tag);
        typeof _$38ytag != 'undefined' || (_$38ytag = 'div');
        if (_$38ytag) {
            var _$38yjsParams, _$38yjs;
            if ($$block && _$38yv.js !== false) {
                _$38yjs = ('', __r4 = $$mode, $$mode = 'js', __r5 = $2(__$ctx), $$mode = __r4, '', __r5);
                _$38yjs = _$38yjs ? __$ctx._.extend(_$38yv.js, _$38yjs === true ? {} : _$38yjs) : _$38yv.js === true ? {} : _$38yv.js;
                _$38yjs && ((_$38yjsParams = {})[_$38yBEM_.INTERNAL.buildClass($$block, _$38yv.elem)] = _$38yjs);
            } else {
                undefined;
            }
            _$38ybuf.push('<', _$38ytag);
            var _$38yisBEM = ('', __r6 = $$mode, $$mode = 'bem', __r7 = $72(__$ctx), $$mode = __r6, '', __r7);
            typeof _$38yisBEM != 'undefined' || (_$38yisBEM = typeof _$38yv.bem != 'undefined' ? _$38yv.bem : _$38yv.block || _$38yv.elem);
            var _$38ycls = ('', __r8 = $$mode, $$mode = 'cls', __r9 = $72(__$ctx), $$mode = __r8, '', __r9);
            _$38ycls || (_$38ycls = _$38yv.cls);
            var _$38yaddJSInitClass = _$38yv.block && _$38yjsParams;
            if (_$38yisBEM || _$38ycls) {
                _$38ybuf.push(' class="');
                if (_$38yisBEM) {
                    _$38yBEM_.INTERNAL.buildClasses($$block, _$38yv.elem, _$38yv.elemMods || _$38yv.mods, _$38ybuf);
                    var _$38ymix = ('', __r10 = $$mode, $$mode = 'mix', __r11 = $37(__$ctx), $$mode = __r10, '', __r11);
                    _$38yv.mix && (_$38ymix = _$38ymix ? _$38ymix.concat(_$38yv.mix) : _$38yv.mix);
                    if (_$38ymix) {
                        var _$38yvisited = {};
                        function _$38yvisitedKey(block, elem) {
                            return (block || '') + '__' + (elem || '');
                        }
                        _$38yvisited[_$38yvisitedKey($$block, $$elem)] = true;
                        if (!__$ctx._.isArray(_$38ymix)) {
                            _$38ymix = [_$38ymix];
                        } else {
                            undefined;
                        }
                        for (var _$38yi = 0; _$38yi < _$38ymix.length; _$38yi++) {
                            var _$38ymixItem = _$38ymix[_$38yi];
                            if (!_$38ymixItem) {
                                continue;
                            } else {
                                undefined;
                            }
                            var _$38yhasItem = _$38ymixItem.block || _$38ymixItem.elem, _$38yblock = _$38ymixItem.block || _$38ymixItem._block || $$block, _$38yelem = _$38ymixItem.elem || _$38ymixItem._elem || $$elem, _$38ymods = _$38ymixItem.mods || $$mods, _$38yelemMods = _$38ymixItem.elemMods || {};
                            _$38yhasItem && _$38ybuf.push(' ');
                            _$38yBEM_.INTERNAL[_$38yhasItem ? 'buildClasses' : 'buildModsClasses'](_$38yblock, _$38ymixItem.elem || _$38ymixItem._elem || (_$38ymixItem.block ? undefined : $$elem), _$38ymixItem.elemMods || _$38ymixItem.mods, _$38ybuf);
                            if (_$38ymixItem.js) {
                                (_$38yjsParams || (_$38yjsParams = {}))[_$38yBEM_.INTERNAL.buildClass(_$38yblock, _$38ymixItem.elem)] = _$38ymixItem.js === true ? {} : _$38ymixItem.js;
                                _$38yaddJSInitClass || (_$38yaddJSInitClass = _$38yblock && !_$38ymixItem.elem);
                            } else {
                                undefined;
                            }
                            if (_$38yhasItem && !_$38yvisited[_$38yvisitedKey(_$38yblock, _$38yelem)]) {
                                _$38yvisited[_$38yvisitedKey(_$38yblock, _$38yelem)] = true;
                                var _$38ynestedMix = ('', __r12 = $$block, $$block = _$38yblock, __r13 = $$elem, $$elem = _$38yelem, __r14 = $$mods, $$mods = _$38ymods, __r15 = $$elemMods, $$elemMods = _$38yelemMods, __r16 = $$mode, $$mode = 'mix', __r17 = $37(__$ctx), $$block = __r12, $$elem = __r13, $$mods = __r14, $$elemMods = __r15, $$mode = __r16, '', __r17);
                                if (_$38ynestedMix) {
                                    for (var _$38yj = 0; _$38yj < _$38ynestedMix.length; _$38yj++) {
                                        var _$38ynestedItem = _$38ynestedMix[_$38yj];
                                        if (!_$38ynestedItem.block && !_$38ynestedItem.elem || !_$38yvisited[_$38yvisitedKey(_$38ynestedItem.block, _$38ynestedItem.elem)]) {
                                            _$38ynestedItem._block = _$38yblock;
                                            _$38ynestedItem._elem = _$38yelem;
                                            _$38ymix.splice(_$38yi + 1, 0, _$38ynestedItem);
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
                _$38ycls && _$38ybuf.push(_$38yisBEM ? ' ' : '', _$38ycls);
                _$38yaddJSInitClass && _$38ybuf.push(' i-bem');
                _$38ybuf.push('"');
            } else {
                undefined;
            }
            if (_$38yjsParams) {
                var _$38yjsAttr = ('', __r20 = $$mode, $$mode = 'jsAttr', __r21 = $72(__$ctx), $$mode = __r20, '', __r21);
                _$38ybuf.push(' ', _$38yjsAttr || 'data-bem', '="', __$ctx._.attrEscape(JSON.stringify(_$38yjsParams)), '"');
            } else {
                undefined;
            }
            var _$38yattrs = ('', __r22 = $$mode, $$mode = 'attrs', __r23 = $72(__$ctx), $$mode = __r22, '', __r23);
            _$38yattrs = __$ctx._.extend(_$38yattrs, _$38yv.attrs);
            if (_$38yattrs) {
                var _$38yname;
                for (_$38yname in _$38yattrs) {
                    if (_$38yattrs[_$38yname] === undefined) {
                        continue;
                    } else {
                        undefined;
                    }
                    _$38ybuf.push(' ', _$38yname, '="', __$ctx._.attrEscape(_$38yattrs[_$38yname]), '"');
                }
            } else {
                undefined;
            }
        } else {
            undefined;
        }
        if (__$ctx._.isShortTag(_$38ytag)) {
            _$38ybuf.push('/>');
        } else {
            _$38ytag && _$38ybuf.push('>');
            var _$38ycontent = ('', __r24 = $$mode, $$mode = 'content', __r25 = $16(__$ctx), $$mode = __r24, '', __r25);
            if (_$38ycontent || _$38ycontent === 0) {
                var _$38yisBEM = $$block || $$elem;
                {
                    '';
                    var __r26 = __$ctx._notNewList;
                    __$ctx._notNewList = false;
                    var __r27 = __$ctx.position;
                    __$ctx.position = _$38yisBEM ? 1 : __$ctx.position;
                    var __r28 = __$ctx._listLength;
                    __$ctx._listLength = _$38yisBEM ? 1 : __$ctx._listLength;
                    var __r29 = __$ctx.ctx;
                    __$ctx.ctx = _$38ycontent;
                    var __r30 = $$mode;
                    $$mode = '';
                    $53(__$ctx);
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
            _$38ytag && _$38ybuf.push('</', _$38ytag, '>');
        }
        return;
    }
    function $216(__$ctx) {
        var _$38vv = __$ctx.ctx, _$38vl = _$38vv.length, _$38vi = 0, _$38vprevPos = __$ctx.position, _$38vprevNotNewList = __$ctx._notNewList;
        if (_$38vprevNotNewList) {
            __$ctx._listLength += _$38vl - 1;
        } else {
            __$ctx.position = 0;
            __$ctx._listLength = _$38vl;
        }
        __$ctx._notNewList = true;
        while (_$38vi < _$38vl) {
            var _$38vnewCtx = _$38vv[_$38vi++];
            {
                '';
                var __r0 = __$ctx.ctx;
                __$ctx.ctx = _$38vnewCtx == null ? '' : _$38vnewCtx;
                $53(__$ctx);
                __$ctx.ctx = __r0;
                '';
            }
            undefined;
        }
        _$38vprevNotNewList || (__$ctx.position = _$38vprevPos);
        return;
    }
    function $219(__$ctx) {
        var _$38uvBlock = __$ctx.ctx.block, _$38uvElem = __$ctx.ctx.elem, _$38ublock = __$ctx._currBlock || $$block;
        __$ctx.ctx || (__$ctx.ctx = {});
        {
            '';
            var __r0 = $$mode;
            $$mode = 'default';
            var __r1 = __$ctx._links;
            __$ctx._links = __$ctx.ctx.links || __$ctx._links;
            var __r2 = $$block;
            $$block = _$38uvBlock || (_$38uvElem ? _$38ublock : undefined);
            var __r3 = __$ctx._currBlock;
            __$ctx._currBlock = _$38uvBlock || _$38uvElem ? undefined : _$38ublock;
            var __r4 = $$elem;
            $$elem = __$ctx.ctx.elem;
            var __r5 = $$mods;
            $$mods = (_$38uvBlock ? __$ctx.ctx.mods : $$mods) || {};
            var __r6 = $$elemMods;
            $$elemMods = __$ctx.ctx.elemMods || {};
            {
                $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
                $61(__$ctx);
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
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-request/i-request.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-touch/i-jquery/__tap/i-jquery__tap.js*/;
/*borschik:include:../../../../common.blocks/input/input.js*/;
/*borschik:include:../../../../touch.blocks/input/input.js*/;
/*borschik:include:../../../../touch-pad.blocks/input/input.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-system/i-system.js*/;
/*borschik:include:../../../../common.blocks/input/__clear/input__clear.js*/;
/*borschik:include:../../../../common.blocks/input/__hint/input__hint.js*/;
/*borschik:include:../../../../touch-pad.blocks/input/__hint/input__hint.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-request/_type/i-request_type_ajax.js*/;
/*borschik:include:../../../../common.blocks/input/_suggest/input_suggest_yes.js*/;
/*borschik:include:../../../../common.blocks/input/__dataprovider/input__dataprovider.js*/;
/*borschik:include:../../../../common.blocks/popup/popup.js*/;
/*borschik:include:../../../../touch-pad.blocks/popup/popup.js*/;
/*borschik:include:../../../../common.blocks/popup/_autoclosable/popup_autoclosable_yes.js*/;
/*borschik:include:../../../../common.blocks/popup/_adaptive/popup_adaptive_yes.js*/;
/*borschik:include:../../../../common.blocks/popup/_animate/popup_animate_yes.js*/;
/*borschik:include:../../../../common.blocks/popup/__under/popup__under.js*/;
/*borschik:include:../../../../touch.blocks/popup/__under/popup__under.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-common/string/i-common__string.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/b-autocomplete-item/b-autocomplete-item.js*/;
/*borschik:include:../../../../libs/islands-romochka/touch.blocks/b-autocomplete-item/b-autocomplete-item.js*/;


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
