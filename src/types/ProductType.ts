export type ProductType = {
    id: number | string
    title: string
    price: number
    is_active?: boolean
    count?: number
    image?: string
    id_category?: number | string
}