import React, { Component } from 'react';
import GitUserInfo from './Utils/Profile';
import CreateIframe from './Utils/CreateIframe';

import { GistProps, GitGistState } from './Interfaces/Git';

class GitGist extends Component<GistProps, GitGistState> {
  iframeRef: React.RefObject<HTMLIFrameElement>;

  constructor(props: GistProps) {
    super(props);
    this.iframeRef = React.createRef<HTMLIFrameElement>();
    this.state = {
      gistLink: '',
    };
  }

  componentDidMount() {
    this.updateGistLink();
  }

  componentDidUpdate(prevProps: GistProps) {
    if (this.props.id !== prevProps.id || this.props.file !== prevProps.file) {
      this.updateGistLink();
    }
  }

  createGitGistUrl(id: string, file?: string): string {
    const baseUrl = 'https://gist.github.com/';
    const fileArg = file ? `?file=${file}` : '';
    return `${baseUrl}${id}.js${fileArg}`;
  }

  updateGistLink() {
    const link = this.createGitGistUrl(this.props.id, this.props.file);
    this.setState({ gistLink: link }, this.updateIframeContent);
  }

  updateIframeContent() {
    const iframe = this.iframeRef.current;
    if (!iframe) return;

    const doc = iframe.contentWindow?.document;
    if (!doc) return;

    const html = `<script type="text/javascript" src="${this.state.gistLink}"></script>`;

    doc.open();
    doc.write(html);
    doc.close();
  }

  render() {
    const {
      width = '100%',
      height = '600px',
      getProfile = 'false',
      userName = '',
    } = this.props;

    return (
      <div>
        {getProfile === 'true' && <GitUserInfo gistUsername={userName} />}
        <CreateIframe
          iframeRef={this.iframeRef}
          width={width}
          height={height}
          file={this.props.file}
          id={this.props.id}
        />
      </div>
    );
  }
}

export default GitGist;
