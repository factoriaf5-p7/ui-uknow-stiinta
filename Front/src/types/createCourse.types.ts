export interface CreateCourse {
    name: string;
    topic: 'Web development' | 'Backend' | 'Frontend';
    difficulty: 'Beginner' | 'Medium' | 'Advanced';
    tags: string[];
    content: string;    
}