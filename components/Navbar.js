import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimateSharedLayout } from "framer-motion";
import { useKBar } from "kbar";

export default function Navbar() {
  const router = useRouter();
  const pages = ["About", "Projects", "Setup"];
  const [hovered, setHovered] = useState("");
  const { query } = useKBar();

  return (
    <AnimateSharedLayout>
      <header className="site-header">
        <div className="nav-secondary">
          <Link href="/">
            <button className="btn-header btn-cmd btn-transparent">
              <i className="ri-home-2-line" />
            </button>
          </Link>
        </div>

        <nav className="site-nav">
          <ul>
            {pages.map((page) => {
              const path = `/${page.toLowerCase()}`;
              const isHovered = hovered === page;

              return (
                <li key={page}>
                  <Link href={path}>
                    <a>
                      <motion.span
                        onHoverStart={() => setHovered(page)}
                        onHoverEnd={() => setHovered("")}
                        className={router.pathname == path ? "nav-active" : ""}
                      >
                        {isHovered && (
                          <motion.span
                            className="nav-hovered"
                            layoutId="nav"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          />
                        )}
                        {page}
                      </motion.span>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="nav-secondary">
          <button
            type="button"
            aria-label="Command"
            className="btn-header btn-cmd btn-transparent"
            onClick={query.toggle}
          >
            <i className="ri-command-line" />
          </button>
        </div>
      </header>
    </AnimateSharedLayout>
  );
}
