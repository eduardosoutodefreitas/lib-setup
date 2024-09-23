'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var reactDom = require('react-dom');
var react = require('react');

var styles$6 = {"button":"test_button_1ay5g","focus-visible":"test_focus-visible_1ay5g","loading_overlay":"test_loading_overlay_1ay5g","size__small":"test_size__small_1ay5g","size__medium":"test_size__medium_1ay5g","size__large":"test_size__large_1ay5g"};

var variants$1 = {"variant__primary":"test_variant__primary_vbrcf","loading":"test_loading_vbrcf","variant__success":"test_variant__success_vbrcf","variant__secondary":"test_variant__secondary_vbrcf","variant__outline":"test_variant__outline_vbrcf","variant__danger":"test_variant__danger_vbrcf","variant__text":"test_variant__text_vbrcf"};

const Button = ({ children, variant = "primary", size = "large", type = "button", disabled, loading, className, ...props }) => {
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [loading && jsxRuntime.jsx("div", { className: styles$6.loading_overlay, children: " " }), jsxRuntime.jsx("button", { type: type, disabled: loading || disabled, className: [
                    styles$6.button,
                    styles$6[`size__${size}`],
                    variants$1[`variant__${variant}`],
                    className ? className : "",
                    loading ? variants$1.loading : "",
                ].join(" "), ...props, children: children })] }));
};

var styles$5 = {"button":"test_button_1o8uy"};

var variants = {"purple":"test_purple_1ju5e","gray":"test_gray_1ju5e","blue-light":"test_blue-light_1ju5e","error":"test_error_1ju5e","blue":"test_blue_1ju5e","orange":"test_orange_1ju5e","success":"test_success_1ju5e","warning":"test_warning_1ju5e","indigo":"test_indigo_1ju5e","dark-gray":"test_dark-gray_1ju5e"};

var sizes = {"sm":"test_sm_1vz0h","md":"test_md_1vz0h","lg":"test_lg_1vz0h"};

function Badge({ children, variant = "gray", size = "sm", disabled, className, ...props }) {
    return (jsxRuntime.jsx("button", { disabled: disabled, className: [
            styles$5.button,
            size ? sizes[size] : "",
            variant ? variants[variant] : "",
            className ? className : "",
        ].join(" "), ...props, children: children }));
}

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

exports.Badge = Badge;
exports.Button = Button;
exports.Dropdown = Dropdown;
