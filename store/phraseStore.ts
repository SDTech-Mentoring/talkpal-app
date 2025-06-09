// app/store/phraseStore.ts
import { create } from 'zustand';

type PhraseStore = {
  phrase: string[];// é a frase atual (ex: ["EU", "QUERO"])
  addWord: (word: string) => void;// função para adicionar uma palavra
  clearPhrase: () => void;// função para limpar a frase
};

export const usePhraseStore = create<PhraseStore>((set) => ({
  phrase: [],// começa com frase vazia
  addWord: (word: string) =>
    set((state: PhraseStore) => ({ phrase: [...state.phrase, word] })),
  clearPhrase: () => set({ phrase: [] }),// limpa tudo
}));
