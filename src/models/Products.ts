import type { ProductType } from "../types/ProductType";

const products: ProductType[] = [
    {
        id: 1,
        title: "Apple Watch Ultra 2",
        price: 799,
        is_active: true,
        count: 12,
        image: "watch.png",
        id_category: 1,
    },
    {
        id: 2,
        title: "Apple Watch Series 10",
        price: 499,
        is_active: true,
        count: 8,
        image: "watch_1.jpg",
        id_category: 1,
    },
    {
        id: 3,
        title: "Samsung Galaxy Watch 7",
        price: 399,
        is_active: true,
        count: 15,
        image: "galaxy_watch.jpg",
        id_category: 1,
    },
    {
        id: 4,
        title: "Garmin Fenix 8",
        price: 999,
        is_active: false,
        count: 0,
        image: "garmin.jpg",
        id_category: 1,
    },
    {
        id: 5,
        title: "Huawei Watch GT 5",
        price: 299,
        is_active: true,
        count: 21,
        image: "huawei.jpg",
        id_category: 1,
    },
    {
        id: 6,
        title: "Xiaomi Watch S4",
        price: 199,
        is_active: true,
        count: 33,
        image: "xiaomi.jpg",
        id_category: 1,
    },
];

export default products;