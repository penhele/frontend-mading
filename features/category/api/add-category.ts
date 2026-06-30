import { api } from "@/lib/api/axios"
import { CreateCategoryPayload } from "../types/create-category-payload"

export const addCategory =async (body: CreateCategoryPayload) => {
    const {data} = await api.post('/categories', body)

    return data
}