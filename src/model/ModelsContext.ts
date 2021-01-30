import React, { ReactNode } from 'react';

export interface infSolar {
  modelName: string;
  overlayNode: ReactNode;
  sectionRef: React.RefObject<HTMLElement>;
}

interface ModelsContext {
  wrapperRef: React.RefObject<HTMLElement>;
  registeredModels: infSolar[];
  registerModel: (model: infSolar) => void;
  unregisterModel: (modelName: string) => void;
  getModelByName: (modelName: string) => infSolar | null;
}

export default React.createContext<ModelsContext>({} as ModelsContext);
