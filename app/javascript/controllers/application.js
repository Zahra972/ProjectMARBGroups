import { Page, Card, ResourceList } from '@shopify/polaris';
import { ResourcePicker } from '@shopify/app-bridge-react';

import { useState } from 'react';

const Index = () => {
  const [resources, setResources] = useState([]);
  const [open, setOpen] = useState(false);
  const handleSelection = (resources) => {
    setOpen(false);
    setResources(resources);
  };

  return (
    <Page
      title={'product selector'}
      primaryAction={{
        content: 'Select products',
        onAction: () => setOpen(true)
      }}>
      <ResourcePicker
        resourceType={'Product'}
        open={open}
        onCancel={() => {
          setOpen(false);
        }}
        onSelection={(resources) => {
          handleSelection(resources);
        }}/>
      <Card>
        <ResourceList
          resourceName={{singular: 'product', plural: 'products'}}
          items={resources}
          renderItem={}>

        </ResourceList>
      </Card>
    </Page>
  );
};

export default Index;