import {useState} from 'react'

export const SelectOptionComponent = ({onSortChange})=> {

  const [openSelect,setOpenSelect] = useState(false);

  const handleClick=()=> {
    setOpenSelect(!openSelect);
  }

  const handleSortChange = (order) => {
    onSortChange(order);
    setOpenSelect(false);
  };


  return (   
    <>
<button id="dropdownDefaultButton" onClick={handleClick} data-dropdown-toggle="dropdown" className="text-white w-40 font-medium rounded-md text-sm px-8 py-2.5 text-center inline-flex items-center bg-transparent hover:bg-gray-600 border border-solid " type="button">Destacados<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>

<div id="dropdown" className={`z-10 ${openSelect? 'block' : 'hidden'} divide-y divide-gray-100 rounded-md shadow w-40 bg-transparent border border-collapse`}>
    <ul className="py-2 text-[13px] text-gray-20" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="# " onClick={() => handleSortChange('asc')}  className="block px-3 py-1  hover:bg-gray-600 hover:text-white">Precio Menor a Mayor</a>
      </li>
      <li>
        <a href="#" onClick={() => handleSortChange('desc')}  className="block px-3 py-1  hover:bg-gray-600 hover:text-white">Precio Mayor a Menor</a>
      </li>
    </ul>
</div>

  </>
  );
}
