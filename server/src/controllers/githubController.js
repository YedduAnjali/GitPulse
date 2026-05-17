import {
getUserProfile,
getUserRepos,
getUserEvents,
} from '../services/githubService.js';
import { calculateAnalytics } from '../services/analyticsService.js';
export const getDashboardData = async (req, res, next) => {
try {
const { username } = req.params;
const [profile, repos, events] = await Promise.all([
getUserProfile(username),
getUserRepos(username),
getUserEvents(username),
]);
const analytics = calculateAnalytics(repos);
res.json({
success: true,
data: {
profile,
repos,
events,
analytics,
},
});
} catch (error) {
next(error);
}
};
