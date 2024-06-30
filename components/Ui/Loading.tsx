const Loading = () => {
  return (
    <svg
      version="1.1"
      id="L5"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 50 50"
      enable-background="new 0 0 0 0"
      style={{
        width: "50px",
        height: "50px",
        paddingLeft: "15px",
        marginTop: "-50px",
      }}
    >
      <circle fill="#fff" stroke="none" cx="3" cy="25" r="3">
        <animateTransform
          attributeName="transform"
          dur="1s"
          type="translate"
          values="0 7; 0 -7; 0 7"
          repeatCount="indefinite"
          begin="0.1"
        />
      </circle>
      <circle fill="#fff" stroke="none" cx="15" cy="25" r="3">
        <animateTransform
          attributeName="transform"
          dur="1s"
          type="translate"
          values="0 5; 0 -5; 0 5"
          repeatCount="indefinite"
          begin="0.2"
        />
      </circle>
      <circle fill="#fff" stroke="none" cx="27" cy="25" r="3">
        <animateTransform
          attributeName="transform"
          dur="1s"
          type="translate"
          values="0 2; 0 -2; 0 2"
          repeatCount="indefinite"
          begin="0.3"
        />
      </circle>
    </svg>
  );
};
export default Loading;
