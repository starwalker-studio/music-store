export function isProductCheckedByBrand(checked) {
    return checked.length === 0;
}

export function getDecimalPrice(num) {
    const decimalFloat = "00";
    if (Number.isInteger(num)) {
        return decimalFloat;
    }

    const decimalStr = num.toString().split('.')[1];
    return Number(decimalStr);
}

export function setComaToPrice(num) {
    return Math.trunc(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function isCount(sizeCatalog) {
    return sizeCatalog !== 0;
}

export function pageSize(size, limit) {
    return Math.ceil(size / limit);
}

export function isNextPage(offset, totalPages) {
    return offset < totalPages - 1;
}

export function isOffsetEqualCeroOrNextpage(offset, totalPages) {
    return offset < totalPages - 1 || offset === 0;
}

export function isNotOffsetEqualCeroOrNextpage(offset, totalPages) {
    return !offset < totalPages - 1 || offset === 0;
}

export function displayPages(offset, totalPages) {
    return `Page ${offset + 1} of ${totalPages}`;
}

export function handleToggle(value, checked) {

    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
        newChecked.push(value);
    } else {
        newChecked.splice(currentIndex, 1);
    }
    return newChecked;

}