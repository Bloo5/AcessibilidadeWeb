import React, {useMemo} from "react";
import objectPath from "object-path";

import {useHtmlClassService} from "../../_core/MetronicLayout";

export function HeaderMobile() {
  const uiService = useHtmlClassService();

  const layoutProps = useMemo(() => {
    return {
      headerLogo: uiService.getStickyLogo(),
      asideDisplay: objectPath.get(uiService.config, "aside.self.display"),
      headerMenuSelfDisplay:
          objectPath.get(uiService.config, "header.menu.self.display") === true,
      headerMobileCssClasses: uiService.getClasses("header_mobile", true),
      headerMobileAttributes: uiService.getAttributes("header_mobile")
    };
  }, [uiService]);

  return (
      <>
        {/*begin::Header Mobile*/}
        <div
            id="kt_header_mobile"
            className={`header-mobile d-flex justify-content-end ${layoutProps.headerMobileCssClasses}`}
            {...layoutProps.headerMobileAttributes}
        >

          {/*begin::Toolbar*/}
          <div className="d-flex align-items-center">
            {layoutProps.asideDisplay && (
                <>
                  {/*begin::Aside Mobile Toggle*/}
                  <button className="btn p-0 burger-icon burger-icon-left"  id="kt_aside_mobile_toggle">
                    Menu de conteudo<span/>
                  </button>
                  {/*end::Aside Mobile Toggle*/}
                </>
            )}

            {layoutProps.headerMenuSelfDisplay && (
                <>
                  {/*begin::Header Menu Mobile Toggle*/}
                  <button className="btn p-0 burger-icon ml-4" alt="Menus" id="kt_header_mobile_toggle">
                    Lista de Menus<span/>
                  </button>
                  {/*end::Header Menu Mobile Toggle*/}
                </>
            )}

            {/*begin::Topbar Mobile Toggle*/}

            {/*end::Topbar Mobile Toggle*/}
          </div>
          {/*end::Toolbar*/}
        </div>
        {/*end::Header Mobile*/}
      </>
  );
}
