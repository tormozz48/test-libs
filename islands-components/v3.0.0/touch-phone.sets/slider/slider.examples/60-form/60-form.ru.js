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
                        return $295(__$ctx);
                    }
                } else if (__t === 'ahead') {
                    return [
                        { elem: 'ahead-filler' },
                        { elem: 'ahead-hint' }
                    ];
                    return;
                } else {
                    return $295(__$ctx);
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
                        return $295(__$ctx);
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
                    return $295(__$ctx);
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
                            return $295(__$ctx);
                        }
                    } else {
                        return $295(__$ctx);
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
                    return $295(__$ctx);
                }
            } else {
                return $295(__$ctx);
            }
        } else if (__t === 'slider') {
            var __t = $$mode;
            if (__t === 'mix') {
                if ($$elem === 'body') {
                    return $94(__$ctx);
                } else {
                    return $295(__$ctx);
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
                    return $295(__$ctx);
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
                        return $295(__$ctx);
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
                    return $295(__$ctx);
                }
            } else if (__t === 'default') {
                return $131(__$ctx);
            } else {
                return $295(__$ctx);
            }
        } else if (__t === 'select') {
            var __t = $$mode;
            if (__t === 'default') {
                return $148(__$ctx);
            } else if (__t === 'attrs') {
                var __t = $$elem;
                if (__t === 'group') {
                    return {
                        role: 'group',
                        'aria-labelledby': __$ctx._labelId
                    };
                    return;
                } else if (__t === 'control') {
                    var _$639attrs = [
                            'id',
                            'name',
                            'tabindex'
                        ], _$639prop = {}, _$639p;
                    while (_$639p = _$639attrs.pop()) {
                        __$ctx._controlAttrs[_$639p] && (_$639prop[_$639p] = __$ctx._controlAttrs[_$639p]);
                    }
                    $$mods.disabled === 'yes' && (_$639prop.disabled = 'disabled');
                    _$639prop.tabindex = -1;
                    _$639prop['aria-hidden'] = true;
                    return __$ctx.ctx.controlAttrs || _$639prop;
                    return;
                } else if (__t === 'item') {
                    return $167(__$ctx);
                } else {
                    return $295(__$ctx);
                }
            } else if (__t === 'tag') {
                var __t = $$elem;
                if (__t === 'control') {
                    return 'select';
                    return;
                } else if (__t === 'text') {
                    return 'span';
                    return;
                } else if (__t === 'option-group') {
                    return 'optgroup';
                    return;
                } else if (__t === 'option') {
                    return 'option';
                    return;
                } else {
                    if (!!$$elem === false) {
                        return 'span';
                        return;
                    } else {
                        return $295(__$ctx);
                    }
                }
            } else if (__t === 'js') {
                if (!!$$elem === false) {
                    return true;
                    return;
                } else {
                    return $295(__$ctx);
                }
            } else {
                return $295(__$ctx);
            }
        } else if (__t === 'button') {
            var __t = $$mode;
            if (__t === 'mix') {
                if (!__$ctx._formSelect === false) {
                    if (!!$$elem === false) {
                        return [{
                                block: __$ctx._formSelect.block,
                                elem: 'button'
                            }];
                        return;
                    } else {
                        return $295(__$ctx);
                    }
                } else {
                    return $295(__$ctx);
                }
            } else if (__t === 'default') {
                return $204(__$ctx);
            } else if (__t === 'attrs') {
                return $221(__$ctx);
            } else if (__t === 'content') {
                if (!!$$elem === false) {
                    return {
                        elem: 'text',
                        tag: 'span',
                        content: __$ctx.ctx.content
                    };
                    return;
                } else {
                    return $295(__$ctx);
                }
            } else if (__t === 'js') {
                if (!!$$elem === false) {
                    return true;
                    return;
                } else {
                    return $295(__$ctx);
                }
            } else if (__t === 'tag') {
                if (!__$ctx.ctx.url === false) {
                    if (!!$$elem === false) {
                        return 'a';
                        return;
                    } else {
                        return $269(__$ctx);
                    }
                } else {
                    return $269(__$ctx);
                }
            } else {
                return $295(__$ctx);
            }
        } else if (__t === 'popup') {
            var __t = $$mode;
            if (__t === 'content') {
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
                    return $290(__$ctx);
                }
            } else if (__t === 'default') {
                return $282(__$ctx);
            } else {
                return $290(__$ctx);
            }
        } else {
            return $295(__$ctx);
        }
    }
    function $30(__$ctx) {
        if (!(__$ctx['__$anflg816'] !== true) === false) {
            var __r0, __r1;
            var _$640ctx = __$ctx.ctx, _$640a = __$ctx._.extend(('', __r0 = __$ctx['__$anflg816'], __$ctx['__$anflg816'] = true, __r1 = $30(__$ctx), __$ctx['__$anflg816'] = __r0, '', __r1), {
                    autocomplete: _$640ctx.autocomplete || 'off',
                    autocorrect: _$640ctx.autocorrect || 'off',
                    autocapitalize: _$640ctx.autocapitalize || 'off',
                    spellcheck: _$640ctx.spellcheck || 'false'
                });
            return _$640a;
            return;
        } else {
            var _$63ya = __$ctx._.extend({
                    id: __$ctx._inputId,
                    name: __$ctx._name
                }, __$ctx.ctx.controlAttrs);
            (__$ctx._value || __$ctx._value === 0) && (_$63ya.value = __$ctx._value);
            $$mods.disabled && (_$63ya.disabled = 'disabled');
            _$63ya['aria-labelledby'] = __$ctx._labelId + ' ' + __$ctx._hintId;
            return _$63ya;
            return;
        }
    }
    function $37(__$ctx) {
        if ($$elem === 'control') {
            if (!(__$ctx['__$anflg815'] !== true) === false) {
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
            var __r0 = __$ctx['__$anflg815'];
            __$ctx['__$anflg815'] = true;
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
                $312(__$ctx);
                __$ctx.ctx = __r1;
                $$mode = __r2;
                '';
            }
            __$ctx['__$anflg815'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $46(__$ctx) {
        if (!(__$ctx['__$anflg814'] !== true) === false) {
            if (!!$$elem === false) {
                return $49(__$ctx);
            } else {
                return $295(__$ctx);
            }
        } else {
            return $295(__$ctx);
        }
    }
    function $49(__$ctx) {
        var __r0, __r1, __r2;
        var _$63pvalue = ('', __r0 = $$mode, $$mode = 'value', __r1 = __$ctx.ctx, __$ctx.ctx = __$ctx.ctx.value, __r2 = $65(__$ctx), $$mode = __r0, __$ctx.ctx = __r1, '', __r2), _$63pid = __$ctx.ctx.id || __$ctx.generateId(), _$63pmods = __$ctx.ctx.mods || {};
        _$63pmods.theme = _$63pmods.theme || 'normal';
        {
            '';
            var __r3 = __$ctx['__$anflg814'];
            __$ctx['__$anflg814'] = true;
            {
                '';
                var __r4 = __$ctx._inputId;
                __$ctx._inputId = _$63pid;
                var __r5 = __$ctx._labelId;
                __$ctx._labelId = 'label' + _$63pid;
                var __r6 = __$ctx._hintId;
                __$ctx._hintId = 'hint' + _$63pid;
                var __r7 = __$ctx._name;
                __$ctx._name = __$ctx.ctx.name || '';
                var __r8 = __$ctx._value;
                __$ctx._value = _$63pvalue;
                var __r9 = __$ctx._inputLink;
                __$ctx._inputLink = true;
                var __r10 = __$ctx._disabled;
                __$ctx._disabled = $$mods.disabled;
                var __r11 = __$ctx.ctx, __r12 = __r11.mods;
                __r11.mods = _$63pmods;
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
            __$ctx['__$anflg814'] = __r3;
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
                var _$63rvalue = [];
                {
                    '';
                    var __r0 = __$ctx._buf;
                    __$ctx._buf = _$63rvalue;
                    var __r1 = $$mode;
                    $$mode = '';
                    $313(__$ctx);
                    __$ctx._buf = __r0;
                    $$mode = __r1;
                    '';
                }
                undefined;
                return _$63rvalue.join('');
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
                return $295(__$ctx);
            }
        } else {
            return $295(__$ctx);
        }
    }
    function $94(__$ctx) {
        if (!(__$ctx['__$anflg813'] !== true) === false) {
            if (!$$mods.orientation === false) {
                if (!!__$ctx.ctx._wOrigin === false) {
                    return $98(__$ctx);
                } else {
                    return $295(__$ctx);
                }
            } else {
                return $295(__$ctx);
            }
        } else {
            return $295(__$ctx);
        }
    }
    function $98(__$ctx) {
        var __r0, __r4, __r1, __r2, __r3;
        var _$63mm = ('', __r0 = __$ctx['__$anflg813'], __$ctx['__$anflg813'] = true, __r4 = ('', __r1 = __$ctx.ctx, __r2 = __r1._wOrigin, __r1._wOrigin = true, __r3 = $94(__$ctx), __r1._wOrigin = __r2, '', __r3), __$ctx['__$anflg813'] = __r0, '', __r4) || [];
        _$63mm.push({ elemMods: { origin: $$mods.orientation === 'vert' ? 'y' : 'x' } });
        return _$63mm;
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
        if (!(__$ctx['__$anflg812'] !== true) === false) {
            if (!!$$elem === false) {
                var _$63cid = __$ctx.generateId();
                {
                    '';
                    var __r0 = __$ctx['__$anflg812'];
                    __$ctx['__$anflg812'] = true;
                    {
                        '';
                        var __r1 = __$ctx._inSlider;
                        __$ctx._inSlider = true;
                        var __r2 = __$ctx._titleId;
                        __$ctx._titleId = 'title' + _$63cid;
                        $131(__$ctx);
                        __$ctx._inSlider = __r1;
                        __$ctx._titleId = __r2;
                        '';
                    }
                    __$ctx['__$anflg812'] = __r0;
                    '';
                }
                return;
            } else {
                return $295(__$ctx);
            }
        } else {
            return $295(__$ctx);
        }
    }
    function $148(__$ctx) {
        if ($$elem === 'group') {
            return $149(__$ctx);
        } else {
            return $154(__$ctx);
        }
    }
    function $149(__$ctx) {
        if (!(__$ctx['__$anflg811'] !== true) === false) {
            {
                '';
                var __r0 = __$ctx['__$anflg811'];
                __$ctx['__$anflg811'] = true;
                {
                    '';
                    var __r1 = __$ctx._labelId;
                    __$ctx._labelId = __$ctx.generateId();
                    $149(__$ctx);
                    __$ctx._labelId = __r1;
                    '';
                }
                __$ctx['__$anflg811'] = __r0;
                '';
            }
            undefined;
            return;
        } else {
            return $154(__$ctx);
        }
    }
    function $154(__$ctx) {
        if (!(__$ctx['__$anflg808'] !== true) === false) {
            if (!!$$elem === false) {
                return $157(__$ctx);
            } else {
                return $295(__$ctx);
            }
        } else {
            return $295(__$ctx);
        }
    }
    function $157(__$ctx) {
        var _$62xctx = __$ctx.ctx, _$62xid = _$62xctx.id || __$ctx.generateId();
        {
            '';
            var __r0 = __$ctx['__$anflg808'];
            __$ctx['__$anflg808'] = true;
            {
                '';
                var __r1 = __$ctx._controlAttrs;
                __$ctx._controlAttrs = {
                    id: _$62xid,
                    name: _$62xctx.name || _$62xid,
                    tabindex: _$62xctx.tabindex
                };
                var __r2 = __$ctx._formSelect;
                __$ctx._formSelect = {
                    block: $$block,
                    mods: $$mods,
                    tabindex: _$62xctx.tabindex
                };
                $148(__$ctx);
                __$ctx._controlAttrs = __r1;
                __$ctx._formSelect = __r2;
                '';
            }
            __$ctx['__$anflg808'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $167(__$ctx) {
        if (!(__$ctx['__$anflg809'] !== true) === false) {
            var __r0, __r1;
            var _$634a = ('', __r0 = __$ctx['__$anflg809'], __$ctx['__$anflg809'] = true, __r1 = $167(__$ctx), __$ctx['__$anflg809'] = __r0, '', __r1) || {};
            if ((__$ctx.ctx.elemMods || {}).label === 'yes') {
                _$634a.id = __$ctx._labelId;
                _$634a['aria-hidden'] = true;
            } else {
                undefined;
            }
            return _$634a;
            return;
        } else {
            return { id: __$ctx.generateId() };
            return;
        }
    }
    function $204(__$ctx) {
        if (!(__$ctx['__$anflg810'] !== true) === false) {
            if (!__$ctx._formSelect === false) {
                if (!!$$elem === false) {
                    return $208(__$ctx);
                } else {
                    return $213(__$ctx);
                }
            } else {
                return $213(__$ctx);
            }
        } else {
            return $213(__$ctx);
        }
    }
    function $208(__$ctx) {
        var _$636ctx = __$ctx.ctx, _$636selectMods = __$ctx._formSelect.mods, _$636tabindex = __$ctx._formSelect.tabindex, _$636m = _$636ctx.mods || {};
        _$636m.arrow = 'down';
        _$636selectMods.theme && (_$636m.theme = _$636selectMods.theme);
        _$636selectMods.size && (_$636m.size = _$636selectMods.size);
        _$636selectMods.disabled === 'yes' && (_$636m.disabled = 'yes');
        _$636ctx.mods = _$636m;
        _$636tabindex && (_$636ctx.tabindex = _$636tabindex);
        {
            '';
            var __r0 = __$ctx['__$anflg810'];
            __$ctx['__$anflg810'] = true;
            {
                '';
                var __r1 = __$ctx.ctx, __r2 = __r1._theme;
                __r1._theme = true;
                $204(__$ctx);
                __r1._theme = __r2;
                '';
            }
            __$ctx['__$anflg810'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $213(__$ctx) {
        if (!(__$ctx['__$anflg805'] !== true) === false) {
            if (!!$$elem === false) {
                var _$62smods = __$ctx.ctx.mods || {};
                _$62smods.theme = _$62smods.theme || 'normal';
                {
                    '';
                    var __r0 = __$ctx['__$anflg805'];
                    __$ctx['__$anflg805'] = true;
                    {
                        '';
                        var __r1 = __$ctx.ctx, __r2 = __r1.mods;
                        __r1.mods = _$62smods;
                        $204(__$ctx);
                        __r1.mods = __r2;
                        '';
                    }
                    __$ctx['__$anflg805'] = __r0;
                    '';
                }
                undefined;
                return;
            } else {
                return $295(__$ctx);
            }
        } else {
            return $295(__$ctx);
        }
    }
    function $221(__$ctx) {
        if (!__$ctx._formSelect === false) {
            if (!!$$elem === false) {
                return {
                    role: 'listbox',
                    type: 'button',
                    'aria-haspopup': true,
                    'aria-expanded': false
                };
                return;
            } else {
                return $227(__$ctx);
            }
        } else {
            return $227(__$ctx);
        }
    }
    function $227(__$ctx) {
        if (!(__$ctx['__$anflg807'] !== true) === false) {
            if (!__$ctx.ctx.url === false) {
                if (!!$$elem === false) {
                    var __r0, __r1;
                    var _$62vctx = __$ctx.ctx, _$62vp = ('', __r0 = __$ctx['__$anflg807'], __$ctx['__$anflg807'] = true, __r1 = $221(__$ctx), __$ctx['__$anflg807'] = __r0, '', __r1), _$62va = { href: _$62vctx.url };
                    _$62vctx.target && (_$62va.target = _$62vctx.target);
                    $$mods.disabled && (_$62va['aria-disabled'] = true);
                    return __$ctx._.extend(_$62vp, _$62va);
                    return;
                } else {
                    return $236(__$ctx);
                }
            } else {
                return $236(__$ctx);
            }
        } else {
            return $236(__$ctx);
        }
    }
    function $236(__$ctx) {
        if (!(__$ctx['__$anflg806'] !== true) === false) {
            if (!!$$elem === false) {
                if (!!__$ctx.ctx.url === false) {
                    return $240(__$ctx);
                } else {
                    return $245(__$ctx);
                }
            } else {
                return $245(__$ctx);
            }
        } else {
            return $245(__$ctx);
        }
    }
    function $240(__$ctx) {
        var __r0, __r1;
        var _$62uctx = __$ctx.ctx, _$62up = ('', __r0 = __$ctx['__$anflg806'], __$ctx['__$anflg806'] = true, __r1 = $221(__$ctx), __$ctx['__$anflg806'] = __r0, '', __r1), _$62ua = { type: _$62uctx.type || 'button' }, _$62uprops = [
                'name',
                'value'
            ], _$62ui;
        while (_$62ui = _$62uprops.shift()) {
            _$62uctx[_$62ui] && (_$62ua[_$62ui] = _$62uctx[_$62ui]);
        }
        $$mods.disabled && (_$62ua.disabled = 'disabled');
        return __$ctx._.extend(_$62up, _$62ua);
        return;
    }
    function $245(__$ctx) {
        if (!true === false) {
            if (!!$$elem === false) {
                var _$62tctx = __$ctx.ctx, _$62ta = { role: 'button' };
                _$62tctx.tabindex && (_$62ta.tabindex = _$62tctx.tabindex);
                return _$62ta;
                return;
            } else {
                return $295(__$ctx);
            }
        } else {
            return $295(__$ctx);
        }
    }
    function $269(__$ctx) {
        if (!!$$elem === false) {
            return 'button';
            return;
        } else {
            return $295(__$ctx);
        }
    }
    function $282(__$ctx) {
        if (!!__$ctx._popupDefaults === false) {
            if (!!$$elem === false) {
                return $285(__$ctx);
            } else {
                return $290(__$ctx);
            }
        } else {
            return $290(__$ctx);
        }
    }
    function $285(__$ctx) {
        var _$62nctx = __$ctx.ctx;
        _$62nctx.mods = $$mods = __$ctx.extend({
            theme: 'ffffff',
            autoclosable: 'yes',
            adaptive: 'yes',
            animate: 'yes'
        }, $$mods);
        if (_$62nctx.zIndex) {
            var _$62nattrs = _$62nctx.attrs || (_$62nctx.attrs = {});
            _$62nattrs.style = (_$62nattrs.style || '') + ';z-index:' + _$62nctx.zIndex + ';';
        } else {
            undefined;
        }
        {
            '';
            var __r0 = __$ctx._popupDefaults;
            __$ctx._popupDefaults = true;
            $282(__$ctx);
            __$ctx._popupDefaults = __r0;
            '';
        }
        undefined;
        return;
    }
    function $290(__$ctx) {
        if (!($$mode === '' && __$ctx._popupDefaults) === false) {
            delete __$ctx._popupDefaults;
            applyc(__$ctx);
            undefined;
            return;
        } else {
            return $295(__$ctx);
        }
    }
    function $295(__$ctx) {
        var __t = $$mode;
        if (__t === 'content') {
            return __$ctx.ctx.content;
            return;
        } else if (__t === 'mix' || __t === 'bem' || __t === 'jsAttr' || __t === 'js' || __t === 'cls' || __t === 'attrs' || __t === 'tag') {
            return undefined;
            return;
        } else {
            return $312(__$ctx);
        }
    }
    function $312(__$ctx) {
        if (!__$ctx.ctx === false) {
            return $313(__$ctx);
        } else {
            return $321(__$ctx);
        }
    }
    function $313(__$ctx) {
        if (!__$ctx.ctx.link === false) {
            if (!!__$ctx._.isSimple(__$ctx.ctx) === false) {
                return $316(__$ctx);
            } else {
                return $321(__$ctx);
            }
        } else {
            return $321(__$ctx);
        }
    }
    function $316(__$ctx) {
        var __r0, __r1;
        function _$62dfollow() {
            if (this.ctx.link === 'no-follow') {
                return undefined;
            } else {
                undefined;
            }
            var data = this._links[this.ctx.link];
            return '', __r0 = this.ctx, this.ctx = data, __r1 = $1(__$ctx), this.ctx = __r0, '', __r1;
        }
        if (!cache || !__$ctx._cacheLog) {
            return _$62dfollow.call(__$ctx);
        } else {
            undefined;
        }
        var _$62dcontents = __$ctx._buf.slice(__$ctx._cachePos).join('');
        __$ctx._cachePos = __$ctx._buf.length;
        __$ctx._cacheLog.push(_$62dcontents, {
            log: __$ctx._localLog.slice(),
            link: __$ctx.ctx.link
        });
        var _$62dres = _$62dfollow.call(__$ctx);
        __$ctx._cachePos = __$ctx._buf.length;
        return _$62dres;
        return;
    }
    function $321(__$ctx) {
        if (!cache === false) {
            if (!__$ctx.ctx === false) {
                if (!__$ctx.ctx.cache === false) {
                    return $325(__$ctx);
                } else {
                    return $330(__$ctx);
                }
            } else {
                return $330(__$ctx);
            }
        } else {
            return $330(__$ctx);
        }
    }
    function $325(__$ctx) {
        var _$62ccached;
        function _$62csetProperty(obj, key, value) {
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
        if (_$62ccached = cache.get(__$ctx.ctx.cache)) {
            var _$62coldLinks = __$ctx._links;
            if (__$ctx.ctx.links) {
                __$ctx._links = __$ctx.ctx.links;
            } else {
                undefined;
            }
            for (var _$62ci = 0; _$62ci < _$62ccached.log.length; _$62ci++) {
                if (typeof _$62ccached.log[_$62ci] === 'string') {
                    __$ctx._buf.push(_$62ccached.log[_$62ci]);
                    continue;
                } else {
                    undefined;
                }
                var _$62clog = _$62ccached.log[_$62ci], _$62creverseLog;
                _$62creverseLog = _$62clog.log.map(function (entry) {
                    return {
                        key: entry[0],
                        value: _$62csetProperty(this, entry[0], entry[1])
                    };
                }, __$ctx).reverse();
                {
                    '';
                    var __r0 = __$ctx.ctx, __r1 = __r0.cache;
                    __r0.cache = null;
                    var __r2 = __$ctx._cacheLog;
                    __$ctx._cacheLog = null;
                    var __r3 = __$ctx.ctx, __r4 = __r3.link;
                    __r3.link = _$62clog.link;
                    $1(__$ctx);
                    __r0.cache = __r1;
                    __$ctx._cacheLog = __r2;
                    __r3.link = __r4;
                    '';
                }
                undefined;
                _$62creverseLog.forEach(function (entry) {
                    _$62csetProperty(this, entry.key, entry.value);
                }, __$ctx);
            }
            __$ctx._links = _$62coldLinks;
            return _$62ccached.res;
        } else {
            undefined;
        }
        var _$62ccacheLog = [], _$62cres;
        {
            '';
            var __r5 = __$ctx.ctx, __r6 = __r5.cache;
            __r5.cache = null;
            var __r7 = __$ctx._cachePos;
            __$ctx._cachePos = __$ctx._buf.length;
            var __r8 = __$ctx._cacheLog;
            __$ctx._cacheLog = _$62ccacheLog;
            var __r9 = __$ctx._localLog;
            __$ctx._localLog = [];
            {
                _$62cres = $1(__$ctx);
                var _$62ctail = __$ctx._buf.slice(__$ctx._cachePos).join('');
                if (_$62ctail) {
                    _$62ccacheLog.push(_$62ctail);
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
            log: _$62ccacheLog,
            res: _$62cres
        });
        return _$62cres;
        return;
    }
    function $330(__$ctx) {
        var __t = $$mode;
        if (__t === 'default') {
            return $332(__$ctx);
        } else if (__t === '') {
            if (!__$ctx._.isSimple(__$ctx.ctx) === false) {
                __$ctx._listLength--;
                var _$62actx = __$ctx.ctx;
                (_$62actx && _$62actx !== true || _$62actx === 0) && __$ctx._buf.push(_$62actx);
                return;
            } else {
                if (!!__$ctx.ctx === false) {
                    __$ctx._listLength--;
                    return;
                } else {
                    if (!__$ctx._.isArray(__$ctx.ctx) === false) {
                        return $341(__$ctx);
                    } else {
                        if (!true === false) {
                            return $344(__$ctx);
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
    function $332(__$ctx) {
        var __r13, __r0, __r4, __r5, __r6, __r7, __r8, __r9, __r10, __r11, __r12, __r1, __r14, __r15, __r16, __r17, __r20, __r21, __r22, __r23, __r24, __r25;
        var _$62bBEM_ = __$ctx.BEM, _$62bv = __$ctx.ctx, _$62bbuf = __$ctx._buf, _$62btag;
        _$62btag = ('', __r0 = $$mode, $$mode = 'tag', __r1 = $1(__$ctx), $$mode = __r0, '', __r1);
        typeof _$62btag != 'undefined' || (_$62btag = _$62bv.tag);
        typeof _$62btag != 'undefined' || (_$62btag = 'div');
        if (_$62btag) {
            var _$62bjsParams, _$62bjs;
            if ($$block && _$62bv.js !== false) {
                _$62bjs = ('', __r4 = $$mode, $$mode = 'js', __r5 = $1(__$ctx), $$mode = __r4, '', __r5);
                _$62bjs = _$62bjs ? __$ctx._.extend(_$62bv.js, _$62bjs === true ? {} : _$62bjs) : _$62bv.js === true ? {} : _$62bv.js;
                _$62bjs && ((_$62bjsParams = {})[_$62bBEM_.INTERNAL.buildClass($$block, _$62bv.elem)] = _$62bjs);
            } else {
                undefined;
            }
            _$62bbuf.push('<', _$62btag);
            var _$62bisBEM = ('', __r6 = $$mode, $$mode = 'bem', __r7 = $1(__$ctx), $$mode = __r6, '', __r7);
            typeof _$62bisBEM != 'undefined' || (_$62bisBEM = typeof _$62bv.bem != 'undefined' ? _$62bv.bem : _$62bv.block || _$62bv.elem);
            var _$62bcls = ('', __r8 = $$mode, $$mode = 'cls', __r9 = $1(__$ctx), $$mode = __r8, '', __r9);
            _$62bcls || (_$62bcls = _$62bv.cls);
            var _$62baddJSInitClass = _$62bv.block && _$62bjsParams;
            if (_$62bisBEM || _$62bcls) {
                _$62bbuf.push(' class="');
                if (_$62bisBEM) {
                    _$62bBEM_.INTERNAL.buildClasses($$block, _$62bv.elem, _$62bv.elemMods || _$62bv.mods, _$62bbuf);
                    var _$62bmix = ('', __r10 = $$mode, $$mode = 'mix', __r11 = $1(__$ctx), $$mode = __r10, '', __r11);
                    _$62bv.mix && (_$62bmix = _$62bmix ? _$62bmix.concat(_$62bv.mix) : _$62bv.mix);
                    if (_$62bmix) {
                        var _$62bvisited = {};
                        function _$62bvisitedKey(block, elem) {
                            return (block || '') + '__' + (elem || '');
                        }
                        _$62bvisited[_$62bvisitedKey($$block, $$elem)] = true;
                        if (!__$ctx._.isArray(_$62bmix)) {
                            _$62bmix = [_$62bmix];
                        } else {
                            undefined;
                        }
                        for (var _$62bi = 0; _$62bi < _$62bmix.length; _$62bi++) {
                            var _$62bmixItem = _$62bmix[_$62bi];
                            if (!_$62bmixItem) {
                                continue;
                            } else {
                                undefined;
                            }
                            var _$62bhasItem = _$62bmixItem.block || _$62bmixItem.elem, _$62bblock = _$62bmixItem.block || _$62bmixItem._block || $$block, _$62belem = _$62bmixItem.elem || _$62bmixItem._elem || $$elem, _$62bmods = _$62bmixItem.mods || $$mods, _$62belemMods = _$62bmixItem.elemMods || {};
                            _$62bhasItem && _$62bbuf.push(' ');
                            _$62bBEM_.INTERNAL[_$62bhasItem ? 'buildClasses' : 'buildModsClasses'](_$62bblock, _$62bmixItem.elem || _$62bmixItem._elem || (_$62bmixItem.block ? undefined : $$elem), _$62bmixItem.elemMods || _$62bmixItem.mods, _$62bbuf);
                            if (_$62bmixItem.js) {
                                (_$62bjsParams || (_$62bjsParams = {}))[_$62bBEM_.INTERNAL.buildClass(_$62bblock, _$62bmixItem.elem)] = _$62bmixItem.js === true ? {} : _$62bmixItem.js;
                                _$62baddJSInitClass || (_$62baddJSInitClass = _$62bblock && !_$62bmixItem.elem);
                            } else {
                                undefined;
                            }
                            if (_$62bhasItem && !_$62bvisited[_$62bvisitedKey(_$62bblock, _$62belem)]) {
                                _$62bvisited[_$62bvisitedKey(_$62bblock, _$62belem)] = true;
                                var _$62bnestedMix = ('', __r12 = $$block, $$block = _$62bblock, __r13 = $$elem, $$elem = _$62belem, __r14 = $$mods, $$mods = _$62bmods, __r15 = $$elemMods, $$elemMods = _$62belemMods, __r16 = $$mode, $$mode = 'mix', __r17 = $1(__$ctx), $$block = __r12, $$elem = __r13, $$mods = __r14, $$elemMods = __r15, $$mode = __r16, '', __r17);
                                if (_$62bnestedMix) {
                                    for (var _$62bj = 0; _$62bj < _$62bnestedMix.length; _$62bj++) {
                                        var _$62bnestedItem = _$62bnestedMix[_$62bj];
                                        if (!_$62bnestedItem.block && !_$62bnestedItem.elem || !_$62bvisited[_$62bvisitedKey(_$62bnestedItem.block, _$62bnestedItem.elem)]) {
                                            _$62bnestedItem._block = _$62bblock;
                                            _$62bnestedItem._elem = _$62belem;
                                            _$62bmix.splice(_$62bi + 1, 0, _$62bnestedItem);
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
                _$62bcls && _$62bbuf.push(_$62bisBEM ? ' ' : '', _$62bcls);
                _$62baddJSInitClass && _$62bbuf.push(' i-bem');
                _$62bbuf.push('"');
            } else {
                undefined;
            }
            if (_$62bjsParams) {
                var _$62bjsAttr = ('', __r20 = $$mode, $$mode = 'jsAttr', __r21 = $1(__$ctx), $$mode = __r20, '', __r21);
                _$62bbuf.push(' ', _$62bjsAttr || 'data-bem', '="', __$ctx._.attrEscape(JSON.stringify(_$62bjsParams)), '"');
            } else {
                undefined;
            }
            var _$62battrs = ('', __r22 = $$mode, $$mode = 'attrs', __r23 = $1(__$ctx), $$mode = __r22, '', __r23);
            _$62battrs = __$ctx._.extend(_$62battrs, _$62bv.attrs);
            if (_$62battrs) {
                var _$62bname;
                for (_$62bname in _$62battrs) {
                    if (_$62battrs[_$62bname] === undefined) {
                        continue;
                    } else {
                        undefined;
                    }
                    _$62bbuf.push(' ', _$62bname, '="', __$ctx._.attrEscape(_$62battrs[_$62bname]), '"');
                }
            } else {
                undefined;
            }
        } else {
            undefined;
        }
        if (__$ctx._.isShortTag(_$62btag)) {
            _$62bbuf.push('/>');
        } else {
            _$62btag && _$62bbuf.push('>');
            var _$62bcontent = ('', __r24 = $$mode, $$mode = 'content', __r25 = $1(__$ctx), $$mode = __r24, '', __r25);
            if (_$62bcontent || _$62bcontent === 0) {
                var _$62bisBEM = $$block || $$elem;
                {
                    '';
                    var __r26 = __$ctx._notNewList;
                    __$ctx._notNewList = false;
                    var __r27 = __$ctx.position;
                    __$ctx.position = _$62bisBEM ? 1 : __$ctx.position;
                    var __r28 = __$ctx._listLength;
                    __$ctx._listLength = _$62bisBEM ? 1 : __$ctx._listLength;
                    var __r29 = __$ctx.ctx;
                    __$ctx.ctx = _$62bcontent;
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
            _$62btag && _$62bbuf.push('</', _$62btag, '>');
        }
        return;
    }
    function $341(__$ctx) {
        var _$628v = __$ctx.ctx, _$628l = _$628v.length, _$628i = 0, _$628prevPos = __$ctx.position, _$628prevNotNewList = __$ctx._notNewList;
        if (_$628prevNotNewList) {
            __$ctx._listLength += _$628l - 1;
        } else {
            __$ctx.position = 0;
            __$ctx._listLength = _$628l;
        }
        __$ctx._notNewList = true;
        while (_$628i < _$628l) {
            var _$628newCtx = _$628v[_$628i++];
            {
                '';
                var __r0 = __$ctx.ctx;
                __$ctx.ctx = _$628newCtx == null ? '' : _$628newCtx;
                $1(__$ctx);
                __$ctx.ctx = __r0;
                '';
            }
            undefined;
        }
        _$628prevNotNewList || (__$ctx.position = _$628prevPos);
        return;
    }
    function $344(__$ctx) {
        var _$627vBlock = __$ctx.ctx.block, _$627vElem = __$ctx.ctx.elem, _$627block = __$ctx._currBlock || $$block;
        __$ctx.ctx || (__$ctx.ctx = {});
        {
            '';
            var __r0 = $$mode;
            $$mode = 'default';
            var __r1 = __$ctx._links;
            __$ctx._links = __$ctx.ctx.links || __$ctx._links;
            var __r2 = $$block;
            $$block = _$627vBlock || (_$627vElem ? _$627block : undefined);
            var __r3 = __$ctx._currBlock;
            __$ctx._currBlock = _$627vBlock || _$627vElem ? undefined : _$627block;
            var __r4 = $$elem;
            $$elem = __$ctx.ctx.elem;
            var __r5 = $$mods;
            $$mods = (_$627vBlock ? __$ctx.ctx.mods : $$mods) || {};
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
/*borschik:include:../../../../common.blocks/button/button.js*/;
/*borschik:include:../../../../touch.blocks/button/button.js*/;
/*borschik:include:../../../../common.blocks/radiobox/radiobox.js*/;
/*borschik:include:../../../../common.blocks/radio-button/radio-button.js*/;
/*borschik:include:../../../../common.blocks/checkbox/checkbox.js*/;
/*borschik:include:../../../../common.blocks/check-button/check-button.js*/;
/*borschik:include:../../../../common.blocks/popup/popup.js*/;
/*borschik:include:../../../../common.blocks/popup/_autoclosable/popup_autoclosable_yes.js*/;
/*borschik:include:../../../../common.blocks/popup/_adaptive/popup_adaptive_yes.js*/;
/*borschik:include:../../../../common.blocks/popup/_animate/popup_animate_yes.js*/;
/*borschik:include:../../../../common.blocks/popup/__under/popup__under.js*/;
/*borschik:include:../../../../touch.blocks/popup/__under/popup__under.js*/;
/*borschik:include:../../../../common.blocks/popup/_autosize/popup_autosize_yes.js*/;
/*borschik:include:../../../../common.blocks/select/select.js*/;
/*borschik:include:../../../../common.blocks/select/__ui/select__ui.js*/;
/*borschik:include:../../../../touch.blocks/select/__ui/select__ui.js*/;
/*borschik:include:../../../../common.blocks/select/__popup/select__popup.js*/;
/*borschik:include:../../../../common.blocks/slider/slider.js*/;
/*borschik:include:../../../../common.blocks/slider/slider.examples/60-form.blocks/slider/slider.js*/;
/*borschik:include:../../../../common.blocks/slider/__ui/slider__ui.js*/;
/*borschik:include:../../../../common.blocks/slider/__math/slider__math.js*/;
/*borschik:include:../../../../common.blocks/slider/_orientation/slider_orientation_horiz.js*/;
/*borschik:include:../../../../common.blocks/input/input.js*/;
/*borschik:include:../../../../touch.blocks/input/input.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-system/i-system.js*/;
/*borschik:include:../../../../common.blocks/input/__clear/input__clear.js*/;
/*borschik:include:../../../../touch-phone.blocks/input/__clear/input__clear.js*/;
/*borschik:include:../../../../common.blocks/slider/_type/slider_type_range.js*/;
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


BEM.I18N.lang('ru');
