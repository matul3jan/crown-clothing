import { createAction } from "../../util/reducer/reducer.util";
import { CATEGORY_ACTION_TYPES } from "./category.types"

export const fetchCategoriesStart =
    () => createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess =
    (categories) => createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories);

export const fetchCategoriesFailed =
    (error) => createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);