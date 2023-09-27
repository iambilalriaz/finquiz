import ClientDashboard from '../pages/dashboard/client';
import Questions from '../pages/questions';
import QuizTopics from '../pages/topics/index';
import Score from '../pages/score/index';
import UserLayout from '../layouts/user';
export const routes = [
  {
    path: '/',
    element: (
      <UserLayout>
        <ClientDashboard />
      </UserLayout>
    ),
  },
  {
    path: '/topics',
    element: (
      <UserLayout>
        <QuizTopics />
      </UserLayout>
    ),
  },
  {
    path: '/quiz',
    element: (
      <UserLayout>
        <Questions />
      </UserLayout>
    ),
  },
  {
    path: '/score',
    element: (
      <UserLayout>
        <Score />
      </UserLayout>
    ),
  },
];
