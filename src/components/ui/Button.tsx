type ButtonType = {
  children: String;
};

export const PrimaryButton = ({ children }: ButtonType) => {
  return (
    <button className="css-button-shadow-border-sliding--black">
      {children}
    </button>
  );
};
export const SecondaryButton = ({ children }: ButtonType) => {
  return (
    <button className="items-center text-secondary inline-flex text-sm font-medium justify-center ml-6 py-3 px-5 text-center capitalize align-middle z-[1] border border-secondary border-solid rounded-md overflow-hidden hover:bg-secondary hover:text-white duration-300 transition-colors ease-in-out">
      {children}
    </button>
  );
};
