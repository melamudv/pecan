export interface ITree {
    title: string;
    permission: boolean;
    trigger: boolean;
    level?: Array<ITree>;
}
