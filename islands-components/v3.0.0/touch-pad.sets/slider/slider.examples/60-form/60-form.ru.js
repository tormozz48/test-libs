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
            } else if (__t === 'attrs') {
                var __t = $$elem;
                if (__t === 'clear') {
                    return { unselectable: 'on' };
                    return;
                } else if (__t === 'control') {
                    return $16(__$ctx);
                } else {
                    return $295(__$ctx);
                }
            } else if (__t === 'tag') {
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
                        return $295(__$ctx);
                    }
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
                    var _$48lattrs = [
                            'id',
                            'name',
                            'tabindex'
                        ], _$48lprop = {}, _$48lp;
                    while (_$48lp = _$48lattrs.pop()) {
                        __$ctx._controlAttrs[_$48lp] && (_$48lprop[_$48lp] = __$ctx._controlAttrs[_$48lp]);
                    }
                    $$mods.disabled === 'yes' && (_$48lprop.disabled = 'disabled');
                    _$48lprop.tabindex = -1;
                    _$48lprop['aria-hidden'] = true;
                    return __$ctx.ctx.controlAttrs || _$48lprop;
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
    function $16(__$ctx) {
        if (!(__$ctx['__$anflg546'] !== true) === false) {
            var __r0, __r1;
            var _$49cctx = __$ctx.ctx, _$49ca = __$ctx._.extend(('', __r0 = __$ctx['__$anflg546'], __$ctx['__$anflg546'] = true, __r1 = $16(__$ctx), __$ctx['__$anflg546'] = __r0, '', __r1), {
                    autocomplete: _$49cctx.autocomplete || 'off',
                    autocorrect: _$49cctx.autocorrect || 'off',
                    autocapitalize: _$49cctx.autocapitalize || 'off',
                    spellcheck: _$49cctx.spellcheck || 'false'
                });
            return _$49ca;
            return;
        } else {
            var _$49aa = __$ctx._.extend({
                    id: __$ctx._inputId,
                    name: __$ctx._name
                }, __$ctx.ctx.controlAttrs);
            (__$ctx._value || __$ctx._value === 0) && (_$49aa.value = __$ctx._value);
            $$mods.disabled && (_$49aa.disabled = 'disabled');
            _$49aa['aria-labelledby'] = __$ctx._labelId + ' ' + __$ctx._hintId;
            return _$49aa;
            return;
        }
    }
    function $37(__$ctx) {
        if ($$elem === 'control') {
            if (!(__$ctx['__$anflg545'] !== true) === false) {
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
            var __r0 = __$ctx['__$anflg545'];
            __$ctx['__$anflg545'] = true;
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
            __$ctx['__$anflg545'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $46(__$ctx) {
        if (!(__$ctx['__$anflg544'] !== true) === false) {
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
        var _$491value = ('', __r0 = $$mode, $$mode = 'value', __r1 = __$ctx.ctx, __$ctx.ctx = __$ctx.ctx.value, __r2 = $65(__$ctx), $$mode = __r0, __$ctx.ctx = __r1, '', __r2), _$491id = __$ctx.ctx.id || __$ctx.generateId(), _$491mods = __$ctx.ctx.mods || {};
        _$491mods.theme = _$491mods.theme || 'normal';
        {
            '';
            var __r3 = __$ctx['__$anflg544'];
            __$ctx['__$anflg544'] = true;
            {
                '';
                var __r4 = __$ctx._inputId;
                __$ctx._inputId = _$491id;
                var __r5 = __$ctx._labelId;
                __$ctx._labelId = 'label' + _$491id;
                var __r6 = __$ctx._hintId;
                __$ctx._hintId = 'hint' + _$491id;
                var __r7 = __$ctx._name;
                __$ctx._name = __$ctx.ctx.name || '';
                var __r8 = __$ctx._value;
                __$ctx._value = _$491value;
                var __r9 = __$ctx._inputLink;
                __$ctx._inputLink = true;
                var __r10 = __$ctx._disabled;
                __$ctx._disabled = $$mods.disabled;
                var __r11 = __$ctx.ctx, __r12 = __r11.mods;
                __r11.mods = _$491mods;
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
            __$ctx['__$anflg544'] = __r3;
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
                var _$493value = [];
                {
                    '';
                    var __r0 = __$ctx._buf;
                    __$ctx._buf = _$493value;
                    var __r1 = $$mode;
                    $$mode = '';
                    $313(__$ctx);
                    __$ctx._buf = __r0;
                    $$mode = __r1;
                    '';
                }
                undefined;
                return _$493value.join('');
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
        if (!(__$ctx['__$anflg543'] !== true) === false) {
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
        var _$48ym = ('', __r0 = __$ctx['__$anflg543'], __$ctx['__$anflg543'] = true, __r4 = ('', __r1 = __$ctx.ctx, __r2 = __r1._wOrigin, __r1._wOrigin = true, __r3 = $94(__$ctx), __r1._wOrigin = __r2, '', __r3), __$ctx['__$anflg543'] = __r0, '', __r4) || [];
        _$48ym.push({ elemMods: { origin: $$mods.orientation === 'vert' ? 'y' : 'x' } });
        return _$48ym;
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
        if (!(__$ctx['__$anflg542'] !== true) === false) {
            if (!!$$elem === false) {
                var _$48oid = __$ctx.generateId();
                {
                    '';
                    var __r0 = __$ctx['__$anflg542'];
                    __$ctx['__$anflg542'] = true;
                    {
                        '';
                        var __r1 = __$ctx._inSlider;
                        __$ctx._inSlider = true;
                        var __r2 = __$ctx._titleId;
                        __$ctx._titleId = 'title' + _$48oid;
                        $131(__$ctx);
                        __$ctx._inSlider = __r1;
                        __$ctx._titleId = __r2;
                        '';
                    }
                    __$ctx['__$anflg542'] = __r0;
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
        if (!(__$ctx['__$anflg541'] !== true) === false) {
            {
                '';
                var __r0 = __$ctx['__$anflg541'];
                __$ctx['__$anflg541'] = true;
                {
                    '';
                    var __r1 = __$ctx._labelId;
                    __$ctx._labelId = __$ctx.generateId();
                    $149(__$ctx);
                    __$ctx._labelId = __r1;
                    '';
                }
                __$ctx['__$anflg541'] = __r0;
                '';
            }
            undefined;
            return;
        } else {
            return $154(__$ctx);
        }
    }
    function $154(__$ctx) {
        if (!(__$ctx['__$anflg538'] !== true) === false) {
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
        var _$489ctx = __$ctx.ctx, _$489id = _$489ctx.id || __$ctx.generateId();
        {
            '';
            var __r0 = __$ctx['__$anflg538'];
            __$ctx['__$anflg538'] = true;
            {
                '';
                var __r1 = __$ctx._controlAttrs;
                __$ctx._controlAttrs = {
                    id: _$489id,
                    name: _$489ctx.name || _$489id,
                    tabindex: _$489ctx.tabindex
                };
                var __r2 = __$ctx._formSelect;
                __$ctx._formSelect = {
                    block: $$block,
                    mods: $$mods,
                    tabindex: _$489ctx.tabindex
                };
                $148(__$ctx);
                __$ctx._controlAttrs = __r1;
                __$ctx._formSelect = __r2;
                '';
            }
            __$ctx['__$anflg538'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $167(__$ctx) {
        if (!(__$ctx['__$anflg539'] !== true) === false) {
            var __r0, __r1;
            var _$48ga = ('', __r0 = __$ctx['__$anflg539'], __$ctx['__$anflg539'] = true, __r1 = $167(__$ctx), __$ctx['__$anflg539'] = __r0, '', __r1) || {};
            if ((__$ctx.ctx.elemMods || {}).label === 'yes') {
                _$48ga.id = __$ctx._labelId;
                _$48ga['aria-hidden'] = true;
            } else {
                undefined;
            }
            return _$48ga;
            return;
        } else {
            return { id: __$ctx.generateId() };
            return;
        }
    }
    function $204(__$ctx) {
        if (!(__$ctx['__$anflg540'] !== true) === false) {
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
        var _$48ictx = __$ctx.ctx, _$48iselectMods = __$ctx._formSelect.mods, _$48itabindex = __$ctx._formSelect.tabindex, _$48im = _$48ictx.mods || {};
        _$48im.arrow = 'down';
        _$48iselectMods.theme && (_$48im.theme = _$48iselectMods.theme);
        _$48iselectMods.size && (_$48im.size = _$48iselectMods.size);
        _$48iselectMods.disabled === 'yes' && (_$48im.disabled = 'yes');
        _$48ictx.mods = _$48im;
        _$48itabindex && (_$48ictx.tabindex = _$48itabindex);
        {
            '';
            var __r0 = __$ctx['__$anflg540'];
            __$ctx['__$anflg540'] = true;
            {
                '';
                var __r1 = __$ctx.ctx, __r2 = __r1._theme;
                __r1._theme = true;
                $204(__$ctx);
                __r1._theme = __r2;
                '';
            }
            __$ctx['__$anflg540'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $213(__$ctx) {
        if (!(__$ctx['__$anflg535'] !== true) === false) {
            if (!!$$elem === false) {
                var _$484mods = __$ctx.ctx.mods || {};
                _$484mods.theme = _$484mods.theme || 'normal';
                {
                    '';
                    var __r0 = __$ctx['__$anflg535'];
                    __$ctx['__$anflg535'] = true;
                    {
                        '';
                        var __r1 = __$ctx.ctx, __r2 = __r1.mods;
                        __r1.mods = _$484mods;
                        $204(__$ctx);
                        __r1.mods = __r2;
                        '';
                    }
                    __$ctx['__$anflg535'] = __r0;
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
        if (!(__$ctx['__$anflg537'] !== true) === false) {
            if (!__$ctx.ctx.url === false) {
                if (!!$$elem === false) {
                    var __r0, __r1;
                    var _$487ctx = __$ctx.ctx, _$487p = ('', __r0 = __$ctx['__$anflg537'], __$ctx['__$anflg537'] = true, __r1 = $221(__$ctx), __$ctx['__$anflg537'] = __r0, '', __r1), _$487a = { href: _$487ctx.url };
                    _$487ctx.target && (_$487a.target = _$487ctx.target);
                    $$mods.disabled && (_$487a['aria-disabled'] = true);
                    return __$ctx._.extend(_$487p, _$487a);
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
        if (!(__$ctx['__$anflg536'] !== true) === false) {
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
        var _$486ctx = __$ctx.ctx, _$486p = ('', __r0 = __$ctx['__$anflg536'], __$ctx['__$anflg536'] = true, __r1 = $221(__$ctx), __$ctx['__$anflg536'] = __r0, '', __r1), _$486a = { type: _$486ctx.type || 'button' }, _$486props = [
                'name',
                'value'
            ], _$486i;
        while (_$486i = _$486props.shift()) {
            _$486ctx[_$486i] && (_$486a[_$486i] = _$486ctx[_$486i]);
        }
        $$mods.disabled && (_$486a.disabled = 'disabled');
        return __$ctx._.extend(_$486p, _$486a);
        return;
    }
    function $245(__$ctx) {
        if (!true === false) {
            if (!!$$elem === false) {
                var _$485ctx = __$ctx.ctx, _$485a = { role: 'button' };
                _$485ctx.tabindex && (_$485a.tabindex = _$485ctx.tabindex);
                return _$485a;
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
        var _$47zctx = __$ctx.ctx;
        _$47zctx.mods = $$mods = __$ctx.extend({
            theme: 'ffffff',
            autoclosable: 'yes',
            adaptive: 'yes',
            animate: 'yes'
        }, $$mods);
        if (_$47zctx.zIndex) {
            var _$47zattrs = _$47zctx.attrs || (_$47zctx.attrs = {});
            _$47zattrs.style = (_$47zattrs.style || '') + ';z-index:' + _$47zctx.zIndex + ';';
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
        function _$47pfollow() {
            if (this.ctx.link === 'no-follow') {
                return undefined;
            } else {
                undefined;
            }
            var data = this._links[this.ctx.link];
            return '', __r0 = this.ctx, this.ctx = data, __r1 = $1(__$ctx), this.ctx = __r0, '', __r1;
        }
        if (!cache || !__$ctx._cacheLog) {
            return _$47pfollow.call(__$ctx);
        } else {
            undefined;
        }
        var _$47pcontents = __$ctx._buf.slice(__$ctx._cachePos).join('');
        __$ctx._cachePos = __$ctx._buf.length;
        __$ctx._cacheLog.push(_$47pcontents, {
            log: __$ctx._localLog.slice(),
            link: __$ctx.ctx.link
        });
        var _$47pres = _$47pfollow.call(__$ctx);
        __$ctx._cachePos = __$ctx._buf.length;
        return _$47pres;
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
        var _$47ocached;
        function _$47osetProperty(obj, key, value) {
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
        if (_$47ocached = cache.get(__$ctx.ctx.cache)) {
            var _$47ooldLinks = __$ctx._links;
            if (__$ctx.ctx.links) {
                __$ctx._links = __$ctx.ctx.links;
            } else {
                undefined;
            }
            for (var _$47oi = 0; _$47oi < _$47ocached.log.length; _$47oi++) {
                if (typeof _$47ocached.log[_$47oi] === 'string') {
                    __$ctx._buf.push(_$47ocached.log[_$47oi]);
                    continue;
                } else {
                    undefined;
                }
                var _$47olog = _$47ocached.log[_$47oi], _$47oreverseLog;
                _$47oreverseLog = _$47olog.log.map(function (entry) {
                    return {
                        key: entry[0],
                        value: _$47osetProperty(this, entry[0], entry[1])
                    };
                }, __$ctx).reverse();
                {
                    '';
                    var __r0 = __$ctx.ctx, __r1 = __r0.cache;
                    __r0.cache = null;
                    var __r2 = __$ctx._cacheLog;
                    __$ctx._cacheLog = null;
                    var __r3 = __$ctx.ctx, __r4 = __r3.link;
                    __r3.link = _$47olog.link;
                    $1(__$ctx);
                    __r0.cache = __r1;
                    __$ctx._cacheLog = __r2;
                    __r3.link = __r4;
                    '';
                }
                undefined;
                _$47oreverseLog.forEach(function (entry) {
                    _$47osetProperty(this, entry.key, entry.value);
                }, __$ctx);
            }
            __$ctx._links = _$47ooldLinks;
            return _$47ocached.res;
        } else {
            undefined;
        }
        var _$47ocacheLog = [], _$47ores;
        {
            '';
            var __r5 = __$ctx.ctx, __r6 = __r5.cache;
            __r5.cache = null;
            var __r7 = __$ctx._cachePos;
            __$ctx._cachePos = __$ctx._buf.length;
            var __r8 = __$ctx._cacheLog;
            __$ctx._cacheLog = _$47ocacheLog;
            var __r9 = __$ctx._localLog;
            __$ctx._localLog = [];
            {
                _$47ores = $1(__$ctx);
                var _$47otail = __$ctx._buf.slice(__$ctx._cachePos).join('');
                if (_$47otail) {
                    _$47ocacheLog.push(_$47otail);
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
            log: _$47ocacheLog,
            res: _$47ores
        });
        return _$47ores;
        return;
    }
    function $330(__$ctx) {
        var __t = $$mode;
        if (__t === 'default') {
            return $332(__$ctx);
        } else if (__t === '') {
            if (!__$ctx._.isSimple(__$ctx.ctx) === false) {
                __$ctx._listLength--;
                var _$47mctx = __$ctx.ctx;
                (_$47mctx && _$47mctx !== true || _$47mctx === 0) && __$ctx._buf.push(_$47mctx);
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
        var _$47nBEM_ = __$ctx.BEM, _$47nv = __$ctx.ctx, _$47nbuf = __$ctx._buf, _$47ntag;
        _$47ntag = ('', __r0 = $$mode, $$mode = 'tag', __r1 = $1(__$ctx), $$mode = __r0, '', __r1);
        typeof _$47ntag != 'undefined' || (_$47ntag = _$47nv.tag);
        typeof _$47ntag != 'undefined' || (_$47ntag = 'div');
        if (_$47ntag) {
            var _$47njsParams, _$47njs;
            if ($$block && _$47nv.js !== false) {
                _$47njs = ('', __r4 = $$mode, $$mode = 'js', __r5 = $1(__$ctx), $$mode = __r4, '', __r5);
                _$47njs = _$47njs ? __$ctx._.extend(_$47nv.js, _$47njs === true ? {} : _$47njs) : _$47nv.js === true ? {} : _$47nv.js;
                _$47njs && ((_$47njsParams = {})[_$47nBEM_.INTERNAL.buildClass($$block, _$47nv.elem)] = _$47njs);
            } else {
                undefined;
            }
            _$47nbuf.push('<', _$47ntag);
            var _$47nisBEM = ('', __r6 = $$mode, $$mode = 'bem', __r7 = $1(__$ctx), $$mode = __r6, '', __r7);
            typeof _$47nisBEM != 'undefined' || (_$47nisBEM = typeof _$47nv.bem != 'undefined' ? _$47nv.bem : _$47nv.block || _$47nv.elem);
            var _$47ncls = ('', __r8 = $$mode, $$mode = 'cls', __r9 = $1(__$ctx), $$mode = __r8, '', __r9);
            _$47ncls || (_$47ncls = _$47nv.cls);
            var _$47naddJSInitClass = _$47nv.block && _$47njsParams;
            if (_$47nisBEM || _$47ncls) {
                _$47nbuf.push(' class="');
                if (_$47nisBEM) {
                    _$47nBEM_.INTERNAL.buildClasses($$block, _$47nv.elem, _$47nv.elemMods || _$47nv.mods, _$47nbuf);
                    var _$47nmix = ('', __r10 = $$mode, $$mode = 'mix', __r11 = $1(__$ctx), $$mode = __r10, '', __r11);
                    _$47nv.mix && (_$47nmix = _$47nmix ? _$47nmix.concat(_$47nv.mix) : _$47nv.mix);
                    if (_$47nmix) {
                        var _$47nvisited = {};
                        function _$47nvisitedKey(block, elem) {
                            return (block || '') + '__' + (elem || '');
                        }
                        _$47nvisited[_$47nvisitedKey($$block, $$elem)] = true;
                        if (!__$ctx._.isArray(_$47nmix)) {
                            _$47nmix = [_$47nmix];
                        } else {
                            undefined;
                        }
                        for (var _$47ni = 0; _$47ni < _$47nmix.length; _$47ni++) {
                            var _$47nmixItem = _$47nmix[_$47ni];
                            if (!_$47nmixItem) {
                                continue;
                            } else {
                                undefined;
                            }
                            var _$47nhasItem = _$47nmixItem.block || _$47nmixItem.elem, _$47nblock = _$47nmixItem.block || _$47nmixItem._block || $$block, _$47nelem = _$47nmixItem.elem || _$47nmixItem._elem || $$elem, _$47nmods = _$47nmixItem.mods || $$mods, _$47nelemMods = _$47nmixItem.elemMods || {};
                            _$47nhasItem && _$47nbuf.push(' ');
                            _$47nBEM_.INTERNAL[_$47nhasItem ? 'buildClasses' : 'buildModsClasses'](_$47nblock, _$47nmixItem.elem || _$47nmixItem._elem || (_$47nmixItem.block ? undefined : $$elem), _$47nmixItem.elemMods || _$47nmixItem.mods, _$47nbuf);
                            if (_$47nmixItem.js) {
                                (_$47njsParams || (_$47njsParams = {}))[_$47nBEM_.INTERNAL.buildClass(_$47nblock, _$47nmixItem.elem)] = _$47nmixItem.js === true ? {} : _$47nmixItem.js;
                                _$47naddJSInitClass || (_$47naddJSInitClass = _$47nblock && !_$47nmixItem.elem);
                            } else {
                                undefined;
                            }
                            if (_$47nhasItem && !_$47nvisited[_$47nvisitedKey(_$47nblock, _$47nelem)]) {
                                _$47nvisited[_$47nvisitedKey(_$47nblock, _$47nelem)] = true;
                                var _$47nnestedMix = ('', __r12 = $$block, $$block = _$47nblock, __r13 = $$elem, $$elem = _$47nelem, __r14 = $$mods, $$mods = _$47nmods, __r15 = $$elemMods, $$elemMods = _$47nelemMods, __r16 = $$mode, $$mode = 'mix', __r17 = $1(__$ctx), $$block = __r12, $$elem = __r13, $$mods = __r14, $$elemMods = __r15, $$mode = __r16, '', __r17);
                                if (_$47nnestedMix) {
                                    for (var _$47nj = 0; _$47nj < _$47nnestedMix.length; _$47nj++) {
                                        var _$47nnestedItem = _$47nnestedMix[_$47nj];
                                        if (!_$47nnestedItem.block && !_$47nnestedItem.elem || !_$47nvisited[_$47nvisitedKey(_$47nnestedItem.block, _$47nnestedItem.elem)]) {
                                            _$47nnestedItem._block = _$47nblock;
                                            _$47nnestedItem._elem = _$47nelem;
                                            _$47nmix.splice(_$47ni + 1, 0, _$47nnestedItem);
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
                _$47ncls && _$47nbuf.push(_$47nisBEM ? ' ' : '', _$47ncls);
                _$47naddJSInitClass && _$47nbuf.push(' i-bem');
                _$47nbuf.push('"');
            } else {
                undefined;
            }
            if (_$47njsParams) {
                var _$47njsAttr = ('', __r20 = $$mode, $$mode = 'jsAttr', __r21 = $1(__$ctx), $$mode = __r20, '', __r21);
                _$47nbuf.push(' ', _$47njsAttr || 'data-bem', '="', __$ctx._.attrEscape(JSON.stringify(_$47njsParams)), '"');
            } else {
                undefined;
            }
            var _$47nattrs = ('', __r22 = $$mode, $$mode = 'attrs', __r23 = $1(__$ctx), $$mode = __r22, '', __r23);
            _$47nattrs = __$ctx._.extend(_$47nattrs, _$47nv.attrs);
            if (_$47nattrs) {
                var _$47nname;
                for (_$47nname in _$47nattrs) {
                    if (_$47nattrs[_$47nname] === undefined) {
                        continue;
                    } else {
                        undefined;
                    }
                    _$47nbuf.push(' ', _$47nname, '="', __$ctx._.attrEscape(_$47nattrs[_$47nname]), '"');
                }
            } else {
                undefined;
            }
        } else {
            undefined;
        }
        if (__$ctx._.isShortTag(_$47ntag)) {
            _$47nbuf.push('/>');
        } else {
            _$47ntag && _$47nbuf.push('>');
            var _$47ncontent = ('', __r24 = $$mode, $$mode = 'content', __r25 = $1(__$ctx), $$mode = __r24, '', __r25);
            if (_$47ncontent || _$47ncontent === 0) {
                var _$47nisBEM = $$block || $$elem;
                {
                    '';
                    var __r26 = __$ctx._notNewList;
                    __$ctx._notNewList = false;
                    var __r27 = __$ctx.position;
                    __$ctx.position = _$47nisBEM ? 1 : __$ctx.position;
                    var __r28 = __$ctx._listLength;
                    __$ctx._listLength = _$47nisBEM ? 1 : __$ctx._listLength;
                    var __r29 = __$ctx.ctx;
                    __$ctx.ctx = _$47ncontent;
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
            _$47ntag && _$47nbuf.push('</', _$47ntag, '>');
        }
        return;
    }
    function $341(__$ctx) {
        var _$47kv = __$ctx.ctx, _$47kl = _$47kv.length, _$47ki = 0, _$47kprevPos = __$ctx.position, _$47kprevNotNewList = __$ctx._notNewList;
        if (_$47kprevNotNewList) {
            __$ctx._listLength += _$47kl - 1;
        } else {
            __$ctx.position = 0;
            __$ctx._listLength = _$47kl;
        }
        __$ctx._notNewList = true;
        while (_$47ki < _$47kl) {
            var _$47knewCtx = _$47kv[_$47ki++];
            {
                '';
                var __r0 = __$ctx.ctx;
                __$ctx.ctx = _$47knewCtx == null ? '' : _$47knewCtx;
                $1(__$ctx);
                __$ctx.ctx = __r0;
                '';
            }
            undefined;
        }
        _$47kprevNotNewList || (__$ctx.position = _$47kprevPos);
        return;
    }
    function $344(__$ctx) {
        var _$47jvBlock = __$ctx.ctx.block, _$47jvElem = __$ctx.ctx.elem, _$47jblock = __$ctx._currBlock || $$block;
        __$ctx.ctx || (__$ctx.ctx = {});
        {
            '';
            var __r0 = $$mode;
            $$mode = 'default';
            var __r1 = __$ctx._links;
            __$ctx._links = __$ctx.ctx.links || __$ctx._links;
            var __r2 = $$block;
            $$block = _$47jvBlock || (_$47jvElem ? _$47jblock : undefined);
            var __r3 = __$ctx._currBlock;
            __$ctx._currBlock = _$47jvBlock || _$47jvElem ? undefined : _$47jblock;
            var __r4 = $$elem;
            $$elem = __$ctx.ctx.elem;
            var __r5 = $$mods;
            $$mods = (_$47jvBlock ? __$ctx.ctx.mods : $$mods) || {};
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
/*borschik:include:../../../../touch-pad.blocks/radiobox/radiobox.js*/;
/*borschik:include:../../../../common.blocks/radio-button/radio-button.js*/;
/*borschik:include:../../../../common.blocks/checkbox/checkbox.js*/;
/*borschik:include:../../../../common.blocks/check-button/check-button.js*/;
/*borschik:include:../../../../common.blocks/popup/popup.js*/;
/*borschik:include:../../../../touch-pad.blocks/popup/popup.js*/;
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
/*borschik:include:../../../../touch-pad.blocks/input/input.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-system/i-system.js*/;
/*borschik:include:../../../../common.blocks/input/__clear/input__clear.js*/;
/*borschik:include:../../../../common.blocks/slider/_type/slider_type_range.js*/;
/*borschik:include:../../../../common.blocks/input/__hint/input__hint.js*/;
/*borschik:include:../../../../touch-pad.blocks/input/__hint/input__hint.js*/;


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
