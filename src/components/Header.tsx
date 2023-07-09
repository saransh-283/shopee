import SearchIcon from "@/icons/SearchIcon";
import Button from "./Button";
import { useContext } from "react";
import { SearchContext } from "@/contexts/SearchContext";

export default function Header() {
  const { search, setSearch } = useContext(SearchContext);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-900">
      <div className="flex gap-4 items-center">
        <img src="/images/logo-full.svg" alt="logo" className="w-16 h-16" />
        <h1 className="text-2xl hidden md:block text-primary font-bold uppercase">
          Shopee
        </h1>
      </div>

      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchIcon />
          </div>
          <input
            type="search"
            id="default-search"
            className="w-auto p-4 pl-12 text-sm text-secondary border rounded-md bg-dark border-secondary focus:outline-none placeholder:text-secondary"
            placeholder="Search thousands of products"
            required
            value={search}
            onChange={handleInputChange}
          />
        </div>
      </form>

      <div className="hidden md:flex gap-4 items-center">
        <Button variant="tertiary">Login</Button>
        <Button variant="primary">Register</Button>
      </div>
    </div>
  );
}
