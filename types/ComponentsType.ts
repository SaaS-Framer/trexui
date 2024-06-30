export interface ComponentsPreview {
    _id: string,
    title: string,
    type: string,
    categories: Array<string>,
    previewImage: string,
    technologies: Array<string>,
    createdAt: string,
};
export interface ComponentType extends ComponentsPreview {
    code: string,
    colors: any,
    description: string,
}

