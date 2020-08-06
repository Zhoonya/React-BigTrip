import {FILTER_PARAMETER} from "./const";

export const filterPoints = (points, filterParameter) => {
    const now = new Date;
    switch (filterParameter) {
        case FILTER_PARAMETER.future:
            return points.slice().filter((point) => {
                return new Date(point.date_from) > now;
            });
        case FILTER_PARAMETER.past:
            return points.slice().filter((point) => {
                return new Date(point.date_to) < now;
            });
        default:
            return points;
    }
};
