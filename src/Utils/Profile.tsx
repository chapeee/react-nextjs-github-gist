import React, { useEffect, useState } from 'react';
import axios from 'axios';
import getUsernameFromGistUrl from './UserName';

interface GitUserInfo {
  avatarUrl: string;
  name: string;
}

function GitUserInfo(gistUsername: any) {
  const [userInfo, setUserInfo] = useState<GitUserInfo | null>(null);

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const response = await axios.get(await getUsernameFromGistUrl(gistUsername));
        const { avatar_url, name } = response.data;
        setUserInfo({ avatarUrl: avatar_url, name: name });
      } catch (error) {
        console.error('Error fetching user information:', error);
      }
    }

    fetchUserInfo();
  }, []);

  return (
    <div>
      {userInfo ? (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={userInfo.avatarUrl}
            alt="Avatar"
            style={{ width: 30, height: 30, borderRadius: '50%' }}
          />
          <p style={{ padding: '5px' }}>Gist By. {userInfo.name}</p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default GitUserInfo;
