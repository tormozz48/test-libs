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
                        return $107(__$ctx);
                    }
                } else if (__t === 'ahead') {
                    return [
                        { elem: 'ahead-filler' },
                        { elem: 'ahead-hint' }
                    ];
                    return;
                } else {
                    return $107(__$ctx);
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
                        return $107(__$ctx);
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
                    return $107(__$ctx);
                }
            } else if (__t === 'default') {
                return $40(__$ctx);
            } else if (__t === 'js') {
                if (!(__$ctx.ctx.js && __$ctx.ctx.js.autoFocus) === false) {
                    if (!!$$elem === false) {
                        return { live: false };
                        return;
                    } else {
                        return $63(__$ctx);
                    }
                } else {
                    return $63(__$ctx);
                }
            } else if (__t === 'mix') {
                if ($$elem === 'ahead') {
                    return [{
                            block: 'input',
                            elem: 'input'
                        }];
                    return;
                } else {
                    return $107(__$ctx);
                }
            } else if (__t === 'value') {
                return $85(__$ctx);
            } else {
                return $107(__$ctx);
            }
        } else {
            return $107(__$ctx);
        }
    }
    function $30(__$ctx) {
        if (!(__$ctx['__$anflg581'] !== true) === false) {
            var __r0, __r1;
            return __$ctx.extend(('', __r0 = __$ctx['__$anflg581'], __$ctx['__$anflg581'] = true, __r1 = $30(__$ctx), __$ctx['__$anflg581'] = __r0, '', __r1) || {}, { autocomplete: 'off' });
            return;
        } else {
            if (!(__$ctx['__$anflg580'] !== true) === false) {
                var __r0, __r1;
                var _$4l0ctx = __$ctx.ctx, _$4l0a = __$ctx._.extend(('', __r0 = __$ctx['__$anflg580'], __$ctx['__$anflg580'] = true, __r1 = $30(__$ctx), __$ctx['__$anflg580'] = __r0, '', __r1), {
                        autocomplete: _$4l0ctx.autocomplete || 'off',
                        autocorrect: _$4l0ctx.autocorrect || 'off',
                        autocapitalize: _$4l0ctx.autocapitalize || 'off',
                        spellcheck: _$4l0ctx.spellcheck || 'false'
                    });
                return _$4l0a;
                return;
            } else {
                var _$4kya = __$ctx._.extend({
                        id: __$ctx._inputId,
                        name: __$ctx._name
                    }, __$ctx.ctx.controlAttrs);
                (__$ctx._value || __$ctx._value === 0) && (_$4kya.value = __$ctx._value);
                $$mods.disabled && (_$4kya.disabled = 'disabled');
                _$4kya['aria-labelledby'] = __$ctx._labelId + ' ' + __$ctx._hintId;
                return _$4kya;
                return;
            }
        }
    }
    function $40(__$ctx) {
        if ($$elem === 'control') {
            if (!(__$ctx['__$anflg579'] !== true) === false) {
                if (!!$$mods.clear === false) {
                    return $44(__$ctx);
                } else {
                    return $49(__$ctx);
                }
            } else {
                return $49(__$ctx);
            }
        } else {
            return $49(__$ctx);
        }
    }
    function $44(__$ctx) {
        {
            '';
            var __r0 = __$ctx['__$anflg579'];
            __$ctx['__$anflg579'] = true;
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
                $124(__$ctx);
                __$ctx.ctx = __r1;
                $$mode = __r2;
                '';
            }
            __$ctx['__$anflg579'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $49(__$ctx) {
        if (!(__$ctx['__$anflg578'] !== true) === false) {
            if (!!$$elem === false) {
                return $52(__$ctx);
            } else {
                return $107(__$ctx);
            }
        } else {
            return $107(__$ctx);
        }
    }
    function $52(__$ctx) {
        var __r0, __r1, __r2;
        var _$4kmvalue = ('', __r0 = $$mode, $$mode = 'value', __r1 = __$ctx.ctx, __$ctx.ctx = __$ctx.ctx.value, __r2 = $85(__$ctx), $$mode = __r0, __$ctx.ctx = __r1, '', __r2), _$4kmid = __$ctx.ctx.id || __$ctx.generateId(), _$4kmmods = __$ctx.ctx.mods || {};
        _$4kmmods.theme = _$4kmmods.theme || 'normal';
        {
            '';
            var __r3 = __$ctx['__$anflg578'];
            __$ctx['__$anflg578'] = true;
            {
                '';
                var __r4 = __$ctx._inputId;
                __$ctx._inputId = _$4kmid;
                var __r5 = __$ctx._labelId;
                __$ctx._labelId = 'label' + _$4kmid;
                var __r6 = __$ctx._hintId;
                __$ctx._hintId = 'hint' + _$4kmid;
                var __r7 = __$ctx._name;
                __$ctx._name = __$ctx.ctx.name || '';
                var __r8 = __$ctx._value;
                __$ctx._value = _$4kmvalue;
                var __r9 = __$ctx._inputLink;
                __$ctx._inputLink = true;
                var __r10 = __$ctx._disabled;
                __$ctx._disabled = $$mods.disabled;
                var __r11 = __$ctx.ctx, __r12 = __r11.mods;
                __r11.mods = _$4kmmods;
                $40(__$ctx);
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
            __$ctx['__$anflg578'] = __r3;
            '';
        }
        undefined;
        return;
    }
    function $63(__$ctx) {
        if (!($$mods.popup == 'gradient') === false) {
            if (!!$$elem === false) {
                return { popupMods: { gradient: 'yes' } };
                return;
            } else {
                return $69(__$ctx);
            }
        } else {
            return $69(__$ctx);
        }
    }
    function $69(__$ctx) {
        if (!true === false) {
            if (!!$$elem === false) {
                return true;
                return;
            } else {
                return $75(__$ctx);
            }
        } else {
            return $75(__$ctx);
        }
    }
    function $75(__$ctx) {
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
            return $107(__$ctx);
        }
    }
    function $85(__$ctx) {
        if (!__$ctx.isSimple(__$ctx.ctx) === false) {
            if (!!$$elem === false) {
                return __$ctx.ctx;
                return;
            } else {
                return $91(__$ctx);
            }
        } else {
            return $91(__$ctx);
        }
    }
    function $91(__$ctx) {
        if (!__$ctx.ctx === false) {
            if (!!$$elem === false) {
                var _$4kovalue = [];
                {
                    '';
                    var __r0 = __$ctx._buf;
                    __$ctx._buf = _$4kovalue;
                    var __r1 = $$mode;
                    $$mode = '';
                    $125(__$ctx);
                    __$ctx._buf = __r0;
                    $$mode = __r1;
                    '';
                }
                undefined;
                return _$4kovalue.join('');
                return;
            } else {
                return $97(__$ctx);
            }
        } else {
            return $97(__$ctx);
        }
    }
    function $97(__$ctx) {
        if (!true === false) {
            if (!!$$elem === false) {
                return '';
                return;
            } else {
                return $107(__$ctx);
            }
        } else {
            return $107(__$ctx);
        }
    }
    function $107(__$ctx) {
        var __t = $$mode;
        if (__t === 'content') {
            return __$ctx.ctx.content;
            return;
        } else if (__t === 'mix' || __t === 'bem' || __t === 'jsAttr' || __t === 'js' || __t === 'cls' || __t === 'attrs' || __t === 'tag') {
            return undefined;
            return;
        } else {
            return $124(__$ctx);
        }
    }
    function $124(__$ctx) {
        if (!__$ctx.ctx === false) {
            return $125(__$ctx);
        } else {
            return $133(__$ctx);
        }
    }
    function $125(__$ctx) {
        if (!__$ctx.ctx.link === false) {
            if (!!__$ctx._.isSimple(__$ctx.ctx) === false) {
                return $128(__$ctx);
            } else {
                return $133(__$ctx);
            }
        } else {
            return $133(__$ctx);
        }
    }
    function $128(__$ctx) {
        var __r0, __r1;
        function _$4kbfollow() {
            if (this.ctx.link === 'no-follow') {
                return undefined;
            } else {
                undefined;
            }
            var data = this._links[this.ctx.link];
            return '', __r0 = this.ctx, this.ctx = data, __r1 = $1(__$ctx), this.ctx = __r0, '', __r1;
        }
        if (!cache || !__$ctx._cacheLog) {
            return _$4kbfollow.call(__$ctx);
        } else {
            undefined;
        }
        var _$4kbcontents = __$ctx._buf.slice(__$ctx._cachePos).join('');
        __$ctx._cachePos = __$ctx._buf.length;
        __$ctx._cacheLog.push(_$4kbcontents, {
            log: __$ctx._localLog.slice(),
            link: __$ctx.ctx.link
        });
        var _$4kbres = _$4kbfollow.call(__$ctx);
        __$ctx._cachePos = __$ctx._buf.length;
        return _$4kbres;
        return;
    }
    function $133(__$ctx) {
        if (!cache === false) {
            if (!__$ctx.ctx === false) {
                if (!__$ctx.ctx.cache === false) {
                    return $137(__$ctx);
                } else {
                    return $142(__$ctx);
                }
            } else {
                return $142(__$ctx);
            }
        } else {
            return $142(__$ctx);
        }
    }
    function $137(__$ctx) {
        var _$4kacached;
        function _$4kasetProperty(obj, key, value) {
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
        if (_$4kacached = cache.get(__$ctx.ctx.cache)) {
            var _$4kaoldLinks = __$ctx._links;
            if (__$ctx.ctx.links) {
                __$ctx._links = __$ctx.ctx.links;
            } else {
                undefined;
            }
            for (var _$4kai = 0; _$4kai < _$4kacached.log.length; _$4kai++) {
                if (typeof _$4kacached.log[_$4kai] === 'string') {
                    __$ctx._buf.push(_$4kacached.log[_$4kai]);
                    continue;
                } else {
                    undefined;
                }
                var _$4kalog = _$4kacached.log[_$4kai], _$4kareverseLog;
                _$4kareverseLog = _$4kalog.log.map(function (entry) {
                    return {
                        key: entry[0],
                        value: _$4kasetProperty(this, entry[0], entry[1])
                    };
                }, __$ctx).reverse();
                {
                    '';
                    var __r0 = __$ctx.ctx, __r1 = __r0.cache;
                    __r0.cache = null;
                    var __r2 = __$ctx._cacheLog;
                    __$ctx._cacheLog = null;
                    var __r3 = __$ctx.ctx, __r4 = __r3.link;
                    __r3.link = _$4kalog.link;
                    $1(__$ctx);
                    __r0.cache = __r1;
                    __$ctx._cacheLog = __r2;
                    __r3.link = __r4;
                    '';
                }
                undefined;
                _$4kareverseLog.forEach(function (entry) {
                    _$4kasetProperty(this, entry.key, entry.value);
                }, __$ctx);
            }
            __$ctx._links = _$4kaoldLinks;
            return _$4kacached.res;
        } else {
            undefined;
        }
        var _$4kacacheLog = [], _$4kares;
        {
            '';
            var __r5 = __$ctx.ctx, __r6 = __r5.cache;
            __r5.cache = null;
            var __r7 = __$ctx._cachePos;
            __$ctx._cachePos = __$ctx._buf.length;
            var __r8 = __$ctx._cacheLog;
            __$ctx._cacheLog = _$4kacacheLog;
            var __r9 = __$ctx._localLog;
            __$ctx._localLog = [];
            {
                _$4kares = $1(__$ctx);
                var _$4katail = __$ctx._buf.slice(__$ctx._cachePos).join('');
                if (_$4katail) {
                    _$4kacacheLog.push(_$4katail);
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
            log: _$4kacacheLog,
            res: _$4kares
        });
        return _$4kares;
        return;
    }
    function $142(__$ctx) {
        var __t = $$mode;
        if (__t === 'default') {
            return $144(__$ctx);
        } else if (__t === '') {
            if (!__$ctx._.isSimple(__$ctx.ctx) === false) {
                __$ctx._listLength--;
                var _$4k8ctx = __$ctx.ctx;
                (_$4k8ctx && _$4k8ctx !== true || _$4k8ctx === 0) && __$ctx._buf.push(_$4k8ctx);
                return;
            } else {
                if (!!__$ctx.ctx === false) {
                    __$ctx._listLength--;
                    return;
                } else {
                    if (!__$ctx._.isArray(__$ctx.ctx) === false) {
                        return $153(__$ctx);
                    } else {
                        if (!true === false) {
                            return $156(__$ctx);
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
    function $144(__$ctx) {
        var __r13, __r0, __r4, __r5, __r6, __r7, __r8, __r9, __r10, __r11, __r12, __r1, __r14, __r15, __r16, __r17, __r20, __r21, __r22, __r23, __r24, __r25;
        var _$4k9BEM_ = __$ctx.BEM, _$4k9v = __$ctx.ctx, _$4k9buf = __$ctx._buf, _$4k9tag;
        _$4k9tag = ('', __r0 = $$mode, $$mode = 'tag', __r1 = $1(__$ctx), $$mode = __r0, '', __r1);
        typeof _$4k9tag != 'undefined' || (_$4k9tag = _$4k9v.tag);
        typeof _$4k9tag != 'undefined' || (_$4k9tag = 'div');
        if (_$4k9tag) {
            var _$4k9jsParams, _$4k9js;
            if ($$block && _$4k9v.js !== false) {
                _$4k9js = ('', __r4 = $$mode, $$mode = 'js', __r5 = $1(__$ctx), $$mode = __r4, '', __r5);
                _$4k9js = _$4k9js ? __$ctx._.extend(_$4k9v.js, _$4k9js === true ? {} : _$4k9js) : _$4k9v.js === true ? {} : _$4k9v.js;
                _$4k9js && ((_$4k9jsParams = {})[_$4k9BEM_.INTERNAL.buildClass($$block, _$4k9v.elem)] = _$4k9js);
            } else {
                undefined;
            }
            _$4k9buf.push('<', _$4k9tag);
            var _$4k9isBEM = ('', __r6 = $$mode, $$mode = 'bem', __r7 = $1(__$ctx), $$mode = __r6, '', __r7);
            typeof _$4k9isBEM != 'undefined' || (_$4k9isBEM = typeof _$4k9v.bem != 'undefined' ? _$4k9v.bem : _$4k9v.block || _$4k9v.elem);
            var _$4k9cls = ('', __r8 = $$mode, $$mode = 'cls', __r9 = $1(__$ctx), $$mode = __r8, '', __r9);
            _$4k9cls || (_$4k9cls = _$4k9v.cls);
            var _$4k9addJSInitClass = _$4k9v.block && _$4k9jsParams;
            if (_$4k9isBEM || _$4k9cls) {
                _$4k9buf.push(' class="');
                if (_$4k9isBEM) {
                    _$4k9BEM_.INTERNAL.buildClasses($$block, _$4k9v.elem, _$4k9v.elemMods || _$4k9v.mods, _$4k9buf);
                    var _$4k9mix = ('', __r10 = $$mode, $$mode = 'mix', __r11 = $1(__$ctx), $$mode = __r10, '', __r11);
                    _$4k9v.mix && (_$4k9mix = _$4k9mix ? _$4k9mix.concat(_$4k9v.mix) : _$4k9v.mix);
                    if (_$4k9mix) {
                        var _$4k9visited = {};
                        function _$4k9visitedKey(block, elem) {
                            return (block || '') + '__' + (elem || '');
                        }
                        _$4k9visited[_$4k9visitedKey($$block, $$elem)] = true;
                        if (!__$ctx._.isArray(_$4k9mix)) {
                            _$4k9mix = [_$4k9mix];
                        } else {
                            undefined;
                        }
                        for (var _$4k9i = 0; _$4k9i < _$4k9mix.length; _$4k9i++) {
                            var _$4k9mixItem = _$4k9mix[_$4k9i];
                            if (!_$4k9mixItem) {
                                continue;
                            } else {
                                undefined;
                            }
                            var _$4k9hasItem = _$4k9mixItem.block || _$4k9mixItem.elem, _$4k9block = _$4k9mixItem.block || _$4k9mixItem._block || $$block, _$4k9elem = _$4k9mixItem.elem || _$4k9mixItem._elem || $$elem, _$4k9mods = _$4k9mixItem.mods || $$mods, _$4k9elemMods = _$4k9mixItem.elemMods || {};
                            _$4k9hasItem && _$4k9buf.push(' ');
                            _$4k9BEM_.INTERNAL[_$4k9hasItem ? 'buildClasses' : 'buildModsClasses'](_$4k9block, _$4k9mixItem.elem || _$4k9mixItem._elem || (_$4k9mixItem.block ? undefined : $$elem), _$4k9mixItem.elemMods || _$4k9mixItem.mods, _$4k9buf);
                            if (_$4k9mixItem.js) {
                                (_$4k9jsParams || (_$4k9jsParams = {}))[_$4k9BEM_.INTERNAL.buildClass(_$4k9block, _$4k9mixItem.elem)] = _$4k9mixItem.js === true ? {} : _$4k9mixItem.js;
                                _$4k9addJSInitClass || (_$4k9addJSInitClass = _$4k9block && !_$4k9mixItem.elem);
                            } else {
                                undefined;
                            }
                            if (_$4k9hasItem && !_$4k9visited[_$4k9visitedKey(_$4k9block, _$4k9elem)]) {
                                _$4k9visited[_$4k9visitedKey(_$4k9block, _$4k9elem)] = true;
                                var _$4k9nestedMix = ('', __r12 = $$block, $$block = _$4k9block, __r13 = $$elem, $$elem = _$4k9elem, __r14 = $$mods, $$mods = _$4k9mods, __r15 = $$elemMods, $$elemMods = _$4k9elemMods, __r16 = $$mode, $$mode = 'mix', __r17 = $1(__$ctx), $$block = __r12, $$elem = __r13, $$mods = __r14, $$elemMods = __r15, $$mode = __r16, '', __r17);
                                if (_$4k9nestedMix) {
                                    for (var _$4k9j = 0; _$4k9j < _$4k9nestedMix.length; _$4k9j++) {
                                        var _$4k9nestedItem = _$4k9nestedMix[_$4k9j];
                                        if (!_$4k9nestedItem.block && !_$4k9nestedItem.elem || !_$4k9visited[_$4k9visitedKey(_$4k9nestedItem.block, _$4k9nestedItem.elem)]) {
                                            _$4k9nestedItem._block = _$4k9block;
                                            _$4k9nestedItem._elem = _$4k9elem;
                                            _$4k9mix.splice(_$4k9i + 1, 0, _$4k9nestedItem);
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
                _$4k9cls && _$4k9buf.push(_$4k9isBEM ? ' ' : '', _$4k9cls);
                _$4k9addJSInitClass && _$4k9buf.push(' i-bem');
                _$4k9buf.push('"');
            } else {
                undefined;
            }
            if (_$4k9jsParams) {
                var _$4k9jsAttr = ('', __r20 = $$mode, $$mode = 'jsAttr', __r21 = $1(__$ctx), $$mode = __r20, '', __r21);
                _$4k9buf.push(' ', _$4k9jsAttr || 'data-bem', '="', __$ctx._.attrEscape(JSON.stringify(_$4k9jsParams)), '"');
            } else {
                undefined;
            }
            var _$4k9attrs = ('', __r22 = $$mode, $$mode = 'attrs', __r23 = $1(__$ctx), $$mode = __r22, '', __r23);
            _$4k9attrs = __$ctx._.extend(_$4k9attrs, _$4k9v.attrs);
            if (_$4k9attrs) {
                var _$4k9name;
                for (_$4k9name in _$4k9attrs) {
                    if (_$4k9attrs[_$4k9name] === undefined) {
                        continue;
                    } else {
                        undefined;
                    }
                    _$4k9buf.push(' ', _$4k9name, '="', __$ctx._.attrEscape(_$4k9attrs[_$4k9name]), '"');
                }
            } else {
                undefined;
            }
        } else {
            undefined;
        }
        if (__$ctx._.isShortTag(_$4k9tag)) {
            _$4k9buf.push('/>');
        } else {
            _$4k9tag && _$4k9buf.push('>');
            var _$4k9content = ('', __r24 = $$mode, $$mode = 'content', __r25 = $1(__$ctx), $$mode = __r24, '', __r25);
            if (_$4k9content || _$4k9content === 0) {
                var _$4k9isBEM = $$block || $$elem;
                {
                    '';
                    var __r26 = __$ctx._notNewList;
                    __$ctx._notNewList = false;
                    var __r27 = __$ctx.position;
                    __$ctx.position = _$4k9isBEM ? 1 : __$ctx.position;
                    var __r28 = __$ctx._listLength;
                    __$ctx._listLength = _$4k9isBEM ? 1 : __$ctx._listLength;
                    var __r29 = __$ctx.ctx;
                    __$ctx.ctx = _$4k9content;
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
            _$4k9tag && _$4k9buf.push('</', _$4k9tag, '>');
        }
        return;
    }
    function $153(__$ctx) {
        var _$4k6v = __$ctx.ctx, _$4k6l = _$4k6v.length, _$4k6i = 0, _$4k6prevPos = __$ctx.position, _$4k6prevNotNewList = __$ctx._notNewList;
        if (_$4k6prevNotNewList) {
            __$ctx._listLength += _$4k6l - 1;
        } else {
            __$ctx.position = 0;
            __$ctx._listLength = _$4k6l;
        }
        __$ctx._notNewList = true;
        while (_$4k6i < _$4k6l) {
            var _$4k6newCtx = _$4k6v[_$4k6i++];
            {
                '';
                var __r0 = __$ctx.ctx;
                __$ctx.ctx = _$4k6newCtx == null ? '' : _$4k6newCtx;
                $1(__$ctx);
                __$ctx.ctx = __r0;
                '';
            }
            undefined;
        }
        _$4k6prevNotNewList || (__$ctx.position = _$4k6prevPos);
        return;
    }
    function $156(__$ctx) {
        var _$4k5vBlock = __$ctx.ctx.block, _$4k5vElem = __$ctx.ctx.elem, _$4k5block = __$ctx._currBlock || $$block;
        __$ctx.ctx || (__$ctx.ctx = {});
        {
            '';
            var __r0 = $$mode;
            $$mode = 'default';
            var __r1 = __$ctx._links;
            __$ctx._links = __$ctx.ctx.links || __$ctx._links;
            var __r2 = $$block;
            $$block = _$4k5vBlock || (_$4k5vElem ? _$4k5block : undefined);
            var __r3 = __$ctx._currBlock;
            __$ctx._currBlock = _$4k5vBlock || _$4k5vElem ? undefined : _$4k5block;
            var __r4 = $$elem;
            $$elem = __$ctx.ctx.elem;
            var __r5 = $$mods;
            $$mods = (_$4k5vBlock ? __$ctx.ctx.mods : $$mods) || {};
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
/*borschik:include:../../../../common.blocks/input/__hint/input__hint.js*/;


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
