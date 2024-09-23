'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var reactDom = require('react-dom');
var react = require('react');

var styles$6 = {"button":"test_button_1o8uy"};

var variants$1 = {"purple":"test_purple_1ju5e","gray":"test_gray_1ju5e","blue-light":"test_blue-light_1ju5e","error":"test_error_1ju5e","blue":"test_blue_1ju5e","orange":"test_orange_1ju5e","success":"test_success_1ju5e","warning":"test_warning_1ju5e","indigo":"test_indigo_1ju5e","dark-gray":"test_dark-gray_1ju5e"};

var sizes = {"sm":"test_sm_1vz0h","md":"test_md_1vz0h","lg":"test_lg_1vz0h"};

function Badge({ children, variant = "gray", size = "sm", disabled, className, ...props }) {
    return (jsxRuntime.jsx("button", { disabled: disabled, className: [
            styles$6.button,
            size ? sizes[size] : "",
            variant ? variants$1[variant] : "",
            className ? className : "",
        ].join(" "), ...props, children: children }));
}

var styles$5 = {"button":"test_button_1ay5g","focus-visible":"test_focus-visible_1ay5g","loading_overlay":"test_loading_overlay_1ay5g","size__small":"test_size__small_1ay5g","size__medium":"test_size__medium_1ay5g","size__large":"test_size__large_1ay5g"};

var variants = {"variant__primary":"test_variant__primary_vbrcf","loading":"test_loading_vbrcf","variant__success":"test_variant__success_vbrcf","variant__secondary":"test_variant__secondary_vbrcf","variant__outline":"test_variant__outline_vbrcf","variant__danger":"test_variant__danger_vbrcf","variant__text":"test_variant__text_vbrcf"};

const Button = ({ children, variant = "primary", size = "large", type = "button", disabled, loading, className, ...props }) => {
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [loading && jsxRuntime.jsx("div", { className: styles$5.loading_overlay, children: " " }), jsxRuntime.jsx("button", { type: type, disabled: loading || disabled, className: [
                    styles$5.button,
                    styles$5[`size__${size}`],
                    variants[`variant__${variant}`],
                    className ? className : "",
                    loading ? variants.loading : "",
                ].join(" "), ...props, children: children })] }));
};

var styles$4 = {"container":"test_container_7brub","fromTop":"test_fromTop_7brub","fromTopAnimation":"test_fromTopAnimation_7brub","fromBottom":"test_fromBottom_7brub","fromBottomAnimation":"test_fromBottomAnimation_7brub"};

