"use client";

import { Search, X } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = "Cari produk...",
}: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full max-w-2xl">
      <div
        className={`flex items-center gap-2 rounded-lg border bg-background px-4 py-3 shadow-sm transition-all ${
          isFocused
            ? "border-primary ring-2 ring-primary/20"
            : "border-border hover:border-primary/50"
        }`}
      >
        <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
        {value && (
          <button
            onClick={() => onChange("")}
            className="shrink-0 rounded-full p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      {value && (
        <div className="mt-2 text-sm text-muted-foreground">
          Menampilkan hasil pencarian untuk &quot;{value}&quot;
        </div>
      )}
    </div>
  );
}
