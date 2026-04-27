import React, { useEffect, useState } from "react";
import "./LeetCode.css";

export default function LeetCodeBox({ onStatsUpdate }) {
  const [totalSolved, setTotalSolved] = useState(null);

  useEffect(() => {
    // Fetch detailed LeetCode stats
    const fetchLeetCodeStats = async () => {
      try {
        // First try to get detailed stats from LeetCode API
        const response = await fetch('https://leetcode-api-faisalshohag.vercel.app/mrnwHDTvOz');
        const data = await response.json();
        
        setTotalSolved(data.totalSolved);
        
        // Try to get detailed breakdown
        if (data.easySolved !== undefined && data.mediumSolved !== undefined && data.hardSolved !== undefined) {
          // If the API provides detailed breakdown
          if (onStatsUpdate) {
            onStatsUpdate({
              easy: data.easySolved || 0,
              medium: data.mediumSolved || 0,
              hard: data.hardSolved || 0
            });
          }
        } else {
          // Fallback: try another approach or use estimation
          const total = data.totalSolved || 0;
          
          // Try to get from LeetCode public API
          try {
            const publicResponse = await fetch('https://leetcode.com/api/v1/user/mrnwHDTvOz');
            const publicData = await publicResponse.json();
            
            if (publicData.easySolved && publicData.mediumSolved && publicData.hardSolved) {
              if (onStatsUpdate) {
                onStatsUpdate({
                  easy: publicData.easySolved,
                  medium: publicData.mediumSolved,
                  hard: publicData.hardSolved
                });
              }
            } else {
              // Fallback estimation
              const estimatedStats = {
                easy: Math.floor(total * 0.6),
                medium: Math.floor(total * 0.3),
                hard: Math.floor(total * 0.1)
              };
              if (onStatsUpdate) {
                onStatsUpdate(estimatedStats);
              }
            }
          } catch (publicError) {
            console.log('Public API failed, using estimation');
            // Final fallback
            const estimatedStats = {
              easy: Math.floor(total * 0.6),
              medium: Math.floor(total * 0.3),
              hard: Math.floor(total * 0.1)
            };
            if (onStatsUpdate) {
              onStatsUpdate(estimatedStats);
            }
          }
        }
      } catch (error) {
        console.error('Error fetching LeetCode data:', error);
        if (onStatsUpdate) {
          onStatsUpdate({ easy: 0, medium: 0, hard: 0 });
        }
      }
    };

    fetchLeetCodeStats();
    
    // Refresh every 5 minutes
    const interval = setInterval(fetchLeetCodeStats, 300000);
    
    return () => clearInterval(interval);
  }, [onStatsUpdate]);

  return (
    <div className="leetcode-box">
      <h3>LeetCode</h3>
      {totalSolved !== null ? (
        <div className="leetcode-number">{totalSolved}</div>
      ) : (
        <p className="loading">Loading...</p>
      )}
      <p className="label">Problems Solved</p>
    </div>
  );
}
