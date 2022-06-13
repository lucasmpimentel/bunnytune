import React from 'react';

export default function index() {
  return (
    <div>
      <h1>Search</h1>
      <input
        placeholder="O que deseja ouvir agora?"
        name="searchInput"
        type="text"
      />
      <button
        type="button"
      >
        Buscar
      </button>
    </div>
  );
}
