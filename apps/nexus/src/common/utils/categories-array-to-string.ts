const categoriesArrayToString = (categories: string[]) => {
    return categories
        .join(' | ')
        .replace('confecture', 'Konfekture')
        .replace('craftmansship', 'Håndværk')
        .replace('cider', 'Cider')
}

export default categoriesArrayToString
