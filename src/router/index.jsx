import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/home'
import MovieDetails from '../pages/details/MovieDetails'
import NotFound from '../pages/NotFound'

export const router = createBrowserRouter([
  {
    name: '404',
    path: '*',
    element: <NotFound />
  },
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/movies/:id',
    element: <MovieDetails />
  }
])
