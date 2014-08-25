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
            return $35(__$ctx);
        } else if (__t === 'tag') {
            return $96(__$ctx);
        } else if (__t === 'default') {
            return $145(__$ctx);
        } else if (__t === 'mix') {
            return $218(__$ctx);
        } else if (__t === 'value') {
            if ($$block === 'input') {
                return $255(__$ctx);
            } else {
                return $295(__$ctx);
            }
        } else if (__t === 'js') {
            return $277(__$ctx);
        } else {
            return $295(__$ctx);
        }
    }
    function $2(__$ctx) {
        var __t = $$block;
        if (__t === 'input') {
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
        } else if (__t === 'slider') {
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
        } else if (__t === 'button') {
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
                return $295(__$ctx);
            }
        } else {
            return $295(__$ctx);
        }
    }
    function $35(__$ctx) {
        var __t = $$block;
        if (__t === 'input') {
            var __t = $$elem;
            if (__t === 'clear') {
                return { unselectable: 'on' };
                return;
            } else if (__t === 'control') {
                var _$2kia = __$ctx._.extend({
                        id: __$ctx._inputId,
                        name: __$ctx._name
                    }, __$ctx.ctx.controlAttrs);
                (__$ctx._value || __$ctx._value === 0) && (_$2kia.value = __$ctx._value);
                $$mods.disabled && (_$2kia.disabled = 'disabled');
                _$2kia['aria-labelledby'] = __$ctx._labelId + ' ' + __$ctx._hintId;
                return _$2kia;
                return;
            } else {
                return $295(__$ctx);
            }
        } else if (__t === 'slider') {
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
        } else if (__t === 'select') {
            var __t = $$elem;
            if (__t === 'group') {
                return {
                    role: 'group',
                    'aria-labelledby': __$ctx._labelId
                };
                return;
            } else if (__t === 'control') {
                var _$2jtattrs = [
                        'id',
                        'name',
                        'tabindex'
                    ], _$2jtprop = {}, _$2jtp;
                while (_$2jtp = _$2jtattrs.pop()) {
                    __$ctx._controlAttrs[_$2jtp] && (_$2jtprop[_$2jtp] = __$ctx._controlAttrs[_$2jtp]);
                }
                $$mods.disabled === 'yes' && (_$2jtprop.disabled = 'disabled');
                _$2jtprop.tabindex = -1;
                _$2jtprop['aria-hidden'] = true;
                return __$ctx.ctx.controlAttrs || _$2jtprop;
                return;
            } else if (__t === 'item') {
                return $55(__$ctx);
            } else {
                return $295(__$ctx);
            }
        } else if (__t === 'button') {
            return $62(__$ctx);
        } else {
            return $295(__$ctx);
        }
    }
    function $55(__$ctx) {
        if (!(__$ctx['__$anflg278'] !== true) === false) {
            var __r0, __r1;
            var _$2joa = ('', __r0 = __$ctx['__$anflg278'], __$ctx['__$anflg278'] = true, __r1 = $55(__$ctx), __$ctx['__$anflg278'] = __r0, '', __r1) || {};
            if ((__$ctx.ctx.elemMods || {}).label === 'yes') {
                _$2joa.id = __$ctx._labelId;
                _$2joa['aria-hidden'] = true;
            } else {
                undefined;
            }
            return _$2joa;
            return;
        } else {
            return { id: __$ctx.generateId() };
            return;
        }
    }
    function $62(__$ctx) {
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
                return $68(__$ctx);
            }
        } else {
            return $68(__$ctx);
        }
    }
    function $68(__$ctx) {
        if (!(__$ctx['__$anflg276'] !== true) === false) {
            if (!__$ctx.ctx.url === false) {
                if (!!$$elem === false) {
                    var __r0, __r1;
                    var _$2jfctx = __$ctx.ctx, _$2jfp = ('', __r0 = __$ctx['__$anflg276'], __$ctx['__$anflg276'] = true, __r1 = $62(__$ctx), __$ctx['__$anflg276'] = __r0, '', __r1), _$2jfa = { href: _$2jfctx.url };
                    _$2jfctx.target && (_$2jfa.target = _$2jfctx.target);
                    $$mods.disabled && (_$2jfa['aria-disabled'] = true);
                    return __$ctx._.extend(_$2jfp, _$2jfa);
                    return;
                } else {
                    return $77(__$ctx);
                }
            } else {
                return $77(__$ctx);
            }
        } else {
            return $77(__$ctx);
        }
    }
    function $77(__$ctx) {
        if (!(__$ctx['__$anflg275'] !== true) === false) {
            if (!!$$elem === false) {
                if (!!__$ctx.ctx.url === false) {
                    return $81(__$ctx);
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
    function $81(__$ctx) {
        var __r0, __r1;
        var _$2jectx = __$ctx.ctx, _$2jep = ('', __r0 = __$ctx['__$anflg275'], __$ctx['__$anflg275'] = true, __r1 = $62(__$ctx), __$ctx['__$anflg275'] = __r0, '', __r1), _$2jea = { type: _$2jectx.type || 'button' }, _$2jeprops = [
                'name',
                'value'
            ], _$2jei;
        while (_$2jei = _$2jeprops.shift()) {
            _$2jectx[_$2jei] && (_$2jea[_$2jei] = _$2jectx[_$2jei]);
        }
        $$mods.disabled && (_$2jea.disabled = 'disabled');
        return __$ctx._.extend(_$2jep, _$2jea);
        return;
    }
    function $86(__$ctx) {
        if (!true === false) {
            if (!!$$elem === false) {
                var _$2jdctx = __$ctx.ctx, _$2jda = { role: 'button' };
                _$2jdctx.tabindex && (_$2jda.tabindex = _$2jdctx.tabindex);
                return _$2jda;
                return;
            } else {
                return $295(__$ctx);
            }
        } else {
            return $295(__$ctx);
        }
    }
    function $96(__$ctx) {
        var __t = $$block;
        if (__t === 'input') {
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
        } else if (__t === 'slider') {
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
        } else if (__t === 'select') {
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
        } else if (__t === 'button') {
            if (!__$ctx.ctx.url === false) {
                if (!!$$elem === false) {
                    return 'a';
                    return;
                } else {
                    return $138(__$ctx);
                }
            } else {
                return $138(__$ctx);
            }
        } else {
            return $295(__$ctx);
        }
    }
    function $138(__$ctx) {
        if (!!$$elem === false) {
            return 'button';
            return;
        } else {
            return $295(__$ctx);
        }
    }
    function $145(__$ctx) {
        var __t = $$block;
        if (__t === 'input') {
            return $146(__$ctx);
        } else if (__t === 'slider') {
            return $163(__$ctx);
        } else if (__t === 'select') {
            return $177(__$ctx);
        } else if (__t === 'button') {
            return $191(__$ctx);
        } else if (__t === 'popup') {
            return $208(__$ctx);
        } else {
            return $295(__$ctx);
        }
    }
    function $146(__$ctx) {
        if ($$elem === 'control') {
            if (!(__$ctx['__$anflg284'] !== true) === false) {
                if (!!$$mods.clear === false) {
                    return $150(__$ctx);
                } else {
                    return $155(__$ctx);
                }
            } else {
                return $155(__$ctx);
            }
        } else {
            return $155(__$ctx);
        }
    }
    function $150(__$ctx) {
        {
            '';
            var __r0 = __$ctx['__$anflg284'];
            __$ctx['__$anflg284'] = true;
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
                $318(__$ctx);
                __$ctx.ctx = __r1;
                $$mode = __r2;
                '';
            }
            __$ctx['__$anflg284'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $155(__$ctx) {
        if (!(__$ctx['__$anflg283'] !== true) === false) {
            if (!!$$elem === false) {
                return $158(__$ctx);
            } else {
                return $295(__$ctx);
            }
        } else {
            return $295(__$ctx);
        }
    }
    function $158(__$ctx) {
        var __r0, __r1, __r2;
        var _$2k9value = ('', __r0 = $$mode, $$mode = 'value', __r1 = __$ctx.ctx, __$ctx.ctx = __$ctx.ctx.value, __r2 = $255(__$ctx), $$mode = __r0, __$ctx.ctx = __r1, '', __r2), _$2k9id = __$ctx.ctx.id || __$ctx.generateId(), _$2k9mods = __$ctx.ctx.mods || {};
        _$2k9mods.theme = _$2k9mods.theme || 'normal';
        {
            '';
            var __r3 = __$ctx['__$anflg283'];
            __$ctx['__$anflg283'] = true;
            {
                '';
                var __r4 = __$ctx._inputId;
                __$ctx._inputId = _$2k9id;
                var __r5 = __$ctx._labelId;
                __$ctx._labelId = 'label' + _$2k9id;
                var __r6 = __$ctx._hintId;
                __$ctx._hintId = 'hint' + _$2k9id;
                var __r7 = __$ctx._name;
                __$ctx._name = __$ctx.ctx.name || '';
                var __r8 = __$ctx._value;
                __$ctx._value = _$2k9value;
                var __r9 = __$ctx._inputLink;
                __$ctx._inputLink = true;
                var __r10 = __$ctx._disabled;
                __$ctx._disabled = $$mods.disabled;
                var __r11 = __$ctx.ctx, __r12 = __r11.mods;
                __r11.mods = _$2k9mods;
                $146(__$ctx);
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
            __$ctx['__$anflg283'] = __r3;
            '';
        }
        undefined;
        return;
    }
    function $163(__$ctx) {
        if ($$elem === 'runner') {
            return $164(__$ctx);
        } else {
            return $169(__$ctx);
        }
    }
    function $164(__$ctx) {
        if (!!__$ctx._done === false) {
            var __r0, __r1, __r2;
            return '', __r0 = __$ctx._value, __$ctx._value = __$ctx.ctx.value, __r1 = __$ctx._done, __$ctx._done = true, __r2 = $164(__$ctx), __$ctx._value = __r0, __$ctx._done = __r1, '', __r2;
            return;
        } else {
            return $169(__$ctx);
        }
    }
    function $169(__$ctx) {
        if (!(__$ctx['__$anflg281'] !== true) === false) {
            if (!!$$elem === false) {
                var _$2jwid = __$ctx.generateId();
                {
                    '';
                    var __r0 = __$ctx['__$anflg281'];
                    __$ctx['__$anflg281'] = true;
                    {
                        '';
                        var __r1 = __$ctx._inSlider;
                        __$ctx._inSlider = true;
                        var __r2 = __$ctx._titleId;
                        __$ctx._titleId = 'title' + _$2jwid;
                        $163(__$ctx);
                        __$ctx._inSlider = __r1;
                        __$ctx._titleId = __r2;
                        '';
                    }
                    __$ctx['__$anflg281'] = __r0;
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
    function $177(__$ctx) {
        if ($$elem === 'group') {
            return $178(__$ctx);
        } else {
            return $183(__$ctx);
        }
    }
    function $178(__$ctx) {
        if (!(__$ctx['__$anflg280'] !== true) === false) {
            {
                '';
                var __r0 = __$ctx['__$anflg280'];
                __$ctx['__$anflg280'] = true;
                {
                    '';
                    var __r1 = __$ctx._labelId;
                    __$ctx._labelId = __$ctx.generateId();
                    $178(__$ctx);
                    __$ctx._labelId = __r1;
                    '';
                }
                __$ctx['__$anflg280'] = __r0;
                '';
            }
            undefined;
            return;
        } else {
            return $183(__$ctx);
        }
    }
    function $183(__$ctx) {
        if (!(__$ctx['__$anflg277'] !== true) === false) {
            if (!!$$elem === false) {
                return $186(__$ctx);
            } else {
                return $295(__$ctx);
            }
        } else {
            return $295(__$ctx);
        }
    }
    function $186(__$ctx) {
        var _$2jhctx = __$ctx.ctx, _$2jhid = _$2jhctx.id || __$ctx.generateId();
        {
            '';
            var __r0 = __$ctx['__$anflg277'];
            __$ctx['__$anflg277'] = true;
            {
                '';
                var __r1 = __$ctx._controlAttrs;
                __$ctx._controlAttrs = {
                    id: _$2jhid,
                    name: _$2jhctx.name || _$2jhid,
                    tabindex: _$2jhctx.tabindex
                };
                var __r2 = __$ctx._formSelect;
                __$ctx._formSelect = {
                    block: $$block,
                    mods: $$mods,
                    tabindex: _$2jhctx.tabindex
                };
                $177(__$ctx);
                __$ctx._controlAttrs = __r1;
                __$ctx._formSelect = __r2;
                '';
            }
            __$ctx['__$anflg277'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $191(__$ctx) {
        if (!(__$ctx['__$anflg279'] !== true) === false) {
            if (!__$ctx._formSelect === false) {
                if (!!$$elem === false) {
                    return $195(__$ctx);
                } else {
                    return $200(__$ctx);
                }
            } else {
                return $200(__$ctx);
            }
        } else {
            return $200(__$ctx);
        }
    }
    function $195(__$ctx) {
        var _$2jqctx = __$ctx.ctx, _$2jqselectMods = __$ctx._formSelect.mods, _$2jqtabindex = __$ctx._formSelect.tabindex, _$2jqm = _$2jqctx.mods || {};
        _$2jqm.arrow = 'down';
        _$2jqselectMods.theme && (_$2jqm.theme = _$2jqselectMods.theme);
        _$2jqselectMods.size && (_$2jqm.size = _$2jqselectMods.size);
        _$2jqselectMods.disabled === 'yes' && (_$2jqm.disabled = 'yes');
        _$2jqctx.mods = _$2jqm;
        _$2jqtabindex && (_$2jqctx.tabindex = _$2jqtabindex);
        {
            '';
            var __r0 = __$ctx['__$anflg279'];
            __$ctx['__$anflg279'] = true;
            {
                '';
                var __r1 = __$ctx.ctx, __r2 = __r1._theme;
                __r1._theme = true;
                $191(__$ctx);
                __r1._theme = __r2;
                '';
            }
            __$ctx['__$anflg279'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $200(__$ctx) {
        if (!(__$ctx['__$anflg274'] !== true) === false) {
            if (!!$$elem === false) {
                var _$2jcmods = __$ctx.ctx.mods || {};
                _$2jcmods.theme = _$2jcmods.theme || 'normal';
                {
                    '';
                    var __r0 = __$ctx['__$anflg274'];
                    __$ctx['__$anflg274'] = true;
                    {
                        '';
                        var __r1 = __$ctx.ctx, __r2 = __r1.mods;
                        __r1.mods = _$2jcmods;
                        $191(__$ctx);
                        __r1.mods = __r2;
                        '';
                    }
                    __$ctx['__$anflg274'] = __r0;
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
    function $208(__$ctx) {
        if (!!__$ctx._popupDefaults === false) {
            if (!!$$elem === false) {
                return $211(__$ctx);
            } else {
                return $295(__$ctx);
            }
        } else {
            return $295(__$ctx);
        }
    }
    function $211(__$ctx) {
        var _$2j7ctx = __$ctx.ctx;
        _$2j7ctx.mods = $$mods = __$ctx.extend({
            theme: 'ffffff',
            autoclosable: 'yes',
            adaptive: 'yes',
            animate: 'yes'
        }, $$mods);
        if (_$2j7ctx.zIndex) {
            var _$2j7attrs = _$2j7ctx.attrs || (_$2j7ctx.attrs = {});
            _$2j7attrs.style = (_$2j7attrs.style || '') + ';z-index:' + _$2j7ctx.zIndex + ';';
        } else {
            undefined;
        }
        {
            '';
            var __r0 = __$ctx._popupDefaults;
            __$ctx._popupDefaults = true;
            $208(__$ctx);
            __$ctx._popupDefaults = __r0;
            '';
        }
        undefined;
        return;
    }
    function $218(__$ctx) {
        var __t = $$block;
        if (__t === 'input') {
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
        } else if (__t === 'slider') {
            if ($$elem === 'body') {
                return $231(__$ctx);
            } else {
                return $295(__$ctx);
            }
        } else if (__t === 'button') {
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
        } else {
            return $295(__$ctx);
        }
    }
    function $231(__$ctx) {
        if (!(__$ctx['__$anflg282'] !== true) === false) {
            if (!$$mods.orientation === false) {
                if (!!__$ctx.ctx._wOrigin === false) {
                    return $235(__$ctx);
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
    function $235(__$ctx) {
        var __r0, __r4, __r1, __r2, __r3;
        var _$2k6m = ('', __r0 = __$ctx['__$anflg282'], __$ctx['__$anflg282'] = true, __r4 = ('', __r1 = __$ctx.ctx, __r2 = __r1._wOrigin, __r1._wOrigin = true, __r3 = $231(__$ctx), __r1._wOrigin = __r2, '', __r3), __$ctx['__$anflg282'] = __r0, '', __r4) || [];
        _$2k6m.push({ elemMods: { origin: $$mods.orientation === 'vert' ? 'y' : 'x' } });
        return _$2k6m;
        return;
    }
    function $255(__$ctx) {
        if (!__$ctx.isSimple(__$ctx.ctx) === false) {
            if (!!$$elem === false) {
                return __$ctx.ctx;
                return;
            } else {
                return $261(__$ctx);
            }
        } else {
            return $261(__$ctx);
        }
    }
    function $261(__$ctx) {
        if (!__$ctx.ctx === false) {
            if (!!$$elem === false) {
                var _$2kbvalue = [];
                {
                    '';
                    var __r0 = __$ctx._buf;
                    __$ctx._buf = _$2kbvalue;
                    var __r1 = $$mode;
                    $$mode = '';
                    $319(__$ctx);
                    __$ctx._buf = __r0;
                    $$mode = __r1;
                    '';
                }
                undefined;
                return _$2kbvalue.join('');
                return;
            } else {
                return $267(__$ctx);
            }
        } else {
            return $267(__$ctx);
        }
    }
    function $267(__$ctx) {
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
    function $277(__$ctx) {
        var __t = $$block;
        if (__t === 'input') {
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
        } else if (__t === 'select' || __t === 'button') {
            if (!!$$elem === false) {
                return true;
                return;
            } else {
                return $295(__$ctx);
            }
        } else {
            return $295(__$ctx);
        }
    }
    function $295(__$ctx) {
        if ($$block === 'popup') {
            if (!($$mode === '' && __$ctx._popupDefaults) === false) {
                delete __$ctx._popupDefaults;
                applyc(__$ctx);
                undefined;
                return;
            } else {
                return $301(__$ctx);
            }
        } else {
            return $301(__$ctx);
        }
    }
    function $301(__$ctx) {
        var __t = $$mode;
        if (__t === 'content') {
            return $303(__$ctx);
        } else if (__t === 'mix' || __t === 'bem' || __t === 'jsAttr' || __t === 'js' || __t === 'cls' || __t === 'attrs' || __t === 'tag') {
            return undefined;
            return;
        } else {
            return $318(__$ctx);
        }
    }
    function $303(__$ctx) {
        return __$ctx.ctx.content;
        return;
    }
    function $318(__$ctx) {
        if (!__$ctx.ctx === false) {
            return $319(__$ctx);
        } else {
            return $327(__$ctx);
        }
    }
    function $319(__$ctx) {
        if (!__$ctx.ctx.link === false) {
            if (!!__$ctx._.isSimple(__$ctx.ctx) === false) {
                return $322(__$ctx);
            } else {
                return $327(__$ctx);
            }
        } else {
            return $327(__$ctx);
        }
    }
    function $322(__$ctx) {
        var __r0, __r1;
        function _$2ixfollow() {
            if (this.ctx.link === 'no-follow') {
                return undefined;
            } else {
                undefined;
            }
            var data = this._links[this.ctx.link];
            return '', __r0 = this.ctx, this.ctx = data, __r1 = $1(__$ctx), this.ctx = __r0, '', __r1;
        }
        if (!cache || !__$ctx._cacheLog) {
            return _$2ixfollow.call(__$ctx);
        } else {
            undefined;
        }
        var _$2ixcontents = __$ctx._buf.slice(__$ctx._cachePos).join('');
        __$ctx._cachePos = __$ctx._buf.length;
        __$ctx._cacheLog.push(_$2ixcontents, {
            log: __$ctx._localLog.slice(),
            link: __$ctx.ctx.link
        });
        var _$2ixres = _$2ixfollow.call(__$ctx);
        __$ctx._cachePos = __$ctx._buf.length;
        return _$2ixres;
        return;
    }
    function $327(__$ctx) {
        if (!cache === false) {
            if (!__$ctx.ctx === false) {
                if (!__$ctx.ctx.cache === false) {
                    return $331(__$ctx);
                } else {
                    return $336(__$ctx);
                }
            } else {
                return $336(__$ctx);
            }
        } else {
            return $336(__$ctx);
        }
    }
    function $331(__$ctx) {
        var _$2iwcached;
        function _$2iwsetProperty(obj, key, value) {
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
        if (_$2iwcached = cache.get(__$ctx.ctx.cache)) {
            var _$2iwoldLinks = __$ctx._links;
            if (__$ctx.ctx.links) {
                __$ctx._links = __$ctx.ctx.links;
            } else {
                undefined;
            }
            for (var _$2iwi = 0; _$2iwi < _$2iwcached.log.length; _$2iwi++) {
                if (typeof _$2iwcached.log[_$2iwi] === 'string') {
                    __$ctx._buf.push(_$2iwcached.log[_$2iwi]);
                    continue;
                } else {
                    undefined;
                }
                var _$2iwlog = _$2iwcached.log[_$2iwi], _$2iwreverseLog;
                _$2iwreverseLog = _$2iwlog.log.map(function (entry) {
                    return {
                        key: entry[0],
                        value: _$2iwsetProperty(this, entry[0], entry[1])
                    };
                }, __$ctx).reverse();
                {
                    '';
                    var __r0 = __$ctx.ctx, __r1 = __r0.cache;
                    __r0.cache = null;
                    var __r2 = __$ctx._cacheLog;
                    __$ctx._cacheLog = null;
                    var __r3 = __$ctx.ctx, __r4 = __r3.link;
                    __r3.link = _$2iwlog.link;
                    $1(__$ctx);
                    __r0.cache = __r1;
                    __$ctx._cacheLog = __r2;
                    __r3.link = __r4;
                    '';
                }
                undefined;
                _$2iwreverseLog.forEach(function (entry) {
                    _$2iwsetProperty(this, entry.key, entry.value);
                }, __$ctx);
            }
            __$ctx._links = _$2iwoldLinks;
            return _$2iwcached.res;
        } else {
            undefined;
        }
        var _$2iwcacheLog = [], _$2iwres;
        {
            '';
            var __r5 = __$ctx.ctx, __r6 = __r5.cache;
            __r5.cache = null;
            var __r7 = __$ctx._cachePos;
            __$ctx._cachePos = __$ctx._buf.length;
            var __r8 = __$ctx._cacheLog;
            __$ctx._cacheLog = _$2iwcacheLog;
            var __r9 = __$ctx._localLog;
            __$ctx._localLog = [];
            {
                _$2iwres = $1(__$ctx);
                var _$2iwtail = __$ctx._buf.slice(__$ctx._cachePos).join('');
                if (_$2iwtail) {
                    _$2iwcacheLog.push(_$2iwtail);
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
            log: _$2iwcacheLog,
            res: _$2iwres
        });
        return _$2iwres;
        return;
    }
    function $336(__$ctx) {
        var __t = $$mode;
        if (__t === 'default') {
            return $338(__$ctx);
        } else if (__t === '') {
            if (!__$ctx._.isSimple(__$ctx.ctx) === false) {
                __$ctx._listLength--;
                var _$2iuctx = __$ctx.ctx;
                (_$2iuctx && _$2iuctx !== true || _$2iuctx === 0) && __$ctx._buf.push(_$2iuctx);
                return;
            } else {
                if (!!__$ctx.ctx === false) {
                    __$ctx._listLength--;
                    return;
                } else {
                    if (!__$ctx._.isArray(__$ctx.ctx) === false) {
                        return $347(__$ctx);
                    } else {
                        if (!true === false) {
                            return $350(__$ctx);
                        } else {
                            if (!!__$ctx['i-global'] === false) {
                                return $353(__$ctx);
                            } else {
                                return $e(__$ctx);
                            }
                        }
                    }
                }
            }
        } else if (__t === 'content') {
            if ($$block === 'i-ua') {
                if (!(__$ctx['__$anflg273'] !== true) === false) {
                    if (!!$$elem === false) {
                        var __r0, __r1;
                        var _$2iqc = ('', __r0 = __$ctx['__$anflg273'], __$ctx['__$anflg273'] = true, __r1 = $303(__$ctx), __$ctx['__$anflg273'] = __r0, '', __r1);
                        _$2iqc += [
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
                        return _$2iqc;
                        return;
                    } else {
                        return $363(__$ctx);
                    }
                } else {
                    return $363(__$ctx);
                }
            } else {
                return $e(__$ctx);
            }
        } else if (__t === 'bem') {
            if ($$block === 'i-ua') {
                if (!!$$elem === false) {
                    return false;
                    return;
                } else {
                    return $e(__$ctx);
                }
            } else {
                return $e(__$ctx);
            }
        } else if (__t === 'tag') {
            if ($$block === 'i-ua') {
                if (!!$$elem === false) {
                    return 'script';
                    return;
                } else {
                    return $e(__$ctx);
                }
            } else {
                return $e(__$ctx);
            }
        } else if (__t === 'js-params') {
            if ($$block === 'b-page') {
                if (!!$$elem === false) {
                    return $389(__$ctx);
                } else {
                    return $e(__$ctx);
                }
            } else {
                return $e(__$ctx);
            }
        } else if (__t === 'public-params') {
            if ($$block === 'i-global') {
                if (!$$elem === false) {
                    return {
                        id: 1,
                        lang: 1,
                        tld: 1,
                        'content-region': 1,
                        'user-region': 1,
                        login: 1,
                        displayName: 1,
                        index: 1,
                        yandexuid: 1,
                        'passport-host': 1,
                        'pass-host': 1,
                        'passport-msg': 1,
                        'static-host': 1,
                        'lego-static-host': 1,
                        'social-host': 1,
                        clck: 1,
                        'click-host': 1,
                        'export-host': 1,
                        'i-host': 1,
                        'social-retpath': 1,
                        'lego-path': 1,
                        sid: 1,
                        retpath: 1,
                        uid: 1
                    }[$$elem] || false;
                    return;
                } else {
                    return $e(__$ctx);
                }
            } else {
                return $e(__$ctx);
            }
        } else if (__t === 'env') {
            if ($$block === 'i-global') {
                if (!!$$elem === false) {
                    return {};
                    return;
                } else {
                    return $e(__$ctx);
                }
            } else {
                return $e(__$ctx);
            }
        } else {
            return $e(__$ctx);
        }
    }
    function $338(__$ctx) {
        var __r13, __r0, __r4, __r5, __r6, __r7, __r8, __r9, __r10, __r11, __r12, __r1, __r14, __r15, __r16, __r17, __r20, __r21, __r22, __r23, __r24, __r25;
        var _$2ivBEM_ = __$ctx.BEM, _$2ivv = __$ctx.ctx, _$2ivbuf = __$ctx._buf, _$2ivtag;
        _$2ivtag = ('', __r0 = $$mode, $$mode = 'tag', __r1 = $96(__$ctx), $$mode = __r0, '', __r1);
        typeof _$2ivtag != 'undefined' || (_$2ivtag = _$2ivv.tag);
        typeof _$2ivtag != 'undefined' || (_$2ivtag = 'div');
        if (_$2ivtag) {
            var _$2ivjsParams, _$2ivjs;
            if ($$block && _$2ivv.js !== false) {
                _$2ivjs = ('', __r4 = $$mode, $$mode = 'js', __r5 = $277(__$ctx), $$mode = __r4, '', __r5);
                _$2ivjs = _$2ivjs ? __$ctx._.extend(_$2ivv.js, _$2ivjs === true ? {} : _$2ivjs) : _$2ivv.js === true ? {} : _$2ivv.js;
                _$2ivjs && ((_$2ivjsParams = {})[_$2ivBEM_.INTERNAL.buildClass($$block, _$2ivv.elem)] = _$2ivjs);
            } else {
                undefined;
            }
            _$2ivbuf.push('<', _$2ivtag);
            var _$2ivisBEM = ('', __r6 = $$mode, $$mode = 'bem', __r7 = $295(__$ctx), $$mode = __r6, '', __r7);
            typeof _$2ivisBEM != 'undefined' || (_$2ivisBEM = typeof _$2ivv.bem != 'undefined' ? _$2ivv.bem : _$2ivv.block || _$2ivv.elem);
            var _$2ivcls = ('', __r8 = $$mode, $$mode = 'cls', __r9 = $295(__$ctx), $$mode = __r8, '', __r9);
            _$2ivcls || (_$2ivcls = _$2ivv.cls);
            var _$2ivaddJSInitClass = _$2ivv.block && _$2ivjsParams;
            if (_$2ivisBEM || _$2ivcls) {
                _$2ivbuf.push(' class="');
                if (_$2ivisBEM) {
                    _$2ivBEM_.INTERNAL.buildClasses($$block, _$2ivv.elem, _$2ivv.elemMods || _$2ivv.mods, _$2ivbuf);
                    var _$2ivmix = ('', __r10 = $$mode, $$mode = 'mix', __r11 = $218(__$ctx), $$mode = __r10, '', __r11);
                    _$2ivv.mix && (_$2ivmix = _$2ivmix ? _$2ivmix.concat(_$2ivv.mix) : _$2ivv.mix);
                    if (_$2ivmix) {
                        var _$2ivvisited = {};
                        function _$2ivvisitedKey(block, elem) {
                            return (block || '') + '__' + (elem || '');
                        }
                        _$2ivvisited[_$2ivvisitedKey($$block, $$elem)] = true;
                        if (!__$ctx._.isArray(_$2ivmix)) {
                            _$2ivmix = [_$2ivmix];
                        } else {
                            undefined;
                        }
                        for (var _$2ivi = 0; _$2ivi < _$2ivmix.length; _$2ivi++) {
                            var _$2ivmixItem = _$2ivmix[_$2ivi];
                            if (!_$2ivmixItem) {
                                continue;
                            } else {
                                undefined;
                            }
                            var _$2ivhasItem = _$2ivmixItem.block || _$2ivmixItem.elem, _$2ivblock = _$2ivmixItem.block || _$2ivmixItem._block || $$block, _$2ivelem = _$2ivmixItem.elem || _$2ivmixItem._elem || $$elem, _$2ivmods = _$2ivmixItem.mods || $$mods, _$2ivelemMods = _$2ivmixItem.elemMods || {};
                            _$2ivhasItem && _$2ivbuf.push(' ');
                            _$2ivBEM_.INTERNAL[_$2ivhasItem ? 'buildClasses' : 'buildModsClasses'](_$2ivblock, _$2ivmixItem.elem || _$2ivmixItem._elem || (_$2ivmixItem.block ? undefined : $$elem), _$2ivmixItem.elemMods || _$2ivmixItem.mods, _$2ivbuf);
                            if (_$2ivmixItem.js) {
                                (_$2ivjsParams || (_$2ivjsParams = {}))[_$2ivBEM_.INTERNAL.buildClass(_$2ivblock, _$2ivmixItem.elem)] = _$2ivmixItem.js === true ? {} : _$2ivmixItem.js;
                                _$2ivaddJSInitClass || (_$2ivaddJSInitClass = _$2ivblock && !_$2ivmixItem.elem);
                            } else {
                                undefined;
                            }
                            if (_$2ivhasItem && !_$2ivvisited[_$2ivvisitedKey(_$2ivblock, _$2ivelem)]) {
                                _$2ivvisited[_$2ivvisitedKey(_$2ivblock, _$2ivelem)] = true;
                                var _$2ivnestedMix = ('', __r12 = $$block, $$block = _$2ivblock, __r13 = $$elem, $$elem = _$2ivelem, __r14 = $$mods, $$mods = _$2ivmods, __r15 = $$elemMods, $$elemMods = _$2ivelemMods, __r16 = $$mode, $$mode = 'mix', __r17 = $218(__$ctx), $$block = __r12, $$elem = __r13, $$mods = __r14, $$elemMods = __r15, $$mode = __r16, '', __r17);
                                if (_$2ivnestedMix) {
                                    for (var _$2ivj = 0; _$2ivj < _$2ivnestedMix.length; _$2ivj++) {
                                        var _$2ivnestedItem = _$2ivnestedMix[_$2ivj];
                                        if (!_$2ivnestedItem.block && !_$2ivnestedItem.elem || !_$2ivvisited[_$2ivvisitedKey(_$2ivnestedItem.block, _$2ivnestedItem.elem)]) {
                                            _$2ivnestedItem._block = _$2ivblock;
                                            _$2ivnestedItem._elem = _$2ivelem;
                                            _$2ivmix.splice(_$2ivi + 1, 0, _$2ivnestedItem);
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
                _$2ivcls && _$2ivbuf.push(_$2ivisBEM ? ' ' : '', _$2ivcls);
                _$2ivaddJSInitClass && _$2ivbuf.push(' i-bem');
                _$2ivbuf.push('"');
            } else {
                undefined;
            }
            if (_$2ivjsParams) {
                var _$2ivjsAttr = ('', __r20 = $$mode, $$mode = 'jsAttr', __r21 = $295(__$ctx), $$mode = __r20, '', __r21);
                _$2ivbuf.push(' ', _$2ivjsAttr || 'data-bem', '="', __$ctx._.attrEscape(JSON.stringify(_$2ivjsParams)), '"');
            } else {
                undefined;
            }
            var _$2ivattrs = ('', __r22 = $$mode, $$mode = 'attrs', __r23 = $35(__$ctx), $$mode = __r22, '', __r23);
            _$2ivattrs = __$ctx._.extend(_$2ivattrs, _$2ivv.attrs);
            if (_$2ivattrs) {
                var _$2ivname;
                for (_$2ivname in _$2ivattrs) {
                    if (_$2ivattrs[_$2ivname] === undefined) {
                        continue;
                    } else {
                        undefined;
                    }
                    _$2ivbuf.push(' ', _$2ivname, '="', __$ctx._.attrEscape(_$2ivattrs[_$2ivname]), '"');
                }
            } else {
                undefined;
            }
        } else {
            undefined;
        }
        if (__$ctx._.isShortTag(_$2ivtag)) {
            _$2ivbuf.push('/>');
        } else {
            _$2ivtag && _$2ivbuf.push('>');
            var _$2ivcontent = ('', __r24 = $$mode, $$mode = 'content', __r25 = $2(__$ctx), $$mode = __r24, '', __r25);
            if (_$2ivcontent || _$2ivcontent === 0) {
                var _$2ivisBEM = $$block || $$elem;
                {
                    '';
                    var __r26 = __$ctx._notNewList;
                    __$ctx._notNewList = false;
                    var __r27 = __$ctx.position;
                    __$ctx.position = _$2ivisBEM ? 1 : __$ctx.position;
                    var __r28 = __$ctx._listLength;
                    __$ctx._listLength = _$2ivisBEM ? 1 : __$ctx._listLength;
                    var __r29 = __$ctx.ctx;
                    __$ctx.ctx = _$2ivcontent;
                    var __r30 = $$mode;
                    $$mode = '';
                    $295(__$ctx);
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
            _$2ivtag && _$2ivbuf.push('</', _$2ivtag, '>');
        }
        return;
    }
    function $347(__$ctx) {
        var _$2isv = __$ctx.ctx, _$2isl = _$2isv.length, _$2isi = 0, _$2isprevPos = __$ctx.position, _$2isprevNotNewList = __$ctx._notNewList;
        if (_$2isprevNotNewList) {
            __$ctx._listLength += _$2isl - 1;
        } else {
            __$ctx.position = 0;
            __$ctx._listLength = _$2isl;
        }
        __$ctx._notNewList = true;
        while (_$2isi < _$2isl) {
            var _$2isnewCtx = _$2isv[_$2isi++];
            {
                '';
                var __r0 = __$ctx.ctx;
                __$ctx.ctx = _$2isnewCtx == null ? '' : _$2isnewCtx;
                $295(__$ctx);
                __$ctx.ctx = __r0;
                '';
            }
            undefined;
        }
        _$2isprevNotNewList || (__$ctx.position = _$2isprevPos);
        return;
    }
    function $350(__$ctx) {
        var _$2irvBlock = __$ctx.ctx.block, _$2irvElem = __$ctx.ctx.elem, _$2irblock = __$ctx._currBlock || $$block;
        __$ctx.ctx || (__$ctx.ctx = {});
        {
            '';
            var __r0 = $$mode;
            $$mode = 'default';
            var __r1 = __$ctx._links;
            __$ctx._links = __$ctx.ctx.links || __$ctx._links;
            var __r2 = $$block;
            $$block = _$2irvBlock || (_$2irvElem ? _$2irblock : undefined);
            var __r3 = __$ctx._currBlock;
            __$ctx._currBlock = _$2irvBlock || _$2irvElem ? undefined : _$2irblock;
            var __r4 = $$elem;
            $$elem = __$ctx.ctx.elem;
            var __r5 = $$mods;
            $$mods = (_$2irvBlock ? __$ctx.ctx.mods : $$mods) || {};
            var __r6 = $$elemMods;
            $$elemMods = __$ctx.ctx.elemMods || {};
            {
                $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
                $145(__$ctx);
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
    function $353(__$ctx) {
        var __r0, __r1, __r2, __r3, __r4, __r5, __r6;
        var _$2i8ps = {}, _$2i8es = [
                'lang',
                'tld',
                'content-region',
                'click-host',
                'passport-host',
                'pass-host',
                'social-host',
                'export-host',
                'login',
                'lego-static-host'
            ], _$2i8e;
        while (_$2i8e = _$2i8es.shift()) {
            _$2i8ps[_$2i8e] = ('', __r0 = $$mode, $$mode = 'default', __r1 = $$block, $$block = 'i-global', __r2 = $$elem, $$elem = _$2i8e, __r3 = $318(__$ctx), $$mode = __r0, $$block = __r1, $$elem = __r2, '', __r3);
        }
        __$ctx['i-global'] = __$ctx._.extend(_$2i8ps, ('', __r4 = $$mode, $$mode = 'env', __r5 = $$block, $$block = 'i-global', __r6 = $318(__$ctx), $$mode = __r4, $$block = __r5, '', __r6));
        applyc(__$ctx);
        undefined;
        return;
    }
    function $363(__$ctx) {
        if (!!$$elem === false) {
            return [
                ';(function(d,e,c,r){',
                'e=d.documentElement;',
                'c="className";',
                'r="replace";',
                'e[c]=e[c][r]("i-ua_js_no","i-ua_js_yes");',
                'if(d.compatMode!="CSS1Compat")',
                'e[c]=e[c][r]("i-ua_css_standart","i-ua_css_quirks")',
                '})(document);'
            ].join('');
            return;
        } else {
            return $e(__$ctx);
        }
    }
    function $389(__$ctx) {
        var __r0, __r1, __r2, __r3;
        var _$2im_this = __$ctx['i-global'], _$2imjs = {}, _$2imblock = {
                block: 'i-global',
                js: _$2imjs
            }, _$2ime;
        for (_$2ime in _$2im_this) {
            if (_$2im_this.hasOwnProperty(_$2ime) && ('', __r0 = $$mode, $$mode = 'public-params', __r1 = $$block, $$block = 'i-global', __r2 = $$elem, $$elem = _$2ime, __r3 = $318(__$ctx), $$mode = __r0, $$block = __r1, $$elem = __r2, '', __r3)) {
                _$2imjs[_$2ime] = _$2im_this[_$2ime];
            } else {
                undefined;
            }
        }
        return _$2imblock;
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
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-bem/i-bem.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-ecma/__object/i-ecma__object.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-ecma/__array/i-ecma__array.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-ecma/__function/i-ecma__function.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-bem/__internal/i-bem__internal.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-jquery/__cookie/i-jquery__cookie.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-jquery/__decodeuri/i-jquery__decodeuri.js*/;
/*borschik:include:../../../../libs/islands-romochka/desktop.blocks/i-bem/html/i-bem__html.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-ecma/__json/i-ecma__json.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-bem/__dom/i-bem__dom.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-ecma/__string/i-ecma__string.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-common/check-session/i-common__check-session.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-global/i-global.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-counter/i-counter.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-common/cookie/i-common__cookie.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-common/init/i-common__init.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-common/i-common.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-bem/__dom/_init/i-bem__dom_init_auto.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-ua/_interaction/i-ua_interaction_yes.js*/;
/*borschik:include:../../../../libs/islands-romochka/desktop.blocks/i-oframebust/i-oframebust.js*/;
/*borschik:include:../../../../libs/islands-romochka/desktop.blocks/i-oframebust/_type/i-oframebust_type_referrer.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-desktop/i-jquery/__leftclick/i-jquery__leftclick.js*/;
/*borschik:include:../../../../common.blocks/button/button.js*/;
/*borschik:include:../../../../desktop.blocks/button/button.js*/;
/*borschik:include:../../../../common.blocks/radiobox/radiobox.js*/;
/*borschik:include:../../../../common.blocks/radio-button/radio-button.js*/;
/*borschik:include:../../../../common.blocks/checkbox/checkbox.js*/;
/*borschik:include:../../../../common.blocks/check-button/check-button.js*/;
/*borschik:include:../../../../common.blocks/popup/popup.js*/;
/*borschik:include:../../../../common.blocks/popup/_autoclosable/popup_autoclosable_yes.js*/;
/*borschik:include:../../../../common.blocks/popup/_adaptive/popup_adaptive_yes.js*/;
/*borschik:include:../../../../common.blocks/popup/_animate/popup_animate_yes.js*/;
/*borschik:include:../../../../common.blocks/popup/__under/popup__under.js*/;
/*borschik:include:../../../../common.blocks/popup/_autosize/popup_autosize_yes.js*/;
/*borschik:include:../../../../common.blocks/select/select.js*/;
/*borschik:include:../../../../desktop.blocks/select/select.js*/;
/*borschik:include:../../../../common.blocks/select/__ui/select__ui.js*/;
/*borschik:include:../../../../desktop.blocks/select/__ui/select__ui.js*/;
/*borschik:include:../../../../common.blocks/select/__popup/select__popup.js*/;
/*borschik:include:../../../../common.blocks/slider/slider.js*/;
/*borschik:include:../../../../desktop.blocks/slider/slider.js*/;
/*borschik:include:../../../../common.blocks/slider/slider.examples/60-form.blocks/slider/slider.js*/;
/*borschik:include:../../../../common.blocks/slider/__ui/slider__ui.js*/;
/*borschik:include:../../../../desktop.blocks/slider/__ui/slider__ui.js*/;
/*borschik:include:../../../../common.blocks/slider/__math/slider__math.js*/;
/*borschik:include:../../../../common.blocks/slider/_orientation/slider_orientation_horiz.js*/;
/*borschik:include:../../../../common.blocks/input/input.js*/;
/*borschik:include:../../../../desktop.blocks/input/input.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-system/i-system.js*/;
/*borschik:include:../../../../common.blocks/input/__clear/input__clear.js*/;
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


BEM.I18N.lang('en');