function getElementPosition(element) {
    let rect = element.getBoundingClientRect(); // Get the position of the element in relation to the viewport
    let scrollLeft = document.documentElement.scrollLeft;
    let scrollTop = document.documentElement.scrollTop;
    let absoluteLeft = rect.left + scrollLeft;
    let absoluteTop = rect.top + scrollTop;
    let absoluteRight = rect.right + scrollLeft;
    let absoluteBottom = rect.bottom + scrollTop;
    return {
        top: absoluteTop,
        left: absoluteLeft,
        right: absoluteRight,
        bottom: absoluteBottom,
    };
}
const DEFAULT_PADDING = 16;
const Container = ({ children, className }) => {
    const triggerRef = react.useRef(null);
    const menuRef = react.useRef(null);
    const [isOpen, setIsOpen] = react.useState(false);
    const handleToggle = react.useCallback(() => {
        console.log("toggle chamado");
        setIsOpen((v) => !v);
    }, []);
    react.useEffect(() => {
        if (isOpen && triggerRef.current && menuRef.current) {
            const { top, left } = getElementPosition(triggerRef.current);
            const { height, width } = triggerRef.current?.getBoundingClientRect();
            const { height: menuHeight, width: menuWidth } = menuRef.current?.getBoundingClientRect();
            const documentWidth = document.documentElement.scrollWidth;
            const documentHeight = document.documentElement.scrollHeight;
            const menuTop = top + height;
            const menuLeft = left - width / 2;
            const menuRight = menuLeft + menuWidth;
            const menuBottom = menuTop + menuHeight;
            let newTop = top + height;
            let newLeft = left + width / 2 - menuWidth / 2;
            if (menuRight > documentWidth) {
                newLeft = documentWidth - menuWidth - DEFAULT_PADDING;
            }
            if (menuLeft < 0) {
                newLeft = DEFAULT_PADDING;
            }
            if (menuBottom > documentHeight) {
                newTop = top - menuHeight;
                menuRef.current.classList.add(styles$4.fromBottom);
            }
            else {
                menuRef.current.classList.add(styles$4.fromTop);
            }
            menuRef.current.style.top = `${newTop}px`;
            menuRef.current.style.left = `${newLeft}px`;
            menuRef.current.style.minWidth = `${width}px`;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);
    react.useEffect(() => {
        const handleClick = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener("mousedown", handleClick);
        }
        else {
            document.removeEventListener("mousedown", handleClick);
        }
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [isOpen]);
    const containerStyles = [styles$4.container, className].join(" ");
    const menuChild = react.useMemo(() => {
        let _child = null;
        react.Children.toArray(children).find((c) => {
            const child = c;
            const childName = child.type?.displayName;
            if (childName === "Menu")
                _child = child;
        });
        return _child;
    }, [children]);
    const triggerChild = react.useMemo(() => {
        let _child = null;
        react.Children.toArray(children).forEach((c) => {
            const child = c;
            const childName = child.type?.displayName;
            if (childName === "Trigger")
                _child = child;
        });
        return _child;
    }, [children]);
    const isEmpty = react.useMemo(() => {
        return (menuChild?.props?.children?.filter?.((c) => !!c).length === 0);
    }, [menuChild]);
    if (isEmpty)
        return null;
    console.log(isOpen);
    return (jsxRuntime.jsxs("div", { className: containerStyles, children: [triggerChild &&
                react.cloneElement(triggerChild, {
                    onClick: handleToggle,
                    ref: triggerRef,
                    isOpen,
                }), isOpen &&
                menuChild &&
                reactDom.createPortal(react.cloneElement(menuChild, {
                    ref: menuRef,
                    onClose: () => {
                        console.log("close chamado");
                        setIsOpen(false);
                    },
                }), document.body)] }));
};

var styles$3 = {"divider":"test_divider_fxeg2"};

const Divider = () => {
    return jsxRuntime.jsx("div", { className: styles$3.divider });
};

var styles$2 = {"item":"test_item_393y2"};

const Item = ({ className, ...props }) => {
    const itemStyles = [styles$2.item, className].join(" ");
    return jsxRuntime.jsx("button", { className: itemStyles, ...props });
};

var styles$1 = {"menu":"test_menu_1g4uz"};

function concatStyles(styles) {
    return styles.join(" ").replace(/\s+/, " ").trim();
}

const Menu = react.forwardRef(({ children, className, ...props }, ref) => {
    return (jsxRuntime.jsx("div", { ref: ref, className: concatStyles([styles$1.menu, className]), ...props, children: children }));
});
Menu.displayName = "Menu";

var styles = {"wrapper":"test_wrapper_srnv7","isOpen":"test_isOpen_srnv7"};

const Trigger = react.forwardRef(({ children, isOpen, ...props }, ref) => {
    if (typeof children === "function") {
        return children(props, ref);
    }
    return (jsxRuntime.jsx("button", { ref: ref, className: concatStyles([styles.wrapper, isOpen ? styles.isOpen : ""]), ...props, children: children }));
});
Trigger.displayName = "Trigger";

const Dropdown = {
    Container,
    Trigger,
    Menu,
    Divider,
    Item,
};

var global = {"bg-indigo-50":"bg-indigo-50","bg-indigo-100":"bg-indigo-100","bg-indigo-200":"bg-indigo-200","bg-indigo-300":"bg-indigo-300","bg-indigo-400":"bg-indigo-400","bg-indigo-500":"bg-indigo-500","bg-indigo-600":"bg-indigo-600","bg-indigo-700":"bg-indigo-700","bg-indigo-800":"bg-indigo-800","bg-indigo-900":"bg-indigo-900","bg-indigo-950":"bg-indigo-950","hover:bg-indigo-50":"hover:bg-indigo-50","hover:bg-indigo-100":"hover:bg-indigo-100","hover:bg-indigo-200":"hover:bg-indigo-200","hover:bg-indigo-300":"hover:bg-indigo-300","hover:bg-indigo-400":"hover:bg-indigo-400","hover:bg-indigo-500":"hover:bg-indigo-500","hover:bg-indigo-600":"hover:bg-indigo-600","hover:bg-indigo-700":"hover:bg-indigo-700","hover:bg-indigo-800":"hover:bg-indigo-800","hover:bg-indigo-900":"hover:bg-indigo-900","hover:bg-indigo-950":"hover:bg-indigo-950","text-indigo-50":"text-indigo-50","text-indigo-100":"text-indigo-100","text-indigo-200":"text-indigo-200","text-indigo-300":"text-indigo-300","text-indigo-400":"text-indigo-400","text-indigo-500":"text-indigo-500","text-indigo-600":"text-indigo-600","text-indigo-700":"text-indigo-700","text-indigo-800":"text-indigo-800","text-indigo-900":"text-indigo-900","text-indigo-950":"text-indigo-950","hover:text-indigo-50":"hover:text-indigo-50","hover:text-indigo-100":"hover:text-indigo-100","hover:text-indigo-200":"hover:text-indigo-200","hover:text-indigo-300":"hover:text-indigo-300","hover:text-indigo-400":"hover:text-indigo-400","hover:text-indigo-500":"hover:text-indigo-500","hover:text-indigo-600":"hover:text-indigo-600","hover:text-indigo-700":"hover:text-indigo-700","hover:text-indigo-800":"hover:text-indigo-800","hover:text-indigo-900":"hover:text-indigo-900","hover:text-indigo-950":"hover:text-indigo-950","group":"group","group-hover:text-indigo-50":"group-hover:text-indigo-50","group-hover:text-indigo-100":"group-hover:text-indigo-100","group-hover:text-indigo-200":"group-hover:text-indigo-200","group-hover:text-indigo-300":"group-hover:text-indigo-300","group-hover:text-indigo-400":"group-hover:text-indigo-400","group-hover:text-indigo-500":"group-hover:text-indigo-500","group-hover:text-indigo-600":"group-hover:text-indigo-600","group-hover:text-indigo-700":"group-hover:text-indigo-700","group-hover:text-i":"group-hover:text-i","border-indigo-50":"border-indigo-50","border-indigo-100":"border-indigo-100","border-indigo-200":"border-indigo-200","border-indigo-300":"border-indigo-300","border-indigo-400":"border-indigo-400","border-indigo-500":"border-indigo-500","border-indigo-600":"border-indigo-600","border-indigo-700":"border-indigo-700","border-indigo-800":"border-indigo-800","border-indigo-900":"border-indigo-900","border-indigo-950":"border-indigo-950","group-hover:border-indigo-50":"group-hover:border-indigo-50","group-hover:border-indigo-100":"group-hover:border-indigo-100","group-hover:border-indigo-200":"group-hover:border-indigo-200","group-hover:border-indigo-300":"group-hover:border-indigo-300","group-hover:border-indigo-400":"group-hover:border-indigo-400","group-hover:border-indigo-500":"group-hover:border-indigo-500","group-hover:border-indigo-600":"group-hover:border-indigo-600","group-hover:border-indigo-700":"group-hover:border-indigo-700","group-hover:border-indigo-800":"group-hover:border-indigo-800","group-hover:border-indigo-900":"group-hover:border-indigo-900","group-hover:border-indigo-950":"group-hover:border-indigo-950","hover:border-indigo-50":"hover:border-indigo-50","hover:border-indigo-100":"hover:border-indigo-100","hover:border-indigo-200":"hover:border-indigo-200","hover:border-indigo-300":"hover:border-indigo-300","hover:border-indigo-400":"hover:border-indigo-400","hover:border-indigo-500":"hover:border-indigo-500","hover:border-indigo-600":"hover:border-indigo-600","hover:border-indigo-700":"hover:border-indigo-700","hover:border-indigo-800":"hover:border-indigo-800","hover:border-indigo-900":"hover:border-indigo-900","hover:border-indigo-950":"hover:border-indigo-950","divide-indigo-50":"divide-indigo-50","divide-indigo-100":"divide-indigo-100","divide-indigo-200":"divide-indigo-200","divide-indigo-300":"divide-indigo-300","divide-indigo-400":"divide-indigo-400","divide-indigo-500":"divide-indigo-500","divide-indigo-600":"divide-indigo-600","divide-indigo-700":"divide-indigo-700","divide-indigo-800":"divide-indigo-800","divide-indigo-900":"divide-indigo-900","divide-indigo-950":"divide-indigo-950","hover:divide-indigo-50":"hover:divide-indigo-50","hover:divide-indigo-100":"hover:divide-indigo-100","hover:divide-indigo-200":"hover:divide-indigo-200","hover:divide-indigo-300":"hover:divide-indigo-300","hover:divide-indigo-400":"hover:divide-indigo-400","hover:divide-indigo-500":"hover:divide-indigo-500","hover:divide-indigo-600":"hover:divide-indigo-600","hover:divide-indigo-700":"hover:divide-indigo-700","hover:divide-indigo-800":"hover:divide-indigo-800","hover:divide-indigo-900":"hover:divide-indigo-900","hover:divide-indigo-950":"hover:divide-indigo-950","ring-indigo-50":"ring-indigo-50","ring-indigo-100":"ring-indigo-100","ring-indigo-200":"ring-indigo-200","ring-indigo-300":"ring-indigo-300","ring-indigo-400":"ring-indigo-400","ring-indigo-500":"ring-indigo-500","ring-indigo-600":"ring-indigo-600","ring-indigo-700":"ring-indigo-700","ring-indigo-800":"ring-indigo-800","ring-indigo-900":"ring-indigo-900","ring-indigo-950":"ring-indigo-950","focus:ring-indigo-50":"focus:ring-indigo-50","focus:ring-indigo-100":"focus:ring-indigo-100","focus:ring-indigo-200":"focus:ring-indigo-200","focus:ring-indigo-300":"focus:ring-indigo-300","focus:ring-indigo-400":"focus:ring-indigo-400","focus:ring-indigo-500":"focus:ring-indigo-500","focus:ring-indigo-600":"focus:ring-indigo-600","focus:ring-indigo-700":"focus:ring-indigo-700","focus:ring-indigo-800":"focus:ring-indigo-800","focus:ring-indigo-900":"focus:ring-indigo-900","hover:ring-indigo-50":"hover:ring-indigo-50","hover:ring-indigo-100":"hover:ring-indigo-100","hover:ring-indigo-200":"hover:ring-indigo-200","hover:ring-indigo-300":"hover:ring-indigo-300","hover:ring-indigo-400":"hover:ring-indigo-400","hover:ring-indigo-500":"hover:ring-indigo-500","hover:ring-indigo-600":"hover:ring-indigo-600","hover:ring-indigo-700":"hover:ring-indigo-700","hover:ring-indigo-800":"hover:ring-indigo-800","hover:ring-indigo-900":"hover:ring-indigo-900","hover:ring-indigo-950":"hover:ring-indigo-950","shadow-indigo-50":"shadow-indigo-50","shadow-indigo-100":"shadow-indigo-100","shadow-indigo-200":"shadow-indigo-200","shadow-indigo-300":"shadow-indigo-300","shadow-indigo-400":"shadow-indigo-400","shadow-indigo-500":"shadow-indigo-500","shadow-indigo-600":"shadow-indigo-600","shadow-indigo-700":"shadow-indigo-700","shadow-indigo-800":"shadow-indigo-800","shadow-indigo-900":"shadow-indigo-900","shadow-indigo-950":"shadow-indigo-950","hover:shadow-indigo-50":"hover:shadow-indigo-50","hover:shadow-indigo-100":"hover:shadow-indigo-100","hover:shadow-indigo-200":"hover:shadow-indigo-200","hover:shadow-indigo-300":"hover:shadow-indigo-300","hover:shadow-indigo-400":"hover:shadow-indigo-400","hover:shadow-indigo-500":"hover:shadow-indigo-500","hover:shadow-indigo-600":"hover:shadow-indigo-600","hover:shadow-indigo-700":"hover:shadow-indigo-700","hover:shadow-indigo-800":"hover:shadow-indigo-800","hover:shadow-indigo-900":"hover:shadow-indigo-900","hover:shadow-indigo-950":"hover:shadow-indigo-950","light-theme":"light-theme","dark-theme":"dark-theme"};

exports.Badge = Badge;
exports.Button = Button;
exports.Dropdown = Dropdown;
exports.GlobalStyles = global;
