// import errorIcon from "../../assets/icons/error-icon.svg";
import PropTypes from "prop-types";
import caret from "../../assets/chevron-down.svg";
import { useCallback, useEffect, useRef, useState } from "react";

const Select = ({
    name = "",
    value,
    label = "",
    borders = true,
    placeholder = "",
    inBundle = false,
    optionsArray = [],
    labelStyles = {},
    inputStyles = {},
    absolute = true,
    changeHandler,
    blurHandler,
    focusHandler,
    mouseEnterHandler,
    mouseLeaveHandler,
    disabled = false,
    errMsg = "",
    ...props
}) => {

    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [optionsOpen, setOptionsOpen] = useState(false);
    const [dropdownPosition, setDropdownPosition] = useState("bottom");
    const selectRef = useRef(null);
    const selectWrapRef = useRef(null);

    const toggleOptions = () => {
        setOptionsOpen((prevState) => !prevState);
    }

    const handleClick = (e) => {
        e.preventDefault();

        const target = e.currentTarget;
        const coordinates = target.getBoundingClientRect();
        const { bottom } = coordinates;

        if (bottom + 300 > window.innerHeight) {
            setDropdownPosition("top");
        } else {
            setDropdownPosition("bottom");
        }
        toggleOptions();
    }

    const handleKeyup = (e) => {
        const target = e.currentTarget;
        e.preventDefault();
        e.stopPropagation();
        if (e.code === '13') {
            console.log("13")
          target.click();
        }
    };

    const handleOptionsClick = (e) => {
        const target = e.currentTarget;
        const newValue = target.dataset.value;
        const select = selectRef.current;
        
        if (select && newValue) {
            select.value = newValue;

            toggleOptions();
            
            if (changeHandler) {
                // Call the changeHandler with the new value
                changeHandler({
                    target: {name, value: newValue},
                });
            }
        }
        toggleOptions();
    }

    const handleFocus = (e) => {
        setIsFocused(true);
        focusHandler ? focusHandler(e) : null;
    }

    const handleBlur = (e) => {
        setIsFocused(false);
        blurHandler ? blurHandler(e) : null;
    }

    const handleMouseEnter = (e) => {
        setIsHovered(true);
        mouseEnterHandler ? mouseEnterHandler(e) : null;
    }

    const handleMouseLeave = (e) => {
        setIsHovered(false);
        mouseLeaveHandler ? mouseLeaveHandler(e) : null;
    }

    const handleClickOutsideSelectWrap = useCallback((e) => {
        const target = e.target;

        if (optionsOpen && selectWrapRef.current) {
            if (!selectWrapRef.current.contains(target)) {
                setOptionsOpen(false);
            }
        }
    }, [optionsOpen])

    useEffect(() => {
        document.body.addEventListener("click", handleClickOutsideSelectWrap);

        return () => document.body.removeEventListener("click", handleClickOutsideSelectWrap);
    }, [handleClickOutsideSelectWrap])

    return (
        <label 
            ref={selectWrapRef}
            className={`select-wrap ${errMsg ? "error" : ""} ${isFocused ? "is-focused" : ""} ${disabled ? "is-disabled" : ""} ${isHovered ? "is-hovered" : ""}`}
        >
            {label ? (
                <span className="select-label" style={labelStyles}>
                    {label}
                </span>
            ) : null
            }
            <div className="select" tabIndex={1}>
                <div className={`header ${borders ? "has-borders" : ""} ${inBundle ? "in-bundle" : ""}`} ref={selectRef} onClick={handleClick}>
                    <span className={`select-text ${value ? "" : "placeholder"}`}>
                        {optionsArray.find((item) => item.value == value)?.text || placeholder}
                    </span>
                    <img 
                        src={caret}
                        alt=""
                        width={24}
                        height={24}
                    />
                    <select
                        name={name}
                        className=""
                        value={value}
                        disabled={disabled}
                        style={inputStyles}
                        onChange={(e) => {console.log("Target value: ", e.target.value); changeHandler ? changeHandler(e) : null}}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        tabIndex={-1}
                        {...props}
                    >
                        <option value="" disabled></option>
                        {optionsArray.length ? (
                            optionsArray.map((item, idx) => (
                                <option 
                                    key={idx} 
                                    value={item.value}
                                >
                                    {item.text}
                                </option>
                            ))
                        ) : null}
                    </select>
                </div>
                <datalist className={`options-dropdown ${optionsOpen ? "grid" : "hidden"}
                    ${absolute ? `absolute z-50 ${dropdownPosition === "bottom" ? `${borders ? "top-[60px]" : "top-[40px]"}` : `${borders ? "bottom-[60px]" : "bottom-[40px]"}`}` : "relative"}`
                    // ${optionsOpen ? "grid opacity-100 max-h-[150px] p-3" : "hidden opacity-0 max-h-0"}
                }
                >
                    {placeholder ? <div tabIndex={-1} className="bg-grey-d9 text-grey-89 px-10 py-2">{placeholder}</div> : null}
                    {optionsArray.length ? (
                        optionsArray.map((item, idx) => (
                            <div 
                                key={idx}
                                tabIndex={idx + 1}
                                data-value={item.value} 
                                onClick={handleOptionsClick}
                                onKeyUp={handleKeyup}
                                className={`option ${item.value == value ? "bg-[#DAE9F2]" : ""} text-grey-89`}
                            >
                                <div className="px-10 py-[15px]">{item.text}</div>
                            </div>
                        ))
                    ) : null}
                </datalist>
            </div>
        
            {/* {errMsg ? (
                <div className="input-error flex items-center gap-2">
                    <img src={errorIcon} alt="" className="" />
                    <span className="text-sm lg:text-base text-error">
                        {errMsg}
                    </span>
                </div>
            ) : null
            } */}
        </label>
    )
}

Select.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    borders: PropTypes.bool,
    placeholder: PropTypes.string,
    inBundle: PropTypes.bool,
    optionsArray: PropTypes.array,
    labelStyles: PropTypes.object,
    inputStyles: PropTypes.object,
    absolute: PropTypes.bool,
    changeHandler: PropTypes.func,
    blurHandler: PropTypes.func,
    focusHandler: PropTypes.func,
    mouseEnterHandler: PropTypes.func,
    mouseLeaveHandler: PropTypes.func,
    disabled: PropTypes.bool,
    errMsg: PropTypes.string,
}

export default Select;