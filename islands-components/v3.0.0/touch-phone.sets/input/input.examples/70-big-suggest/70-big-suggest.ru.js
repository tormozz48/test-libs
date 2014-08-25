var BEMHTML = function() {
  var $$mode, $$block, $$elem, $$elemMods, $$mods;
  var cache,
      exports = {},
      xjst = (function (exports) {
    function $1(__$ctx) {
        var __t = $$mode;
        if (__t === 'tag') {
            return $2(__$ctx);
        } else if (__t === 'js') {
            return $17(__$ctx);
        } else if (__t === 'content') {
            return $31(__$ctx);
        } else if (__t === 'mix') {
            return $52(__$ctx);
        } else if (__t === '') {
            return $60(__$ctx);
        } else if (__t === 'default') {
            return $68(__$ctx);
        } else {
            return $79(__$ctx);
        }
    }
    function $2(__$ctx) {
        if ($$block === 'b-autocomplete-item') {
            var __t = $$elem;
            if (__t === 'loupe' || __t === 'tapahead-text' || __t === 'tapahead') {
                return 'span';
                return;
            } else {
                if (!!$$elem === false) {
                    return 'li';
                    return;
                } else {
                    return $79(__$ctx);
                }
            }
        } else {
            return $79(__$ctx);
        }
    }
    function $17(__$ctx) {
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
                        return $79(__$ctx);
                    }
                } else {
                    return $79(__$ctx);
                }
            }
        } else {
            return $79(__$ctx);
        }
    }
    function $31(__$ctx) {
        var __t = $$block;
        if (__t === 'b-autocomplete-item') {
            if (!!$$elem === false) {
                var _$548data = __$ctx.ctx.data, _$548iCommonString = BEM.blocks['i-common__string'], _$548text = _$548iCommonString.escapeHTML(__$ctx._.isArray(_$548data) ? _$548data[1] : _$548data);
                return _$548iCommonString.highlight(_$548text, __$ctx.ctx.hl);
                return;
            } else {
                return $79(__$ctx);
            }
        } else if (__t === 'i-ua') {
            return $37(__$ctx);
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
                return $79(__$ctx);
            }
        } else {
            return $79(__$ctx);
        }
    }
    function $37(__$ctx) {
        if (!(__$ctx['__$anflg640'] !== true) === false) {
            if (!!$$elem === false) {
                var __r0, __r1;
                var _$543c = ('', __r0 = __$ctx['__$anflg640'], __$ctx['__$anflg640'] = true, __r1 = $37(__$ctx), __$ctx['__$anflg640'] = __r0, '', __r1);
                _$543c += [
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
                return _$543c;
                return;
            } else {
                return $79(__$ctx);
            }
        } else {
            return $79(__$ctx);
        }
    }
    function $52(__$ctx) {
        if ($$block === 'b-autocomplete-item') {
            if (!!$$elem === false) {
                return [{ mods: { pers: __$ctx.ctx.pers ? 'yes' : '' } }];
                return;
            } else {
                return $79(__$ctx);
            }
        } else {
            return $79(__$ctx);
        }
    }
    function $60(__$ctx) {
        if (!__$ctx._ === false) {
            if (!!__$ctx._.cleverSubstring === false) {
                __$ctx._.cleverSubstring = function cleverSubstring(str, maxLength, maxLengthRelative) {
                    return str.length > maxLength + maxLengthRelative ? str.substring(0, maxLength - 1) + '\u2026' : str;
                };
                applyc(__$ctx);
                undefined;
                return;
            } else {
                return $79(__$ctx);
            }
        } else {
            return $79(__$ctx);
        }
    }
    function $68(__$ctx) {
        if ($$block === 'popup') {
            return $69(__$ctx);
        } else {
            return $79(__$ctx);
        }
    }
    function $69(__$ctx) {
        if (!!__$ctx._popupDefaults === false) {
            if (!!$$elem === false) {
                return $72(__$ctx);
            } else {
                return $79(__$ctx);
            }
        } else {
            return $79(__$ctx);
        }
    }
    function $72(__$ctx) {
        var _$540ctx = __$ctx.ctx;
        _$540ctx.mods = $$mods = __$ctx.extend({
            theme: 'ffffff',
            autoclosable: 'yes',
            adaptive: 'yes',
            animate: 'yes'
        }, $$mods);
        if (_$540ctx.zIndex) {
            var _$540attrs = _$540ctx.attrs || (_$540ctx.attrs = {});
            _$540attrs.style = (_$540attrs.style || '') + ';z-index:' + _$540ctx.zIndex + ';';
        } else {
            undefined;
        }
        {
            '';
            var __r0 = __$ctx._popupDefaults;
            __$ctx._popupDefaults = true;
            $69(__$ctx);
            __$ctx._popupDefaults = __r0;
            '';
        }
        undefined;
        return;
    }
    function $79(__$ctx) {
        if ($$block === 'popup') {
            if (!($$mode === '' && __$ctx._popupDefaults) === false) {
                delete __$ctx._popupDefaults;
                applyc(__$ctx);
                undefined;
                return;
            } else {
                return $85(__$ctx);
            }
        } else {
            return $85(__$ctx);
        }
    }
    function $85(__$ctx) {
        var __t = $$mode;
        if (__t === 'content') {
            if ($$block === 'input') {
                var __t = $$elem;
                if (__t === 'clear') {
                    if (!!__$ctx.ctx.content === false) {
                        return '';
                        return;
                    } else {
                        return $98(__$ctx);
                    }
                } else if (__t === 'ahead') {
                    return [
                        { elem: 'ahead-filler' },
                        { elem: 'ahead-hint' }
                    ];
                    return;
                } else {
                    return $98(__$ctx);
                }
            } else {
                return $98(__$ctx);
            }
        } else if (__t === 'tag') {
            if ($$block === 'input') {
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
                        return $115(__$ctx);
                    }
                }
            } else {
                return $115(__$ctx);
            }
        } else if (__t === 'attrs') {
            if ($$block === 'input') {
                var __t = $$elem;
                if (__t === 'clear') {
                    return { unselectable: 'on' };
                    return;
                } else if (__t === 'control') {
                    return $120(__$ctx);
                } else {
                    return $128(__$ctx);
                }
            } else {
                return $128(__$ctx);
            }
        } else if (__t === 'default') {
            if ($$block === 'input') {
                return $130(__$ctx);
            } else {
                return $194(__$ctx);
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
                    return $156(__$ctx);
                }
            } else {
                return $156(__$ctx);
            }
        } else if (__t === 'value') {
            if ($$block === 'input') {
                return $158(__$ctx);
            } else {
                return $194(__$ctx);
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
                    return $187(__$ctx);
                }
            } else {
                return $187(__$ctx);
            }
        } else if (__t === 'bem' || __t === 'jsAttr' || __t === 'cls') {
            return undefined;
            return;
        } else {
            return $194(__$ctx);
        }
    }
    function $98(__$ctx) {
        return __$ctx.ctx.content;
        return;
    }
    function $115(__$ctx) {
        return undefined;
        return;
    }
    function $120(__$ctx) {
        if (!(__$ctx['__$anflg639'] !== true) === false) {
            var __r0, __r1;
            var _$53tctx = __$ctx.ctx, _$53ta = __$ctx._.extend(('', __r0 = __$ctx['__$anflg639'], __$ctx['__$anflg639'] = true, __r1 = $120(__$ctx), __$ctx['__$anflg639'] = __r0, '', __r1), {
                    autocomplete: _$53tctx.autocomplete || 'off',
                    autocorrect: _$53tctx.autocorrect || 'off',
                    autocapitalize: _$53tctx.autocapitalize || 'off',
                    spellcheck: _$53tctx.spellcheck || 'false'
                });
            return _$53ta;
            return;
        } else {
            var _$53ra = __$ctx._.extend({
                    id: __$ctx._inputId,
                    name: __$ctx._name
                }, __$ctx.ctx.controlAttrs);
            (__$ctx._value || __$ctx._value === 0) && (_$53ra.value = __$ctx._value);
            $$mods.disabled && (_$53ra.disabled = 'disabled');
            _$53ra['aria-labelledby'] = __$ctx._labelId + ' ' + __$ctx._hintId;
            return _$53ra;
            return;
        }
    }
    function $128(__$ctx) {
        return undefined;
        return;
    }
    function $130(__$ctx) {
        if ($$elem === 'control') {
            if (!(__$ctx['__$anflg638'] !== true) === false) {
                if (!!$$mods.clear === false) {
                    return $134(__$ctx);
                } else {
                    return $139(__$ctx);
                }
            } else {
                return $139(__$ctx);
            }
        } else {
            return $139(__$ctx);
        }
    }
    function $134(__$ctx) {
        {
            '';
            var __r0 = __$ctx['__$anflg638'];
            __$ctx['__$anflg638'] = true;
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
                $60(__$ctx);
                __$ctx.ctx = __r1;
                $$mode = __r2;
                '';
            }
            __$ctx['__$anflg638'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $139(__$ctx) {
        if (!(__$ctx['__$anflg637'] !== true) === false) {
            if (!!$$elem === false) {
                return $142(__$ctx);
            } else {
                return $194(__$ctx);
            }
        } else {
            return $194(__$ctx);
        }
    }
    function $142(__$ctx) {
        var __r0, __r1, __r2;
        var _$53ivalue = ('', __r0 = $$mode, $$mode = 'value', __r1 = __$ctx.ctx, __$ctx.ctx = __$ctx.ctx.value, __r2 = $158(__$ctx), $$mode = __r0, __$ctx.ctx = __r1, '', __r2), _$53iid = __$ctx.ctx.id || __$ctx.generateId(), _$53imods = __$ctx.ctx.mods || {};
        _$53imods.theme = _$53imods.theme || 'normal';
        {
            '';
            var __r3 = __$ctx['__$anflg637'];
            __$ctx['__$anflg637'] = true;
            {
                '';
                var __r4 = __$ctx._inputId;
                __$ctx._inputId = _$53iid;
                var __r5 = __$ctx._labelId;
                __$ctx._labelId = 'label' + _$53iid;
                var __r6 = __$ctx._hintId;
                __$ctx._hintId = 'hint' + _$53iid;
                var __r7 = __$ctx._name;
                __$ctx._name = __$ctx.ctx.name || '';
                var __r8 = __$ctx._value;
                __$ctx._value = _$53ivalue;
                var __r9 = __$ctx._inputLink;
                __$ctx._inputLink = true;
                var __r10 = __$ctx._disabled;
                __$ctx._disabled = $$mods.disabled;
                var __r11 = __$ctx.ctx, __r12 = __r11.mods;
                __r11.mods = _$53imods;
                $130(__$ctx);
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
            __$ctx['__$anflg637'] = __r3;
            '';
        }
        undefined;
        return;
    }
    function $156(__$ctx) {
        return undefined;
        return;
    }
    function $158(__$ctx) {
        if (!__$ctx.isSimple(__$ctx.ctx) === false) {
            if (!!$$elem === false) {
                return __$ctx.ctx;
                return;
            } else {
                return $164(__$ctx);
            }
        } else {
            return $164(__$ctx);
        }
    }
    function $164(__$ctx) {
        if (!__$ctx.ctx === false) {
            if (!!$$elem === false) {
                var _$53kvalue = [];
                {
                    '';
                    var __r0 = __$ctx._buf;
                    __$ctx._buf = _$53kvalue;
                    var __r1 = $$mode;
                    $$mode = '';
                    $60(__$ctx);
                    __$ctx._buf = __r0;
                    $$mode = __r1;
                    '';
                }
                undefined;
                return _$53kvalue.join('');
                return;
            } else {
                return $170(__$ctx);
            }
        } else {
            return $170(__$ctx);
        }
    }
    function $170(__$ctx) {
        if (!true === false) {
            if (!!$$elem === false) {
                return '';
                return;
            } else {
                return $194(__$ctx);
            }
        } else {
            return $194(__$ctx);
        }
    }
    function $187(__$ctx) {
        return undefined;
        return;
    }
    function $194(__$ctx) {
        if (!__$ctx.ctx === false) {
            if (!__$ctx.ctx.link === false) {
                if (!!__$ctx._.isSimple(__$ctx.ctx) === false) {
                    return $198(__$ctx);
                } else {
                    return $203(__$ctx);
                }
            } else {
                return $203(__$ctx);
            }
        } else {
            return $203(__$ctx);
        }
    }
    function $198(__$ctx) {
        var __r0, __r1;
        function _$537follow() {
            if (this.ctx.link === 'no-follow') {
                return undefined;
            } else {
                undefined;
            }
            var data = this._links[this.ctx.link];
            return '', __r0 = this.ctx, this.ctx = data, __r1 = $1(__$ctx), this.ctx = __r0, '', __r1;
        }
        if (!cache || !__$ctx._cacheLog) {
            return _$537follow.call(__$ctx);
        } else {
            undefined;
        }
        var _$537contents = __$ctx._buf.slice(__$ctx._cachePos).join('');
        __$ctx._cachePos = __$ctx._buf.length;
        __$ctx._cacheLog.push(_$537contents, {
            log: __$ctx._localLog.slice(),
            link: __$ctx.ctx.link
        });
        var _$537res = _$537follow.call(__$ctx);
        __$ctx._cachePos = __$ctx._buf.length;
        return _$537res;
        return;
    }
    function $203(__$ctx) {
        if (!cache === false) {
            if (!__$ctx.ctx === false) {
                if (!__$ctx.ctx.cache === false) {
                    return $207(__$ctx);
                } else {
                    return $212(__$ctx);
                }
            } else {
                return $212(__$ctx);
            }
        } else {
            return $212(__$ctx);
        }
    }
    function $207(__$ctx) {
        var _$536cached;
        function _$536setProperty(obj, key, value) {
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
        if (_$536cached = cache.get(__$ctx.ctx.cache)) {
            var _$536oldLinks = __$ctx._links;
            if (__$ctx.ctx.links) {
                __$ctx._links = __$ctx.ctx.links;
            } else {
                undefined;
            }
            for (var _$536i = 0; _$536i < _$536cached.log.length; _$536i++) {
                if (typeof _$536cached.log[_$536i] === 'string') {
                    __$ctx._buf.push(_$536cached.log[_$536i]);
                    continue;
                } else {
                    undefined;
                }
                var _$536log = _$536cached.log[_$536i], _$536reverseLog;
                _$536reverseLog = _$536log.log.map(function (entry) {
                    return {
                        key: entry[0],
                        value: _$536setProperty(this, entry[0], entry[1])
                    };
                }, __$ctx).reverse();
                {
                    '';
                    var __r0 = __$ctx.ctx, __r1 = __r0.cache;
                    __r0.cache = null;
                    var __r2 = __$ctx._cacheLog;
                    __$ctx._cacheLog = null;
                    var __r3 = __$ctx.ctx, __r4 = __r3.link;
                    __r3.link = _$536log.link;
                    $1(__$ctx);
                    __r0.cache = __r1;
                    __$ctx._cacheLog = __r2;
                    __r3.link = __r4;
                    '';
                }
                undefined;
                _$536reverseLog.forEach(function (entry) {
                    _$536setProperty(this, entry.key, entry.value);
                }, __$ctx);
            }
            __$ctx._links = _$536oldLinks;
            return _$536cached.res;
        } else {
            undefined;
        }
        var _$536cacheLog = [], _$536res;
        {
            '';
            var __r5 = __$ctx.ctx, __r6 = __r5.cache;
            __r5.cache = null;
            var __r7 = __$ctx._cachePos;
            __$ctx._cachePos = __$ctx._buf.length;
            var __r8 = __$ctx._cacheLog;
            __$ctx._cacheLog = _$536cacheLog;
            var __r9 = __$ctx._localLog;
            __$ctx._localLog = [];
            {
                _$536res = $1(__$ctx);
                var _$536tail = __$ctx._buf.slice(__$ctx._cachePos).join('');
                if (_$536tail) {
                    _$536cacheLog.push(_$536tail);
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
            log: _$536cacheLog,
            res: _$536res
        });
        return _$536res;
        return;
    }
    function $212(__$ctx) {
        var __t = $$mode;
        if (__t === 'default') {
            return $214(__$ctx);
        } else if (__t === '') {
            if (!__$ctx._.isSimple(__$ctx.ctx) === false) {
                __$ctx._listLength--;
                var _$534ctx = __$ctx.ctx;
                (_$534ctx && _$534ctx !== true || _$534ctx === 0) && __$ctx._buf.push(_$534ctx);
                return;
            } else {
                if (!!__$ctx.ctx === false) {
                    __$ctx._listLength--;
                    return;
                } else {
                    if (!__$ctx._.isArray(__$ctx.ctx) === false) {
                        return $223(__$ctx);
                    } else {
                        if (!true === false) {
                            return $226(__$ctx);
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
    function $214(__$ctx) {
        var __r13, __r0, __r4, __r5, __r6, __r7, __r8, __r9, __r10, __r11, __r12, __r1, __r14, __r15, __r16, __r17, __r20, __r21, __r22, __r23, __r24, __r25;
        var _$535BEM_ = __$ctx.BEM, _$535v = __$ctx.ctx, _$535buf = __$ctx._buf, _$535tag;
        _$535tag = ('', __r0 = $$mode, $$mode = 'tag', __r1 = $2(__$ctx), $$mode = __r0, '', __r1);
        typeof _$535tag != 'undefined' || (_$535tag = _$535v.tag);
        typeof _$535tag != 'undefined' || (_$535tag = 'div');
        if (_$535tag) {
            var _$535jsParams, _$535js;
            if ($$block && _$535v.js !== false) {
                _$535js = ('', __r4 = $$mode, $$mode = 'js', __r5 = $17(__$ctx), $$mode = __r4, '', __r5);
                _$535js = _$535js ? __$ctx._.extend(_$535v.js, _$535js === true ? {} : _$535js) : _$535v.js === true ? {} : _$535v.js;
                _$535js && ((_$535jsParams = {})[_$535BEM_.INTERNAL.buildClass($$block, _$535v.elem)] = _$535js);
            } else {
                undefined;
            }
            _$535buf.push('<', _$535tag);
            var _$535isBEM = ('', __r6 = $$mode, $$mode = 'bem', __r7 = $79(__$ctx), $$mode = __r6, '', __r7);
            typeof _$535isBEM != 'undefined' || (_$535isBEM = typeof _$535v.bem != 'undefined' ? _$535v.bem : _$535v.block || _$535v.elem);
            var _$535cls = ('', __r8 = $$mode, $$mode = 'cls', __r9 = $79(__$ctx), $$mode = __r8, '', __r9);
            _$535cls || (_$535cls = _$535v.cls);
            var _$535addJSInitClass = _$535v.block && _$535jsParams;
            if (_$535isBEM || _$535cls) {
                _$535buf.push(' class="');
                if (_$535isBEM) {
                    _$535BEM_.INTERNAL.buildClasses($$block, _$535v.elem, _$535v.elemMods || _$535v.mods, _$535buf);
                    var _$535mix = ('', __r10 = $$mode, $$mode = 'mix', __r11 = $52(__$ctx), $$mode = __r10, '', __r11);
                    _$535v.mix && (_$535mix = _$535mix ? _$535mix.concat(_$535v.mix) : _$535v.mix);
                    if (_$535mix) {
                        var _$535visited = {};
                        function _$535visitedKey(block, elem) {
                            return (block || '') + '__' + (elem || '');
                        }
                        _$535visited[_$535visitedKey($$block, $$elem)] = true;
                        if (!__$ctx._.isArray(_$535mix)) {
                            _$535mix = [_$535mix];
                        } else {
                            undefined;
                        }
                        for (var _$535i = 0; _$535i < _$535mix.length; _$535i++) {
                            var _$535mixItem = _$535mix[_$535i];
                            if (!_$535mixItem) {
                                continue;
                            } else {
                                undefined;
                            }
                            var _$535hasItem = _$535mixItem.block || _$535mixItem.elem, _$535block = _$535mixItem.block || _$535mixItem._block || $$block, _$535elem = _$535mixItem.elem || _$535mixItem._elem || $$elem, _$535mods = _$535mixItem.mods || $$mods, _$535elemMods = _$535mixItem.elemMods || {};
                            _$535hasItem && _$535buf.push(' ');
                            _$535BEM_.INTERNAL[_$535hasItem ? 'buildClasses' : 'buildModsClasses'](_$535block, _$535mixItem.elem || _$535mixItem._elem || (_$535mixItem.block ? undefined : $$elem), _$535mixItem.elemMods || _$535mixItem.mods, _$535buf);
                            if (_$535mixItem.js) {
                                (_$535jsParams || (_$535jsParams = {}))[_$535BEM_.INTERNAL.buildClass(_$535block, _$535mixItem.elem)] = _$535mixItem.js === true ? {} : _$535mixItem.js;
                                _$535addJSInitClass || (_$535addJSInitClass = _$535block && !_$535mixItem.elem);
                            } else {
                                undefined;
                            }
                            if (_$535hasItem && !_$535visited[_$535visitedKey(_$535block, _$535elem)]) {
                                _$535visited[_$535visitedKey(_$535block, _$535elem)] = true;
                                var _$535nestedMix = ('', __r12 = $$block, $$block = _$535block, __r13 = $$elem, $$elem = _$535elem, __r14 = $$mods, $$mods = _$535mods, __r15 = $$elemMods, $$elemMods = _$535elemMods, __r16 = $$mode, $$mode = 'mix', __r17 = $52(__$ctx), $$block = __r12, $$elem = __r13, $$mods = __r14, $$elemMods = __r15, $$mode = __r16, '', __r17);
                                if (_$535nestedMix) {
                                    for (var _$535j = 0; _$535j < _$535nestedMix.length; _$535j++) {
                                        var _$535nestedItem = _$535nestedMix[_$535j];
                                        if (!_$535nestedItem.block && !_$535nestedItem.elem || !_$535visited[_$535visitedKey(_$535nestedItem.block, _$535nestedItem.elem)]) {
                                            _$535nestedItem._block = _$535block;
                                            _$535nestedItem._elem = _$535elem;
                                            _$535mix.splice(_$535i + 1, 0, _$535nestedItem);
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
                _$535cls && _$535buf.push(_$535isBEM ? ' ' : '', _$535cls);
                _$535addJSInitClass && _$535buf.push(' i-bem');
                _$535buf.push('"');
            } else {
                undefined;
            }
            if (_$535jsParams) {
                var _$535jsAttr = ('', __r20 = $$mode, $$mode = 'jsAttr', __r21 = $79(__$ctx), $$mode = __r20, '', __r21);
                _$535buf.push(' ', _$535jsAttr || 'data-bem', '="', __$ctx._.attrEscape(JSON.stringify(_$535jsParams)), '"');
            } else {
                undefined;
            }
            var _$535attrs = ('', __r22 = $$mode, $$mode = 'attrs', __r23 = $79(__$ctx), $$mode = __r22, '', __r23);
            _$535attrs = __$ctx._.extend(_$535attrs, _$535v.attrs);
            if (_$535attrs) {
                var _$535name;
                for (_$535name in _$535attrs) {
                    if (_$535attrs[_$535name] === undefined) {
                        continue;
                    } else {
                        undefined;
                    }
                    _$535buf.push(' ', _$535name, '="', __$ctx._.attrEscape(_$535attrs[_$535name]), '"');
                }
            } else {
                undefined;
            }
        } else {
            undefined;
        }
        if (__$ctx._.isShortTag(_$535tag)) {
            _$535buf.push('/>');
        } else {
            _$535tag && _$535buf.push('>');
            var _$535content = ('', __r24 = $$mode, $$mode = 'content', __r25 = $31(__$ctx), $$mode = __r24, '', __r25);
            if (_$535content || _$535content === 0) {
                var _$535isBEM = $$block || $$elem;
                {
                    '';
                    var __r26 = __$ctx._notNewList;
                    __$ctx._notNewList = false;
                    var __r27 = __$ctx.position;
                    __$ctx.position = _$535isBEM ? 1 : __$ctx.position;
                    var __r28 = __$ctx._listLength;
                    __$ctx._listLength = _$535isBEM ? 1 : __$ctx._listLength;
                    var __r29 = __$ctx.ctx;
                    __$ctx.ctx = _$535content;
                    var __r30 = $$mode;
                    $$mode = '';
                    $60(__$ctx);
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
            _$535tag && _$535buf.push('</', _$535tag, '>');
        }
        return;
    }
    function $223(__$ctx) {
        var _$532v = __$ctx.ctx, _$532l = _$532v.length, _$532i = 0, _$532prevPos = __$ctx.position, _$532prevNotNewList = __$ctx._notNewList;
        if (_$532prevNotNewList) {
            __$ctx._listLength += _$532l - 1;
        } else {
            __$ctx.position = 0;
            __$ctx._listLength = _$532l;
        }
        __$ctx._notNewList = true;
        while (_$532i < _$532l) {
            var _$532newCtx = _$532v[_$532i++];
            {
                '';
                var __r0 = __$ctx.ctx;
                __$ctx.ctx = _$532newCtx == null ? '' : _$532newCtx;
                $60(__$ctx);
                __$ctx.ctx = __r0;
                '';
            }
            undefined;
        }
        _$532prevNotNewList || (__$ctx.position = _$532prevPos);
        return;
    }
    function $226(__$ctx) {
        var _$531vBlock = __$ctx.ctx.block, _$531vElem = __$ctx.ctx.elem, _$531block = __$ctx._currBlock || $$block;
        __$ctx.ctx || (__$ctx.ctx = {});
        {
            '';
            var __r0 = $$mode;
            $$mode = 'default';
            var __r1 = __$ctx._links;
            __$ctx._links = __$ctx.ctx.links || __$ctx._links;
            var __r2 = $$block;
            $$block = _$531vBlock || (_$531vElem ? _$531block : undefined);
            var __r3 = __$ctx._currBlock;
            __$ctx._currBlock = _$531vBlock || _$531vElem ? undefined : _$531block;
            var __r4 = $$elem;
            $$elem = __$ctx.ctx.elem;
            var __r5 = $$mods;
            $$mods = (_$531vBlock ? __$ctx.ctx.mods : $$mods) || {};
            var __r6 = $$elemMods;
            $$elemMods = __$ctx.ctx.elemMods || {};
            {
                $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
                $68(__$ctx);
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
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-system/i-system.js*/;
/*borschik:include:../../../../common.blocks/input/__clear/input__clear.js*/;
/*borschik:include:../../../../touch-phone.blocks/input/__clear/input__clear.js*/;
/*borschik:include:../../../../common.blocks/input/__hint/input__hint.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-request/_type/i-request_type_ajax.js*/;
/*borschik:include:../../../../common.blocks/input/_suggest/input_suggest_yes.js*/;
/*borschik:include:../../../../common.blocks/input/__dataprovider/input__dataprovider.js*/;
/*borschik:include:../../../../common.blocks/popup/popup.js*/;
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
