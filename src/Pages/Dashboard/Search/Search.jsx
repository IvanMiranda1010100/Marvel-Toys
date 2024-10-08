import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '@lib/data.ts';

export const SearchInput = () => {
  const [searchProduct, setSearchProduct] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchProduct(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      navigate(`/dashboard/Productos/search/${searchProduct}`);
    }
  };

  return (
    <>
      <div className="searchbar">
        <div className="searchbar-wrapper">
          <div className="searchbar-left">
            <div className="search-icon-wrapper">
              <span className="search-icon searchbar-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                </svg>
              </span>
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

      <style>{`.searchbar {
  font-size: 14px;
  color: white;
  display: flex;
  z-index: 3;
  height: 44px;
  background: #1D1F20;
  border: 1px solid rgba(223, 225, 229, 0.5);
  box-shadow: none;
  border-radius: 24px;
  width: auto;
  max-width: 224px;
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
  font-size: 14px;
  max-width: 100%;
  width: 100%;
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
