import React from 'react';
import {Helmet} from 'react-helmet';

import './SimplePageLayout.scss';

export function SimplePageLayout(props) {
  const {title, description, keywords, headerComponent} = props;

  return (
    <div className="simple-page-layout">
      <Helmet>
        <title>OnurDayibasi.DEV | {title}</title>
        <meta name="description" content={description} />
        <meta name="Keywords" content={keywords} />
      </Helmet>

      <div className="top-header-bar">{headerComponent}</div>
      <div className="content-part">{props.children}</div>
    </div>
  );
}
