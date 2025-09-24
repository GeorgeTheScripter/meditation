// {
//     "id": 1,
//     "created_at": "0001-01-01T00:00:00Z",
//     "updated_at": "0001-01-01T00:00:00Z",
//     "title": "Короткая",
//     "description": "Базовая медитация на 5 минут для успокоения сознания",
//     "duration_min": 5
// }

export interface Meditation {
  id: number;
  created_at: string;
  updated_at: string;
  title: string;
  description: string;
  duration_min: number;
}
