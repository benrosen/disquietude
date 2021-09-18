import { useRouteMatch } from "react-router";

export default () => (useRouteMatch("/fleeting/:seed?") ? true : false);
