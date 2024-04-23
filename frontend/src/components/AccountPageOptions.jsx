/* eslint-disable react/prop-types */
const AccountPageOptions = ({ Icon, title }) => {
  return (
    <div>
      <div className=" flex items-center space-x-1 px-1 py-2 hover:bg-Secondary-900 hover:transition-colors hover:ease-linear duration-300 delay-75 hover:cursor-pointer rounded tracking-normal font-Gotham-Light">
        <Icon sx={{
            fontSize:"1.8rem",
        }}  />
        <p>{title}</p>
      </div>
    </div>
  );
};

export default AccountPageOptions;
