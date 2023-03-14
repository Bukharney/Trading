import { React, useState } from "react";
import { SearchIcon, XIcon } from "@heroicons/react/solid";
import SearchResult from "./SearchResult";
import { getSearchResult } from "../api/stock_api";

export const Search = () => {
  const [Input, setInput] = useState("");
  const [Result, setResult] = useState([]);

  const clear = () => {
    setInput("");
    setResult([]);
  };

  const updateResult = async () => {
    try {
      if (Input) {
        console.log("update : " + Input);
        const result = await getSearchResult(Input);
        setResult(result.result);
      }
    } catch (e) {
      setResult([]);
      console.log(e);
    }
  };

  return (
    <div className="flex items-center my-4 border-2 rounded-md relative z-50 w-96 max-w-full bg-white border-neutral-2 ">
      <input
        type="text"
        value={Input}
        className="w-full px-4 py-2 focus:outline-none rounded-md"
        placeholder="Serach stock..."
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={(e) => (e.key === "Enter" ? updateResult() : null)}
      />

      {Input && (
        <button onClick={clear}>
          <XIcon className="h-4 w-4 fill-gray-500"></XIcon>
        </button>
      )}
      <button
        onClick={updateResult}
        className="h-8 w-8 bg-indigo-500 rounded-md flex justify-center items-center m-1 p-2"
      >
        <SearchIcon className="h-4 w-4 fill-gray-100"></SearchIcon>
      </button>
      {Input && Result.length > 0 ? <SearchResult result={Result} /> : null}
    </div>
  );
};
