import React, { Suspense } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
import { DashboardPage } from "./pages/DashboardPage";
import Perfil from "./pages/Perfil/Perfil"
import Nota from "./pages/Notas/Notas"
import Materias from "./pages/Matérias/Matéria"
import Documentos from "./pages/Documentos/Documentos"
import Aulas from "./pages/Aulas/Aulas"
import FaleConosco from "./pages/FaleConosco/FaleConosco"
import Entregas from "./pages/Entregas/Entregas"





export default function BasePage() {
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/dashboard" />
        }
        <ContentRoute path="/dashboard" component={DashboardPage} />
        <ContentRoute path="/builder" component={BuilderPage} />
        <Route exact path="/perfil" component={Perfil} />
        <Route path="/nota" component={Nota} />
        <Route path="/materia" component={Materias} />
        <Route path="/materias/documentos/:codigo" component={Documentos} />
        <Route path="/materias/aulas/:codigo" component={Aulas} />
        <Route path="/fale-conosco" component={FaleConosco} />
        <Route path="/entregas" component={Entregas} />







        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}
