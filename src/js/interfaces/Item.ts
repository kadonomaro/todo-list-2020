export interface IItem {
    _id: number | string | undefined
    title?: string,
    completed?: boolean,
    readonly createdAt?: Date
}