(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/FridayReminder.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FridayReminder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function FridayReminder() {
    _s();
    const [isFriday, setIsFriday] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FridayReminder.useEffect": ()=>{
            const today = new Date();
            // getDay() returns 5 for Friday (0=Sunday, 1=Monday, ..., 6=Saturday)
            if (today.getDay() === 5) {
                setIsFriday(true);
            }
        }
    }["FridayReminder.useEffect"], []);
    if (!isFriday) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-4 right-4 bg-indigo-600 text-white p-4 rounded-lg shadow-lg max-w-xs",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-semibold",
            children: "Lembrete: Nova aula disponível hoje! 🎉"
        }, void 0, false, {
            fileName: "[project]/src/components/FridayReminder.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/FridayReminder.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(FridayReminder, "vgxYFo6kmogJ3QyYRS7eHeezSBc=");
_c = FridayReminder;
var _c;
__turbopack_context__.k.register(_c, "FridayReminder");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_FridayReminder_tsx_ab4a1ffb._.js.map