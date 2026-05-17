import { useState } from 'react';
import { fetchDashboardData } from '../api/githubApi';

export const useGithubData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchUser = async (username) => {
    try {
      setLoading(true);
      setError(null);

      const result = await fetchDashboardData(username);
      setData(result);
    } catch (err) {
      setError(
        err.response?.data?.message || 'Failed to fetch GitHub data'
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    searchUser,
  };
};