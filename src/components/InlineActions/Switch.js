var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import { useSelector } from 'react-redux';
import isEqual from 'lodash.isequal';
import { SelectionKinds as Kinds } from '../../store/ui/types';
import { getEditorUIStateAndViewIds, getInlineActionAnchorEl, getInlineActionKind, } from '../../store/ui/selectors';
import LinkActions from './LinkActions';
import AlignActions from './AlignActions';
import CalloutActions from './CalloutActions';
import TimeActions from './TimeActions';
import HeadingActions from './HeadingActions';
import EquationActions from './EquationActions';
export function useInlineActionProps() {
    var _a = useSelector(function (state) { return getEditorUIStateAndViewIds(state); }, isEqual), stateId = _a.stateId, viewId = _a.viewId;
    var kind = useSelector(function (state) { return getInlineActionKind(state); });
    var anchorEl = useSelector(function (state) { return getInlineActionAnchorEl(state); });
    return {
        stateId: stateId,
        viewId: viewId,
        kind: kind,
        anchorEl: anchorEl,
    };
}
var InlineActionSwitch = function () {
    var _a = useInlineActionProps(), stateId = _a.stateId, viewId = _a.viewId, kind = _a.kind, anchorEl = _a.anchorEl;
    return (React.createElement(React.Fragment, null,
        kind === Kinds.link && React.createElement(LinkActions, __assign({}, { stateId: stateId, viewId: viewId, anchorEl: anchorEl })),
        kind === Kinds.image && React.createElement(AlignActions, __assign({ showCaption: true }, { stateId: stateId, viewId: viewId, anchorEl: anchorEl })),
        kind === Kinds.iframe && React.createElement(AlignActions, __assign({}, { stateId: stateId, viewId: viewId, anchorEl: anchorEl })),
        kind === Kinds.callout && React.createElement(CalloutActions, __assign({}, { stateId: stateId, viewId: viewId, anchorEl: anchorEl })),
        kind === Kinds.heading && React.createElement(HeadingActions, __assign({}, { stateId: stateId, viewId: viewId, anchorEl: anchorEl })),
        kind === Kinds.equation && React.createElement(EquationActions, __assign({}, { stateId: stateId, viewId: viewId, anchorEl: anchorEl })),
        kind === Kinds.time && React.createElement(TimeActions, __assign({}, { stateId: stateId, viewId: viewId, anchorEl: anchorEl }))));
};
export default InlineActionSwitch;
//# sourceMappingURL=Switch.js.map