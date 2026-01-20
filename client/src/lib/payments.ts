export const parseNullableNumber = (val: string | number | undefined) => {
    const num = Number(val);
    return !val || num === 0 ? null : num;
};