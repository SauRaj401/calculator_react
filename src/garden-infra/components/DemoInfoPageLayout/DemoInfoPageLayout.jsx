import React from 'react';

import './DemoInfoPageLayout.scss';

import {SimplePageLayout} from '../SimplePageLayout';

export function DemoInfoPageLayout(props) {
  const {title, description, keywords, headerComponent, demoComponent, infoComponent} = props;

  return (
    <SimplePageLayout title={title} description={description} keywords={keywords} headerComponent={headerComponent}>
      <div className="demo-part">{demoComponent}</div>
      <div className="info-part">{infoComponent}</div>
    </SimplePageLayout>
  );
}
