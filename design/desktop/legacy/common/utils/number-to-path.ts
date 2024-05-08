const numberToPath = (number: '1' | '2' | '3' | '4' | '5' | '6' | '7'): string => {
    switch (number) {
        case '1':
            return '/'
        case '2':
            return '/orders'
        case '3':
            return '/products'
        case '4':
            return '/employees'
        case '5':
            return '/website'
        case '6':
            return '/accounting'
        case '7':
            return '/customers'
    }
}

export default numberToPath
