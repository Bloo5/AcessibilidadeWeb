import React from "react";
//import { useLocation } from "react-router";
import { NavLink, useLocation } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";


export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu &&
          "menu-item-active"} menu-item-open menu-item-not-hightlighted`
      : "";
  };


  return (
    <>
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/* Components */}
        {/* begin::section */}
        <li className="menu-section ">
          <h4 style={{color: 'white'}} className="menu-text ">Menu</h4>
          <i className="menu-icon flaticon-more-v2"></i>
        </li>
        {/* end:: section */}
        {/*begin::1 Level*/}


        <li className={`menu-item ${getMenuItemActive("/materia", false)}`} aria-haspopup="true" >
          <NavLink className="menu-link" to="/materia">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")} />
            </span>
            <span className="menu-text">Matérias</span>
          </NavLink>
        </li>
        <li className={`menu-item ${getMenuItemActive(`/entregas`, false)}`} aria-haspopup="true" >
          <NavLink className="menu-link" to={`/entregas`}>
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Files/Folder.svg")} />
            </span>
            <span className="menu-text">Entregas</span>
          </NavLink>
        </li>
        <li className={`menu-item ${getMenuItemActive("/nota", false)}`} aria-haspopup="true" >
          <NavLink className="menu-link" to="/nota">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Files/Selected-file.svg")} />
            </span>
            <span className="menu-text">Notas</span>
          </NavLink>
        </li>


        {/*end::1 Level*/}

        {/*end::1 Level*/}
      </ul>

      {/* end::Menu Nav */}
    </>
  );
}
