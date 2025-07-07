export interface Product {
    id: number;
    title: string;
    image: string;
    price: number;
    description: string;
    brand: string;
    category: string
}

export interface Styles {
    container: React.CSSProperties,
    productItem: React.CSSProperties,
    productList: React.CSSProperties,
    searchInput: React.CSSProperties,
    productImage: React.CSSProperties,
    loadingText: React.CSSProperties
}