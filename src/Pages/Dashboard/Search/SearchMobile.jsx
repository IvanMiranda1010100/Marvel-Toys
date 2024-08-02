import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "@lib/data.ts";

export const SearchMob = () => {
  const [searchProduct, setSearchProduct] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchProduct(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      navigate(`/dashboard/Productos/search/${searchProduct}`);
    }
  };

  const handleButtonClick = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <>
      <main className='flex'>
        <button onClick={handleButtonClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-search"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
        </button>
      </main>

      {isSearchVisible && (
        <div className="searchbar-expanded ">
          <div className="searchbar-wrapper">
            <div className="searchbar-left">
              <div className="search-icon-wrapper">
                <button onClick={handleButtonClick}>
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    data-svg="close-icon"
                  >
                    <line
                      fill="none"
                      stroke="#000"
                      strokeWidth="2.1"
                      x1="2"
                      y1="2"
                      x2="23"
                      y2="23"
                      style={{ stroke: "#8c8273" }}
                    />
                    <line
                      fill="none"
                      stroke="#000"
                      strokeWidth="2.1"
                      x1="23"
                      y1="2"
                      x2="2"
                      y2="23"
                      style={{ stroke: "#8c8273" }}
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="searchbar-center">
              <div className="searchbar-input-spacer"></div>

              <input
                type="text"
                className="searchbar-input"
                maxLength="2048"
                name="q"
                autoCapitalize="off"
                autoComplete="off"
                title="Search"
                role="combobox"
                placeholder="¿Qué estas buscando?"
                value={searchProduct}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
              />
            </div>
          </div>
        </div>
      )}

      <style>{`.searchbar-expanded {
        font-size: 14px;
        color: white;
        display: flex;
        z-index: 3;
        height: 44px;
        background: #1D1F20;
        box-shadow: none;
        width: 100%;
        height:100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: auto;
        padding: 10px;
      }

      .searchbar-wrapper {
        flex: 1;
        display: flex;
        padding: 5px 8px 0 14px;
      }

      .searchbar-left {
        font-size: 14px;
        font-family: arial, sans-serif;
        color: #202124;
        display: flex;
        align-items: center;
        padding-right: 13px;
        margin-top: -5px;
      }

      .search-icon-wrapper {
        margin: auto;
      }

      .search-icon {
        margin-top: 3px;
        color: #9aa0a6;
        height: 20px;
        line-height: 20px;
        width: 20px;
      }

      .searchbar-icon {
        display: inline-block;
        fill: currentColor;
        height: 24px;
        line-height: 24px;
        position: relative;
        width: 24px;
      }

      .searchbar-center {
        display: flex;
        flex: 1;
        flex-wrap: wrap;
      }

      .searchbar-input-spacer {
        color: transparent;
        flex: 100%;
        white-space: pre;
        height: 34px;
        font-size: 16px;
      }

      .searchbar-input {
        background-color: transparent;
        border: none;
        margin: 0;
        padding: 0;
        color: white;
        word-wrap: break-word;
        outline: none;
        display: flex;
        flex: 100%;
        margin-top: -37px;
        height: 34px;
        max-width: 100%;
        width: 100%;
      }

      @media(max-width:767px){
        .searchbar-input{
          font-size:19px;
        }
      }

      .searchbar-right {
        display: flex;
        flex: 0 0 auto;
        margin-top: -5px;
        align-items: stretch;
        flex-direction: row;
      }

      .searchbar-clear-icon {
        margin-right: 12px;
      }

      .voice-search {
        flex: 1 0 auto;
        display: flex;
        cursor: pointer;
        align-items: center;
        border: 0;
        background: transparent;
        outline: none;
        padding: 0 8px;
        width: 2.8em;
      }`}</style>
    </>
  );
};
