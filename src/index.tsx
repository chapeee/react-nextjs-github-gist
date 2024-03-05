import React, { useEffect, useRef, useState } from 'react';
import GitUserInfo from './Utils/Profile';

interface GistProps {
  id: string;
  file?: string;
  width?: string;
  height?: string;
  getProfile?: string;
  userName? : string
}

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
  getProfile = 'true',
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
      <iframe
        ref={iframeRef}
        width={width}
        height={height}
        frameBorder={0}
        id={file ? `gist-${id}-${file}` : `gist-${id}`}
      />
    </div>
  );
}

export default GitGist;
