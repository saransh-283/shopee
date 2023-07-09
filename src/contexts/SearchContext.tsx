// components/SearchContext.tsx
import React, { createContext, useState } from 'react';

interface SearchContextProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = createContext<SearchContextProps>({
  search: '',
  setSearch: () => {},
});

export function SearchProvider({ children }:{children:React.ReactNode}) {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <SearchContext.Provider value={{ search: searchQuery, setSearch: setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};
