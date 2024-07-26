import React from "react";
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

export const SidebarCategories2 = () => {
  const navigate = useNavigate();

  return (
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
            onClick={() => navigate(`/dashboard/Productos/category/${item.name}`)}
          >
            <div className="flex gap-2 items-center">
              <div className="flex flex-col">
                <span className="text-small">{item.name}</span>
              </div>
            </div>
          </ListboxItem>
        )}
      </Listbox>
      <style>{`
        hh {
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
    </ListboxWrapperr>
  );
};