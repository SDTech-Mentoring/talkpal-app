import React, { createContext, useContext, useState, ReactNode } from 'react';

// Definindo o tipo para o contexto da frase
type FraseContextType = {
  phrase: string[];  // Agora é array de strings!
  addWord: (word: string) => void;   // Adiciona palavra ao array
  clearPhrase: () => void;           // Limpa o array
};

// Criando o contexto para armazenar a frase
const FraseContext = createContext<FraseContextType | undefined>(undefined);

// Provider para envolver a aplicação e fornecer o estado da frase
export const FraseProvider = ({ children }: { children: ReactNode }) => {
  const [phrase, setPhrase] = useState<string[]>([]);  // Estado é array de string

  // Função para adicionar uma palavra à frase
  const addWord = (word: string) => {
    setPhrase((prev) => [...prev, word]);
  };

  // Função para limpar a frase
  const clearPhrase = () => {
    setPhrase([]);
  };

  return (
    <FraseContext.Provider value={{ phrase, addWord, clearPhrase }}>
      {children}
    </FraseContext.Provider>
  );
};

// Hook para acessar o contexto da frase
export const usePhrase = () => {
  const context = useContext(FraseContext);
  if (!context) {
    throw new Error('usePhrase deve ser usado dentro de FraseProvider');
  }
  return context;
};
