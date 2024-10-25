<template>
    <h1>Hello App!</h1>
    <p>
      <strong>Current route path:</strong> {{ $route.fullPath }}
    </p>
    <nav>
      <RouterLink to="/">
          <button>Go to Home</button>
      </RouterLink>
      <RouterLink to="/about">
        <button>to About</button>
      </RouterLink>
    </nav>
    <main>
      <RouterView />
    </main>
  </template>