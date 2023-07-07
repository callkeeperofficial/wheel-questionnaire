
export const multiPick = (selectedIds: number[], setSelectedIds: Function, key: number) => {
    if (~selectedIds.indexOf(key)) {
        selectedIds.splice(selectedIds.indexOf(key), 1);
        setSelectedIds([...selectedIds]);
    } else {
        selectedIds.push(key);
        setSelectedIds([...selectedIds]);
    }
};

export const selectItem = (selectedIds: number[], setSelectedIds: Function, key: number) => () => {
    requestAnimationFrame(() => {
        multiPick(selectedIds, setSelectedIds, key);
    });
};

export const isSelected = (selectedIds: number[], key: number) => selectedIds.includes(key);

const set = (selectedIds: number[], setSelectedIds: Function, key: number, single = false) => () => {
    if (single) {
        setSelectedIds([key]);
    } else {
        multiPick(selectedIds, setSelectedIds, key);
    }
};

const flush = (setSelectedIds: Function) => setSelectedIds([]);

export const Pick = (selectedIds: number[], setSelectedIds: Function) => ({
    multiPick: multiPick.bind(this, selectedIds, setSelectedIds),
    selectItem: selectItem.bind(this, selectedIds, setSelectedIds),
    isSelected: isSelected.bind(this, selectedIds),
    set: set.bind(this, selectedIds, setSelectedIds),
    flush: flush.bind(this, setSelectedIds),
    getSelected: () => selectedIds,
});
