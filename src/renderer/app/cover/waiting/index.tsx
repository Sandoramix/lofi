import { ipcRenderer } from 'electron';
import React, { FunctionComponent, useCallback } from 'react';
import styled from 'styled-components';

import { ApplicationUrl, IpcMessage } from '../../../../constants';

const WaitingWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;

  p {
    margin: auto;
    color: #84bd00;
    font-size: 300%;
    opacity: 0.5;
    animation: fader 1s infinite alternate;
  }

  @keyframes fader {
    from {
      opacity: 0;
    }
  }
`;


export const Waiting: FunctionComponent = () => {
  const handleOpenSpotify = useCallback(() => {
    ipcRenderer.send(IpcMessage.OpenLink, ApplicationUrl.Spotify);
  }, []);

  return (
    <WaitingWrapper
      className="centered draggable"
      onClick={handleOpenSpotify}
      role="button"
      tabIndex={0}
      aria-label="Open Spotify">
      <p>
        <i className="fab fa-spotify" />
      </p>
    </WaitingWrapper>
  );
};
