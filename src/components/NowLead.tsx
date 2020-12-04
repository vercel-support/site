const NowLead = ({ lastUpdated }) => {
  return (
    <p>
      <span className="block">
        This is a{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://nownownow.com/about"
        >
          Now
        </a>{" "}
        page.
      </span>
      <span className="block">Last updated on {lastUpdated}.</span>
    </p>
  );
};

export default NowLead;
