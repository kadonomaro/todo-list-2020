export interface IItem {
    id: number | string | undefined
    title?: string,
    isComplete?: boolean,
    readonly createdAt?: Date
}