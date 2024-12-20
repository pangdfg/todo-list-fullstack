import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodoView from '../views/TodoView.vue'
import EditView from '../views/EditView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/todo',
      name: 'todo-view',
      component: TodoView
    },
    {
      path: '/todo/:id/edit',
      name: 'edit-view',
      component: EditView
    }
  ],
})

export default router
