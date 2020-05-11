import {createSelector} from 'reselect';

const selctDirectory = state => state.directory;

export const selectDirectorySections = createSelector(
    [selctDirectory],
    directory => directory.sections
)