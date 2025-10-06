export const routes = [
  {
    path: '/main',
    component: () => import('@/views/MainView.vue'),
    children: [
      { path: '', component: () => import('@/views/IndexView.vue'), name: 'main' },
      { path: ':id', component: () => import('@/views/MeditationView.vue') },
    ],
  },
  { path: '/stat', component: () => import('@/views/StatView.vue') },
  { path: '/', component: () => import('@/views/AuthView.vue') },
];
