import { Dimensions } from "react-native"

export const color = {
    primary: '#e11d48',
    secondary: '#3b82f6',
    white: '#f9fafb',
    black: '#404040',
    inactive: '#d4d4d8',
    gray: '#6b7280',
    lightgray: '#e4e4e7'
}

export const container = {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
}

export const fontsize = {
    extra_small: (2.3/100) * container.width,
    small: (2.5/100) * container.width,
    regular: (3/100) * container.width,
    large: (3.5/100) * container.width,
    extra_large: (5/100) * container.width
}
