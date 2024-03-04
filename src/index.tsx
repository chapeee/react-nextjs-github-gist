import React, { useEffect, useRef } from 'react';
import GitUserInfo from './Utils/Profile';

interface GistProps {
  id: string;
  file?: string;
  width?: string;
  height?: string;
  getProfile?: string;
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
}: GistProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    function updateIframeContent() {
      const iframe = iframeRef.current;
      if (!iframe) return;

      const doc = iframe.contentWindow?.document;
      if (!doc) return;

      const gistLink = createGitGistUrl(id, file);
      const gistScript = `<script type="text/javascript" src="${gistLink}"></script>`;
      const html = gistScript;

      doc.open();
      doc.write(html);
      doc.close();
    }

    updateIframeContent();
  }, [id, file]);

  return (
    <div>
      {getProfile == 'true' && <GitUserInfo />}
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
