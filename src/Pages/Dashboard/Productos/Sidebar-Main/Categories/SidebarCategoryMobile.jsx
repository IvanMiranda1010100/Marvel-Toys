import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Listbox,
  ListboxItem,
  Chip,
  ScrollShadow,
  Avatar,
} from "@nextui-org/react";
import { ListboxWrapperr } from "./ListboxWrapper";
import { users } from "./data";

export const SidebarCategories2Mobile = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item) => {
    setSelectedItem(item);
    navigate(`/dashboard/Productos/category/${item.name}`);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <button
        className="border rounded py-2 px-3 text-start bg-[#242424] hover:bg-[#4B5563] text-white"
        onClick={handleToggle}
      >
        {selectedItem ? (
          selectedItem.name
        ) : (
          <>
            <span className="block sm:hidden">Categorías</span>
            <span className="hidden sm:block">Seleccione una categoría</span>
          </>
        )}
      </button>
      {isOpen && (
        <div className="absolute mt-2 rounded z-10 bg-[#242424]">
          <ListboxWrapperr>
            <Listbox
              classNames={{
                base: "max-w-xs",
                list: "hh max-h-[300px] overflow-scroll",
              }}
              items={users}
            >
              {(item) => (
                <ListboxItem
                  key={item.id}
                  textValue={item.name}
                  onClick={() => handleSelect(item)}
                >
                  <div className="flex gap-2 items-start py-2 cursor-pointer">
                    <div className="flex flex-col ">
                      <span className="text-small">
                        {item.name}
                      </span>
                    </div>
                  </div>
                </ListboxItem>
              )}
            </Listbox>
          </ListboxWrapperr>
        </div>
      )}
      <style>{`
        .hh {
          overflow: scroll;
        }

        .hh::-webkit-scrollbar {
          display: none; /* Oculta la barra de desplazamiento en navegadores basados en WebKit */
        }

        .hh {
          -ms-overflow-style: none;  /* Oculta la barra de desplazamiento en Internet Explorer y Edge */
          scrollbar-width: none;     /* Oculta la barra de desplazamiento en Firefox */
        }
      `}</style>
    </div>
  );
};
