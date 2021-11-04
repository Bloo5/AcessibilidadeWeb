/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";

//import { useLocation } from "react-router";
import { NavLink,/* Link,*/ useLocation } from "react-router-dom";
//import SVG from "react-inlinesvg";
import { /*toAbsoluteUrl,*/ checkIsActive } from "../../../../_helpers";


export function HeaderMenu({ layoutProps }) {
    const location = useLocation();
    const getMenuItemActive = (url) => {
        return checkIsActive(location, url) ? "menu-item-active" : "";
    }
    


    return <div
        id="kt_header_menu"
        className={`header-menu header-menu-mobile ${layoutProps.ktMenuClasses}`}
        {...layoutProps.headerMenuAttributes}
    >
        {/*begin::Header Nav*/}
        <ul className={`menu-nav ${layoutProps.ulClasses}`}>
            {/*begin::1 Level*/}
            <li className={`menu-item menu-item-rel ${getMenuItemActive(`/dashboard`)}`}>
                <NavLink  className="menu-link" to={`/dashboard`}>
                    <span style={{color: 'black'}} className="menu-text">Menu</span>
                    {layoutProps.rootArrowEnabled && (<i className="menu-arrow" />)}
                </NavLink>
            </li>

            <li className={`menu-item menu-item-rel ${getMenuItemActive(`/perfil`)}`}>
                <NavLink className="menu-link" to={`/perfil`}>
                    <span style={{color: 'black'}} className="menu-text">Perfil</span>
                    {layoutProps.rootArrowEnabled && (<i className="menu-arrow" />)}
                </NavLink>
            </li>

            <li className={`menu-item menu-item-rel ${getMenuItemActive('/fale-conosco')}`}>
                <NavLink className="menu-link" to="/fale-conosco">
                    <span style={{color: 'black'}} className="menu-text">Fale Conosco</span>
                    {layoutProps.rootArrowEnabled && (<i className="menu-arrow" />)}
                </NavLink>
            </li>
            {/*end::1 Level*/}
        </ul>
        {/*end::Header Nav*/}
    </div>;
}
