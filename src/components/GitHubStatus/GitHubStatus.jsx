import React, { useState, useEffect } from 'react';
import './GitHubStatus.css';

const GitHubStatus = () => {
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        // Fetch user data
        const userResponse = await fetch('https://api.github.com/users/jey7387');
        const userData = await userResponse.json();
        
        // Fetch recent events
        const eventsResponse = await fetch('https://api.github.com/users/jey7387/events/public');
        const eventsData = await eventsResponse.json();
        
        // Get recent repositories
        const reposResponse = await fetch('https://api.github.com/users/jey7387/repos?sort=updated&per_page=5');
        const reposData = await reposResponse.json();
        
        setGithubData({
          user: userData,
          events: eventsData.slice(0, 5),
          repos: reposData
        });
      } catch (err) {
        setError('Failed to fetch GitHub data');
        console.error('GitHub API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
    
    // Refresh data every 5 minutes
    const interval = setInterval(fetchGitHubData, 300000);
    return () => clearInterval(interval);
  }, []);

  const getActivityStatus = () => {
    if (!githubData?.events || githubData.events.length === 0) return 'offline';
    
    const lastEvent = githubData.events[0];
    const eventTime = new Date(lastEvent.created_at);
    const now = new Date();
    const hoursDiff = (now - eventTime) / (1000 * 60 * 60);
    
    if (hoursDiff < 1) return 'online';
    if (hoursDiff < 24) return 'recently';
    return 'offline';
  };

  const getActivityMessage = () => {
    const status = getActivityStatus();
    switch (status) {
      case 'online': return 'Currently Active';
      case 'recently': return 'Recently Active';
      default: return 'Offline';
    }
  };

  const formatLastActivity = () => {
    if (!githubData?.events || githubData.events.length === 0) return 'No recent activity';
    
    const lastEvent = githubData.events[0];
    const eventTime = new Date(lastEvent.created_at);
    const now = new Date();
    const diffMs = now - eventTime;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} minutes ago`;
    if (diffHours < 24) return `${diffHours} hours ago`;
    return `${diffDays} days ago`;
  };

  const getActivityIcon = () => {
    if (!githubData?.events || githubData.events.length === 0) return '💤';
    
    const eventType = githubData.events[0].type;
    switch (eventType) {
      case 'PushEvent': return '📝';
      case 'PullRequestEvent': return '🔄';
      case 'IssuesEvent': return '🐛';
      case 'CreateEvent': return '✨';
      case 'WatchEvent': return '⭐';
      default: return '💻';
    }
  };

  if (loading) {
    return (
      <div className="github-status loading">
        <div className="status-indicator">
          <div className="status-dot"></div>
          <span>Loading GitHub status...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="github-status error">
        <div className="status-indicator">
          <div className="status-dot error"></div>
          <span>GitHub status unavailable</span>
        </div>
      </div>
    );
  }

  return (
    <div className="github-status">
      <div className="status-header">
        <div className="status-indicator">
          <div className={`status-dot ${getActivityStatus()}`}></div>
          <span className="status-text">{getActivityMessage()}</span>
        </div>
        <div className="status-time">{formatLastActivity()}</div>
      </div>
      
      <div className="status-details">
        <div className="activity-item">
          <span className="activity-icon">{getActivityIcon()}</span>
          <span className="activity-text">
            {githubData.events[0]?.type?.replace('Event', '') || 'Activity'}
          </span>
        </div>
        
        <div className="github-stats">
          <div className="stat">
            <span className="stat-number">{githubData?.user?.public_repos || 0}</span>
            <span className="stat-label">Repos</span>
          </div>
          <div className="stat">
            <span className="stat-number">{githubData?.user?.followers || 0}</span>
            <span className="stat-label">Followers</span>
          </div>
          <div className="stat">
            <span className="stat-number">{githubData?.user?.following || 0}</span>
            <span className="stat-label">Following</span>
          </div>
        </div>
      </div>

      <div className="recent-repos">
        <h4>Recent Activity</h4>
        {githubData?.repos?.slice(0, 3).map((repo, index) => (
          <div key={index} className="repo-item">
            <a 
              href={repo.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="repo-link"
            >
              {repo.name}
            </a>
            <span className="repo-updated">
              Updated {new Date(repo.updated_at).toLocaleDateString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubStatus;
