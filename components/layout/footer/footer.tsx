"use client"
import styles from "./footer.module.css";
import Link from "next/link";
import { Copyright } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ThemeSwitcher from "@/components/theme-switcher/theme-switcher";
import Logo from "@/ui/logo/logo";

export default function Footer() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null;

  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.company}>
          <Logo />
        </div>

        <div className={styles.column}>
          <h1 className={styles.columnTitle}>Company</h1>
          <div className={styles.items}>
            <Link href="https://dalloweil.com" target="_blank">Website</Link>
            <Link href="https://github.com/dalloweil" target="_blank">GitHub</Link>
            <Link href="https://www.linkedin.com/company/dalloweil/?viewAsMember=true" target="_blank">Linkedin</Link>
          </div>
        </div>
        <div className={styles.column}>
          <h1 className={styles.columnTitle}>Nextjs Learn</h1>
          <div className={styles.items}>
            <Link href="https://nextjs.org/learn-pages-router/seo/introduction-to-seo" target="_blank">Search Engine Optmization</Link>
            <Link href="https://nextjs.org/learn-pages-router/seo/web-performance" target="_blank">Web Performance & Core Web Vitals</Link>
            <Link href="https://nextjs.org/learn-pages-router/basics/assets-metadata-css" target="_blank">Assets, Metadata, and CSS</Link>
          </div>
        </div>
        <div className={styles.column}>
          <h1 className={styles.columnTitle}>Nodejs Learn</h1>
          <div className={styles.items}>
            <Link href="https://nodejs.org/en/learn/getting-started/security-best-practices" target="_blank">Security Best Practices</Link>
            <Link href="https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick" target="_blank">The Node.js Event Loop</Link>
            <Link href="https://nodejs.org/en/learn/command-line/how-to-use-the-nodejs-repl" target="_blank">REPL Node.js</Link>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <span><Copyright width={14} /> 2024 Dalloweil, Inc.</span>
        <ThemeSwitcher theme={theme} setTheme={setTheme} /> </div>
    </footer>
  );
}
