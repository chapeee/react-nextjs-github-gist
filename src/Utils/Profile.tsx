import React, { Component } from 'react';
import axios from 'axios';
import getUsernameFromGistUrl from './UserName';

interface GitUserInfoProps {
  gistUsername: string;
}

interface GitUserInfoState {
  avatarUrl: string;
  name: string;
}

class GitUserInfo extends Component<GitUserInfoProps, GitUserInfoState> {
  constructor(props: GitUserInfoProps) {
    super(props);
    this.state = {
      avatarUrl: '',
      name: ''
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get(await getUsernameFromGistUrl(this.props.gistUsername));
      const { avatar_url, name } = response.data;
      this.setState({ avatarUrl: avatar_url, name: name });
    } catch (error) {
      console.error('Error fetching user information:', error);
    }
  }

  render() {
    const { avatarUrl, name } = this.state;

    return (
      <div>
        {avatarUrl && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={avatarUrl}
              alt="Avatar"
              style={{ width: 30, height: 30, borderRadius: '50%' }}
            />
            <p style={{ padding: '5px' }}>Gist By. {name}</p>
          </div>
        )}
      </div>
    );
  }
}

export default GitUserInfo;
