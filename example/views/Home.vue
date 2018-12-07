<template>
  <div>
    <ul>
      <li><router-link :to="'/'">title tag title (default)</router-link></li>
      <li><router-link :to="'test'">string title</router-link></li>
      <li><router-link :to="'test2'">function title</router-link></li>
    </ul>
  </div>
</template>
