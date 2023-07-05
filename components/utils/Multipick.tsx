
export const multiPick = (selectedIds, setSelectedIds, key) => {
    if (~selectedIds.indexOf(key)) {
        selectedIds.splice(selectedIds.indexOf(key), 1);
        setSelectedIds([...selectedIds]);
    } else {
        selectedIds.push(key);
        setSelectedIds([...selectedIds]);
    }
};

export const selectItem = (selectedIds, setSelectedIds, key) => () => {
    requestAnimationFrame(() => {
        multiPick(selectedIds, setSelectedIds, key);
    });
};

export const isSelected = (selectedIds, key) => selectedIds.includes(key);

const set = (selectedIds, setSelectedIds, key, single = false) => () => {
    if (single) {
        setSelectedIds([key]);
    } else {
        multiPick(selectedIds, setSelectedIds, key);
    }
};

const flush = (setSelectedIds) => setSelectedIds([]);

export const Pick = (selectedIds, setSelectedIds) => ({
    multiPick: multiPick.bind(this, selectedIds, setSelectedIds),
    selectItem: selectItem.bind(this, selectedIds, setSelectedIds),
    isSelected: isSelected.bind(this, selectedIds),
    set: set.bind(this, selectedIds, setSelectedIds),
    flush: flush.bind(this, setSelectedIds),
    getSelected: () => selectedIds,
});
