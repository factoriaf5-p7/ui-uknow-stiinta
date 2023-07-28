export interface Course {
    name: string;
    topic: 'Web development' | 'Backend' | 'Frontend';
    difficulty: 'Beginner' | 'Medium' | 'Advanced';
    tags: [string, string, string];
    content: string;    
}