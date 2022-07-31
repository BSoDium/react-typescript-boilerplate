import React from 'react';

import app from 'assets/app.svg';
import { SiGithubsponsors } from 'react-icons/si';

export default function DefaultPage() {
  return (
    <div className="default-app container flex-col spacing-md">
      <img src={app} className="profile-pic" alt="app icon" />
      <section className="container flex-col spacing-sm">
        <h1><b>Hello there</b></h1>
        {' '}
        <h3 className="text-secondary">
          Edit
          {' '}
          <code>src/App.tsx</code>
          {' '}
          and save to reload.
        </h3>
      </section>
      <a
        className="default-app-link button standard href soft"
        href="https://github.com/sponsors/BSoDium"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiGithubsponsors size="1.3em" />
        Sponsor creator
      </a>
    </div>
  );
}
