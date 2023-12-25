function calculateExperience(): number {
    const currentDate = new Date();
    const DOJ = new Date(2020, 8);
    let differeceInYears: number = currentDate.getFullYear() - DOJ.getFullYear();
    if (
        currentDate.getMonth() < DOJ.getMonth() ||
        (currentDate.getMonth() === DOJ.getMonth() &&
            currentDate.getDate() < DOJ.getDate())
    ) {
        differeceInYears--;
    }
    return differeceInYears;
}

export default { calculateExperience }