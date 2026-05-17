export const calculateAnalytics = (repos) => {
const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count,
0);
const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);
const languages = {};
repos.forEach((repo) => {
if (repo.language) {
languages[repo.language] = (languages[repo.language] || 0) + 1;
}
});
const languageData = Object.entries(languages).map(([name, value]) => ({
name,
value,
}));
return {
totalRepos: repos.length,
totalStars,
totalForks,
languageData,
};
};
