const Loader = (props) => {
  return (
    <>
        <svg className={props.className} width="20" height="20" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="75" cy="75" r="72" stroke="url(#paint0_linear_84_2016)" strokeWidth="8"/>
            <defs>
                <linearGradient id="paint0_linear_84_2016" x1="75" y1="-1.56306e-08" x2="74.4755" y2="150" gradientUnits="userSpaceOnUse">
                    {/*<stop/>*/}
                    {/*<stop offset="1" stop-opacity="0"/>*/}

                    <stop stopColor="#CCCCCC" stopOpacity="0.9"/>
                    <stop offset="0.09375" stopColor="#CCCCCC" stopOpacity="0.90625"/>
                    <stop offset="1" stopOpacity="0"/>
                </linearGradient>
            </defs>
        </svg>
    </>
  );
};

export default Loader;
