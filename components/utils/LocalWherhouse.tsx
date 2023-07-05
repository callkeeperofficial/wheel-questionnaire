export const saveSegments = (segments: number[]) => {
    localStorage.setItem("segments", JSON.stringify(segments));
};

export const loadSegments = () => {
    const item = localStorage.getItem("segments");

    if (item) {
        return JSON.parse(item);
    }
};