import { navigationRoutes } from "@/config/site"

const groups = navigationRoutes.flatMap(object => object.routes.map(routeObject => routeObject.href)).map((x) => (x.split('/')[1]))

export type NavGroups = typeof groups[number]
