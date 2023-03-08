export interface PageableResponse<T> {
    content: T[];
    pageable: {
        sort: {
            empty: boolean;
            unsorted: boolean;
            sorted: boolean;
        };
        offset: number;
        pageNumber: number;
        pageSize: number;
        paged: boolean;
        unpaged: boolean;
    };
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number;
    number: number;
    sort: {
        empty: boolean;
        unsorted: boolean;
        sorted: boolean;
    };
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}
export interface Address {
    firstName: string;
    lastName: string;
    company: string;
    street: string;
    streetNumber: string;
    postcode: string;
    city: string;
    country: string;
}

export interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    birthDate: string;
}

export interface Image {
    id: number;
    filename: string;
    mimeType: string;
    path: string;
    altText: string;
}

export interface Product {
    id: number;
    name: string;
    description: string;
    priceNet: number;
    isActive: boolean;
    createdOn?: string;
    lastUpdatedOn?: string;
    categoryId: number;
    address: Address;
    seller: User;
    buyer?: User;
    images: Image[];
}
