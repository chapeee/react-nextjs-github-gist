import React from 'react';
import { CreateIframeProps } from '../Interfaces/Git'

const CreateIframe: React.FC<CreateIframeProps> = ({ iframeRef, width, height, file, id }) => {
    return (
        <iframe ref={iframeRef} width={width} height={height} src={file} id={id}></iframe>
    );
};

export default CreateIframe;
