import React, { createContext, useContext, useState, ReactNode } from 'react';

// Definindo o tipo para o contexto da frase
type FraseContextType = {
  frase: string;  // Frase que será compartilhada
  adicionarNaFrase: (palavra: string) => void;  // Função para adicionar palavras à frase
  limparFrase: () => void;  // Função para limpar a frase
};

// Criando o contexto para armazenar a frase
const FraseContext = createContext<FraseContextType | undefined>(undefined);

// Provider para envolver a aplicação e fornecer o estado da frase
export const FraseProvider = ({ children }: { children: ReactNode }) => {
  const [frase, setFrase] = useState('');  // Estado para manter a frase

  // Função para adicionar uma palavra à frase
  const adicionarNaFrase = (palavra: string) => {
    setFrase((prev) => (prev ? `${prev} ${palavra}` : palavra));  // Se já houver algo, adiciona a palavra; caso contrário, apenas a palavra
  };

  // Função para limpar a frase
  const limparFrase = () => {
    setFrase('');  // Reseta o estado da frase
  };

  return (
    <FraseContext.Provider value={{ frase, adicionarNaFrase, limparFrase }}>
      {children}
    </FraseContext.Provider>
  );
};

// Hook para acessar o contexto da frase
export const useFrase = () => {
  const context = useContext(FraseContext);
  if (!context) {
    throw new Error('useFrase deve ser usado dentro de FraseProvider');
  }
  return context;
};
