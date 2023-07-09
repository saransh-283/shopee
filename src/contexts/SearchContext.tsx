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
  const [search, setSearch] = useState<string>('');

  return (
    <SearchContext.Provider value={{ search: search, setSearch: setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
