import axios from 'axios';

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
});

// Add token to every request dynamically
githubApi.interceptors.request.use((config) => {
  config.headers.Accept = 'application/vnd.github+json';

  if (process.env.GITHUB_TOKEN) {
    config.headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  return config;
});

export default githubApi;