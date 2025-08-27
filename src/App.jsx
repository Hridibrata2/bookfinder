import React from 'react'
import { BookProvider } from './context/BookContext'
import BookList from './components/BookList'
import SearchBar from './components/SearchBar'
import './App.css'

function App() {

  return (
    <>
      <BookProvider>
      <SearchBar />
      <BookList />
      </BookProvider>
    </>
  )
}

export default App
