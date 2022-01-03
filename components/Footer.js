export default function Footer() {
  const links = [
    {
      title: "Source",
      url: "https://github.com/halafi/filiphalas.com",
      icon: "ri-braces-line",
    },
    {
      title: "GitHub",
      url: "https://github.com/halafi",
      icon: "ri-github-line",
    },
    // {
    //   title: "GitLab",
    //   url: "https://gitlab.com/halafi",
    //   icon: "ri-gitlab-line",
    // },
    {
      title: "linkedin",
      url: "https://www.linkedin.com/in/filip-halas-a7928476/",
      icon: "ri-linkedin-line",
    },
    {
      title: "StackOverflow",
      url: "https://stackoverflow.com/users/4227313/halafi",
      icon: "ri-stack-overflow-line",
    },
  ];

  return (
    <footer className="footer">
      {links.map((link, index) => {
        return (
          <a key={index} href={link.url} target="_blank">
            <span>{link.title}</span>
            <i className={link.icon} />
          </a>
        );
      })}
    </footer>
  );
}
