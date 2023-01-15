import { STUDENTS_DATA } from "../../config/mock-up-data"

export const getHomeData = async (page) => {
    const limit = 10;
    return (STUDENTS_DATA?.slice((page - 1) * limit, page * limit));
}