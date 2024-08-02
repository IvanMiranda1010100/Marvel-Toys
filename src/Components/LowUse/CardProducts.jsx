import { Link } from 'react-router-dom';

export const CardProduct = ({ image, Description, price, cents, name, id }) => {
  return (
    <>
      <Link to={`/dashboard/Productos/${name}`}>
        <div class="m-4 max-w-sm lg:h-[450px] bg-gray-800 border border-gray-600 rounded-lg shadow">
          <a className="flex justify-center" href="#">
            <img
              className="p-6 rounded-t-lg object-cover h-[300px]"
              src={image}
              alt={Description}
            />
          </a>
          <div className="px-4 pb-5">
            <a href="#">
              <h5 className="pb-1 text-sm lg:text-xl font-semibold tracking-tight text-white text-opacity-80 ">
                {name}
              </h5>
            </a>
            <div className="flex items-center justify-between">
              <aside className="flex gap-x-1">
                <span className="lg:text-[27px] text-xl font-medium text-white ">
                  {price ? price : "-"}
                </span>
                {cents !== undefined && (
                  <span className="lg:text-lg text-sm text-white m-0 mb-2 mr-3">
                    {cents}
                  </span>
                )}
              </aside>
              <a
                href="#"
                className="text-white boton focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              >
                Añadir
              </a>
            </div>
          </div>
        </div>
      </Link>

      <style jsx>
        {`
          @media (min-width: 768px) and (max-width: 820px) {
            .boton {
              padding-left: 10px;
              padding-right: 10px;
              font-size: 12px;
            }
          }
        `}
      </style>
    </>
  );
};
