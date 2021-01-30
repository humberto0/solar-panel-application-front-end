import React from 'react';

import { ModelsWrapper, ModelSection } from '../../model';
import DefaultOverlayContent from '../../components/DefaultOverlayContainer';
import UniqueOverlay from '../../components/UniqueOverlay';

import { Container, Spacer } from './styles';

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {['Pag1', 'Pag2', 'Pag3', ' ', 'Pag5'].map(modelName => (
            <ModelSection
              key={modelName}
              className="img"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description=""
                  title=""
                />
              }
            />
          ))}
        </div>

        <Spacer />

        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
