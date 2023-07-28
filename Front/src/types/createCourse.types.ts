export interface CreateCourse {
    name: string;
    topic: 'Web development' | 'Backend' | 'Frontend';
    difficulty: 'Beginner' | 'Medium' | 'Advanced';
    tags: [string, string, string];
    content: string;    
}