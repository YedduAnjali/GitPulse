import githubApi from '../config/github.js';
export const getUserProfile = async (username) => {
const { data } = await githubApi.get(`/users/${username}`);
return data;
};
export const getUserRepos = async (username) => {
const { data } = await githubApi.get(`/users/${username}/repos`, {
params: {
per_page: 100,
sort: 'updated',
},
});
return data;
};
export const getUserEvents = async (username) => {
const { data } = await githubApi.get(`/users/${username}/events/public`, {
params: {
per_page: 100,
},
});
return data;
};
