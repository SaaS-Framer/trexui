export type SideMenuOption = {
    _id: string
    categories: SideMenuOptionCategory[]
};
export type SideMenuOptionCategory = {
    category: string
    count: number
}