import React, { useEffect, useRef, useState } from 'react';
import GitUserInfo from './Utils/Profile';
import CreateIframe from './Utils/CreateIfram';
import { GistProps } from './Interfaces/Git'

function createGitGistUrl(id: string, file?: string): string {
  const baseUrl = 'https://gist.github.com/';
  const fileArg = file ? `?file=${file}` : '';
  return `${baseUrl}${id}.js${fileArg}`;
}

function GitGist({
  id,
  file,
  width = '100%',
  height = '600px',
  getProfile = 'false',
  userName = ""
}: GistProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [gistLink, setGistLink] = useState<string>('');

  useEffect(() => {
    const link = createGitGistUrl(id, file);
    setGistLink(link);
  }, [id, file]);

  useEffect(() => {
    console.log(userName)
    function updateIframeContent() {
      const iframe = iframeRef.current;
      if (!iframe) return;

      const doc = iframe.contentWindow?.document;
      if (!doc) return;

      const html = `<script type="text/javascript" src="${gistLink}"></script>`;

      doc.open();
      doc.write(html);
      doc.close();
    }

    updateIframeContent();
  }, [gistLink]);

  return (
    <div>
      {getProfile == 'true' && <GitUserInfo gistUsername={userName} />}
      <CreateIframe iframeRef={iframeRef} width={width} height={height} file={file} id={id} />
    </div>
  );
}

export default GitGist;
