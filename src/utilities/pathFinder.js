const isActiveRoute = (pathString, route) => {
    if (pathString.includes(route)) {
        return true;
    } else {
        return false;
    }
};
export default isActiveRoute;
