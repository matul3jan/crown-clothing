import { createSelector } from 'reselect';

const categoryReducer = (state) => state.category;
const selectCategories = createSelector([categoryReducer], (slice) => slice.categories);

export const selectCategoriesMap = createSelector([selectCategories],
    (categories) => categories.reduce((acc, category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})
);