export interface Course {
    _id: string;
    name: string;
    price: number;
    topic: string,
    difficulty: string;
    tags: string[];
    bought: boolean;
    average: number | undefined;
    content: string;
}